#!/bin/bash

# Navigate to your project directory
# cd C:\Users\ASUS\Desktop\job-finder-website || exit

# Prompt the user for a branch name
echo "Enter branch name (e.g., feature/user-authentication): "
read branchName

# Prompt the user for a commit message
echo "Enter commit message: "
read commitMessage

# Create and switch to the new branch
git checkout -b $branchName

# Stage all changes
git add .

# Commit the changes with the user-provided message
git commit -m "$commitMessage"

# Push the changes to the remote repository
git push origin $branchName
