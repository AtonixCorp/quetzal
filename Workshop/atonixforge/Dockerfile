# Use the official Node.js image from the Docker Hub
FROM node:slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Set the default command to run the application
CMD ["npm", "start"]

