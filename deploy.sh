#!/bin/bash

# Deploy script for Cloudflare Pages
# This script handles interactive prompts for deploying to newmindmadiun

cd /Users/pvegananda/Dev/05-Workspaces/02-Templates/html/MieNewMind-2

echo "🚀 Deploying Mie Newmind to Cloudflare Pages..."
echo "Project: newmindmadiun"
echo "Branch: main"
echo ""

# Try to deploy with echo pipe for interactive prompts
(echo "main"; sleep 2) | wrangler pages deploy . --project-name newmindmadiun

echo ""
echo "✅ Deployment initiated!"
echo "Check status at: https://dash.cloudflare.com"
