import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'>
      <img 
        src="/faded-az-logo.png" 
        style={{ 
          maxHeight: isScrolled ? '60px' : '80px',
          transition: 'max-height 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
        }} 
        alt="Faded AZ Logo" 
      />
    </nav>
  );
};

export default Navbar;
