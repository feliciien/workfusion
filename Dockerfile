# Use the PHP 7.4 FPM Alpine image as the base image
FROM php:7.4-fpm-alpine

# Install necessary packages
RUN apk add --no-cache nginx wget nodejs npm bash

# Create the directory for Nginx and run directories
RUN mkdir -p /run/nginx /var/log/nginx

# Copy the Nginx configuration file into the container
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Set the working directory
WORKDIR /app

# Copy the application code into the container
COPY . .

# Install Composer and set up PHP dependencies
RUN wget http://getcomposer.org/composer.phar && \
    chmod a+x composer.phar && \
    mv composer.phar /usr/local/bin/composer && \
    composer install --no-dev --optimize-autoloader

# Install Yarn and set up JavaScript dependencies
RUN npm install -g yarn && \
    yarn install && \
    yarn build

# Change ownership of the application directory
RUN chown -R www-data:www-data /app

# Copy the startup script and make it executable
COPY docker/startup.sh /app/docker/startup.sh
RUN chmod +x /app/docker/startup.sh

# Expose the ports for Nginx and PHP-FPM
EXPOSE 80 8080

# Define the entry point for the container
ENTRYPOINT ["/app/docker/startup.sh"]

# Ensure that the container runs as expected
CMD ["php-fpm"]