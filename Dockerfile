FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

VOLUME ["/usr/src/app/node_modules"]

CMD ["npm", "run", "start:dev"]
