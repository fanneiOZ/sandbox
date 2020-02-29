FROM nginx:alpine

RUN mkdir -p /var/www/root

RUN apk add \
  bash \
  busybox-extras 

WORKDIR /var/www/root

COPY nginx.conf /etc/nginx/nginx.conf
