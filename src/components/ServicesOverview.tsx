import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import GradientText from './reactBits/GradientText';
import { 
  Globe, 
  MapPin, 
  ShoppingCart, 
  Package, 
  ShieldCheck, 
  Truck,
  Users,
  Leaf,
  Clock,
  Award
} from 'lucide-react';

export default function ServicesOverview() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'export',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'domestic',
      icon: MapPin,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'wholesale',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'custom',
      icon: Package,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      gradient: 'from-red-500 to-pink-600',
    },
    {
      id: 'logistics',
      icon: Truck,
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      {/* Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-amber-500/5 rounded-full blur-[150px]"></div>

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
              {t('servicesOverview.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('servicesOverview.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('servicesOverview.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              serviceId={service.id}
              icon={service.icon}
              gradient={service.gradient}
              delay={0.6 + index * 0.1}
              inView={inView}
            />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-200 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900 mb-4">
              {t('servicesOverview.whyChooseUs.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              {t('servicesOverview.whyChooseUs.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: Users, label: t('servicesOverview.whyChooseUs.experience') },
              { icon: Award, label: t('servicesOverview.whyChooseUs.certified') },
              { icon: Clock, label: t('servicesOverview.whyChooseUs.reliable') },
              { icon: Leaf, label: t('servicesOverview.whyChooseUs.sustainable') },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-sm text-slate-700 font-light">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}

interface ServiceCardProps {
  serviceId: string;
  icon: any;
  gradient: string;
  delay: number;
  inView: boolean;
}

function ServiceCard({ serviceId, icon: Icon, gradient, delay, inView }: ServiceCardProps) {
  const { t } = useTranslation();
  
  const features = t(`servicesOverview.services.${serviceId}.features`, { returnObjects: true }) as string[];
  const highlights = t(`servicesOverview.services.${serviceId}.highlights`, { returnObjects: true }) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300"
    >
      {/* Top Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>

      <div className="p-8">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-light text-slate-900 mb-3">
          {t(`servicesOverview.services.${serviceId}.title`)}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
          {t(`servicesOverview.services.${serviceId}.description`)}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {t('servicesOverview.featuresLabel')}
          </h4>
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-1.5 flex-shrink-0`}></span>
                <span className="text-xs text-slate-600 font-light leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className={`pt-6 border-t border-slate-100`}>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white shadow-sm`}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    </motion.div>
  );
}

