import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import { useTranslation } from 'react-i18next';

export default function CompanyStory() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const milestones = t('companyStory.milestones', { returnObjects: true }) as Array<{year: string, label: string}>;

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span className="text-slate-600 text-xs font-medium uppercase tracking-[0.3em]">
              {t('companyStory.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('companyStory.title')}
          </GradientText>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-slate-900 leading-tight">
                {t('companyStory.mainHeading')}
              </h3>
              
              <p className="text-base text-slate-600 font-light leading-relaxed">
                {t('companyStory.paragraph1')}
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                {t('companyStory.paragraph2')}
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                {t('companyStory.paragraph3')}
              </p>
            </div>

            {/* Timeline */}
            <div className="pt-8 border-t border-slate-200">
              <div className="grid grid-cols-4 gap-4">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <div className="text-2xl font-light text-emerald-600">
                      {milestone.year}
                    </div>
                    <div className="text-xs text-slate-500 font-light uppercase tracking-wider">
                      {milestone.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="relative bg-slate-900 rounded-2xl p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-amber-500"></div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                      {t('companyStory.vision.label')}
                    </h4>
                  </div>

                  <p className="text-base text-white font-light leading-relaxed">
                    {t('companyStory.vision.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Logo Feature */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Centered Logo Display */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-16 overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500">
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
              </div>

              {/* Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-amber-500/10 blur-3xl"></div>

              {/* Logo Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Animated Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-8"
                  >
                    <div className="w-full h-full border border-emerald-500/20 rounded-full"></div>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 -m-12"
                  >
                    <div className="w-full h-full border border-blue-500/20 rounded-full"></div>
                  </motion.div>

                  {/* Logo */}
                  <img 
                    src="/logo-nobg.png" 
                    alt="Company Logo" 
                    className="relative w-48 h-48 object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white rounded-2xl p-10 border border-slate-200 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500"></div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                  <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-slate-600">
                    {t('companyStory.mission.label')}
                  </h4>
                </div>

                <h3 className="text-2xl font-light text-slate-900 leading-tight">
                  {t('companyStory.mission.title')}
                </h3>

                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {t('companyStory.mission.description')}
                </p>

                <div className="pt-4 space-y-3">
                  {(t('companyStory.mission.points', { returnObjects: true }) as string[]).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                      <span className="text-xs text-slate-600 font-light">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}