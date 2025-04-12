import BookingButton from "./Bookingbutton";



const AboutBooking = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className='bg-black mx-auto text-lg'>
      <div className="sm:py-24 px-6 py-9 max-w-xl mx-auto">
          <h1 className='font-medium uppercase text-zinc-400 mb-6 text-base tracking-wider'>
            Men&#39;s haircuts • Precision Fades • Beard Trimming
          </h1>
      <div className="flex flex-row justify-center gap-4">
      <img src="/favicon-32x32.png" className="w-8 h-8"/>
        <div className="max-w-xl">
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4 font-dmserif'>
            Yo man, I heard you were looking like shit.
          </h2>
          <p className='mb-8 font-bold text-2xl text-white font-dmserif'>
            Don&#39;t worry, I got you.
          </p>
          <p className='mb-4'>
            Book in to Faded Az and leave looking like a million bucks.
          </p>
          <p className='mb-4'>
            Find us in West End, Brisbane - opposite Light & Co Apartments on
            Montague Road - delivering flawless fades and badass beard styling
            that will have you feeling unstoppable.
          </p>
          {/* <p className='mb-4'>
            Faded Az is more than just a barber shop—it&#39;s a place where
            style meets craftsmanship. Whether you need a sharp fade, a beard
            refresh, or both, Faded Az guarantees exceptional service by
            appointment only.
          </p> */}
          {/* <p className='mb-4'>
            From West End to greater Brisbane and South East Qld, Faded Az is
            raising the bar in barbering excellence. So make an appotintment and
            experience why Storm from Faded Az is the best barber in town.
          </p> */}
          <p className='mb-4'>
            Faded Az is appointment only and they can fill up quick, so why are
            you still reading this? Go book your appointment now before they are
            all gone.
          </p>
          <p className='font-bold mb-8'>Catch ya!</p>
          <BookingButton />
        </div>
        </div>
        </div>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6148711712985!2d153.00006848710146!3d-27.481246915237495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915114de5cc48b%3A0x269aca5f2991c41d!2sFaded%20AZ!5e0!3m2!1sen!2sau!4v1733046955553!5m2!1sen!2sau'
          width='100%'
          height='600'
        ></iframe>
      </div>

      <div className='flex flex-col gap-6 items-center justify-between bg-white text-black py-8 px-4'>
        <h3>By Appointment Only. Book Now.</h3>
        <BookingButton />
        <div className='flex-col items-center mt-8 sm:mt-0'>
          <img className="h-16" src='/faded-az-logo-black.png' alt='Faded Az Logo'/>
          <p className="text-xs text-center">© Faded Az {currentYear}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;
