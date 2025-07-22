# Use the official Node.js 20 LTS (Iron) slim image as a base
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock files first to leverage Docker's build cache
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the frontend application code into the container
COPY . .

# Expose the port that the Vite dev server will run on
EXPOSE 5173

# The command to start the Vite dev server
# The "-- --host" is crucial to make it accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host"]