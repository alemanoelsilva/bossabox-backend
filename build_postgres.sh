#!/bin/bash

docker build -t alemanoelsilva/postgres ./scripts

docker run --name alemanoelsilva_postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres123 -d alemanoelsilva/postgres

