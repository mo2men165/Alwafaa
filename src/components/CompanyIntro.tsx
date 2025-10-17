import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Particles from './reactBits/Particles';
import ShinyText from './reactBits/ShinyText';
import Magnet from './reactBits/Magnet';
import CountUp from './reactBits/CountUp';
import { useTranslation } from 'react-i18next';

export default function CompanyIntro() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      title: t('intro.feature1.title'),
      desc: t('intro.feature1.desc'),
      gradient: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/20',
      hoverBorder: 'group-hover:border-emerald-500/40'
    },
    {
      title: t('intro.feature2.title'),
      desc: t('intro.feature2.desc'),
      gradient: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'group-hover:border-blue-500/40'
    },
    {
      title: t('intro.feature3.title'),
      desc: t('intro.feature3.desc'),
      gradient: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/20',
      hoverBorder: 'group-hover:border-amber-500/40'
    },
    {
      title: t('intro.feature4.title'),
      desc: t('intro.feature4.desc'),
      gradient: 'from-violet-500 to-purple-600',
      borderColor: 'border-violet-500/20',
      hoverBorder: 'group-hover:border-violet-500/40'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-amber-500/5 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-8">
            <ShinyText 
              text={t('intro.label')} 
              speed={3} 
              className="text-slate-600 text-xs font-medium uppercase tracking-[0.3em]"
            />
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            {t('intro.mainTitle')}
          </GradientText>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('intro.subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column - Logo & Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Logo */}
            <Magnet padding={100} magnetStrength={2}>
              <div className="relative w-full aspect-square cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white rounded-2xl p-12 border border-slate-200 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:border-slate-300">
                  <img
                    src="/logo-nobg.png"
                    alt="Al-Wafaa Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </Magnet>

            {/* Years Badge */}
            <div>
              <div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div>
                
                <div className="text-center space-y-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-6xl font-extralight text-slate-900 tabular-nums">
                      <CountUp
                        from={0}
                        to={25}
                        duration={2.5}
                        direction="up"
                        delay={0.5}
                      />
                    </span>
                    <span className="text-3xl font-light text-emerald-600">+</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-slate-300"></div>
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-slate-300"></div>
                    </div>
                    
                    <h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider">
                      {t('intro.yearsExperience')}
                    </h4>
                    
                    <p className="text-xs text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-100">
                      {t('intro.yearsDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-12"
          >
            {/* Description */}
            <div className="space-y-6">
              <p className="text-2xl font-light text-slate-900 leading-relaxed">
                {t('intro.paragraph1')}
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                {t('intro.paragraph2')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Magnet key={idx} padding={50} magnetStrength={3}>
                  <div className={`group relative bg-white rounded-2xl p-8 border ${feature.borderColor} ${feature.hoverBorder} transition-all duration-500 shadow-sm hover:shadow-lg cursor-pointer overflow-hidden`}>
                    {/* Gradient Line Top */}
                    <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Subtle Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`}></div>

                    <div className="relative space-y-4">
                      {/* Icon Dot */}
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-150 transition-transform duration-500`}></div>
                      
                      <h3 className="text-xl font-light text-slate-900 leading-tight">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-700 rounded-full`}></div>
                  </div>
                </Magnet>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}