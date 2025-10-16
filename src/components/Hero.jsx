import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";
import { useTheme } from "./ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <header className='relative w-screen text-white flex items-center justify-center min-h-screen' role="banner">
      {/* Fixed background image for hero */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dixfrcina/image/upload/w_1080/v1758201585/faded-az-west-end-barber-internal-02_onkvts.jpg)`,
          zIndex: 0,
          filter: theme === 'light' ? 'brightness(1.1)' : 'brightness(0.9)'
        }}
        aria-hidden="true"
      />
      
      {/* Overlay for hero section - changes based on theme */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: theme === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className='pt-24 pb-6 flex flex-col justify-center items-center px-4 text-center w-screen relative z-10 min-h-screen'>
        {/* <img src="/faded-az-logo.png" className="min-h-40 sm:max-h-40" alt="Faded AZ Logo" /> */}
  

        {/* Tagline */}
        <h1 className='font-gloock text-5xl sm:text-7xl tracking-tighter my-2 space-x-4 flex flex-col justify-center gap-0.5 text-gray-900 dark:text-white opacity-95 dark:opacity-90 transition-colors duration-300'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >Breathtaking Beards.</motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2, delay: 1  }}
          >Flawless Fades.</motion.span>
          {/* <span>Conscious Conversation</span> */}
        </h1>
  
        {/* Main h2 Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 2 }}
          className='font-serif text-base sm:text-lg md:text-1xl text-gray-800 dark:text-white font-medium transition-colors duration-300'
        >
            Brisbane&apos;s Best Barber for Beards &amp; Fades
        </motion.h2>
  
        <div className="top-1 mt-8">
          <BookingButton />

        {/* Address */}
        <p className='my-4 font-serif text-lg'>
          <a
            href='https://www.google.com/maps?q=Faded+AZ,+314+Montague+Rd,+West+End,+QLD'
            className='no-underline text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors duration-300'
            target='_blank'
            rel='noopener noreferrer'
          >
            314 Montague Rd, West End, QLD
          </a>
        </p>
        </div>
      </div>
    </header>
    
    );
};

export default Hero;
