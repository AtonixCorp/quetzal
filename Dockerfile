# Use a compatible Node.js base image
FROM node:20.17.0

# Set the working directory
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@11.0.0

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
