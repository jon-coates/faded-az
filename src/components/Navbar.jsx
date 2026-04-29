import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { to: '/services', label: 'Services'  },
  { to: '/find-us',  label: 'Find Us'   },
  { to: '/reviews',  label: 'Reviews'   },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: isScrolled || menuOpen ? 'rgba(3,7,18,0.96)' : 'transparent',
          backdropFilter: isScrolled || menuOpen ? 'blur(8px)' : 'none',
          transition: 'background 0.3s',
        }}
      >
        <Link to="/">
          <motion.img
            src="/faded-az-logo.png"
            animate={{ maxHeight: isScrolled ? '50px' : '64px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ maxHeight: isScrolled ? '50px' : '64px' }}
            alt="Faded AZ Logo"
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6 list-none m-0 p-0">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-mono text-sm font-light tracking-normal transition-colors duration-200 ${
                  location.pathname === to ? 'text-red-400' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/book"
              className="font-mono text-sm font-light tracking-normal bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-px bg-white origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed top-[72px] left-0 right-0 z-40 bg-gray-950 backdrop-blur-md px-6 py-6 flex flex-col gap-5 border-t border-white/10"
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-mono text-base font-light transition-colors duration-200 ${
                  location.pathname === to ? 'text-red-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/book"
              className="font-mono text-base font-light bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded text-center transition-colors duration-200 mt-2"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
