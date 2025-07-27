import { useEffect } from 'react';

const TimelyScript = () => {
  useEffect(() => {
    // Only load Timely script if it hasn't been loaded already
    if (!window.TimelyWidget) {
      const script = document.createElement('script');
      script.id = 'timelyScript';
      script.src = 'https://book.gettimely.com/widget/book-button-v1.5.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Timely script loaded successfully');
      };
      
      script.onerror = () => {
        console.warn('Failed to load Timely script');
      };
      
      document.head.appendChild(script);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default TimelyScript; 