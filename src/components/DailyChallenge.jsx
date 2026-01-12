import { useState, useEffect } from 'react';
import { getDailyLandmark, getQuizQuestions, updateStreak, getStreakData, isTodayChallengeCompleted } from '../utils/dailyChallenge';

const DailyChallenge = ({ landmarks, onStartChallenge, onClose, startWithQuiz = false }) => {
  const [dailyLandmark, setDailyLandmark] = useState(null);
  const [step, setStep] = useState(startWithQuiz ? 'quiz' : 'intro'); // 'intro', 'quiz', 'complete'
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [streakData, setStreakData] = useState(null);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);

  useEffect(() => {
    const landmark = getDailyLandmark(landmarks);
    setDailyLandmark(landmark);
    setQuizQuestions(getQuizQuestions(landmark));
    setStreakData(getStreakData());
    setAlreadyCompleted(isTodayChallengeCompleted());
  }, [landmarks]);

  const handleStartChallenge = () => {
    // Close modal and start audio tour
    onStartChallenge(dailyLandmark);
    onClose(); // Close the modal so user can see the audio playing
  };

  const handleStartQuiz = () => {
    setStep('quiz');
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    // Check if correct
    if (answerIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz complete
        const newStreakData = updateStreak(true);
        setStreakData(newStreakData);
        setStep('complete');
      }
    }, 2000);
  };

  if (!dailyLandmark) return null;

  // If already completed today
  if (alreadyCompleted && step === 'intro') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
          
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold mb-4">Challenge Complete!</h2>
            <p className="text-gray-600 mb-6">
              You've already completed today's challenge.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <div className="text-4xl mb-2">🔥 {streakData?.currentStreak || 0} Day Streak</div>
              <p className="text-sm text-gray-600">Come back tomorrow for a new challenge!</p>
            </div>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 1: Introduction
  if (step === 'intro') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
          
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🎯</div>
            <h2 className="text-3xl font-bold mb-2">Today's Challenge</h2>
            {streakData && streakData.currentStreak > 0 && (
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                🔥 {streakData.currentStreak} Day Streak!
              </div>
            )}
          </div>

          <div className="mb-6">
            <img
              src={dailyLandmark.imageUrl}
              alt={dailyLandmark.name}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{dailyLandmark.name}</h3>
            <p className="text-gray-600 mb-1">📍 {dailyLandmark.city}, {dailyLandmark.country}</p>
            <p className="text-sm text-gray-500">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {dailyLandmark.category}
              </span>
            </p>
          </div>

          <p className="text-gray-700 text-center mb-8">
            Ready to learn about one of the world's most fascinating landmarks?
            Listen to the AI audio tour, then test your knowledge!
          </p>

          <div className="flex gap-3">
            <button
              onClick={handleStartChallenge}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              🎙️ Start Audio Tour
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Quiz
  if (step === 'quiz') {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-gray-500">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                Score: {score}/{quizQuestions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    showCorrect
                      ? 'bg-green-100 border-2 border-green-500 text-green-700'
                      : showWrong
                      ? 'bg-red-100 border-2 border-red-500 text-red-700'
                      : isSelected
                      ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="flex items-center justify-between">
                    <span>{option}</span>
                    {showCorrect && <span>✅</span>}
                    {showWrong && <span>❌</span>}
                  </span>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`p-4 rounded-xl ${
              selectedAnswer === currentQuestion.correctAnswer
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}>
              <p className="font-medium">
                {selectedAnswer === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Not quite!'}
              </p>
              <p className="text-sm mt-1">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Step 3: Complete
  if (step === 'complete') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
          
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Challenge Complete!</h2>
            <p className="text-gray-600 mb-6">
              You scored {score} out of {quizQuestions.length}
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6">
              <div className="text-5xl mb-2">
                {Array.from({ length: Math.min(streakData?.currentStreak || 0, 7) }).map((_, i) => (
                  <span key={i}>🔥</span>
                ))}
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {streakData?.currentStreak || 0} Day Streak!
              </div>
              <p className="text-sm text-gray-600">
                {streakData?.currentStreak === 1 
                  ? "Great start! Come back tomorrow to build your streak."
                  : streakData?.currentStreak >= 7
                  ? "Amazing! You're on fire! 🔥"
                  : "Keep it going! Come back tomorrow."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600">{streakData?.totalCompleted || 0}</div>
                <div className="text-xs text-gray-600">Total Completed</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600">{streakData?.bestStreak || 0}</div>
                <div className="text-xs text-gray-600">Best Streak</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default DailyChallenge;
