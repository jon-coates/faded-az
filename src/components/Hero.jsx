import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";

const Hero = () => {
  
  // Responsive Cloudinary URLs with different cropping for mobile vs desktop
  const getBackgroundImage = () => {
    const baseUrl = 'https://res.cloudinary.com/dixfrcina/image/upload';
    
    // Original image for mobile
    const originalImageId = 'v1758201585/faded-az-west-end-barber-internal-02_onkvts';
    
    // New image for desktop
    const newImageId = 'v1760508006/faded-az-west-end-barber-shop-7_pjsanj';
    
    // For mobile: use new image with east gravity cropping
    const mobileUrl = `${baseUrl}/w_768,h_1024,c_fill,g_east,q_auto,f_auto/${newImageId}`;
    
    // For desktop: use original image with smart cropping
    const desktopUrl = `${baseUrl}/w_1080,h_720,c_fill,g_auto,q_auto,f_auto/${originalImageId}`;
    
    return {
      mobile: mobileUrl,
      desktop: desktopUrl
    };
  };
  
  const backgroundImages = getBackgroundImage();
  
  return (
    <header className='relative w-screen text-white flex items-center justify-center min-h-screen' role="banner">
      {/* Fixed background image for hero - responsive with different crops */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(${backgroundImages.desktop})`,
          zIndex: 0,
          filter: 'brightness(0.9)'
        }}
        aria-hidden="true"
      />
      
      {/* Mobile-specific background with better cropping */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 sm:hidden"
        style={{
          backgroundImage: `url(${backgroundImages.mobile})`,
          zIndex: 0,
          filter: 'brightness(0.9)'
        }}
        aria-hidden="true"
      />
      
      {/* Overlay for hero section - changes based on theme */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className='pt-24 pb-6 flex flex-col justify-center items-center px-4 text-center w-screen relative z-10 min-h-screen'>
        {/* <img src="/faded-az-logo.png" className="min-h-40 sm:max-h-40" alt="Faded AZ Logo" /> */}
  

        {/* Tagline */}
        <h1 className='font-gloock text-5xl sm:text-7xl tracking-tighter my-2 space-x-4 flex flex-col justify-center gap-0.5 text-white opacity-90'>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 1 }}
          >Breathtaking Beards.</motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 1, delay: 0.5  }}
          >Flawless Fades.</motion.span>
          {/* <span>Conscious Conversation</span> */}
        </h1>
  
        {/* Main h2 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          className='font-serif text-base sm:text-lg md:text-1xl text-white font-medium'
        >
            Faded Az is West End&apos;s Best Barber
        </motion.h2>
  
        <div className="top-1 mt-8">
          <BookingButton />

        {/* Address */}
        <p className='my-4 font-serif text-lg'>
          <a
            href='https://www.google.com/maps?q=Faded+AZ,+314+Montague+Rd,+West+End,+QLD'
            className='no-underline text-white/80 hover:text-white hover:underline transition-colors duration-300'
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
