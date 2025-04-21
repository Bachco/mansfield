# Stage 1: Build the application
FROM node:21-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

# Stage 2: Run the application
FROM node:21-alpine

WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app ./

# Set environment variables for production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Use a process manager like PM2 to run the application
RUN npm install -g pm2

CMD ["pm2-runtime", "start", "npm", "--", "start"]


# # Stage 1: Build the application
# FROM node:21 AS builder

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm install --production

# COPY . .
# RUN npm run build

# # Stage 2: Run the application
# FROM node:21-slim

# WORKDIR /usr/src/app

# COPY --from=builder /usr/src/app ./

# EXPOSE 3000

# CMD ["npm", "run", "dev"]