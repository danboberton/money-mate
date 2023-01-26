#!/bin/bash
# run this script from the root of the repo

MONGO_IMAGE="mongo:latest"
REPO_ROOT="$(git rev-parse --show-toplevel)"
LOGGING=1
LOG_LOCATION="runlog.log"

local_log()
{
  if [ $LOGGING -eq 1 ]; then
    echo "$(date) $1" >> $REPO_ROOT/$LOG_LOCATION
  fi
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

check_docker_container_running()
{
  # TODO
  echo "Checking param $1 "
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

check_for_docker()
{
  echo "Checking for docker."
  if [ "$( type docker )" == "" ]; then
    print_error "docker not found, please install docker."
    exit 1
  else
    print_success "docker found"
  fi
}

# Run arguments
run_dev(){
  print_header "Running Dev"
  check_docker_container_running $MONGO_IMAGE
  cd $REPO_ROOT/client && npm run dev
  # TODO: run backend server
  # get pids
}

run_init(){
  print_header "Running Init"
  check_for_docker
  acquire_current_mongo
}

run_stop(){
  print_header "Stopping"
  # TODO:
  # Stop docker database container
  # Stop backend
  # Stop npm run server
}


# RUN
if  [ $# -eq 0 ] || [ $1 == "dev" ]; then
  run_dev
elif [ $1 == "init" ]; then
  run_init
elif [ $1 == "stop" ]; then
  run_stop
fi

