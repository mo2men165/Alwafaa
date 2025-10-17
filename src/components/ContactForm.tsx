import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function ContactForm() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    { label: t('contactForm.contactInfo.address.label'), value: t('contactForm.contactInfo.address.value'), icon: '●' },
    { label: t('contactForm.contactInfo.email.label'), value: t('contactForm.contactInfo.email.value'), icon: '●' },
    { label: t('contactForm.contactInfo.phone.label'), value: t('contactForm.contactInfo.phone.value'), icon: '●' },
    { label: t('contactForm.contactInfo.businessHours.label'), value: t('contactForm.contactInfo.businessHours.value'), icon: '●' }
  ];

  const socialLinks = [
    { name: t('contactForm.social.linkedin'), url: '#', gradient: 'from-blue-500 to-blue-600' },
    { name: t('contactForm.social.facebook'), url: '#', gradient: 'from-blue-600 to-indigo-600' },
    { name: t('contactForm.social.instagram'), url: '#', gradient: 'from-pink-500 to-rose-600' },
    { name: t('contactForm.social.twitter'), url: '#', gradient: 'from-blue-400 to-cyan-500' }
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
              {t('contactForm.label')}
            </span>
            <div className="h-[1px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </motion.div>

          <GradientText
            colors={['#10b981', '#3b82f6', '#d4af37', '#10b981']}
            animationSpeed={6}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            {t('contactForm.title')}
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t('contactForm.description')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-light text-slate-700 mb-2">
                  {t('contactForm.form.fullName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-slate-900 font-light"
                  placeholder={t('contactForm.form.fullNamePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-light text-slate-700 mb-2">
                  {t('contactForm.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-slate-900 font-light"
                  placeholder={t('contactForm.form.emailPlaceholder')}
                />
              </div>

              {/* Phone & Country */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-light text-slate-700 mb-2">
                    {t('contactForm.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-slate-900 font-light"
                    placeholder={t('contactForm.form.phonePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-slate-700 mb-2">
                    {t('contactForm.form.country')}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-slate-900 font-light"
                    placeholder={t('contactForm.form.countryPlaceholder')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-light text-slate-700 mb-2">
                  {t('contactForm.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-slate-900 font-light resize-none"
                  placeholder={t('contactForm.form.messagePlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {t('contactForm.form.submitButton')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-2xl font-light text-slate-900 mb-6">{t('contactForm.contactInfo.title')}</h3>
              
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <span className="text-emerald-500 text-xs mt-1">{info.icon}</span>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500 font-light uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-sm text-slate-900 font-light">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative bg-slate-50 rounded-2xl p-4 border border-slate-200 overflow-hidden">
              <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-50"></div>
                  </div>
                  <p className="text-xs text-slate-500 font-light">{t('contactForm.map.placeholder')}</p>
                  <p className="text-xs text-slate-400 font-light">{t('contactForm.map.location')}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-light text-slate-700 uppercase tracking-wider">
                {t('contactForm.social.title')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    className={`px-6 py-2.5 bg-gradient-to-r ${social.gradient} text-white text-sm font-light rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>
          <p className="text-sm text-slate-500 font-light">
            {t('contactForm.responseNote')}
          </p>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}