import { useState } from "react";
import BookingButton from "./Bookingbutton";

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
      "We're on Montague Road, right opposite the Light & Co Apartments. Can't miss us. West End's a sick location and we're right in the heart of it all. Easy to get to whether you're local or coming from anywhere else in Brisbane. Just remember - we're appointment only, so don't just rock up expecting a walk-in.",
  },
  {
    question: "How do I book at Faded Az?",
    answer:
      "Simple - just book an appointment. We don't do walk-ins because we'd rather give you proper time and attention than rush you through. Our slots go pretty quick because, well, we're good at what we do. Don't be that guy who waits until the last minute and then can't get in for weeks.",
  },
  {
    question: "What makes you different from other barbers in Brisbane?",
    answer:
      "We actually care about how you look when you leave. No cookie-cutter cuts here - we do textured crops, modern mullets, fresh fades, and whatever suits your vibe. We've built our rep on cuts that look good and grow out well. Plus we're not gonna chat your ear off unless you want us to. Just quality work and good vibes.",
  },
  {
    question: "Can I just walk in for a cut?",
    answer:
      "Nah, we're appointment-only. Trust us, it's better this way - no sitting around for hours, no rushed cuts, just proper service when it's your time. Book ahead and you're guaranteed that quality everyone's talking about. We'd rather do fewer cuts properly than heaps of average ones.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-2xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-dmserif text-black dark:text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden bg-white/80 dark:bg-zinc-900/80 shadow">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none focus:bg-zinc-100 dark:focus:bg-zinc-800 transition"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-content-${idx}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-xl">{openIndex === idx ? "-" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div
                id={`faq-content-${idx}`}
                className="px-6 pb-6 text-zinc-700 dark:text-zinc-200 animate-fadein"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <BookingButton />
      </div>
    </section>
  );
} 