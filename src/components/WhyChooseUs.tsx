import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const reasons = [
    {
      id: 1,
      title: t('why.quality.title'),
      shortDesc: t('why.quality.short'),
      fullDesc: t('why.quality.full'),
      gradient: 'from-emerald-500 to-teal-600',
      color: '#10b981',
      features: [
        t('why.quality.feature1'),
        t('why.quality.feature2'),
        t('why.quality.feature3')
      ]
    },
    {
      id: 2,
      title: t('why.freshness.title'),
      shortDesc: t('why.freshness.short'),
      fullDesc: t('why.freshness.full'),
      gradient: 'from-blue-500 to-indigo-600',
      color: '#3b82f6',
      features: [
        t('why.freshness.feature1'),
        t('why.freshness.feature2'),
        t('why.freshness.feature3')
      ]
    },
    {
      id: 3,
      title: t('why.reliability.title'),
      shortDesc: t('why.reliability.short'),
      fullDesc: t('why.reliability.full'),
      gradient: 'from-amber-500 to-orange-600',
      color: '#f59e0b',
      features: [
        t('why.reliability.feature1'),
        t('why.reliability.feature2'),
        t('why.reliability.feature3')
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-amber-500/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
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
            className="inline-block mb-8"
          >
            <span className="text-emerald-400/90 text-xs font-medium uppercase tracking-[0.3em]">
              Excellence in Every Detail
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            {t('why.title')}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('why.description')}
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
            >
              <Magnet padding={60} magnetStrength={3}>
                <div className="relative h-full bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 hover:bg-slate-900/60 overflow-hidden border border-white/5 hover:border-white/10">
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 hover:opacity-[0.03] transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Icon Indicator */}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${reason.gradient}`}></div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-white leading-tight">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {reason.shortDesc}
                    </p>

                    {/* Full Description */}
                    <p className="text-slate-500 text-xs font-light leading-relaxed pt-4 border-t border-white/5">
                      {reason.fullDesc}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 pt-2">
                      {reason.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-400 text-xs font-light"
                        >
                          <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${reason.gradient} mt-1.5 flex-shrink-0`}></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Accent */}
                    <div className={`h-[2px] w-full bg-gradient-to-r ${reason.gradient} rounded-full opacity-50`}></div>
                  </div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'ISO Certified', icon: '●' },
            { label: 'FDA Approved', icon: '●' },
            { label: 'Organic Certified', icon: '●' },
            { label: 'Fair Trade', icon: '●' }
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
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
} 