FROM node:19.2-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run test

RUN rm -rf tests && rm -rf node_modules

RUN npm install --prod

CMD [ "node", "app.js" ]