FROM node:10
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

# install nodemon and webpack onto container
RUN npm install -g nodemon
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./

# fetch app specific deps
# RUN npm install grpc@1.20.2
RUN npm ci -qy

# copy our application code
COPY . .

# expose port
EXPOSE 80

# start app
CMD [ "npm",  "start" ]