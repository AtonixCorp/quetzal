#!/bin/bash

# Update and install basic dependencies
apt-get update && \
apt-get install -y --no-install-recommends \
    lsb-release \
    gnupg2 \
    curl \
    software-properties-common

# Setup sources for ROS
sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | apt-key add -

# Install ROS Noetic
apt-get update && \
apt-get install -y --no-install-recommends \
    ros-noetic-desktop-full

# Setup ROS environment
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc

# Dependencies for building packages
apt-get install -y --no-install-recommends \
    python3-rosdep \
    python3-rosinstall \
    python3-rosinstall-generator \
    python3-wstool \
    build-essential

# Initialize rosdep
rosdep init
rosdep update

# Install OpenCV
apt-get install -y --no-install-recommends \
    libopencv-dev \
    python3-opencv

# Clean up
rm -rf /var/lib/apt/lists/* && \
apt-get clean
