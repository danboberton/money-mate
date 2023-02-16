# Running Shit
## The run script
_bin/run.sh_ is supposed to take care of everything.

You can run it from the repo root ( _.../money-mate/_ ) with `sh bin/run.sh` 
Or `./bin/run.sh`

### Arugments
The run script can take 1 of 3 possible arguments, `dev`, `init` or `stop` to do different things. For instance: `./bin/run.sh init` or `./bin/run.sh dev`

### Run Dev
`./bin/run.sh dev` is what you should use during normal development. By default `./bin/run.sh` does the same thing as `./bin/run.sh dev`
#### What it does:
* Uses webpack to compile all the React and css
* Launch a local web server to host this compiled file
* Launch a web browser to view the page
* Launch the mongo docker container for the database
* Launch the python flask restful API back end

### Run Init
If you clone this repo fresh, you should run this script first with `./bin/run.sh init` It checks for dependencies and downloads any that are missing.
#### What it does:
* Installs npm dependencies using `npm install`
* Checks for docker
* Checks for python
* Pulls needed docker images
* Installs python dependencies

### Run Stop
`./bin/run.sh stop` This will find and stop all the processes started in the background from run dev.
#### What it does:
* Finds and stops the hot web server serving our web app
* Finds and stops the flask server running the back end restful API
* Stops the docker container running mongodb

### Logging
The run script logs to `runlog.log`
