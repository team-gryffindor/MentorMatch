FROM node:latest
LABEL maintainer="Julie Jung <myj899@gmail.com>"

# install nodemon and webpack onto container
RUN npm install -g nodemon

WORKDIR /mainServer

# copy our application code
ADD . /mainServer/

# fetch app specific deps
RUN npm install grpc@1.20.2
RUN npm run build

# expose port
EXPOSE 80

# start app
CMD [ "npm",  "run", "server-dev" ]