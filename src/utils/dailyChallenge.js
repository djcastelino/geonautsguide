// Daily Challenge utility functions

// Get daily landmark (rotates through all landmarks)
export const getDailyLandmark = (landmarks) => {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Rotate through landmarks based on day of year
  const index = dayOfYear % landmarks.length;
  return landmarks[index];
};

// Get today's date string (YYYY-MM-DD)
export const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Streak tracking
export const getStreakData = () => {
  const data = localStorage.getItem('geonauts_streak');
  if (!data) {
    return {
      currentStreak: 0,
      bestStreak: 0,
      lastCompletedDate: null,
      totalCompleted: 0,
      completedDates: []
    };
  }
  return JSON.parse(data);
};

export const updateStreak = (completed = true) => {
  const streakData = getStreakData();
  const today = getTodayDateString();
  
  if (completed) {
    // Check if already completed today
    if (streakData.lastCompletedDate === today) {
      return streakData; // Already completed today
    }
    
    // Check if streak continues
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    if (streakData.lastCompletedDate === yesterdayString || streakData.currentStreak === 0) {
      // Continue streak
      streakData.currentStreak += 1;
    } else {
      // Streak broken, start new
      streakData.currentStreak = 1;
    }
    
    // Update best streak
    if (streakData.currentStreak > streakData.bestStreak) {
      streakData.bestStreak = streakData.currentStreak;
    }
    
    streakData.lastCompletedDate = today;
    streakData.totalCompleted += 1;
    streakData.completedDates.push(today);
  }
  
  localStorage.setItem('geonauts_streak', JSON.stringify(streakData));
  return streakData;
};

export const isTodayChallengeCompleted = () => {
  const streakData = getStreakData();
  const today = getTodayDateString();
  return streakData.lastCompletedDate === today;
};

// Quiz questions for landmarks (3 questions per landmark)
export const getQuizQuestions = (landmark) => {
  const questions = [];
  
  // Question 1: Year/Period
  if (landmark.year) {
    questions.push({
      question: `When was ${landmark.name} built or completed?`,
      options: generateYearOptions(landmark.year),
      correctAnswer: 0,
      explanation: `${landmark.name} was built/completed in ${landmark.year}.`
    });
  }
  
  // Question 2: Height/Size (if available)
  if (landmark.height && landmark.height !== 'Varies') {
    questions.push({
      question: `What is the height of ${landmark.name}?`,
      options: generateHeightOptions(landmark.height),
      correctAnswer: 0,
      explanation: `${landmark.name} stands at ${landmark.height}.`
    });
  } else {
    // Fallback to historical question
    questions.push(generateHistoricalQuestion(landmark));
  }
  
  // Question 3: Fun Fact from Significance
  questions.push(generateFunFactQuestion(landmark));
  
  return questions;
};

// Helper functions to generate quiz options
const generateYearOptions = (correctYear) => {
  const options = [correctYear];
  const yearNum = parseInt(correctYear.match(/\d+/)?.[0] || '2000');
  
  // Generate 3 wrong options
  const offsets = [-100, -50, 50];
  offsets.forEach(offset => {
    const wrongYear = yearNum + offset;
    options.push(wrongYear.toString());
  });
  
  return shuffleArray(options);
};

const generateHeightOptions = (correctHeight) => {
  const options = [correctHeight];
  const heightNum = parseFloat(correctHeight.match(/[\d.]+/)?.[0] || '100');
  const unit = correctHeight.includes('m') ? 'm' : correctHeight.includes('ft') ? 'ft' : 'm';
  
  // Generate 3 wrong options
  const offsets = [-20, -10, 15];
  offsets.forEach(offset => {
    const wrongHeight = (heightNum + offset).toFixed(heightNum < 10 ? 1 : 0);
    options.push(`${wrongHeight}${unit}`);
  });
  
  return shuffleArray(options);
};

