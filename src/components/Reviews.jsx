
import BookingButton from "./Bookingbutton";
import { motion } from "motion/react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Simron Gill",
      rating: 5,
      text: "Without a doubt Brisbane's best barber! I've been visiting Storm for almost 5 years. His attention to detail, level of service & care set him apart & he's also a great bloke. If you're looking for a great barber, look no further! Faded Az is the one!",
      date: "2025-08-02",
      display: true
    },
    {
      id: 2,
      author: "Josef",
      rating: 5,
      text: "Been going to Storm for years now. Started with a walk in experience that turned into appointments that are super flexible and often finds time to shuffle to fit in with my schedule. Always consistent with the skin fades and tracks and can confidently say I've never had a bad cut from my guy in almost 3-4 years. Do yourself a favour and get fresh, support a local business and let him show you why he's your go to option for long term haircuts.",
      date: "2024-12-13", // 37 weeks ago
      display: true
    },
    {
      id: 3,
      author: "Jake Evans",
      rating: 5,
      text: "Best haircut and banter in brisbane, go see Storm to make you sexy again",
      date: "2024-12-06", // 38 weeks ago
      display: true
    },
    {
      id: 4,
      author: "Stel",
      rating: 5,
      text: "Best barber, made my partners hair look incredible. Thank you Storm",
      date: "2024-12-01", // 38 weeks ago
      display: true
    },
    {
      id: 5,
      author: "Liam Pahl",
      rating: 5,
      text: "Best barber in Brisbane hands down.",
      date: "2024-11-25", // 42 weeks ago
      display: false
    },
    {
      id: 6,
      author: "Ben Grant",
      rating: 5,
      text: "Best barber in Brisbane hands down. Storm had a great attention to detail in his haircuts. You won't find a better service!",
      date: "2024-07-28", // Specific date mentioned
      display: true
    },
    {
      id: 7,
      author: "Jon Coates",
      rating: 5,
      text: "Storm does a great fade & beard trim, and is always up for a great chat. I have been getting cuts by him for years now across different barber shops and it's great to have him back in West End – in his own shop finally!",
      date: "2024-07-25", // Specific date mentioned
      display: true
    },
    {
      id: 8,
      author: "Hamish Caulfield",
      rating: 5,
      text: "I've been getting my hair cut by Storm for the past six years, and he never misses. Always delivers a clean, fresh fade and the chats are just as good. Storm's a vibe and a half - couldn't recommend him more.",
      date: "2025-12-26",
      display: true
    },
    {
      id: 9,
      author: "Bréhan De Gouvello",
      rating: 5,
      text: "Storm is an absolute legend. He gave me an amazing hair and beard cut, and it was my first time at Faded Az, but it genuinely felt like I'd been going there forever. Great cut, great experience, and super attentive to detail. 100% recommend.",
      date: "2026-02-05",
      display: true
    }
  ];

  // Filter reviews to only show those with display: true
  const visibleReviews = reviews.filter(review => review.display);
  const averageRating = visibleReviews.reduce((acc, review) => acc + review.rating, 0) / visibleReviews.length;

  // Generate star rating display
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center py-16 text-white" id="reviews">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/95 z-0" aria-hidden="true"></div>
      
      <div className="relative w-full z-10">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Faded AZ Barbershop",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "reviewCount": visibleReviews.length,
              "bestRating": 5,
              "worstRating": 1
            },
            "review": visibleReviews.map(review => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": 5,
                "worstRating": 1
              },
              "author": {
                "@type": "Person",
                "name": review.author
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-dmserif"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-2 mb-4"
          >
            <div className="flex">
              {renderStars(averageRating)}
            </div>
            <div className="text-lg text-gray-300 ml-2">
              {averageRating.toFixed(1)} out of 5
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl hover:border-gray-600 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-gray-200 mb-4 flex-grow">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              
              {/* Author and Date */}
              <div className="flex items-center justify-between mt-auto">
                <cite className="not-italic font-semibold text-white">
                  {review.author}
                </cite>
                <time className="text-sm text-gray-400" dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString('en-AU', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-100 mb-6">
            Ready to experience Brisbane&apos;s best barber service?
          </p>
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Reviews;
