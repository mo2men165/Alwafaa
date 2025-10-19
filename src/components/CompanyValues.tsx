import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';

export default function CompanyValues() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      id: 1,
      title: t('companyValues.values.quality.title'),
      description: t('companyValues.values.quality.description'),
      details: t('companyValues.values.quality.details', { returnObjects: true }) as string[],
      gradient: 'from-emerald-500 to-teal-600',
      accentColor: '#10b981'
    },
    {
      id: 2,
      title: t('companyValues.values.sustainability.title'),
      description: t('companyValues.values.sustainability.description'),
      details: t('companyValues.values.sustainability.details', { returnObjects: true }) as string[],
      gradient: 'from-blue-500 to-indigo-600',
      accentColor: '#3b82f6'
    },
    {
      id: 3,
      title: t('companyValues.values.customerSatisfaction.title'),
      description: t('companyValues.values.customerSatisfaction.description'),
      details: t('companyValues.values.customerSatisfaction.details', { returnObjects: true }) as string[],
      gradient: 'from-amber-500 to-orange-600',
      accentColor: '#f59e0b'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-amber-500/5 rounded-full blur-[150px]"></div>

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
            <span className="text-slate-600 text-xs font-medium uppercase tracking-[0.3em]">
              {t('companyValues.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('companyValues.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('companyValues.description')}
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
            >
              <Magnet padding={60} magnetStrength={3}>
                <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group" style={{ borderColor: `${value.accentColor}20` }}>
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transition-opacity duration-500`}></div>

                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Number Indicator */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
                        {/* Background layer with opacity */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${value.gradient} opacity-20`}></div>
                        {/* Icon at full opacity */}
                        <span className="relative z-10 text-2xl group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out inline-block">
                          🍌
                        </span>
                      </div>
                      <div className={`h-[1px] flex-1 bg-gradient-to-r ${value.gradient} opacity-30`}></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-slate-900 leading-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {value.description}
                    </p>

                    {/* Details List */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      {value.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.gradient} mt-2 flex-shrink-0`}></span>
                          <span className="text-xs text-slate-600 font-light leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient}`}></div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            </div>
            
            <p className="text-xl text-slate-700 font-light italic leading-relaxed">
              "{t('companyValues.quote')}"
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}