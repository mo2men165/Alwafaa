import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import GradientText from './reactBits/GradientText';
import { 
  FileText, 
  Clipboard, 
  Ship, 
  Package, 
  CheckCircle,
  ArrowRight,
  Globe2,
  Shield
} from 'lucide-react';

export default function ExportProcessDetails() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      id: 'inquiry',
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'quality',
      icon: Clipboard,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'documentation',
      icon: Shield,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'packaging',
      icon: Package,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'shipping',
      icon: Ship,
      gradient: 'from-red-500 to-pink-600',
    },
    {
      id: 'delivery',
      icon: CheckCircle,
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-amber-500/5 rounded-full blur-[120px]"></div>

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
              {t('exportProcess.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl leading-relaxed md:text-7xl font-light tracking-tight mb-8 px-4"
          >
            {t('exportProcess.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('exportProcess.description')}
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20 hidden lg:block"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.id}
                stepId={step.id}
                icon={step.icon}
                gradient={step.gradient}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Globe2, titleKey: 'exportProcess.info.ports' },
            { icon: Ship, titleKey: 'exportProcess.info.methods' },
            { icon: Shield, titleKey: 'exportProcess.info.compliance' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-base font-light text-white">
                  {t(item.titleKey + '.title')}
                </h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t(item.titleKey + '.description')}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}

interface ProcessStepProps {
  stepId: string;
  icon: any;
  gradient: string;
  index: number;
  inView: boolean;
}

function ProcessStep({ stepId, icon: Icon, gradient, index, inView }: ProcessStepProps) {
  const { t } = useTranslation();
  const details = t(`exportProcess.steps.${stepId}.details`, { returnObjects: true }) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
      className="relative"
    >
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group h-full">
        {/* Top accent */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        {/* Step Number & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-4xl font-extralight text-white/10">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-light text-white mb-3">
          {t(`exportProcess.steps.${stepId}.title`)}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
          {t(`exportProcess.steps.${stepId}.description`)}
        </p>

        {/* Details */}
        <div className="space-y-2">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <ArrowRight className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
              <span className="text-xs text-slate-300 leading-relaxed">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

