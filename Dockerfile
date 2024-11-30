# Stage 1: Build React application
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application source code
COPY . .

# Build the React application
RUN yarn build

# Stage 2: Serve with NGINX
FROM nginx:1.25-alpine

# Remove default NGINX static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom NGINX configuration (optional, adjust as needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the container port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
