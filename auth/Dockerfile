FROM node:10

WORKDIR /usr/src/app/api

COPY package*.json ./usr/src/app/api
# COPY ormconfig.json ./usr/src/app/api

RUN npm install

EXPOSE 3334

CMD ["npm", "run", "start:dev"]