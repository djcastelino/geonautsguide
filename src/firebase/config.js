import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "geonauts-guide.firebaseapp.com",
  projectId: "geonauts-guide",
  storageBucket: "geonauts-guide.firebasestorage.app",
  messagingSenderId: "146519257856",
  appId: "1:146519257856:web:0ddfa9ecbf5d1f60d279e5",
  measurementId: "G-JLY5JR41W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
let messaging = null;
try {
  messaging = getMessaging(app);
} catch (error) {
  console.warn('Firebase Messaging not supported:', error);
}

// Request notification permission and get FCM token
export const requestNotificationPermission = async () => {
  try {
    if (!messaging) {
      throw new Error('Messaging not initialized');
    }

    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('✅ Notification permission granted');
      
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      });
      
      if (token) {
        console.log('📱 FCM Token:', token);
        // Store token in localStorage for future reference
        localStorage.setItem('fcm_token', token);
        return token;
      } else {
        console.warn('⚠️ No registration token available');
        return null;
      }
    } else {
      console.log('❌ Notification permission denied');
      return null;
    }
  } catch (error) {
    console.error('Error getting notification permission:', error);
    return null;
  }
};

// Listen for foreground messages
export const onMessageListener = () => {
  return new Promise((resolve) => {
    if (!messaging) {
      console.warn('Messaging not available');
      return;
    }
    
    onMessage(messaging, (payload) => {
      console.log('📬 Foreground message received:', payload);
      resolve(payload);
    });
  });
};

export { app, messaging };
