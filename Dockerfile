FROM node:alpine

# create server folder
WORKDIR /server

# copy all source files to server root
COPY . /server

# install unbundled dependencies
RUN npm install

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["npm", "start"]
