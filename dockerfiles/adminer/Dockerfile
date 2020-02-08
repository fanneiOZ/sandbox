FROM adminer:4.7.6

USER root

RUN apk update \
    && apk add --no-cache\
        autoconf openssl-dev g++ make \
    && pecl install mongodb-1.5.3 \
    && docker-php-ext-enable mongodb \
    && apk del --purge \
        autoconf openssl-dev g++ make \
    && apk add bash

COPY login-password-less.php /var/www/html/plugins-enabled/

USER adminer
