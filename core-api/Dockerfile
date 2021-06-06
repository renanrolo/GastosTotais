FROM node:14
EXPOSE 3335

WORKDIR /core-api
COPY package*.json ./
COPY tsconfig.json ./

ENV NODE_ENV=development
RUN npm install -g nodemon && npm install

COPY . .

CMD ["npm", "run", "start:dev"]