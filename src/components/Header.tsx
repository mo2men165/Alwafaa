import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import PillNav from './reactBits/PillNav';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

// Import the logo - you'll need to place your logo in the public folder
const logo = '/logo-nobg.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [closeMobileMenu, setCloseMobileMenu] = useState(false);
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
        // Close mobile menu when header hides
        setCloseMobileMenu(true);
        setTimeout(() => setCloseMobileMenu(false), 100);
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

  // Close mobile menu when navigating to a different page
  useEffect(() => {
    setCloseMobileMenu(true);
    setTimeout(() => setCloseMobileMenu(false), 100);
  }, [location.pathname]);

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

  // Language options
  const languages = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'ar', name: 'العربية', flag: 'AR' }
  ];

  // Handle language change
  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
    // Close mobile menu after language change
    setCloseMobileMenu(true);
    setTimeout(() => setCloseMobileMenu(false), 100);
  };

  // Mobile menu language switcher
  const mobileLanguageSwitcher = (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold px-2" style={{ color: colors.white }}>
        <Globe className="w-4 h-4" />
        <span>{t('navigation.language')}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: language === lang.code ? colors.accentYellow : colors.primaryBlue,
              color: colors.white,
              fontWeight: language === lang.code ? '600' : '500',
              fontSize: '14px',
              boxShadow: language === lang.code ? '0 2px 8px rgba(245, 158, 11, 0.3)' : 'none'
            }}
          >
            <span className="text-xs font-bold px-1.5 py-0.5 rounded" 
              style={{ 
                background: language === lang.code ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
              }}>
              {lang.flag}
            </span>
            <span className="flex-1 text-left">{lang.name}</span>
            {language === lang.code && (
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );

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
      {/* Language Switcher - Desktop only (mobile has it in the menu) */}
      <div className="hidden md:block absolute top-4 right-4 z-[1001]">
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
        mobileMenuFooter={mobileLanguageSwitcher}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
};

export default Header;
