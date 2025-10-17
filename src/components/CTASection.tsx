import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import StarBorder from './reactBits/StarBorder';
import ShinyText from './reactBits/ShinyText';
import Orb from './reactBits/Orb';
import Beams from './reactBits/Beams';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function CTASection() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Orb Background */}
      <div className="absolute inset-0 opacity-30">
        <Orb />
      </div>

      {/* Beams Effect */}
      <div className="absolute inset-0 opacity-20">
        <Beams />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37']}
            animationSpeed={5}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            {t('cta.title')}
          </GradientText>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block mb-2">
                    <ShinyText 
                      text={t('cta.form.name')} 
                      speed={4}
                      className="text-sm font-semibold text-gray-300 uppercase tracking-wide"
                    />
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 transition-all"
                    placeholder={t('cta.form.namePlaceholder')}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block mb-2">
                    <ShinyText 
                      text={t('cta.form.email')} 
                      speed={4}
                      className="text-sm font-semibold text-gray-300 uppercase tracking-wide"
                    />
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                    placeholder={t('cta.form.emailPlaceholder')}
                    required
                  />
                </div>

                {/* Company & Country - Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">
                      <ShinyText 
                        text={t('cta.form.company')} 
                        speed={4}
                        className="text-sm font-semibold text-gray-300 uppercase tracking-wide"
                      />
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                      placeholder={t('cta.form.companyPlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block mb-2">
                      <ShinyText 
                        text={t('cta.form.country')} 
                        speed={4}
                        className="text-sm font-semibold text-gray-300 uppercase tracking-wide"
                      />
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder={t('cta.form.countryPlaceholder')}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block mb-2">
                    <ShinyText 
                      text={t('cta.form.message')} 
                      speed={4}
                      className="text-sm font-semibold text-gray-300 uppercase tracking-wide"
                    />
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
                    placeholder={t('cta.form.messagePlaceholder')}
                    required
                  />
                </div>

                {/* Submit Button */}
                <StarBorder
                  as="button"
                  type="submit"
                  color="#10b981"
                  speed="4s"
                  thickness={2}
                  className="w-full"
                >
                  <span className="block py-4 text-lg font-bold">
                    {t('cta.form.submit')}
                  </span>
                </StarBorder>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-500/20 border border-green-500 rounded-xl"
                  >
                    <p className="text-green-400 font-semibold">✓ {t('cta.form.success')}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('cta.contact.email')}</h4>
                  <p className="text-gray-400">info@alwafaaa.com</p>
                  <p className="text-gray-400">export@alwafaaa.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('cta.contact.phone')}</h4>
                  <p className="text-gray-400">0109 904 2527</p>
                  <p className="text-gray-400 text-sm">{t('cta.contact.phoneHours')}</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('cta.contact.location')}</h4>
                  <p className="text-gray-400">Cairo, Egypt</p>
                  <p className="text-gray-400 text-sm">{t('cta.contact.locationNote')}</p>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-1">
              <div className="bg-slate-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-black text-white mb-2">
                  <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">24h</span>
                </div>
                <p className="text-gray-300 font-semibold">{t('cta.contact.responseTime')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}