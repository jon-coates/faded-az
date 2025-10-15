import { motion } from "motion/react";

const AboutBooking = () => {
  return (
    <section className='relative mx-auto text-lg min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-fixed' id="about" style={{ backgroundImage: 'url(https://res.cloudinary.com/dixfrcina/image/upload/v1760508003/faded-az-west-end-barber-shop-4_lmuibw.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/80 transition-colors duration-300" aria-hidden="true"></div>
      
      <div className="sm:pt-24 px-6 py-6 max-w-xl mx-auto relative">

        
        <div className="flex flex-row justify-center gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm p-12 round rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300"
            >
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='font-medium text-zinc-600 dark:text-zinc-400 mb-6 text-sm transition-colors duration-300'
            >
            Men&#39;s haircuts, Precision Fades, Beard Trimming
          </motion.h2>
            <h3 className='text-3xl md:text-4xl  text-gray-900 dark:text-white mb-4 font-gloock transition-colors duration-300'>
              A West End Barber Shop with Style & Soul
            </h3>
            <p className='mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300'>
              Step into Faded Az and you&apos;ll find more than a quick cut. We take our time, focus on the details, and make sure you leave looking sharp and feeling confident.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300'>
              From precision fades to tailored beard trims, it&apos;s about craftsmanship, conversation, and a space where you can slow down for a moment.
            </p>
            <p className='mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300'>
              Appointments are essential — <a href="https://bookings.gettimely.com/fadedaz/book" className="underline decoration-red-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">book ahead</a> and secure your spot.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBooking;
