# Dependencies:
FROM node:20-bullseye as dependencies

WORKDIR /usr/app

COPY ./package*.json ./
RUN yarn install

# Build:
FROM node:20-bullseye as builder

WORKDIR /usr/app
COPY . .
COPY --from=dependencies /usr/app/node_modules ./node_modules
RUN yarn build

# Entrypoint:
FROM node:20-bullseye as runner

WORKDIR /usr/app
ENV NODE_ENV=production

COPY --from=builder /usr/app/next.config.js ./
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]