FROM node:17.4 as builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM node:alpine

COPY --from=builder app/build ./
COPY --from=builder app/package*.json ./

RUN npm ci --prod

ENV PORT=8080

EXPOSE 8080

CMD [ "node", "main.js" ]