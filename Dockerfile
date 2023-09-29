FROM node:18.18.0-alpine as build

WORKDIR /app

COPY . .

RUN npm i -g pnpm 
RUN pnpm i

CMD ["pnpm", "dev"]

FROM nginx:alpine

