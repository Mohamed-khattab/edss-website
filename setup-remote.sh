#!/bin/bash

# Script to set up and push to remote repository
# Usage: ./setup-remote.sh <remote-url>

if [ -z "$1" ]; then
    echo "Usage: ./setup-remote.sh <remote-url>"
    echo ""
    echo "Examples:"
    echo "  ./setup-remote.sh https://github.com/username/edss-website.git"
    echo "  ./setup-remote.sh git@github.com:username/edss-website.git"
    echo ""
    echo "Or set it up manually:"
    echo "  git remote add origin <your-repo-url>"
    echo "  git push -u origin main"
    exit 1
fi

REMOTE_URL=$1

echo "Setting up remote repository..."
git remote add origin "$REMOTE_URL" 2>/dev/null || git remote set-url origin "$REMOTE_URL"

echo "Pushing to remote..."
git push -u origin main

echo "Done! Your repository is now connected to: $REMOTE_URL"
