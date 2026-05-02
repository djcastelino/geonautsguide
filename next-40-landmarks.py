import json

with open('src/data/landmarks.json', 'r') as f:
    data = json.load(f)

landmarks = data['landmarks']

# Already done: indices 0-4 (Taj Mahal to Great Wall) and 121-125 (Salar de Uyuni to Dolomites)
# Next batch: indices 5-44 (40 landmarks)

print("=" * 80)
print("NEXT 40 LANDMARKS FOR IMAGE GENERATION")
print("=" * 80)
print()
print("Image specs: 1200x800 pixels, JPG format, high quality")
print("Save as: {landmark-id}.png in /public/images/landmarks/")
print()
print("-" * 80)
print()

for i in range(5, 45):
    landmark = landmarks[i]
    print(f"{i-4}. {landmark['name']}")
    print(f"   Location: {landmark['city']}, {landmark['country']}")
    print(f"   Filename: {landmark['id']}.png")
    print()
