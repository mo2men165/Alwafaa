import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from './reactBits/GradientText';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but validate if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    
    // Reset submit status when user makes changes after submission
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xdkwjeob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            className="text-4xl md:text-7xl leading-relaxed font-light tracking-tight mb-8 px-4"
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
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
                >
                  <p className="text-emerald-700 text-sm font-light">
                    ✓ {t('contactForm.form.successMessage')}
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-red-700 text-sm font-light">
                    ✗ {t('contactForm.form.errorMessage')}
                  </p>
                </motion.div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-light text-slate-700 mb-2">
                  {t('contactForm.form.fullName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors duration-300 text-slate-900 font-light ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-slate-200 focus:border-emerald-500'
                  }`}
                  placeholder={t('contactForm.form.fullNamePlaceholder')}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 font-light">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-light text-slate-700 mb-2">
                  {t('contactForm.form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors duration-300 text-slate-900 font-light ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-slate-200 focus:border-emerald-500'
                  }`}
                  placeholder={t('contactForm.form.emailPlaceholder')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 font-light">{errors.email}</p>
                )}
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
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors duration-300 text-slate-900 font-light ${
                      errors.phone 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-slate-200 focus:border-emerald-500'
                    }`}
                    placeholder={t('contactForm.form.phonePlaceholder')}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 font-light">{errors.phone}</p>
                  )}
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
                  {t('contactForm.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none transition-colors duration-300 text-slate-900 font-light resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-slate-200 focus:border-emerald-500'
                  }`}
                  placeholder={t('contactForm.form.messagePlaceholder')}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 font-light">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contactForm.form.submitting')}
                  </span>
                ) : (
                  t('contactForm.form.submitButton')
                )}
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