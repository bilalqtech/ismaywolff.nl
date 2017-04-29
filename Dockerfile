FROM node:alpine

# create server folder
WORKDIR /server

# copy server files to server root
COPY dist /server
COPY package.json /server

# install unbundled dependencies
RUN npm install

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["node", "index.js"]
