import { Helmet } from "react-helmet";

const PerformanceOptimizer = () => {
  return (
    <Helmet>
      {/* Preload critical resources */}
      <link rel="preload" href="/faded-az-logo.png" as="image" />

      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//instagram.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://instagram.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

      {/* Performance optimisations */}
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default PerformanceOptimizer; 