const generateHistoricalQuestion = (landmark) => {
  // Extract key facts from significance field
  const sig = landmark.significance || '';
  
  // Define historical questions based on common patterns
  const historicalQuestions = [
    {
      question: `What is ${landmark.name} primarily known for?`,
      correct: landmark.description,
      wrongs: [
        'Being the tallest structure in the world',
        'Housing ancient royal treasuries',
        'Serving as a military fortress'
      ]
    }
  ];
  
  // Try to create specific questions from significance
  if (sig.includes('Built by') || sig.includes('built by')) {
    const builderMatch = sig.match(/[Bb]uilt by ([^.]+)/);
    if (builderMatch) {
      return {
        question: `Who commissioned or built ${landmark.name}?`,
        options: shuffleArray([
          builderMatch[1].split(' for ')[0].trim(),
          'Emperor Augustus',
          'King Louis XIV',
          'Sultan Mehmed II'
        ]),
        correctAnswer: 0,
        explanation: sig.split('.')[0] + '.'
      };
    }
  }
  
  if (sig.includes('UNESCO')) {
    return {
      question: `What special designation does ${landmark.name} have?`,
      options: shuffleArray([
        'UNESCO World Heritage Site',
        'Natural Protected Area',
        'National Historic Monument',
        'Cultural Reserve Zone'
      ]),
      correctAnswer: 0,
      explanation: `${landmark.name} is a UNESCO World Heritage Site.`
    };
  }
  
  // Default historical question
  return {
    question: `What is the historical significance of ${landmark.name}?`,
    options: shuffleArray([
      landmark.description,
      'Ancient trading post on the Silk Road',
      'Royal palace of medieval kings',
      'Temple dedicated to ancient gods'
    ]),
    correctAnswer: 0,
    explanation: landmark.significance
  };
};

const generateFunFactQuestion = (landmark) => {
  const sig = landmark.significance || '';
  
  // Extract specific fun facts from significance
  if (sig.includes('Only remaining')) {
    return {
      question: `What makes ${landmark.name} unique among ancient wonders?`,
      options: shuffleArray([
        'It is the only remaining ancient wonder',
        'It was built without any tools',
        'It changes color with the seasons',
        'It was never actually completed'
      ]),
      correctAnswer: 0,
      explanation: sig
    };
  }
  
  if (sig.includes('Inspired Disney') || sig.includes('inspired')) {
    return {
      question: `What famous cultural impact did ${landmark.name} have?`,
      options: shuffleArray([
        'Inspired Disney\'s Sleeping Beauty Castle',
        'Featured in James Bond films',
        'Used as Olympic venue',
        'Appeared on currency worldwide'
      ]),
      correctAnswer: 0,
      explanation: sig
    };
  }
  
  if (sig.includes('Leans') || sig.includes('tilt')) {
    return {
      question: `What unique feature does ${landmark.name} have?`,
      options: shuffleArray([
        'It leans at a 3.97 degree angle',
        'It rotates with the sun',
        'It glows in moonlight',
        'It produces natural echo effects'
      ]),
      correctAnswer: 0,
      explanation: sig
    };
  }
  
  if (sig.includes('Gift from France') || sig.includes('gift')) {
    return {
      question: `How did ${landmark.name} come to be?`,
      options: shuffleArray([
        'Gift from France symbolizing freedom',
        'Built by local craftsmen',
        'Discovered buried underground',
        'Won in a national competition'
      ]),
      correctAnswer: 0,
      explanation: sig
    };
  }
  
  if (sig.includes('Total length') || sig.includes('21,196')) {
    return {
      question: `How long is ${landmark.name}?`,
      options: shuffleArray([
        '21,196 km (13,171 miles)',
        '5,000 km (3,107 miles)',
        '10,000 km (6,214 miles)',
        '15,000 km (9,321 miles)'
      ]),
      correctAnswer: 0,
      explanation: sig
    };
  }
  
  // Default fun fact from description
  return {
    question: `What is a distinctive feature of ${landmark.name}?`,
    options: shuffleArray([
      landmark.description,
      'Constructed entirely of gold and marble',
      'Built on a floating foundation',
      'Contains underground tunnels'
    ]),
    correctAnswer: 0,
    explanation: landmark.significance || landmark.description
  };
};

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
