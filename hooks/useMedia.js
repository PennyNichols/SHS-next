import { useState, useEffect } from 'react';

/**
 * A custom hook to determine the current screen size and provide boolean flags for breakpoints.
 *
 * Breakpoints:
 * - mobile: 0-600px
 * - smallTablet: 601-900px
 * - largeTablet: 901-1200px
 * - desktop: 1201-1536px
 * - largeDesktop: 1537px and up
 *
 * @returns {object} An object with boolean flags for each breakpoint and the current screen size.
 * - `isMobile`: `true` if the screen width is 0-600px.
 * - `isSmallTablet`: `true` if the screen width is 601-900px.
 * - `isLargeTablet`: `true` if the screen width is 901-1200px.
 * - `isDesktop`: `true` if the screen width is 1201-1536px.
 * - `isLargeDesktop`: `true` if the screen width is 1537px and up.
 * - `screenSize`: A string representing the current screen size:
 *    ('mobile', 'smallTablet', 'largeTablet', 'desktop', 'largeDesktop').
 *
 * @example
 * import React from 'react';
 * import useMedia from '../../hooks/useMedia';
 *
 * const ResponsiveComponent = () => {
 *   const { isMobile, isDesktop, screenSize } = useMedia();
 *
 *   return (
 *     <div>
 *       {isMobile && <p>This is a mobile view.</p>}
 *       {screenSize === 'smallTablet' && <p>This is a small tablet view.</p>}
 *       {screenSize === 'largeTablet' && <p>This is a large tablet view.</p>}
 *       {isDesktop && <p>This is a desktop view.</p>}
 *       {screenSize === 'largeDesktop' && <p>This is a large desktop view.</p>}
 *     </div>
 *   );
 * };
 *
 * export default ResponsiveComponent;
 */
const breakpoints = {
  mobile: '(max-width: 600px)',
  smallTablet: '(min-width: 601px) and (max-width: 900px)',
  largeTablet: '(min-width: 901px) and (max-width: 1200px)',
  desktop: '(min-width: 1201px) and (max-width: 1536px)',
  largeDesktop: '(min-width: 1537px)',
};

const useMedia = () => {
  const [screenSize, setScreenSize] = useState('mobile');
  const [breakpointFlags, setBreakpointFlags] = useState({
    isMobile: false,
    isSmallTablet: false,
    isLargeTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  });

  useEffect(() => {
    const mediaQueryLists = Object.keys(breakpoints).map((key) => ({
      key,
      mql: window.matchMedia(breakpoints[key]),
    }));

    const getActiveScreenSize = () => {
      const activeBreakpoint = mediaQueryLists.find(({ mql }) => mql.matches);
      return activeBreakpoint ? activeBreakpoint.key : 'mobile';
    };

    const updateFlags = () => {
      const activeScreenSize = getActiveScreenSize();
      setScreenSize(activeScreenSize);
      setBreakpointFlags({
        isMobile: activeScreenSize === 'mobile',
        isSmallTablet: activeScreenSize === 'smallTablet',
        isLargeTablet: activeScreenSize === 'largeTablet',
        isDesktop: activeScreenSize === 'desktop',
        isLargeDesktop: activeScreenSize === 'largeDesktop',
      });
    };

    // Set the initial screen size and flags
    updateFlags();

    // Add listeners for changes
    mediaQueryLists.forEach(({ mql }) => mql.addEventListener('change', updateFlags));

    // Cleanup listeners on unmount
    return () => {
      mediaQueryLists.forEach(({ mql }) => mql.removeEventListener('change', updateFlags));
    };
  }, []);

  return { ...breakpointFlags, screenSize };
};

export default useMedia;
