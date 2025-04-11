import herobg from "../assets/herobg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import BookingButton from "./Bookingbutton";

const Hero = () => {
  return (
    <header
      className=' bg-white w-screen text-slate-900 flex '>
      {/* Overlay */}

      {/* Content */}
      <div className='py-20 flex flex-col justify-center items-center px-4 text-center w-screen'>
        <img src="/faded-az-logo-black.png" className="min-h-40 sm:max-h-60" alt="Faded AZ Logo" />
        {/* Tagline */}
        <ul className='font-dmserif text-4xl sm:text-5xl my-4 space-x-4 flex flex-col justify-center text-slate-900'>
          <li>Flawless Fades</li>
          <li>Breathtaking Beards</li>
          <li>Conscious Conversation</li>
        </ul>

        {/* Address */}
        <p className='my-4'>
          <a
            href='https://www.google.com/maps?q=Faded+AZ,+314+Montague+Rd,+West+End,+QLD'
            className='underline text-slate-600 hover:text-slate-900 hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Find us at: 314 Montague Rd, West End, QLD
          </a>
        </p>
        <div className="sticky top-1 mt-8">
  {/* <a
    href="http://fadedaz.gettimely.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg inline-flex items-center px-6 py-4 bg-slate-900 text-white border-white/50 border-2 uppercase font-bold rounded-lg tracking-wider shadow-md hover:bg-slate-700 hover:text-white hover:-translate-y-1 transition-all"
    >
    Book Appointment{" "}
    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
  </a> */}
<BookingButton />
</div>

      </div>
      {/* <iframe
        src='https://widget.tagembed.com/2140536'
        style='width:100%;height:600px;border:none;'
      ></iframe> */}
    </header>
  );
};

export default Hero;
