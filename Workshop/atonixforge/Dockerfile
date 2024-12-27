
FROM node:16.3.0-alpine3.11

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


RUN npm install -g serve


EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "3000"]