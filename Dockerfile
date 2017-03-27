FROM node:alpine

# create app folder
WORKDIR /app

# copy server files to app root
COPY server /app

# move dist files to public folder
COPY dist /app/public

# install dependencies
RUN npm install

EXPOSE 80
CMD ["node", "index.js"]
