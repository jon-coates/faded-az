import herobg from "../assets/herobg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <header
      className='relative bg-cover bg-center h-[90vh] w-screen text-white flex '
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-zinc-950 bg-opacity-60'></div>

      {/* Content */}
      <div className='absolute h-full flex flex-col justify-end items-center px-6 text-center w-screen bottom-28'>
        {/* Tagline */}
        <ul className='font-koulen text-5xl uppercase tracking-wide space-x-4 flex flex-col justify-center text-white/80'>
          <li>Breathtaking Beards</li>
          <li>Flawless Fades</li>
          <li>Conscious Conversation</li>
        </ul>

        {/* Address */}
        <p className='mt-4'>
          <a
            href='https://maps.app.goo.gl/iBSA1wgosbMoqo9p6'
            className='no-underline text-blue-300 hover:text-white'
            target='_blank'
            rel='noopener noreferrer'
          >
            314 Montague Rd, West End, QLD
          </a>
        </p>
        <div className=' sticky top-1 mt-8'>
          <a
            href='#booking'
            className='px-6 py-4 bg-white/10 text-white border-white/50 border-2 uppercase font-bold tracking-wider shadow-md hover:bg-white transition hover:text-blue-700 hover:transition-all'
          >
            Book Appointment{" "}
            <FontAwesomeIcon icon={faArrowDown} className='ml-2' />
          </a>
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
