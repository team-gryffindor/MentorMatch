FROM node:latest
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

RUN mkdir -p /usr/app
WORKDIR /usr/app
# install nodemon and webpack onto container
RUN npm install -g webpack



COPY package*.json ./
RUN npm ci -qy
# copy our application code
COPY . .

# fetch app specific deps
# RUN npm install grpc@1.20.2

# expose port
EXPOSE 3000

# start app
CMD [ "npm",  "start" ]