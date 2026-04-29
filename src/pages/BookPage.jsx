import { Helmet } from "react-helmet";
import { motion } from "motion/react";

export default function BookPage() {
  return (
    <>
      <Helmet>
        <title>Book a Haircut | Faded Az – West End Barber Brisbane</title>
        <meta
          name="description"
          content="Book your appointment at Faded Az, West End's best barber. Precision fades, beard trims, and men's haircuts in Brisbane. Appointment-only. Book now."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fadedaz.com.au/book" />
        <meta property="og:title" content="Book a Haircut | Faded Az – West End Barber Brisbane" />
        <meta property="og:url" content="https://fadedaz.com.au/book" />
        <meta property="og:description" content="Book your appointment at Faded Az, West End's best barber. Appointment-only." />
      </Helmet>

      <section className="bg-gray-950 pt-24 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-gloock text-4xl sm:text-6xl tracking-tighter mb-3"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300"
          >
            Appointment-only — Wed–Fri, 8 am – 8 pm at 314 Montague Rd, West End.
          </motion.p>
        </div>
      </section>

      <section className="bg-gray-950 pb-12 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://bookings.gettimely.com/fadedaz/book"
            title="Faded Az booking form"
            className="w-full h-[1400px] sm:h-[1200px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
