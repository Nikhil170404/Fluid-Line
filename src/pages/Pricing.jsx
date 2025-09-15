import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon,
  CrownIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid';

const Pricing = () => {
  const { theme } = useTheme();
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses, startups, and local shops',
      price: {
        monthly: 9999,
        yearly: 89999
      },
      monthlySupport: 499,
      popular: false,
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      features: [
        '4-5 Page Website',
        'Mobile Responsive',
        'Contact Forms & Maps',
        'Basic SEO Setup',
        'Free .com Domain (first year)',
        'SSL Certificate',
        '500MB SSD Hosting',
        '2 Business Emails',
        '1-Week Delivery',
        '20-Day Support',
        'Monthly Maintenance',
        'Security Updates'
      ],
      bestFor: 'Doctors, lawyers, restaurants, services',
      savings: '₹5,000 vs competitors!'
    },
    {
      name: 'Professional',
      description: 'Growing businesses, online stores, agencies',
      price: {
        monthly: 18999,
        yearly: 189999
      },
      monthlySupport: 799,
      popular: true,
      icon: <StarIcon className="w-8 h-8" />,
      features: [
        '8-10 Page Website',
        'E-commerce Ready (30 products)',
        'Payment Gateway Setup',
        'Advanced SEO + Analytics',
        'Blog Setup',
        'Social Integration',
        'Email Marketing (500 contacts)',
        'Live Chat Widget',
        'WhatsApp Integration',
        '1GB SSD Hosting',
        '5 Business Emails',
        '2-Week Delivery',
        '30-Day Support',
        'Monthly Updates & Maintenance'
      ],
      bestFor: 'Retail, coaches, agencies, e-commerce',
      savings: 'Same price, more value!'
    },
    {
      name: 'Enterprise',
      description: 'Established businesses, custom needs',
      price: {
        monthly: 35999,
        yearly: 359999
      },
      monthlySupport: 1299,
      popular: false,
      icon: <CrownIcon className="w-8 h-8" />,
      features: [
        'Unlimited Pages',
        'Full E-commerce (unlimited products)',
        'Custom AI Chatbot',
        'Analytics Dashboard',
        'Multi-language Support (2 languages)',
        'User Registration',
        'Custom Admin Panel',
        'API Integration (3 integrations)',
        'Advanced Security',
        '3GB Premium Hosting',
        '10 Business Emails',
        'Monthly Reports',
        'Priority 24/7 Support',
        '3-Week Delivery',
        '60-Day Support',
        'Complete Monthly Maintenance'
      ],
      bestFor: 'Manufacturing, large retail, tech companies',
      savings: '₹4,000 cheaper!'
    }
  ];

  const additionalServices = [
    { name: 'Custom Logo Design', price: '₹2,999' },
    { name: 'Content Writing (per page)', price: '₹999' },
    { name: 'Product Photography', price: '₹199/product' },
    { name: 'Social Media Setup', price: '₹1,999' },
    { name: 'Google Ads Setup', price: '₹2,999' },
    { name: 'Additional Languages', price: '₹3,999/language' }
  ];

  const whyChoose = [
    {
      title: '30% Cheaper Setup',
      description: 'Professional quality at unbeatable prices',
      icon: '💰'
    },
    {
      title: 'Monthly Support Included',
      description: 'Ongoing maintenance and updates',
      icon: '🛠️'
    },
    {
      title: 'Faster Delivery',
      description: '1-3 weeks turnaround time',
      icon: '⚡'
    },
    {
      title: 'AI-Enhanced Features',
      description: 'Modern technology integration',
      icon: '🤖'
    }
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
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} opacity-90 max-w-3xl mx-auto mb-8`}
            >
              Professional web development services at 30% cheaper than competitors. 
              No hidden fees, no surprises.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4"
            >
              <span className={`${theme.colors.textWhite} ${billingPeriod === 'monthly' ? 'opacity-100' : 'opacity-60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingPeriod === 'yearly' ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-gray-900 transition-transform ${
                    billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`${theme.colors.textWhite} ${billingPeriod === 'yearly' ? 'opacity-100' : 'opacity-60'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Save 10%
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative ${
                  plan.popular 
                    ? `${theme.colors.primary} text-white transform scale-105` 
                    : `${theme.colors.backgroundAlt} ${theme.colors.text}`
                } rounded-2xl ${theme.shadows} border ${plan.popular ? 'border-transparent' : theme.colors.border} overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 text-sm font-medium">
                    🔥 Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${plan.popular ? 'text-white' : theme.colors.primary.replace('bg-', 'text-')}`}>
                      {plan.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm ${plan.popular ? 'text-white opacity-80' : theme.colors.textLight}`}>
                        {plan.savings}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : theme.colors.text}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.popular ? 'text-white opacity-80' : theme.colors.textLight}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : theme.colors.text}`}>
                      ₹{billingPeriod === 'monthly' 
                        ? plan.price.monthly.toLocaleString()
                        : plan.price.yearly.toLocaleString()
                      }
                    </div>
                    <div className={`text-sm ${plan.popular ? 'text-white opacity-80' : theme.colors.textLight}`}>
                      + ₹{plan.monthlySupport}/month support
                    </div>
                    {billingPeriod === 'yearly' && (
                      <div className={`text-sm ${plan.popular ? 'text-white opacity-80' : theme.colors.textLight}`}>
                        Save ₹{(plan.price.monthly * 12 - plan.price.yearly).toLocaleString()} per year
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    <div className={`text-sm font-medium mb-3 ${plan.popular ? 'text-white' : theme.colors.text}`}>
                      ✨ Best For:
                    </div>
                    <div className={`text-sm ${plan.popular ? 'text-white opacity-80' : theme.colors.textLight}`}>
                      {plan.bestFor}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-white' : theme.colors.accent.replace('bg-', 'text-')
                        }`} />
                        <span className={`text-sm ${plan.popular ? 'text-white opacity-90' : theme.colors.textLight}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                        : `${theme.buttons}`
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Why Choose WebCraft?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${theme.colors.background} p-6 rounded-xl ${theme.shadows} border ${theme.colors.border} text-center`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-lg font-semibold ${theme.colors.text} mb-3`}>
                  {item.title}
                </h3>
                <p className={`${theme.colors.textLight} text-sm`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              Enhance your package with these additional services
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${theme.colors.backgroundAlt} p-6 rounded-lg ${theme.shadows} border ${theme.colors.border} flex justify-between items-center`}
              >
                <span className={`${theme.colors.text} font-medium`}>
                  {service.name}
                </span>
                <span className={`${theme.colors.primary.replace('bg-', 'text-')} font-bold`}>
                  {service.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-6 font-heading`}
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                question: 'What is included in the monthly support?',
                answer: 'Monthly support includes security updates, content updates, technical support, performance monitoring, and backup management.'
              },
              {
                question: 'Can I upgrade my plan later?',
                answer: 'Yes, you can upgrade your plan at any time. We will only charge the difference and provide all additional features.'
              },
              {
                question: 'Do you provide hosting and domain?',
                answer: 'Yes, hosting and domain are included in all plans. We provide fast SSD hosting and free .com domain for the first year.'
              },
              {
                question: 'What if I need custom features?',
                answer: 'We can create custom features for any plan. Contact us to discuss your requirements and get a custom quote.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees! The prices listed include everything needed to get your website live and running.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${theme.colors.background} p-6 rounded-lg ${theme.shadows} border ${theme.colors.border}`}
              >
                <h3 className={`text-lg font-semibold ${theme.colors.text} mb-3`}>
                  {faq.question}
                </h3>
                <p className={`${theme.colors.textLight}`}>
                  {faq.answer}
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
                Get Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;