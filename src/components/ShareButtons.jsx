import { Share2, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ShareButtons({ landmark }) {
  const [showToast, setShowToast] = useState(false);

  const shareUrl = `https://geonautsguide.com/?landmark=${encodeURIComponent(landmark.name)}`;
  const shareText = `Check out ${landmark.name} on Geonauts Guide! ${landmark.description.slice(0, 100)}...`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${landmark.name} - Geonauts Guide`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareToWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <button
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors text-sm"
          aria-label="Share landmark"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>

        <button
          onClick={shareToTwitter}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          onClick={shareToFacebook}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          onClick={shareToWhatsApp}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          aria-label="Share on WhatsApp"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        </button>
      </div>

      {showToast && (
        <div className="absolute top-full mt-2 left-0 bg-gray-900 dark:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
