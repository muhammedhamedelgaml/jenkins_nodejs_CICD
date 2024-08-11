FROM node:16.13.0 
WORKDIR /app 
COPY package.json .
COPY . .
EXPOSE 4000
RUN npm install
CMD [ "npm" ,"start"]
