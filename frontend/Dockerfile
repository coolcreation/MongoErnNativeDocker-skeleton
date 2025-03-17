# Use a Node.js base image
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install the 'serve' package globally
#RUN npm install -g serve

# Expose the port the frontend will run on
EXPOSE 5173

# Command to start the frontend using 'serve'
# CMD [ "serve", "-s", "build", "-p", "5173" ]
CMD [ "npm", "run", "dev" ]