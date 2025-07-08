#!/bin/bash

echo "Uploading images to Sanity..."

# Upload images and capture asset IDs
declare -A IMAGE_ASSETS

# Design images
IMAGE_ASSETS[design-1-main]=$(sanity assets upload scripts/images/design-brand-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[design-1-gallery-1]=$(sanity assets upload scripts/images/design-brand-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[design-1-gallery-2]=$(sanity assets upload scripts/images/design-brand-3.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

IMAGE_ASSETS[design-2-main]=$(sanity assets upload scripts/images/mobile-app-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[design-2-gallery-1]=$(sanity assets upload scripts/images/mobile-app-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[design-2-gallery-2]=$(sanity assets upload scripts/images/mobile-app-3.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

# Code images
IMAGE_ASSETS[code-1-main]=$(sanity assets upload scripts/images/ecommerce-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[code-1-gallery-1]=$(sanity assets upload scripts/images/ecommerce-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[code-1-gallery-2]=$(sanity assets upload scripts/images/ecommerce-3.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

IMAGE_ASSETS[code-2-main]=$(sanity assets upload scripts/images/chat-app-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[code-2-gallery-1]=$(sanity assets upload scripts/images/chat-app-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

IMAGE_ASSETS[code-3-main]=$(sanity assets upload scripts/images/api-code-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

# Marketing images
IMAGE_ASSETS[growth-1-main]=$(sanity assets upload scripts/images/seo-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[growth-1-gallery-1]=$(sanity assets upload scripts/images/seo-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[growth-1-gallery-2]=$(sanity assets upload scripts/images/seo-3.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

IMAGE_ASSETS[growth-2-main]=$(sanity assets upload scripts/images/social-media-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)
IMAGE_ASSETS[growth-2-gallery-1]=$(sanity assets upload scripts/images/social-media-2.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

IMAGE_ASSETS[growth-3-main]=$(sanity assets upload scripts/images/content-growth-1.jpg --project ld6z30ky --dataset production | grep -oE 'image-[a-zA-Z0-9]+-[a-zA-Z0-9]+-jpg' | head -1)

echo "Images uploaded. Asset IDs:"
for key in "${!IMAGE_ASSETS[@]}"; do
  echo "$key: ${IMAGE_ASSETS[$key]}"
done