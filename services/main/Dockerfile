# Setup and build the client
FROM node:latest as client
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

WORKDIR /usr/app/client

RUN npm install -g webpack

COPY package*.json ./
RUN npm install -qy

COPY react-client .

RUN npm start

# Setup the server
FROM node:latest

RUN npm install -g nodemon
WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install -qy
COPY server/ .

# expose port
EXPOSE 8080

CMD [ "npm",  "start" ]