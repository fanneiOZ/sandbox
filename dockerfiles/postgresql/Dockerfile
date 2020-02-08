FROM postgres:12.1-alpine

RUN apk update \
    && apk add \
    sudo \
    bash

COPY init-db.sh /docker-entrypoint-initdb.d/
