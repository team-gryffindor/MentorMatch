FROM node:latest
LABEL maintainer="myj899@gmail.com"

# install nodemon onto container
RUN npm install -g nodemon

# copy our application code
ADD . /searchService
WORKDIR /searchService

# fetch app specific deps
RUN npm install

# expose port
EXPOSE 2000

# start app
CMD [ "nodemon", "./index.js" ]