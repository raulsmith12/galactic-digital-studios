#!/bin/bash

# Directory to compress
DIR="out"

# File extensions to compress
EXTENSIONS=("js" "css" "html" "json" "svg" "xml")

echo "Compressing files in '$DIR' with gzip and brotli..."

# Loop through each extension
for EXT in "${EXTENSIONS[@]}"; do
  echo "Processing *.$EXT files..."

  # Find and gzip
  find "$DIR" -type f -name "*.$EXT" -exec gzip -kf {} \;

  # Find and brotli
  find "$DIR" -type f -name "*.$EXT" -exec brotli -f -q 11 {} \;
done

echo "Compression complete."