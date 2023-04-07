FROM node:latest  

WORKDIR /app

COPY *.json /app

RUN apt-get -y update

RUN apt-get -y install git

RUN npm install

COPY . /app

CMD ["npm", "start"]