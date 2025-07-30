const Instagram = () => {
  return (
    <section className='bg-zinc-950 py-12'>
      <div className='max-w-2xl mx-auto px-5'>
        {/* Title and Copy */}
        <div className='text-center mb-8'>
          <h2 className='font-dmserif text-3xl md:text-4xl font-bold text-white mb-4'>
            Follow Us For Updates
          </h2>
          <p className='text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto'>
            Follow us on Instagram to see when appointment slots open up and get the latest on what&apos;s happening at Faded Az. From fresh cuts to behind-the-scenes moments, stay connected with Brisbane&apos;s best barber.
          </p>
          <a 
            href='https://www.instagram.com/faded_azf/' 
            target='_blank' 
            rel='noopener noreferrer'
            className='inline-block mt-4 px-6 py-3 bg-black text-white hover:text-zinc-100 font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200'
          >
            Follow @faded_azf
          </a>
        </div>

        {/* Instagram Feed */}
        <div className='max-w-2xl mx-auto'>
          <iframe
            id='instagram-embed-0'
            src='https://instagram.com/faded_azf/embed/?cr=1&amp;v=14&amp;wp=2144&amp;rd=https%3A%2F%2Ffadedaz.com.au&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A122.5%2C%22ls%22%3A54.69999980926514%2C%22le%22%3A83.40000057220459%7D'
            width='100%'
            data-instgrm-payload-id='instagram-media-payload-0'
            scrolling='no'
            className='mb-4 h-[460px] sm:h-[580px] rounded-lg shadow-lg'
            title="Faded Az Instagram Feed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
