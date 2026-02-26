import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";

const Map = () => {
  return (
    <section className='relative mx-auto text-lg min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-fixed' id="map" style={{ backgroundImage: 'url(https://res.cloudinary.com/dixfrcina/image/upload/v1760508014/faded-az-west-end-barber-shop-18_ige9gh.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/60 z-0" aria-hidden="true"></div>
      
      <div className="max-w-2xl mx-auto py-12 px-5 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='font-gloock text-3xl md:text-4xl mb-4 text-white text-center'
        >
          Our Location
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='font-dmserif text-xl sm:text-2xl my-2 space-x-4 flex flex-col justify-center gap-0.5 text-white text-center'
        >
          Faded Az Barber Shop is Located at 314 Montague Rd, West End
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-center text-white mt-4 mb-6'
        >
          <p className='font-semibold text-lg mb-2 tracking-wide uppercase text-zinc-300'>Hours</p>
          <div className='space-y-1 font-dmserif text-lg'>
            <p><span className='text-zinc-300'>Wed – Fri</span>&nbsp;&nbsp;8:00 am – 8:00 pm</p>
            <p><span className='text-zinc-300'>Saturday</span>&nbsp;&nbsp;8:00 am – 2:30 pm</p>
            <p className='text-zinc-400 text-base'>Closed Sun – Tue</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6148711712985!2d153.00006848710146!3d-27.481246915237495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915114de5cc48b%3A0x269aca5f2991c41d!2sFaded%20AZ!5e0!3m2!1sen!2sau!4v1733046955553!5m2!1sen!2sau'
            width='100%'
            height='400'
            title="Faded Az Barber Shop Location - West End, Brisbane"
            loading="lazy"
            className="rounded-lg shadow-xl"
          ></iframe>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='flex flex-col gap-6 items-center justify-between text-white py-8 px-4 relative z-10'
      >
        <h3 className="font-dmserif text-2xl">By Appointment Only. Book Now.</h3>
        <BookingButton />
      </motion.div>
    </section>
  );
};

export default Map; 