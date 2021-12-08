# Set up the project



1. We are using ==docker== to generate a local Postgres Database.

2. Pg-promise for connecting database



## Set up the docker for database



### Install  [Docker](https://docs.docker.com/get-docker/)

In this project, we are using `postgres docker image` for local testing purposes so make sure you have docker installed. 

> Info can be found in [postgres-docker](https://hub.docker.com/_/postgres) 

### **Create `.env` file**

Config the username, password, and database name for your postgres .

As example here

```
POSTGRES_USER=beta
POSTGRES_PASSWORD=password
POSTGRES_DB =cs326db
```

### **Create docker container**

0. **Create container** 

   Under the root directory run

   ####  `docker-compose up` 

   which will create a local docker container in your machine

   

1. **connect to container shell in command line if you want to see the database content**

   

   1. you can either using docker app shell into the CLI or run the following command

      #### 	`docker-compose run database bash`

      

   2. once you are in the bash

      ```shell
      //format
      psql --host=database --username=user --dbname=database
      
      //example 
      psql --host=database --username=beta --dbname=cs326db
      ```

   It will prompt to ask password, then you will connect to the postgres database.

   

2. **Delete container**

   

   #### `docker-compose down` 

   will delete the container
   
   

## Run server



#### install `nodemon` if you don't have it installed, this is only for development purposes



`npm install -g nodemon`



#### install the dependencies



`npm install`



#### Run server 



In dev mode which will restart the server whenever we make a change

`npm run start:dev`



Run the server without hot development

`npm start`



> Visit localhost:3000 you are good to go :fireworks:



