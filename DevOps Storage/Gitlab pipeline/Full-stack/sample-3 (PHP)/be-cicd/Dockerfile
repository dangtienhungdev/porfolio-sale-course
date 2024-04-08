FROM <image>

# Copy upload.ini to config
COPY uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# Set working directory
WORKDIR /var/www

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www

RUN composer install
RUN composer dump-autoload

RUN chown -R www:www /var/www
# Change current user to www
USER www


# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
