# The official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install additional dependencies
RUN npm install -g @angular/cli
RUN npm install @angular/cdk
RUN npm install @angular/material
RUN npm install @angular/flex-layout@latest

# Copy the rest of the application code
COPY . .

# Expose port 4200
EXPOSE 4200

# Start the Angular app using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
