#!/bin/bash
set -e

POSTGRES="psql --username postgres"

echo "Creating database bossaBox"

$POSTGRES <<EOSQL
CREATE DATABASE bossabox OWNER postgres;
EOSQL

echo "Creating database bossaBox_test"

$POSTGRES <<EOSQL
CREATE DATABASE bossaBox_test OWNER postgres;
EOSQL
