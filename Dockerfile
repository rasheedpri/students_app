FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copying rest of the application to app directory
COPY . ./

# Expose the port and start the application
Expose 80

CMD ["node", "app.js"]
