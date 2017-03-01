FROM node:alpine

# install the webserver and related modules
RUN npm install express@4
RUN npm install mime-types@2

# copy required files
COPY server/index.js dist /

EXPOSE 80

CMD ["node", "index.js"]
