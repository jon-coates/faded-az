import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-transparent text-white px-6 py-4'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        {/* Left: Logo */}
        <div className='font-koulen text-3xl font-bold'>
          <img src="public/faded-az-logo-black.png" style={{ maxHeight: '60px' }} alt="Faded AZ Logo" />
        </div>

        {/* Right: Booking Button and Instagram Icon */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://instagram.com/fadedaz'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl text-white hover:text-blue-500 transition'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
