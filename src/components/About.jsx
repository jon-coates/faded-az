const AboutBooking = () => {
  return (
    <section className='bg-black mx-auto text-lg' id="about">
      <div className="sm:py-24 px-6 py-9 max-w-xl mx-auto">
          <h1 className='font-medium uppercase text-zinc-400 mb-6 text-base tracking-wider'>
            Men&#39;s haircuts • Precision Fades • Beard Trimming
          </h1>
      <div className="flex flex-row justify-center gap-4 mb-8">
      <img src="/favicon-32x32.png" className="w-8 h-8" alt="Faded Az Barber Shop Icon"/>
        <div className="max-w-xl bg-zinc-900 p-6 round rounded-xl shadow-lg">
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4 font-dmserif'>
            Yo man, I heard you were looking like shit.
          </h2>
          <p className='mb-8 font-bold text-2xl sm:text-3xl text-white font-dmserif'>
            Don&#39;t worry, I got you.
          </p>
          <p className='mb-4'>
            Book in to Faded Az and leave looking like a million bucks.
          </p>
          <p className='mb-4'>
            Find me in West End, Brisbane - opposite Light & Co Apartments on
            Montague Road - delivering flawless fades and badass beard styling
            that will have you feeling unstoppable.
          </p>
          <p className='mb-4'>
            Faded Az is appointment only – and they can fill up quick — so why are
            you still reading this!? Go book your appointment now before they are
            all gone.
          </p>
          <p className='font-bold font-dmserif text-2xl'>Catch ya!</p>
        </div>
        </div>
          {/* <div className="flex justify-center">
            <BookingButton />
          </div> */}
        </div>
    </section>
  );
};

export default AboutBooking;
