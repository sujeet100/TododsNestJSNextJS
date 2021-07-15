FROM node:12 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
CMD ["npm", "run", "start:prod"]