import { useState } from 'react';
import { X, Smartphone } from 'lucide-react';

export default function BetaBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send to Google Form (you'll replace this URL)
    const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    const emailFieldId = 'entry.YOUR_FIELD_ID';
    
    try {
      // Store in localStorage as backup
      const existingEmails = JSON.parse(localStorage.getItem('betaSignups') || '[]');
      existingEmails.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('betaSignups', JSON.stringify(existingEmails));
      
      // Try to submit to Google Form (will fail due to CORS, but data is stored locally)
      fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ [emailFieldId]: email })
      }).catch(() => {});
      
      setSubmitted(true);
      setEmail('');
      
      // Auto-close after 3 seconds
      setTimeout(() => setClosed(true), 3000);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  if (closed) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <Smartphone className="h-6 w-6" />
            </span>
            <p className="ml-3 font-medium truncate">
              <span className="md:hidden">Android app beta - Join now!</span>
              <span className="hidden md:inline">
                🚀 Android app launching soon! Be the first to try it - join our beta test
              </span>
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Google account email"
                className="px-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-64"
              />
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          ) : (
            <div className="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto">
              <span className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white">
                ✅ Thanks! You'll get the beta invite soon
              </span>
            </div>
          )}

          <button
            onClick={() => setClosed(true)}
            className="ml-3 flex-shrink-0 text-white hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
