import json

with open('src/data/landmarks.json', 'r') as f:
    data = json.load(f)

print("=" * 80)
print("GEONAUTS GUIDE - LANDMARKS WITH WIKIMEDIA IMAGES")
print("=" * 80)
print()

wikimedia_landmarks = []

for landmark in data['landmarks']:
    if 'wikimedia' in landmark.get('imageUrl', '').lower():
        wikimedia_landmarks.append(landmark)

print(f"Total: {len(wikimedia_landmarks)} landmarks using Wikimedia\n")

for i, lm in enumerate(wikimedia_landmarks, 1):
    print(f"{i}. {lm['name']}")
    print(f"   Location: {lm['city']}, {lm['country']}")
    print(f"   ID: {lm['id']}")
    print(f"   URL: {lm['imageUrl']}")
    print()
