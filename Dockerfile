FROM node:lts-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /var/wwww/app

COPY package*.json ./

RUN npm i npm@latest -g

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
