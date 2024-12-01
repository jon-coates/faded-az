const AboutBooking = () => {
  return (
    <section className='bg-zinc-950  text-zinc-400 pt-32 pb-8 px-16'>
      <div className='max-w-6xl mx-auto text-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {/* Left Column */}
        <div className='py-6'>
          <h2 className='font-medium uppercase font-semibold text-zinc-500 mb-4'>
            Men&#39;s haircuts, precision fades, and beard trims, located in
            West End, Brisbane.
          </h2>
          <h1 className='text-3xl md:text-5xl font-bold text-white mb-6 font-koulen'>
            BRISBANE&#39;S PREMIER BARBER FOR FADES & BEARDS
          </h1>
          <p className='mb-4'>
            Welcome to Faded Az, Brisbane&#39;s go-to barber for precision
            fades, beard trims, and personalised grooming. Located opposite
            Light & Co Appartments on Montague Road in West End, Faded Az
            delivers flawless haircuts and breathtaking beard styling, tailored
            to suit your look and lifestyle.
          </p>
          <p className='mb-4'>
            Specialising in modern fades and beard grooming, Faded Az is more
            than just a barber shop—it&#39;s a place where style meets
            craftsmanship. Whether you need a sharp fade, a beard refresh, or
            both, Faded Az guarantees exceptional service by appointment only.
          </p>
          <p>
            Book now and experience why Storm from Faded Az is the best barber
            in Brisbane. From West End to the greater Brisbane area, we&#39;re
            raising the bar in barbering excellence.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h3 className='mb-4 font-koulen text-3xl tracking-wider'>
            Book Appointment
          </h3>
          <div id='booking' className='bg-white shadow-md p-4 rounded-md'>
            <iframe
              src='https://bookings.gettimely.com/fadedaz/book?uri=https://book.gettimely.com/Booking/Location/258036?mobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'
              title='Booking Widget'
              className='w-full h-screen rounded-md border'
            ></iframe>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6148711712985!2d153.00006848710146!3d-27.481246915237495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915114de5cc48b%3A0x269aca5f2991c41d!2sFaded%20AZ!5e0!3m2!1sen!2sau!4v1733046955553!5m2!1sen!2sau'
          width='100%'
          height='600'
          //   style='border:0;'
          //   //   allowfullscreen=''
          //   loading='lazy'
          //   referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='flex items-center justify-center mt-12'>
        <p>© Faded Az 2024</p>
      </div>
    </section>
  );
};

export default AboutBooking;
