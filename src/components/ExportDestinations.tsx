import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import { useTranslation } from 'react-i18next';

export default function ExportDestinations() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const regions = [
    {
      id: 1,
      name: t('exportDestinations.regions.middleEast.name'),
      countries: t('exportDestinations.regions.middleEast.countries', { returnObjects: true }) as string[],
      volume: t('exportDestinations.regions.middleEast.volume'),
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      name: t('exportDestinations.regions.europe.name'),
      countries: t('exportDestinations.regions.europe.countries', { returnObjects: true }) as string[],
      volume: t('exportDestinations.regions.europe.volume'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      name: t('exportDestinations.regions.asia.name'),
      countries: t('exportDestinations.regions.asia.countries', { returnObjects: true }) as string[],
      volume: t('exportDestinations.regions.asia.volume'),
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 4,
      name: t('exportDestinations.regions.northAmerica.name'),
      countries: t('exportDestinations.regions.northAmerica.countries', { returnObjects: true }) as string[],
      volume: t('exportDestinations.regions.northAmerica.volume'),
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const stats = [
    { value: t('exportDestinations.stats.countries.value'), label: t('exportDestinations.stats.countries.label') },
    { value: t('exportDestinations.stats.continents.value'), label: t('exportDestinations.stats.continents.label') },
    { value: t('exportDestinations.stats.volume.value'), label: t('exportDestinations.stats.volume.label') }
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
              {t('exportDestinations.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl leading-relaxed md:text-7xl font-light tracking-tight mb-8"
          >
            {t('exportDestinations.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('exportDestinations.description')}
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-12 mb-20"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-5xl font-extralight text-slate-900 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-light uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative bg-slate-50 rounded-2xl p-12 border border-slate-200 mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-amber-500/5"></div>
          
          {/* Map Placeholder Visualization */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Simple world map representation */}
                <circle cx="200" cy="200" r="80" fill="#10b981" opacity="0.2"/>
                <circle cx="400" cy="150" r="100" fill="#3b82f6" opacity="0.2"/>
                <circle cx="600" cy="180" r="70" fill="#8b5cf6" opacity="0.2"/>
                <circle cx="150" cy="120" r="60" fill="#f59e0b" opacity="0.2"/>
              </svg>
            </div>
            <div className="text-center space-y-3 relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-20 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-50"></div>
              </div>
              <p className="text-sm text-slate-500 font-light">
                {t('exportDestinations.mapPlaceholder')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1 + index * 0.1 }}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${region.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Subtle Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-light text-slate-900">
                      {region.name}
                    </h3>
                    <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${region.gradient} bg-opacity-10`}>
                      <span className={`text-sm font-medium bg-gradient-to-r ${region.gradient} bg-clip-text text-transparent`}>
                        {region.volume}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-600 font-light">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}