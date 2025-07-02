FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip libzip-dev \
    npm nodejs \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath

# Set working directory
WORKDIR /var/www

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy existing app files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-

RUN php artisan key:generate --show

RUN php artisan config:cache && php artisan view:cache


# Install Node dependencies and build
RUN npm install && npm run build

# Set permissions
RUN chown -R www-data:www-data /var/www

# Expose port
EXPOSE 8000

# Start Laravel server
CMD php artisan serve --host=0.0.0.0 --port=8000
