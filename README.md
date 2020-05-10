# Fspx2019
Web page of the physicist spex. This fork is for Docker exercise on course https://devopswithdocker.com/. Idea in this is to move sass -> css compilation and refreshing browser automatically to docker container. Don't know if this is very beneficial but this is just excercise.

## Requirements
node, npm

## Developing
Browser-sync and gulp are used in development. Run `npm install` and then `gulp watch`.

## Use with Docker
´´´
$ docker build -t fspx .
´´´

By default browsersync opens in port 3000. When you edit html or sass files in index folder changed sass is compiled and browser is updated.
´´´
$ docker run -v $(pwd)/index/:/app/index/ -p 3000:3000 fspx
´´´

Image in docker hub https://hub.docker.com/repository/docker/summila/fspx

