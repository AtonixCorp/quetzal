# Use an official Python runtime as a parent image
FROM continuumio/miniconda3

# Set the working directory in the container
WORKDIR /app

# Copy the environment.yml file
COPY Workshop/environment.yml ./

# Create the environment with Conda
RUN conda env create -f environment.yml

# Make RUN commands use the new environment
SHELL ["conda", "run", "-n", "atonixcorpcloud", "/bin/bash", "-c"]

# Copy the requirements.txt file
COPY Workshop/AtonixCorp/requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application code
COPY Workshop/AtonixCorp ./

# Expose the port the app runs on
EXPOSE 8000

# Define environment variable
ENV NAME=AtonixCorp

# Run the application
CMD ["conda", "run", "-n", "atonixcorpcloud", "bash", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:58973"]

