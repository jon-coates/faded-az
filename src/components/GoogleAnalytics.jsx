import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (window.gtag) {
      window.gtag('config', 'GTM-M8MCCZ5L', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location]);

  useEffect(() => {
    // Track booking button clicks
    const trackBookingClick = () => {
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'booking_button',
          value: 1
        });
      }
    };

    const bookingButtons = document.querySelectorAll('a[href*="gettimely.com"]');
    bookingButtons.forEach(button => {
      button.addEventListener('click', trackBookingClick);
    });

    return () => {
      bookingButtons.forEach(button => {
        button.removeEventListener('click', trackBookingClick);
      });
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 