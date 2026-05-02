#!/bin/bash
echo "LANDMARKS WITH WIKIMEDIA IMAGES"
echo "================================"
echo ""
grep -B 5 '"imageUrl": "https://upload.wikimedia.org' src/data/landmarks.json | \
  grep -E '"name":|"imageUrl":' | \
  paste - - | \
  sed 's/.*"name": "//g' | \
  sed 's/", *"imageUrl": "/ | /g' | \
  sed 's/"//g' | \
  nl -w 3 -s '. '
