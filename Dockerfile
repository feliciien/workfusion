FROM php:7.4-fpm-alpine

# Install necessary packages
RUN apk add --no-cache nginx wget nodejs npm

# Create directories for nginx
RUN mkdir -p /run/nginx

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Set the working directory
WORKDIR /app

# Copy the application files
COPY . .

# Install Composer and PHP dependencies
RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"
RUN composer install --no-dev

# Install Yarn and Node.js dependencies
RUN npm install -g yarn
RUN yarn install
RUN yarn dev

# Ensure proper ownership of application files
RUN chown -R www-data: /app

# Expose port 80
EXPOSE 80

# Copy the startup script and set execution permissions
COPY docker/startup.sh /app/docker/startup.sh
RUN chmod +x /app/docker/startup.sh

# Command to run the startup script
CMD sh /app/docker/startup.sh