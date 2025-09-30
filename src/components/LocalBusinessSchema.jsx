import { Helmet } from "react-helmet";

const LocalBusinessSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Faded Az",
    "description": "Brisbane's premier barber shop specialising in flawless fades, breathtaking beards, and conscious conversation. Located in West End, Brisbane.",
    "url": "https://fadedaz.com.au",
    "telephone": "+61-7-1234-5678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "314 Montague Rd",
      "addressLocality": "West End",
      "addressRegion": "QLD",
      "postalCode": "4101",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.481246915237495,
      "longitude": 153.00006848710146
    },
    "openingHours": "Th-Fr 08:00-20:00, Sa 08:00-14:30",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": "Brisbane, West End, South East Queensland",
    "serviceType": ["Men's Haircuts", "Beard Trimming", "Fades", "Hair Styling"],
    "image": "https://fadedaz.com.au/faded-az-logo.png",
    "sameAs": [
      "https://www.instagram.com/faded_azf/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Barber Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Men's Haircut",
            "description": "Professional men's haircut including consultation and styling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beard Trim",
            "description": "Professional beard trimming and styling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fade Haircut",
            "description": "Precision fade haircuts including skin fades and beard fades"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema; 