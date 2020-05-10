FROM ubuntu:16.04

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN echo "Node and npm versions"; node -v && npm -v

WORKDIR /app
COPY gulpfile.js package.json package-lock.json ./
RUN npm install
CMD ./node_modules/.bin/gulp watch
