import { useState } from "react";
import { Helmet } from "react-helmet";
import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What types of haircuts do you do at Faded Az?",
    answer:
      "We're West End's go-to for all men's cuts that actually look good. Fades are our bread and butter, but we also smash out textured crops, modern mullets, buzz cuts, skin fades, beard fades, and whatever's trending. Whether you want a classic clean look or something with more edge, we've got you sorted. We're known for cuts that actually suit your face and lifestyle.",
  },
  {
    question: "Do you do beard trims and styling?",
    answer:
      "Yeah mate, we're not just about the hair up top. Faded Az does proper beard work - trims, line-ups, full styling, the works. We'll get your beard looking as fresh as your cut. We know how to make everything work together so you walk out looking like you've got your life together.",
  },
  {
    question: "Where can I find you guys in West End?",
    answer:
      "We're hidden away on Montague Road, right across from the Light & Co Apartments. Easy enough to get to from anywhere in Brisbane if you know where you're going. Just remember - we're appointment only, so don't just rock up expecting a walk-in.",
  },
  {
    question: "How do I book at Faded Az?",
    answer:
      "Simple - just book an appointment. We don't do walk-ins because we'd rather give you proper time and attention than rush you through. Our slots go pretty quick because, well, we're good at what we do. Don't be that guy who waits until the last minute and then can't get in for weeks.",
  },
  {
    question: "What makes you different from other barbers in Brisbane?",
    answer:
      "We actually care about how you look when you leave. No cookie-cutter cuts here - we do textured crops, modern mullets, fresh fades, and whatever suits your style. We've built our rep on cuts that look good and grow out well. Plus you'll get some decent conversation while we're at it - makes the whole experience better. Quality cuts and good chats.",
  },
  {
    question: "Can I just walk in for a cut?",
    answer:
      "Nah, we're appointment-only. Trust us, it's better this way - no sitting around for hours, no rushed cuts, just proper service when it's your time. Book ahead and you're guaranteed that quality everyone's talking about. We'd rather do fewer cuts properly than heaps of average ones.",
  },
];

const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center px-4 py-12 bg-cover bg-center bg-no-repeat md:bg-fixed" 
      id="faq"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dixfrcina/image/upload/v1760508007/faded-az-west-end-barber-shop-11_h1nndo.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950/40 z-0" aria-hidden="true"></div>
      
      <div className="max-w-2xl w-full mx-auto relative z-10">
        <FAQSchema />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center font-gloock text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-zinc-700 rounded-lg bg-zinc-900/90 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none text-white"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <span className="text-xl flex-shrink-0">{openIndex === idx ? "-" : "+"}</span>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === idx ? "auto" : 0,
                  opacity: openIndex === idx ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  id={`faq-content-${idx}`}
                  className="px-6 pb-6 text-zinc-200"
                >
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <BookingButton />
        </motion.div>
      </div>
    </section>
  );
} 