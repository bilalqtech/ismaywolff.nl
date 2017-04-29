FROM node:alpine

# install yarn
RUN npm install -g yarn

# install dependencies
RUN yarn

# build client
RUN yarn run build:client

# build server
RUN yarn run build:server

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["yarn", "start"]
