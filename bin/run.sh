#!/bin/bash
# run this script from the root of the repo

MONGO_IMAGE="mongo:latest"

check_docker_container_running
{
  echo "Checking for "
}

acquire_current_mongo()
{
  echo "Checking for latest mongo Docker image: $MONGO_IMAGE"
  if [ "$( docker image inspect $MONGO_IMAGE | grep 'Error: No such image:')" != "" ]; then
    echo "$MONGO_IMAGE not found, pulling..."
    docker pull $MONGO_IMAGE
  else
    echo "$MONGO_IMAGE found."
  fi
}

check_for_docker()
{
  echo "Checking for docker."
  if [ "$( type docker )" != "" ]; then
    echo "docker not found, please install docker."
    exit 1
  else
    echo "docker found"
  fi
}


# RUN
echo "Running $0"
check_for_docker
acquire_current_mongo
#cd client && npm run dev