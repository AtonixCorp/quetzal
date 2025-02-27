#!/bin/bash

# Start SSH service
service ssh start

# Start Redis server
service redis-server start

# Start MariaDB server
service mysql start

# Start PostgreSQL server
service postgresql start

# Start Apache server
#service apache2 start

# Start Nginx server
service nginx start

# Start Jupyter Notebook and JupyterLab
jupyter notebook --ip=0.0.0.0 --port=8888 --no-browser --allow-root &
jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root &

# Start the Python application
python /app/Workshop/Quetzal/app.py

# Keep the container running
tail -f /dev/null