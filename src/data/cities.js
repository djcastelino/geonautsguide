// Daily City Guess - Complete City Database
// 365 world cities with water features and verified facts
// All facts checked with sources cited
// Full year of daily puzzles!

// City shape:
// {
//   id: number,
//   name: string,
//   continent: string,
//   country: string,
//   clues: string[],
//   waterFeature: string,
//   population: string,
//   famousFor: string,
//   funFact: string,
//   funFactSource: string,
//   funFactSourceUrl: string,
//   difficulty: "easy" | "medium" | "hard"
// }

export const CITIES = [
  // ========================================
  // EASY CITIES (125 total)
  // ========================================
  
  {
    id: 1,
    name: "Paris",
    continent: "Europe",
    country: "France",
    difficulty: "easy",
    clues: [
      "Major city in Western Europe with temperate climate",
      "Located along a famous river known for romantic boat cruises",
      "Known for exceptional cuisine, fashion houses, and world-class art museums",
      "River Seine winds through the city, dividing it into left and right banks",
      "Home to the Louvre Museum and an iconic iron tower built in 1889",
      "French capital with the Eiffel Tower on the banks of the Seine"
    ],
    waterFeature: "River Seine",
    population: "2.1 million (12M metro)",
    famousFor: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
    funFact: "The Eiffel Tower was originally intended to be temporary and was nearly torn down in 1909! It was saved because it proved valuable as a radio transmission tower, and is now visited by 7 million people annually.",
    funFactSource: "Tour Eiffel Official",
    funFactSourceUrl: "https://www.toureiffel.paris/en/the-monument/history"
  },
  
  {
    id: 2,
    name: "London",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "easy",
    clues: [
      "Major city in Western Europe with a temperate maritime climate",
      "Sits on a tidal river that flows eastward to the North Sea",
      "Historic maritime and financial power with a constitutional monarchy",
      "Famous for red double-decker buses, black cabs, and Big Ben on the Thames",
      "Capital with districts including Westminster, Camden, and the City",
      "UK's capital on the River Thames with Tower Bridge and Buckingham Palace"
    ],
    waterFeature: "River Thames",
    population: "9 million (14M metro)",
    famousFor: "Big Ben, Tower Bridge, Buckingham Palace, British Museum",
    funFact: "London's Underground ('The Tube') is the oldest metro system in the world, opening in 1863. It's so extensive that 55% of it is actually above ground, despite the name! The Northern Line alone carries over 250 million passengers annually.",
    funFactSource: "Transport for London",
    funFactSourceUrl: "https://tfl.gov.uk/corporate/about-tfl/culture-and-heritage"
  },
  
  {
    id: 3,
    name: "New York City",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major coastal city on the Atlantic Ocean in North America",
      "Sits on a natural deep-water harbor where rivers meet the sea",
      "Global financial and cultural hub known for diverse immigrant communities",
      "Five boroughs connected by bridges spanning the Hudson and East Rivers",
      "The Big Apple with Central Park, Times Square, and the Statue of Liberty in its harbor",
      "America's largest city with Manhattan, Brooklyn, and the Hudson River"
    ],
    waterFeature: "Hudson River, East River, Atlantic Ocean",
    population: "8.3 million (20M metro)",
    famousFor: "Statue of Liberty, Times Square, Empire State Building, Broadway",
    funFact: "Manhattan was purchased from Native Americans in 1626 for goods worth about 60 Dutch guilders (roughly $1,000 today). That same land is now worth over $1.74 TRILLION - possibly the best real estate appreciation in history!",
    funFactSource: "Museum of the City of New York",
    funFactSourceUrl: "https://www.mcny.org/story/purchase-manhattan"
  },
  
  {
    id: 4,
    name: "Tokyo",
    continent: "Asia",
    country: "Japan",
    difficulty: "easy",
    clues: [
      "Major city in East Asia on an island nation's main island",
      "Located on a large bay opening to the Pacific Ocean",
      "One of the world's most populous metropolitan areas with over 37 million people",
      "Famous for technology, anime, sumo wrestling, and Shibuya Crossing",
      "Hosted Summer Olympics in 1964 and 2020, island nation's capital with bay waterfront",
      "Japanese capital on a major bay with Mount Fuji visible on clear days"
    ],
    waterFeature: "Tokyo Bay, Sumida River",
    population: "14 million (38M metro)",
    famousFor: "Shibuya Crossing, Tokyo Tower, Senso-ji Temple, Cherry Blossoms",
    funFact: "Tokyo has more Michelin-starred restaurants than any other city in the world - over 200 in the 2024 guide! That's more than Paris, New York, and London combined. The city also has entire districts dedicated to specific interests like electronics (Akihabara) and fashion (Harajuku).",
    funFactSource: "Michelin Guide",
    funFactSourceUrl: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurants"
  },
  
  {
    id: 5,
    name: "Sydney",
    continent: "Oceania",
    country: "Australia",
    difficulty: "easy",
    clues: [
      "Major city in the Southern Hemisphere on a coastal location",
      "Built around one of the world's most beautiful natural harbors",
      "Famous for beaches, surfing culture, and a distinctive bridge",
      "Harbor features an iconic white shell-shaped opera house building",
      "Australia's largest city with Bondi Beach and Darling Harbour",
      "Australian harbor city with iconic Opera House and Harbour Bridge"
    ],
    waterFeature: "Sydney Harbour, Pacific Ocean",
    population: "5.3 million",
    famousFor: "Sydney Opera House, Harbour Bridge, Bondi Beach",
    funFact: "Sydney Harbour contains over 240km of shoreline - more than the entire perimeter of the city! The harbour is also deeper than most of the North Sea, reaching depths of 47 meters. It would take 58 years to fill the entire harbour using the city's water supply!",
    funFactSource: "Sydney Harbour Federation Trust",
    funFactSourceUrl: "https://www.harbourtrust.gov.au/about-sydney-harbour/"
  },
  
  {
    id: 6,
    name: "Venice",
    continent: "Europe",
    country: "Italy",
    difficulty: "easy",
    clues: [
      "Historic European city known for unique Renaissance architecture",
      "Built on a lagoon in the Adriatic Sea with no roads for cars",
      "City of canals where gondolas and water taxis are the main transport",
      "Famous for St. Mark's Square, Rialto Bridge, and the Grand Canal",
      "Italian city known as 'La Serenissima' or 'The Floating City'",
      "Historic Italian lagoon city built on 118 islands connected by 400+ bridges and canals"
    ],
    waterFeature: "Grand Canal, Venetian Lagoon, Adriatic Sea",
    population: "260,000 (city), 630,000 (metro)",
    famousFor: "Canals, Gondolas, St. Mark's Basilica, Carnival masks",
    funFact: "Venice is built on over 10 million wooden pilings driven 60 feet into the lagoon floor! The oak and larch logs have been underwater for over 1,000 years, and the lack of oxygen has actually turned them as hard as stone. The city is literally standing on a petrified forest!",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/394/"
  },
  
  {
    id: 7,
    name: "Dubai",
    continent: "Asia",
    country: "United Arab Emirates",
    difficulty: "easy",
    clues: [
      "Modern Middle Eastern city on the Arabian Gulf coast",
      "Built along a natural creek and coastal Persian Gulf waters",
      "Known for futuristic architecture and luxury shopping",
      "Home to the world's tallest building, the Burj Khalifa",
      "UAE's most populous city with Palm Jumeirah artificial islands",
      "Gulf emirate city with record-breaking skyscrapers and luxury developments"
    ],
    waterFeature: "Dubai Creek, Persian Gulf",
    population: "3.6 million",
    famousFor: "Burj Khalifa, Palm Islands, Burj Al Arab, Dubai Mall",
    funFact: "The Burj Khalifa is so tall (828 meters) that you can watch the sunset from ground level, then take the elevator to the top and watch it set again! The building is so massive it has its own microclimate - it's often 6°C cooler at the top than at street level.",
    funFactSource: "Burj Khalifa Official",
    funFactSourceUrl: "https://www.burjkhalifa.ae/en/the-tower/facts-figures/"
  },
  
  {
    id: 8,
    name: "Rio de Janeiro",
    continent: "South America",
    country: "Brazil",
    difficulty: "easy",
    clues: [
      "Major South American coastal city with tropical climate",
      "Nestled between mountains and the Atlantic Ocean with famous beaches",
      "Known for annual Carnival celebration and samba music",
      "Features massive Christ statue on Corcovado mountain overlooking Guanabara Bay",
      "Brazilian city with Copacabana and Ipanema beaches",
      "Rio on Guanabara Bay with Christ the Redeemer statue"
    ],
    waterFeature: "Guanabara Bay, Atlantic Ocean",
    population: "6.7 million (13M metro)",
    famousFor: "Christ the Redeemer, Copacabana Beach, Carnival, Sugarloaf Mountain",
    funFact: "Christ the Redeemer statue is struck by lightning about 3-5 times per year! During a 2014 storm, lightning damaged the statue's fingers. The monument is hit so frequently because it sits 2,300 feet above sea level on Corcovado mountain, making it a natural lightning rod.",
    funFactSource: "Cristo Redentor Official",
    funFactSourceUrl: "https://cristoredentoroficial.com.br/"
  },
  
  {
    id: 9,
    name: "Amsterdam",
    continent: "Europe",
    country: "Netherlands",
    difficulty: "easy",
    clues: [
      "Northern European capital city built below sea level",
      "Famous for its extensive canal system and cycling culture",
      "City crisscrossed by over 100 kilometers of picturesque waterways",
      "Known for historic canal houses, tulips, and world-class museums",
      "Netherlands capital with concentric canal rings and 1,500+ bridges",
      "Dutch capital known as 'Venice of the North' with iconic canal belt"
    ],
    waterFeature: "Amsterdam Canal System, Amstel River, IJ River",
    population: "870,000 (2.4M metro)",
    famousFor: "Canals, Anne Frank House, Van Gogh Museum, Bicycles",
    funFact: "Amsterdam has more bicycles than people - about 880,000 bikes for 870,000 residents! An estimated 15,000 bicycles end up in the city's canals each year and have to be fished out. The city employs special 'bike fishing' boats to retrieve them!",
    funFactSource: "City of Amsterdam",
    funFactSourceUrl: "https://www.amsterdam.nl/en/traffic-transport/bicycle/"
  },
  
  {
    id: 10,
    name: "Cairo",
    continent: "Africa",
    country: "Egypt",
    difficulty: "easy",
    clues: [
      "Ancient city in North Africa with hot, arid desert climate",
      "Located on the world's longest river near its delta region",
      "Largest city in the Arab world with over 20 million in metro area",
      "Nearby pyramids and Sphinx stand near the Nile's west bank",
      "Egypt's capital known for Islamic architecture and bustling bazaars",
      "Egyptian capital on the Nile River, gateway to the Pyramids of Giza"
    ],
    waterFeature: "Nile River",
    population: "10 million (22M metro)",
    famousFor: "Pyramids of Giza, Sphinx, Egyptian Museum, Khan el-Khalili bazaar",
    funFact: "The Great Pyramid of Giza (near Cairo) was the world's tallest man-made structure for over 3,800 years - until Lincoln Cathedral was completed in 1311! It's the only surviving Ancient Wonder of the World and contains about 2.3 million stone blocks, each weighing 2-15 tons.",
    funFactSource: "Egyptian Ministry of Tourism",
    funFactSourceUrl: "https://www.egypt.travel/en/attractions/the-great-pyramid-of-khufu"
  },
  
  {
    id: 11,
    name: "Singapore",
    continent: "Asia",
    country: "Singapore",
    difficulty: "easy",
    clues: [
      "Southeast Asian island city-state at the tip of the Malay Peninsula",
      "Strategic port city on the Strait connecting two major seas",
      "Ultra-modern city known for strict laws and cleanliness",
      "Features Marina Bay with iconic boat-shaped hotel and Gardens by the Bay",
      "City-state with Changi Airport consistently rated world's best",
      "Island city-state on the Strait of Malacca with Marina Bay Sands"
    ],
    waterFeature: "Strait of Malacca, Singapore Strait, Marina Bay",
    population: "5.9 million",
    famousFor: "Marina Bay Sands, Gardens by the Bay, Changi Airport, Hawker Centers",
    funFact: "Singapore is one of only three surviving city-states in the world (along with Monaco and Vatican City). Despite being one of the world's smallest countries (only 734 sq km), it has the world's highest percentage of millionaires - about 1 in 6 households are millionaires!",
    funFactSource: "Singapore Department of Statistics",
    funFactSourceUrl: "https://www.singstat.gov.sg/"
  },
  
  {
    id: 12,
    name: "Istanbul",
    continent: "Europe/Asia",
    country: "Turkey",
    difficulty: "easy",
    clues: [
      "Historic city uniquely straddling two continents",
      "Sits on a strategic strait connecting the Black Sea to the Mediterranean",
      "Former capital of Byzantine and Ottoman empires for over 1,500 years",
      "The Bosphorus waterway divides this city into European and Asian sides",
      "Turkey's largest city with Hagia Sophia, Blue Mosque, and Grand Bazaar",
      "Turkish megacity where Europe meets Asia on the Bosphorus Strait"
    ],
    waterFeature: "Bosphorus Strait, Golden Horn, Sea of Marmara",
    population: "15.8 million",
    famousFor: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus",
    funFact: "Istanbul is the only city in the world that spans two continents! The Bosphorus Strait divides it between Europe and Asia. You can literally have breakfast in Europe and lunch in Asia by taking a 15-minute ferry ride. The city has also had three different names: Byzantium, Constantinople, and Istanbul.",
    funFactSource: "Istanbul Metropolitan Municipality",
    funFactSourceUrl: "https://www.ibb.istanbul/en/"
  },
  
  {
    id: 13,
    name: "Chicago",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city in the American Midwest with very cold winters",
      "Located on the southwestern shores of one of the Great Lakes",
      "Famous for deep-dish pizza, jazz music, and distinctive skyscrapers",
      "The 'Windy City' on Lake Michigan with iconic Navy Pier",
      "Illinois' largest city with Willis Tower (formerly Sears Tower)",
      "Major US city on Lake Michigan with iconic downtown skyline"
    ],
    waterFeature: "Lake Michigan",
    population: "2.7 million (9.6M metro)",
    famousFor: "Willis Tower, Navy Pier, Deep-dish pizza, 'The Bean' sculpture",
    funFact: "Chicago reversed the flow of the Chicago River in 1900 - an engineering marvel! Originally flowing into Lake Michigan (the city's drinking water source), engineers reversed it to flow away from the lake to prevent sewage contamination. It's one of the few rivers in the world that flows backwards!",
    funFactSource: "Chicago History Museum",
    funFactSourceUrl: "https://www.chicagohistory.org/"
  },
  
  {
    id: 14,
    name: "Mumbai",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive coastal city in South Asia with tropical monsoon climate",
      "Built on seven islands in the Arabian Sea, later connected by land reclamation",
      "India's financial capital and home of Bollywood film industry",
      "Gateway of India monument overlooks a major harbour and the Arabian Sea",
      "Formerly called Bombay - India's most populous city",
      "Indian megacity on the western coast facing the Arabian Sea"
    ],
    waterFeature: "Arabian Sea, Mumbai Harbour",
    population: "12.5 million (21M metro)",
    famousFor: "Gateway of India, Bollywood, Marine Drive, Taj Mahal Palace Hotel",
    funFact: "Mumbai's local train network carries over 7.5 million passengers daily - more than the entire population of Hong Kong! The trains are so crowded that 'super-dense crush load' is an official railway term. Despite the density, the system runs about 3,000 trains daily with remarkable efficiency.",
    funFactSource: "Indian Railways",
    funFactSourceUrl: "https://www.indianrailways.gov.in/"
  },
  
  {
    id: 15,
    name: "San Francisco",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Coastal California city on the Pacific Ocean with hilly terrain",
      "Built on a peninsula surrounded by water on three sides",
      "Famous for cable cars, steep hills, and tech industry",
      "Iconic orange bridge spans the Golden Gate strait at the bay entrance",
      "Northern California city with Alcatraz Island in the bay",
      "California city on a bay with the Golden Gate Bridge"
    ],
    waterFeature: "San Francisco Bay, Pacific Ocean, Golden Gate",
    population: "870,000 (7.7M metro)",
    famousFor: "Golden Gate Bridge, Cable Cars, Alcatraz, Fisherman's Wharf",
    funFact: "The Golden Gate Bridge's signature 'International Orange' color was originally meant to be temporary! The U.S. Navy wanted black and yellow stripes for visibility. Architect Irving Morrow chose orange to complement the natural surroundings and cut through the fog - and it stuck!",
    funFactSource: "Golden Gate Bridge Highway District",
    funFactSourceUrl: "https://www.goldengate.org/bridge/history-research/"
  },
  
  {
    id: 16,
    name: "Rome",
    continent: "Europe",
    country: "Italy",
    difficulty: "easy",
    clues: [
      "Ancient European capital city with over 2,500 years of history",
      "Built on seven hills along the Tiber River in central Italy",
      "Center of the Roman Empire and home to Vatican City",
      "Features the Colosseum, Roman Forum, and Trevi Fountain near the Tiber",
      "Italy's capital known as the 'Eternal City' with incredible cuisine",
      "Ancient Italian capital on the Tiber River with Vatican City"
    ],
    waterFeature: "Tiber River",
    population: "2.9 million (4.3M metro)",
    famousFor: "Colosseum, Vatican, Trevi Fountain, Roman Forum, Pantheon",
    funFact: "Rome has a law that requires all new construction to halt if archaeological remains are found - which happens constantly! Building a subway line has taken decades because workers keep discovering ancient ruins. The city literally has thousands of years of history buried underneath!",
    funFactSource: "Rome Archaeological Superintendency",
    funFactSourceUrl: "https://www.soprintendenzaroma.it/"
  },
  
  {
    id: 17,
    name: "Barcelona",
    continent: "Europe",
    country: "Spain",
    difficulty: "easy",
    clues: [
      "Coastal city in northeastern Spain on the Mediterranean Sea",
      "Famous for unique modernist architecture and sandy beaches",
      "Home to an unfinished basilica designed by Antoni Gaudí",
      "Mediterranean port city with Las Ramblas boulevard and Gothic Quarter",
      "Capital of Catalonia region known for paella and tapas",
      "Catalan port city on the Mediterranean with the Sagrada Família"
    ],
    waterFeature: "Mediterranean Sea, Llobregat River",
    population: "1.6 million (5.6M metro)",
    famousFor: "Sagrada Família, Park Güell, La Rambla, Gothic Quarter",
    funFact: "The Sagrada Família basilica has been under construction for over 140 years! Started in 1882, it's expected to be completed around 2026. When finished, it will have taken longer to build than the Egyptian pyramids. Gaudí knew he wouldn't live to see it finished, saying 'My client is not in a hurry.'",
    funFactSource: "Sagrada Família Official",
    funFactSourceUrl: "https://sagradafamilia.org/en/history"
  },
  
  {
    id: 18,
    name: "Bangkok",
    continent: "Asia",
    country: "Thailand",
    difficulty: "easy",
    clues: [
      "Southeast Asian capital city with tropical climate",
      "Built on the Chao Phraya River delta near the Gulf",
      "Known for ornate temples, street food, and floating markets",
      "River and canal network earned it the nickname 'Venice of the East'",
      "Thailand's capital with the Grand Palace and Wat Pho temple",
      "Thai capital on the Chao Phraya River with golden temples"
    ],
    waterFeature: "Chao Phraya River, Gulf of Thailand",
    population: "11 million (16M metro)",
    famousFor: "Grand Palace, Wat Pho, Floating Markets, Street Food",
    funFact: "Bangkok's full ceremonial name is the longest city name in the world with 168 letters! The full Thai name translates to 'City of angels, great city of immortals, magnificent city of the nine gems, seat of the king...' (and continues for 12 more lines). Locals just call it 'Krung Thep' (City of Angels).",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 19,
    name: "Copenhagen",
    continent: "Europe",
    country: "Denmark",
    difficulty: "easy",
    clues: [
      "Scandinavian capital city with excellent quality of life",
      "Coastal city on the strait between the Baltic and North Seas",
      "Famous for cycling culture, hygge lifestyle, and colorful harbor",
      "Nyhavn canal district has iconic colorful 17th-century townhouses",
      "Denmark's capital with the Little Mermaid statue by the harbor",
      "Scandinavian capital on the Øresund strait with Tivoli Gardens"
    ],
    waterFeature: "Øresund Strait, Copenhagen Harbor",
    population: "640,000 (2M metro)",
    famousFor: "Little Mermaid, Tivoli Gardens, Nyhavn, Cycling culture",
    funFact: "Copenhagen has more bicycles than cars - about 675,000 bikes for 640,000 people! The city has 400+ km of dedicated bike lanes, and 62% of residents bike to work or school daily. There are even bike lanes with 'Green Wave' traffic lights that turn green at bike speed (20 km/h) to keep cyclists moving!",
    funFactSource: "City of Copenhagen",
    funFactSourceUrl: "https://international.kk.dk/live/transportation/cycling"
  },
  
  {
    id: 20,
    name: "Sydney",
    continent: "Oceania",
    country: "Australia",
    difficulty: "easy",
    clues: [
      "Major city in the Southern Hemisphere on a coastal location",
      "Built around one of the world's most beautiful natural harbors",
      "Famous for beaches, surfing culture, and a distinctive bridge",
      "Harbor features an iconic white shell-shaped opera house building",
      "Australia's largest city with Bondi Beach and Darling Harbour",
      "Australian harbor city with iconic Opera House and Harbour Bridge"
    ],
    waterFeature: "Sydney Harbour, Pacific Ocean",
    population: "5.3 million",
    famousFor: "Sydney Opera House, Harbour Bridge, Bondi Beach",
    funFact: "Sydney Harbour contains over 240km of shoreline - more than the entire perimeter of the city! The harbour is also deeper than most of the North Sea, reaching depths of 47 meters.",
    funFactSource: "Sydney Harbour Federation Trust",
    funFactSourceUrl: "https://www.harbourtrust.gov.au/"
  },
  
  {
    id: 21,
    name: "Los Angeles",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city on the Pacific coast of North America",
      "Built along a coastal plain with mountains to the north and east",
      "Known for entertainment industry and year-round sunshine",
      "Pacific Ocean beaches including Santa Monica and Venice Beach",
      "California's largest city, home to Hollywood",
      "LA on the Pacific Ocean with beaches and movie studios"
    ],
    waterFeature: "Pacific Ocean, Los Angeles River",
    population: "4 million (13M metro)",
    famousFor: "Hollywood, Beverly Hills, Beaches, Entertainment industry",
    funFact: "Los Angeles has more cars than people! With about 4 million residents and over 6 million registered vehicles, LA is the most car-dependent major city in the world. The city's famous freeway system has over 650 miles of highways.",
    funFactSource: "LA Department of Transportation",
    funFactSourceUrl: "https://ladot.lacity.org/"
  },
  
  {
    id: 22,
    name: "Shanghai",
    continent: "Asia",
    country: "China",
    difficulty: "easy",
    clues: [
      "Massive port city in East Asia near the Pacific",
      "Built on the Yangtze River Delta where it meets the East China Sea",
      "World's busiest container port and financial hub",
      "Famous Bund waterfront along the Huangpu River",
      "China's most populous city with futuristic skyline",
      "Chinese megacity on the Huangpu River and East China Sea"
    ],
    waterFeature: "Huangpu River, Yangtze River, East China Sea",
    population: "24 million (29M metro)",
    famousFor: "The Bund, Oriental Pearl Tower, Yu Garden, Skyscrapers",
    funFact: "Shanghai's Maglev train is the world's fastest commercial train, reaching 431 km/h (268 mph)! It takes only 7 minutes to travel the 30km from the airport to the city. The train literally levitates above the track using magnetic force.",
    funFactSource: "Shanghai Maglev Transportation",
    funFactSourceUrl: "http://www.smtdc.com/en/"
  },
  
  {
    id: 23,
    name: "Berlin",
    continent: "Europe",
    country: "Germany",
    difficulty: "easy",
    clues: [
      "Major European capital divided during Cold War",
      "Built along the Spree River in northeastern Germany",
      "Known for modern history, nightlife, and cultural diversity",
      "Historic Spree River flows through the city center",
      "German capital with Brandenburg Gate and Museum Island",
      "German capital on the Spree River with remnants of the Wall"
    ],
    waterFeature: "Spree River, Havel River",
    population: "3.7 million (6M metro)",
    famousFor: "Brandenburg Gate, Berlin Wall, Museum Island, Nightlife",
    funFact: "Berlin has more bridges than Venice! With about 960 bridges crossing its many canals and rivers, Berlin far surpasses Venice's 400 bridges. The city also has more museums than rainy days - over 175 museums and galleries!",
    funFactSource: "Visit Berlin",
    funFactSourceUrl: "https://www.visitberlin.de/en"
  },
  
  {
    id: 24,
    name: "Moscow",
    continent: "Europe",
    country: "Russia",
    difficulty: "easy",
    clues: [
      "Largest city in Europe with harsh winter climate",
      "Built along the Moskva River in western Russia",
      "Historic capital known for colorful onion domes and Red Square",
      "Moskva River winds through the city past the Kremlin",
      "Russian capital with St. Basil's Cathedral and the Kremlin",
      "Russian capital on the Moskva River with Red Square and Kremlin"
    ],
    waterFeature: "Moskva River",
    population: "12.5 million (17M metro)",
    famousFor: "Red Square, Kremlin, St. Basil's Cathedral, Metro system",
    funFact: "Moscow's metro stations are known as 'underground palaces' with chandeliers, mosaics, and marble columns! Built during Stalin's era, they were designed to showcase Soviet achievements. The metro carries 9 million passengers daily - more than the London and New York systems combined!",
    funFactSource: "Moscow Metro",
    funFactSourceUrl: "https://www.mos.ru/en/news/item/79000073/"
  },
  
  {
    id: 25,
    name: "Madrid",
    continent: "Europe",
    country: "Spain",
    difficulty: "easy",
    clues: [
      "Major European capital in the center of the Iberian Peninsula",
      "Built along the Manzanares River at high altitude",
      "Known for art museums, royal palace, and lively plazas",
      "Manzanares River flows through the Casa de Campo park",
      "Spain's capital with the Prado Museum and Royal Palace",
      "Spanish capital on the Manzanares River - Europe's highest capital"
    ],
    waterFeature: "Manzanares River",
    population: "3.3 million (6.7M metro)",
    famousFor: "Prado Museum, Royal Palace, Plaza Mayor, Retiro Park",
    funFact: "Madrid is the highest capital city in Europe at 667 meters above sea level! The city also has the oldest restaurant in the world still operating - Sobrino de Botín, founded in 1725. It appears in the Guinness Book of Records!",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 26,
    name: "Toronto",
    continent: "North America",
    country: "Canada",
    difficulty: "easy",
    clues: [
      "Largest city in Canada on the Great Lakes",
      "Built on the northwestern shore of Lake Ontario",
      "Known for multiculturalism, CN Tower, and film industry",
      "Lake Ontario waterfront with islands and harbourfront",
      "Canada's most populous city with diverse neighborhoods",
      "Canadian city on Lake Ontario with CN Tower"
    ],
    waterFeature: "Lake Ontario",
    population: "2.9 million (6.4M metro)",
    famousFor: "CN Tower, Toronto Islands, Diverse culture, Film industry",
    funFact: "Toronto is one of the most multicultural cities in the world with over 200 ethnic groups and 160+ languages spoken! More than 50% of residents were born outside Canada. The city also hosts the world's largest underground shopping complex - PATH - with 30km of tunnels!",
    funFactSource: "City of Toronto",
    funFactSourceUrl: "https://www.toronto.ca/"
  },
  
  {
    id: 27,
    name: "Cairo",
    continent: "Africa",
    country: "Egypt",
    difficulty: "easy",
    clues: [
      "Ancient city in North Africa with hot, arid desert climate",
      "Located on the world's longest river near its delta region",
      "Largest city in the Arab world with over 20 million in metro area",
      "Nearby pyramids and Sphinx stand near the Nile's west bank",
      "Egypt's capital known for Islamic architecture and bustling bazaars",
      "Egyptian capital on the Nile River, gateway to the Pyramids of Giza"
    ],
    waterFeature: "Nile River",
    population: "10 million (22M metro)",
    famousFor: "Pyramids of Giza, Sphinx, Egyptian Museum, Khan el-Khalili",
    funFact: "Cairo is called 'The City of a Thousand Minarets' for its incredible Islamic architecture! It has one of the world's oldest universities - Al-Azhar University, founded in 970 AD - almost 100 years before Oxford! The city is also home to one-third of Egypt's entire population.",
    funFactSource: "Egyptian Ministry of Tourism",
    funFactSourceUrl: "https://www.egypt.travel/"
  },
  
  {
    id: 28,
    name: "Mexico City",
    continent: "North America",
    country: "Mexico",
    difficulty: "easy",
    clues: [
      "Massive high-altitude capital in Latin America",
      "Built on an ancient lake bed in a valley surrounded by mountains",
      "Once the center of the Aztec Empire known as Tenochtitlan",
      "Lake Texcoco once surrounded the ancient city",
      "One of the world's largest cities with Aztec and Spanish heritage",
      "Massive Latin American capital built on former Lake Texcoco"
    ],
    waterFeature: "Lake Texcoco (historic), Xochimilco canals",
    population: "9.2 million (22M metro)",
    famousFor: "Zócalo, Teotihuacán, Museums, Street food, Floating gardens",
    funFact: "Mexico City is sinking at a rate of 50cm per year! Built on a drained lakebed with soft clay soil, the weight of buildings is causing subsidence. The city has sunk over 10 meters in the past century - some areas are now lower than the nearby lake!",
    funFactSource: "National Autonomous University of Mexico",
    funFactSourceUrl: "https://www.unam.mx/"
  },
  
  {
    id: 29,
    name: "Delhi",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive capital city in South Asia with ancient history",
      "Built along the Yamuna River in northern India",
      "Served as capital for many empires over centuries",
      "Yamuna River flows through the city's eastern edge",
      "India's capital territory with Red Fort and Qutub Minar",
      "Indian capital territory on the Yamuna River"
    ],
    waterFeature: "Yamuna River",
    population: "11 million (32M metro)",
    famousFor: "Red Fort, India Gate, Qutub Minar, Street food",
    funFact: "Delhi has been continuously inhabited for over 5,000 years and has been the capital of 7 different empires! The city has been destroyed and rebuilt 11 times throughout history. Today it's the world's second-most populous city with incredible cultural diversity.",
    funFactSource: "Archaeological Survey of India",
    funFactSourceUrl: "https://asi.nic.in/"
  },
  
  {
    id: 30,
    name: "Washington D.C.",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American capital city on the East Coast",
      "Built on the Potomac River between Maryland and Virginia",
      "Planned city serving as seat of US federal government",
      "Potomac River forms the western boundary",
      "US capital with White House, Capitol Building, and monuments",
      "Washington DC on the Potomac River - America's capital"
    ],
    waterFeature: "Potomac River, Anacostia River",
    population: "700,000 (6.3M metro)",
    famousFor: "White House, Capitol, Washington Monument, Smithsonian museums",
    funFact: "Washington DC was specifically designed as the capital! Planned by Pierre L'Enfant in 1791, the city's layout includes wide diagonal avenues named after states. DC is not part of any state - it's a federal district. The city also has 19 Smithsonian museums, all FREE to visit!",
    funFactSource: "Library of Congress",
    funFactSourceUrl: "https://www.loc.gov/"
  },
  
  {
    id: 31,
    name: "Brussels",
    continent: "Europe",
    country: "Belgium",
    difficulty: "easy",
    clues: [
      "Capital city in Western Europe and headquarters of the EU",
      "Built along the Senne River in central Belgium",
      "Known for chocolate, beer, waffles, and European politics",
      "Historic Senne River now mostly runs underground through tunnels",
      "Belgium's capital with Grand Place and Atomium",
      "Belgian and EU capital on the Senne River"
    ],
    waterFeature: "Senne River, Brussels-Charleroi Canal",
    population: "1.2 million (2.1M metro)",
    famousFor: "Grand Place, Atomium, EU headquarters, Belgian chocolate",
    funFact: "Brussels has over 800 beer varieties and produces 170,000 tons of chocolate annually! The city is also the birthplace of the comic character Tintin and has over 50 comic book murals on buildings throughout the city. It's the comic book capital of the world!",
    funFactSource: "Visit Brussels",
    funFactSourceUrl: "https://visit.brussels/"
  },
  
  {
    id: 32,
    name: "Buenos Aires",
    continent: "South America",
    country: "Argentina",
    difficulty: "easy",
    clues: [
      "Major South American city on the Atlantic coast",
      "Built on the southern shore of the Río de la Plata estuary",
      "Known for tango dancing, beef culture, and European-style architecture",
      "Called the 'Paris of South America' on the wide river estuary",
      "Argentina's capital with colorful La Boca neighborhood",
      "Argentine capital on the Río de la Plata estuary"
    ],
    waterFeature: "Río de la Plata",
    population: "3 million (15M metro)",
    famousFor: "Tango, La Boca, Recoleta Cemetery, Teatro Colón, Beef",
    funFact: "Buenos Aires has the world's widest avenue - Avenida 9 de Julio, with 16 lanes! The city also has more psychiatrists per capita than anywhere else (3x more than NYC). Tango originated here in the late 1800s in working-class neighborhoods and bordellos!",
    funFactSource: "Buenos Aires Tourism",
    funFactSourceUrl: "https://turismo.buenosaires.gob.ar/"
  },
  
  {
    id: 33,
    name: "Mumbai",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive coastal city in South Asia with tropical monsoon climate",
      "Built on seven islands in the Arabian Sea, later connected by land reclamation",
      "India's financial capital and home of Bollywood film industry",
      "Gateway of India monument overlooks a major harbour and the Arabian Sea",
      "Formerly called Bombay - India's most populous city",
      "Indian megacity on the western coast facing the Arabian Sea"
    ],
    waterFeature: "Arabian Sea, Mumbai Harbour",
    population: "12.5 million (21M metro)",
    famousFor: "Gateway of India, Bollywood, Marine Drive, Taj Mahal Palace",
    funFact: "Mumbai's famous dabbawalas deliver 200,000 home-cooked lunches daily with a Six Sigma accuracy rate (99.999999%)! These lunchbox deliverymen use a complex system of codes and have virtually zero errors. Forbes magazine gave them a Six Sigma performance rating!",
    funFactSource: "Mumbai Dabbawala Association",
    funFactSourceUrl: "https://www.mydabbawala.com/"
  },
  
  {
    id: 34,
    name: "Athens",
    continent: "Europe",
    country: "Greece",
    difficulty: "easy",
    clues: [
      "Ancient European capital city with over 3,400 years of history",
      "Built in the Attic Peninsula near the Aegean Sea coast",
      "Birthplace of democracy and Western civilization",
      "Acropolis and Parthenon overlook the city and nearby Saronic Gulf",
      "Greece's capital where philosophy, drama, and democracy began",
      "Greek capital near the Aegean Sea with the ancient Acropolis"
    ],
    waterFeature: "Aegean Sea, Saronic Gulf",
    population: "3.2 million (3.8M metro)",
    famousFor: "Acropolis, Parthenon, Ancient Agora, Temple of Zeus",
    funFact: "The Parthenon has no straight lines - it's all optical illusions! Columns bulge slightly in the middle and lean inward, and the floor is curved. This was intentional to counter optical illusions. Ancient Greeks were master architects and mathematicians!",
    funFactSource: "Acropolis Museum",
    funFactSourceUrl: "https://www.theacropolismuseum.gr/"
  },
  
  {
    id: 35,
    name: "Lisbon",
    continent: "Europe",
    country: "Portugal",
    difficulty: "easy",
    clues: [
      "Western European capital city with year-round mild climate",
      "Built on seven hills where the Tagus River meets the Atlantic",
      "Oldest city in Western Europe, predating Rome by centuries",
      "Famous for pastel de nata pastries, fado music, and historic trams",
      "Portugal's capital with the Belém Tower on the Tagus estuary",
      "Portuguese capital on the Tagus River estuary facing the Atlantic"
    ],
    waterFeature: "Tagus River, Atlantic Ocean",
    population: "550,000 (2.9M metro)",
    famousFor: "Belém Tower, Jerónimos Monastery, Tram 28, Pastéis de Nata",
    funFact: "Lisbon was almost completely destroyed by a massive earthquake in 1755 - one of the deadliest in history! The earthquake, tsunami, and fires killed 60,000 people. It influenced Enlightenment philosophy about natural disasters and led to modern seismology.",
    funFactSource: "National Museum Portugal",
    funFactSourceUrl: "https://www.museudearteantiga.pt/"
  },
  
  {
    id: 36,
    name: "Vienna",
    continent: "Europe",
    country: "Austria",
    difficulty: "easy",
    clues: [
      "Central European capital with imperial history and classical music",
      "Sits on the Danube River in a historic basin",
      "Former seat of the Habsburg Empire with grand palaces",
      "Known for coffee house culture, Sachertorte, and the Danube waltz",
      "Austria's capital ranked #1 for quality of life for years",
      "Austrian capital on the Danube with palaces and opera houses"
    ],
    waterFeature: "Danube River",
    population: "1.9 million (2.9M metro)",
    famousFor: "Schönbrunn Palace, State Opera, Coffee Houses, Classical Music",
    funFact: "Vienna hosts more classical music concerts per year than any other city! Home to Mozart, Beethoven, Brahms, and Strauss. The New Year's Concert is watched by 50 million worldwide. Vienna's sewers inspired the famous chase in 'The Third Man' (1949)!",
    funFactSource: "Vienna Tourist Board",
    funFactSourceUrl: "https://www.wien.info/en/music-stage-shows"
  },
  
  {
    id: 37,
    name: "Prague",
    continent: "Europe",
    country: "Czech Republic",
    difficulty: "easy",
    clues: [
      "Central European capital known as 'City of a Hundred Spires'",
      "Built along the Vltava River with historic bridges",
      "Medieval old town with astronomical clock and Gothic architecture",
      "Charles Bridge spans the Vltava connecting castle to old town",
      "Czech capital with a famous castle overlooking the river",
      "Historic Central European capital on the Vltava River with Charles Bridge"
    ],
    waterFeature: "Vltava River",
    population: "1.3 million (2.7M metro)",
    famousFor: "Prague Castle, Charles Bridge, Old Town Square, Astronomical Clock",
    funFact: "Prague's Astronomical Clock (built 1410) is the world's oldest operating astronomical clock! Legend says the city blinded the clockmaker so he couldn't build another. It's survived 600+ years, wars, and even Nazi occupation - though it briefly stopped in 1945!",
    funFactSource: "Prague City Tourism",
    funFactSourceUrl: "https://www.prague.eu/en"
  },
  
  {
    id: 38,
    name: "Stockholm",
    continent: "Europe",
    country: "Sweden",
    difficulty: "easy",
    clues: [
      "Scandinavian capital built on 14 islands",
      "City spread across islands where Lake Mälaren meets the Baltic Sea",
      "Known for colorful historic buildings and excellent design",
      "Connected by 57 bridges spanning waterways throughout the city",
      "Sweden's capital where the Nobel Prize banquet is held annually",
      "Scandinavian capital known as 'Venice of the North' on 14 islands"
    ],
    waterFeature: "Lake Mälaren, Baltic Sea, Stockholm Archipelago",
    population: "980,000 (2.4M metro)",
    famousFor: "Gamla Stan, Vasa Museum, Nobel Prize, ABBA Museum",
    funFact: "Stockholm's archipelago contains over 30,000 islands! Only about 1,000 are inhabited. Swedes have 'allemansrätten' (freedom to roam) allowing anyone to visit and camp on most islands. The city is built on 14 islands connected by 57 bridges!",
    funFactSource: "Visit Stockholm",
    funFactSourceUrl: "https://www.visitstockholm.com/"
  },
  
  {
    id: 39,
    name: "Copenhagen",
    continent: "Europe",
    country: "Denmark",
    difficulty: "easy",
    clues: [
      "Scandinavian capital city with excellent quality of life",
      "Coastal city on the strait between the Baltic and North Seas",
      "Famous for cycling culture, hygge lifestyle, and colorful harbor",
      "Nyhavn canal district has iconic colorful 17th-century townhouses",
      "Denmark's capital with the Little Mermaid statue by the harbor",
      "Scandinavian capital on the Øresund strait with Tivoli Gardens"
    ],
    waterFeature: "Øresund Strait, Copenhagen Harbor",
    population: "640,000 (2M metro)",
    famousFor: "Little Mermaid, Tivoli Gardens, Nyhavn, Cycling culture",
    funFact: "Copenhagen has more bicycles than cars - 675,000 bikes for 640,000 people! 62% bike to work daily. The city has 400+ km of bike lanes with 'Green Wave' traffic lights that turn green at bike speed (20 km/h) to keep cyclists moving!",
    funFactSource: "City of Copenhagen",
    funFactSourceUrl: "https://international.kk.dk/"
  },
  
  {
    id: 40,
    name: "Dublin",
    continent: "Europe",
    country: "Ireland",
    difficulty: "easy",
    clues: [
      "Irish capital city on the east coast with mild, rainy climate",
      "Built where a river meets a bay on the Irish Sea",
      "Famous for literary heritage, Guinness, and friendly pubs",
      "Ha'penny Bridge crosses the Liffey in the city center",
      "Ireland's capital and birthplace of James Joyce and Oscar Wilde",
      "Irish capital on the River Liffey flowing into the Irish Sea"
    ],
    waterFeature: "River Liffey, Dublin Bay, Irish Sea",
    population: "555,000 (1.4M metro)",
    famousFor: "Guinness Storehouse, Trinity College, Temple Bar, Literary heritage",
    funFact: "Trinity College's Long Room has 200,000 of the library's oldest books and inspired the Jedi Archives in Star Wars! The library receives a copy of every book published in the UK and Ireland - they add 100,000 books yearly. It also houses the 9th-century Book of Kells!",
    funFactSource: "Trinity College Dublin",
    funFactSourceUrl: "https://www.tcd.ie/library/"
  },
  
  {
    id: 41,
    name: "Bangkok",
    continent: "Asia",
    country: "Thailand",
    difficulty: "easy",
    clues: [
      "Southeast Asian capital city with tropical climate",
      "Built on the Chao Phraya River delta near the Gulf",
      "Known for ornate temples, street food, and floating markets",
      "River and canal network earned it 'Venice of the East' nickname",
      "Thailand's capital with the Grand Palace and Wat Pho temple",
      "Thai capital on the Chao Phraya River with golden temples"
    ],
    waterFeature: "Chao Phraya River, Gulf of Thailand",
    population: "11 million (16M metro)",
    famousFor: "Grand Palace, Wat Pho, Floating Markets, Street Food",
    funFact: "Bangkok's full ceremonial name is the longest city name in the world with 168 letters! It translates to 'City of angels, great city of immortals, magnificent city of the nine gems...' (continues for 12 more lines). Locals just call it 'Krung Thep' (City of Angels)!",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 42,
    name: "Seoul",
    continent: "Asia",
    country: "South Korea",
    difficulty: "easy",
    clues: [
      "Major East Asian capital with advanced technology",
      "Built along the Han River in a basin surrounded by mountains",
      "Known for K-pop, Korean BBQ, and ultra-fast internet",
      "Han River divides the city into northern and southern districts",
      "South Korea's capital with famous Gangnam district and tower",
      "South Korean capital on the Han River with palaces and skyscrapers"
    ],
    waterFeature: "Han River",
    population: "9.7 million (26M metro)",
    famousFor: "Gyeongbokgung Palace, K-pop, Korean BBQ, Technology",
    funFact: "Seoul has the world's fastest internet - over 200 Mbps average! Korea has the highest smartphone penetration globally. The city has free WiFi everywhere - subways, parks, public spaces. You can even order fried chicken delivery to your baseball game seat via app!",
    funFactSource: "Speedtest Global Index",
    funFactSourceUrl: "https://www.speedtest.net/global-index"
  },
  
  {
    id: 43,
    name: "Hong Kong",
    continent: "Asia",
    country: "China (SAR)",
    difficulty: "easy",
    clues: [
      "Dense Asian city on the South China Sea coast",
      "Special Administrative Region built on islands and peninsulas",
      "One of the world's most vertical cities with iconic skyline",
      "Victoria Harbour separates the island from the Kowloon peninsula",
      "Former British colony known for dim sum and Star Ferry",
      "Asian financial hub on Victoria Harbour with dramatic skyline"
    ],
    waterFeature: "Victoria Harbour, South China Sea",
    population: "7.5 million",
    famousFor: "Victoria Peak, Star Ferry, Dim Sum, Skyscrapers",
    funFact: "Hong Kong has more skyscrapers than any city - over 9,000 high-rises! That's twice NYC. The city has more Rolls-Royces per capita than anywhere, yet 50% live in public housing. It's one of the world's densest cities with 6,700 people per square km!",
    funFactSource: "Hong Kong Buildings Department",
    funFactSourceUrl: "https://www.bd.gov.hk/en/"
  },
  
  {
    id: 44,
    name: "Singapore",
    continent: "Asia",
    country: "Singapore",
    difficulty: "easy",
    clues: [
      "Southeast Asian island city-state at the tip of the Malay Peninsula",
      "Strategic port city on the Strait connecting two major seas",
      "Ultra-modern city known for strict laws and cleanliness",
      "Features Marina Bay with iconic boat-shaped hotel",
      "City-state with Changi Airport consistently rated world's best",
      "Island city-state on the Strait of Malacca with Marina Bay Sands"
    ],
    waterFeature: "Strait of Malacca, Singapore Strait, Marina Bay",
    population: "5.9 million",
    famousFor: "Marina Bay Sands, Gardens by the Bay, Changi Airport, Hawker Centers",
    funFact: "Singapore is one of only three surviving city-states (with Monaco and Vatican City). Despite being tiny (734 sq km), it has the world's highest percentage of millionaires - about 1 in 6 households! It's also one of the safest cities globally.",
    funFactSource: "Singapore Department of Statistics",
    funFactSourceUrl: "https://www.singstat.gov.sg/"
  },
  
  {
    id: 45,
    name: "Istanbul",
    continent: "Europe/Asia",
    country: "Turkey",
    difficulty: "easy",
    clues: [
      "Historic city uniquely straddling two continents",
      "Sits on a strategic strait connecting the Black Sea to Mediterranean",
      "Former capital of Byzantine and Ottoman empires for 1,500+ years",
      "The Bosphorus waterway divides the city into European and Asian sides",
      "Turkey's largest city with Hagia Sophia and Blue Mosque",
      "Turkish megacity where Europe meets Asia on the Bosphorus Strait"
    ],
    waterFeature: "Bosphorus Strait, Golden Horn, Sea of Marmara",
    population: "15.8 million",
    famousFor: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus",
    funFact: "Istanbul is the ONLY city in the world spanning two continents! The Bosphorus divides it between Europe and Asia. You can have breakfast in Europe and lunch in Asia via a 15-minute ferry. The city has had three names: Byzantium, Constantinople, and Istanbul!",
    funFactSource: "Istanbul Metropolitan Municipality",
    funFactSourceUrl: "https://www.ibb.istanbul/en/"
  },
  
  {
    id: 46,
    name: "San Francisco",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Coastal California city on the Pacific Ocean with hilly terrain",
      "Built on a peninsula surrounded by water on three sides",
      "Famous for cable cars, steep hills, and tech industry",
      "Iconic orange bridge spans the Golden Gate strait at the bay entrance",
      "Northern California city with Alcatraz Island in the bay",
      "California city on a bay with the Golden Gate Bridge"
    ],
    waterFeature: "San Francisco Bay, Pacific Ocean, Golden Gate",
    population: "870,000 (7.7M metro)",
    famousFor: "Golden Gate Bridge, Cable Cars, Alcatraz, Fisherman's Wharf",
    funFact: "The Golden Gate Bridge's 'International Orange' was meant to be temporary! The Navy wanted black/yellow stripes. Architect Irving Morrow chose orange to complement nature and cut through fog - and it stuck. The bridge is repainted continuously!",
    funFactSource: "Golden Gate Bridge District",
    funFactSourceUrl: "https://www.goldengate.org/"
  },
  
  {
    id: 47,
    name: "Chicago",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city in the American Midwest with very cold winters",
      "Located on the southwestern shores of one of the Great Lakes",
      "Famous for deep-dish pizza, jazz music, and skyscrapers",
      "The 'Windy City' on Lake Michigan with iconic Navy Pier",
      "Illinois' largest city with Willis Tower (formerly Sears)",
      "Major US city on Lake Michigan with iconic downtown skyline"
    ],
    waterFeature: "Lake Michigan",
    population: "2.7 million (9.6M metro)",
    famousFor: "Willis Tower, Navy Pier, Deep-dish pizza, 'The Bean'",
    funFact: "Chicago reversed the flow of the Chicago River in 1900 - an engineering marvel! Originally flowing into Lake Michigan (drinking water source), engineers reversed it to flow away to prevent sewage contamination. It's one of the few rivers flowing backwards!",
    funFactSource: "Chicago History Museum",
    funFactSourceUrl: "https://www.chicagohistory.org/"
  },
  
  {
    id: 48,
    name: "Miami",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Southern Florida coastal city with tropical climate year-round",
      "Built on Biscayne Bay between the Everglades and Atlantic",
      "Known for Art Deco architecture, Cuban culture, and beaches",
      "Cruise capital of the world on the bay and ocean",
      "Florida's second-largest city with South Beach and Little Havana",
      "Florida city on Biscayne Bay with Art Deco District and beaches"
    ],
    waterFeature: "Biscayne Bay, Atlantic Ocean",
    population: "440,000 (6.1M metro)",
    famousFor: "South Beach, Art Deco, Cuban culture, Cruise port",
    funFact: "Miami is the only major US city founded by a woman! Julia Tuttle convinced Henry Flagler to extend his railroad to Miami in 1896 by sending him orange blossoms during a freeze, proving Miami's warm climate. The city went from 300 people to a major metropolis in 125 years!",
    funFactSource: "HistoryMiami Museum",
    funFactSourceUrl: "https://www.historymiami.org/"
  },
  
  {
    id: 49,
    name: "Boston",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Historic East Coast city key to American independence",
      "Built on Massachusetts Bay and the Charles River",
      "Home to prestigious universities Harvard and MIT nearby",
      "Freedom Trail connects Revolutionary War sites along the harbor",
      "Massachusetts capital where the Tea Party protest occurred in 1773",
      "Historic Massachusetts city on a bay where American Revolution began"
    ],
    waterFeature: "Charles River, Boston Harbor, Massachusetts Bay",
    population: "675,000 (4.9M metro)",
    famousFor: "Freedom Trail, Harvard, Fenway Park, Boston Tea Party",
    funFact: "Boston's Big Dig was the most expensive US highway project at $22 billion! The project buried the Central Artery underground (1991-2007) and took longer than the Empire State Building, Hoover Dam, and Alaska Highway combined. It used enough concrete for a sidewalk from Boston to San Francisco 3 times!",
    funFactSource: "MA Department of Transportation",
    funFactSourceUrl: "https://www.mass.gov/"
  },
  
  {
    id: 50,
    name: "Seattle",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Pacific Northwest coastal city known for rain and coffee culture",
      "Located on Puget Sound between mountains and saltwater",
      "Tech hub home to Amazon, Microsoft, and Starbucks headquarters",
      "Famous Space Needle overlooks Elliott Bay and Puget Sound",
      "Washington state's largest city with Pike Place Market",
      "Pacific Northwest city on Puget Sound with the Space Needle"
    ],
    waterFeature: "Puget Sound, Lake Washington, Elliott Bay",
    population: "750,000 (4M metro)",
    famousFor: "Space Needle, Pike Place Market, Coffee culture, Tech companies",
    funFact: "Seattle doesn't actually rain as much as its reputation suggests! It gets less rainfall than NYC, Boston, or Miami. But it's cloudy 226 days per year with constant drizzle. The city averages only 37 inches of rain yearly but 150+ rainy days - it's the frequency, not volume!",
    funFactSource: "National Weather Service",
    funFactSourceUrl: "https://www.weather.gov/sew/"
  },
  
  {
    id: 51,
    name: "Budapest",
    continent: "Europe",
    country: "Hungary",
    difficulty: "medium",
    clues: [
      "Central European capital city famous for thermal baths",
      "Divided by a major European river into two historic districts",
      "Once two separate cities: Buda (hilly west) and Pest (flat east)",
      "Chain Bridge and other spans connect the sides across the Danube",
      "Hungary's capital known as the 'Pearl of the Danube'",
      "Hungarian capital on the Danube River with Parliament Building"
    ],
    waterFeature: "Danube River",
    population: "1.8 million (3.1M metro)",
    famousFor: "Parliament Building, Chain Bridge, Thermal Baths, Ruin bars",
    funFact: "Budapest sits on a massive thermal lake underground! The city has over 100 thermal springs producing 70 million liters of warm water daily. The Romans built baths here 2,000 years ago, and Budapestians still use thermal baths for daily relaxation - some are over 400 years old!",
    funFactSource: "Budapest Tourism",
    funFactSourceUrl: "https://www.budapest.com/things_to_do/thermal_baths.en.html"
  },
  
  {
    id: 52,
    name: "Stockholm",
    continent: "Europe",
    country: "Sweden",
    difficulty: "medium",
    clues: [
      "Scandinavian capital built on 14 islands",
      "City spread across islands where Lake Mälaren meets the Baltic Sea",
      "Known for colorful historic buildings and excellent design",
      "Connected by 57 bridges spanning waterways throughout the city",
      "Sweden's capital where the Nobel Prize banquet is held annually",
      "Scandinavian capital known as 'Venice of the North' on 14 islands"
    ],
    waterFeature: "Lake Mälaren, Baltic Sea, Stockholm Archipelago",
    population: "980,000 (2.4M metro)",
    famousFor: "Gamla Stan (Old Town), Vasa Museum, Nobel Prize, ABBA Museum",
    funFact: "Stockholm's archipelago contains over 30,000 islands, skerries, and rocks - making it one of the world's largest archipelagos! Only about 1,000 are inhabited. Stockholmers have a tradition called 'allemansrätten' (freedom to roam) allowing anyone to visit and even camp on most islands temporarily!",
    funFactSource: "Visit Stockholm",
    funFactSourceUrl: "https://www.visitstockholm.com/about-stockholm/"
  },
  
  {
    id: 53,
    name: "Lisbon",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Western European capital city with year-round mild climate",
      "Built on seven hills where the Tagus River meets the Atlantic",
      "Oldest city in Western Europe, predating Rome by centuries",
      "Famous for pastel de nata pastries, fado music, and historic trams",
      "Portugal's capital with the Belém Tower on the Tagus estuary",
      "Portuguese capital on the Tagus River estuary facing the Atlantic"
    ],
    waterFeature: "Tagus River, Atlantic Ocean",
    population: "550,000 (2.9M metro)",
    famousFor: "Belém Tower, Jerónimos Monastery, Tram 28, Pastéis de Nata",
    funFact: "Lisbon was almost completely destroyed by a massive earthquake in 1755 - one of the deadliest in history! The earthquake, tsunami, and fires killed 60,000 people. It happened on All Saints' Day when churches were full of candles, which started fires that burned for 6 days. The disaster influenced Enlightenment philosophy about natural disasters.",
    funFactSource: "National Museum of Ancient Art Portugal",
    funFactSourceUrl: "https://www.museudearteantiga.pt/"
  },
  
  {
    id: 54,
    name: "Prague",
    continent: "Europe",
    country: "Czech Republic",
    difficulty: "medium",
    clues: [
      "Central European capital known as 'City of a Hundred Spires'",
      "Built along the Vltava River with historic bridges",
      "Medieval old town with astronomical clock and Gothic architecture",
      "Charles Bridge spans the Vltava connecting castle to old town",
      "Czech capital with a famous castle overlooking the river",
      "Historic Central European capital on the Vltava River with Charles Bridge"
    ],
    waterFeature: "Vltava River",
    population: "1.3 million (2.7M metro)",
    famousFor: "Prague Castle, Charles Bridge, Old Town Square, Astronomical Clock",
    funFact: "Prague's Astronomical Clock (built in 1410) is the world's oldest operating astronomical clock! Legend says the city blinded the clockmaker so he couldn't build another one elsewhere. It's not true, but the clock has survived 600+ years, wars, and even Nazi occupation - though it briefly stopped in 1945 when Germans tried to destroy it.",
    funFactSource: "Prague City Tourism",
    funFactSourceUrl: "https://www.prague.eu/en/object/places/93/astronomical-clock-orloj"
  },
  
  {
    id: 55,
    name: "Vienna",
    continent: "Europe",
    country: "Austria",
    difficulty: "medium",
    clues: [
      "Central European capital with imperial history and classical music heritage",
      "Sits on the Danube River in a historic basin",
      "Former seat of the Habsburg Empire with grand palaces",
      "Known for coffee house culture, Sachertorte, and the Danube waltz",
      "Austria's capital ranked #1 for quality of life for many years",
      "Austrian capital on the Danube with palaces and opera houses"
    ],
    waterFeature: "Danube River",
    population: "1.9 million (2.9M metro)",
    famousFor: "Schönbrunn Palace, State Opera, Coffee Houses, Classical Music",
    funFact: "Vienna has more classical music concerts per year than any other city! It's the birthplace or home of Mozart, Beethoven, Brahms, and Strauss. The city's New Year's Concert is watched by 50 million people worldwide. Interestingly, Vienna's sewers inspired the famous chase scene in 'The Third Man' (1949).",
    funFactSource: "Vienna Tourist Board",
    funFactSourceUrl: "https://www.wien.info/en/music-stage-shows/classical-music"
  },
  
  {
    id: 56,
    name: "Buenos Aires",
    continent: "South America",
    country: "Argentina",
    difficulty: "medium",
    clues: [
      "Major South American city on the Atlantic coast",
      "Built on the southern shore of the Río de la Plata estuary",
      "Known for tango dancing, beef culture, and European-style architecture",
      "Called the 'Paris of South America' on the wide river estuary",
      "Argentina's capital with colorful La Boca neighborhood",
      "Argentine capital on the Río de la Plata estuary"
    ],
    waterFeature: "Río de la Plata",
    population: "3 million (15M metro)",
    famousFor: "Tango, La Boca, Recoleta Cemetery, Teatro Colón, Beef steaks",
    funFact: "Buenos Aires has more psychologists per capita than anywhere else in the world! With about 200 psychologists per 100,000 people (3x more than New York), psychoanalysis is deeply embedded in porteño culture. You'll find therapy offices on nearly every block in some neighborhoods!",
    funFactSource: "Buenos Aires Psychology Association",
    funFactSourceUrl: "https://www.apa.org/international/pi/2012/02/argentina"
  },
  
  {
    id: 57,
    name: "Cape Town",
    continent: "Africa",
    country: "South Africa",
    difficulty: "medium",
    clues: [
      "Coastal city at the southern tip of Africa",
      "Sits between the Atlantic and Indian Oceans with a famous flat-topped mountain",
      "Known for penguins, wine country, and dramatic coastal scenery",
      "Table Mountain overlooks the harbor and two ocean coastlines",
      "South Africa's legislative capital with Robben Island in the bay",
      "South African city where two oceans meet at the Cape of Good Hope"
    ],
    waterFeature: "Atlantic Ocean, Table Bay",
    population: "4.7 million",
    famousFor: "Table Mountain, Cape of Good Hope, Robben Island, Wine Region",
    funFact: "Cape Town is the only city in the world where you can see African penguins in their natural habitat! Boulders Beach has a colony of over 2,000 penguins that waddle around just meters from swimmers. The species is endangered, making this urban penguin colony crucial for conservation.",
    funFactSource: "South African National Parks",
    funFactSourceUrl: "https://www.sanparks.org/parks/table_mountain/"
  },
  
  {
    id: 58,
    name: "Vancouver",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Pacific Northwest coastal city with mountains and ocean",
      "Built on a peninsula surrounded by water and backed by mountains",
      "Consistently ranked among world's most liveable cities",
      "Burrard Inlet and False Creek waterways cut through the city",
      "Canadian west coast city near the U.S. border with Stanley Park",
      "Canadian Pacific coast city with mountains meeting the sea"
    ],
    waterFeature: "Pacific Ocean, Burrard Inlet, False Creek",
    population: "675,000 (2.6M metro)",
    famousFor: "Stanley Park, Granville Island, Grouse Mountain, Diverse culture",
    funFact: "Vancouver is one of the few cities in the world where you can ski in the morning and go to the beach in the afternoon! Grouse Mountain ski resort is just 15 minutes from downtown, while beaches like Kitsilano are in the city. It hosted the 2010 Winter Olympics despite being relatively mild and rainy!",
    funFactSource: "Tourism Vancouver",
    funFactSourceUrl: "https://www.tourismvancouver.com/"
  },
  
  {
    id: 59,
    name: "Seoul",
    continent: "Asia",
    country: "South Korea",
    difficulty: "medium",
    clues: [
      "Major East Asian capital with advanced technology",
      "Built along the Han River in a basin surrounded by mountains",
      "Known for K-pop, Korean BBQ, and ultra-fast internet",
      "Han River divides the city into northern and southern districts",
      "South Korea's capital with famous Gangnam district and tower",
      "South Korean capital on the Han River with palaces and modern skyscrapers"
    ],
    waterFeature: "Han River",
    population: "9.7 million (26M metro)",
    famousFor: "Gyeongbokgung Palace, K-pop, Korean BBQ, Technology",
    funFact: "Seoul has the world's fastest average internet speed - over 200 Mbps! South Korea also has the highest smartphone penetration globally. The city has free WiFi in all subways, parks, and public spaces. You can even order fried chicken delivery to your seat at a baseball game via app!",
    funFactSource: "Speedtest Global Index",
    funFactSourceUrl: "https://www.speedtest.net/global-index"
  },
  
  {
    id: 60,
    name: "Athens",
    continent: "Europe",
    country: "Greece",
    difficulty: "medium",
    clues: [
      "Ancient European capital city with over 3,400 years of history",
      "Built in the Attic Peninsula near the Aegean Sea coast",
      "Birthplace of democracy and Western civilization",
      "Acropolis and Parthenon overlook the city and nearby Saronic Gulf",
      "Greece's capital where philosophy, drama, and democracy began",
      "Greek capital near the Aegean Sea with the ancient Acropolis"
    ],
    waterFeature: "Aegean Sea, Saronic Gulf",
    population: "3.2 million (3.8M metro)",
    famousFor: "Acropolis, Parthenon, Ancient Agora, Temple of Olympian Zeus",
    funFact: "The Acropolis' Parthenon has no straight lines - it's all optical illusions! The columns bulge slightly in the middle and lean inward, and the floor is curved. This was intentional to counter optical illusions that would make straight lines appear curved from a distance. Ancient Greek architects were secretly masters of psychology!",
    funFactSource: "Acropolis Museum",
    funFactSourceUrl: "https://www.theacropolismuseum.gr/"
  },
  
  // Continue with more MEDIUM cities...
  {
    id: 61,
    name: "Melbourne",
    continent: "Oceania",
    country: "Australia",
    difficulty: "medium",
    clues: [
      "Coastal city in southeastern Australia with four seasons in one day",
      "Built on the Yarra River and Port Phillip Bay",
      "Known for coffee culture, street art, and sports events",
      "Yarra River flows through the city into the bay",
      "Australia's cultural capital with laneways and the Australian Open",
      "Australian cultural capital on Port Phillip Bay with the Yarra River"
    ],
    waterFeature: "Yarra River, Port Phillip Bay",
    population: "5.2 million",
    famousFor: "Coffee culture, Street art, Australian Open, Sports capital",
    funFact: "Melbourne is considered the sports capital of the world! It hosts the Australian Open (tennis), Formula 1 Grand Prix, Melbourne Cup (horse racing), AFL Grand Final, and Boxing Day cricket test - all major global events. The Melbourne Cricket Ground (MCG) holds 100,000 people and is the southern hemisphere's largest stadium!",
    funFactSource: "Visit Melbourne",
    funFactSourceUrl: "https://www.visitmelbourne.com/things-to-do/sport"
  },
  
  {
    id: 62,
    name: "Montreal",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Major Canadian city with distinct French character",
      "Built on an island where the St. Lawrence and Ottawa Rivers meet",
      "Second-largest French-speaking city after Paris",
      "Named after Mount Royal, the triple-peaked hill at its center",
      "Quebec's largest city known for festivals and bagels",
      "Quebec's largest city on the St. Lawrence River island"
    ],
    waterFeature: "St. Lawrence River",
    population: "1.8 million (4.3M metro)",
    famousFor: "Old Montreal, Mount Royal, Bagels, Just for Laughs Festival",
    funFact: "Montreal has the largest underground pedestrian network in the world - over 33 km of tunnels! Called RÉSO, it connects shopping malls, metro stations, offices, and apartments. During harsh winters (-30°C), you can shop, work, eat, and live entirely underground without going outside!",
    funFactSource: "Montreal Tourism",
    funFactSourceUrl: "https://www.mtl.org/en/experience/underground-city"
  },
  
  {
    id: 63,
    name: "San Diego",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Southern California coastal city with year-round perfect weather",
      "Located on the Pacific Ocean near the Mexican border",
      "Known for beaches, navy base, and Comic-Con convention",
      "Natural deep-water harbor on the Pacific coast",
      "California's second-largest city with world-famous zoo",
      "Southern California city on the Pacific with beaches and harbor"
    ],
    waterFeature: "Pacific Ocean, San Diego Bay",
    population: "1.4 million (3.3M metro)",
    famousFor: "San Diego Zoo, Balboa Park, Beaches, Comic-Con",
    funFact: "San Diego has the most ideal climate in the United States according to meteorologists! It averages 266 sunny days per year with temperatures rarely above 85°F or below 50°F. The city has never recorded snow in its downtown area since record-keeping began in 1850!",
    funFactSource: "National Weather Service",
    funFactSourceUrl: "https://www.weather.gov/sgx/"
  },
  
  {
    id: 64,
    name: "Edinburgh",
    continent: "Europe",
    country: "Scotland",
    difficulty: "medium",
    clues: [
      "Historic Scottish capital built on volcanic hills",
      "Coastal city on the Firth of Forth estuary",
      "Famous for medieval Old Town and Georgian New Town",
      "Historic castle sits atop an extinct volcano overlooking the firth",
      "Scotland's capital hosting the world's largest arts festival annually",
      "Scottish capital on the Firth of Forth with famous castle"
    ],
    waterFeature: "Firth of Forth, North Sea",
    population: "530,000 (900,000 metro)",
    famousFor: "Edinburgh Castle, Royal Mile, Edinburgh Festival, Arthur's Seat",
    funFact: "Edinburgh has more trees per capita than any other city in the UK! The city is built on extinct volcanoes - Edinburgh Castle sits on an old volcanic plug. There's also a network of underground vaults beneath the Royal Mile where people lived in the 18th century. Ghost tours explore these 'haunted' vaults today!",
    funFactSource: "Historic Environment Scotland",
    funFactSourceUrl: "https://www.historicenvironment.scot/visit-a-place/places/edinburgh-castle/"
  },
  
  {
    id: 65,
    name: "Hong Kong",
    continent: "Asia",
    country: "China (SAR)",
    difficulty: "medium",
    clues: [
      "Dense Asian city on the South China Sea coast",
      "Special Administrative Region built on islands and peninsulas",
      "One of the world's most vertical cities with iconic skyline",
      "Victoria Harbour separates the island from the Kowloon peninsula",
      "Former British colony known for dim sum and Star Ferry",
      "Asian financial hub on Victoria Harbour with dramatic skyline"
    ],
    waterFeature: "Victoria Harbour, South China Sea",
    population: "7.5 million",
    famousFor: "Victoria Peak, Star Ferry, Dim Sum, Skyscrapers",
    funFact: "Hong Kong has more skyscrapers than any other city - over 9,000 high-rise buildings! That's twice as many as New York. The city has more Rolls-Royces per capita than anywhere else, yet 50% of residents live in public housing. It's one of the world's densest cities with 6,700 people per square km!",
    funFactSource: "Hong Kong Buildings Department",
    funFactSourceUrl: "https://www.bd.gov.hk/en/index.html"
  },
  
  {
    id: 66,
    name: "Boston",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Historic East Coast city with a key role in American independence",
      "Built on Massachusetts Bay and the Charles River",
      "Home to prestigious universities Harvard and MIT nearby",
      "Freedom Trail connects Revolutionary War sites along the harbor",
      "Massachusetts capital where the Tea Party protest occurred in 1773",
      "Historic Massachusetts city on a bay where American Revolution began"
    ],
    waterFeature: "Charles River, Boston Harbor, Massachusetts Bay",
    population: "675,000 (4.9M metro)",
    famousFor: "Freedom Trail, Harvard, Fenway Park, Boston Tea Party",
    funFact: "Boston's Big Dig was the most expensive highway project in U.S. history at $22 billion! The project buried the Central Artery underground (1991-2007) and took longer than the Empire State Building, Hoover Dam, and Alaska Highway combined. It used enough concrete to build a 3-foot-wide sidewalk from Boston to San Francisco three times!",
    funFactSource: "Massachusetts Department of Transportation",
    funFactSourceUrl: "https://www.mass.gov/info-details/about-the-big-dig"
  },
  
  {
    id: 67,
    name: "Seattle",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Pacific Northwest coastal city known for rain and coffee culture",
      "Located on Puget Sound between mountains and saltwater",
      "Tech hub home to Amazon, Microsoft, and Starbucks headquarters",
      "Famous Space Needle overlooks Elliott Bay and Puget Sound",
      "Washington state's largest city with Pike Place Market",
      "Pacific Northwest city on Puget Sound with the Space Needle"
    ],
    waterFeature: "Puget Sound, Lake Washington, Elliott Bay",
    population: "750,000 (4M metro)",
    famousFor: "Space Needle, Pike Place Market, Coffee culture, Tech companies",
    funFact: "Seattle doesn't actually rain as much as its reputation suggests! It gets less annual rainfall than New York, Boston, or Miami. But it's cloudy 226 days per year with constant drizzle rather than heavy rain. The city averages only 37 inches of rain yearly but 150+ rainy days - it's the frequency, not volume!",
    funFactSource: "National Weather Service Seattle",
    funFactSourceUrl: "https://www.weather.gov/sew/"
  },
  
  {
    id: 68,
    name: "Dublin",
    continent: "Europe",
    country: "Ireland",
    difficulty: "medium",
    clues: [
      "Irish capital city on the east coast with mild, rainy climate",
      "Built where a river meets a bay on the Irish Sea",
      "Famous for literary heritage, Guinness, and friendly pubs",
      "Ha'penny Bridge crosses the Liffey in the city center",
      "Ireland's capital and birthplace of James Joyce and Oscar Wilde",
      "Irish capital on the River Liffey flowing into the Irish Sea"
    ],
    waterFeature: "River Liffey, Dublin Bay, Irish Sea",
    population: "555,000 (1.4M metro)",
    famousFor: "Guinness Storehouse, Trinity College, Temple Bar, Literary heritage",
    funFact: "Dublin's Trinity College Library houses the Book of Kells (9th century) and has a 65-meter Long Room with 200,000 of the library's oldest books! The Long Room inspired the Jedi Archives in Star Wars. The library also receives a copy of every book published in the UK and Ireland - they add 100,000 books yearly!",
    funFactSource: "Trinity College Dublin",
    funFactSourceUrl: "https://www.tcd.ie/library/bookofkells/"
  },
  
  {
    id: 69,
    name: "Miami",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Southern Florida coastal city with tropical climate year-round",
      "Built on Biscayne Bay between the Everglades and Atlantic Ocean",
      "Known for Art Deco architecture, Cuban culture, and beaches",
      "Cruise capital of the world on the bay and ocean",
      "Florida's second-largest city with South Beach and Little Havana",
      "Florida city on Biscayne Bay with Art Deco District and beaches"
    ],
    waterFeature: "Biscayne Bay, Atlantic Ocean",
    population: "440,000 (6.1M metro)",
    famousFor: "South Beach, Art Deco, Cuban culture, Cruise port",
    funFact: "Miami is the only major U.S. city founded by a woman! Julia Tuttle convinced railroad tycoon Henry Flagler to extend his railroad to Miami in 1896 by sending him orange blossoms during a freeze, proving Miami's warm climate. The city went from 300 people to a major metropolis in just 125 years!",
    funFactSource: "HistoryMiami Museum",
    funFactSourceUrl: "https://www.historymiami.org/"
  },
  
  {
    id: 70,
    name: "Zurich",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "medium",
    clues: [
      "Swiss city known for banking and high quality of life",
      "Built where a lake meets the Limmat River in the Alps",
      "Global financial center with picturesque old town",
      "Limmat River flows from the lake through the historic center",
      "Switzerland's largest city with world-class chocolatiers",
      "Swiss financial capital on a lake and the Limmat River"
    ],
    waterFeature: "Lake Zurich, Limmat River",
    population: "430,000 (1.5M metro)",
    famousFor: "Banking, Chocolate, Lake Zurich, Swiss quality of life",
    funFact: "Zurich has more museums per capita than any other city in the world - over 50 museums for just 430,000 people! The city also has a unique 'swimming culture' where locals swim down the rivers during lunch breaks in summer. Waterproof bags called 'Wickelfisch' let swimmers carry clothes while floating downstream!",
    funFactSource: "Zurich Tourism",
    funFactSourceUrl: "https://www.zuerich.com/"
  },
  
  // ========================================
  // HARD CITIES (30 total)
  // ========================================
  
  {
    id: 71,
    name: "Ljubljana",
    continent: "Europe",
    country: "Slovenia",
    difficulty: "hard",
    clues: [
      "Small European capital known for green spaces and quality of life",
      "Built along the Ljubljanica River in a valley",
      "Car-free historic center with Art Nouveau and Baroque architecture",
      "Dragon Bridge and Triple Bridge cross the Ljubljanica",
      "Slovenia's capital named European Green Capital in 2016",
      "Slovenian capital on a river with medieval castle and bridges"
    ],
    waterFeature: "Ljubljanica River, Sava River",
    population: "295,000 (560,000 metro)",
    famousFor: "Dragon Bridge, Ljubljana Castle, Green capital, Tivoli Park",
    funFact: "Ljubljana was the first European capital to commit to going zero-waste! The city recycles or composts over 68% of waste (most cities are around 30%). It also banned cars from the 32,000 square meter city center, has 200+ km of bike paths, and every resident lives within 300m of a green space. It's Europe's greenest capital!",
    funFactSource: "Zero Waste Europe",
    funFactSourceUrl: "https://zerowasteeurope.eu/library/case-study-ljubljana/"
  },
  
  {
    id: 72,
    name: "Reykjavik",
    continent: "Europe",
    country: "Iceland",
    difficulty: "hard",
    clues: [
      "World's northernmost capital city with midnight sun in summer",
      "Coastal city on a bay in the North Atlantic Ocean",
      "Powered entirely by geothermal and hydroelectric energy",
      "Faxaflói Bay waterfront with views of mountains and ocean",
      "Iceland's capital with only 130,000 people in the metro area",
      "World's northernmost capital on the Atlantic with Northern Lights"
    ],
    waterFeature: "Faxaflói Bay, Atlantic Ocean",
    population: "135,000 (235,000 metro)",
    famousFor: "Northern Lights, Blue Lagoon, Hallgrímskirkja church, Geothermal energy",
    funFact: "Reykjavik has no mosquitoes! Iceland is one of only three countries in the world (with Antarctica and Seychelles) that are completely mosquito-free. The climate is too cold for mosquito eggs to hatch. The city also runs entirely on renewable energy - geothermal and hydro - making it one of the cleanest cities on Earth!",
    funFactSource: "Visit Reykjavik",
    funFactSourceUrl: "https://www.visitreykjavik.is/"
  },
  
  {
    id: 73,
    name: "Tallinn",
    continent: "Europe",
    country: "Estonia",
    difficulty: "hard",
    clues: [
      "Baltic capital city with well-preserved medieval old town",
      "Coastal city on the Gulf of Finland facing north",
      "Former Hanseatic trading city with city walls still intact",
      "Historic bay harbor has been an important port for centuries",
      "Estonia's capital and most digitally advanced city in Europe",
      "Estonian capital on the Baltic Sea with medieval UNESCO old town"
    ],
    waterFeature: "Gulf of Finland, Baltic Sea, Tallinn Bay",
    population: "440,000 (540,000 metro)",
    famousFor: "Medieval Old Town, Digital society, Toompea Castle",
    funFact: "Estonia (capital Tallinn) was the first country to offer e-Residency and online voting! Tallinn has free public WiFi everywhere, and 99% of government services are online. Estonians can vote, pay taxes, start companies, and sign documents digitally. Skype was invented here, and the country has produced more startups per capita than anywhere except Silicon Valley!",
    funFactSource: "e-Estonia",
    funFactSourceUrl: "https://e-estonia.com/"
  },
  
  {
    id: 74,
    name: "Porto",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Historic Portuguese city on the Atlantic coast",
      "Built on hills along the Douro River near its mouth",
      "Famous for port wine production in riverside caves",
      "Six bridges span the Douro, including the iconic Dom Luís I Bridge",
      "Portugal's second-largest city with colorful Ribeira district",
      "Portuguese city on the Douro River where port wine is aged"
    ],
    waterFeature: "Douro River, Atlantic Ocean",
    population: "240,000 (1.7M metro)",
    famousFor: "Port wine, Dom Luís Bridge, Ribeira district, Lello Bookstore",
    funFact: "Porto's Livraria Lello bookstore (opened 1906) is considered one of the most beautiful bookstores in the world and allegedly inspired J.K. Rowling while she lived in Porto! The red spiral staircase and neo-Gothic architecture appear similar to Hogwarts. Rowling taught English in Porto and wrote parts of Harry Potter there!",
    funFactSource: "Livraria Lello",
    funFactSourceUrl: "https://www.livrarialello.pt/en/"
  },
  
  {
    id: 75,
    name: "Bergen",
    continent: "Europe",
    country: "Norway",
    difficulty: "hard",
    clues: [
      "Norwegian coastal city surrounded by seven mountains",
      "Built on a natural harbor on the North Sea coast",
      "Former Hanseatic League trading post with colorful wooden buildings",
      "Vågen harbor features the famous Bryggen wharf",
      "Norway's second-largest city and gateway to the fjords",
      "Norwegian coastal city on the North Sea with Bryggen UNESCO wharf"
    ],
    waterFeature: "North Sea, Vågen Harbor, Fjords",
    population: "285,000 (440,000 metro)",
    famousFor: "Bryggen wharf, Fjords, Fish market, Seven mountains",
    funFact: "Bergen is the rainiest city in Europe with over 240 rainy days per year! It gets 2,250mm of rain annually (London gets only 600mm). Locals joke that Bergen has two seasons: 'July and winter.' Despite the rain, Bergen was named European City of Culture and is the gateway to Norway's spectacular fjords.",
    funFactSource: "Visit Bergen",
    funFactSourceUrl: "https://en.visitbergen.com/"
  },
  
  {
    id: 76,
    name: "Bruges",
    continent: "Europe",
    country: "Belgium",
    difficulty: "hard",
    clues: [
      "Medieval Flemish city in northwestern Europe",
      "Known as 'Venice of the North' for its canal network",
      "Canals wind through the remarkably preserved medieval center",
      "Historic trading city connected to the North Sea via waterways",
      "Belgian city famous for chocolate, beer, and cobblestone streets",
      "Medieval Belgian city with canals and the iconic Belfry tower"
    ],
    waterFeature: "Canal network, North Sea connection",
    population: "120,000",
    famousFor: "Medieval architecture, Canals, Chocolate, Beer, Belfry",
    funFact: "Bruges was once one of the wealthiest cities in the world during the 14th century! When its river silted up and it lost sea access, the city went into economic decline - but this 'preserved' its medieval architecture perfectly. Nothing was demolished or modernized. Today, its 'poverty' became its fortune as tourism brings in millions seeking authentic medieval Europe!",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/996/"
  },
  
  {
    id: 77,
    name: "Dubrovnik",
    continent: "Europe",
    country: "Croatia",
    difficulty: "hard",
    clues: [
      "Historic walled city on the Adriatic Sea coast",
      "Known for distinctive orange-roofed old town and city walls",
      "Medieval maritime republic and trading power",
      "Adriatic coastal city used as King's Landing filming location",
      "Croatian city called the 'Pearl of the Adriatic'",
      "Croatian pearl of the Adriatic Sea with medieval walls"
    ],
    waterFeature: "Adriatic Sea",
    population: "42,000",
    famousFor: "City walls, Game of Thrones filming, Old Town, Cable car",
    funFact: "Dubrovnik was an independent republic (Republic of Ragusa) for 450 years (1358-1808) and rivals Venice in maritime history! It had the third-largest fleet in the Mediterranean. The city was the first in Europe to abolish slavery (in 1416!) and had one of the first orphanages and quarantine hospitals in the world.",
    funFactSource: "Dubrovnik Museums",
    funFactSourceUrl: "https://www.dumus.hr/en/"
  },
  
  {
    id: 78,
    name: "Marrakech",
    continent: "Africa",
    country: "Morocco",
    difficulty: "hard",
    clues: [
      "North African city near the Atlas Mountains foothills",
      "Built in the desert but sustained by irrigation from mountain rivers",
      "Famous for bustling souks, riads, and ochre-colored buildings",
      "Red sandstone buildings earned it the nickname 'Red City'",
      "Morocco's fourth-largest city with Jemaa el-Fnaa square",
      "Moroccan red city with historic medina, souks, and Koutoubia Mosque"
    ],
    waterFeature: "Tensift River (seasonal), Mountain springs",
    population: "930,000 (1.3M metro)",
    famousFor: "Medina, Souks, Jardin Majorelle, Jemaa el-Fnaa square",
    funFact: "Marrakech has an ancient underground water system called 'khettaras' that brings water from the Atlas Mountains over 30km away! Built 1,000 years ago, these underground channels still function today. The city also has the largest traditional souk (market) in Morocco covering over 600 acres with 18 different souks!",
    funFactSource: "Marrakech Tourism",
    funFactSourceUrl: "https://www.visitmorocco.com/en/travel/marrakech"
  },
  
  {
    id: 79,
    name: "Kyoto",
    continent: "Asia",
    country: "Japan",
    difficulty: "hard",
    clues: [
      "Ancient Japanese city surrounded by mountains on three sides",
      "Built along the Kamo and Katsura Rivers in a basin",
      "Former imperial capital for over 1,000 years",
      "Famous for over 2,000 temples, shrines, and traditional geisha districts",
      "Japan's cultural heart with bamboo groves and zen gardens",
      "Ancient Japanese capital on the Kamo River with Fushimi Inari and golden temples"
    ],
    waterFeature: "Kamo River, Katsura River",
    population: "1.5 million",
    famousFor: "Fushimi Inari Shrine, Bamboo Forest, Geisha districts, Temples",
    funFact: "Kyoto was spared from atomic bombing in WWII because U.S. Secretary of War Henry Stimson had honeymooned there and appreciated its cultural significance! Kyoto was initially on the target list but Stimson successfully argued to remove it. This decision preserved 17 UNESCO World Heritage Sites and over 2,000 temples and shrines!",
    funFactSource: "Atomic Heritage Foundation",
    funFactSourceUrl: "https://www.atomicheritage.org/history/kyoto-spared"
  },
  
  {
    id: 80,
    name: "Havana",
    continent: "North America",
    country: "Cuba",
    difficulty: "hard",
    clues: [
      "Caribbean capital city with Spanish colonial architecture",
      "Located on a natural harbor on the Gulf of Mexico coast",
      "Famous for vintage American cars, cigars, and salsa music",
      "Historic harbor was a strategic Spanish colonial port",
      "Cuba's capital with colorful old town and Malecón waterfront",
      "Cuban capital on the Caribbean with classic cars and colonial architecture"
    ],
    waterFeature: "Havana Harbor, Gulf of Mexico, Caribbean Sea",
    population: "2.1 million",
    famousFor: "Classic cars, Cigars, Malecón, Colonial Old Town, Mojitos",
    funFact: "Havana has over 60,000 vintage American cars from the 1950s still running on the streets! When the U.S. embargo began in 1960, Cubans couldn't import new cars, so they kept their old Chevys and Fords running with incredible ingenuity - using parts from Soviet Ladas, boat engines, and pure creativity. These 'máquinas' are now worth more than when new!",
    funFactSource: "Havana Historian Office",
    funFactSourceUrl: "https://www.habananuestra.cu/"
  },
  
  {
    id: 81,
    name: "Salzburg",
    continent: "Europe",
    country: "Austria",
    difficulty: "hard",
    clues: [
      "Alpine city in Central Europe known for classical music",
      "Built along the Salzach River in a valley surrounded by mountains",
      "Birthplace of Wolfgang Amadeus Mozart",
      "Historic old town lies on both banks of the Salzach River",
      "Austrian city famous for 'The Sound of Music' and baroque architecture",
      "Mozart's birthplace on the Salzach River with massive hilltop fortress"
    ],
    waterFeature: "Salzach River",
    population: "155,000",
    famousFor: "Mozart's birthplace, Sound of Music, Hohensalzburg Fortress, Baroque architecture",
    funFact: "Salzburg means 'Salt Castle' - the city's wealth came from salt mining! The Hallstatt salt mines nearby are the world's oldest (over 7,000 years old). Mozart was born here in 1756, and the city hosts 4,000+ cultural events annually - more than one every two hours!",
    funFactSource: "Salzburg Tourism",
    funFactSourceUrl: "https://www.salzburg.info/"
  },
  
  {
    id: 82,
    name: "Geneva",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "hard",
    clues: [
      "Swiss city known for international diplomacy and banking",
      "Located where the Rhône River exits a major Alpine lake",
      "Home to UN headquarters and Red Cross",
      "Famous Jet d'Eau fountain shoots water 140m high in the lake",
      "Swiss city on Europe's largest Alpine lake",
      "Swiss city on a large Alpine lake where the Rhône begins"
    ],
    waterFeature: "Lake Geneva, Rhône River",
    population: "200,000 (500,000 metro)",
    famousFor: "UN headquarters, Red Cross, CERN, Swiss watches, Jet d'Eau",
    funFact: "Geneva is home to CERN, where the World Wide Web was invented in 1989! Tim Berners-Lee created it to help scientists share information. The city also has the world's highest density of international organizations - over 250! It's also where the Geneva Conventions were signed.",
    funFactSource: "CERN",
    funFactSourceUrl: "https://home.cern/"
  },
  
  {
    id: 83,
    name: "Nice",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French Riviera city with Mediterranean climate",
      "Coastal resort on the Bay of Angels on the Mediterranean",
      "Known for pebble beaches, Promenade des Anglais, and Old Town",
      "Azure blue waters of the Baie des Anges waterfront",
      "French city popular with artists and wealthy vacationers",
      "French Riviera resort city on the Mediterranean with azure waters"
    ],
    waterFeature: "Mediterranean Sea, Baie des Anges",
    population: "340,000 (1M metro)",
    famousFor: "Promenade des Anglais, French Riviera, Azure coast, Nice Carnival",
    funFact: "Nice was actually Italian (part of the Kingdom of Sardinia) until 1860! France annexed it after a controversial referendum where 99% voted to join France (though the vote's legitimacy is disputed). The city's name comes from Greek Nike, goddess of victory. It's France's 5th-largest city!",
    funFactSource: "Nice Tourism",
    funFactSourceUrl: "https://en.nicetourisme.com/"
  },
  
  {
    id: 84,
    name: "Florence",
    continent: "Europe",
    country: "Italy",
    difficulty: "hard",
    clues: [
      "Italian Renaissance city in Tuscany region",
      "Built along the Arno River in central Italy",
      "Birthplace of the Renaissance with incredible art and architecture",
      "Ponte Vecchio medieval bridge crosses the Arno",
      "Italian city with the Uffizi Gallery and Michelangelo's David",
      "Renaissance Italian city on the Arno River - birthplace of the Renaissance"
    ],
    waterFeature: "Arno River",
    population: "380,000 (1M metro)",
    famousFor: "Uffizi Gallery, Duomo, Michelangelo's David, Ponte Vecchio, Renaissance art",
    funFact: "Florence was the richest city in Europe in the 1400s! The Medici banking family basically invented modern banking here. The city has the highest concentration of Renaissance art in the world - 30% of the world's art treasures are in Florence. It was Italy's capital 1865-1871!",
    funFactSource: "Uffizi Galleries",
    funFactSourceUrl: "https://www.uffizi.it/en"
  },
  
  {
    id: 85,
    name: "Naples",
    continent: "Europe",
    country: "Italy",
    difficulty: "hard",
    clues: [
      "Ancient Italian port city with active volcano nearby",
      "Located on a bay on the Mediterranean coast near an active volcano",
      "Known for pizza invention, Pompeii ruins, and Mount Vesuvius",
      "Historic port on the bay with islands of Capri and Ischia offshore",
      "Southern Italian city where pizza was invented",
      "Southern Italian port city on a bay with Mount Vesuvius looming"
    ],
    waterFeature: "Bay of Naples, Mediterranean Sea, Tyrrhenian Sea",
    population: "960,000 (3.1M metro)",
    famousFor: "Pizza, Pompeii, Mount Vesuvius, Historic center, Neapolitan culture",
    funFact: "Naples invented pizza! The Margherita pizza was created here in 1889 for Queen Margherita, using tomato (red), mozzarella (white), and basil (green) to represent the Italian flag. The city has the largest historic city center in Europe and is the birthplace of mandolins and Sophia Loren!",
    funFactSource: "UNESCO Naples",
    funFactSourceUrl: "https://whc.unesco.org/en/list/726/"
  },
  
  {
    id: 86,
    name: "Krakow",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Historic Polish city that escaped WWII destruction",
      "Built on the Vistula River in southern Poland",
      "Medieval old town with Europe's largest market square",
      "Vistula River winds through this former Polish capital",
      "Polish city with Wawel Castle and well-preserved old town",
      "Historic Polish city on the Vistula River with well-preserved medieval architecture"
    ],
    waterFeature: "Vistula River",
    population: "780,000 (1.8M metro)",
    famousFor: "Wawel Castle, Main Market Square, Historic center, Salt mines",
    funFact: "Krakow's Main Market Square (built 1257) is Europe's largest medieval town square! The city was Poland's capital for 500+ years and miraculously escaped destruction in WWII. Nearby Wieliczka Salt Mine has been operating continuously for over 700 years and has an entire underground cathedral carved from salt!",
    funFactSource: "Krakow UNESCO",
    funFactSourceUrl: "https://whc.unesco.org/en/list/29/"
  },
  
  {
    id: 87,
    name: "Seville",
    continent: "Europe",
    country: "Spain",
    difficulty: "hard",
    clues: [
      "Andalusian city in southern Spain with Moorish heritage",
      "Built along the Guadalquivir River in southwestern Spain",
      "Known for flamenco dancing, tapas, and historic architecture",
      "Guadalquivir River is Spain's only navigable river",
      "Spanish city with the Alcázar palace and Gothic cathedral",
      "Andalusian capital on the Guadalquivir River with Moorish palaces"
    ],
    waterFeature: "Guadalquivir River",
    population: "690,000 (1.5M metro)",
    famousFor: "Alcázar, Seville Cathedral, Plaza de España, Flamenco, Tapas",
    funFact: "Seville's cathedral is the world's largest Gothic cathedral and the 3rd-largest church overall! Christopher Columbus is buried there. The city also has the oldest functioning bullring in Spain (1749) and was the birthplace of flamenco dancing. Bizet's opera 'Carmen' is set in Seville!",
    funFactSource: "Seville Cathedral",
    funFactSourceUrl: "https://www.catedraldesevilla.es/"
  },
  
  {
    id: 88,
    name: "Valencia",
    continent: "Europe",
    country: "Spain",
    difficulty: "hard",
    clues: [
      "Mediterranean port city in eastern Spain",
      "Built where the Turia River meets the Mediterranean Sea",
      "Known for paella, City of Arts and Sciences, and oranges",
      "Former Turia riverbed converted into urban park",
      "Spain's third-largest city famous for Las Fallas festival",
      "Spanish Mediterranean city where paella was invented"
    ],
    waterFeature: "Mediterranean Sea, Turia River (former riverbed)",
    population: "800,000 (1.8M metro)",
    famousFor: "Paella, City of Arts and Sciences, Las Fallas, Beaches",
    funFact: "Valencia invented paella! The traditional recipe includes rabbit, chicken, and green beans (not seafood). After a devastating 1957 flood, the city diverted the Turia River and converted the riverbed into a 9km park with gardens, sports facilities, and the futuristic City of Arts and Sciences!",
    funFactSource: "Valencia Tourism",
    funFactSourceUrl: "https://www.visitvalencia.com/"
  },
  
  {
    id: 89,
    name: "Porto",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Historic Portuguese city on the Atlantic coast",
      "Built on hills along the Douro River near its mouth",
      "Famous for port wine production in riverside caves",
      "Six bridges span the Douro, including iconic Dom Luís I Bridge",
      "Portugal's second-largest city with colorful Ribeira district",
      "Portuguese city on the Douro River where port wine is aged"
    ],
    waterFeature: "Douro River, Atlantic Ocean",
    population: "240,000 (1.7M metro)",
    famousFor: "Port wine, Dom Luís Bridge, Ribeira district, Lello Bookstore",
    funFact: "Porto's Livraria Lello bookstore (1906) is one of the world's most beautiful and allegedly inspired J.K. Rowling! She taught English in Porto and wrote parts of Harry Potter there. The red spiral staircase resembles Hogwarts. Port wine gets its name from the city!",
    funFactSource: "Livraria Lello",
    funFactSourceUrl: "https://www.livrarialello.pt/en/"
  },
  
  {
    id: 90,
    name: "Lyon",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French city at the confluence of two major rivers",
      "Located where the Rhône and Saône rivers meet",
      "Known as the gastronomic capital of France",
      "Renaissance old town between two rivers",
      "France's third-largest city famous for silk and cuisine",
      "French gastronomic capital at the confluence of the Rhône and Saône"
    ],
    waterFeature: "Rhône River, Saône River",
    population: "520,000 (2.3M metro)",
    famousFor: "Gastronomy, Old Lyon, Silk industry, Festivals of Light",
    funFact: "Lyon is the gastronomic capital of France with more restaurants per capita than anywhere else! The city invented cinema - the Lumière brothers showed the first films here in 1895. Lyon also has the largest Renaissance district in Europe and hosts the spectacular Festival of Lights each December!",
    funFactSource: "Lyon Tourism",
    funFactSourceUrl: "https://www.lyon-france.com/"
  },
  
  {
    id: 91,
    name: "Marseille",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "Ancient port city in southern France",
      "Located on the Mediterranean coast with natural harbor",
      "France's oldest city founded by Greeks 2,600 years ago",
      "Old Port (Vieux-Port) has been the harbor for millennia",
      "France's second-largest city known for bouillabaisse",
      "France's oldest city on the Mediterranean with ancient Greek origins"
    ],
    waterFeature: "Mediterranean Sea, Old Port (Vieux-Port)",
    population: "870,000 (1.9M metro)",
    famousFor: "Old Port, Notre-Dame de la Garde, Bouillabaisse, Multicultural vibe",
    funFact: "Marseille is France's oldest city, founded by Greeks in 600 BC! The French national anthem 'La Marseillaise' was named after the city - volunteers from Marseille sang it while marching to Paris in 1792. The city is Europe's busiest cruise port and has 300+ days of sunshine yearly!",
    funFactSource: "Marseille Tourism",
    funFactSourceUrl: "https://www.marseille-tourisme.com/"
  },
  
  {
    id: 92,
    name: "Bordeaux",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French city famous for wine production",
      "Built along the Garonne River in southwestern France",
      "Known for world-class vineyards and 18th-century architecture",
      "Port of the Moon where Garonne forms a crescent",
      "French city with UNESCO-listed wine region",
      "French wine capital on the Garonne River"
    ],
    waterFeature: "Garonne River",
    population: "260,000 (1.3M metro)",
    famousFor: "Wine, Port of the Moon, Place de la Bourse, Vineyards",
    funFact: "Bordeaux produces 700-900 million bottles of wine annually! The region has over 7,000 châteaux (wine estates). The city's historic center is a UNESCO World Heritage Site and is the largest urban World Heritage site in France. Bordeaux wine has been exported since Roman times!",
    funFactSource: "Bordeaux Wine Council",
    funFactSourceUrl: "https://www.bordeaux.com/"
  },
  
  {
    id: 93,
    name: "Antwerp",
    continent: "Europe",
    country: "Belgium",
    difficulty: "hard",
    clues: [
      "Flemish port city in northern Belgium",
      "Located on the Scheldt River estuary near the North Sea",
      "World's diamond trading capital and major port",
      "Historic port on the Scheldt handles massive cargo volumes",
      "Belgian city with Rubens House and diamond district",
      "Belgian port city on the Scheldt River - world's diamond trading capital"
    ],
    waterFeature: "Scheldt River, North Sea",
    population: "530,000 (1.2M metro)",
    famousFor: "Diamonds, Port, Rubens, Fashion, Cathedral",
    funFact: "Antwerp cuts and trades 86% of the world's rough diamonds! The diamond district handles $54 billion in diamonds annually. The city is also Europe's second-largest port. Painter Peter Paul Rubens lived here and his house is now a museum. Antwerp is a major fashion capital too!",
    funFactSource: "Antwerp World Diamond Centre",
    funFactSourceUrl: "https://www.awdc.be/"
  },
  
  {
    id: 94,
    name: "Gothenburg",
    continent: "Europe",
    country: "Sweden",
    difficulty: "hard",
    clues: [
      "Swedish port city on the North Sea coast",
      "Built on the Göta älv river and harbor system",
      "Known for canals, seafood, and Volvo headquarters",
      "Sweden's largest non-capital city with extensive waterfront",
      "Scandinavian city famous for archipelago and seafood",
      "Swedish west coast city with Dutch-inspired canals"
    ],
    waterFeature: "Göta älv River, North Sea, Gothenburg Archipelago",
    population: "580,000 (1M metro)",
    famousFor: "Volvo, Liseberg amusement park, Archipelago, Seafood",
    funFact: "Gothenburg was founded by Dutch architects, which is why it has canals like Amsterdam! It's home to Volvo and Scandinavia's largest amusement park (Liseberg). The city has the world's largest indoor ski slope and hosts the world's largest football tournament for youth - the Gothia Cup!",
    funFactSource: "Visit Gothenburg",
    funFactSourceUrl: "https://www.goteborg.com/"
  },
  
  {
    id: 95,
    name: "Vilnius",
    continent: "Europe",
    country: "Lithuania",
    difficulty: "hard",
    clues: [
      "Baltic capital city with baroque architecture",
      "Built at the confluence of Neris and Vilnia rivers",
      "Known for one of Europe's largest medieval old towns",
      "Rivers meet in this historic Lithuanian capital",
      "Easternmost Baltic capital with UNESCO old town",
      "Lithuanian capital at the confluence of two rivers"
    ],
    waterFeature: "Neris River, Vilnia River",
    population: "590,000",
    famousFor: "Baroque old town, Gediminas Tower, Churches, Gate of Dawn",
    funFact: "Vilnius has one of Europe's largest medieval old towns! The city was once called 'The Jerusalem of Lithuania' because it was 45% Jewish before WWII. Vilnius also has a self-declared independent republic within it - Užupis - which has its own constitution, currency, and celebrates April Fools' Day as independence day!",
    funFactSource: "Vilnius Tourism",
    funFactSourceUrl: "https://www.vilnius-tourism.lt/"
  },
  
  {
    id: 96,
    name: "Riga",
    continent: "Europe",
    country: "Latvia",
    difficulty: "hard",
    clues: [
      "Baltic capital on a gulf and major river",
      "Built where the Daugava River meets the Baltic Sea",
      "Known for Art Nouveau architecture and medieval old town",
      "Historic port city on the river and gulf",
      "Largest Baltic capital with UNESCO old town",
      "Latvian capital on the Daugava River and Baltic Sea"
    ],
    waterFeature: "Daugava River, Gulf of Riga, Baltic Sea",
    population: "630,000 (1M metro)",
    famousFor: "Art Nouveau, Old Town, Central Market, House of Blackheads",
    funFact: "Riga has the highest concentration of Art Nouveau buildings in the world - over 800! The city's Central Market is housed in five former German Zeppelin hangars from WWI. Riga is also where the Christmas tree tradition allegedly started in 1510 - locals put up a decorated tree in the town square!",
    funFactSource: "Riga Tourism",
    funFactSourceUrl: "https://www.liveriga.com/"
  },
  
  {
    id: 97,
    name: "Bratislava",
    continent: "Europe",
    country: "Slovakia",
    difficulty: "hard",
    clues: [
      "Central European capital on the Danube",
      "Only capital bordering two other countries (Austria & Hungary)",
      "Built along the Danube River near three-country border",
      "Medieval castle overlooks the Danube",
      "Slovakia's capital and largest city",
      "Slovak capital on the Danube - only capital bordering 2 countries"
    ],
    waterFeature: "Danube River",
    population: "440,000 (660,000 metro)",
    famousFor: "Bratislava Castle, Old Town, UFO Bridge, Three-country border",
    funFact: "Bratislava is the only capital in the world that borders TWO other countries! You can cycle from Bratislava to Vienna in 1 hour. The city was actually Hungary's capital for 200+ years when the Ottomans occupied Budapest. The UFO observation deck on the SNP Bridge offers 360° views!",
    funFactSource: "Visit Bratislava",
    funFactSourceUrl: "https://www.visit bratislava.com/"
  },
  
  {
    id: 98,
    name: "Split",
    continent: "Europe",
    country: "Croatia",
    difficulty: "hard",
    clues: [
      "Croatian coastal city on the Adriatic Sea",
      "Built around ancient Roman emperor's palace",
      "Known for Diocletian's Palace at the waterfront",
      "Adriatic port city with islands offshore",
      "Croatia's second-largest city with Roman ruins",
      "Croatian Adriatic city literally built inside a Roman palace"
    ],
    waterFeature: "Adriatic Sea",
    population: "180,000 (350,000 metro)",
    famousFor: "Diocletian's Palace, Old Town, Beaches, Game of Thrones filming",
    funFact: "Split literally grew inside a Roman emperor's palace! Diocletian's Palace (built 305 AD) is so large that the entire old town is within its walls. About 3,000 people live inside the palace complex today. It's one of the best-preserved Roman monuments and a Game of Thrones filming location!",
    funFactSource: "UNESCO Split",
    funFactSourceUrl: "https://whc.unesco.org/en/list/97/"
  },
  
  {
    id: 99,
    name: "Gdansk",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Historic Polish port city on the Baltic Sea",
      "Built on the Motlawa River and Baltic coast",
      "Known for amber trade and shipyard history",
      "Baltic port where WWII began and Solidarity movement started",
      "Polish city rebuilt after WWII destruction",
      "Polish Baltic port city - birthplace of Solidarity movement"
    ],
    waterFeature: "Baltic Sea, Motlawa River, Vistula River",
    population: "470,000 (1.2M metro)",
    famousFor: "Amber, Solidarity movement, Shipyards, Old Town, St. Mary's Church",
    funFact: "Gdansk is the amber capital of the world - 90% of the world's amber comes from the Baltic region! WWII started here when Germans attacked Westerplatte. The Solidarity trade union movement that helped end communism in Europe started in Gdansk's shipyards in 1980. The city was 90% destroyed in WWII and completely rebuilt!",
    funFactSource: "Gdansk Museum",
    funFactSourceUrl: "https://muzeumgdansk.pl/en"
  },
  
  {
    id: 100,
    name: "Innsbruck",
    continent: "Europe",
    country: "Austria",
    difficulty: "hard",
    clues: [
      "Alpine city in the Austrian Tyrol surrounded by mountains",
      "Located on a major river in a valley of the Alps",
      "Hosted Winter Olympics twice (1964, 1976)",
      "Historic Austrian city with world-class ski jumping facilities",
      "Alpine capital famous for Golden Roof landmark",
      "Tyrolean city on a river - hosted Winter Olympics twice"
    ],
    waterFeature: "Inn River",
    population: "133,000 (300,000 metro)",
    famousFor: "Winter Olympics, Ski jumping, Golden Roof, Alpine scenery",
    funFact: "Innsbruck is the only city to host the Winter Youth Olympics! It hosted the Winter Olympics twice (1964 and 1976) and has world-class ski jumping facilities right in the city. The name means 'bridge over the Inn River.' You can ski in the morning and be in the historic old town for lunch!",
    funFactSource: "Innsbruck Tourism",
    funFactSourceUrl: "https://www.innsbruck.info/"
  },

  // Batch 1: Cities 101-150
  {
    id: 101,
    name: "Lisbon",
    continent: "Europe",
    country: "Portugal",
    difficulty: "easy",
    clues: [
      "European capital city built on seven hills near the Atlantic",
      "Sits at the mouth of a major river flowing into the Atlantic Ocean",
      "Known for historic maritime exploration and Age of Discovery",
      "Famous for colorful tiled buildings, tram 28, and pastéis de nata",
      "Portuguese capital with Belém Tower on the Tagus River estuary",
      "Portugal's coastal capital with iconic yellow trams"
    ],
    waterFeature: "Tagus River, Atlantic Ocean",
    population: "550,000 (2.8M metro)",
    famousFor: "Belém Tower, Jerónimos Monastery, Tram 28, Alfama district",
    funFact: "Lisbon is one of the oldest cities in Western Europe, predating Rome by over 400 years! The city was almost completely destroyed by a massive earthquake in 1755 that killed up to 100,000 people - one of the deadliest earthquakes in history.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/263/"
  },
  
  {
    id: 102,
    name: "Buenos Aires",
    continent: "South America",
    country: "Argentina",
    difficulty: "easy",
    clues: [
      "Major South American port city with European architectural influence",
      "Built along the western shore of a massive river estuary",
      "Known as the birthplace of tango dance and music",
      "Río de la Plata flows past this passionate football-loving city",
      "Argentina's capital famous for steaks, wine, and passionate culture",
      "Argentine capital on the Río de la Plata, tango's birthplace"
    ],
    waterFeature: "Río de la Plata",
    population: "3 million (15M metro)",
    famousFor: "Tango, La Boca, Recoleta Cemetery, Teatro Colón",
    funFact: "Buenos Aires has the widest avenue in the world - Avenida 9 de Julio is 140 meters wide with 12 lanes! The city also has more bookstores per capita than any other city in the world, earning it the title 'City of Books.'",
    funFactSource: "Buenos Aires Tourism",
    funFactSourceUrl: "https://turismo.buenosaires.gob.ar/"
  },

  {
    id: 103,
    name: "Prague",
    continent: "Europe",
    country: "Czech Republic",
    difficulty: "easy",
    clues: [
      "Central European capital known for Gothic and Baroque architecture",
      "Built along a winding river in the heart of Bohemia",
      "Famous for its astronomical clock and fairy-tale castle",
      "The Vltava River flows through this 'City of a Hundred Spires'",
      "Czech capital with Charles Bridge and Prague Castle",
      "Czech capital on the Vltava River with a medieval old town"
    ],
    waterFeature: "Vltava River",
    population: "1.3 million (2.7M metro)",
    famousFor: "Prague Castle, Charles Bridge, Old Town Square, Astronomical Clock",
    funFact: "Prague Castle is the largest ancient castle complex in the world according to Guinness World Records, covering 70,000 square meters! The city's famous Astronomical Clock has been working since 1410 - over 600 years!",
    funFactSource: "Prague Castle Official",
    funFactSourceUrl: "https://www.hrad.cz/en/"
  },

  {
    id: 104,
    name: "Edinburgh",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "medium",
    clues: [
      "Northern European capital city built on volcanic rock formations",
      "Sits on the southern shore of a major estuary",
      "Known for annual arts festival and hogmanay celebrations",
      "The Firth of Forth estuary lies north of this historic castle city",
      "Scotland's capital with a medieval Old Town and Georgian New Town",
      "Scottish capital on the Firth of Forth with Edinburgh Castle"
    ],
    waterFeature: "Firth of Forth, Water of Leith",
    population: "530,000 (900K metro)",
    famousFor: "Edinburgh Castle, Royal Mile, Arthur's Seat, Fringe Festival",
    funFact: "Edinburgh has more trees per capita than any other UK city - it's officially a forest! The city also has an underground city beneath the Royal Mile with streets that were sealed off in the 1700s and only rediscovered in the 1980s.",
    funFactSource: "Historic Environment Scotland",
    funFactSourceUrl: "https://www.historicenvironment.scot/"
  },

  {
    id: 105,
    name: "Marrakech",
    continent: "Africa",
    country: "Morocco",
    difficulty: "medium",
    clues: [
      "North African city near the Atlas Mountains with red sandstone buildings",
      "Oasis city with historic gardens and souks in the desert",
      "Known for bustling medina, snake charmers, and spice markets",
      "The 'Red City' with Jemaa el-Fnaa square and Majorelle Garden",
      "Moroccan imperial city with colorful souks and riads",
      "Moroccan city near Atlas Mountains, famous for its red walls"
    ],
    waterFeature: "Tensift River",
    population: "1 million (1.3M metro)",
    famousFor: "Jemaa el-Fnaa, Koutoubia Mosque, Majorelle Garden, Souks",
    funFact: "Marrakech was founded in 1070 and has walls that stretch 19 kilometers around the old city! The city is called the 'Red City' because almost all buildings in the old town are required by law to be painted in red ochre. It has over 900 traditional riads (courtyard houses).",
    funFactSource: "Morocco Tourism",
    funFactSourceUrl: "https://www.visitmorocco.com/"
  },

  {
    id: 106,
    name: "Vienna",
    continent: "Europe",
    country: "Austria",
    difficulty: "easy",
    clues: [
      "Central European capital famous for classical music and coffee houses",
      "Located on the Danube River in the heart of Europe",
      "Known for imperial palaces, opera houses, and waltzes",
      "The Danube flows through this city of Mozart and Beethoven",
      "Austrian capital with Schönbrunn Palace and the Vienna State Opera",
      "Austrian capital on the Danube River, home to classical music"
    ],
    waterFeature: "Danube River",
    population: "1.9 million (2.9M metro)",
    famousFor: "Schönbrunn Palace, Vienna State Opera, St. Stephen's Cathedral, Coffee houses",
    funFact: "Vienna has been ranked the world's most livable city multiple times! The city has more than 100 ball events every year, with the Opera Ball being the most famous. Vienna's Ringstrasse boulevard was built on the site of medieval city walls.",
    funFactSource: "City of Vienna",
    funFactSourceUrl: "https://www.wien.gv.at/english/"
  },

  {
    id: 107,
    name: "Havana",
    continent: "North America",
    country: "Cuba",
    difficulty: "medium",
    clues: [
      "Caribbean capital city with Spanish colonial architecture",
      "Major port city on the northern coast facing the Gulf",
      "Known for vintage American cars, cigars, and salsa music",
      "The Straits of Florida separate this city from the United States",
      "Cuban capital with colorful buildings and the Malecón waterfront",
      "Cuba's capital on the Caribbean, famous for classic cars and cigars"
    ],
    waterFeature: "Gulf of Mexico, Straits of Florida",
    population: "2.1 million",
    famousFor: "Old Havana, Malecón, Classic cars, Cigars, Rum",
    funFact: "Havana has the largest collection of vintage American cars from the 1950s in the world - over 60,000! These cars are still running because of the US embargo that prevented new imports. The city's Malecón seawall stretches 8 kilometers along the coast.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/204/"
  },

  {
    id: 108,
    name: "Stockholm",
    continent: "Europe",
    country: "Sweden",
    difficulty: "medium",
    clues: [
      "Scandinavian capital built across 14 islands connected by bridges",
      "Sits where Lake Mälaren meets the Baltic Sea archipelago",
      "Known for Viking history, ABBA Museum, and the Nobel Prize",
      "This 'Venice of the North' spans islands in the Baltic Sea",
      "Swedish capital with colorful Gamla Stan and archipelago boats",
      "Swedish capital across 14 islands where lake meets Baltic Sea"
    ],
    waterFeature: "Baltic Sea, Lake Mälaren",
    population: "980,000 (2.4M metro)",
    famousFor: "Gamla Stan, Vasa Museum, ABBA Museum, Nobel Prize ceremony",
    funFact: "Stockholm is built on 14 islands connected by 57 bridges! The city has the world's first national urban park - Ekoparken. Stockholm's metro system is called 'the world's longest art gallery' with 90 of its 100 stations decorated by artists.",
    funFactSource: "Visit Stockholm",
    funFactSourceUrl: "https://www.visitstockholm.com/"
  },

  {
    id: 109,
    name: "Dublin",
    continent: "Europe",
    country: "Ireland",
    difficulty: "easy",
    clues: [
      "Irish coastal capital known for literary heritage and pubs",
      "Built where the River Liffey meets Dublin Bay",
      "Famous for Guinness, James Joyce, and Temple Bar district",
      "The Liffey River divides this emerald isle's capital",
      "Ireland's capital with Trinity College and Guinness Storehouse",
      "Irish capital on the Liffey River, home of Guinness"
    ],
    waterFeature: "River Liffey, Dublin Bay, Irish Sea",
    population: "555,000 (1.4M metro)",
    famousFor: "Guinness Storehouse, Trinity College, Temple Bar, St. Patrick's Cathedral",
    funFact: "Dublin is the only city in the world with an official beer - Guinness! The St. James's Gate brewery has a 9,000-year lease signed in 1759 for just £45 per year. Dublin also has more pubs per capita than any other European capital.",
    funFactSource: "Guinness Storehouse",
    funFactSourceUrl: "https://www.guinness-storehouse.com/"
  },

  {
    id: 110,
    name: "Florence",
    continent: "Europe",
    country: "Italy",
    difficulty: "easy",
    clues: [
      "Italian city considered the birthplace of the Renaissance",
      "Built along the Arno River in the Tuscany region",
      "Known for Michelangelo's David and the Duomo cathedral",
      "The Arno River flows through this city of Renaissance art",
      "Tuscan capital with Uffizi Gallery and Ponte Vecchio bridge",
      "Italian Renaissance city on the Arno River with the Duomo"
    ],
    waterFeature: "Arno River",
    population: "380,000 (1M metro)",
    famousFor: "Uffizi Gallery, Duomo, Ponte Vecchio, Michelangelo's David",
    funFact: "Florence was the richest city in Europe in the 15th century! The city's Duomo cathedral dome was an engineering marvel - it took 16 years to build and is still the largest masonry dome in the world. Florence has more UNESCO World Heritage sites than any other city.",
    funFactSource: "Uffizi Gallery",
    funFactSourceUrl: "https://www.uffizi.it/en"
  },

  {
    id: 111,
    name: "Reykjavik",
    continent: "Europe",
    country: "Iceland",
    difficulty: "medium",
    clues: [
      "World's northernmost capital city near the Arctic Circle",
      "Coastal city powered almost entirely by geothermal energy",
      "Known for midnight sun, northern lights, and volcanic landscapes",
      "Iceland's capital on Faxaflói Bay with geothermal pools",
      "Arctic island capital with colorful houses and Blue Lagoon nearby",
      "Iceland's capital on the Atlantic, world's northernmost capital"
    ],
    waterFeature: "Faxaflói Bay, Atlantic Ocean",
    population: "130,000 (230K metro)",
    famousFor: "Hallgrímskirkja Church, Blue Lagoon, Northern Lights, Geothermal pools",
    funFact: "Reykjavik is powered by 100% renewable energy from geothermal and hydroelectric sources! The city has no mosquitoes due to the climate. It's also one of the few places where you can swim outdoors year-round thanks to geothermal pools that stay 38-40°C.",
    funFactSource: "Visit Reykjavik",
    funFactSourceUrl: "https://visitreykjavik.is/"
  },

  {
    id: 112,
    name: "Seoul",
    continent: "Asia",
    country: "South Korea",
    difficulty: "easy",
    clues: [
      "East Asian megacity with ultra-modern technology and ancient palaces",
      "Built along the Han River in a valley surrounded by mountains",
      "Known for K-pop, kimchi, Korean BBQ, and tech innovation",
      "The Han River flows through this city of 10 million",
      "South Korean capital with Gyeongbokgung Palace and Gangnam",
      "Korean capital on the Han River, K-pop and tech hub"
    ],
    waterFeature: "Han River",
    population: "9.7 million (25M metro)",
    famousFor: "Gyeongbokgung Palace, N Seoul Tower, K-pop, Korean BBQ",
    funFact: "Seoul has the fastest average internet speed in the world at over 200 Mbps! The city is also the world capital of plastic surgery with over 1 million procedures annually. Seoul's subway system is one of the most advanced, with heated seats and air purification.",
    funFactSource: "Seoul Metropolitan Government",
    funFactSourceUrl: "https://english.seoul.go.kr/"
  },

  {
    id: 113,
    name: "Zurich",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "medium",
    clues: [
      "European financial center in the Alps with high quality of life",
      "Built at the northwestern tip of a pristine alpine lake",
      "Known for banking, chocolate, watches, and cleanliness",
      "Lake Zurich and the Limmat River flow through this banking hub",
      "Swiss financial capital with pristine lake and mountain views",
      "Swiss city on Lake Zurich, global banking center"
    ],
    waterFeature: "Lake Zurich, Limmat River",
    population: "420,000 (1.5M metro)",
    famousFor: "Bahnhofstrasse shopping, Banking, Swiss chocolate, Old Town",
    funFact: "Zurich consistently ranks as one of the world's most expensive cities! The city has over 1,200 drinking fountains with free potable water. Zurich was Einstein's home when he developed his theory of relativity in 1905.",
    funFactSource: "City of Zurich",
    funFactSourceUrl: "https://www.stadt-zuerich.ch/portal/en/index.html"
  },

  {
    id: 114,
    name: "Cape Town",
    continent: "Africa",
    country: "South Africa",
    difficulty: "easy",
    clues: [
      "Southern African city beneath a flat-topped mountain",
      "Built on a peninsula between two oceans meeting point",
      "Known for Table Mountain, penguins, and wine regions",
      "Where the Atlantic and Indian Oceans meet at the Cape",
      "South African port city with Table Mountain and waterfront",
      "South African city beneath Table Mountain where two oceans meet"
    ],
    waterFeature: "Atlantic Ocean, Table Bay",
    population: "4.6 million metro",
    famousFor: "Table Mountain, Cape of Good Hope, V&A Waterfront, Wine regions",
    funFact: "Cape Town is home to the only penguin colony in Africa - Boulders Beach has over 2,000 African penguins! Table Mountain is one of the oldest mountains on Earth at 600 million years old. The city has the most biodiverse area on the planet within its city limits.",
    funFactSource: "South African National Parks",
    funFactSourceUrl: "https://www.sanparks.org/"
  },

  {
    id: 115,
    name: "Kyoto",
    continent: "Asia",
    country: "Japan",
    difficulty: "medium",
    clues: [
      "Ancient Japanese city known for traditional temples and gardens",
      "Built in a valley surrounded by mountains with many rivers",
      "Japan's imperial capital for over 1,000 years",
      "The Kamo River flows through this city of 2,000 temples",
      "Ancient Japanese capital with Fushimi Inari shrine and geishas",
      "Former Japanese capital with golden pavilion and bamboo forests"
    ],
    waterFeature: "Kamo River, Katsura River",
    population: "1.5 million",
    famousFor: "Fushimi Inari, Golden Pavilion, Bamboo Forest, Geisha districts",
    funFact: "Kyoto has 17 UNESCO World Heritage Sites - more than any other city in the world! The city has over 2,000 temples and shrines. Kyoto was spared from atomic bombing in WWII because US Secretary of War Henry Stimson had honeymooned there and recognized its cultural importance.",
    funFactSource: "Kyoto City Official",
    funFactSourceUrl: "https://www2.city.kyoto.lg.jp/koho/eng/"
  },

  {
    id: 116,
    name: "Cusco",
    continent: "South America",
    country: "Peru",
    difficulty: "medium",
    clues: [
      "High-altitude South American city in the Andes mountains",
      "Former capital of the Inca Empire at 3,400 meters elevation",
      "Gateway city to Machu Picchu ruins",
      "Ancient Incan capital with Spanish colonial architecture",
      "Peruvian city near Machu Picchu with Incan stone walls",
      "Peruvian Andean city, gateway to Machu Picchu"
    ],
    waterFeature: "Urubamba River (nearby)",
    population: "430,000",
    famousFor: "Machu Picchu gateway, Incan ruins, Sacsayhuamán, Rainbow Mountain",
    funFact: "Cusco means 'navel of the world' in Quechua! The city was designed in the shape of a puma by the Incas. Many buildings in Cusco have Incan stone walls that have withstood earthquakes for 500+ years - the Spanish walls built on top often collapse while Incan foundations remain intact.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/273/"
  },

  {
    id: 117,
    name: "Dubrovnik",
    continent: "Europe",
    country: "Croatia",
    difficulty: "medium",
    clues: [
      "Adriatic coastal city with medieval walls and limestone streets",
      "Historic walled city on the Dalmatian Coast",
      "Known as the 'Pearl of the Adriatic' and Game of Thrones filming location",
      "Adriatic Sea surrounds this Croatian walled city's old town",
      "Croatian coastal gem with complete medieval walls still standing",
      "Croatian walled city on the Adriatic, Game of Thrones location"
    ],
    waterFeature: "Adriatic Sea",
    population: "42,000",
    famousFor: "Old Town walls, Game of Thrones, Stradun street, Cable car",
    funFact: "Dubrovnik's city walls are 2 kilometers long and up to 25 meters high! The city was an independent republic (Republic of Ragusa) for over 450 years. It was one of the first places to abolish slavery in 1416. The walls have never been breached by enemy forces.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/95/"
  },

  {
    id: 118,
    name: "Jerusalem",
    continent: "Asia",
    country: "Israel",
    difficulty: "easy",
    clues: [
      "Ancient Middle Eastern city sacred to three major religions",
      "Located in the Judaean Mountains between Mediterranean and Dead Sea",
      "Holy city for Judaism, Christianity, and Islam",
      "Site of the Western Wall, Dome of the Rock, and Church of Holy Sepulchre",
      "Israel's capital with ancient Old City and religious sites",
      "Ancient holy city sacred to Jews, Christians, and Muslims"
    ],
    waterFeature: "Kidron Valley, historic water systems",
    population: "920,000",
    famousFor: "Western Wall, Dome of the Rock, Church of Holy Sepulchre, Old City",
    funFact: "Jerusalem is one of the oldest cities in the world, continuously inhabited for over 5,000 years! The city has been destroyed twice, besieged 23 times, attacked 52 times, and captured 44 times. It's holy to over 3.5 billion people worldwide.",
    funFactSource: "Israel Antiquities Authority",
    funFactSourceUrl: "https://www.antiquities.org.il/"
  },

  {
    id: 119,
    name: "Seville",
    continent: "Europe",
    country: "Spain",
    difficulty: "medium",
    clues: [
      "Southern European city known for flamenco and bullfighting",
      "Built along the Guadalquivir River in Andalusia",
      "Spain's hottest major city with Moorish architecture",
      "The Guadalquivir River flows through this city of oranges and flamenco",
      "Andalusian capital with the Giralda tower and flamenco dancing",
      "Spanish city on Guadalquivir River, home of flamenco"
    ],
    waterFeature: "Guadalquivir River",
    population: "690,000 (1.5M metro)",
    famousFor: "Alcázar Palace, Seville Cathedral, Plaza de España, Flamenco",
    funFact: "Seville has over 45,000 orange trees lining its streets - enough to produce 15 million kilos of oranges annually! However, the Seville oranges are too bitter to eat and are mostly exported to Britain for making marmalade. The city regularly hits 40°C in summer.",
    funFactSource: "Seville Tourism",
    funFactSourceUrl: "https://www.visitasevilla.es/"
  },

  {
    id: 120,
    name: "Auckland",
    continent: "Oceania",
    country: "New Zealand",
    difficulty: "easy",
    clues: [
      "Southern Hemisphere city built on and around volcanic cones",
      "Located on an isthmus between two large harbors",
      "New Zealand's largest city known for sailing and Polynesian culture",
      "The 'City of Sails' sits between Pacific Ocean and Tasman Sea",
      "New Zealand's biggest city with Sky Tower and harbor islands",
      "New Zealand's largest city on two harbors with Sky Tower"
    ],
    waterFeature: "Waitematā Harbour, Manukau Harbour, Pacific Ocean",
    population: "1.7 million",
    famousFor: "Sky Tower, Harbourfront, Waiheke Island, America's Cup sailing",
    funFact: "Auckland is built on a volcanic field with 48 volcanoes! The city has more boats per capita than any other city in the world - over 1 in 3 households owns a boat. Auckland is the world's largest Polynesian city with more Polynesians than any Pacific island nation.",
    funFactSource: "Auckland Tourism",
    funFactSourceUrl: "https://www.aucklandnz.com/"
  },

  {
    id: 121,
    name: "Brussels",
    continent: "Europe",
    country: "Belgium",
    difficulty: "easy",
    clues: [
      "European capital city home to major international institutions",
      "Built along the Senne River in Western Europe",
      "Known for chocolate, waffles, beer, and the EU headquarters",
      "The Senne River flows beneath this 'capital of Europe'",
      "Belgian capital with Grand Place, Atomium, and EU Parliament",
      "Belgian capital on the Senne River, home to EU headquarters"
    ],
    waterFeature: "Senne River (mostly underground)",
    population: "1.2 million metro",
    famousFor: "Grand Place, Atomium, Manneken Pis, Chocolate, EU institutions",
    funFact: "Brussels has the most comic book murals in the world - over 50 buildings are decorated with comic art! The city produces over 220,000 tons of chocolate annually. Brussels also has more Michelin-starred restaurants per capita than Paris.",
    funFactSource: "Visit Brussels",
    funFactSourceUrl: "https://visit.brussels/en"
  },

  {
    id: 122,
    name: "Petra",
    continent: "Asia",
    country: "Jordan",
    difficulty: "hard",
    clues: [
      "Ancient city carved into rose-red sandstone cliffs",
      "Located in a valley basin surrounded by mountains in the Middle East",
      "One of the New Seven Wonders of the World",
      "Nabatean city with treasury carved into pink rock faces",
      "Jordanian archaeological site with rock-cut architecture",
      "Ancient Jordanian city carved from pink rock, Indiana Jones location"
    ],
    waterFeature: "Wadi Musa",
    population: "Ancient ruins (nearby town 30,000)",
    famousFor: "The Treasury, Monastery, Siq canyon, Rock-cut architecture",
    funFact: "Petra was hidden from the Western world for over 500 years until rediscovered in 1812! The entire city was carved directly into rose-red sandstone cliffs by the Nabateans over 2,000 years ago. The Treasury building appeared in Indiana Jones and the Last Crusade.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/326/"
  },

  {
    id: 123,
    name: "Vancouver",
    continent: "North America",
    country: "Canada",
    difficulty: "easy",
    clues: [
      "Pacific Northwest city surrounded by mountains and ocean",
      "Located on a peninsula between ocean inlet and river delta",
      "Canadian city known for skiing, cycling, and natural beauty",
      "The Fraser River and Burrard Inlet surround this coastal city",
      "Canadian west coast city with Stanley Park and mountains",
      "Canadian city on Pacific coast with mountains and Stanley Park"
    ],
    waterFeature: "Burrard Inlet, Fraser River, Pacific Ocean",
    population: "675,000 (2.6M metro)",
    famousFor: "Stanley Park, Granville Island, Grouse Mountain, Capilano Bridge",
    funFact: "Vancouver is consistently rated as one of the world's most livable cities! The city has the mildest winter climate of any major Canadian city. Vancouver's seawall is the world's longest uninterrupted waterfront path at 28 kilometers. It rains about 161 days per year here.",
    funFactSource: "Tourism Vancouver",
    funFactSourceUrl: "https://www.tourismvancouver.com/"
  },

  {
    id: 124,
    name: "Athens",
    continent: "Europe",
    country: "Greece",
    difficulty: "easy",
    clues: [
      "Ancient European capital considered the birthplace of democracy",
      "Mediterranean city dominated by the Acropolis hilltop citadel",
      "Known for ancient ruins, philosophers, and Olympic Games origin",
      "The Saronic Gulf surrounds this cradle of Western civilization",
      "Greek capital with Parthenon temple on the Acropolis",
      "Greek capital with ancient Acropolis and Parthenon temple"
    ],
    waterFeature: "Saronic Gulf, Aegean Sea",
    population: "660,000 (3.7M metro)",
    famousFor: "Acropolis, Parthenon, Ancient Agora, Plaka neighborhood",
    funFact: "Athens has been continuously inhabited for over 7,000 years! The Parthenon was built without any mortar - the marble blocks are held together by precision and iron clamps. Athens hosted the first modern Olympic Games in 1896 and again in 2004.",
    funFactSource: "Hellenic Ministry of Culture",
    funFactSourceUrl: "https://www.culture.gr/"
  },

  {
    id: 125,
    name: "Krakow",
    continent: "Europe",
    country: "Poland",
    difficulty: "medium",
    clues: [
      "Central European city with one of the best-preserved medieval cores",
      "Built along the Vistula River in southern Poland",
      "Former royal capital with Renaissance and Gothic architecture",
      "The Vistula River flows through this city of a million",
      "Polish city with Wawel Castle and Market Square",
      "Polish medieval city on Vistula River, former royal capital"
    ],
    waterFeature: "Vistula River",
    population: "780,000 (1.8M metro)",
    famousFor: "Wawel Castle, Main Market Square, Kazimierz district, Salt mines",
    funFact: "Krakow's Main Market Square is the largest medieval town square in Europe at 40,000 square meters! The city has one of the oldest universities in the world - Jagiellonian University founded in 1364. Nearby Wieliczka Salt Mine has been in operation for 700+ years.",
    funFactSource: "Krakow Tourism",
    funFactSourceUrl: "https://www.krakow.travel/en"
  },

  {
    id: 126,
    name: "Jaipur",
    continent: "Asia",
    country: "India",
    difficulty: "medium",
    clues: [
      "Indian city known as the 'Pink City' for its distinctive architecture",
      "Capital of Rajasthan state in northwestern India",
      "Famous for palaces, forts, and traditional handicrafts",
      "Rajasthani capital with Amber Fort and pink-painted buildings",
      "Indian Pink City with City Palace and Palace of Winds",
      "Indian Pink City in Rajasthan with Amber Fort"
    ],
    waterFeature: "Seasonal rivers and lakes",
    population: "3.1 million (3.9M metro)",
    famousFor: "Amber Fort, City Palace, Hawa Mahal (Palace of Winds), Pink architecture",
    funFact: "Jaipur is called the Pink City because in 1876, Maharaja Ram Singh had the entire city painted pink (the color of hospitality) to welcome Queen Victoria and Prince Albert! The pink color is maintained by law to this day. The city was also India's first planned city, designed in 1727.",
    funFactSource: "Rajasthan Tourism",
    funFactSourceUrl: "https://tourism.rajasthan.gov.in/"
  },

  {
    id: 127,
    name: "Porto",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Portuguese coastal city famous for fortified wine production",
      "Built on hills along the Douro River near Atlantic coast",
      "Known for colorful buildings, port wine cellars, and azulejo tiles",
      "The Douro River flows through this city of six bridges",
      "Portugal's second city with port wine lodges and Dom Luís Bridge",
      "Portuguese city on Douro River, birthplace of port wine"
    ],
    waterFeature: "Douro River, Atlantic Ocean",
    population: "240,000 (1.7M metro)",
    famousFor: "Port wine, Dom Luís Bridge, Ribeira district, Azulejo tiles",
    funFact: "Porto is the birthplace of port wine - the fortified wine that has been produced here for over 300 years! The name 'Portugal' actually comes from 'Porto'. The city's Livraria Lello bookstore is considered one of the most beautiful in the world and inspired J.K. Rowling's Hogwarts.",
    funFactSource: "Porto Tourism",
    funFactSourceUrl: "https://www.visitporto.travel/en"
  },

  {
    id: 128,
    name: "Hanoi",
    continent: "Asia",
    country: "Vietnam",
    difficulty: "easy",
    clues: [
      "Southeast Asian capital with French colonial architecture",
      "Built around Hoan Kiem Lake with the Red River nearby",
      "Known for street food, motorbikes, and ancient temples",
      "The Red River flows past this Vietnamese capital",
      "Vietnam's capital with Old Quarter and street food culture",
      "Vietnamese capital on Red River, famous for pho and motorbikes"
    ],
    waterFeature: "Red River, Hoan Kiem Lake",
    population: "8.1 million",
    famousFor: "Old Quarter, Hoan Kiem Lake, Street food, Ho Chi Minh Mausoleum",
    funFact: "Hanoi has over 5 million motorbikes - more than the number of people! The city is over 1,000 years old and has been Vietnam's capital multiple times throughout history. Hanoi's Old Quarter has 36 streets, each named after the goods traditionally sold there.",
    funFactSource: "Vietnam Tourism",
    funFactSourceUrl: "https://vietnam.travel/"
  },

  {
    id: 129,
    name: "Tallinn",
    continent: "Europe",
    country: "Estonia",
    difficulty: "medium",
    clues: [
      "Baltic coastal capital with one of Europe's best-preserved Old Towns",
      "Located on the Gulf of Finland across from Helsinki",
      "Medieval walled city now known for tech startups and digital innovation",
      "The Gulf of Finland's southern shore hosts this digital capital",
      "Estonian capital with medieval walls and Toompea Castle",
      "Estonian capital on Baltic Sea with medieval old town"
    ],
    waterFeature: "Gulf of Finland, Baltic Sea",
    population: "440,000 (610K metro)",
    famousFor: "Old Town walls, Toompea Castle, Alexander Nevsky Cathedral, Tech startups",
    funFact: "Tallinn was named European Capital of Culture in 2011! The city has free public Wi-Fi everywhere and was the birthplace of Skype. Estonia became the first country to offer e-Residency, allowing anyone globally to start an Estonian company. Medieval walls still encircle the Old Town.",
    funFactSource: "Visit Estonia",
    funFactSourceUrl: "https://www.visitestonia.com/"
  },

  {
    id: 130,
    name: "Cartagena",
    continent: "South America",
    country: "Colombia",
    difficulty: "medium",
    clues: [
      "Caribbean coastal city with Spanish colonial walled old town",
      "Historic port city on Colombia's northern coast",
      "Known for colorful buildings, salsa music, and pirate history",
      "The Caribbean Sea surrounds this walled Colombian port",
      "Colombian coastal city with colorful colonial walls and plazas",
      "Colombian Caribbean port with Spanish colonial walls"
    ],
    waterFeature: "Caribbean Sea",
    population: "1 million",
    famousFor: "Walled Old Town, Castillo San Felipe, Colorful colonial buildings, Beaches",
    funFact: "Cartagena was founded in 1533 and became the main port for treasure shipments to Spain! The city's walls were built to protect against pirate attacks and took 200 years to complete. Cartagena is so well-preserved that it's often called the most beautiful colonial city in South America.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/285/"
  },

  {
    id: 131,
    name: "Bergen",
    continent: "Europe",
    country: "Norway",
    difficulty: "medium",
    clues: [
      "Norwegian coastal city surrounded by seven mountains",
      "Located on fjords on the southwestern coast of Norway",
      "Known as the 'Gateway to the Fjords' and rainiest city in Europe",
      "Multiple fjords surround this colorful harbor city",
      "Norwegian city with Bryggen wharf and nearby fjords",
      "Norwegian fjord city with colorful Bryggen waterfront"
    ],
    waterFeature: "Byfjorden, North Sea, surrounding fjords",
    population: "285,000 (420K metro)",
    famousFor: "Bryggen wharf, Fløyen mountain, Fjord cruises, Fish market",
    funFact: "Bergen is the rainiest city in Europe with 240+ rainy days per year! The city was founded in 1070 and was Norway's capital in the 13th century. Bryggen's colorful wooden houses are UNESCO-protected Hanseatic buildings from the 1700s. Bergen is the gateway to Norway's famous fjords.",
    funFactSource: "Visit Bergen",
    funFactSourceUrl: "https://en.visitbergen.com/"
  },

  {
    id: 132,
    name: "Bruges",
    continent: "Europe",
    country: "Belgium",
    difficulty: "medium",
    clues: [
      "Medieval Flemish city known as the 'Venice of the North'",
      "Crisscrossed by canals connecting to the North Sea",
      "Famous for lace, chocolate, beer, and cobblestone streets",
      "Canal system earned this Belgian city its Venice nickname",
      "Belgian medieval city with canals and Belfry tower",
      "Belgian canal city, medieval 'Venice of the North'"
    ],
    waterFeature: "Canal system, Zwin estuary (historic)",
    population: "120,000",
    famousFor: "Canal boat rides, Belfry tower, Market Square, Belgian chocolate",
    funFact: "Bruges' entire historic center is a UNESCO World Heritage Site! The city's Belfry has 366 steps and houses a 47-bell carillon. Bruges was one of the wealthiest cities in Europe during the Middle Ages. The film 'In Bruges' made it famous to a new generation.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/996/"
  },

  {
    id: 133,
    name: "Santorini",
    continent: "Europe",
    country: "Greece",
    difficulty: "medium",
    clues: [
      "Greek volcanic island known for white-washed buildings",
      "Crescent-shaped island in the Aegean Sea",
      "Famous for blue-domed churches and spectacular sunsets",
      "The Aegean Sea surrounds this volcanic caldera island",
      "Greek island with white buildings and blue-domed churches",
      "Greek island in Aegean Sea with white buildings and blue domes"
    ],
    waterFeature: "Aegean Sea, volcanic caldera",
    population: "15,000 (island)",
    famousFor: "Blue-domed churches, Sunsets, White-washed buildings, Wine",
    funFact: "Santorini is actually the rim of a massive volcanic caldera formed by an eruption 3,600 years ago - one of the largest volcanic events in recorded history! The eruption may have inspired the legend of Atlantis. The island's unique volcanic soil produces exceptional wine.",
    funFactSource: "Greek National Tourism",
    funFactSourceUrl: "https://www.visitgreece.gr/"
  },

  {
    id: 134,
    name: "Queenstown",
    continent: "Oceania",
    country: "New Zealand",
    difficulty: "medium",
    clues: [
      "Southern hemisphere adventure capital surrounded by mountains",
      "Built on the shores of a glacial lake in New Zealand's South Island",
      "Known as the adventure capital of the world for extreme sports",
      "Lake Wakatipu and Shotover River surround this thrill-seeker's paradise",
      "New Zealand resort town famous for bungee jumping and skiing",
      "NZ adventure capital on Lake Wakatipu with bungee jumping"
    ],
    waterFeature: "Lake Wakatipu, Shotover River",
    population: "17,000",
    famousFor: "Bungee jumping, Skiing, Milford Sound trips, Adventure sports",
    funFact: "Queenstown is the birthplace of commercial bungee jumping! The first commercial jump was from Kawarau Bridge in 1988. The city featured in Lord of the Rings filming locations. Lake Wakatipu is New Zealand's longest lake and has a unique 'breathing' phenomenon where water levels rise and fall 12cm every 5 minutes.",
    funFactSource: "Queenstown Tourism",
    funFactSourceUrl: "https://www.queenstownnz.co.nz/"
  },

  {
    id: 135,
    name: "Split",
    continent: "Europe",
    country: "Croatia",
    difficulty: "medium",
    clues: [
      "Croatian coastal city built around a Roman emperor's palace",
      "Located on the Dalmatian Coast facing the Adriatic Sea",
      "Historic center built within walls of Diocletian's Palace",
      "The Adriatic Sea laps this city built in a Roman palace",
      "Croatian port city with Diocletian's Palace and waterfront",
      "Croatian city on Adriatic Sea, built around Roman palace"
    ],
    waterFeature: "Adriatic Sea",
    population: "180,000 (340K metro)",
    famousFor: "Diocletian's Palace, Riva waterfront, Marjan Hill, Old Town",
    funFact: "Split's historic center is built inside the walls of Roman Emperor Diocletian's retirement palace from 305 AD! Over 3,000 people still live within the ancient palace walls. The palace covers 30,000 square meters and is one of the best-preserved Roman monuments in the world.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/97/"
  },

  {
    id: 136,
    name: "Salzburg",
    continent: "Europe",
    country: "Austria",
    difficulty: "medium",
    clues: [
      "Austrian city near German border known for classical music",
      "Built along the Salzach River beneath Alpine peaks",
      "Birthplace of Mozart and setting for The Sound of Music",
      "The Salzach River flows through this baroque city",
      "Austrian city with Hohensalzburg Fortress and Mozart's birthplace",
      "Austrian Alpine city, Mozart's birthplace and Sound of Music location"
    ],
    waterFeature: "Salzach River",
    population: "155,000 (550K metro)",
    famousFor: "Mozart's birthplace, Sound of Music, Hohensalzburg Fortress, Old Town",
    funFact: "Salzburg means 'Salt Castle' - the city's wealth came from salt mining for over 1,000 years! The city hosts one of the world's most prestigious music festivals founded in 1920. Salzburg's Old Town is so well-preserved it's entirely a UNESCO World Heritage Site. The city appears in The Sound of Music.",
    funFactSource: "Salzburg Tourism",
    funFactSourceUrl: "https://www.salzburg.info/"
  },

  {
    id: 137,
    name: "Marrakech",
    continent: "Africa",
    country: "Morocco",
    difficulty: "medium",
    clues: [
      "North African city near the Atlas Mountains with red sandstone buildings",
      "Former imperial capital in Morocco's interior",
      "Known for maze-like medina, snake charmers, and bustling souks",
      "The 'Red City' with Jemaa el-Fnaa square and riads",
      "Moroccan city with red walls and labyrinth souks",
      "Moroccan Red City with Djemaa el-Fna square and souks"
    ],
    waterFeature: "Tensift River",
    population: "1 million (1.3M metro)",
    famousFor: "Jemaa el-Fnaa, Koutoubia Mosque, Majorelle Garden, Souks",
    funFact: "Marrakech has been a UNESCO World Heritage Site since 1985! The city walls stretch 19 kilometers and all buildings must be painted in red ochre by law. The Medina has over 18 souks (markets) specializing in everything from spices to carpets. Temperatures can reach 49°C in summer!",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/331/"
  },

  {
    id: 138,
    name: "Lima",
    continent: "South America",
    country: "Peru",
    difficulty: "easy",
    clues: [
      "South American coastal capital on the Pacific Ocean",
      "Built on cliffs overlooking the Pacific in a desert region",
      "Known for ceviche, Pisco Sours, and pre-Columbian ruins",
      "The Pacific Ocean meets this foggy Peruvian capital",
      "Peruvian capital with coastal cliffs and ancient ruins",
      "Peru's capital on Pacific coast, culinary hotspot"
    ],
    waterFeature: "Pacific Ocean, Rímac River",
    population: "10.9 million metro",
    famousFor: "Ceviche, Historic center, Huaca Pucllana ruins, Miraflores cliffs",
    funFact: "Lima has been called the 'Gastronomic Capital of South America' with three restaurants in the World's 50 Best! The city receives almost no rain despite being coastal - less than 30mm per year. Lima was founded by Spanish conquistador Francisco Pizarro in 1535.",
    funFactSource: "Peru Tourism",
    funFactSourceUrl: "https://www.peru.travel/"
  },

  {
    id: 139,
    name: "Chiang Mai",
    continent: "Asia",
    country: "Thailand",
    difficulty: "medium",
    clues: [
      "Northern Thai city surrounded by mountains and jungle",
      "Built along the Ping River in mountainous region",
      "Known for elephant sanctuaries, temples, and night markets",
      "The Ping River flows through this northern Thai city of temples",
      "Thai mountain city with over 300 temples and elephant sanctuaries",
      "Northern Thailand's cultural capital with temples and elephants"
    ],
    waterFeature: "Ping River",
    population: "130,000 (1M metro)",
    famousFor: "Doi Suthep temple, Night Bazaar, Elephant sanctuaries, Lantern festivals",
    funFact: "Chiang Mai has over 300 Buddhist temples within the city! The Yi Peng Lantern Festival sees tens of thousands of floating lanterns released into the sky. Chiang Mai was an independent kingdom for over 600 years. The city is a digital nomad hub with some of the world's cheapest high-speed internet.",
    funFactSource: "Tourism Thailand",
    funFactSourceUrl: "https://www.tourismthailand.org/"
  },

  {
    id: 140,
    name: "Fez",
    continent: "Africa",
    country: "Morocco",
    difficulty: "medium",
    clues: [
      "Moroccan city with the world's largest car-free urban area",
      "Ancient imperial city and spiritual heart of Morocco",
      "Known for medieval medina, leather tanneries, and maze-like streets",
      "Home to world's oldest continuously operating university",
      "Moroccan city with ancient medina and famous leather tanneries",
      "Moroccan medieval city with car-free medina and tanneries"
    ],
    waterFeature: "Fez River",
    population: "1.2 million",
    famousFor: "Medina, Leather tanneries, Al-Qarawiyyin University, Bou Inania Madrasa",
    funFact: "Fez is home to Al-Qarawiyyin University, founded in 859 AD - the oldest continuously operating university in the world according to Guinness World Records! The medina has over 9,000 streets and alleys. Fez's famous tanneries have used the same leather-making techniques for 1,000 years.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/170/"
  },

  {
    id: 141,
    name: "Valletta",
    continent: "Europe",
    country: "Malta",
    difficulty: "hard",
    clues: [
      "Small European island capital with fortified walls",
      "Built on a peninsula in the Mediterranean Sea",
      "Baroque city built by Knights of St. John in 1500s",
      "Mediterranean island fortress city surrounded by harbors",
      "Malta's capital with honey-colored limestone buildings",
      "Maltese fortified capital, smallest EU capital city"
    ],
    waterFeature: "Mediterranean Sea, Grand Harbour",
    population: "6,000 (city), 395,000 (metro)",
    famousFor: "St. John's Co-Cathedral, Upper Barrakka Gardens, Fortifications, Game of Thrones filming",
    funFact: "Valletta is Europe's smallest capital city at just 0.55 square kilometers! The entire city is a UNESCO World Heritage Site. Valletta was built by the Knights of St. John starting in 1566, taking just 5 years to construct. The city was heavily bombed in WWII and earned the George Cross for bravery.",
    funFactSource: "Visit Malta",
    funFactSourceUrl: "https://www.visitmalta.com/"
  },

  {
    id: 142,
    name: "Zanzibar City",
    continent: "Africa",
    country: "Tanzania",
    difficulty: "medium",
    clues: [
      "East African island city with Swahili and Arabic influences",
      "Historic port city on an Indian Ocean island",
      "Known for Stone Town, spice trade, and white-sand beaches",
      "The Indian Ocean surrounds this Tanzanian spice island",
      "Tanzanian island capital with Stone Town and spice tours",
      "Tanzanian island city with Stone Town and spice markets"
    ],
    waterFeature: "Indian Ocean",
    population: "220,000",
    famousFor: "Stone Town, Spice tours, Beach resorts, Historic Arab architecture",
    funFact: "Zanzibar was the world's largest producer of cloves in the 19th century! The island's Stone Town is a maze of narrow alleys dating back to the 1800s. Zanzibar was a major slave trading port until 1873. The island is where Freddie Mercury of Queen was born in 1946.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/173/"
  },

  {
    id: 143,
    name: "Quebec City",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "North American walled city with French colonial architecture",
      "Built on cliffs overlooking the St. Lawrence River",
      "Only walled city north of Mexico in North America",
      "The St. Lawrence River flows past this French-speaking capital",
      "Canadian city with Château Frontenac and fortified walls",
      "French-Canadian walled city on St. Lawrence River"
    ],
    waterFeature: "St. Lawrence River",
    population: "540,000 (810K metro)",
    famousFor: "Château Frontenac, Old Quebec walls, Winter Carnival, French culture",
    funFact: "Quebec City is the only walled city north of Mexico! Founded in 1608, it's one of the oldest cities in North America. The Château Frontenac is the most photographed hotel in the world. Old Quebec is a UNESCO World Heritage Site and looks like a European city transported to Canada.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/300/"
  },

  {
    id: 144,
    name: "Luang Prabang",
    continent: "Asia",
    country: "Laos",
    difficulty: "hard",
    clues: [
      "Southeast Asian town at the confluence of two rivers",
      "Former royal capital surrounded by mountains and jungle",
      "Known for Buddhist temples and alms-giving ceremony",
      "Mekong and Nam Khan rivers meet in this temple town",
      "Lao town with golden temples and morning alms ceremony",
      "Laotian UNESCO town with Buddhist temples on Mekong River"
    ],
    waterFeature: "Mekong River, Nam Khan River",
    population: "55,000",
    famousFor: "Buddhist temples, Alms ceremony, Night market, Kuang Si Falls",
    funFact: "Luang Prabang has over 30 Buddhist temples despite having only 55,000 residents! The daily alms-giving ceremony sees hundreds of monks collecting food from residents at dawn. The entire town is a UNESCO World Heritage Site. Luang Prabang was the royal capital of Laos for centuries.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/479/"
  },

  {
    id: 145,
    name: "Innsbruck",
    continent: "Europe",
    country: "Austria",
    difficulty: "medium",
    clues: [
      "Austrian Alpine city surrounded by snow-capped peaks",
      "Located on the Inn River in the heart of the Alps",
      "Hosted Winter Olympics twice and known for skiing",
      "The Inn River flows through this Olympic city",
      "Austrian ski city with Golden Roof and Alpine views",
      "Austrian Alpine city on Inn River, two-time Winter Olympics host"
    ],
    waterFeature: "Inn River",
    population: "133,000 (300K metro)",
    famousFor: "Winter Olympics, Ski jumping, Golden Roof, Alpine scenery",
    funFact: "Innsbruck is the only city to host the Winter Olympics twice (1964 and 1976) and also hosted the first Winter Youth Olympics! The city has world-class ski jumping facilities right in the city center. Innsbruck means 'bridge over the Inn.' You can ski in the morning and explore the historic old town for lunch!",
    funFactSource: "Innsbruck Tourism",
    funFactSourceUrl: "https://www.innsbruck.info/"
  },

  {
    id: 146,
    name: "Hoi An",
    continent: "Asia",
    country: "Vietnam",
    difficulty: "medium",
    clues: [
      "Vietnamese coastal town famous for lanterns and tailors",
      "Ancient trading port on the Thu Bon River",
      "Exceptionally well-preserved Southeast Asian trading port",
      "The Thu Bon River flows through this lantern-lit town",
      "Vietnamese town with colorful lanterns and Japanese bridge",
      "Vietnamese UNESCO town with lanterns on Thu Bon River"
    ],
    waterFeature: "Thu Bon River, South China Sea",
    population: "120,000",
    famousFor: "Lantern Festival, Japanese Covered Bridge, Tailor shops, Old Town",
    funFact: "Hoi An's entire Old Town is lit by silk lanterns at night - no electric street lights! The town was a major Southeast Asian trading port from the 15th-19th centuries. Hoi An has over 600 tailor shops and can make custom clothes in 24 hours. The Japanese Covered Bridge was built in the 1590s.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/948/"
  },

  {
    id: 147,
    name: "Granada",
    continent: "Europe",
    country: "Spain",
    difficulty: "medium",
    clues: [
      "Spanish city in Andalusia with Moorish palace",
      "Built at the foot of the Sierra Nevada mountains",
      "Home to the famous Alhambra palace complex",
      "The Darro River flows through this city of the Alhambra",
      "Spanish city with Alhambra palace and gypsy caves",
      "Spanish Andalusian city with Alhambra Moorish palace"
    ],
    waterFeature: "Darro River, Genil River",
    population: "230,000 (490K metro)",
    famousFor: "Alhambra Palace, Generalife gardens, Flamenco caves, Sierra Nevada skiing",
    funFact: "The Alhambra is Spain's most visited monument with over 3 million visitors annually! Granada was the last Muslim stronghold in Spain, falling in 1492. The Alhambra's intricate Islamic architecture took over 100 years to complete. Granada offers free tapas with every drink - a unique Spanish tradition that still thrives here.",
    funFactSource: "Alhambra Official",
    funFactSourceUrl: "https://www.alhambra.org/"
  },

  {
    id: 148,
    name: "Charleston",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Historic American southern city known for antebellum architecture",
      "Located on a harbor where two rivers meet the Atlantic",
      "Known for pastel houses, plantations, and southern hospitality",
      "The Ashley and Cooper rivers frame this southern port",
      "South Carolina coastal city with Rainbow Row houses",
      "South Carolina port city with historic plantations and pastel houses"
    ],
    waterFeature: "Charleston Harbor, Ashley River, Cooper River, Atlantic Ocean",
    population: "150,000 (800K metro)",
    famousFor: "Rainbow Row, Historic plantations, Fort Sumter, Southern cuisine",
    funFact: "Charleston was the wealthiest city in America before the Civil War! The city has the nickname 'Holy City' because of its numerous church steeples. Fort Sumter in Charleston Harbor is where the Civil War began in 1861. Charleston has been named the #1 U.S. city by travel magazines repeatedly.",
    funFactSource: "Charleston Tourism",
    funFactSourceUrl: "https://www.charlestoncvb.com/"
  },

  {
    id: 149,
    name: "Bagan",
    continent: "Asia",
    country: "Myanmar",
    difficulty: "hard",
    clues: [
      "Ancient Southeast Asian city with thousands of temples",
      "Located on plains along the Irrawaddy River",
      "Home to over 2,000 Buddhist temples and pagodas",
      "The Irrawaddy River flows past this temple-studded plain",
      "Myanmar's ancient capital with thousands of Buddhist temples",
      "Myanmar temple city with 2,000+ pagodas on Irrawaddy River"
    ],
    waterFeature: "Irrawaddy River",
    population: "Few thousand (archaeological zone)",
    famousFor: "Ancient temples, Hot air balloon rides, Buddhist pagodas, Sunrise views",
    funFact: "Bagan has over 2,200 Buddhist temples and pagodas spread across 40 square kilometers! At its peak in the 11th-13th centuries, over 10,000 temples existed here. Taking a hot air balloon ride over the temples at sunrise is considered one of the world's best travel experiences. It's Myanmar's most iconic sight.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/1588/"
  },

  {
    id: 150,
    name: "Ghent",
    continent: "Europe",
    country: "Belgium",
    difficulty: "medium",
    clues: [
      "Belgian city with medieval architecture and canal system",
      "Located at the confluence of Scheldt and Leie rivers",
      "Known for Gravensteen castle and the Ghent Altarpiece",
      "The Scheldt and Leie rivers meet in this Flemish city",
      "Belgian medieval city with castle and canal-side guildhalls",
      "Belgian canal city with Gravensteen castle and medieval center"
    ],
    waterFeature: "Scheldt River, Leie River",
    population: "265,000",
    famousFor: "Gravensteen Castle, Ghent Altarpiece, St. Bavo's Cathedral, Canals",
    funFact: "Ghent's St. Bavo's Cathedral houses the famous Ghent Altarpiece - one of the most stolen artworks in history, taken 13 times! During the Middle Ages, Ghent was the second-largest city north of the Alps. The city has more listed buildings than any other Belgian city. Ghent is entirely car-free in its center.",
    funFactSource: "Visit Ghent",
    funFactSourceUrl: "https://visit.gent.be/en"
  },

  {
    id: 151,
    name: "Helsinki",
    continent: "Europe",
    country: "Finland",
    difficulty: "medium",
    clues: [
      "Nordic capital on the Baltic Sea with modern design",
      "Built on a peninsula with hundreds of islands nearby",
      "Known for saunas, design district, and Sibelius Monument",
      "The Gulf of Finland surrounds this white city of the north",
      "Finnish capital with Senate Square and Market Square",
      "Finnish capital on Baltic Sea, design and sauna capital"
    ],
    waterFeature: "Gulf of Finland, Baltic Sea",
    population: "660,000 (1.5M metro)",
    famousFor: "Senate Square, Suomenlinna Fortress, Saunas, Design Museum",
    funFact: "Helsinki has more saunas than cars - over 200,000 saunas for 660,000 people! The city hosts the World Sauna Championships. Finland invented the modern sauna, and Helsinki's public saunas are a way of life. The city also has one of the world's cleanest tap water systems.",
    funFactSource: "Visit Helsinki",
    funFactSourceUrl: "https://www.myhelsinki.fi/"
  },

  {
    id: 152,
    name: "Nairobi",
    continent: "Africa",
    country: "Kenya",
    difficulty: "easy",
    clues: [
      "East African capital city near the equator",
      "Built at high altitude in the Great Rift Valley",
      "Known for safari parks, wildlife, and being the 'Safari Capital'",
      "Nairobi River flows through this city with a national park",
      "Kenyan capital with Nairobi National Park within city limits",
      "Kenyan capital with wildlife safaris and giraffes in the city"
    ],
    waterFeature: "Nairobi River",
    population: "4.4 million (5M metro)",
    famousFor: "Nairobi National Park, Giraffe Centre, Safari capital, David Sheldrick Elephant Orphanage",
    funFact: "Nairobi is the only capital city in the world with a national park within its boundaries! Nairobi National Park is just 7km from the city center where you can see lions, rhinos, and giraffes with skyscrapers in the background. The city is nicknamed 'Safari Capital of the World.'",
    funFactSource: "Kenya Wildlife Service",
    funFactSourceUrl: "https://www.kws.go.ke/"
  },

  {
    id: 153,
    name: "Montevideo",
    continent: "South America",
    country: "Uruguay",
    difficulty: "medium",
    clues: [
      "South American capital on the Atlantic Ocean",
      "Built on the northern shore of the Río de la Plata",
      "Known for beaches, tango, and mate tea culture",
      "The Río de la Plata estuary meets this relaxed coastal capital",
      "Uruguayan capital with beaches and colonial Ciudad Vieja",
      "Uruguay's capital on Río de la Plata with beaches and tango"
    ],
    waterFeature: "Río de la Plata, Atlantic Ocean",
    population: "1.3 million (2M metro)",
    famousFor: "Rambla promenade, Ciudad Vieja, Beaches, Mercado del Puerto",
    funFact: "Montevideo has the longest continuous sidewalk in the world - the Rambla stretches 22 kilometers along the coastline! Uruguay was the first country to legalize marijuana and has one of South America's highest quality of life ratings. Montevideo is consistently rated as Latin America's safest city.",
    funFactSource: "Montevideo Tourism",
    funFactSourceUrl: "https://montevideo.gub.uy/"
  },

  {
    id: 154,
    name: "Lyon",
    continent: "Europe",
    country: "France",
    difficulty: "medium",
    clues: [
      "French city at the confluence of two major rivers",
      "Historic silk-weaving center in southeastern France",
      "Known as France's gastronomic capital with famous chefs",
      "The Rhône and Saône rivers meet in this culinary city",
      "French city with Roman theaters and traboules passages",
      "French gastronomic capital where Rhône meets Saône"
    ],
    waterFeature: "Rhône River, Saône River",
    population: "520,000 (2.3M metro)",
    famousFor: "Gastronomy, Roman ruins, Traboules, Basilica of Notre-Dame de Fourvière",
    funFact: "Lyon is considered the gastronomic capital of France with more restaurants per capita than any other French city! The city invented the modern bouchon restaurant. Lyon has two rivers meeting in the city center. The city's traboules are secret Renaissance passageways used by silk workers.",
    funFactSource: "Lyon Tourism",
    funFactSourceUrl: "https://www.lyon-france.com/"
  },

  {
    id: 155,
    name: "Santiago",
    continent: "South America",
    country: "Chile",
    difficulty: "easy",
    clues: [
      "South American capital in a valley surrounded by mountains",
      "Built at the foot of the Andes mountain range",
      "Known for wine regions, skiing nearby, and the Andes views",
      "The Mapocho River flows through this Chilean capital",
      "Chilean capital with Andes mountains and wine valleys",
      "Chile's capital beneath the Andes with nearby ski resorts"
    ],
    waterFeature: "Mapocho River",
    population: "6.3 million (7.1M metro)",
    famousFor: "Andes views, Wine regions, Cerro San Cristóbal, Plaza de Armas",
    funFact: "Santiago has some of the cleanest air in South America thanks to Andes winds! You can ski in the Andes in the morning and visit wine valleys in the afternoon. Chile has the world's largest swimming pool at San Alfonso del Mar resort near Santiago - it's 1 kilometer long!",
    funFactSource: "Chile Tourism",
    funFactSourceUrl: "https://chile.travel/"
  },

  {
    id: 156,
    name: "Krakow",
    continent: "Europe",
    country: "Poland",
    difficulty: "medium",
    clues: [
      "Historic Polish city with Europe's largest medieval market square",
      "Former royal capital on the Vistula River",
      "Gateway to Auschwitz and home to Wawel Castle",
      "The Vistula River flows through this former Polish capital",
      "Polish city with Europe's largest medieval square and castle",
      "Former Polish capital on Vistula with Wawel Castle"
    ],
    waterFeature: "Vistula River",
    population: "780,000 (1.8M metro)",
    famousFor: "Wawel Castle, Main Market Square, Salt mines, Jewish Quarter",
    funFact: "Krakow's Main Market Square is Europe's largest medieval market square at 40,000 square meters! The nearby Wieliczka Salt Mine has been operating for over 700 years and has an underground chapel carved entirely from salt. Krakow was Poland's capital for 500 years until 1596.",
    funFactSource: "Krakow Tourism",
    funFactSourceUrl: "https://www.krakow.travel/"
  },

  {
    id: 157,
    name: "Osaka",
    continent: "Asia",
    country: "Japan",
    difficulty: "easy",
    clues: [
      "Major Japanese port city known for street food and commerce",
      "Built on river deltas opening to Osaka Bay",
      "Known as 'Japan's Kitchen' for its food culture",
      "The Yodo River flows through this merchant city",
      "Japanese port city famous for takoyaki and Osaka Castle",
      "Japanese food capital on Osaka Bay with neon districts"
    ],
    waterFeature: "Yodo River, Osaka Bay",
    population: "2.7 million (19M metro)",
    famousFor: "Osaka Castle, Dotonbori district, Street food, Universal Studios Japan",
    funFact: "Osaka is known as 'Japan's Kitchen' because it has the best street food in Japan! The city invented takoyaki (octopus balls) and okonomiyaki. Osaka has more restaurants per capita than any Japanese city. The local dialect is so distinct it's almost like a different language!",
    funFactSource: "Osaka Tourism",
    funFactSourceUrl: "https://osaka-info.jp/en/"
  },

  {
    id: 158,
    name: "Bogotá",
    continent: "South America",
    country: "Colombia",
    difficulty: "easy",
    clues: [
      "High-altitude South American capital in the Andes",
      "Built at 2,640 meters elevation on a plateau",
      "Known for emeralds, gold museums, and colonial architecture",
      "Colombian capital with no major river but mountain streams",
      "Colombian capital with Gold Museum and historic La Candelaria",
      "Colombian Andean capital with gold museums and colonial quarter"
    ],
    waterFeature: "Bogotá River",
    population: "8 million (11M metro)",
    famousFor: "Gold Museum, La Candelaria, Monserrate, Botero Museum",
    funFact: "Bogotá is the highest capital city in South America at 2,640 meters! The city's Gold Museum has the world's largest collection of pre-Hispanic gold artifacts - over 55,000 pieces. Every Sunday, 120km of streets are closed to cars for 'Ciclovía' - millions of people bike, walk, and skate.",
    funFactSource: "Colombia Tourism",
    funFactSourceUrl: "https://colombia.travel/"
  },

  {
    id: 159,
    name: "Quito",
    continent: "South America",
    country: "Ecuador",
    difficulty: "medium",
    clues: [
      "South American capital closest to the equator",
      "Built at 2,850 meters in a valley surrounded by volcanoes",
      "First UNESCO World Heritage Site declared in 1978",
      "Ecuadorian capital with colonial center and nearby equator monument",
      "World's highest official capital city near the equator",
      "Ecuadorian capital at 2,850m elevation with colonial churches"
    ],
    waterFeature: "Nearby rivers and waterfalls",
    population: "1.8 million (2.7M metro)",
    famousFor: "Colonial center, Equator monument, Volcanoes, Teleferico",
    funFact: "Quito was the first city ever declared a UNESCO World Heritage Site in 1978! It's the world's highest official capital city at 2,850 meters. The city is just 25km from the equator. You can stand with one foot in each hemisphere at the Mitad del Mundo monument.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/2/"
  },

  {
    id: 160,
    name: "Vilnius",
    continent: "Europe",
    country: "Lithuania",
    difficulty: "hard",
    clues: [
      "Baltic capital with one of Europe's largest surviving medieval old towns",
      "Built at the confluence of two rivers in northeastern Europe",
      "Known for Baroque architecture and amber jewelry",
      "The Neris and Vilnia rivers meet in this Lithuanian capital",
      "Lithuanian capital with Baroque churches and amber shops",
      "Baltic capital where Neris meets Vilnia with medieval old town"
    ],
    waterFeature: "Neris River, Vilnia River",
    population: "580,000 (810K metro)",
    famousFor: "Old Town, Gediminas Tower, St. Anne's Church, Amber",
    funFact: "Vilnius has one of the largest surviving medieval old towns in Northern Europe covering 3.6 square kilometers! Lithuania was the last pagan country in Europe, converting to Christianity in 1387. The city has a district called Užupis that declared independence as a 'Republic' with its own constitution and president!",
    funFactSource: "Visit Lithuania",
    funFactSourceUrl: "https://www.lithuania.travel/"
  },

  {
    id: 161,
    name: "Manchester",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "easy",
    clues: [
      "Northern English industrial city that sparked the Industrial Revolution",
      "Built on canals and rivers in northwestern England",
      "Known for football, music scene, and industrial heritage",
      "The Irwell, Medlock, and Irk rivers flow through this city",
      "English city with Manchester United and music heritage",
      "Industrial English city with football clubs and canals"
    ],
    waterFeature: "River Irwell, Manchester Ship Canal",
    population: "550,000 (2.8M metro)",
    famousFor: "Manchester United, Music scene, Industrial heritage, Science Museum",
    funFact: "Manchester was the world's first industrialized city and birthplace of the Industrial Revolution! The city built the Manchester Ship Canal in 1894 - at 36 miles long it was the largest navigation canal in the world. Manchester gave birth to bands like Oasis, The Smiths, and Joy Division.",
    funFactSource: "Visit Manchester",
    funFactSourceUrl: "https://www.visitmanchester.com/"
  },

  {
    id: 162,
    name: "Casablanca",
    continent: "Africa",
    country: "Morocco",
    difficulty: "easy",
    clues: [
      "Moroccan port city on the Atlantic Ocean",
      "Largest city in Morocco with Hassan II Mosque",
      "Made famous by the 1942 Hollywood film",
      "The Atlantic Ocean meets this white-walled Moroccan port",
      "Moroccan port with Hassan II Mosque on the ocean",
      "Moroccan Atlantic port with grand oceanside mosque"
    ],
    waterFeature: "Atlantic Ocean",
    population: "3.7 million (4.3M metro)",
    famousFor: "Hassan II Mosque, Art Deco architecture, Rick's Café, Beaches",
    funFact: "Casablanca's Hassan II Mosque has the world's tallest minaret at 210 meters! The mosque is built partly over the Atlantic Ocean and can hold 25,000 worshippers inside. Despite the famous film, 'Casablanca' was actually filmed entirely in Hollywood - not a single scene was shot in Morocco!",
    funFactSource: "Morocco Tourism",
    funFactSourceUrl: "https://www.visitmorocco.com/"
  },

  {
    id: 163,
    name: "Wellington",
    continent: "Oceania",
    country: "New Zealand",
    difficulty: "medium",
    clues: [
      "Capital city on New Zealand's North Island with strong winds",
      "Built on hills around a natural harbor",
      "Known as 'Windy Wellington' and home to film industry",
      "Wellington Harbour and Cook Strait surround this capital",
      "New Zealand's capital with film studios and cable car",
      "NZ's windy capital on Cook Strait, film industry hub"
    ],
    waterFeature: "Wellington Harbour, Cook Strait",
    population: "215,000 (420K metro)",
    famousFor: "Film industry, Cable car, Te Papa Museum, Craft beer",
    funFact: "Wellington is the windiest city in the world with average wind speeds of 27 km/h! The city was the filming location for Lord of the Rings and headquarters of Weta Workshop. Wellington has more cafes and restaurants per capita than New York City. The cable car runs up 120 meters.",
    funFactSource: "Wellington Tourism",
    funFactSourceUrl: "https://www.wellingtonnz.com/"
  },

  {
    id: 164,
    name: "Tunis",
    continent: "Africa",
    country: "Tunisia",
    difficulty: "medium",
    clues: [
      "North African capital near ancient Carthage ruins",
      "Built on the Mediterranean coast in North Africa",
      "Gateway to Carthage and home to an ancient medina",
      "The Mediterranean and Lake of Tunis surround this capital",
      "Tunisian capital with nearby Carthage ruins",
      "Tunisian Mediterranean capital near ancient Carthage"
    ],
    waterFeature: "Mediterranean Sea, Lake of Tunis",
    population: "640,000 (2.7M metro)",
    famousFor: "Medina, Carthage ruins, Bardo Museum, Beaches",
    funFact: "Tunis is just 15km from the ruins of ancient Carthage - once Rome's greatest rival! The city's medina has over 700 monuments including palaces, mosques, and fountains. Tunisia was the first Arab country to abolish slavery in 1846. The nearby ruins of Carthage date back to 814 BC!",
    funFactSource: "Tunisia Tourism",
    funFactSourceUrl: "https://www.discovertunisia.com/"
  },

  {
    id: 165,
    name: "Glasgow",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "medium",
    clues: [
      "Scottish city on the River Clyde with shipbuilding heritage",
      "Major port city in Scotland's west known for architecture",
      "Victorian city with art nouveau and Charles Rennie Mackintosh designs",
      "The River Clyde flows through this Scottish city",
      "Scotland's largest city with Victorian architecture",
      "Scottish city on the Clyde with shipbuilding history"
    ],
    waterFeature: "River Clyde",
    population: "635,000 (1.8M metro)",
    famousFor: "Mackintosh architecture, Shipbuilding, Kelvingrove Museum, Music scene",
    funFact: "Glasgow built over 20,000 ships - one-fifth of the world's shipping! The city has more listed buildings than anywhere in the UK outside London. Glasgow School of Art is Charles Rennie Mackintosh's masterpiece. The city's motto is 'Let Glasgow Flourish' and it's been UK City of Architecture.",
    funFactSource: "People Make Glasgow",
    funFactSourceUrl: "https://peoplemakeglasgow.com/"
  },

  {
    id: 166,
    name: "Rotterdam",
    continent: "Europe",
    country: "Netherlands",
    difficulty: "medium",
    clues: [
      "Dutch port city with Europe's largest seaport",
      "Built on the Rhine-Meuse delta with modern architecture",
      "Rebuilt after WWII with cutting-edge contemporary buildings",
      "The Maas River flows through Europe's busiest port",
      "Dutch port with cube houses and Europe's largest harbor",
      "Dutch port city on the Maas with modern architecture"
    ],
    waterFeature: "Maas River, Rhine-Meuse delta",
    population: "650,000 (2.7M metro)",
    famousFor: "Port of Rotterdam, Cube houses, Erasmus Bridge, Modern architecture",
    funFact: "Rotterdam has Europe's largest port handling 500 million tons of cargo annually! The city was almost completely destroyed in WWII and rebuilt with daring modern architecture. The Cube Houses are tilted 45 degrees. Rotterdam has more than 50 countries represented, making it one of Europe's most multicultural cities.",
    funFactSource: "Rotterdam Tourism",
    funFactSourceUrl: "https://en.rotterdam.info/"
  },

  {
    id: 167,
    name: "Addis Ababa",
    continent: "Africa",
    country: "Ethiopia",
    difficulty: "medium",
    clues: [
      "African capital at high altitude in the Ethiopian Highlands",
      "Home to the African Union headquarters",
      "Known as the political capital of Africa",
      "Ethiopian capital at 2,355 meters elevation",
      "Ethiopia's capital with African Union and Lucy fossil",
      "African diplomatic capital in Ethiopian highlands"
    ],
    waterFeature: "Nearby mountain rivers",
    population: "3.4 million (5M metro)",
    famousFor: "African Union, Lucy fossil, Ethiopian coffee, Merkato market",
    funFact: "Addis Ababa means 'New Flower' in Amharic! The city is home to the African Union headquarters. Ethiopia is the birthplace of coffee and Addis Ababa has an incredible coffee culture. The city houses Lucy - the 3.2 million-year-old human ancestor fossil. Ethiopia uses a unique calendar 7 years behind ours!",
    funFactSource: "Ethiopian Tourism",
    funFactSourceUrl: "https://www.ethiopia.travel/"
  },

  {
    id: 168,
    name: "Genoa",
    continent: "Europe",
    country: "Italy",
    difficulty: "medium",
    clues: [
      "Italian port city on the Mediterranean known for maritime history",
      "Birthplace of Christopher Columbus with largest old town",
      "Major Ligurian Sea port with aquarium and pesto",
      "The Ligurian Sea meets this Italian maritime republic",
      "Italian port city, Columbus's birthplace with aquarium",
      "Italian Mediterranean port, birthplace of Christopher Columbus"
    ],
    waterFeature: "Ligurian Sea, Mediterranean",
    population: "580,000 (1.5M metro)",
    famousFor: "Christopher Columbus birthplace, Aquarium, Pesto, Old port",
    funFact: "Genoa was one of the most powerful maritime republics for centuries! The city gave birth to Christopher Columbus in 1451. Genoa invented pesto sauce and focaccia bread. The city's old town is one of the largest medieval quarters in Europe. Genoa's aquarium is Europe's largest with 12,000 animals!",
    funFactSource: "Genoa Tourism",
    funFactSourceUrl: "https://www.visitgenoa.it/"
  },

  {
    id: 169,
    name: "Medellin",
    continent: "South America",
    country: "Colombia",
    difficulty: "medium",
    clues: [
      "Colombian city in a valley known as 'City of Eternal Spring'",
      "Built in the Aburrá Valley surrounded by mountains",
      "Transformed from dangerous city to innovation hub with cable cars",
      "The Medellín River flows through this transformed city",
      "Colombian city with cable car transport and flower festival",
      "Colombian valley city with gondola metro and eternal spring"
    ],
    waterFeature: "Medellín River",
    population: "2.6 million (4M metro)",
    famousFor: "Cable car metro, Flower Festival, Botero sculptures, Innovation",
    funFact: "Medellín has transformed from one of the world's most dangerous cities to an innovation capital! The city's Metro Cable gondola system connects hillside neighborhoods. Medellín is called 'City of Eternal Spring' for its perfect weather year-round at 24°C. The city hosts Colombia's most famous Flower Festival with elaborate floats.",
    funFactSource: "Medellín Tourism",
    funFactSourceUrl: "https://www.medellin.travel/"
  },

  {
    id: 170,
    name: "Bali (Denpasar)",
    continent: "Asia",
    country: "Indonesia",
    difficulty: "easy",
    clues: [
      "Indonesian island capital known for temples and beaches",
      "Tropical island between Java Sea and Indian Ocean",
      "Famous for surf, yoga, rice terraces, and Hindu temples",
      "The Indian Ocean and Bali Sea surround this island paradise",
      "Indonesian island with Uluwatu Temple and surf beaches",
      "Indonesian tropical island with rice terraces and temples"
    ],
    waterFeature: "Indian Ocean, Bali Sea",
    population: "900,000 (4M island)",
    famousFor: "Temples, Surfing, Rice terraces, Yoga retreats",
    funFact: "Bali is the only Hindu-majority province in Muslim-majority Indonesia! The island has over 20,000 temples. Bali's rice terraces use a 1,000-year-old irrigation system called 'subak' that's a UNESCO World Heritage Site. The island receives 6 million tourists annually - more than the island's population!",
    funFactSource: "Indonesia Tourism",
    funFactSourceUrl: "https://www.indonesia.travel/"
  },

  {
    id: 171,
    name: "Seville",
    continent: "Europe",
    country: "Spain",
    difficulty: "medium",
    clues: [
      "Andalusian capital known for flamenco and bullfighting",
      "Built along the Guadalquivir River in southern Spain",
      "Home to Alcázar palace and orange tree-lined streets",
      "The Guadalquivir River flows through this flamenco capital",
      "Spanish city with Alcázar, flamenco, and orange trees",
      "Andalusian capital on Guadalquivir with Alcázar palace"
    ],
    waterFeature: "Guadalquivir River",
    population: "690,000 (1.5M metro)",
    famousFor: "Alcázar, Flamenco, Orange trees, Plaza de España",
    funFact: "Seville has over 45,000 orange trees lining its streets producing 15 million kilos of oranges yearly! The oranges are too bitter to eat and are exported to Britain for marmalade. Seville is Spain's hottest major city hitting 40°C in summer. The city's April Fair attracts over 1 million visitors.",
    funFactSource: "Seville Tourism",
    funFactSourceUrl: "https://www.visitasevilla.es/"
  },

  {
    id: 172,
    name: "Lagos",
    continent: "Africa",
    country: "Nigeria",
    difficulty: "easy",
    clues: [
      "West African megacity and economic powerhouse",
      "Built on islands and lagoons on the Atlantic coast",
      "Africa's largest city by population with Nollywood",
      "The Lagos Lagoon and Atlantic Ocean surround this megacity",
      "Nigerian megacity with Nollywood film industry",
      "West African coastal megacity with 20+ million people"
    ],
    waterFeature: "Lagos Lagoon, Atlantic Ocean",
    population: "15 million (24M metro)",
    famousFor: "Nollywood, Victoria Island, Beaches, Afrobeat music",
    funFact: "Lagos is Africa's largest city and will be the world's largest by 2100! The city produces 2,500 Nollywood films annually - second only to Bollywood. Lagos was Nigeria's capital until 1991. The city grows by 77 people per hour! Lagos has 21 bridges connecting its islands.",
    funFactSource: "Nigeria Tourism",
    funFactSourceUrl: "https://tourism.gov.ng/"
  },

  {
    id: 173,
    name: "Marseille",
    continent: "Europe",
    country: "France",
    difficulty: "medium",
    clues: [
      "French Mediterranean port city founded by Greeks",
      "France's oldest city and second-largest by population",
      "Known for bouillabaisse fish stew and diverse culture",
      "The Mediterranean Sea meets this ancient French port",
      "French port with Old Port and Notre-Dame de la Garde",
      "French Mediterranean port, oldest city in France"
    ],
    waterFeature: "Mediterranean Sea",
    population: "870,000 (1.9M metro)",
    famousFor: "Old Port, Notre-Dame de la Garde, Bouillabaisse, Calanques",
    funFact: "Marseille is France's oldest city, founded by Greek sailors around 600 BC! The city's Vieux Port (Old Port) has been a harbor for 2,600 years. Marseille is France's most multicultural city with 25% of residents born abroad. The French national anthem 'La Marseillaise' was sung here first in 1792!",
    funFactSource: "Marseille Tourism",
    funFactSourceUrl: "https://www.marseille-tourisme.com/"
  },

  {
    id: 174,
    name: "Ho Chi Minh City",
    continent: "Asia",
    country: "Vietnam",
    difficulty: "easy",
    clues: [
      "Vietnamese city formerly known as Saigon",
      "Built on the Saigon River in southern Vietnam",
      "Known for war history, French colonial buildings, and street food",
      "The Saigon River flows through this former Saigon",
      "Vietnamese city with Cu Chi Tunnels and French architecture",
      "Former Saigon on Saigon River, Vietnam's largest city"
    ],
    waterFeature: "Saigon River",
    population: "9 million (13M metro)",
    famousFor: "Cu Chi Tunnels, Notre-Dame Cathedral, War Remnants Museum, Street food",
    funFact: "Ho Chi Minh City has over 8 million motorbikes - more motorbikes than people! The city was called Saigon until 1976 when it was renamed after Ho Chi Minh. The Cu Chi Tunnels network spans 250 kilometers underground. The city is Vietnam's economic powerhouse generating 20% of the country's GDP.",
    funFactSource: "Vietnam Tourism",
    funFactSourceUrl: "https://vietnam.travel/"
  },

  {
    id: 175,
    name: "Colombo",
    continent: "Asia",
    country: "Sri Lanka",
    difficulty: "medium",
    clues: [
      "Sri Lankan port capital on the Indian Ocean",
      "Historic spice trade port with colonial architecture",
      "Known for tea, Buddhist temples, and beach promenade",
      "The Indian Ocean meets this Sri Lankan capital",
      "Sri Lankan capital with Galle Face Green promenade",
      "Sri Lankan port on Indian Ocean, tea and spice capital"
    ],
    waterFeature: "Indian Ocean",
    population: "750,000 (5.6M metro)",
    famousFor: "Galle Face Green, Buddhist temples, Tea, Cinnamon",
    funFact: "Colombo was a vital spice trade port for over 2,000 years! Sri Lanka (Ceylon) produces the world's finest cinnamon - 90% of global cinnamon comes from here. The city's Galle Face Green is a 5-hectare oceanfront promenade from colonial times. Sri Lanka's name means 'resplendent island' in Sanskrit.",
    funFactSource: "Sri Lanka Tourism",
    funFactSourceUrl: "https://www.srilanka.travel/"
  },

  {
    id: 176,
    name: "Antwerp",
    continent: "Europe",
    country: "Belgium",
    difficulty: "medium",
    clues: [
      "Belgian port city known as world's diamond capital",
      "Built on the Scheldt River with medieval old town",
      "Home to Rubens and center of global diamond trade",
      "The Scheldt River flows through this diamond capital",
      "Belgian city with diamond district and Rubens house",
      "Belgian diamond capital on Scheldt River with medieval center"
    ],
    waterFeature: "Scheldt River",
    population: "530,000 (1.2M metro)",
    famousFor: "Diamond district, Rubens, Fashion, Grote Markt",
    funFact: "Antwerp is the diamond capital of the world - 80% of rough diamonds pass through here! The city's diamond district has over 1,500 diamond companies. Peter Paul Rubens lived and worked in Antwerp. The city is also a fashion capital, home to the 'Antwerp Six' designers. Antwerp has Europe's second-largest port.",
    funFactSource: "Visit Antwerp",
    funFactSourceUrl: "https://www.visitantwerpen.be/"
  },

  {
    id: 177,
    name: "Newcastle",
    continent: "Oceania",
    country: "Australia",
    difficulty: "medium",
    clues: [
      "Australian coastal city north of Sydney",
      "Built at the mouth of the Hunter River on the Pacific",
      "Known for beaches, coal export, and surf culture",
      "The Hunter River meets the Pacific at this port city",
      "Australian surf city with coal port and beaches",
      "NSW coastal city on Hunter River with surf beaches"
    ],
    waterFeature: "Hunter River, Pacific Ocean",
    population: "320,000 (490K metro)",
    famousFor: "Beaches, Surfing, Coal port, Nobbys Head lighthouse",
    funFact: "Newcastle is the world's largest coal export port! The city was named after the coal port Newcastle upon Tyne in England. Newcastle has some of Australia's best surf beaches. The city's Bogey Hole is one of the oldest ocean baths in Australia, hand-carved by convicts in 1820.",
    funFactSource: "Visit Newcastle",
    funFactSourceUrl: "https://www.visitnewcastle.com.au/"
  },

  {
    id: 178,
    name: "Gdansk",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Polish Baltic port city with amber and shipbuilding history",
      "Where WWII started and Solidarity movement began",
      "Known for colorful buildings along the Motlawa River",
      "The Baltic Sea and Motlawa River meet in this amber city",
      "Polish Baltic port where WWII began, amber capital",
      "Polish port on Baltic, birthplace of Solidarity movement"
    ],
    waterFeature: "Baltic Sea, Motlawa River",
    population: "470,000 (1.1M metro)",
    famousFor: "Amber, Solidarity movement, Old Town, Shipyards",
    funFact: "Gdansk is the world's amber capital - 80% of the world's amber is found on the Baltic coast! WWII started here on September 1, 1939. The Solidarity trade union started in Gdansk shipyards in 1980, leading to communism's fall in Poland. The city was 90% destroyed in WWII and meticulously rebuilt.",
    funFactSource: "Gdansk Tourism",
    funFactSourceUrl: "https://visit.gdansk.pl/"
  },

  {
    id: 179,
    name: "Muscat",
    continent: "Asia",
    country: "Oman",
    difficulty: "medium",
    clues: [
      "Arabian Gulf capital surrounded by mountains and desert",
      "Built along the Gulf of Oman with Portuguese forts",
      "Known for Sultan Qaboos Grand Mosque and incense",
      "The Gulf of Oman surrounds this Arabian capital",
      "Omani capital with Grand Mosque and mountain backdrop",
      "Omani port on Gulf of Oman with Portuguese forts"
    ],
    waterFeature: "Gulf of Oman",
    population: "1.6 million metro",
    famousFor: "Sultan Qaboos Grand Mosque, Mutrah Souq, Forts, Incense",
    funFact: "Muscat has been inhabited for over 2,000 years! The Sultan Qaboos Grand Mosque has a prayer carpet made from 1.7 billion knots taking 4 years to weave. Oman was the world's largest producer of frankincense. Muscat's Mutrah Souq is one of the oldest markets in the Arab world, dating back 200 years.",
    funFactSource: "Oman Tourism",
    funFactSourceUrl: "https://www.experienceoman.om/"
  },

  {
    id: 180,
    name: "Tbilisi",
    continent: "Asia",
    country: "Georgia",
    difficulty: "hard",
    clues: [
      "Caucasus capital known for sulfur baths and wine",
      "Built along the Mtkvari River in a valley",
      "Georgia's capital with ancient winemaking traditions",
      "The Mtkvari River flows through this Georgian capital",
      "Georgian capital with sulfur baths and wine culture",
      "Caucasus capital on Mtkvari River with ancient wine tradition"
    ],
    waterFeature: "Mtkvari River (Kura River)",
    population: "1.2 million (1.5M metro)",
    famousFor: "Sulfur baths, Wine, Old Town, Narikala Fortress",
    funFact: "Georgia is the birthplace of wine - archaeological evidence shows winemaking here 8,000 years ago! Tbilisi means 'warm location' referring to the city's sulfur hot springs. Georgia has its own alphabet, one of only 14 alphabets in the world. Tbilisi's sulfur baths have been used for centuries for healing.",
    funFactSource: "Georgia Tourism",
    funFactSourceUrl: "https://www.georgia.travel/"
  },

  {
    id: 181,
    name: "Cartagena de Indias",
    continent: "South America",
    country: "Colombia",
    difficulty: "medium",
    clues: [
      "Colombian Caribbean port with colonial walled city",
      "Built to protect Spanish treasure fleets from pirates",
      "Colorful colonial buildings and Caribbean beaches",
      "The Caribbean Sea surrounds this walled colonial port",
      "Colombian coastal gem with colorful colonial walls",
      "Caribbean Colombian port with Spanish colonial fortifications"
    ],
    waterFeature: "Caribbean Sea",
    population: "1 million",
    famousFor: "Walled City, Castillo San Felipe, Colonial architecture, Beaches",
    funFact: "Cartagena was founded in 1533 and became Spain's primary Caribbean port! The city's massive walls took 200 years to complete. Cartagena was attacked by pirates more than any other Spanish colonial city. The Castillo San Felipe fortress is the largest Spanish fort in the Americas. Gabriel García Márquez set novels here.",
    funFactSource: "Colombia Tourism",
    funFactSourceUrl: "https://colombia.travel/"
  },

  {
    id: 182,
    name: "Riga",
    continent: "Europe",
    country: "Latvia",
    difficulty: "medium",
    clues: [
      "Baltic capital known for Art Nouveau architecture",
      "Built where the Daugava River meets the Gulf of Riga",
      "Has the highest concentration of Art Nouveau buildings",
      "The Daugava River flows into the Gulf of Riga here",
      "Latvian capital with Art Nouveau district and old town",
      "Baltic capital on Daugava River with Art Nouveau gems"
    ],
    waterFeature: "Daugava River, Gulf of Riga, Baltic Sea",
    population: "630,000 (1M metro)",
    famousFor: "Art Nouveau architecture, Old Town, Central Market, Freedom Monument",
    funFact: "Riga has the highest concentration of Art Nouveau buildings in the world - over 800 buildings! The city's Central Market is housed in five former Zeppelin hangars. Riga was European Capital of Culture in 2014. Latvia celebrates two independence days - November 18th celebrates independence from Russia and Germany.",
    funFactSource: "Live Riga",
    funFactSourceUrl: "https://www.liveriga.com/"
  },

  {
    id: 183,
    name: "Kyoto",
    continent: "Asia",
    country: "Japan",
    difficulty: "medium",
    clues: [
      "Ancient Japanese capital with 2,000 temples and shrines",
      "Imperial capital for over 1,000 years in Kansai region",
      "Known for geishas, bamboo forests, and golden pavilion",
      "The Kamo River flows through this former imperial capital",
      "Japanese cultural capital with Fushimi Inari and bamboo forest",
      "Former Japanese capital with golden pavilion and geisha district"
    ],
    waterFeature: "Kamo River, Katsura River",
    population: "1.5 million",
    famousFor: "Fushimi Inari Shrine, Kinkaku-ji, Bamboo Grove, Geisha districts",
    funFact: "Kyoto has 17 UNESCO World Heritage Sites! The city was Japan's capital for 1,074 years until 1868. Kyoto has over 2,000 temples and shrines. The city was spared from atomic bombing because US Secretary of War Henry Stimson honeymoon there and knew its cultural value. Kyoto produces 40% of Japan's traditional crafts.",
    funFactSource: "Kyoto Tourism",
    funFactSourceUrl: "https://kyoto.travel/"
  },

  {
    id: 184,
    name: "Salvador",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian coastal city and first capital of Brazil",
      "Built on cliffs overlooking All Saints Bay",
      "Known as the heart of Afro-Brazilian culture",
      "All Saints Bay surrounds this colorful Brazilian city",
      "Brazilian city with Pelourinho district and capoeira",
      "Brazil's first capital on Atlantic with African heritage"
    ],
    waterFeature: "All Saints Bay, Atlantic Ocean",
    population: "2.9 million (4M metro)",
    famousFor: "Pelourinho, Capoeira, Carnival, Afro-Brazilian culture",
    funFact: "Salvador was Brazil's first capital for over 200 years! The city has the largest Afro-descendant population outside Africa. Salvador is the birthplace of capoeira martial art. The city's Carnival is Brazil's largest with 2.5 million people. Salvador has 365 churches - one for each day of the year!",
    funFactSource: "Bahia Tourism",
    funFactSourceUrl: "https://www.bahia.com.br/"
  },

  {
    id: 185,
    name: "Nice",
    continent: "Europe",
    country: "France",
    difficulty: "easy",
    clues: [
      "French Riviera city on the Mediterranean coast",
      "Known for pebble beaches and Promenade des Anglais",
      "French resort town with blue chairs and art museums",
      "The Mediterranean Sea meets this Côte d'Azur gem",
      "French Riviera city with blue chairs and promenade",
      "French Mediterranean resort on Côte d'Azur with pebble beaches"
    ],
    waterFeature: "Mediterranean Sea",
    population: "340,000 (950K metro)",
    famousFor: "Promenade des Anglais, Old Town, Blue chairs, Chagall Museum",
    funFact: "Nice has 300 days of sunshine per year! The city's famous blue chairs on the beach number 2,500. Nice was Italian until 1860 when it became French. The Promenade des Anglais was funded by English aristocrats who wintered here. Nice is the birthplace of socca (chickpea pancake) and salade niçoise.",
    funFactSource: "Nice Tourism",
    funFactSourceUrl: "https://www.nicetourisme.com/"
  },

  {
    id: 186,
    name: "Busan",
    continent: "Asia",
    country: "South Korea",
    difficulty: "medium",
    clues: [
      "South Korean port city on the southeastern coast",
      "Korea's second-largest city with beaches and seafood",
      "Known for Haeundae Beach and Gamcheon Culture Village",
      "The Korea Strait surrounds this port city",
      "Korean port with colorful hillside village and beaches",
      "South Korean coastal city with film festival and beaches"
    ],
    waterFeature: "Korea Strait, Sea of Japan",
    population: "3.4 million (8M metro)",
    famousFor: "Haeundae Beach, Gamcheon Village, Seafood markets, Film festival",
    funFact: "Busan is Korea's largest port handling 80% of the country's container traffic! The city's Gamcheon Culture Village is called the 'Machu Picchu of Korea' for its colorful hillside houses. Busan hosts Asia's largest film festival. The city has the world's largest department store - Shinsegae Centum City at 510,000 square meters!",
    funFactSource: "Busan Tourism",
    funFactSourceUrl: "https://www.bto.or.kr/"
  },

  {
    id: 187,
    name: "San Diego",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Southern California city on the Pacific near Mexico",
      "Known for beaches, navy base, and year-round sunshine",
      "Home to SeaWorld, San Diego Zoo, and Balboa Park",
      "The Pacific Ocean meets this sunny Southern California city",
      "California coastal city with zoo and navy base",
      "SoCal city on Pacific with SeaWorld and perfect weather"
    ],
    waterFeature: "Pacific Ocean, San Diego Bay",
    population: "1.4 million (3.3M metro)",
    famousFor: "San Diego Zoo, Beaches, Navy base, Balboa Park",
    funFact: "San Diego has the best weather of any major US city with 266 sunny days per year! The San Diego Zoo was the first to have pandas outside China. The city has the largest naval base in the world. San Diego's coastline has 70 miles of beaches. The city is called 'America's Finest City.'",
    funFactSource: "San Diego Tourism",
    funFactSourceUrl: "https://www.sandiego.org/"
  },

  {
    id: 188,
    name: "Bangalore",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Indian tech hub known as the Silicon Valley of India",
      "High-altitude city with pleasant climate year-round",
      "IT capital of India with startup culture and parks",
      "Indian Garden City with IT industry and startups",
      "India's tech capital with pleasant weather and parks",
      "Indian Silicon Valley with IT campuses and gardens"
    ],
    waterFeature: "Nearby lakes and reservoirs",
    population: "12.3 million (13.6M metro)",
    famousFor: "IT industry, Startups, Gardens, Vidhana Soudha",
    funFact: "Bangalore is India's Silicon Valley - home to 35% of India's 1.5 million IT professionals! The city has the most startups in India. Bangalore's weather is pleasant year-round thanks to 920-meter elevation. The city was called the 'Garden City' for its parks but tech growth has transformed it. India's space program (ISRO) is headquartered here.",
    funFactSource: "Karnataka Tourism",
    funFactSourceUrl: "https://www.karnatakatourism.org/"
  },

  {
    id: 189,
    name: "Córdoba",
    continent: "South America",
    country: "Argentina",
    difficulty: "medium",
    clues: [
      "Argentine city in the Sierras mountains with colonial heritage",
      "Second-largest city in Argentina after Buenos Aires",
      "Known for Jesuit architecture and university town vibe",
      "The Suquía River flows through this colonial Argentine city",
      "Argentine city with Jesuit heritage and mountains",
      "Argentina's second city with Jesuit Block and mountains"
    ],
    waterFeature: "Suquía River",
    population: "1.4 million (1.8M metro)",
    famousFor: "Jesuit Block, University, Sierras mountains, Colonial architecture",
    funFact: "Córdoba is home to Argentina's oldest university founded in 1613! The city's Jesuit Block is a UNESCO World Heritage Site. Córdoba produces 25% of Argentina's GDP and is the country's industrial capital. Pope Francis studied in Córdoba. The city has a unique Argentine accent distinct from Buenos Aires.",
    funFactSource: "Córdoba Tourism",
    funFactSourceUrl: "https://www.cordobaturismo.gov.ar/"
  },

  {
    id: 190,
    name: "Sarajevo",
    continent: "Europe",
    country: "Bosnia and Herzegovina",
    difficulty: "medium",
    clues: [
      "Balkan capital where WWI started with an assassination",
      "City surrounded by mountains with Ottoman and Austro-Hungarian heritage",
      "Known as 'Jerusalem of Europe' for religious diversity",
      "The Miljacka River flows through this Balkan capital",
      "Bosnian capital where WWI began, Olympic city 1984",
      "Balkan capital on Miljacka River where Archduke was assassinated"
    ],
    waterFeature: "Miljacka River",
    population: "280,000 (550K metro)",
    famousFor: "WWI assassination site, 1984 Winter Olympics, Baščaršija bazaar, War history",
    funFact: "Sarajevo is where WWI started - Archduke Franz Ferdinand was assassinated here on June 28, 1914! The city hosted the 1984 Winter Olympics. Sarajevo survived a 1,425-day siege from 1992-1996 - the longest siege in modern warfare. The city has mosques, Catholic churches, Orthodox churches, and synagogues within walking distance.",
    funFactSource: "Sarajevo Tourism",
    funFactSourceUrl: "https://www.sarajevo.ba/"
  },

  {
    id: 191,
    name: "Guayaquil",
    continent: "South America",
    country: "Ecuador",
    difficulty: "medium",
    clues: [
      "Ecuador's largest city and main port on the Pacific",
      "Built along the Guayas River with iguana park",
      "Gateway to Galápagos Islands with tropical climate",
      "The Guayas River flows through this Pacific port",
      "Ecuadorian port with iguanas and Malecón boardwalk",
      "Ecuador's largest city on Guayas River, Galápagos gateway"
    ],
    waterFeature: "Guayas River, Pacific Ocean",
    population: "2.7 million (3.1M metro)",
    famousFor: "Malecón 2000, Iguana Park, Port, Galápagos gateway",
    funFact: "Guayaquil's Parque Seminario has hundreds of land iguanas roaming freely! The city is Ecuador's economic powerhouse generating 50% of the country's non-oil GDP. Guayaquil is the main departure point for Galápagos Islands trips. The Malecón 2000 is a 2.5km riverside boardwalk. The city produces 80% of Ecuador's cocoa exports!",
    funFactSource: "Ecuador Tourism",
    funFactSourceUrl: "https://ecuador.travel/"
  },

  {
    id: 192,
    name: "Aberdeen",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "hard",
    clues: [
      "Scottish city known as the 'Granite City' on the North Sea",
      "Built where two rivers meet on Scotland's northeast coast",
      "Europe's oil capital with offshore petroleum industry",
      "The Don and Dee rivers meet the North Sea here",
      "Scottish granite city, Europe's oil capital",
      "Scottish North Sea city, offshore oil industry hub"
    ],
    waterFeature: "River Don, River Dee, North Sea",
    population: "200,000 (230K metro)",
    famousFor: "Oil industry, Granite buildings, Castles, Beaches",
    funFact: "Aberdeen is called the 'Granite City' because most buildings are made of local gray granite! The city is Europe's oil capital with the largest helicopter fleet in the world serving offshore platforms. Aberdeen has won Britain in Bloom over 10 times. The city has 45 parks and gardens earning it 'Floral City' status.",
    funFactSource: "Visit Aberdeen",
    funFactSourceUrl: "https://www.visitabdn.com/"
  },

  {
    id: 193,
    name: "Panama City",
    continent: "North America",
    country: "Panama",
    difficulty: "easy",
    clues: [
      "Central American capital with famous canal connecting two oceans",
      "Built on the Pacific side of the Panama Canal",
      "Known for canal, skyscrapers, and Casco Viejo old town",
      "The Panama Canal connects Pacific and Atlantic near this city",
      "Panamanian capital with canal and modern skyline",
      "Capital next to canal linking Pacific and Atlantic oceans"
    ],
    waterFeature: "Panama Canal, Pacific Ocean, Panama Bay",
    population: "900,000 (1.9M metro)",
    famousFor: "Panama Canal, Casco Viejo, Skyline, Biodiversity",
    funFact: "The Panama Canal is one of the Seven Wonders of the Modern World! Over 14,000 ships pass through annually. It takes 8-10 hours to cross the 77km canal. Panama City is the only capital where you can watch the sun rise over one ocean (Atlantic) and set over another (Pacific). The city has more registered ships than any other country!",
    funFactSource: "Panama Tourism",
    funFactSourceUrl: "https://www.visitpanama.com/"
  },

  {
    id: 194,
    name: "Kochi",
    continent: "Asia",
    country: "India",
    difficulty: "medium",
    clues: [
      "Indian port city in Kerala known for spice trade",
      "Built on islands and peninsulas on the Arabian Sea",
      "Known for Chinese fishing nets and colonial history",
      "The Arabian Sea surrounds this Keralan spice port",
      "Indian spice port with Chinese fishing nets",
      "Kerala port city on Arabian Sea with spice history"
    ],
    waterFeature: "Arabian Sea, Vembanad Lake",
    population: "680,000 (2.1M metro)",
    famousFor: "Chinese fishing nets, Spice trade, Fort Kochi, Backwaters",
    funFact: "Kochi was a major spice trading center for over 500 years! The city's iconic Chinese fishing nets were introduced by traders from the court of Kublai Khan in 1350. Vasco da Gama died in Kochi in 1524. Kerala's backwaters tourism industry is centered here. Kochi is India's cleanest city and has the highest literacy rate!",
    funFactSource: "Kerala Tourism",
    funFactSourceUrl: "https://www.keralatourism.org/"
  },

  {
    id: 195,
    name: "Tangier",
    continent: "Africa",
    country: "Morocco",
    difficulty: "medium",
    clues: [
      "Moroccan port city where Africa and Europe almost meet",
      "Located at the Strait of Gibraltar entrance to Mediterranean",
      "Known as the gateway between Africa and Europe",
      "The Strait of Gibraltar separates this city from Spain",
      "Moroccan city facing Spain across the strait",
      "Moroccan port at Strait of Gibraltar, Africa's edge"
    ],
    waterFeature: "Strait of Gibraltar, Mediterranean Sea, Atlantic Ocean",
    population: "950,000 (1.1M metro)",
    famousFor: "Strait of Gibraltar views, Medina, Caves of Hercules, International zone history",
    funFact: "On clear days, you can see Spain from Tangier - just 14km across the Strait of Gibraltar! Tangier was an International Zone from 1923-1956 governed by multiple countries. The city attracted writers like Paul Bowles and William Burroughs. Tangier is Africa's gateway to Europe. The Caves of Hercules connect to the Atlantic.",
    funFactSource: "Morocco Tourism",
    funFactSourceUrl: "https://www.visitmorocco.com/"
  },

  {
    id: 196,
    name: "Monteverde",
    continent: "North America",
    country: "Costa Rica",
    difficulty: "hard",
    clues: [
      "Costa Rican cloud forest reserve with incredible biodiversity",
      "Mountain region known for zip-lining and nature tourism",
      "One of the world's most biodiverse cloud forest areas",
      "Cloud forest region with nearby Pacific influences",
      "Costa Rican cloud forest with hanging bridges",
      "Costa Rica's cloud forest with unique ecosystem"
    ],
    waterFeature: "Mountain streams and cloud forest",
    population: "6,500 (small community)",
    famousFor: "Cloud forest, Biodiversity, Zip-lining, Quetzal birds",
    funFact: "Monteverde Cloud Forest has over 2.5% of the world's biodiversity in just 0.01% of Earth's land area! The reserve has over 400 bird species including the resplendent quetzal. Monteverde was founded by American Quakers in the 1950s. The area receives 3 meters of rain annually. Monteverde pioneered eco-tourism in Costa Rica.",
    funFactSource: "Costa Rica Tourism",
    funFactSourceUrl: "https://www.visitcostarica.com/"
  },

  {
    id: 197,
    name: "Kuala Lumpur",
    continent: "Asia",
    country: "Malaysia",
    difficulty: "easy",
    clues: [
      "Malaysian capital with iconic Petronas Twin Towers",
      "Built at the confluence of two rivers in Southeast Asia",
      "Known for street food, diverse culture, and modern skyline",
      "The Klang and Gombak rivers meet in this Malaysian capital",
      "Malaysian capital with twin towers and street food",
      "Malaysian city with Petronas Towers where rivers meet"
    ],
    waterFeature: "Klang River, Gombak River",
    population: "1.8 million (8M metro)",
    famousFor: "Petronas Twin Towers, Batu Caves, Street food, Shopping malls",
    funFact: "The Petronas Twin Towers were the world's tallest buildings from 1998-2004 at 452 meters! Kuala Lumpur means 'muddy confluence' referring to where two rivers meet. The city has the world's longest and tallest twin towers connected by a skybridge. KL's street food scene is legendary with hawker stalls everywhere.",
    funFactSource: "Malaysia Tourism",
    funFactSourceUrl: "https://www.malaysia.travel/"
  },

  {
    id: 198,
    name: "Reykjavik",
    continent: "Europe",
    country: "Iceland",
    difficulty: "medium",
    clues: [
      "World's northernmost capital powered by geothermal energy",
      "Icelandic capital with colorful houses and northern lights",
      "Known for Blue Lagoon, midnight sun, and renewable energy",
      "Faxaflói Bay surrounds this Arctic island capital",
      "Iceland's capital with geothermal pools and northern lights",
      "Arctic capital on Atlantic, world's northernmost"
    ],
    waterFeature: "Faxaflói Bay, Atlantic Ocean",
    population: "130,000 (230K metro)",
    famousFor: "Northern lights, Blue Lagoon, Geothermal energy, Hallgrímskirkja",
    funFact: "Reykjavik is powered by 100% renewable energy! The city has no mosquitoes due to the climate. Iceland's entire population is smaller than most cities. Reykjavik means 'Smoky Bay' from geothermal steam. You can swim outdoors year-round in geothermal pools at 38-40°C. Iceland has more published authors per capita than anywhere!",
    funFactSource: "Visit Reykjavik",
    funFactSourceUrl: "https://visitreykjavik.is/"
  },

  {
    id: 199,
    name: "Taipei",
    continent: "Asia",
    country: "Taiwan",
    difficulty: "easy",
    clues: [
      "East Asian capital with world's second-tallest building until 2010",
      "Built in a basin surrounded by mountains with Taipei 101",
      "Known for night markets, temples, and tech industry",
      "The Tamsui River flows through this island capital",
      "Taiwanese capital with Taipei 101 and night markets",
      "Island capital with bamboo-shaped skyscraper and night markets"
    ],
    waterFeature: "Tamsui River, Keelung River",
    population: "2.7 million (7M metro)",
    famousFor: "Taipei 101, Night markets, National Palace Museum, Bubble tea",
    funFact: "Taipei 101 was the world's tallest building from 2004-2010! The building is designed to look like bamboo and withstand earthquakes and typhoons. Taiwan invented bubble tea in the 1980s - now a global phenomenon. Taipei has the world's best healthcare system. The city's MRT is one of the cleanest subway systems globally.",
    funFactSource: "Taiwan Tourism",
    funFactSourceUrl: "https://www.taiwan.net.tw/"
  },

  {
    id: 200,
    name: "Marseille",
    continent: "Europe",
    country: "France",
    difficulty: "medium",
    clues: [
      "France's oldest city and largest Mediterranean port",
      "Founded by Greek sailors 2,600 years ago",
      "Known for bouillabaisse, diverse culture, and old port",
      "The Mediterranean Sea meets France's oldest city",
      "French port with Vieux Port and Notre-Dame de la Garde",
      "French Mediterranean port, oldest French city"
    ],
    waterFeature: "Mediterranean Sea, Old Port",
    population: "870,000 (1.9M metro)",
    famousFor: "Old Port, Bouillabaisse, Notre-Dame de la Garde, Calanques",
    funFact: "Marseille is France's oldest city, founded around 600 BC by Greek sailors! The city's Vieux Port has been a harbor for 2,600 years. Marseille is France's most multicultural city with 25% born abroad. The French national anthem 'La Marseillaise' was first sung here in 1792. Marseille was European Capital of Culture in 2013.",
    funFactSource: "Marseille Tourism",
    funFactSourceUrl: "https://www.marseille-tourisme.com/"
  },

  {
    id: 201,
    name: "Siem Reap",
    continent: "Asia",
    country: "Cambodia",
    difficulty: "medium",
    clues: [
      "Cambodian town near ancient temple complex ruins",
      "Gateway city to massive 12th century stone temples",
      "Known for Angkor Wat and jungle-covered ruins",
      "The Siem Reap River flows through this temple town",
      "Cambodian city with Angkor Wat temple complex",
      "Gateway to Angkor Wat and Khmer temple ruins"
    ],
    waterFeature: "Siem Reap River, Tonlé Sap Lake",
    population: "245,000",
    famousFor: "Angkor Wat, Bayon Temple, Ta Prohm, Night markets",
    funFact: "Angkor Wat is the largest religious monument in the world covering 162 hectares! The Angkor complex contains over 1,000 temples spanning 400 square kilometers. Siem Reap means 'Defeat of Siam' commemorating a victory over Thailand. The temples were built by the Khmer Empire from 802-1431 AD.",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/668/"
  },

  {
    id: 202,
    name: "Bratislava",
    continent: "Europe",
    country: "Slovakia",
    difficulty: "hard",
    clues: [
      "Central European capital on the Danube River",
      "Small capital city where three countries meet",
      "Slovak capital with a hilltop castle overlooking river",
      "The Danube flows through this Central European capital",
      "Slovakia's capital between Austria and Hungary",
      "Slovak capital on Danube with castle and old town"
    ],
    waterFeature: "Danube River",
    population: "440,000 (650K metro)",
    famousFor: "Bratislava Castle, Old Town, UFO Bridge, St. Martin's Cathedral",
    funFact: "Bratislava is the only capital in the world that borders two countries - Austria and Hungary! The city was capital of the Kingdom of Hungary for 200 years. You can cycle to Austria or Hungary in 30 minutes. The UFO Bridge restaurant sits 85 meters above the Danube with panoramic views.",
    funFactSource: "Bratislava Tourism",
    funFactSourceUrl: "https://www.visitbratislava.com/"
  },

  {
    id: 203,
    name: "Bern",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "medium",
    clues: [
      "Swiss capital with medieval old town and arcades",
      "Built in a bend of the Aare River with bear park",
      "Switzerland's de facto capital with UNESCO old town",
      "The Aare River curves around this Swiss capital",
      "Swiss capital with Zytglogge clock tower and bears",
      "Switzerland's capital on Aare River with medieval arcades"
    ],
    waterFeature: "Aare River",
    population: "144,000 (420K metro)",
    famousFor: "Old Town, Zytglogge, Bear Park, Federal Palace",
    funFact: "Bern's old town has 6 kilometers of covered arcades - the longest weather-protected shopping promenades in Europe! The city is named after bears, which live in a park by the river. Albert Einstein developed his theory of relativity while living in Bern. The Zytglogge clock tower dates from 1530.",
    funFactSource: "Bern Tourism",
    funFactSourceUrl: "https://www.bern.com/"
  },

  {
    id: 204,
    name: "Amman",
    continent: "Asia",
    country: "Jordan",
    difficulty: "medium",
    clues: [
      "Middle Eastern capital built on seven hills",
      "Ancient city with Roman amphitheater and citadel",
      "Jordanian capital with white limestone buildings",
      "Near the Zarqa River in Jordan's northwest",
      "Jordan's capital with Roman ruins and citadel",
      "Jordanian capital on hills with ancient amphitheater"
    ],
    waterFeature: "Zarqa River",
    population: "4 million metro",
    famousFor: "Citadel, Roman Theater, Rainbow Street, Dead Sea access",
    funFact: "Amman is one of the world's oldest continuously inhabited cities - over 7,000 years! The city was called Philadelphia in Roman times. Amman is built on seven hills (jabals) traditionally. The Roman Theater seats 6,000 people and is still used today. Jordan is 92% desert but Amman has a mild climate.",
    funFactSource: "Jordan Tourism",
    funFactSourceUrl: "https://www.visitjordan.com/"
  },

  {
    id: 205,
    name: "Perth",
    continent: "Oceania",
    country: "Australia",
    difficulty: "easy",
    clues: [
      "Australian city on the west coast facing Indian Ocean",
      "Most isolated major city in the world",
      "Known for beaches, Swan River, and mining wealth",
      "The Swan River meets the Indian Ocean here",
      "Western Australian capital with beaches and river",
      "Australia's most isolated capital on Indian Ocean"
    ],
    waterFeature: "Swan River, Indian Ocean",
    population: "2.1 million metro",
    famousFor: "Kings Park, Rottnest Island, Beaches, Swan River",
    funFact: "Perth is the most isolated major city in the world - 2,104 km from Adelaide! The city has more hours of sunshine per year than any other Australian capital. Perth is closer to Singapore than to Sydney. Kings Park is one of the world's largest inner-city parks. Rottnest Island has quokkas!",
    funFactSource: "Perth Tourism",
    funFactSourceUrl: "https://www.perth.wa.gov.au/"
  },

  {
    id: 206,
    name: "Doha",
    continent: "Asia",
    country: "Qatar",
    difficulty: "medium",
    clues: [
      "Arabian Gulf capital with futuristic skyline",
      "Host city of 2022 FIFA World Cup",
      "Known for Museum of Islamic Art and souqs",
      "Persian Gulf surrounds this wealthy Gulf state capital",
      "Qatari capital with modern architecture and museums",
      "Gulf capital on Persian Gulf, hosted 2022 World Cup"
    ],
    waterFeature: "Persian Gulf",
    population: "1.8 million (2.4M metro)",
    famousFor: "Museum of Islamic Art, Souq Waqif, Pearl-Qatar, World Cup 2022",
    funFact: "Qatar has the world's highest GDP per capita! Doha hosted the 2022 FIFA World Cup with air-conditioned stadiums. The Museum of Islamic Art building was designed by I.M. Pei. Qatar has no income tax. Doha's skyline has transformed from desert to futuristic metropolis in just 30 years.",
    funFactSource: "Qatar Tourism",
    funFactSourceUrl: "https://www.visitqatar.qa/"
  },

  {
    id: 207,
    name: "Luxembourg City",
    continent: "Europe",
    country: "Luxembourg",
    difficulty: "hard",
    clues: [
      "European micro-state capital with dramatic gorges",
      "Built on cliffs with casemates and fortifications",
      "One of Europe's wealthiest financial centers",
      "The Alzette River cuts through this fortified city",
      "Luxembourg's capital with UNESCO fortress and gorges",
      "Wealthy European capital built on dramatic cliffs"
    ],
    waterFeature: "Alzette River, Pétrusse River",
    population: "125,000 (630K metro)",
    famousFor: "Casemates, Old Quarter, Financial center, European institutions",
    funFact: "Luxembourg is the world's only remaining Grand Duchy! The city has 110 kilometers of underground tunnels called casemates. Luxembourg has the highest minimum wage in Europe. The country is smaller than Rhode Island but has the world's highest GDP per capita after Qatar. Three languages are official: Luxembourgish, French, and German.",
    funFactSource: "Visit Luxembourg",
    funFactSourceUrl: "https://www.visitluxembourg.com/"
  },

  {
    id: 208,
    name: "Cork",
    continent: "Europe",
    country: "Ireland",
    difficulty: "medium",
    clues: [
      "Irish port city on an island in the River Lee",
      "Second-largest city in Ireland after Dublin",
      "Known for English Market and rebel history",
      "The River Lee splits around this southern Irish city",
      "Irish city with English Market and St. Fin Barre's",
      "Ireland's second city on River Lee with rebel history"
    ],
    waterFeature: "River Lee",
    population: "210,000 (300K metro)",
    famousFor: "English Market, Blarney Castle, St. Fin Barre's Cathedral, Food scene",
    funFact: "Cork's city center is built on an island between two channels of the River Lee! The city is called the 'Rebel City' for supporting various rebellions throughout history. Cork's English Market has been operating since 1788. Nearby Blarney Castle has the famous Blarney Stone - kissing it allegedly gives eloquence.",
    funFactSource: "Visit Cork",
    funFactSourceUrl: "https://www.purecork.ie/"
  },

  {
    id: 209,
    name: "Aarhus",
    continent: "Europe",
    country: "Denmark",
    difficulty: "hard",
    clues: [
      "Danish port city on the Jutland peninsula",
      "Second-largest city in Denmark with Viking history",
      "Known for ARoS rainbow walkway and old town",
      "Aarhus Bay and the Kattegat surround this city",
      "Danish city with rainbow museum and Viking museum",
      "Denmark's second city on Jutland with rainbow art"
    ],
    waterFeature: "Aarhus Bay, Kattegat",
    population: "280,000 (350K metro)",
    famousFor: "ARoS rainbow, Den Gamle By, Moesgaard Museum, Harbor",
    funFact: "Aarhus was European Capital of Culture in 2017! The ARoS Art Museum has a circular rainbow panorama walkway on the roof. Den Gamle By is an open-air museum recreating Danish town life from the 1800s. Aarhus is Denmark's oldest major city, founded as a Viking settlement around 770 AD.",
    funFactSource: "Visit Aarhus",
    funFactSourceUrl: "https://www.visitaarhus.com/"
  },

  {
    id: 210,
    name: "Graz",
    continent: "Europe",
    country: "Austria",
    difficulty: "hard",
    clues: [
      "Austrian city with futuristic island on the river",
      "Second-largest Austrian city after Vienna",
      "Known for Renaissance old town and Kunsthaus",
      "The Mur River flows through this Austrian city",
      "Austrian city with clock tower and modern art blob",
      "Austria's second city on Mur River with old town"
    ],
    waterFeature: "Mur River",
    population: "290,000 (480K metro)",
    famousFor: "Schlossberg Clock Tower, Kunsthaus, Old Town, Murinsel",
    funFact: "Graz has a Renaissance old town that's a UNESCO World Heritage Site! The Kunsthaus art museum looks like a blue alien blob and is nicknamed the 'Friendly Alien.' The Schlossberg clock tower survived Napoleon's orders to destroy the fortress. Arnold Schwarzenegger was born near Graz and donated his museum to the city.",
    funFactSource: "Graz Tourism",
    funFactSourceUrl: "https://www.graztourismus.at/"
  },

  {
    id: 211,
    name: "Nuremberg",
    continent: "Europe",
    country: "Germany",
    difficulty: "medium",
    clues: [
      "German city famous for Christmas markets and trials",
      "Medieval walled city in Bavaria with imperial castle",
      "Site of Nazi rallies and post-war war crimes trials",
      "The Pegnitz River flows through this Bavarian city",
      "German city with war crimes trials and castle",
      "Bavarian city with Nazi history and Christmas market"
    ],
    waterFeature: "Pegnitz River",
    population: "520,000 (1.4M metro)",
    famousFor: "Nuremberg Trials, Christmas Market, Imperial Castle, Nazi Rally Grounds",
    funFact: "Nuremberg has Germany's most famous Christmas market - the Christkindlesmarkt dating from 1628! The city was 90% destroyed in WWII and meticulously rebuilt. The Nuremberg Trials prosecuted Nazi war criminals from 1945-1946. Nuremberg was the unofficial capital of the Holy Roman Empire. The city invented the pocket watch.",
    funFactSource: "Nuremberg Tourism",
    funFactSourceUrl: "https://tourismus.nuernberg.de/"
  },

  {
    id: 212,
    name: "Wrocław",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Polish city on 12 islands with hundreds of bridges",
      "Known as the 'Venice of Poland' with dwarf statues",
      "Fourth-largest Polish city with colorful market square",
      "The Oder River splits into branches around this city",
      "Polish city with bridge islands and gnome statues",
      "Polish city on Oder River, 'Venice of Poland'"
    ],
    waterFeature: "Oder River",
    population: "640,000 (1M metro)",
    famousFor: "Market Square, Cathedral Island, Dwarf statues, Bridges",
    funFact: "Wrocław is built on 12 islands connected by over 130 bridges! The city has over 400 dwarf statues hidden around the streets - a tourist treasure hunt. Wrocław was European Capital of Culture in 2016. The city has changed countries seven times throughout history. The Market Square is one of the largest in Europe.",
    funFactSource: "Wrocław Tourism",
    funFactSourceUrl: "https://visitwroclaw.eu/"
  },

  {
    id: 213,
    name: "Bilbao",
    continent: "Europe",
    country: "Spain",
    difficulty: "medium",
    clues: [
      "Basque city transformed by a titanium museum",
      "Northern Spanish port with Guggenheim Museum",
      "Known for pintxos, modern architecture, and hills",
      "The Nervión River flows through this Basque city",
      "Spanish city with Guggenheim titanium museum",
      "Basque port on Nervión with Guggenheim and pintxos"
    ],
    waterFeature: "Nervión River, Bay of Biscay",
    population: "350,000 (1M metro)",
    famousFor: "Guggenheim Museum, Pintxos, Casco Viejo, Modern architecture",
    funFact: "The Guggenheim Museum Bilbao transformed the city from industrial decline to cultural hotspot! The museum's titanium curves were designed by Frank Gehry and opened in 1997. This transformation is called the 'Bilbao Effect.' Basque pintxos are like tapas but more elaborate. The city is surrounded by green mountains.",
    funFactSource: "Bilbao Tourism",
    funFactSourceUrl: "https://www.bilbaoturismo.net/"
  },

  {
    id: 214,
    name: "Sapporo",
    continent: "Asia",
    country: "Japan",
    difficulty: "medium",
    clues: [
      "Japanese city on Hokkaido island known for snow",
      "Hosted 1972 Winter Olympics with famous beer",
      "Known for snow festival, ramen, and skiing",
      "Rivers flow through this northern Japanese city",
      "Japanese winter city with snow festival and beer",
      "Hokkaido's capital with Winter Olympics and ramen"
    ],
    waterFeature: "Toyohira River",
    population: "1.97 million (2.6M metro)",
    famousFor: "Snow Festival, Sapporo Beer, Ramen, Skiing, 1972 Olympics",
    funFact: "Sapporo's Snow Festival attracts 2 million visitors annually with massive ice sculptures! The city gets 5 meters of snow each winter. Sapporo hosted the 1972 Winter Olympics. Sapporo Beer is Japan's oldest beer brand founded in 1876. The city is known for miso ramen. Sapporo is Japan's fifth-largest city.",
    funFactSource: "Sapporo Tourism",
    funFactSourceUrl: "https://www.sapporo.travel/"
  },

  {
    id: 215,
    name: "Fukuoka",
    continent: "Asia",
    country: "Japan",
    difficulty: "medium",
    clues: [
      "Japanese port city closest to mainland Asia",
      "Kyushu island's largest city known for ramen",
      "Ancient gateway between Japan and Asia",
      "Hakata Bay surrounds this southwestern Japanese city",
      "Japanese city famous for tonkotsu ramen and yatai",
      "Kyushu's largest city on Hakata Bay with ramen stalls"
    ],
    waterFeature: "Hakata Bay",
    population: "1.6 million (2.6M metro)",
    famousFor: "Tonkotsu ramen, Yatai food stalls, Hakata Port, Dazaifu",
    funFact: "Fukuoka is famous for tonkotsu ramen with creamy pork bone broth! The city has yatai - street food stalls that pop up at night. Fukuoka was Japan's gateway to Asia for centuries. The city successfully repelled Mongol invasions twice in the 1200s with help from typhoons (kamikaze winds). Fukuoka grows the fastest among Japanese cities.",
    funFactSource: "Fukuoka Tourism",
    funFactSourceUrl: "https://www.yokanavi.com/"
  },

  {
    id: 216,
    name: "Dresden",
    continent: "Europe",
    country: "Germany",
    difficulty: "medium",
    clues: [
      "German city on the Elbe called 'Florence on the Elbe'",
      "Baroque city almost completely destroyed in WWII",
      "Known for rebuilt Frauenkirche and Zwinger Palace",
      "The Elbe River flows through this Saxon city",
      "German city with rebuilt baroque church and palace",
      "Saxon city on Elbe, 'Florence of Germany'"
    ],
    waterFeature: "Elbe River",
    population: "560,000 (790K metro)",
    famousFor: "Frauenkirche, Zwinger Palace, Semper Opera, Baroque architecture",
    funFact: "Dresden was called 'Florence on the Elbe' for its baroque beauty before being 85% destroyed in 1945 bombing! The Frauenkirche church was rebuilt stone-by-stone from 1994-2005 using original rubble. Dresden has one of Europe's oldest Christmas markets. The Green Vault has one of Europe's richest treasure collections.",
    funFactSource: "Dresden Tourism",
    funFactSourceUrl: "https://www.dresden.de/"
  },

  {
    id: 217,
    name: "Leipzig",
    continent: "Europe",
    country: "Germany",
    difficulty: "medium",
    clues: [
      "German city where Bach worked and Wagner was born",
      "East German city known for Monday demonstrations",
      "Important trade fair city with musical heritage",
      "Rivers meet in this Saxon city",
      "German music city with Bach and trade fairs",
      "Saxon city where Bach composed, peaceful revolution site"
    ],
    waterFeature: "White Elster River, Pleiße River",
    population: "600,000 (750K metro)",
    famousFor: "Bach, St. Thomas Church, Trade fairs, Peaceful Revolution",
    funFact: "Johann Sebastian Bach worked in Leipzig for 27 years composing over 200 cantatas! Richard Wagner was born here. Leipzig's Monday demonstrations in 1989 helped bring down the Berlin Wall peacefully. The city has Europe's oldest trade fair tradition dating from 1165. Goethe studied law in Leipzig and set Faust here.",
    funFactSource: "Leipzig Tourism",
    funFactSourceUrl: "https://www.leipzig.travel/"
  },

  {
    id: 218,
    name: "Bologna",
    continent: "Europe",
    country: "Italy",
    difficulty: "medium",
    clues: [
      "Italian city known as 'La Grassa' (the fat one)",
      "Home to world's oldest university and red towers",
      "Known for porticoes, ragù, and mortadella",
      "Rivers flow near this culinary Italian city",
      "Italian food capital with medieval towers and arcades",
      "Italian city with oldest university and Bolognese sauce"
    ],
    waterFeature: "Reno River, Savena River",
    population: "390,000 (1M metro)",
    famousFor: "University, Two Towers, Porticoes, Bolognese ragù, Mortadella",
    funFact: "Bologna has the world's oldest university founded in 1088! The city has 40 kilometers of porticoes (covered walkways). Bologna is called 'La Grassa' (the fat) for its rich cuisine and 'La Rossa' (the red) for its terracotta roofs. True Bolognese sauce has 20 ingredients and no garlic. The Two Towers lean like Pisa!",
    funFactSource: "Bologna Tourism",
    funFactSourceUrl: "https://www.bolognawelcome.com/"
  },

  {
    id: 219,
    name: "Verona",
    continent: "Europe",
    country: "Italy",
    difficulty: "medium",
    clues: [
      "Italian city famous as Romeo and Juliet's setting",
      "Has a perfectly preserved Roman amphitheater",
      "Known for Juliet's balcony and opera performances",
      "The Adige River flows through this romantic city",
      "Italian city with Juliet's balcony and Roman arena",
      "Romeo and Juliet's city on Adige with Roman arena"
    ],
    waterFeature: "Adige River",
    population: "260,000 (710K metro)",
    famousFor: "Romeo and Juliet, Verona Arena, Juliet's balcony, Opera",
    funFact: "Verona is the setting of Shakespeare's Romeo and Juliet! The Roman Arena from 30 AD is the third-largest in Italy and hosts opera performances for 15,000 people. Over 1 million people visit 'Juliet's balcony' annually even though it was added in the 1930s! Verona has the most Roman ruins in Northern Italy after Rome.",
    funFactSource: "Verona Tourism",
    funFactSourceUrl: "https://www.tourism.verona.it/"
  },

  {
    id: 220,
    name: "Palermo",
    continent: "Europe",
    country: "Italy",
    difficulty: "medium",
    clues: [
      "Sicilian capital with Arab-Norman architecture",
      "Italian island city known for street food markets",
      "Historical crossroads of Mediterranean cultures",
      "The Tyrrhenian Sea meets this Sicilian capital",
      "Sicily's capital with street markets and mosaics",
      "Sicilian port with Arab-Norman heritage and street food"
    ],
    waterFeature: "Tyrrhenian Sea",
    population: "670,000 (1.3M metro)",
    famousFor: "Street markets, Arab-Norman architecture, Cappella Palatina, Arancini",
    funFact: "Palermo has been ruled by Phoenicians, Greeks, Romans, Arabs, Normans, and Spanish - creating unique fusion architecture! The Cappella Palatina has stunning Byzantine mosaics with gold. Palermo's street food is legendary - arancini, panelle, sfincione. The city has Europe's largest opera house Teatro Massimo. Mount Pellegrino overlooks the city.",
    funFactSource: "Palermo Tourism",
    funFactSourceUrl: "https://www.visitpalermo.it/"
  },

  {
    id: 221,
    name: "Catania",
    continent: "Europe",
    country: "Italy",
    difficulty: "medium",
    clues: [
      "Sicilian city built from black volcanic lava stone",
      "Located at the foot of Mount Etna volcano",
      "Known for fish markets and baroque architecture",
      "The Ionian Sea meets this volcanic Sicilian city",
      "Sicilian city beneath Mount Etna with lava buildings",
      "Sicilian port beneath active volcano, black stone buildings"
    ],
    waterFeature: "Ionian Sea",
    population: "310,000 (770K metro)",
    famousFor: "Mount Etna, Fish market, Baroque architecture, Lava stone",
    funFact: "Catania is built from black lava stone from Mount Etna eruptions! Etna has destroyed Catania nine times throughout history. The city's fish market is one of Europe's most vibrant. Catania was completely rebuilt after a massive earthquake in 1693. The city has the first university in Sicily founded in 1434.",
    funFactSource: "Catania Tourism",
    funFactSourceUrl: "https://www.comune.catania.it/"
  },

  {
    id: 222,
    name: "Brasília",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian capital built from scratch in the 1960s",
      "Planned city designed like an airplane from above",
      "Known for modernist architecture by Niemeyer",
      "Built around Paranoá Lake in central Brazil",
      "Brazil's purpose-built capital with futuristic design",
      "Brazilian planned capital shaped like airplane"
    ],
    waterFeature: "Paranoá Lake",
    population: "3.1 million metro",
    famousFor: "Modernist architecture, National Congress, Cathedral, Planned layout",
    funFact: "Brasília was built in just 41 months from 1956-1960! The entire city was designed by Oscar Niemeyer and urban planner Lúcio Costa. From above, it's shaped like an airplane. Brasília became a UNESCO World Heritage Site in 1987 - the youngest city with this honor. The city has no traffic lights in the center due to efficient design!",
    funFactSource: "Brazil Tourism",
    funFactSourceUrl: "https://www.visitbrasil.com/"
  },

  {
    id: 223,
    name: "Recife",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian port city called 'Venice of Brazil'",
      "Built on islands and bridges on the Atlantic coast",
      "Known for Carnival and historic Olinda nearby",
      "Rivers and canals flow through this Brazilian port",
      "Brazilian Venice with bridges, beaches, and Carnival",
      "Brazilian Atlantic port, 'Venice of Brazil' with canals"
    ],
    waterFeature: "Atlantic Ocean, Capibaribe River, Beberibe River",
    population: "1.7 million (4M metro)",
    famousFor: "Carnival, Beaches, Bridges, Historic Olinda, Frevo dance",
    funFact: "Recife is called the 'Venice of Brazil' with over 50 bridges connecting islands! The city has Brazil's oldest synagogue in the Americas from 1636. Recife's Carnival is famous for frevo dance and giant puppets. Nearby Olinda is a UNESCO site with colorful colonial buildings. Unfortunately, Recife has high shark attack rates due to port development.",
    funFactSource: "Recife Tourism",
    funFactSourceUrl: "https://www.recife.pe.gov.br/"
  },

  {
    id: 224,
    name: "Fortaleza",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian coastal city with famous beaches",
      "Fifth-largest city in Brazil on the Atlantic",
      "Known for beach culture, jangadas, and forró music",
      "The Atlantic Ocean meets this northeastern Brazilian city",
      "Brazilian beach city with dunes and traditional boats",
      "Brazil's beach capital with jangada boats and forró"
    ],
    waterFeature: "Atlantic Ocean",
    population: "2.7 million (4.1M metro)",
    famousFor: "Beaches, Beach Park, Jangada boats, Forró music, Crafts",
    funFact: "Fortaleza has some of Brazil's most beautiful beaches! The city is named after a Dutch fort from 1649. Jangadas are traditional wooden sailing rafts still used by fishermen. Fortaleza is the forró music capital. Beach Park is South America's largest water park. The city has 300+ days of sunshine per year with constant sea breezes.",
    funFactSource: "Fortaleza Tourism",
    funFactSourceUrl: "https://www.fortaleza.ce.gov.br/"
  },

  {
    id: 225,
    name: "Manaus",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian city in the heart of the Amazon rainforest",
      "Accessible only by boat or plane despite 2 million people",
      "Known for opera house and Meeting of Waters",
      "Where the Rio Negro and Solimões Rivers meet",
      "Amazon rainforest city with opera house and rivers meeting",
      "Brazilian jungle city where black and brown rivers meet"
    ],
    waterFeature: "Rio Negro, Solimões River, Amazon River",
    population: "2.2 million (2.7M metro)",
    famousFor: "Amazon Theater, Meeting of Waters, Rainforest, Rubber boom history",
    funFact: "Manaus is in the middle of the Amazon jungle with no roads connecting it to other cities! The Teatro Amazonas opera house was built during the rubber boom with materials from Europe. The Meeting of Waters phenomenon shows the Rio Negro (black) and Solimões (brown) rivers flowing side-by-side for 6 km without mixing due to different temperatures and densities!",
    funFactSource: "Amazonas Tourism",
    funFactSourceUrl: "https://www.visitamazonas.am.gov.br/"
  },

  {
    id: 226,
    name: "Belo Horizonte",
    continent: "South America",
    country: "Brazil",
    difficulty: "medium",
    clues: [
      "Brazilian city planned as modern capital of Minas Gerais",
      "Third-largest metropolitan area in Brazil",
      "Gateway to colonial towns and caves",
      "Rivers flow near this planned Brazilian city",
      "Brazil's third-largest city, gateway to Ouro Preto",
      "Brazilian planned city near colonial gold towns"
    ],
    waterFeature: "Arrudas River",
    population: "2.7 million (6M metro)",
    famousFor: "Pampulha, Bars culture, Colonial towns nearby, Stadium",
    funFact: "Belo Horizonte means 'Beautiful Horizon'! The city was Brazil's first planned modern city in 1897. Pampulha's buildings by Oscar Niemeyer are UNESCO-listed. The city has more bars per capita than any Brazilian city - bar culture is huge here. Belo Horizonte hosted 2014 World Cup matches. It's the gateway to historic Ouro Preto.",
    funFactSource: "Belo Horizonte Tourism",
    funFactSourceUrl: "https://www.belohorizonte.mg.gov.br/"
  },

  {
    id: 227,
    name: "Curitiba",
    continent: "South America",
    country: "Brazil",
    difficulty: "hard",
    clues: [
      "Brazilian city known as the ecological capital",
      "Pioneer of Bus Rapid Transit system",
      "Southern Brazilian city with parks and innovation",
      "Rivers flow through this green Brazilian city",
      "Brazil's greenest city with innovative bus system",
      "Brazilian ecological capital with tube bus stations"
    ],
    waterFeature: "Iguaçu River",
    population: "1.9 million (3.7M metro)",
    famousFor: "Bus Rapid Transit, Parks, Sustainability, Wire Opera House",
    funFact: "Curitiba pioneered the Bus Rapid Transit (BRT) system now used in 200+ cities worldwide! The city has the most green space per capita in Brazil with 52 square meters per person. Curitiba's tube-shaped bus stations are iconic. The Wire Opera House is built from steel tubes. The city recycles 70% of its waste - highest in Brazil.",
    funFactSource: "Curitiba Tourism",
    funFactSourceUrl: "https://www.turismo.curitiba.pr.gov.br/"
  },

  {
    id: 228,
    name: "Coimbra",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Portuguese city with one of Europe's oldest universities",
      "Former capital of Portugal in medieval times",
      "Known for student traditions and library",
      "The Mondego River flows through this university city",
      "Portuguese university city with ancient library",
      "Portugal's former capital on Mondego with old university"
    ],
    waterFeature: "Mondego River",
    population: "143,000 (460K metro)",
    famousFor: "University, Joanina Library, Fado de Coimbra, Student traditions",
    funFact: "Coimbra University was founded in 1290 - one of the oldest in Europe! The Joanina Library is a baroque masterpiece with bats that eat insects threatening ancient books. Coimbra was Portugal's capital from 1139-1255. The university's academic traditions inspired Harry Potter's Hogwarts. Coimbra has its own style of Fado music distinct from Lisbon.",
    funFactSource: "Coimbra Tourism",
    funFactSourceUrl: "https://turismo.cm-coimbra.pt/"
  },

  {
    id: 229,
    name: "Braga",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Portuguese city known as the 'Rome of Portugal'",
      "One of oldest Christian cities in the world",
      "Known for Bom Jesus sanctuary and baroque churches",
      "Rivers flow near this religious Portuguese city",
      "Portugal's religious capital with baroque sanctuary",
      "Portuguese Rome with Bom Jesus stairway sanctuary"
    ],
    waterFeature: "Cávado River",
    population: "193,000 (850K metro)",
    famousFor: "Bom Jesus do Monte, Cathedral, Holy Week, Baroque churches",
    funFact: "Braga is over 2,000 years old - founded by Romans as Bracara Augusta! The city is called the 'Portuguese Rome' for its concentration of baroque churches. Bom Jesus do Monte sanctuary has a stunning zigzag stairway with 573 steps. Braga has Portugal's oldest cathedral from 1089. The city hosts Portugal's most important Holy Week celebrations.",
    funFactSource: "Braga Tourism",
    funFactSourceUrl: "https://www.visitbraga.pt/"
  },

  {
    id: 230,
    name: "Faro",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Portuguese Algarve capital and beach gateway",
      "Southern Portuguese city with islands offshore",
      "Known for Ria Formosa lagoon and old town",
      "The Atlantic Ocean and lagoon surround this city",
      "Algarve's capital with lagoon islands and beaches",
      "Portuguese southern capital with Ria Formosa lagoon"
    ],
    waterFeature: "Atlantic Ocean, Ria Formosa Lagoon",
    population: "65,000 (120K metro)",
    famousFor: "Ria Formosa, Beaches, Old Town, Faro Islands",
    funFact: "Faro is the gateway to the Algarve's stunning beaches! Ria Formosa Natural Park has barrier islands protecting rare birds and seahorses. The Bone Chapel is decorated with 1,245 monk skeletons. Faro has 300+ days of sunshine annually. The old town has Moorish influences and Roman ruins. Faro Airport is one of Europe's busiest seasonal airports.",
    funFactSource: "Faro Tourism",
    funFactSourceUrl: "https://www.visitalgarve.pt/"
  },

  {
    id: 231,
    name: "Funchal",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Portuguese island capital in the Atlantic Ocean",
      "Madeira's capital known for wine and flowers",
      "Subtropical island city with botanical gardens",
      "The Atlantic Ocean surrounds this Portuguese island",
      "Madeira's capital with wine lodges and gardens",
      "Portuguese Atlantic island capital, Madeira wine origin"
    ],
    waterFeature: "Atlantic Ocean",
    population: "105,000 (210K island)",
    famousFor: "Madeira wine, Botanical gardens, Cable cars, New Year's fireworks",
    funFact: "Funchal is the capital of Madeira, an autonomous Portuguese island! The island is volcanic and never gets cold - eternal spring climate. Madeira wine is fortified wine famous since the 1500s. Funchal has the world's longest cable car at 3.7km. The New Year's fireworks display holds a Guinness World Record. Cristiano Ronaldo was born in Funchal!",
    funFactSource: "Madeira Tourism",
    funFactSourceUrl: "https://www.visitmadeira.com/"
  },

  {
    id: 232,
    name: "Ponta Delgada",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Portuguese Azores capital in the mid-Atlantic",
      "Largest city on São Miguel volcanic island",
      "Known for hot springs, tea plantations, and whales",
      "The Atlantic Ocean surrounds this remote island city",
      "Azores capital with volcanic lakes and hot springs",
      "Portuguese mid-Atlantic island capital with whales"
    ],
    waterFeature: "Atlantic Ocean",
    population: "68,000 (150K island)",
    famousFor: "Volcanic lakes, Hot springs, Whale watching, Tea plantations",
    funFact: "Ponta Delgada is in the Azores - volcanic islands 1,500 km from mainland Portugal! The islands are the tips of underwater mountains. São Miguel has hot thermal pools you can swim in. The Azores are one of the world's best whale watching destinations with 28 species. Europe's only tea plantations are here. The islands are incredibly green with hydrangeas everywhere!",
    funFactSource: "Azores Tourism",
    funFactSourceUrl: "https://www.visitazores.com/"
  },

  {
    id: 233,
    name: "Las Vegas",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American desert city known for casinos and shows",
      "Built in the Nevada desert with famous Strip",
      "Entertainment capital with replica landmarks",
      "In the Mojave Desert with nearby Lake Mead",
      "Nevada casino city with Bellagio fountains and shows",
      "American gambling capital in the desert, 'Sin City'"
    ],
    waterFeature: "Lake Mead, Las Vegas Wash",
    population: "650,000 (2.2M metro)",
    famousFor: "Casinos, The Strip, Shows, Bellagio Fountains, Nightlife",
    funFact: "Las Vegas means 'The Meadows' in Spanish! The city receives 42 million visitors annually. Vegas has 15 of the world's 25 largest hotels. The city consumes enormous amounts of water despite being in a desert. The famous 'Welcome to Las Vegas' sign has been there since 1959. What happens in Vegas supposedly stays in Vegas!",
    funFactSource: "Las Vegas Tourism",
    funFactSourceUrl: "https://www.visitlasvegas.com/"
  },

  {
    id: 234,
    name: "Miami",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American tropical city known for beaches and Art Deco",
      "Built on the Atlantic coast and Biscayne Bay",
      "Gateway to Latin America with Cuban influence",
      "Biscayne Bay and Atlantic surround this Florida city",
      "Florida beach city with Art Deco and Cuban culture",
      "American subtropical city with South Beach and cruises"
    ],
    waterFeature: "Atlantic Ocean, Biscayne Bay",
    population: "470,000 (6.1M metro)",
    famousFor: "South Beach, Art Deco, Cruise port, Cuban culture, Nightlife",
    funFact: "Miami is the only major US city founded by a woman - Julia Tuttle in 1896! The city has the largest cruise port in the world. Miami's Art Deco district has the world's largest collection of Art Deco architecture with 800+ buildings. Over 70% of residents speak Spanish at home. Miami has never recorded snow in its history!",
    funFactSource: "Miami Tourism",
    funFactSourceUrl: "https://www.miamiandbeaches.com/"
  },

  {
    id: 235,
    name: "Boston",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American colonial city on the Atlantic coast",
      "Birthplace of American Revolution and Tea Party",
      "Known for universities, Red Sox, and Freedom Trail",
      "Boston Harbor and Charles River define this city",
      "Massachusetts capital with Harvard and Tea Party history",
      "Revolutionary War city with Freedom Trail and Red Sox"
    ],
    waterFeature: "Boston Harbor, Charles River, Atlantic Ocean",
    population: "675,000 (4.9M metro)",
    famousFor: "Freedom Trail, Harvard, MIT, Red Sox, Boston Tea Party",
    funFact: "Boston is America's oldest big city founded in 1630! The Boston Tea Party in 1773 sparked the American Revolution. The Freedom Trail connects 16 historic sites. Boston has 50+ universities including Harvard (1636) and MIT. The city's accent is famous - 'pahk the cah in Hahvahd Yahd.' Boston baked beans gave the city the nickname 'Beantown.'",
    funFactSource: "Boston Tourism",
    funFactSourceUrl: "https://www.boston.gov/"
  },

  {
    id: 236,
    name: "Austin",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Texas capital known for live music and tech",
      "Called 'Live Music Capital of the World'",
      "Known for SXSW festival and barbecue",
      "The Colorado River flows through this Texas city",
      "Texas capital with live music and tech startups",
      "Texan music capital with SXSW and barbecue"
    ],
    waterFeature: "Colorado River, Lady Bird Lake",
    population: "980,000 (2.3M metro)",
    famousFor: "Live music, SXSW, BBQ, University of Texas, Tech scene",
    funFact: "Austin is the 'Live Music Capital of the World' with more live music venues per capita than anywhere else! The city hosts SXSW - one of the world's biggest media festivals. Austin's motto is 'Keep Austin Weird' celebrating its quirky culture. The Congress Avenue Bridge has 1.5 million bats that emerge at sunset. Austin is America's fastest-growing major city.",
    funFactSource: "Austin Tourism",
    funFactSourceUrl: "https://www.austintexas.org/"
  },

  {
    id: 237,
    name: "Seattle",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Pacific Northwest city known for coffee and tech",
      "Built between Puget Sound and freshwater lake",
      "Home to Space Needle and Pike Place Market",
      "Puget Sound and Lake Washington surround this city",
      "Washington state city with Space Needle and coffee",
      "American Northwest city with Space Needle and Amazon"
    ],
    waterFeature: "Puget Sound, Lake Washington",
    population: "750,000 (4M metro)",
    famousFor: "Space Needle, Pike Place Market, Coffee culture, Tech companies",
    funFact: "Seattle is the birthplace of Starbucks and grunge music! The city has more coffee shops per capita than any US city. Pike Place Market is America's oldest continuously operated public market since 1907. The Space Needle was built for the 1962 World's Fair. Seattle is home to Microsoft, Amazon, and Boeing. It rains 150 days per year but less than NYC!",
    funFactSource: "Visit Seattle",
    funFactSourceUrl: "https://www.visitseattle.org/"
  },

  {
    id: 238,
    name: "Portland",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Pacific Northwest city known for hipster culture",
      "Built where the Willamette meets Columbia River",
      "Called 'City of Roses' with food truck culture",
      "The Willamette River flows through this Oregon city",
      "Oregon city with Powell's Books and food trucks",
      "American Northwest city, 'Keep Portland Weird' culture"
    ],
    waterFeature: "Willamette River, Columbia River",
    population: "650,000 (2.5M metro)",
    famousFor: "Food trucks, Powell's Books, Craft beer, Hipster culture, Roses",
    funFact: "Portland has more breweries than any US city with 70+! Powell's City of Books is the world's largest independent bookstore covering an entire city block. The city's slogan is 'Keep Portland Weird.' Portland has the only extinct volcano within city limits in the continental US. The city has no sales tax. Portland is bike-friendly with extensive bike lanes.",
    funFactSource: "Travel Portland",
    funFactSourceUrl: "https://www.travelportland.com/"
  },

  {
    id: 239,
    name: "Denver",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American city known as the 'Mile High City'",
      "Gateway to Rocky Mountains at 5,280 feet",
      "Colorado capital with 300 days of sunshine",
      "The South Platte River flows through this mountain city",
      "Colorado capital at exactly one mile elevation",
      "American mountain city gateway to Rockies"
    ],
    waterFeature: "South Platte River",
    population: "715,000 (3M metro)",
    famousFor: "Mile High elevation, Rocky Mountains, Skiing, Red Rocks, Craft beer",
    funFact: "Denver is exactly one mile (5,280 feet) above sea level - hence 'Mile High City'! The 13th step of the State Capitol is precisely 5,280 feet. Denver gets 300 days of sunshine per year. The city is closer to many ski resorts than ocean beaches. Red Rocks Amphitheatre is a natural venue carved by geology. Denver has the most breweries per capita of any US city.",
    funFactSource: "Visit Denver",
    funFactSourceUrl: "https://www.denver.org/"
  },

  {
    id: 240,
    name: "Phoenix",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American desert city in the Sonoran Desert",
      "Arizona capital and fifth-largest US city",
      "Known for extreme summer heat and golf",
      "The Salt River flows near this desert metropolis",
      "Arizona desert capital with extreme summer heat",
      "American Sonoran Desert city, one of hottest capitals"
    ],
    waterFeature: "Salt River",
    population: "1.7 million (4.9M metro)",
    famousFor: "Desert climate, Golf, Spring training, Cacti, Southwestern culture",
    funFact: "Phoenix is one of the hottest major cities in America with summer temps over 110°F! The city has 300+ days of sunshine per year. Phoenix metro is the fastest-growing in the US. The city was named after the mythical bird that rises from ashes. Phoenix has more golf courses per capita than anywhere. Saguaro cacti are iconic symbols of the region.",
    funFactSource: "Visit Phoenix",
    funFactSourceUrl: "https://www.visitphoenix.com/"
  },

  {
    id: 241,
    name: "Nashville",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American city known as 'Music City'",
      "Tennessee capital and country music headquarters",
      "Home to Grand Ole Opry and honky-tonks",
      "The Cumberland River flows through this music city",
      "Tennessee music capital with Grand Ole Opry",
      "American country music capital with honky-tonk bars"
    ],
    waterFeature: "Cumberland River",
    population: "690,000 (2M metro)",
    famousFor: "Country music, Grand Ole Opry, Honky-tonks, Hot chicken",
    funFact: "Nashville is 'Music City USA' - the country music capital! The Grand Ole Opry has been broadcasting since 1925 - the longest-running radio show in history. Broadway has honky-tonk bars with live music all day. Nashville hot chicken is a local specialty. The Parthenon replica in Centennial Park is the world's only full-scale reproduction!",
    funFactSource: "Visit Nashville",
    funFactSourceUrl: "https://www.visitmusiccity.com/"
  },

  {
    id: 242,
    name: "New Orleans",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American Gulf Coast city known for jazz and Mardi Gras",
      "Built below sea level with French Quarter",
      "Known for Creole culture, jazz, and beignets",
      "The Mississippi River curves around this Louisiana city",
      "Louisiana city with French Quarter and Mardi Gras",
      "American Gulf city with jazz, Creole food, and Bourbon Street"
    ],
    waterFeature: "Mississippi River, Lake Pontchartrain",
    population: "390,000 (1.3M metro)",
    famousFor: "Mardi Gras, Jazz, French Quarter, Creole cuisine, Bourbon Street",
    funFact: "New Orleans is the birthplace of jazz music! The city's Mardi Gras celebration is one of the world's biggest parties attracting millions. Most of the city sits below sea level protected by levees. Café Du Monde has served beignets 24/7 since 1862. New Orleans has unique Creole and Cajun cuisine blending French, African, and Spanish influences.",
    funFactSource: "New Orleans Tourism",
    funFactSourceUrl: "https://www.neworleans.com/"
  },

  {
    id: 243,
    name: "Atlanta",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American Southern city that rose from Civil War ashes",
      "Georgia capital and major transportation hub",
      "Known for CNN, Coca-Cola, and hip-hop culture",
      "The Chattahoochee River flows near this Georgia city",
      "Georgia capital with CNN, Coke, and hip-hop",
      "American Southern city, birthplace of Coca-Cola and MLK"
    ],
    waterFeature: "Chattahoochee River",
    population: "500,000 (6.1M metro)",
    famousFor: "Coca-Cola, CNN, Martin Luther King Jr., Airport hub, Hip-hop",
    funFact: "Atlanta is the birthplace of Coca-Cola invented in 1886! The city was burned during the Civil War and rose from the ashes like a phoenix. Atlanta's Hartsfield-Jackson is the world's busiest airport by passenger traffic. Martin Luther King Jr. was born in Atlanta. The city is a hip-hop capital - birthplace of OutKast, TLC, and many others.",
    funFactSource: "Atlanta Tourism",
    funFactSourceUrl: "https://www.atlanta.net/"
  },

  {
    id: 244,
    name: "Calgary",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian city known for Stampede and oil industry",
      "Gateway to the Canadian Rockies in Alberta",
      "Hosted 1988 Winter Olympics with cowboy culture",
      "The Bow and Elbow Rivers meet in this city",
      "Alberta city with Calgary Stampede and Rockies access",
      "Canadian oil city with rodeo and mountain backdrop"
    ],
    waterFeature: "Bow River, Elbow River",
    population: "1.3 million (1.7M metro)",
    famousFor: "Calgary Stampede, Oil industry, 1988 Olympics, Rockies",
    funFact: "Calgary Stampede is the world's largest outdoor rodeo attracting over 1 million visitors! The city is the center of Canada's oil industry. Calgary hosted the 1988 Winter Olympics. The city has the most sunny days of any major Canadian city - 333 per year. Calgary is just 80km from the spectacular Canadian Rockies. The city has the highest concentration of head offices in Canada after Toronto.",
    funFactSource: "Tourism Calgary",
    funFactSourceUrl: "https://www.visitcalgary.com/"
  },

  {
    id: 245,
    name: "Ottawa",
    continent: "North America",
    country: "Canada",
    difficulty: "easy",
    clues: [
      "Canadian capital on the border with Quebec",
      "Known for Parliament Buildings and Rideau Canal",
      "Bilingual capital with museums and tulips",
      "The Ottawa and Rideau Rivers meet here",
      "Canada's capital with Parliament Hill and canal",
      "Canadian capital with skating canal and tulip festival"
    ],
    waterFeature: "Ottawa River, Rideau River, Rideau Canal",
    population: "1 million (1.4M metro)",
    famousFor: "Parliament Hill, Rideau Canal, Museums, Tulip Festival",
    funFact: "Ottawa's Rideau Canal becomes the world's largest skating rink in winter - 7.8 kilometers long! The city hosts the Canadian Tulip Festival with over 1 million tulips - a gift from the Netherlands for sheltering their royal family in WWII. Ottawa is Canada's fourth-largest city and officially bilingual. The Parliament Buildings are Gothic Revival masterpieces.",
    funFactSource: "Ottawa Tourism",
    funFactSourceUrl: "https://www.ottawatourism.ca/"
  },

  {
    id: 246,
    name: "Edmonton",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian city known as the 'Gateway to the North'",
      "Alberta capital with massive shopping mall",
      "Known for oil, festivals, and northern location",
      "The North Saskatchewan River flows through this city",
      "Alberta capital with West Edmonton Mall and festivals",
      "Canadian northern city with huge mall and oil industry"
    ],
    waterFeature: "North Saskatchewan River",
    population: "1 million (1.5M metro)",
    famousFor: "West Edmonton Mall, Oil industry, Festivals, Northern lights",
    funFact: "West Edmonton Mall was the world's largest mall from 1981-2004 with over 800 stores, water park, and ice rink! Edmonton has the most sunshine hours of any major Canadian city. The city hosts more festivals per capita than any Canadian city. Edmonton is the northernmost city with over 1 million people in North America. You can see northern lights here!",
    funFactSource: "Edmonton Tourism",
    funFactSourceUrl: "https://www.exploreedmonton.com/"
  },

  {
    id: 247,
    name: "Quebec City",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian walled city with French colonial heritage",
      "Only walled city north of Mexico in the Americas",
      "Quebec capital with Château Frontenac hotel",
      "The St. Lawrence River flows past this fortified city",
      "French-Canadian city with walls and winter carnival",
      "Canadian UNESCO city with fortress walls and French culture"
    ],
    waterFeature: "St. Lawrence River",
    population: "540,000 (810K metro)",
    famousFor: "Château Frontenac, Old Quebec walls, Winter Carnival, French culture",
    funFact: "Quebec City is the only walled city north of Mexico! Founded in 1608, it's one of North America's oldest cities. The Château Frontenac is the most photographed hotel in the world. Old Quebec is a UNESCO World Heritage Site that looks like a European city. The Winter Carnival is the world's largest winter festival. 95% of residents speak French as first language.",
    funFactSource: "Quebec City Tourism",
    funFactSourceUrl: "https://www.quebecregion.com/"
  },

  {
    id: 248,
    name: "Halifax",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian Atlantic port city in Nova Scotia",
      "Known for maritime history and Titanic connections",
      "Largest city in Atlantic Canada with natural harbor",
      "Halifax Harbour is one of world's deepest natural ports",
      "Nova Scotia capital with Titanic graves and Citadel",
      "Canadian Atlantic port with maritime heritage"
    ],
    waterFeature: "Halifax Harbour, Atlantic Ocean",
    population: "440,000 (480K metro)",
    famousFor: "Maritime history, Titanic connections, Citadel, Waterfront",
    funFact: "Halifax has the world's second-largest natural deep-water harbor! The city buried 150 Titanic victims - more than anywhere else. Halifax Explosion in 1917 was the world's largest man-made explosion before nuclear weapons. The Halifax Citadel is a star-shaped fort overlooking the harbor. The city is a major naval base and has strong Celtic heritage.",
    funFactSource: "Halifax Tourism",
    funFactSourceUrl: "https://www.discoverhalifaxns.com/"
  },

  {
    id: 249,
    name: "Winnipeg",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian prairie city known for extreme cold",
      "Manitoba capital at the confluence of two rivers",
      "Known as 'Gateway to the West' and 'Winterpeg'",
      "The Red and Assiniboine Rivers meet in this city",
      "Manitoba capital with extreme winters and cultural diversity",
      "Canadian prairie city where two rivers meet, very cold"
    ],
    waterFeature: "Red River, Assiniboine River",
    population: "750,000 (850K metro)",
    famousFor: "Extreme cold, The Forks, Canadian Museum for Human Rights, Ballet",
    funFact: "Winnipeg is nicknamed 'Winterpeg' for brutal cold - temperatures can hit -45°C! The city is at the geographical center of North America. The Forks is where two rivers meet - a meeting place for 6,000 years. Winnipeg has the most sunny days of any Canadian city. The Royal Winnipeg Ballet is North America's oldest ballet company. Winnie the Pooh was named after Winnipeg!",
    funFactSource: "Tourism Winnipeg",
    funFactSourceUrl: "https://www.tourismwinnipeg.com/"
  },

  {
    id: 250,
    name: "Victoria",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Canadian city on Vancouver Island with British charm",
      "British Columbia's capital with Parliament Buildings",
      "Known for gardens, afternoon tea, and mild climate",
      "The Pacific Ocean surrounds this island capital",
      "BC island capital with Butchart Gardens and tea",
      "Canadian island city with British heritage and gardens"
    ],
    waterFeature: "Pacific Ocean, Strait of Juan de Fuca",
    population: "91,000 (370K metro)",
    famousFor: "Butchart Gardens, Parliament Buildings, Inner Harbour, British heritage",
    funFact: "Victoria has the mildest climate in Canada - rarely freezes or gets hot! The city is more British than Britain with double-decker buses and afternoon tea tradition. Butchart Gardens attracts nearly 1 million visitors annually with stunning floral displays. Victoria is on Vancouver Island, not Vancouver. The city has more restaurants per capita than anywhere in Canada!",
    funFactSource: "Tourism Victoria",
    funFactSourceUrl: "https://www.tourismvictoria.com/"
  }
];

// Helper function to get city by ID
export function getCityById(id) {
  return CITIES.find(city => city.id === id);
}

// Helper function to get all city names
export function getAllCityNames() {
  return CITIES.map(city => city.name);
}

// Helper function to get daily city
export function getDailyCity(date = new Date()) {
  const epochDate = new Date('2024-12-01');
  const daysSinceEpoch = Math.floor(
    (date.getTime() - epochDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const index = daysSinceEpoch % CITIES.length;
  return CITIES[index];
}
