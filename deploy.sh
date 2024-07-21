#!/bin/bash
# Ensure the script fails if any command fails
set -e

# Generate a unique container name based on timestamp
CONTAINER_NAME="my_container_$(date +%s)"

# Prompt the user for Docker Hub credentials
read -p "Enter your Docker Hub username: " USERNAME
read -sp "Enter your Docker Hub password: " PASSWORD
echo

# Prompt for Docker repository and tag
read -p "Enter the Docker repository name (e.g., username/repository): " REPOSITORY
read -p "Enter the tag for your Docker image (e.g., latest, 1.0): " TAG

# Log in to Docker Hub
echo "Logging into Docker Hub..."
echo $PASSWORD | docker login -u "$USERNAME" --password-stdin

# Set and export the environment variables for Docker Compose
export REPOSITORY
export TAG

# Build the Docker image using Docker Compose
echo "Building the Docker image..."
docker compose build

# Push the Docker image
echo "Pushing image to Docker Hub..."
docker push $REPOSITORY:$TAG

# Function to check if a port is in use
function is_port_in_use() {
    lsof -i:$1 > /dev/null
}

# Function to stop any container using the specified port
function stop_container_using_port() {
    local PORT=$1
    local CONTAINER_ID=$(lsof -i:$PORT -t)
    if [ ! -z "$CONTAINER_ID" ]; then
        echo "Stopping container using port $PORT (Container ID: $CONTAINER_ID)..."
        docker stop $CONTAINER_ID
        docker rm $CONTAINER_ID
    fi
}

# Check if port 8086 is in use and stop the container using it if necessary
PORT=8086
if is_port_in_use $PORT; then
    stop_container_using_port $PORT
fi

# Run the Docker container
echo "Running the Docker container..."
docker run -d -p 8086:80 --name $CONTAINER_NAME $REPOSITORY:$TAG
