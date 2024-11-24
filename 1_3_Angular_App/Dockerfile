# The official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@10.9.1

# Install additional dependencies
RUN npm install -g @angular/cli
RUN npm install @angular/cdk --legacy-peer-deps
RUN npm install @angular/material --legacy-peer-deps
RUN npm install @angular/flex-layout@latest --legacy-peer-deps
RUN npm install @angular/common@latest @angular/core@latest --legacy-peer-deps
RUN npm install ngx-infinite-scroll --legacy-peer-deps


# Copy the rest of the application code
COPY . .

# Expose port 4200
EXPOSE 4200

# Start the Angular app using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
