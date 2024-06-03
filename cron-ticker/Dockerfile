FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node:19.2-alpine3.16 as prod
WORKDIR /app
COPY package.json ./
RUN npm install --prod

FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod /app/node_modules ./node_modules
COPY app.js ./
COPY tasks ./tasks
CMD [ "node", "app.js" ]
