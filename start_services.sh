#!/bin/bash

# Start SSH
service ssh start

# Start Nginx
service nginx start

# Start Apache
service apache2 start

# Start Redis
service redis-server start

# Start Supervisor
/usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf

# Run the application
python3 /app/atonixcore/manage.py runserver &
python3 /app/Quetzal/app.py