# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements files into the container
COPY Workshop/atonixcore/requirements.txt /app/Workshop/atonixcore/requirements.txt
COPY Workshop/environments/requirements.txt /app/Workshop/environments/requirements.txt

# Install the Python dependencies
RUN pip install --upgrade pip && \
    pip install -r /app/Workshop/atonixcore/requirements.txt && \
    pip install -r /app/Workshop/environments/requirements.txt

# Copy the rest of the application code
COPY Workshop/atonixcore /app/atonixcore
COPY Workshop/environments /app/environments

# Expose the port the application runs on
EXPOSE 8082

# Set the command to run Gunicorn with the WSGI application
CMD ["gunicorn", "--workers", "3", "app.py", "manage.py", "runserver",  "--bind", "0.0.0.0:8082", "atonixcore.wsgi:application"]

