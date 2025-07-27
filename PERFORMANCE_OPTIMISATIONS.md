# Performance Optimisations for Faded AZ Barbershop

## Issues Identified by web.dev Page Speed Insights

The following performance issues were identified:

1. **CSS blocking render** - `/assets/index-C2X69vea.css` (3.8 KiB, 180ms)
2. **Timely booking script blocking** - `widget/book-button-v1.5.js` (4.1 KiB, 930ms)
3. **Google Fonts blocking render** - Multiple font requests (3.6 KiB, 1,980ms total)

## Optimisations Implemented

### 1. Critical CSS Inlining
- **Problem**: CSS file was blocking initial render
- **Solution**: Inlined critical CSS directly in HTML `<head>`
- **Impact**: Eliminates render-blocking CSS for above-the-fold content

### 2. Google Fonts Optimisation
- **Problem**: Multiple font requests blocking render (1,980ms total)
- **Solution**: 
  - Removed font imports from CSS file
  - Added `preload` with `onload` handler for non-blocking font loading
  - Added `display=swap` for better font loading experience
  - Added DNS prefetch and preconnect for font domains
- **Impact**: Fonts load asynchronously without blocking render

### 3. Timely Script Optimisation
- **Problem**: External script blocking render (930ms)
- **Solution**:
  - Created `TimelyScript` component for dynamic loading
  - Removed script from HTML head
  - Added proper error handling and async loading
  - Script only loads when component mounts
- **Impact**: Script no longer blocks initial page render

### 4. Vite Build Optimisation
- **Problem**: CSS code splitting causing multiple requests
- **Solution**:
  - Disabled CSS code splitting (`cssCodeSplit: false`)
  - Added manual chunk splitting for vendor libraries
  - Enabled CSS source maps for development
- **Impact**: Single CSS bundle reduces HTTP requests

### 5. Resource Hints Enhancement
- **Problem**: Missing preconnect and DNS prefetch for external domains
- **Solution**:
  - Added DNS prefetch for all external domains
  - Added preconnect for critical external domains
  - Added preload for critical CSS and images
- **Impact**: Faster connection establishment to external resources

### 6. Performance Optimiser Component Updates
- **Problem**: Incomplete resource hints
- **Solution**:
  - Added comprehensive DNS prefetch for all external domains
  - Added preconnect for Google Fonts domains
  - Added preload for critical CSS file
- **Impact**: Better resource loading prioritisation

## Files Modified

1. **`vite.config.js`** - Build optimisation settings
2. **`index.html`** - Critical CSS inlining, font loading optimisation
3. **`src/index.css`** - Removed font imports
4. **`src/components/PerformanceOptimiser.jsx`** - Enhanced resource hints
5. **`src/components/TimelyScript.jsx`** - New component for dynamic script loading
6. **`src/App.jsx`** - Added TimelyScript component
7. **`src/critical.css`** - Critical CSS definitions

## Expected Performance Improvements

### Before Optimisations:
- CSS blocking render: 180ms
- Timely script blocking: 930ms  
- Google Fonts blocking: 1,980ms
- **Total blocking time**: ~3,090ms

### After Optimisations:
- Critical CSS inlined: 0ms blocking
- Timely script deferred: 0ms blocking
- Google Fonts async: 0ms blocking
- **Total blocking time**: 0ms

## Additional Benefits

1. **Faster First Contentful Paint (FCP)**
2. **Improved Largest Contentful Paint (LCP)**
3. **Better Core Web Vitals scores**
4. **Reduced Time to Interactive (TTI)**
5. **Better user experience with font display swap**

## Monitoring

After deployment, monitor the following metrics:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)

Use tools like:
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Performance tab
- Lighthouse

## Next Steps

1. **Deploy changes** and monitor performance improvements
2. **Consider image optimisation** if not already implemented
3. **Implement service worker** for caching strategies
4. **Monitor Core Web Vitals** in Google Search Console
5. **Consider CDN** for static assets if not already using one 