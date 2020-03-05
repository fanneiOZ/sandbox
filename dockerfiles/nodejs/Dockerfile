FROM node:13-alpine

RUN apk update \
  && apk add \
  sudo \
  git \
  bash \
  make

RUN adduser \
  --shell /bin/bash \
  --home /home/vagrant \
  --disabled-password \
  vagrant

WORKDIR /vagrant

RUN chown -hR vagrant /vagrant

ENV HOME=/vagrant

RUN npm install -g gulp-cli @nestjs/cli

USER vagrant

EXPOSE 80 8080 3000

CMD [ "npm", "run", "start:dev:backend", "&&", "npm", "run", "start:dev:admin" ]