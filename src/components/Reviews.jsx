
import BookingButton from "./Bookingbutton";

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
    <section className="py-16 bg-gray-950 text-white" id="reviews">
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
          <h2 className="font-dmserif font-bold text-xl md:text-5xl text-white mb-4">
          What Our Clients Say
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="flex">
              {renderStars(averageRating)}
            </div>
            <div className="text-lg text-gray-300 ml-2">
              {averageRating.toFixed(1)} out of 5
            </div>
          </div>
          {/* <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Storm for their perfect fade and beard trim
          </p> */}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl hover:border-gray-600 transition-all duration-300 flex flex-col h-full"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-gray-200 mb-4 italic flex-grow">
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
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-100 mb-6">
            Ready to experience Brisbane&apos;s best barber service?
          </p>
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
