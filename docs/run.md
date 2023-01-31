# Running Shit

## The run script

_bin/run.sh_ is supposed to take care of everything.

You can run it from the repo root ( _.../homeapp/_ ) with `sh bin/run.sh` 
Or `./bin/run.sh`

### Arugments
The run script can take 3 arguments, `dev`, `init` or `stop` to do different things. For instance: `./bin/run.sh init` or `./bin/run.sh dev`

### Run Dev
`./bin/run.sh dev` is what you should use during normal development. By default `./bin/run.sh` does the same thing as `./bin/run.sh dev`
#### What it does:
* Uses webpack to compile all the React and css
* Launch a local web server to host this compiled file
* Launch a web browser to view the page
* Launch the mongo docker container for the database
* Launch the python flask restful API back end

### Run Init
If you clone this repo new, you should run this script first with `./bin/run.sh init` It checks for dependencies and downloads any that are missing.
#### What is does:
* Installs npm dependencies using `npm install`
* Checks for docker
* Pulls needed docker images
* Installs python dependencies
