# Use official Node.js image from the Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the app
CMD ["node", "server.js"]
