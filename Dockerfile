# Step 1: Use the official Nginx image as the base image
FROM nginx:alpine

# Step 2: Copy HTML, CSS, and JavaScript files to Nginx's default directory
COPY . /usr/share/nginx/html

# Step 3: Expose port 80 to be able to access the web server
EXPOSE 80

# Step 4: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
