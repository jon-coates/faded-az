const AboutBooking = () => {
  return (
    <section className='bg-gray-950 mx-auto text-lg' id="about">
      <div className="sm:pt-24 px-6 py-9 max-w-xl mx-auto">
          <h2 className='font-medium text-zinc-400 mb-6 text-xs text-center'>
            Men&#39;s haircuts, Precision Fades, Beard Trimming
          </h2>
      <div className="flex flex-row justify-center gap-4 mb-8">
      {/* <img src="/favicon-32x32.png" className="w-8 h-8" alt="Faded Az Barber Shop Icon"/> */}
        <div className="max-w-xl bg-gray-900 p-6 round rounded-xl shadow-lg">
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4 font-dmserif'>
            A West End Barber Shop with Style & Soul
          </h2>
          {/* <p className='mb-8 font-bold text-2xl sm:text-3xl text-white font-dmserif'>
            Don&#39;t worry, I got you.
          </p> */}
          <p className='mb-4'>
            Step into Faded Az and you&apos;ll find more than a quick cut. We take our time, focus on the details, and make sure you leave looking sharp and feeling confident.
          </p>
          <p className='mb-4'>
            From precision fades to tailored beard trims, it&apos;s about craftsmanship, conversation, and a space where you can slow down for a moment.
          </p>
          <p className='mb-4'>
            Appointments are essential — book ahead and secure your spot.
          </p>
          {/* <p className='font-bold font-dmserif text-2xl'>Catch ya!</p> */}
        </div>
          {/* <div className="flex justify-center">
            <BookingButton />
          </div> */}
        </div>
        </div>
    </section>
  );
};

export default AboutBooking;
