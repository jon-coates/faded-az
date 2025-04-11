import BookingButton from "./Bookingbutton";



const AboutBooking = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
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
