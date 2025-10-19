import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CtaSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 py-24 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating banana accents */}
      <div className="absolute top-20 right-20 text-6xl opacity-10 animate-bounce">🍌</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-bounce delay-300">🍌</div>

      <div className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full text-sm font-semibold shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {t('ctaSection.badge')}
        </div>

        {/* Main headline */}
        <h2 className="text-4xl md:text-6xl leading-relaxed font-bold mb-6 bg-gradient-to-r from-yellow-800 via-amber-700 to-yellow-900 bg-clip-text text-transparent px-4">
          {t('ctaSection.mainHeading')}<br />{t('ctaSection.mainHeadingLine2')}
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-amber-900 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('ctaSection.subheading')}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-amber-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <span className="font-semibold">{t('ctaSection.stats.countries')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <span className="font-semibold">{t('ctaSection.stats.quality')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
            <span className="font-semibold">{t('ctaSection.stats.support')}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              {t('ctaSection.buttons.getQuote')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>

          <Link to="/products" className="px-8 py-4 bg-white text-amber-800 border-2 border-amber-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-amber-50 transform hover:-translate-y-1 transition-all duration-300">
            {t('ctaSection.buttons.viewCatalog')}
          </Link>
        </div>

        {/* Trust indicator */}
        <p className="mt-8 text-sm text-amber-700 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {t('ctaSection.trustText')}
        </p>
      </div>
    </section>
  );
}