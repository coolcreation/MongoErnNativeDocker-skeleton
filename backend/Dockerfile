# backend/Dockerfile
# Use a more specific base image and consider using a non-root user
FROM node:18-bullseye-slim

WORKDIR /app

# Copy only the package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install mongosh
# Add MongoDB repository
RUN apt-get update && \
    apt-get install -y gnupg wget && \
    wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add - && \
    echo "deb http://repo.mongodb.org/apt/debian bullseye/mongodb-org/7.0 main" > /etc/apt/sources.list.d/mongodb-org-7.0.list && \
    apt-get update && \
    apt-get install -y mongodb-mongosh && \
    rm -rf /var/lib/apt/lists/*

# Expose the port the backend is running on
EXPOSE 8000

# Command to start the backend
CMD [ "npm", "start" ]
