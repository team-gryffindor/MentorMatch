FROM node:10
LABEL maintainer="Julie Jung <myj899@gmail.com>"

# install nodemon onto container
RUN npm install -g nodemon

# COPY ./package.json /searchService/
WORKDIR /searchService

# copy our application code
ADD . /searchService/
# fetch app specific deps
RUN npm install

# expose port
EXPOSE 2000

# start app
CMD [ "npm", "start"]
# CMD ["nodemon", "index.js"]