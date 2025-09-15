import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'E-commerce Solutions',
    'Custom Software',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'Maintenance & Support'
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000',
    'Let\'s Discuss'
  ];

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Mumbai Office',
      details: [
        '405, Corporate Annex,',
        'Next to Cello House, Sonawala Road,',
        'Goregaon (E), Mumbai - 400063'
      ],
      extra: 'Main Office'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: [
        '+91-99-8765-4321',
        '+91-22-6832-2032',
        '+91-96-9567-4747'
      ],
      extra: '24/7 Support Available'
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email Addresses',
      details: [
        'projects@webcraft.com',
        'mumbai@webcraft.com',
        'support@webcraft.com'
      ],
      extra: 'Quick Response Guaranteed'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: Emergency Support Only'
      ],
      extra: 'IST (Indian Standard Time)'
    }
  ];

  const otherOffices = [
    {
      city: 'Bangalore Office',
      address: 'D-403, Sterling Apartments, Dollors Colony, RMV- II, Bangalore-560094',
      email: 'bangalore@webcraft.com'
    },
    {
      city: 'Noida Office',
      address: 'A-306, Logix Technova, Sector 132, Noida-201301',
      email: 'noida@webcraft.com'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal'
      });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`${theme.colors.background} transition-all duration-500`}>
      {/* Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${theme.colors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl font-bold ${theme.colors.textWhite} mb-6 font-heading`}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} opacity-90 max-w-3xl mx-auto`}
            >
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${theme.colors.backgroundAlt} p-8 rounded-2xl ${theme.shadows} border ${theme.colors.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <ChatBubbleLeftRightIcon className={`w-8 h-8 ${theme.colors.primary.replace('bg-', 'text-')}`} />
                  <h2 className={`text-2xl font-bold ${theme.colors.text} font-heading`}>
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="+91-99999-99999"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                      Project Urgency
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: 'urgent', label: 'Urgent (1-2 weeks)', color: 'text-red-500' },
                        { value: 'normal', label: 'Normal (2-4 weeks)', color: 'text-green-500' },
                        { value: 'flexible', label: 'Flexible (1-2 months)', color: 'text-blue-500' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleInputChange}
                            className="text-blue-600"
                          />
                          <span className={`text-sm ${theme.colors.text}`}>
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium ${theme.colors.text} mb-2`}>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${theme.colors.border} ${theme.colors.background} ${theme.colors.text} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical`}
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full ${theme.buttons} px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className={`text-sm ${theme.colors.textLight} text-center`}>
                    We'll respond within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`${theme.colors.backgroundAlt} p-6 rounded-xl ${theme.shadows} border ${theme.colors.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${theme.colors.primary} w-12 h-12 rounded-lg flex items-center justify-center ${theme.colors.textWhite} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${theme.colors.text} mb-2`}>
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-sm ${theme.colors.textLight}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className={`text-xs ${theme.colors.primary.replace('bg-', 'text-')} mt-2 font-medium`}>
                        {info.extra}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Actions */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`${theme.colors.backgroundAlt} p-6 rounded-xl ${theme.shadows} border ${theme.colors.border}`}
              >
                <h3 className={`font-semibold ${theme.colors.text} mb-4 flex items-center gap-2`}>
                  <CalendarDaysIcon className="w-5 h-5" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919987654321"
                    className={`block w-full text-center ${theme.buttons} px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center border-2 ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.backgroundAlt} px-4 py-3 rounded-lg font-medium transition-all duration-200`}
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:projects@webcraft.com"
                    className={`block w-full text-center border-2 ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.backgroundAlt} px-4 py-3 rounded-lg font-medium transition-all duration-200`}
                  >
                    Email Direct
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Offices */}
      <section className={`py-20 ${theme.colors.backgroundAlt}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Other Offices
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {otherOffices.map((office, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${theme.colors.background} p-6 rounded-xl ${theme.shadows} border ${theme.colors.border}`}
              >
                <h3 className={`text-xl font-semibold ${theme.colors.text} mb-3`}>
                  {office.city}
                </h3>
                <p className={`${theme.colors.textLight} mb-3`}>
                  {office.address}
                </p>
                <a
                  href={`mailto:${office.email}`}
                  className={`${theme.colors.primary.replace('bg-', 'text-')} hover:underline`}
                >
                  {office.email}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Find Us
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`w-full h-96 ${theme.colors.backgroundAlt} rounded-xl ${theme.shadows} border ${theme.colors.border} flex items-center justify-center`}
          >
            <div className="text-center">
              <MapPinIcon className={`w-16 h-16 ${theme.colors.textLight} mx-auto mb-4`} />
              <p className={`text-lg ${theme.colors.text} mb-2`}>Interactive Map</p>
              <p className={`${theme.colors.textLight}`}>
                Mumbai Office Location - Goregaon (E)
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-4 ${theme.buttons} px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;