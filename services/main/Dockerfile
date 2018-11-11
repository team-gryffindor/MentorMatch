FROM node:latest
LABEL maintainer="myj899@gmail.com"

# install nodemon onto container
RUN npm install -g nodemon

COPY ./package.json /mainServer/
WORKDIR /mainServer

# fetch app specific deps
RUN npm install

# copy our application code
ADD . /mainServer/app

# expose port
EXPOSE 3000

# start app
CMD [ "npm", "server-dev" ]