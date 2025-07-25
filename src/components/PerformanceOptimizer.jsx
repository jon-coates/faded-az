import { Helmet } from "react-helmet";

const PerformanceOptimizer = () => {
  return (
    <Helmet>
      {/* Preload critical resources */}
      <link rel="preload" href="/faded-az-logo.png" as="image" />
      <link rel="preload" href="/herobg.jpg" as="image" />
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//www.google.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//book.gettimely.com" />
      <link rel="dns-prefetch" href="//instagram.com" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://www.google.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://book.gettimely.com" />
      <link rel="preconnect" href="https://instagram.com" />
      
      {/* Resource hints for better performance */}
      <link rel="prefetch" href="https://book.gettimely.com/widget/book-button-v1.5.js" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Performance optimizations */}
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default PerformanceOptimizer; 