FROM node:latest
LABEL maintainer="myj899@gmail.com"

# install nodemon onto container
RUN npm install -g nodemon

COPY ./package.json /searchService/
WORKDIR /searchService

# fetch app specific deps
RUN npm install
# ENV PATH /searchService/node_modules/.bin:$PATH

# copy our application code
ADD . /searchService/app

# expose port
EXPOSE 2000

# start app
CMD [ "npm", "search-dev" ]