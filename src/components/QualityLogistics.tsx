import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import GradientText from './reactBits/GradientText';
import { 
  ShieldCheck, 
  Thermometer, 
  Camera, 
  Microscope,
  TruckIcon,
  MapPinned,
  Snowflake,
  BarChart3
} from 'lucide-react';

export default function QualityLogistics() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-[120px]"></div>

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
              {t('qualityLogistics.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('qualityLogistics.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('qualityLogistics.description')}
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Quality Control */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white">
                  {t('qualityLogistics.quality.title')}
                </h3>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed">
                {t('qualityLogistics.quality.description')}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Camera, labelKey: 'visual' },
                  { icon: Microscope, labelKey: 'lab' },
                  { icon: BarChart3, labelKey: 'monitoring' },
                  { icon: ShieldCheck, labelKey: 'certification' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.labelKey}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-600/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-light mb-1">
                        {t(`qualityLogistics.quality.methods.${item.labelKey}.title`)}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {t(`qualityLogistics.quality.methods.${item.labelKey}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cold Chain Logistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white">
                  {t('qualityLogistics.coldChain.title')}
                </h3>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed">
                {t('qualityLogistics.coldChain.description')}
              </p>

              <div className="space-y-4">
                {[
                  { icon: Thermometer, labelKey: 'temperature' },
                  { icon: TruckIcon, labelKey: 'transport' },
                  { icon: MapPinned, labelKey: 'tracking' },
                  { icon: Snowflake, labelKey: 'storage' },
                ].map((item, idx) => (
                  <motion.div
                    key={item.labelKey}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-600/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-light mb-1">
                        {t(`qualityLogistics.coldChain.methods.${item.labelKey}.title`)}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {t(`qualityLogistics.coldChain.methods.${item.labelKey}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-12 border border-white/5"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { valueKey: 'stat1Value', labelKey: 'stat1Label' },
              { valueKey: 'stat2Value', labelKey: 'stat2Label' },
              { valueKey: 'stat3Value', labelKey: 'stat3Label' },
              { valueKey: 'stat4Value', labelKey: 'stat4Label' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.valueKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-extralight text-white mb-2 tabular-nums">
                  {t(`qualityLogistics.stats.${stat.valueKey}`)}
                </div>
                <div className="text-xs text-slate-500 font-light uppercase tracking-wider">
                  {t(`qualityLogistics.stats.${stat.labelKey}`)}
                </div>
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

