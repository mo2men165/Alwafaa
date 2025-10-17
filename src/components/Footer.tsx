import { motion } from 'framer-motion';
import Particles from './reactBits/Particles';
import Magnet from './reactBits/Magnet';
import { useTranslation } from 'react-i18next';
import Waves from './reactBits/Waves';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    about: [
      { label: t('footer.about.story'), href: '/about' },
      { label: t('footer.about.team'), href: '/team' },
      { label: t('footer.about.certifications'), href: '/certifications' },
      { label: t('footer.about.sustainability'), href: '/sustainability' }
    ],
    products: [
      { label: t('footer.products.premium'), href: '/products/premium' },
      { label: t('footer.products.organic'), href: '/products/organic' },
      { label: t('footer.products.bulk'), href: '/products/bulk' },
      { label: t('footer.products.custom'), href: '/products/custom' }
    ],
    services: [
      { label: t('footer.services.export'), href: '/services/export' },
      { label: t('footer.services.logistics'), href: '/services/logistics' },
      { label: t('footer.services.packaging'), href: '/services/packaging' },
      { label: t('footer.services.quality'), href: '/services/quality' }
    ],
    support: [
      { label: t('footer.support.contact'), href: '/contact' },
      { label: t('footer.support.faq'), href: '/faq' },
      { label: t('footer.support.shipping'), href: '/shipping' },
      { label: t('footer.support.terms'), href: '/terms' }
    ]
  };

  const socialLinks = [
    { icon: 'f', label: 'Facebook', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Animated Wave Divider */}
      <div className="relative h-24 -mt-24 z-20">
        <Waves
          lineColor="#1e293b"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          xGap={12}
          yGap={30}
        />
      </div>

      {/* Particles Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Particles
          particleCount={60}
          particleColors={['#10b981', '#3b82f6']}
          particleBaseSize={2}
          speed={0.2}
          alphaParticles={true}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          {/* Top Section - Logo + Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="mb-6">
                  <img
                    src="/logo-nobg.png"
                    alt="Al-Wafaa Logo"
                    className="h-12 w-auto"
                  />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {t('footer.tagline')}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <Magnet key={idx} padding={30} magnetStrength={6}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        className="w-9 h-9 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
                      >
                        <span className="text-sm font-bold">{social.icon}</span>
                      </a>
                    </Magnet>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* About Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-base mb-4">
                {t('footer.about.title')}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.about.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-base mb-4">
                {t('footer.products.title')}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-base mb-4">
                {t('footer.services.title')}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-base mb-4">
                {t('footer.support.title')}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Al-Wafaa. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}