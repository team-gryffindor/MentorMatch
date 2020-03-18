FROM node:latest
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

# install nodemon and webpack onto container
RUN npm install -g nodemon

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy
# copy our application code
ADD . .

# fetch app specific deps
# RUN npm install grpc@1.20.2

# expose port
EXPOSE 3000

# start app
CMD [ "npm",  "start" ]