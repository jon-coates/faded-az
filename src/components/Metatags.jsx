import { Helmet } from "react-helmet";
import ogimg from "../assets/og-image.png";

const MetaTags = () => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <title>Faded Az - Brisbane’s Premier Barber</title>
      <meta
        name='description'
        content="Experience breathtaking beards, flawless fades, and conscious conversation at Faded Az, Brisbane's go-to barber."
      />
      <meta
        name='keywords'
        content='Barber, Beards, Fades, Brisbane, Haircuts'
      />
      <meta name='author' content='Faded Az' />

      {/* Open Graph (OG) Tags */}
      <meta
        property='og:title'
        content='Faded Az - Brisbane’s Premier Barber'
      />
      <meta
        property='og:description'
        content='Breathtaking beards, flawless fades, and conscious conversation. Located in West End, Brisbane.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://fadedaz.com.au' />
      <meta property='og:image' content={ogimg} />
      <meta property='og:site_name' content='Faded Az' />

      {/* Twitter Card Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content='Faded Az - Brisbane’s Premier Barber'
      />
      <meta
        name='twitter:description'
        content='Breathtaking beards, flawless fades, and conscious conversation. Visit us in Brisbane.'
      />
      <meta name='twitter:image' content={ogimg} />
      <meta name='twitter:site' content='@FadedAz' />

      {/* Favicons */}
      {/* <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" /> */}

      {/* Viewport */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      {/* Robots */}
      <meta name='robots' content='index, follow' />
    </Helmet>
  );
};

export default MetaTags;
