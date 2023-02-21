#!/bin/bash
# run this script from the root of the repo

MONGO_IMAGE="mongo:latest"
REPO_ROOT="$(git rev-parse --show-toplevel)"
LOGGING=1 #true
LOG_LOCATION="runlog.log"
PYTHON_DEPS=('Flask' 'pymongo' 'pytest' 'lorem' 'flask_cors')

FLASK_SERVER_FILE_NAME="main.py"

local_log()
{
  if [ $LOGGING -eq 1 ]; then
    echo "$(date) $1" >> "$REPO_ROOT/$LOG_LOCATION"
  fi
}
print_log(){
  echo "$1"
  local_log "$1"
  }

print_error(){
  echo -e "\033[31;1m$1\033[0m"
  local_log "$1"
  }

print_success(){
  echo -e "\033[92;1m$1\033[0m"
  local_log "$1"
  }

print_header(){
  echo -e "\033[37;1;46m$1\033[0m"
  local_log "$1"
  }

acquire_current_mongo()
{
  echo "Checking for image: $MONGO_IMAGE"
  if [ "$( docker image inspect $MONGO_IMAGE | grep 'Error: No such image:')" != "" ]; then
    print_error "$MONGO_IMAGE not found, pulling..."
    docker pull $MONGO_IMAGE
  else
    print_success "$MONGO_IMAGE found"
  fi
}

check_for_command()
{
  echo "Checking for $1."
  if [ "$( type "$1" )" == "" ]; then
    print_error "$1 not found, please install $1."
    exit 1
  else
    print_success "$1 found"
  fi
}

install_python_deps()
{
  for d in "${PYTHON_DEPS[@]}"; do
    # TODO: Check for plugin before blindly installing?
    print_log "Installing $d"
    pip install "$d"
done
}

# Run arguments
run_dev(){
  print_header "Running Dev"
  print_success "Running Docker compose"
  cd "$REPO_ROOT" && docker compose up &
  print_success "Running flask backend"
  python3 "$REPO_ROOT"/server/src/"$FLASK_SERVER_FILE_NAME" &
  print_success "Running webpack and browser"
  cd "$REPO_ROOT"/client && npm start 


  # TODO: get pids for kills

}

run_test_playwright(){
  #Start Development Env
  print_header "Running Dev"
  print_success "Running Docker compose"
  cd "$REPO_ROOT" && docker compose up -d
  docker_pid=$!

  wait $docker_pid

  print_success "Running flask backend"
  python3 "$REPO_ROOT"/server/src/"$FLASK_SERVER_FILE_NAME" &
  flask_pid=$!

  print_success "Running webpack and browser"
  cd "$REPO_ROOT"/client && npm start &

  #Wait for Docker and Webpack/flask to come up
  while ! curl -s http://localhost:3000 >/dev/null; do
    sleep 1
  done  

  #Run Tests
  print_success "Running Playwright tests"
  cd "$REPO_ROOT"/client && npx playwright test &
  playwright_pid=$!

  #Wait until testing finishes
  wait $playwright_pid

  #Stop Development Env
  print_header "Stopping Dev"
  print_header "Stopping Webpack and Server"
  pids=$(lsof -i :3000 | awk '{if(NR>1)print $2}')

  if [ -n "$pids" ]; then
      kill $pids
  else
      echo "No processes found running on port 3000"
  fi

  #Stop Docker container
  print_success "Stopping docker..."
  cd "$REPO_ROOT" && docker compose down &
  docker_close_pid=$!

  #Wait for Docker container to close
  wait $docker_close_pid

  print_success "Opening Test Report..."
  cd "$REPO_ROOT"/client && npx playwright show-report
}

run_stop_mac(){
  print_header "Stopping Dev"
  print_success "Stopping webpack..."
  pids=$(lsof -i :3000 | awk '{if(NR>1)print $2}')

  if [ -n "$pids" ]; then
    print_success "Found webpack, pid: $pids, killing..."
    kill $pids
  else
    print_error "Webpack pid not found, maybe it wasn't running?"
  fi

  print_success "Stopping docker..."
  cd "$REPO_ROOT" && docker compose down

  print_success "Stopping backend..."
  FLASK_PID=$(pgrep -f "$FLASK_SERVER_FILE_NAME")
  if [ "$FLASK_PID" != "" ] && [ "$FLASK_PID" -gt 0 ]; then
    print_success "Found flask server, pid: $FLASK_PID, killing..."
    kill "$FLASK_PID"
  else
    print_error "Flask pid not found, maybe it wasn't running?"
  fi

  print_success "Stopping playwright report..."
  report_pid=$(lsof -i :9323 | awk '{if(NR>1)print $2}')
  if [ -n "$report_pid" ]; then
    print_success "Found playwright, pid: $report_pid, killing..."
    kill $report_pid
  else
    print_error "Playwright report pid not found, maybe it wasn't running?"
  fi
}
 
run_init(){
  print_header "Running Init"
  print_log "Running npm install."
  cd "$REPO_ROOT"/client && npm install
  check_for_command "docker"
  acquire_current_mongo
  check_for_command "pip"
  check_for_command "python3"
  check_for_command "npm"
  check_for_command "docker"
  print_log "Installing python dependencies."
  install_python_deps

}

run_stop(){
  print_header "Running Stop"
  WEBPACK_PID="$(lsof -t -i:3000)"
  if [[ "$WEBPACK_PID" -ne "" ]] && [[ "$WEBPACK_PID" -gt 0 ]]; then
    print_success "Found webpack, pid: $WEBPACK_PID, killing..."
    kill "$WEBPACK_PID"
  else
    print_error "Webpack pid not found, maybe it wasn't running?"
  fi

  print_success "Stopping docker..."
  cd "$REPO_ROOT" && docker compose down

  print_success "Stopping backend..."
  FLASK_PID=$(pgrep -f "$FLASK_SERVER_FILE_NAME")
  if [ "$FLASK_PID" != "" ] && [ "$FLASK_PID" -gt 0 ]; then
    print_success "Found flask server, pid: $FLASK_PID, killing..."
    kill "$FLASK_PID"
  else
    print_error "Flask pid not found, maybe it wasn't running?"
  fi
}

run_clean(){
  run_stop
  clear
  echo "Cleaning up docker instances"
  docker rm $(docker ps --all -q -f status=exited)
  echo "Removing database folder created by mongodb (sudo)"
  sudo rm -rf "$REPO_ROOT"/database
}


# RUN and parse arguments
if  [ $# -eq 0 ] || [ $1 == "dev" ]; then
  run_dev
elif [ $1 == "init" ]; then
  run_init
elif [ $1 == "stop" ]; then
  run_stop
elif [ $1 == "stop-mac" ]; then
  run_stop_mac
elif [ $1 == "clean" ]; then
  run_clean
elif [ $1 == "test" ]; then
  run_test_playwright
fi

