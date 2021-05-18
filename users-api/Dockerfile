FROM node:14

# Copy everything to root folder
COPY . .

# Install all node dependencies
RUN npm i

# start application
CMD ["npm", "run", "start:dev"]

# It's good to informe the port the application will
EXPOSE 3334