FROM node:lts-alpine3.10
WORKDIR /app
COPY package.json .
RUN npm install pm2 -g
COPY index.js .

ENV NODE_ENV=production
CMD ["pm2-runtime", "app.js"]

# heroku container:push web -a young-reef-62489
# heroku container:release web -a young-reef-62489