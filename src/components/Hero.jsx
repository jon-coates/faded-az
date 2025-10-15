import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <header className='relative w-screen text-white flex items-center justify-center min-h-screen' role="banner">
    {/* Content */}
    <div className='pt-24 pb-6 flex flex-col justify-center items-center px-4 text-center w-screen relative z-10 min-h-screen'>
      {/* <img src="/faded-az-logo.png" className="min-h-40 sm:max-h-40" alt="Faded AZ Logo" /> */}
  

      {/* Tagline */}
      <h1 className='font-gloock text-5xl sm:text-7xl tracking-tighter my-2 space-x-4 flex flex-col justify-center gap-0.5 text-white opacity-90'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
        >Breathtaking Beards.</motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3, delay: 1  }}
        >Flawless Fades.</motion.span>
        {/* <span>Conscious Conversation</span> */}
      </h1>
  
      {/* Main h2 Heading */}
      <h2 className='font-inter text-base sm:text-lg md:text-1xl text-white/60 font-medium'>
        Brisbane&apos;s Best Barber for Beards &amp; Fades
      </h2>
  
      <div className="top-1 mt-8">
        <BookingButton />

      {/* Address */}
      <p className='my-4 font-serif text-lg'>
        <a
          href='https://www.google.com/maps?q=Faded+AZ,+314+Montague+Rd,+West+End,+QLD'
          className='no-underline text-white/80 hover:text-white hover:underline'
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
