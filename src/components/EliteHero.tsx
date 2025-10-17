import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const EliteHero = () => {
    const { t } = useTranslation();
    const { isRTL } = useLanguage();

    return (
      <section className="relative w-full pt-10 min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(244,208,63,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.4)_70%,rgba(10,10,10,0.8)_100%)] pointer-events-none"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[2px] h-[2px] rounded-full bg-[#d4af37] opacity-60 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-[3px] h-[3px] rounded-full bg-[#f4d03f] opacity-40 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-[2px] h-[2px] rounded-full bg-[#d4af37] opacity-50 animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-[2px] h-[2px] rounded-full bg-[#f4d03f] opacity-45 animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '2s' }}></div>
        </div>
  
        {/* Main content container */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center justify-center pt-10">
          <div className="max-w-6xl w-full text-center">
            
            {/* Top accent line */}
            <div className="relative w-32 h-[2px] mb-16 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent blur-xl"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f4d03f] blur-md opacity-80"></div>
            </div>
  
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#fdfcfa] mb-6 leading-tight tracking-tight [text-shadow:0_0_60px_rgba(212,175,55,0.2),0_0_120px_rgba(212,175,55,0.1)]">
              {t('eliteHero.mainHeading')}
            </h1>
  
            {/* Subheading with shimmer effect */}
            <div className="relative inline-block mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-[#e8c547] tracking-[0.05em] relative">
                <span className="relative inline-block bg-gradient-to-r leading-relaxed from-[#e8c547] via-[#ffeb78] to-[#e8c547] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                  {t('eliteHero.subHeading')}
                </span>
              </h2>
            </div>
  
            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              {t('eliteHero.description')} 
              <span className="text-gray-500"> {t('eliteHero.descriptionSuffix')}</span>
            </p>
  
            {/* CTA section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              {/* Primary CTA button */}
              <button className="group relative px-10 py-4 bg-transparent border-2 border-[#e8c547] text-white font-semibold text-base tracking-[0.08em] uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#ffeb78] hover:shadow-[0_0_40px_rgba(232,197,71,0.4)] active:scale-100">
                <span className="relative z-10">{t('eliteHero.cta')}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-[#e8c547]/0 via-[#e8c547]/20 to-[#e8c547]/0 ${isRTL ? 'translate-x-[100%] group-hover:translate-x-[-100%]' : 'translate-x-[-100%] group-hover:translate-x-[100%]'} transition-transform duration-1000`}></div>
              </button>
            </div>
  
            {/* Bottom accent line */}
            <div className="relative w-56 h-[2px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]  to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent blur-xl opacity-50"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#f4d03f] blur-md opacity-80"></div>
            </div>
  
            {/* Decorative corner elements */}
            <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#d4af37]/30"></div>
            <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#d4af37]/30"></div>
            <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-[#d4af37]/30"></div>
            <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-[#d4af37]/30"></div>
          </div>
        </div>
  
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none"></div>
  
        {/* Scanline texture overlay */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none opacity-20"></div>
      </section>
    );
  };
  
  export default EliteHero;