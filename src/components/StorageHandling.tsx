import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';

export default function StorageHandling() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const storageGuidelines = [
    {
      id: 1,
      title: t('storageHandling.guidelines.temperature.title'),
      description: t('storageHandling.guidelines.temperature.description'),
      guidelines: t('storageHandling.guidelines.temperature.items', { returnObjects: true }) as string[],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: t('storageHandling.guidelines.humidity.title'),
      description: t('storageHandling.guidelines.humidity.description'),
      guidelines: t('storageHandling.guidelines.humidity.items', { returnObjects: true }) as string[],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      title: t('storageHandling.guidelines.handling.title'),
      description: t('storageHandling.guidelines.handling.description'),
      guidelines: t('storageHandling.guidelines.handling.items', { returnObjects: true }) as string[],
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const bestPractices = [
    {
      phase: t('storageHandling.bestPractices.phases.receiving.title'),
      practices: t('storageHandling.bestPractices.phases.receiving.practices', { returnObjects: true }) as string[]
    },
    {
      phase: t('storageHandling.bestPractices.phases.storage.title'),
      practices: t('storageHandling.bestPractices.phases.storage.practices', { returnObjects: true }) as string[]
    },
    {
      phase: t('storageHandling.bestPractices.phases.distribution.title'),
      practices: t('storageHandling.bestPractices.phases.distribution.practices', { returnObjects: true }) as string[]
    }
  ];

  const warningPoints = t('storageHandling.warnings.points', { returnObjects: true }) as string[];

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
              {t('storageHandling.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl leading-relaxed md:text-7xl font-light tracking-tight mb-8"
          >
            {t('storageHandling.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('storageHandling.description')}
          </motion.p>
        </motion.div>

        {/* Main Guidelines Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {storageGuidelines.map((guideline, index) => (
            <motion.div
              key={guideline.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
            >
              <Magnet padding={60} magnetStrength={3}>
                <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${guideline.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${guideline.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${guideline.gradient} opacity-10 flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r ${guideline.gradient}"></div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 leading-tight mb-2">
                        {guideline.title}
                      </h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {guideline.description}
                      </p>
                    </div>

                    {/* Guidelines List */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      {guideline.guidelines.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${guideline.gradient} mt-2 flex-shrink-0`}></span>
                          <span className="text-xs text-slate-600 font-light leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${guideline.gradient} opacity-50`}></div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        {/* Best Practices by Phase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900 mb-4">{t('storageHandling.bestPractices.title')}</h3>
            <p className="text-sm text-slate-600 font-light">{t('storageHandling.bestPractices.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((practice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + idx * 0.15 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-10 flex items-center justify-center">
                    <span className="text-sm font-light text-slate-700">{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-light text-slate-900">{practice.phase}</h4>
                </div>
                <div className="space-y-2">
                  {practice.practices.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span className="text-xs text-slate-600 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="relative bg-amber-50 rounded-2xl p-10 border border-amber-200 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-500 to-orange-500"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <h3 className="text-2xl font-light text-slate-900">{t('storageHandling.warnings.title')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {warningPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + idx * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-amber-200"
                >
                  <span className="text-amber-600 text-sm mt-0.5">⚠</span>
                  <span className="text-sm text-slate-700 font-light leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-amber-200">
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                <span className="font-medium text-slate-900">{t('storageHandling.warnings.note')}</span> {t('storageHandling.warnings.noteText')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}