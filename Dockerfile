FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install required packages and additional dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openssh-server gnupg redis-server gcc arduino \
    mariadb-server postgresql apache2 libapache2-mod-wsgi-py3 nginx sudo \
    vim libssl-dev libffi-dev cargo net-tools curl iputils-ping build-essential \
    pkg-config libmariadb-dev-compat libmariadb-dev libpq-dev libxml2-dev python3-dev \
    python3-pip python3-setuptools python3-wheel supervisor postgresql-client && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean

# Set up SSH and security
RUN mkdir /var/run/sshd && \
    echo 'root:root' | chpasswd && \
    sed -i 's/#Port 22/Port 2222/' /etc/ssh/sshd_config && \
    sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/UsePAM yes/UsePAM no/' /etc/ssh/sshd_config

# Create the supervisor configuration directory
RUN mkdir -p /etc/supervisor/conf.d/

# Install Miniconda
RUN curl -fsSL -o Miniconda3-latest-Linux-x86_64.sh https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh && \
    bash Miniconda3-latest-Linux-x86_64.sh -b -p /opt/conda && \
    rm Miniconda3-latest-Linux-x86_64.sh

# Set up the environment variables for Conda
ENV PATH="/opt/conda/bin:$PATH"

# Create Conda environment and install dependencies from conda-forge
RUN /opt/conda/bin/conda create -n atonixenv -y && \
    /opt/conda/bin/conda install -n atonixenv -y -c conda-forge sunpy astropy scipy numpy matplotlib pandas

# Copy requirement files
COPY Workshop/atonixcore/requirements.txt /app/Workshop/atonixcore/requirements.txt
COPY Workshop/Quetzal/requirements.txt /app/Workshop/Quetzal/requirements.txt

# Upgrade pip, setuptools, and wheel
RUN pip install --upgrade pip setuptools wheel

# Install Python packages separately
RUN pip install -r /app/Workshop/atonixcore/requirements.txt
RUN pip install -r /app/Workshop/Quetzal/requirements.txt

# Copy application files
COPY Workshop/atonixcore/manage.py /app/atonixcore/manage.py
COPY Workshop/Quetzal/app.py /app/Quetzal/app.py

# Enable Apache mod_wsgi
RUN a2enmod wsgi


# Copy and run the robotic and HPC setup script
COPY setup_robotech.sh /app/setup_robotech.sh
RUN chmod +x /app/setup_robotech.sh && /app/setup_robotech.sh

# Copy Supervisor configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy the start_services.sh script
COPY start_services.sh /app/start_services.sh
RUN chmod +x /app/start_services.sh

# Expose required ports
EXPOSE 2222 6379 3306 5432 80 8080 59876

# Start services and run the application using Supervisor
CMD ["/app/start_services.sh"]