FROM node:10
LABEL maintainer="Julie Jung <moonyouj889@gmail.com>"

RUN mkdir -p /usr/app
WORKDIR /usr/app
# install nodemon and webpack onto container
RUN npm install -g webpack

# copy our application code
COPY . .

# fetch app specific deps
RUN npm install

# expose port
EXPOSE 3000

# start app
CMD [ "npm",  "start" ]