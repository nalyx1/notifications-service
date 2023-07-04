FROM node:20-slim

WORKDIR /home/node/app

RUN npm i -g pnpm

CMD [ "tail", "-f", "/dev/null" ]