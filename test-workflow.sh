#!/bin/bash

# PathFinder n8n Workflow Test Script

echo "Testing PathFinder AI Narrator Workflow..."
echo ""

# Test 1: Stations of the Cross - Station 1
echo "Test 1: Antonia Fortress (Stations of Cross)"
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "stations-of-cross",
    "locationId": "station-1",
    "locationTitle": "Jesus is Condemned to Death",
    "locationDescription": "The site of the Antonia Fortress where Jesus was condemned by Pontius Pilate",
    "wikipediaPage": "Antonia_Fortress"
  }' | jq '.'

echo ""
echo "---"
echo ""

# Test 2: Gettysburg - Little Round Top
echo "Test 2: Little Round Top (Battle of Gettysburg)"
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "battle-of-gettysburg",
    "locationId": "little-round-top",
    "locationTitle": "Little Round Top",
    "locationDescription": "Critical Union position defended by Joshua Chamberlain during the Battle of Gettysburg",
    "wikipediaPage": "Little_Round_Top"
  }' | jq '.'

echo ""
echo "---"
echo ""

# Test 3: Ancient Rome - Colosseum
echo "Test 3: Colosseum (Ancient Rome)"
curl -X POST https://workflowly.online/webhook/pathfinder-narration \
  -H "Content-Type: application/json" \
  -d '{
    "pathId": "ancient-rome",
    "locationId": "colosseum",
    "locationTitle": "The Colosseum",
    "locationDescription": "Ancient Roman amphitheater and iconic symbol of Imperial Rome where gladiators fought",
    "wikipediaPage": "Colosseum"
  }' | jq '.'

echo ""
echo "---"
echo "Testing complete!"
