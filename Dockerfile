FROM node:alpine

# create server folder
WORKDIR /server

# copy server files to server root
COPY dist /server

# expose port 80 for incoming requests
EXPOSE 80

# start the server
CMD ["node", "index.js"]
