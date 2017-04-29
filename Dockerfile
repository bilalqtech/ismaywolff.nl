FROM node:alpine

# create server folder
WORKDIR /server

# copy source
COPY . /server

# install unbundled dependencies and build
RUN npm install
RUN npm run build:client
RUN npm run build:server

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["npm", "start"]
