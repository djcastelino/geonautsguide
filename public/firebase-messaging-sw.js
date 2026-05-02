// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyAIRAZqobiYyFUtIt3_Zc18bnDodRAbtxY",
  authDomain: "geonauts-guide.firebaseapp.com",
  projectId: "geonauts-guide",
  storageBucket: "geonauts-guide.firebasestorage.app",
  messagingSenderId: "146519257856",
  appId: "1:146519257856:web:0ddfa9ecbf5d1f60d279e5",
  measurementId: "G-JLY5JR41W8"
});

const messaging = firebase.messaging();

// Handle background messages (when app is closed or in background)
messaging.onBackgroundMessage((payload) => {
  console.log('📬 Background message received:', payload);
  
  const notificationTitle = payload.notification?.title || 'Geonauts Guide';
  const notificationOptions = {
    body: payload.notification?.body || 'New landmark discovery!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'daily-landmark',
    requireInteraction: false,
    data: {
      url: payload.data?.url || '/',
      landmarkId: payload.data?.landmarkId
    }
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🖱️ Notification clicked:', event);
  
  event.notification.close();
  
  // Open the app and navigate to the landmark
  const urlToOpen = event.notification.data?.url || '/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Check if app is already open
        for (const client of clientList) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If not open, open new window
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});
