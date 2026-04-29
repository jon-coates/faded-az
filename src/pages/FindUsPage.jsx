import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Map from "../components/Map";

export default function FindUsPage() {
  return (
    <>
      <Helmet>
        <title>Find Us | Faded Az – 314 Montague Rd West End, Brisbane Hours & Location</title>
        <meta
          name="description"
          content="Find Faded Az barber at 314 Montague Rd, West End QLD 4101. Open Wednesday to Friday 8 am – 8 pm. Appointment only. Get directions."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fadedaz.com.au/find-us" />
        <meta property="og:title" content="Find Us | Faded Az Barber – West End, Brisbane" />
        <meta property="og:url" content="https://fadedaz.com.au/find-us" />
        <meta property="og:description" content="314 Montague Rd, West End QLD. Open Wed–Fri 8am–8pm. Appointment only." />
      </Helmet>

      <div className="bg-gray-950 text-white text-center pt-32 pb-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-gloock text-5xl sm:text-7xl tracking-tighter"
        >
          Find Us
        </motion.h1>
      </div>

      <Map />
    </>
  );
}
