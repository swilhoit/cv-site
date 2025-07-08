#!/bin/bash

# Create images directory
mkdir -p scripts/images

# Download stock images from Unsplash (free to use)
# Design images
curl -L "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop" -o scripts/images/design-brand-1.jpg
curl -L "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop" -o scripts/images/design-brand-2.jpg
curl -L "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=1200&h=800&fit=crop" -o scripts/images/design-brand-3.jpg

# Mobile app design images
curl -L "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop" -o scripts/images/mobile-app-1.jpg
curl -L "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop" -o scripts/images/mobile-app-2.jpg
curl -L "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=800&fit=crop" -o scripts/images/mobile-app-3.jpg

# E-commerce images
curl -L "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop" -o scripts/images/ecommerce-1.jpg
curl -L "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop" -o scripts/images/ecommerce-2.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" -o scripts/images/ecommerce-3.jpg

# Chat app images
curl -L "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=800&fit=crop" -o scripts/images/chat-app-1.jpg
curl -L "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop" -o scripts/images/chat-app-2.jpg

# API/code images
curl -L "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop" -o scripts/images/api-code-1.jpg

# SEO/Marketing images
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" -o scripts/images/seo-1.jpg
curl -L "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=800&fit=crop" -o scripts/images/seo-2.jpg
curl -L "https://images.unsplash.com/photo-1553830591-2f39e38a013c?w=1200&h=800&fit=crop" -o scripts/images/seo-3.jpg

# Social media images
curl -L "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop" -o scripts/images/social-media-1.jpg
curl -L "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop" -o scripts/images/social-media-2.jpg

# Content growth images
curl -L "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop" -o scripts/images/content-growth-1.jpg

echo "Images downloaded successfully!"