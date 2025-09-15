import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ShoppingCartIcon,
  CloudIcon,
  CogIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const { theme } = useTheme();

  const mainServices = [
    {
      icon: <GlobeAltIcon className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Fast Loading Speed',
        'Cross-Browser Compatible',
        'Mobile-First Approach'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'PHP'],
      startingPrice: '₹9,999'
    },
    {
      icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
      startingPrice: '₹25,000'
    },
    {
      icon: <ShoppingCartIcon className="w-12 h-12" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      features: [
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking',
        'Multi-vendor Support',
        'Analytics Dashboard'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'],
      startingPrice: '₹18,999'
    },
    {
      icon: <CodeBracketIcon className="w-12 h-12" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: [
        'Business Process Automation',
        'Custom CRM/ERP',
        'API Development',
        'Database Design',
        'Third-party Integrations'
      ],
      technologies: ['Python', 'Java', '.NET', 'Laravel', 'Django'],
      startingPrice: '₹35,000'
    },
    {
      icon: <CloudIcon className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'Cloud Migration',
        'Auto-scaling',
        'Load Balancing',
        'Backup Solutions',
        '24/7 Monitoring'
      ],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
      startingPrice: '₹15,000'
    },
    {
      icon: <PaintBrushIcon className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that enhance user experience and drive conversions.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      startingPrice: '₹12,000'
    }
  ];

  const additionalServices = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'SEO, social media marketing, and PPC campaigns to boost your online presence.',
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance to keep your systems running smoothly.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your requirements, goals, and create a detailed project roadmap.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize the final product.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using best practices and modern technologies.',
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure everything works perfectly across all devices.',
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deploy your project and provide ongoing support and maintenance.',
    },
  ];

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
              Our Services
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} opacity-90 max-w-3xl mx-auto`}
            >
              Comprehensive digital solutions to transform your business and accelerate growth.
              From web development to cloud solutions, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              What We Offer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              Choose from our comprehensive range of services designed to meet all your digital needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`${theme.colors.backgroundAlt} rounded-2xl ${theme.shadows} border ${theme.colors.border} overflow-hidden group`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${theme.colors.primary} w-20 h-20 rounded-xl flex items-center justify-center ${theme.colors.textWhite} group-hover:scale-110 transition-transform duration-200`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className={`text-sm ${theme.colors.textLight}`}>Starting from</span>
                      <div className={`text-2xl font-bold ${theme.colors.primary.replace('bg-', 'text-')}`}>
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
                    {service.title}
                  </h3>
                  <p className={`${theme.colors.textLight} mb-6 leading-relaxed`}>
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className={`font-semibold ${theme.colors.text} mb-3`}>Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className={`w-4 h-4 ${theme.colors.accent.replace('bg-', 'text-')} flex-shrink-0`} />
                          <span className={`text-sm ${theme.colors.textLight}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold ${theme.colors.text} mb-3`}>Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full ${theme.colors.primary} ${theme.colors.textWhite}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 ${theme.buttons} px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${theme.colors.background} p-8 rounded-xl ${theme.shadows} border ${theme.colors.border} text-center group`}
              >
                <div className={`${theme.colors.primary} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${theme.colors.textWhite} group-hover:scale-110 transition-transform duration-200`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                  {service.title}
                </h3>
                <p className={`${theme.colors.textLight} leading-relaxed`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Our Process
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${theme.colors.border} h-full hidden lg:block`}></div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className={`${theme.colors.backgroundAlt} p-6 rounded-xl ${theme.shadows} border ${theme.colors.border}`}>
                      <div className={`text-4xl font-bold ${theme.colors.primary.replace('bg-', 'text-')} mb-3`}>
                        {step.step}
                      </div>
                      <h3 className={`text-xl font-semibold ${theme.colors.text} mb-3`}>
                        {step.title}
                      </h3>
                      <p className={`${theme.colors.textLight}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Process Node */}
                  <div className={`w-6 h-6 ${theme.colors.primary} rounded-full border-4 ${theme.colors.background} z-10 my-4 lg:my-0 hidden lg:block`}></div>

                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Services?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: '30% Cost Savings',
                description: 'Get professional quality services at 30% less than market rates',
                icon: '💰'
              },
              {
                title: 'Fast Delivery',
                description: 'Most projects completed in 1-3 weeks with regular updates',
                icon: '⚡'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support and maintenance included',
                icon: '🛟'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${theme.colors.background} p-8 rounded-xl ${theme.shadows} border ${theme.colors.border} text-center`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                  {feature.title}
                </h3>
                <p className={`${theme.colors.textLight}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${theme.colors.gradient}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.textWhite} mb-6 font-heading`}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textWhite} opacity-90 mb-8 max-w-2xl mx-auto`}
            >
              Let's discuss your project requirements and create something amazing together.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;