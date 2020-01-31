FROM debian:jessie

RUN apt-get update \
    && apt-get install -y \
    sudo \
    git \
    wget

RUN useradd -rm -d /home/vagrant -s /bin/bash -G sudo -G www-data -u 1000 vagrant \
    && echo "vagrant ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/vagrant

RUN apt-get install -y \
    nodejs \
    npm

ENV HOME=/home/vagrant

USER vagrant

WORKDIR /vagrant/

ENTRYPOINT ["bash"]