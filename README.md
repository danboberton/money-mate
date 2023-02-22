# Money-Mate

## Run Scripts 

In the project directory, you can:

</br>


### Initialize The Environment:

##### `./bin/run.sh init`

Installs all required dependencies

</br>

### Start The Development Server:

#### `./bin/run.sh`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Run Tests:

#### `./bin/run.sh test`

Runs the app in the development mode. It runs the Playwright tests and then closes docker/server/client/playwrightreport. 

</br>


### Stop Server/Docker/Client:

#### `./bin/run.sh stop`

Stops all Running services, excluding playwright.


</br>


### Stop Server/Docker/Client/Playwright:

#### `./bin/run.sh stop-playwright`

Stops all Running services.


</br>


### Clean:

#### `./bin/run.sh`

Cleans up app.


