# Use an updated version of Node.js
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD [ "yarn", "dev" ]
