FROM node:latest
LABEL maintainer="Julie Jung <myj899@gmail.com>"

# install nodemon and webpack onto container
RUN npm install -g nodemon

WORKDIR /mainServer

# copy our application code
ADD . /mainServer/

# fetch app specific deps
RUN npm install
RUN npm run build

# expose port
EXPOSE 3000

# start app
CMD [ "npm",  "run", "server-dev" ]