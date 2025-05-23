import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/80 text-white px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Left: Logo */}
        <div className='font-koulen text-3xl font-bold'>
          <img src="/faded-az-logo.png" style={{ maxHeight: '60px' }} alt="Faded AZ Logo" />
        </div>

        {/* Right: Booking Button and Instagram Icon */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://www.instagram.com/faded_azf/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-white/70 hover:text-white transition'
          >
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
