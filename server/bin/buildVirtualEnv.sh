#!/bin/bash

# build virtual environment
python3 -m venv venv

# init virtual env
. venv/bin/activate

# install deps
pip install pandas mariadb pyyaml Flask
