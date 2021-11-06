# cs326-final-team-beta

## Set up the docker for database

install docker [docker](https://docs.docker.com/get-docker/)

In this project, we are using `postgres docker image` for local testing purposes so make
info can be found in [postgres-docker](https://hub.docker.com/_/postgres)

1.  **Create `.env` file**

Config the username, password, and database name for your postgres .

As example here

```
POSTGRES_USER=beta
POSTGRES_PASSWORD=password
POSTGRES_DB =cs326db
```

2. **Create docker container**

Under the root directory run

`docker-compose up` which will create a local docker container in your machine

3. **connect to container shell in commandline if you want to see the database content**

   1. you can either using docker app shell into the CLI or run the following command

   `docker-compose run database bash`

   2. once you are in the bash

   `psql --host=database --username=user --dbname=database`

   as example config would be

   `psql --host=database --username=beta --dbname=cs326db`

   It will prompt to ask password, then you will connect to the postgres database.

4. Delete container

`docker-compose down` will delete the container

## Run server

install `nodemon` if you don't have it installed, this is only for development purposes

install `nodemon` globally on your computer
`npm install -gnodemon`

install the depenpencies

`npm install`

run the server in dev mode which will restart the server whenever we make a change

`npm run start:dev`

otherwise run

`npm start`
