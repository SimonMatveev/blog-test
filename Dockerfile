FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
COPY serve.json ./dist
EXPOSE 3000

CMD [ "serve","./dist" ]
