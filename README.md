# Configuration by run application


## To initialize the application. 

### Create an `.env` file 

```
NODE_ENV=development

POSTGRES_DATABASE=bossabox
POSTGRES_DATABASE_TEST=bossabox_test
POSTGRES_USER=postgres
POSTGRES_PASS=postgres123

PORT=3000
```

## Working with Postgres on Docker


### Create your Dockerfile with content below

```
FROM postgres:latest

COPY ./scripts/create_db.sh     /docker-entrypoint-initdb.d/10-create_db.sh
```

### Create a personalized image from Postgres

```bash
docker build -t alemanoelsilva/postgres .
```

### Execute to command

```bash
docker run --name alemanoelsilvapostgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres123 -d alemanoelsilva/postgres
```

### Postgres 

#### To conect with Docker 

```bash
docker exec -it alemanoelsilvapostgres bash

psql -h localhost -U postgres -W

# password required
```

#### How to change of database by line comand

```
\l --> to list of databases
\c database_name --> to change of database
\d --> to list of tables
```
