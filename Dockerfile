# Run on travis before docker build:
# yarn install
# NODE_ENV=production include_all_other_env_variables webpack -p --bail

FROM node:alpine

# install the webserver
RUN npm install express

# copy required files
COPY app.js dist /

EXPOSE 80
CMD ["node", "app.js"]
