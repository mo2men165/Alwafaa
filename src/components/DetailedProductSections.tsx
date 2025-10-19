import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import GradientText from './reactBits/GradientText';
import { MapPin, Calendar, Users, TrendingUp, DollarSign, Leaf, Globe, Award } from 'lucide-react';

export default function DetailedProductSections() {
  const { t } = useTranslation();

  const products = [
    {
      id: 'premium',
      name: t('bananaProducts.premium.name'),
      category: t('bananaProducts.premium.category'),
      image: '/premiumbananas.jpg',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'organic',
      name: t('bananaProducts.organic.name'),
      category: t('bananaProducts.organic.category'),
      image: '/organicbananas.avif',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'standard',
      name: t('bananaProducts.standard.name'),
      category: t('bananaProducts.standard.category'),
      image: '/bulkbananas.webp',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-amber-500/5 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <span className="text-emerald-400/90 text-xs font-medium uppercase tracking-[0.3em]">
              {t('detailedProducts.sectionLabel')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-4xl md:text-6xl font-light tracking-tight leading-relaxed mb-6 px-4"
          >
            {t('detailedProducts.sectionTitle')}
          </GradientText>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            {t('detailedProducts.sectionDescription')}
          </p>
        </motion.div>

        {/* Product Sections */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <ProductDetailSection
              key={product.id}
              productId={product.id}
              name={product.name}
              category={product.category}
              image={product.image}
              gradient={product.gradient}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}

interface ProductDetailSectionProps {
  productId: string;
  name: string;
  category: string;
  image: string;
  gradient: string;
  reverse?: boolean;
}

function ProductDetailSection({
  productId,
  name,
  category,
  image,
  gradient,
  reverse = false,
}: ProductDetailSectionProps) {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sourcing = t(`detailedProducts.${productId}.sourcing`, { returnObjects: true }) as Record<string, string>;
  const nutrition = t(`detailedProducts.${productId}.nutrition`, { returnObjects: true }) as string[];
  const logistics = t(`detailedProducts.${productId}.logistics`, { returnObjects: true }) as Record<string, string>;
  const markets = t(`detailedProducts.${productId}.markets`, { returnObjects: true }) as string[];

  return (
    <div ref={ref} className="relative">
      {/* Main Content Grid */}
      <div className={`grid lg:grid-cols-2 gap-12 items-start ${reverse ? '' : ''}`}>
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`relative ${reverse ? 'lg:order-2' : ''}`}
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <img
              src={image}
              alt={name}
              className="w-full h-[600px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-20`}></div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 px-6 py-3 bg-slate-900/90 backdrop-blur-sm rounded-full border border-white/10">
              <span className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                {category}
              </span>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-light bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {t(`detailedProducts.${productId}.stats.stat1Value`)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t(`detailedProducts.${productId}.stats.stat1Label`)}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-light bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {t(`detailedProducts.${productId}.stats.stat2Value`)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t(`detailedProducts.${productId}.stats.stat2Label`)}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-light bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {t(`detailedProducts.${productId}.stats.stat3Value`)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t(`detailedProducts.${productId}.stats.stat3Label`)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`space-y-8 ${reverse ? 'lg:order-1' : ''}`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              {name}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {t(`detailedProducts.${productId}.intro`)}
            </p>
          </div>

          {/* Sourcing & Origin */}
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className={`w-5 h-5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
              <h4 className="text-sm font-medium uppercase tracking-wider text-emerald-400/90">
                {t('detailedProducts.sourcingTitle')}
              </h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.region')}</span>
                <span className="text-sm text-slate-300 text-right">{sourcing.region}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.farms')}</span>
                <span className="text-sm text-slate-300 text-right">{sourcing.farms}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.harvestCycle')}</span>
                <span className="text-sm text-slate-300 text-right">{sourcing.harvestCycle}</span>
              </div>
            </div>
          </div>

          {/* Logistics & Ordering */}
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Globe className={`w-5 h-5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
              <h4 className="text-sm font-medium uppercase tracking-wider text-emerald-400/90">
                {t('detailedProducts.logisticsTitle')}
              </h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.minOrder')}</span>
                <span className="text-sm text-slate-300 text-right">{logistics.minOrder}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.leadTime')}</span>
                <span className="text-sm text-slate-300 text-right">{logistics.leadTime}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-xs text-slate-500 uppercase tracking-wider">{t('detailedProducts.shippingMethods')}</span>
                <span className="text-sm text-slate-300 text-right">{logistics.shippingMethods}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Information Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 grid md:grid-cols-2 gap-6"
      >
        {/* Nutrition & Health Benefits */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group">
          <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className={`w-6 h-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
            <h4 className="text-lg font-light text-white">
              {t('detailedProducts.nutritionTitle')}
            </h4>
          </div>
          <ul className="space-y-3">
            {nutrition.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}></span>
                <span className="text-sm text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Markets */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 group">
          <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className={`w-6 h-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
            <h4 className="text-lg font-light text-white">
              {t('detailedProducts.marketsTitle')}
            </h4>
          </div>
          <ul className="space-y-3">
            {markets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}></span>
                <span className="text-sm text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Additional Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 grid md:grid-cols-3 gap-6"
      >
        <InfoPill
          icon={Calendar}
          label={t('detailedProducts.availability')}
          value={t(`detailedProducts.${productId}.availability`)}
          gradient={gradient}
        />
        <InfoPill
          icon={DollarSign}
          label={t('detailedProducts.priceRange')}
          value={t(`detailedProducts.${productId}.priceRange`)}
          gradient={gradient}
        />
        <InfoPill
          icon={Award}
          label={t('detailedProducts.certifications')}
          value={t(`detailedProducts.${productId}.certifications`)}
          gradient={gradient}
        />
      </motion.div>

      {/* Divider */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
}

interface InfoPillProps {
  icon: any;
  label: string;
  value: string;
  gradient: string;
}

function InfoPill({ icon: Icon, label, value, gradient }: InfoPillProps) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Icon className={`w-4 h-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
        <span className="text-xs text-slate-500 uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-sm text-slate-300">{value}</p>
    </div>
  );
}

