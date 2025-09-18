// import herobg from "/herobg.jpg";
import BookingButton from "./Bookingbutton";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <header className='relative  w-screen text-white flex items-center justify-center bg-cover bg-center h-auto' role="banner">
    {/* Background image layer */}
    <div
      className="absolute inset-0 bg-cover bg-center z-[-2]"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dixfrcina/image/upload/v1758201585/faded-az-west-end-barber-internal-02_onkvts.jpg)` }}
      aria-hidden="true"
    ></div>
  
    {/* Black overlay layer */}
    <div className="absolute inset-0 bg-black/50 z-[-1]" aria-hidden="true"></div>
  
    {/* Content */}
    <div className='pt-24 pb-6 flex flex-col justify-between items-center px-4 text-center w-screen relative z-10 min-h-[90vh]'>
      {/* <img src="/faded-az-logo.png" className="min-h-40 sm:max-h-40" alt="Faded AZ Logo" /> */}
  
      {/* Main H1 Heading */}
      <h1 className='font-dmserif text-lg sm:text-xl md:text-2xl text-white/60 font-medium'>
        Brisbane&apos;s Best Barber for Beards &amp; Fades
      </h1>

      {/* Tagline */}
      <h2 className='font-dmserif text-5xl sm:text-7xl tracking-tighter shadow-md my-2 space-x-4 flex flex-col justify-center gap-0.5 text-white opacity-90'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
        >Flawless Fades.</motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3, delay: 1 }}
        >Breathtaking Beards.</motion.span>
        {/* <span>Conscious Conversation</span> */}
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
