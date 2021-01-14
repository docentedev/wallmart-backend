FROM node:10-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
CMD ["node", "index.js"]

# heroku container:push web -a APP_NAME
# heroku container:release web -a APP_NAME