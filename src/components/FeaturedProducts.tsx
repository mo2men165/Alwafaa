import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import Magnet from './reactBits/Magnet';
import ClickSpark from './reactBits/ClickSpark';
import { useTranslation } from 'react-i18next';

export default function FeaturedProducts() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const products = [
    {
      id: 1,
      name: t('products.premium.name'),
      category: t('products.premium.category'),
      description: t('products.premium.description'),
      image: '/banana-export.jpg',
      badge: 'Premium',
      gradient: 'from-emerald-500 to-teal-600',
      accentColor: '#10b981'
    },
    {
      id: 2,
      name: t('products.organic.name'),
      category: t('products.organic.category'),
      description: t('products.organic.description'),
      image: '/banana-organic.webp',
      badge: 'Organic',
      gradient: 'from-blue-500 to-indigo-600',
      accentColor: '#3b82f6'
    },
    {
      id: 3,
      name: t('products.bulk.name'),
      category: t('products.bulk.category'),
      description: t('products.bulk.description'),
      image: '/banana-bulk.webp',
      badge: 'Best Value',
      gradient: 'from-amber-500 to-orange-600',
      accentColor: '#f59e0b'
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
              {t('products.subtitle')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>
          
          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            {t('products.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('products.description')}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.15 }}
            >
              <Magnet padding={80} magnetStrength={3}>
                <div className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-200 hover:border-slate-300">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden bg-slate-50">
                    {/* Actual Product Image */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md border border-slate-200">
                      <span className={`text-xs font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
                        {product.badge}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    {/* Category */}
                    <div className={`text-xs font-medium uppercase tracking-wider bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {product.category}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-light text-slate-900 leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 font-light leading-relaxed">
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <ClickSpark
                        sparkColor={product.accentColor}
                        sparkCount={12}
                      >
                        <button className={`w-full py-3 px-6 bg-gradient-to-r ${product.gradient} text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm`}>
                          {t('products.cta')}
                        </button>
                      </ClickSpark>
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