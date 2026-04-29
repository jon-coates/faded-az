import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import Reviews from "../components/Reviews";

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | Faded Az – Brisbane's Best Barber West End</title>
        <meta
          name="description"
          content="See what clients say about Faded Az barber in West End, Brisbane. 5-star reviews for fades, haircuts and beard trims. Book your appointment today."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fadedaz.com.au/reviews" />
        <meta property="og:title" content="Customer Reviews | Faded Az Barber Brisbane" />
        <meta property="og:url" content="https://fadedaz.com.au/reviews" />
        <meta property="og:description" content="5-star reviews from real clients of Faded Az, West End's best barber." />
      </Helmet>

      <div className="bg-gray-950 text-white text-center pt-32 pb-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-gloock text-5xl sm:text-7xl tracking-tighter"
        >
          What Our Clients Say
        </motion.h1>
      </div>

      <Reviews />
    </>
  );
}
