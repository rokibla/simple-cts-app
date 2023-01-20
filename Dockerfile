FROM node:18-slim
RUN mkdir /server
WORKDIR /server
ADD server.js  package.json package-lock.json .
RUN npm i --production 
CMD [ "npm", "run", "server.js" ]
