import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';

export default function Certifications() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      id: 1,
      name: t('certifications.certs.iso9001.name'),
      category: t('certifications.certs.iso9001.category'),
      description: t('certifications.certs.iso9001.description'),
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      name: t('certifications.certs.iso22000.name'),
      category: t('certifications.certs.iso22000.category'),
      description: t('certifications.certs.iso22000.description'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      name: t('certifications.certs.haccp.name'),
      category: t('certifications.certs.haccp.category'),
      description: t('certifications.certs.haccp.description'),
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 4,
      name: t('certifications.certs.globalGap.name'),
      category: t('certifications.certs.globalGap.category'),
      description: t('certifications.certs.globalGap.description'),
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 5,
      name: t('certifications.certs.organic.name'),
      category: t('certifications.certs.organic.category'),
      description: t('certifications.certs.organic.description'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 6,
      name: t('certifications.certs.fairTrade.name'),
      category: t('certifications.certs.fairTrade.category'),
      description: t('certifications.certs.fairTrade.description'),
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  const standards = t('certifications.qualityStandards.standards', { returnObjects: true }) as string[];

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
              {t('certifications.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl leading-relaxed md:text-7xl font-light tracking-tight mb-8"
          >
            {t('certifications.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('certifications.description')}
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
            >
              <Magnet padding={50} magnetStrength={2}>
                <div className="relative h-full bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden group">
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Logo Placeholder */}
                    <div className="w-full aspect-video bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.gradient} opacity-20 flex items-center justify-center`}>
                        <span className="text-3xl text-white/40">✓</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${cert.gradient} bg-opacity-10`}>
                      <span className={`text-xs font-medium bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-light text-white">
                      {cert.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        {/* Quality Standards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-12 border border-white/5 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500"></div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Title */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-emerald-400/90">
                  {t('certifications.qualityStandards.label')}
                </h4>
              </div>

              <h3 className="text-3xl font-light text-white leading-tight">
                {t('certifications.qualityStandards.title')}
              </h3>

              <p className="text-sm text-slate-400 font-light leading-relaxed">
                {t('certifications.qualityStandards.description')}
              </p>
            </div>

            {/* Right - Standards List */}
            <div className="grid grid-cols-2 gap-4">
              {standards.map((standard, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                  <span className="text-xs text-slate-300 font-light leading-relaxed">
                    {standard}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          {[
            { value: t('certifications.stats.compliance.value'), label: t('certifications.stats.compliance.label') },
            { value: t('certifications.stats.audits.value'), label: t('certifications.stats.audits.label') },
            { value: t('certifications.stats.monitoring.value'), label: t('certifications.stats.monitoring.label') }
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl font-extralight text-white tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-light uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}