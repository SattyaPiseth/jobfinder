#!/bin/bash
# Ensure the script fails if any command fails
set -e

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

# Build and tag the Docker image
echo "Building and tagging the Docker image..."
docker-compose build
docker tag ${REPOSITORY}:${TAG}

# Push the Docker image
echo "Pushing image to Docker Hub..."
docker push ${REPOSITORY}:${TAG}
