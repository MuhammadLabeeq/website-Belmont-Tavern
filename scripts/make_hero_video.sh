#!/usr/bin/env bash
set -e

INPUT="src/assets/images/belmont_hero_exterior_1793904343743.jpg"
OUTPUT="public/videos/belmont_hero_cinematic.mp4"
TEMP_RAW="public/videos/temp_raw.mp4"

echo "Creating 1080p cinematic video from $INPUT..."

# Step 1: Create a 10-second 1920x1080 smooth cinematic pan and subtle zoom (Ken Burns)
# Sinusoidal motion so it starts and ends at the exact same scale and position for perfect seamless looping!
ffmpeg -y -loop 1 -i "$INPUT" \
  -filter_complex "
    scale=3840:-1,
    zoompan=z='1.05 + 0.05*sin(2*PI*in/300)':x='(iw - iw/zoom)/2 + 20*sin(2*PI*in/300)':y='(ih - ih/zoom)/2':d=300:s=1920x1080:fps=30,
    eq=contrast=1.04:brightness=0.01:saturation=1.08,
    format=yuv420p
  " \
  -t 10 \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -pix_fmt yuv420p \
  -movflags +faststart \
  "$OUTPUT"

# Also extract the exact first frame as the poster frame
ffmpeg -y -ss 00:00:00 -i "$OUTPUT" -vframes 1 -q:v 2 "public/videos/belmont_hero_poster.jpg"

echo "Video and poster created successfully!"
ls -lh "$OUTPUT" "public/videos/belmont_hero_poster.jpg"
