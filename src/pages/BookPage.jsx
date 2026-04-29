import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import BookingButton from "../components/Bookingbutton";

const BG_DESKTOP = "https://res.cloudinary.com/dixfrcina/image/upload/w_1080,h_720,c_fill,g_auto,q_auto,f_auto/v1758201585/faded-az-west-end-barber-internal-02_onkvts";
const BG_MOBILE  = "https://res.cloudinary.com/dixfrcina/image/upload/w_768,h_1024,c_fill,g_east,q_auto,f_auto/v1760508006/faded-az-west-end-barber-shop-7_pjsanj";

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

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background images — desktop / mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: `url(${BG_DESKTOP})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: `url(${BG_MOBILE})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-950/75" aria-hidden="true" />

        <div className="relative z-10 text-center text-white px-6 max-w-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-gloock text-5xl sm:text-7xl tracking-tighter mb-4"
          >
            Book Your Appointment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-200 mb-8"
          >
            Faded Az is appointment-only — slots fill fast. We're open
            Wednesday to Friday, 8 am – 8 pm at 314 Montague Rd, West End.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <BookingButton />
          </motion.div>
        </div>
      </section>
    </>
  );
}
