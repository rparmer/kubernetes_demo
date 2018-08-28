FROM node:8.11-alpine
EXPOSE 8080
COPY app/package*.json app/server.js ./
RUN npm install
CMD node server.js
