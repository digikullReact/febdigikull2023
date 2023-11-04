FROM node:21-alpine3.17
WORKDIR /app
ADD package*.json ./
COPY . .
RUN npm install
CMD [ "node" ,"server.js" ]