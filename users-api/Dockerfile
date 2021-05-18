FROM node:14


COPY . .
RUN npm i



#WORKDIR /usr/src/app/users-api
# COPY package.json tsconfig.json ormconfig.json ./
# COPY src/ src/
# RUN npm i
#RUN npm run build

CMD ["npm", "run", "start:dev"]

EXPOSE 3334

# FROM node:14
# WORKDIR /usr/src/app/users-api
# COPY package.json tsconfig.json ormconfig.json ./
# RUN npm install
# COPY . /usr/src/app/users-api
# CMD ["npm", "run", "start:dev"]
# EXPOSE 3334
