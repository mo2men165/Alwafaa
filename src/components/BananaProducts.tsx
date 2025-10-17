import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';

export default function BananaProducts() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      id: 1,
      name: t('bananaProducts.premium.name'),
      category: t('bananaProducts.premium.category'),
      image: '/banana-export.jpg',
      description: t('bananaProducts.premium.description'),
      specifications: {
        size: t('bananaProducts.premium.specifications.size'),
        weight: t('bananaProducts.premium.specifications.weight'),
        packaging: t('bananaProducts.premium.specifications.packaging'),
        shelfLife: t('bananaProducts.premium.specifications.shelfLife'),
        color: t('bananaProducts.premium.specifications.color')
      },
      features: t('bananaProducts.premium.features', { returnObjects: true }) as string[],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      name: t('bananaProducts.organic.name'),
      category: t('bananaProducts.organic.category'),
      image: '/banana-organic.webp',
      description: t('bananaProducts.organic.description'),
      specifications: {
        size: t('bananaProducts.organic.specifications.size'),
        weight: t('bananaProducts.organic.specifications.weight'),
        packaging: t('bananaProducts.organic.specifications.packaging'),
        shelfLife: t('bananaProducts.organic.specifications.shelfLife'),
        color: t('bananaProducts.organic.specifications.color')
      },
      features: t('bananaProducts.organic.features', { returnObjects: true }) as string[],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 3,
      name: t('bananaProducts.standard.name'),
      category: t('bananaProducts.standard.category'),
      image: '/banana-bulk.webp',
      description: t('bananaProducts.standard.description'),
      specifications: {
        size: t('bananaProducts.standard.specifications.size'),
        weight: t('bananaProducts.standard.specifications.weight'),
        packaging: t('bananaProducts.standard.specifications.packaging'),
        shelfLife: t('bananaProducts.standard.specifications.shelfLife'),
        color: t('bananaProducts.standard.specifications.color')
      },
      features: t('bananaProducts.standard.features', { returnObjects: true }) as string[],
      gradient: 'from-amber-500 to-orange-600'
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
              {t('bananaProducts.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl leading-relaxed md:text-7xl font-light tracking-tight mb-8"
          >
            {t('bananaProducts.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('bananaProducts.description')}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
            >
              <Magnet padding={80} magnetStrength={3}>
                <div className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-slate-300">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-slate-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-slate-200">
                      <span className={`text-xs font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                        {product.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Product Name */}
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 leading-tight mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {t('bananaProducts.specificationsTitle')}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <div className="text-xs text-slate-500 font-light capitalize">
                              {t(`bananaProducts.specsLabels.${key}`)}
                            </div>
                            <div className="text-sm text-slate-900 font-light">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {t('bananaProducts.keyFeaturesTitle')}
                      </h4>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${product.gradient} mt-1.5 flex-shrink-0`}></span>
                            <span className="text-xs text-slate-600 font-light">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}