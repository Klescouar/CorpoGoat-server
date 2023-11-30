FROM node:18-alpine as base
RUN npm i -g pnpm

FROM base as dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM dependencies as build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm build

FROM base as deploy
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=dependencies /app/node_modules ./node_modules

CMD ["node", "dist/main.js"]
