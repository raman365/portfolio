# Use x86 Node.js image for compatibility with AWS EC2 Free Tier (x86)
FROM --platform=linux/amd64 node:18-alpine AS build  

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use x86 Nginx image for serving the React app
FROM --platform=linux/amd64 nginx:1.21.0-alpine  

# Copy build output to Nginx directory
COPY --from=build /app/build /usr/share/nginx/html  

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
