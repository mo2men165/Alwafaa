import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import GradientText from './reactBits/GradientText';
import { 
  MapPin, 
  Store, 
  Building2, 
  Truck,
  Clock,
  CreditCard,
  Users,
  Phone
} from 'lucide-react';

export default function DomesticOperations() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              {t('domesticOps.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('domesticOps.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('domesticOps.description')}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Coverage Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-200 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900">
                {t('domesticOps.coverage.title')}
              </h3>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {t('domesticOps.coverage.description')}
            </p>

            {/* Cities List */}
            <div className="grid grid-cols-2 gap-3">
              {(t('domesticOps.coverage.cities', { returnObjects: true }) as string[]).map((city, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.05 }}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                  <span className="text-sm text-slate-700">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Client Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {[
              { id: 'retail', icon: Store, gradient: 'from-blue-500 to-cyan-600' },
              { id: 'wholesale', icon: Building2, gradient: 'from-purple-500 to-indigo-600' },
              { id: 'hospitality', icon: Users, gradient: 'from-amber-500 to-orange-600' },
            ].map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <client.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-light text-slate-900 mb-2">
                      {t(`domesticOps.clients.${client.id}.title`)}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {t(`domesticOps.clients.${client.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(t(`domesticOps.clients.${client.id}.examples`, { returnObjects: true }) as string[]).map((example, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${client.gradient} text-white`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Truck, titleKey: 'domesticOps.features.delivery', gradient: 'from-emerald-500 to-teal-600' },
            { icon: Clock, titleKey: 'domesticOps.features.schedule', gradient: 'from-blue-500 to-cyan-600' },
            { icon: CreditCard, titleKey: 'domesticOps.features.payment', gradient: 'from-purple-500 to-indigo-600' },
            { icon: Phone, titleKey: 'domesticOps.features.support', gradient: 'from-amber-500 to-orange-600' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + idx * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-base font-medium text-slate-900 mb-2">
                {t(feature.titleKey + '.title')}
              </h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                {t(feature.titleKey + '.description')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}

