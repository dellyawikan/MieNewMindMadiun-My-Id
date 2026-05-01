#!/bin/bash

# Quick Documentation Opener for Mie Newmind
# This script instantly opens the documentation portal in your default browser

DOC_PATH="dokumentasi/index.html"

# Check if file exists
if [ ! -f "$DOC_PATH" ]; then
    echo "❌ Error: Documentation file not found at $DOC_PATH"
    echo "Make sure you're running this script from the project root directory"
    exit 1
fi

# Get absolute path
DOC_URL="file://$(cd "$(dirname "$DOC_PATH")" && pwd)/$(basename "$DOC_PATH")"

echo "📚 Membuka Dokumentasi Mie Newmind..."
echo "🌐 URL: $DOC_URL"

# Open in default browser based on OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "$DOC_URL"
    echo "✅ Portal dokumentasi dibuka di browser kamu!"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    if command -v xdg-open &> /dev/null; then
        xdg-open "$DOC_URL"
        echo "✅ Portal dokumentasi dibuka di browser kamu!"
    else
        echo "❌ Silakan buka URL berikut di browser kamu: $DOC_URL"
    fi
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows
    start "$DOC_URL"
    echo "✅ Portal dokumentasi dibuka di browser kamu!"
else
    echo "❓ OS tidak terdeteksi. Silakan buka URL berikut secara manual:"
    echo "$DOC_URL"
fi

echo ""
echo "💡 Tips:"
echo "   - Tekan / untuk membuka search box"
echo "   - Klik kategori untuk filter dokumentasi"
echo "   - Gunakan Escape untuk menutup modal"
echo ""
