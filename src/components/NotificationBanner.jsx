import { useState, useEffect } from 'react';
import { requestNotificationPermission } from '../firebase/config';

function NotificationBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState('default'); // 'default', 'granted', 'denied'

  useEffect(() => {
    // Check if user has already made a decision
    const hasDecided = localStorage.getItem('notification_decision');
    const permission = Notification.permission;
    
    setNotificationStatus(permission);
    
    // Show banner only if user hasn't decided yet
    if (!hasDecided && permission === 'default') {
      // Show banner after 1.5 seconds delay (less intrusive)
      setTimeout(() => {
        setShowBanner(true);
      }, 1500);
    }
  }, []);

  const handleEnableNotifications = async () => {
    setIsLoading(true);
    
    try {
      const token = await requestNotificationPermission();
      
      if (token) {
        setNotificationStatus('granted');
        localStorage.setItem('notification_decision', 'granted');
        setShowBanner(false);
        
        // Show success message briefly
        setTimeout(() => {
          alert('🎉 You\'ll now receive daily landmark discoveries at 9 AM!');
        }, 500);
      } else {
        setNotificationStatus('denied');
        localStorage.setItem('notification_decision', 'denied');
        setShowBanner(false);
      }
    } catch (error) {
      console.error('Error enabling notifications:', error);
      alert('❌ Could not enable notifications. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('notification_decision', 'dismissed');
  };

  // Don't show banner if permission already granted or denied
  if (!showBanner || notificationStatus !== 'default') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-4xl">
            🔔
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Get Daily Landmark Discoveries!
            </h3>
            <p className="text-white/90 mb-4">
              Receive a notification every morning at 9 AM with today's featured landmark and fascinating facts. Never miss a discovery!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEnableNotifications}
                disabled={isLoading}
                className="flex-1 bg-white text-purple-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                    Enabling...
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    Enable Notifications
                  </>
                )}
              </button>
              
              <button
                onClick={handleDismiss}
                disabled={isLoading}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-colors disabled:opacity-50"
              >
                Maybe Later
              </button>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-white/80 hover:text-white text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotificationBanner;
