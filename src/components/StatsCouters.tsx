import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from './reactBits/CountUp';
import Magnet from './reactBits/Magnet';
import ShinyText from './reactBits/ShinyText';
import GradientText from './reactBits/GradientText';
import { useTranslation } from 'react-i18next';

export default function StatsCounters() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    {
      value: 25,
      suffix: '+',
      label: t('stats.years'),
      description: t('stats.yearsDesc'),
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      accentColor: '#10b981'
    },
    {
      value: 40,
      suffix: '+',
      label: t('stats.countries'),
      description: t('stats.countriesDesc'),
      gradient: 'from-blue-400 via-indigo-400 to-purple-400',
      accentColor: '#6366f1'
    },
    {
      value: 10000,
      suffix: '+',
      label: t('stats.tons'),
      description: t('stats.tonsDesc'),
      gradient: 'from-amber-400 via-orange-400 to-red-400',
      accentColor: '#f59e0b'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Ambient Light Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-amber-500/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <ShinyText 
              text={t('stats.subtitle')} 
              speed={3} 
              className="text-emerald-400/90 text-sm font-medium uppercase tracking-[0.3em] mb-2"
            />
            <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl md:text-7xl leading-relaxed font-light tracking-tight mb-6 px-4"
          >
            {t('stats.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('stats.description')}
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.6 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-full"
            >
              <Magnet padding={60} magnetStrength={3} wrapperClassName="w-full block">
                <div className="group relative cursor-pointer w-full">
                  {/* Card Container */}
                  <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 overflow-hidden h-full min-h-[400px]">
                    {/* Gradient Accent Line - Top */}
                    <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}></div>

                    {/* Content */}
                    <div className="relative text-center space-y-6">
                      {/* Number */}
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-7xl font-extralight text-white tracking-tight tabular-nums">
                          <CountUp
                            from={0}
                            to={stat.value}
                            duration={2.5}
                            direction="up"
                            delay={0.8 + index * 0.1}
                            separator=","
                          />
                        </span>
                        <span className={`text-4xl font-light bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                          {stat.suffix}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center justify-center gap-2 py-2">
                        <div className={`h-[1px] w-8 bg-gradient-to-r ${stat.gradient} opacity-50`}></div>
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${stat.gradient}`}></div>
                        <div className={`h-[1px] w-8 bg-gradient-to-l ${stat.gradient} opacity-50`}></div>
                      </div>

                      {/* Label */}
                      <h3 className="text-xl font-light text-white tracking-wide uppercase">
                        {stat.label}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[240px] mx-auto">
                        {stat.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-20 bg-gradient-to-r ${stat.gradient} transition-all duration-700 rounded-full`}></div>
                  </div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center space-y-8"
        >
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Footnote */}
          <p className="text-slate-500 text-sm font-light max-w-2xl mx-auto leading-relaxed">
            {t('stats.footnote')}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { key: 'sustainable', icon: '●' },
              { key: 'iso', icon: '●' },
              { key: 'logistics', icon: '●' },
              { key: 'quality', icon: '●' }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + idx * 0.08 }}
                className="px-5 py-2 bg-white/[0.02] backdrop-blur-sm rounded-full border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-xs font-light text-slate-400 tracking-wider flex items-center gap-2">
                  <span className="text-emerald-400/60 text-[8px]">{badge.icon}</span>
                  {t(`stats.badges.${badge.key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}