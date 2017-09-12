FROM  mhart/alpine-node-auto:latest
COPY . /var/www
RUN cd /var/www; yarn install; ls;
WORKDIR /var/www
CMD yarn start