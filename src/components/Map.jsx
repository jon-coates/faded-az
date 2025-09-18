import BookingButton from "./Bookingbutton";

const Map = () => {
  return (
    <section className='bg-gray-950 mx-auto text-lg' id="map">
      <div className="max-w-2xl mx-auto py-12 px-5">
        <h2 className='font-dmserif text-xl sm:text-2xl my-2 space-x-4 flex flex-col justify-center gap-0.5 text-white text-center'>Faded Az Barber Shop is Located at 314 Montague Rd, West End</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6148711712985!2d153.00006848710146!3d-27.481246915237495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915114de5cc48b%3A0x269aca5f2991c41d!2sFaded%20AZ!5e0!3m2!1sen!2sau!4v1733046955553!5m2!1sen!2sau'
          width='100%'
          height='600'
          title="Faded Az Barber Shop Location - West End, Brisbane"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>

      <div className='flex flex-col gap-6 items-center justify-between bg-gray-950 text-white py-8 px-4'>
        <h3 className="font-dmserif text-2xl">By Appointment Only. Book Now.</h3>
        <BookingButton />
        <div className='flex-col items-center mt-8 sm:mt-0'>
        </div>
      </div>
    </section>
  );
};

export default Map; 