# Install node v10
FROM node:10

WORKDIR /var/www/services

COPY package.json ./

COPY package-lock.json ./


RUN npm ci

COPY . .

# COPY .env.docker ./.env

# RUN npm run build

# Start the application
CMD ["npm", "run", "prod"]