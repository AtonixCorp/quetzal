# Use the official Python image from the Docker Hub
FROM python:3.9.20-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Copy the local cache into the container
COPY ~/.cache/pip /root/.cache/pip

# Install the dependencies
RUN pip install --no-cache-dir --default-timeout=1000 -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Command to run the application
CMD ["python", "app.py", "manage.py" ]
