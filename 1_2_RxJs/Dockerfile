# Stage 1: Build the application
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build TypeScript files
RUN npx tsc

# Stage 2: Run the application
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Set the command to run the application
CMD ["node", "./dist/index.js", "Poland"]
