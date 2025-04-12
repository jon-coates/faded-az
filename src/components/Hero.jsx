import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import herobg from "/herobg.jpg";

import BookingButton from "./Bookingbutton";

const Hero = () => {
  return (
    <header className='relative  w-screen text-white flex items-center justify-center bg-cover bg-center h-auto'>
    {/* Background image layer */}
    <div
      className="absolute inset-0 bg-cover bg-center z-[-2]"
      style={{ backgroundImage: `url(${herobg})` }}
      aria-hidden="true"
    ></div>
  
    {/* Black overlay layer */}
    <div className="absolute inset-0 bg-black/60 z-[-1]" aria-hidden="true"></div>
  
    {/* Content */}
    <div className='py-20 flex flex-col justify-end items-center px-4 text-center w-screen relative z-10 min-h-[90vh]'>
      {/* <img src="/faded-az-logo.png" className="min-h-40 sm:max-h-40" alt="Faded AZ Logo" /> */}
  
      {/* Tagline */}
      <ul className='font-dmserif text-4xl sm:text-5xl my-4 space-x-4 flex flex-col justify-center text-white'>
        <li>Flawless Fades</li>
        <li>Breathtaking Beards</li>
        <li>Conscious Conversation</li>
      </ul>
  
      {/* Address */}
      <p className='my-4'>
        <a
          href='https://www.google.com/maps?q=Faded+AZ,+314+Montague+Rd,+West+End,+QLD'
          className='underline text-white/60 hover:text-white hover:no-underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Find us at: 314 Montague Rd, West End, QLD
        </a>
      </p>
  
      <div className="sticky top-1 mt-8">
        <BookingButton />
      </div>
    </div>
  </header>
  
  );
};

export default Hero;
