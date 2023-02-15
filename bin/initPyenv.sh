#!/bin/bash
# This script builds a fresh virtual environment using pyenv with the correct python dependencies
# Requires pyenv
# info here: https://realpython.com/intro-to-pyenv/

REPO_ROOT="$(git rev-parse --show-toplevel)"
ENV_NAME="money-mate"

pyenv install 3.10.6
cd "$REPO_ROOT" && pyenv virtualenv 3.10.6 $ENV_NAME
cd "$REPO_ROOT" && pyenv local $ENV_NAME
pip install flask pymongo pytest lorem


