# Use an official lightweight Node image
FROM node:18-alpine

# Create a working directory inside the container
WORKDIR /app

# Copy your app files into the container
COPY . .

# Expose the application port
EXPOSE 3000

# Start the server when the container runs
CMD ["node", "server.js"]
