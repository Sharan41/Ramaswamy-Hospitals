#!/bin/bash

# X-Ray Image Optimization Script
# This script optimizes X-ray images for web use

echo "🏥 X-Ray Image Optimization Script"
echo "===================================="
echo ""

# Create target directory if it doesn't exist
TARGET_DIR="src/assets/achievements-xrays"
mkdir -p "$TARGET_DIR"

echo "✅ Target directory: $TARGET_DIR"
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not installed"
    echo ""
    echo "To install:"
    echo "  macOS:   brew install imagemagick"
    echo "  Ubuntu:  sudo apt-get install imagemagick"
    echo "  Windows: Download from https://imagemagick.org"
    echo ""
    echo "📝 Alternative: Use online tools like tinypng.com or squoosh.app"
    echo ""
    exit 1
fi

echo "✅ ImageMagick found"
echo ""

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local output_file="$2"
    
    if [ ! -f "$input_file" ]; then
        echo "❌ File not found: $input_file"
        return 1
    fi
    
    echo "   Optimizing: $(basename "$input_file") → $(basename "$output_file")"
    
    # Optimize: resize to 600x600, crop center, reduce quality to 80%
    convert "$input_file" \
        -resize 600x600^ \
        -gravity center \
        -extent 600x600 \
        -quality 80 \
        -strip \
        "$output_file"
    
    # Show file size
    local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file")
    local optimized_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file")
    local original_kb=$((original_size / 1024))
    local optimized_kb=$((optimized_size / 1024))
    local savings=$(((original_size - optimized_size) * 100 / original_size))
    
    echo "   ✓ Done! ${original_kb}KB → ${optimized_kb}KB (${savings}% smaller)"
    echo ""
}

echo "📸 Ready to optimize X-ray images"
echo ""
echo "Instructions:"
echo "1. Place your original X-ray JPEGs in this directory"
echo "2. Name them according to the mapping below"
echo "3. Run this script: ./optimize-xrays.sh"
echo ""
echo "Image Mapping:"
echo "  TKR.Total knee replacement.jpeg → tkr-knee-replacement-original.jpg"
echo "  shoulder Replacement.jpeg → shoulder-replacement-original.jpg"
echo "  Cervical spine fixation.jpeg → spine-surgery-original.jpg"
echo "  Pelvic fracture.jpeg → pelvic-fixation-original.jpg"
echo "  etc."
echo ""

# Example: If files are present, optimize them
# Uncomment and modify these lines once you add your images

# optimize_image "tkr-knee-replacement-original.jpg" "$TARGET_DIR/tkr-knee-replacement.jpg"
# optimize_image "shoulder-replacement-original.jpg" "$TARGET_DIR/shoulder-replacement.jpg"
# optimize_image "spine-surgery-original.jpg" "$TARGET_DIR/spine-surgery.jpg"
# optimize_image "polytrauma-original.jpg" "$TARGET_DIR/polytrauma.jpg"
# optimize_image "pelvic-fixation-original.jpg" "$TARGET_DIR/pelvic-fixation.jpg"

echo "💡 Tip: Uncomment the optimize_image lines in this script"
echo "   and add your source file paths to automatically process them."
echo ""
echo "📝 See HOW_TO_ADD_XRAY_IMAGES.md for complete instructions"

