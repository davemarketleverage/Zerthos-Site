import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-2xl border border-gray-200 p-6 animate-slide-up">
      <div className="flex items-start space-x-3">
        {/* Cookie Icon */}
        <div className="flex-shrink-0 w-8 h-8 bg-[#F09A07] rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            {/* Cookie base */}
            <circle cx="12" cy="12" r="10" fill="#8B4513"/>
            {/* Chocolate chips */}
            <circle cx="8" cy="8" r="1.5" fill="#3E2723"/>
            <circle cx="16" cy="8" r="1.5" fill="#3E2723"/>
            <circle cx="8" cy="16" r="1.5" fill="#3E2723"/>
            <circle cx="16" cy="16" r="1.5" fill="#3E2723"/>
            <circle cx="12" cy="12" r="1.5" fill="#3E2723"/>
            <circle cx="6" cy="12" r="1.5" fill="#3E2723"/>
            <circle cx="18" cy="12" r="1.5" fill="#3E2723"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-[#202020] mb-2">
            We use cookies
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>
          
          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[#F09A07] text-white text-xs font-medium py-2 px-4 rounded-lg hover:bg-[#F09A07]/90 transition-colors duration-200"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-gray-100 text-gray-700 text-xs font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Decline
            </button>
          </div>
          
          {/* Learn More Link */}
          <div className="mt-3">
            <a
              href="/cookies-policy"
              className="text-xs text-[#F09A07] hover:underline transition-colors duration-200"
            >
              Learn more about our cookies
            </a>
          </div>
        </div>
        
        {/* Close Button */}
        <button
          onClick={handleDecline}
          className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}; 