FROM node:alpine

# create app folder and move to it
WORKDIR /app

# copy server files
COPY server/index.js /app
COPY server/package.json /app

# create app/public folder and move to it
WORKDIR /app/public

# move dist files to public folder
COPY dist /app/public

# move back to /app
WORKDIR /app

# install dependencies
RUN npm install

EXPOSE 80
CMD ["node", "index.js"]
