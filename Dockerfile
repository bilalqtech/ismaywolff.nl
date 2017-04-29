FROM node:alpine

# install dependencies
RUN npm install

# build client
RUN npm run build:client

# build server
RUN npm run build:server

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["npm", "start"]
