import { Helmet } from "react-helmet";

const MetaTags = () => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>Faded Az - Brisbane&#39;s Premier Barber West End Haircuts &amp; Beard Trimming</title>
      <meta
        name='description'
        content="Experience breathtaking beards, flawless fades, and conscious conversation at Faded Az, Brisbane's go-to barber in West End. Book your appointment today for premium men's haircuts and beard styling."
      />
      <meta
        name='keywords'
        content='Barber Brisbane, Men Haircuts West End, Beard Trimming Brisbane, Fades Brisbane, Hair Styling Brisbane, West End Barber, Brisbane Barber Shop, Professional Haircuts, Beard Styling, Skin Fades, Textured Crops, Modern Mullets'
      />
      <meta name='author' content='Faded Az' />
      <meta name='language' content='en-AU' />
      <meta name='geo.region' content='AU-QLD' />
      <meta name='geo.placename' content='Brisbane' />
      <meta name='geo.position' content='-27.481246915237495;153.00006848710146' />
      <meta name='ICBM' content='-27.481246915237495, 153.00006848710146' />

      {/* Open Graph (OG) Tags */}
      <meta
        property='og:title'
        content='Faded Az - Brisbane&#39;s Premier Barber - West End Haircuts &amp; Beard Trimming'
      />
      <meta
        property='og:description'
        content='Breathtaking beards, flawless fades, and conscious conversation. Located in West End, Brisbane. Book your appointment for premium men&#39;s haircuts and beard styling'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://fadedaz.com.au' />
      <meta property='og:image' content='https://fadedaz.com.au/ogimage.png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:site_name' content='Faded Az' />
      <meta property='og:locale' content='en_AU' />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Faded Az - Brisbane&#39;s Premier Barber | West End Haircuts &amp; Beard Trimming'
      />
      <meta
        name='twitter:description'
        content='Breathtaking beards, flawless fades, and conscious conversation. Visit us in Brisbane for premium men&#39;s haircuts and beard styling.'
      />
      <meta name='twitter:image' content='https://fadedaz.com.au/ogimage.png' />
      <meta name='twitter:site' content='@FadedAz' />
      <meta name='twitter:creator' content='@FadedAz' />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Viewport */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* Robots */}
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

      {/* Canonical URL */}
      <link rel="canonical" href="https://fadedaz.com.au" />

      {/* Structured data (LocalBusiness/BarberShop) is provided site-wide by
          LocalBusinessSchema.jsx, mounted in App.jsx */}
    </Helmet>
  );
};

export default MetaTags;
