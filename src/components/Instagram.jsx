import { motion } from "motion/react";

const Instagram = () => {
  return (
    <section className='relative min-h-screen flex items-center py-12 bg-cover bg-center bg-no-repeat bg-fixed' style={{ backgroundImage: 'url(https://res.cloudinary.com/dixfrcina/image/upload/v1760508016/faded-az-west-end-barber-shop-22_usnvjd.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/80 transition-colors duration-300" aria-hidden="true"></div>
      
      <div className='max-w-2xl mx-auto px-5 relative'>
        {/* Title and Copy */}
        <div className='text-center mb-8'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='font-dmserif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300'
          >
            Follow Us For Updates
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto transition-colors duration-300'
          >
            Follow us on Instagram to see when appointment slots open up and get the latest on what&apos;s happening at Faded Az. From fresh cuts to behind-the-scenes moments, stay connected with Brisbane&apos;s best barber.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='https://www.instagram.com/faded_azf/' 
            target='_blank' 
            rel='noopener noreferrer'
            className='inline-block mt-4 px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 shadow-lg'
          >
            Follow @faded_azf
          </motion.a>
        </div>

        {/* Instagram Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='max-w-2xl mx-auto'
        >
          <iframe
            id='instagram-embed-0'
            src='https://instagram.com/faded_azf/embed/?cr=1&amp;v=14&amp;wp=2144&amp;rd=https%3A%2F%2Ffadedaz.com.au&amp;rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A122.5%2C%22ls%22%3A54.69999980926514%2C%22le%22%3A83.40000057220459%7D'
            width='100%'
            data-instgrm-payload-id='instagram-media-payload-0'
            scrolling='no'
            className='mb-4 h-[460px] sm:h-[580px] rounded-lg shadow-lg'
            title="Faded Az Instagram Feed"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
