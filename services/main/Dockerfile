FROM node:latest
LABEL maintainer="myj899@gmail.com"

# install nodemon and webpack onto container
RUN npm install -g nodemon

COPY ./package.json /mainServer/
COPY ./webpack.config.js /mainServer/
COPY ./.env /mainServer/
WORKDIR /mainServer

# fetch app specific deps
RUN npm install

# copy our application code
ADD . /mainServer/
RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD [ "npm", "server-dev" ]