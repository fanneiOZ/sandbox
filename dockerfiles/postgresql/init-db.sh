#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 -U postgres <<-EOSQL
    CREATE USER backend WITH PASSWORD 'backend';
    CREATE DATABASE backend;
    GRANT ALL PRIVILEGES ON DATABASE backend TO backend;
EOSQL