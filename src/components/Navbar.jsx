import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsOverHero(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo selection logic
  const logoSrc = isOverHero ? '/faded-az-logo.png' : 
                  (theme === 'light' ? '/faded-az-logo-black.png' : '/faded-az-logo.png');

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50"
    >
      <motion.img 
        src={logoSrc} 
        animate={{ 
          maxHeight: isScrolled ? '60px' : '80px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ 
          maxHeight: isScrolled ? '60px' : '80px',
          transform: 'translateX(-50%)'
        }}
        alt="Faded AZ Logo"
        className="transition-all duration-300"
      />
    </motion.nav>
  );
};

export default Navbar;
