import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import About from "../components/About";
import BookingButton from "../components/Bookingbutton";

const SERVICES = [
  { name: "Men's Haircuts",          desc: "Classic cuts tailored to your face and lifestyle." },
  { name: "Precision Fades",         desc: "Clean, sharp fades that grow out well." },
  { name: "Skin Fades",              desc: "Razor-sharp skin fades, done properly." },
  { name: "Beard Trimming & Styling",desc: "Trims, line-ups, and full beard shaping." },
  { name: "Textured Crops",          desc: "Modern textured cuts with movement and character." },
  { name: "Modern Mullets",          desc: "Contemporary takes on a classic style." },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Faded Az – Fades, Haircuts & Beard Trims in West End Brisbane</title>
        <meta
          name="description"
          content="Faded Az offers men's haircuts, precision fades, skin fades, beard trims, textured crops and modern mullets. Brisbane's best barber in West End."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fadedaz.com.au/services" />
        <meta property="og:title" content="Services | Faded Az – Fades, Haircuts & Beard Trims" />
        <meta property="og:url" content="https://fadedaz.com.au/services" />
        <meta property="og:description" content="Men's haircuts, precision fades, skin fades, beard trims and more. West End's best barber." />
      </Helmet>

      <div className="bg-gray-950 text-white text-center pt-32 pb-8 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-gloock text-5xl sm:text-7xl tracking-tighter mb-3"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-lg max-w-xl mx-auto"
        >
          Everything we offer at Faded Az, West End Brisbane.
        </motion.p>
      </div>

      <section className="bg-gray-950 pb-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6"
            >
              <h2 className="text-white font-semibold text-lg mb-2">{s.name}</h2>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <About />

      <div className="bg-gray-950 text-white text-center py-12">
        <p className="text-lg text-gray-300 mb-6">Ready to book your next cut?</p>
        <BookingButton />
      </div>
    </>
  );
}
