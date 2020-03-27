# Setup and build the client
FROM node:10 as client
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

WORKDIR /usr/app/client

RUN npm install -g webpack

COPY react-client/package*.json ./
# RUN npm install -qy
RUN npm install

COPY react-client .

RUN npm build

# Setup the server
FROM node:10

RUN npm install -g nodemon
WORKDIR /usr/app/
COPY --from=client /usr/app/client/dist/ ./client/dist/

WORKDIR /usr/app/server/
COPY server/package*.json ./
# RUN npm install -qy
RUN npm install
COPY server/ .

# expose port
EXPOSE 8080

CMD [ "npm",  "start" ]