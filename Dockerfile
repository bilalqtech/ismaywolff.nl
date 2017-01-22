FROM node:alpine

# install the webserver
RUN npm install express

# copy required files
COPY server/index.js dist /

EXPOSE 80

CMD ["node", "index.js"]
