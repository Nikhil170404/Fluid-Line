import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and user experience.',
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies to accelerate your business growth.',
    },
  ];

  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 100, label: 'Happy Clients', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' },
    { number: 24, label: 'Support Available', suffix: '/7' },
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
      <section className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.colors.gradient} relative overflow-hidden`}>
        {/* Background Pattern */}
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
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${theme.colors.textWhite} mb-6 font-heading`}
            >
              Digital Excellence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Delivered
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} mb-8 max-w-3xl mx-auto opacity-90`}
            >
              Transform your business with AI-enhanced websites that are fast, beautiful, and results-driven.
              Professional web development services at 30% cheaper than competitors.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white opacity-80"
            >
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-current" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-5 h-5" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${theme.colors.backgroundAlt}`}>
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
              className={`text-3xl md:text-5xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Our Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              We specialize in creating digital solutions that drive business growth and deliver exceptional user experiences.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${theme.colors.background} p-8 rounded-xl ${theme.shadows} border ${theme.colors.border} text-center group cursor-pointer`}
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

      {/* Stats Section */}
      <section className={`py-20 ${theme.colors.primary}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold ${theme.colors.textWhite} mb-2`}>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className={`${theme.colors.textWhite} opacity-90 text-sm md:text-base`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}>
                Why Choose WebCraft?
              </h2>
              <p className={`text-lg ${theme.colors.textLight} mb-8`}>
                We deliver exceptional digital solutions that combine cutting-edge technology 
                with stunning design to create websites that not only look great but perform exceptionally.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: '30% Cheaper Setup', description: 'Professional quality at unbeatable prices' },
                  { title: 'Monthly Support Included', description: 'Ongoing maintenance and updates' },
                  { title: 'Faster Delivery', description: '1-3 weeks turnaround time' },
                  { title: 'AI-Enhanced Features', description: 'Modern technology integration' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-2 h-2 rounded-full ${theme.colors.accent} mt-3 flex-shrink-0`}></div>
                    <div>
                      <h4 className={`font-semibold ${theme.colors.text} mb-1`}>{feature.title}</h4>
                      <p className={`${theme.colors.textLight}`}>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`${theme.colors.backgroundAlt} p-8 rounded-2xl ${theme.shadows}`}>
                <div className="space-y-4">
                  <div className={`h-4 ${theme.colors.primary} rounded w-3/4`}></div>
                  <div className={`h-4 ${theme.colors.secondary} rounded w-1/2`}></div>
                  <div className={`h-4 ${theme.colors.accent} rounded w-5/6`}></div>
                  <div className={`h-20 ${theme.colors.backgroundAlt} border-2 ${theme.colors.border} rounded-lg`}></div>
                  <div className="flex gap-2">
                    <div className={`h-4 ${theme.colors.primary} rounded flex-1`}></div>
                    <div className={`h-4 ${theme.colors.secondary} rounded flex-1`}></div>
                  </div>
                </div>
              </div>
              <div className={`absolute -top-4 -right-4 w-8 h-8 ${theme.colors.accent} rounded-full animate-pulse`}></div>
              <div className={`absolute -bottom-4 -left-4 w-6 h-6 ${theme.colors.primary} rounded-full animate-bounce-gentle`}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textWhite} opacity-90 mb-8 max-w-2xl mx-auto`}
            >
              Get your free consultation today and discover how we can help you succeed online!
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

export default Home;