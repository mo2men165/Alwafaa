import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PillNav from './reactBits/PillNav';
import LanguageSwitcher from './LanguageSwitcher';

// Import the logo - you'll need to place your logo in the public folder
const logo = '/logo-nobg.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateHeaderVisibility);
        ticking.current = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items with translations
  const navItems = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.products'), href: '/products' },
    { label: t('navigation.services'), href: '/services' },
    { label: t('navigation.contact'), href: '/contact' }
  ];

  // Al-Wafaa color scheme based on the logo
  const colors = {
    // Blue from the logo hexagon
    primaryBlue: '#1E40AF', // Deep blue
    // Yellow/Gold from bananas and text
    accentYellow: '#F59E0B', // Golden yellow
    // Green from banana leaves
    accentGreen: '#059669', // Fresh green
    // Transparent background with slight blur effect
    transparentBg: 'rgba(255, 255, 255, 0.1)',
    // Semi-transparent white for nav background with white hover text
    navBase: 'rgba(255, 255, 255, 0.05)',
    // White
    white: '#FFFFFF',
    // Dark text
    darkText: '#1F2937'
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 will-change-transform"
      style={{ 
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Language Switcher - positioned separately for better control */}
      <div className="absolute top-4 right-4 z-[1001]">
        <LanguageSwitcher />
      </div>

      {/* Main Navigation */}
      <PillNav
        logo={logo}
        logoAlt={t('app.title')}
        items={navItems}
        activeHref={location.pathname}
        className="backdrop-blur-md"
        ease="power2.easeOut"
        // Al-Wafaa color scheme - now baseColor controls hover text, navBackgroundColor controls background
        baseColor={colors.white}
        navBackgroundColor={colors.transparentBg}
        pillColor={colors.primaryBlue}
        hoveredPillTextColor={colors.accentYellow}
        pillTextColor={colors.white}
        initialLoadAnimation={false}
      />
    </header>
  );
};

export default Header;
