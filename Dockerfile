# base image
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install 

# copy the rest of the application code
COPY . .

# build the application
RUN npm run build

# expose the port the app runs on
EXPOSE 3000

# start the application
CMD ["npm", "start"]

