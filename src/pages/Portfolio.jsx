import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const Portfolio = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'ecommerce',
      image: '/api/placeholder/600/400',
      description: 'A modern e-commerce platform for a fashion brand with advanced filtering, payment integration, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Responsive Design', 'Payment Gateway', 'Admin Dashboard', 'SEO Optimized'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'Fashion Hub Inc.',
      duration: '3 weeks',
      year: '2024'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      description: 'Cross-platform mobile app for healthcare providers with appointment booking, patient records, and telemedicine features.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      features: ['Real-time Chat', 'Video Calls', 'Push Notifications', 'Offline Support'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'MediCare Solutions',
      duration: '6 weeks',
      year: '2024'
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'Complete redesign of a corporate website with modern UI/UX, improved performance, and enhanced user experience.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Fast Loading', 'Modern Design', 'Mobile Responsive', 'SEO Friendly'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'Tech Corp Ltd.',
      duration: '2 weeks',
      year: '2024'
    },
    {
      id: 4,
      title: 'Restaurant POS System',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'Complete point-of-sale system for restaurants with order management, inventory tracking, and analytics.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      features: ['Order Management', 'Inventory Tracking', 'Sales Analytics', 'Multi-location Support'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'Restaurant Chain Co.',
      duration: '4 weeks',
      year: '2023'
    },
    {
      id: 5,
      title: 'Banking Mobile App UI',
      category: 'design',
      image: '/api/placeholder/600/400',
      description: 'Modern UI/UX design for a banking mobile application focusing on security, usability, and accessibility.',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'First National Bank',
      duration: '3 weeks',
      year: '2023'
    },
    {
      id: 6,
      title: 'SaaS Dashboard Platform',
      category: 'web',
      image: '/api/placeholder/600/400',
      description: 'Comprehensive dashboard for SaaS companies with analytics, user management, and billing integration.',
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
      features: ['Real-time Analytics', 'User Management', 'Billing Integration', 'API Documentation'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'DataFlow Inc.',
      duration: '5 weeks',
      year: '2023'
    },
    {
      id: 7,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      description: 'Cross-platform fitness app with workout tracking, nutrition planning, and social features.',
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'Google Fit'],
      features: ['Workout Tracking', 'Nutrition Planning', 'Social Features', 'Health Integration'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'FitLife Co.',
      duration: '8 weeks',
      year: '2023'
    },
    {
      id: 8,
      title: 'Online Learning Platform',
      category: 'ecommerce',
      image: '/api/placeholder/600/400',
      description: 'E-learning platform with course management, payment processing, and interactive learning tools.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'WebRTC'],
      features: ['Course Management', 'Video Streaming', 'Payment Processing', 'Progress Tracking'],
      liveUrl: '#',
      codeUrl: '#',
      client: 'EduTech Solutions',
      duration: '6 weeks',
      year: '2022'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web':
        return <GlobeAltIcon className="w-5 h-5" />;
      case 'mobile':
        return <DevicePhoneMobileIcon className="w-5 h-5" />;
      case 'ecommerce':
        return <ShoppingCartIcon className="w-5 h-5" />;
      case 'design':
        return <PaintBrushIcon className="w-5 h-5" />;
      default:
        return <CodeBracketIcon className="w-5 h-5" />;
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
              Our Portfolio
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} opacity-90 max-w-3xl mx-auto`}
            >
              Explore our collection of successful projects and see how we've helped 
              businesses transform their digital presence.
            </motion.p>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Technologies Used' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className={`text-3xl md:text-4xl font-bold ${theme.colors.textWhite} mb-2`}>
                  {stat.number}
                </div>
                <p className={`${theme.colors.textWhite} opacity-90 text-sm md:text-base`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={`py-20 ${theme.colors.background}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-8 font-heading`}
            >
              Featured Projects
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `${theme.buttons} ${theme.shadows}`
                      : `${theme.colors.backgroundAlt} ${theme.colors.text} hover:${theme.colors.backgroundAlt} border ${theme.colors.border}`
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  {category.name}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`${theme.colors.backgroundAlt} rounded-2xl ${theme.shadows} border ${theme.colors.border} overflow-hidden group cursor-pointer`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <div className={`w-full h-48 ${theme.colors.background} flex items-center justify-center`}>
                      <div className="text-6xl opacity-20">🖼️</div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${theme.colors.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                      <div className="flex space-x-4">
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform">
                          <EyeIcon className="w-5 h-5" />
                        </button>
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform">
                          <CodeBracketIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs px-3 py-1 rounded-full ${theme.colors.primary} ${theme.colors.textWhite}`}>
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <span className={`text-sm ${theme.colors.textLight}`}>
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold ${theme.colors.text} mb-3`}>
                      {project.title}
                    </h3>
                    
                    <p className={`${theme.colors.textLight} text-sm mb-4 line-clamp-2`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded ${theme.colors.backgroundAlt} ${theme.colors.textLight} border ${theme.colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`text-xs px-2 py-1 rounded ${theme.colors.backgroundAlt} ${theme.colors.textLight}`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${theme.colors.background} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className={`text-3xl font-bold ${theme.colors.text} mb-2`}>
                      {selectedProject.title}
                    </h2>
                    <p className={`${theme.colors.textLight}`}>
                      {selectedProject.client} • {selectedProject.year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`${theme.colors.textLight} hover:${theme.colors.text} text-2xl`}
                  >
                    ×
                  </button>
                </div>

                <div className={`w-full h-64 ${theme.colors.backgroundAlt} rounded-lg mb-6 flex items-center justify-center`}>
                  <div className="text-8xl opacity-20">🖼️</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                      Project Description
                    </h3>
                    <p className={`${theme.colors.textLight} mb-6 leading-relaxed`}>
                      {selectedProject.description}
                    </p>

                    <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                      Key Features
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center gap-2 ${theme.colors.textLight}`}>
                          <div className={`w-2 h-2 rounded-full ${theme.colors.accent}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-sm rounded-full ${theme.colors.primary} ${theme.colors.textWhite}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                      Project Details
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className={`${theme.colors.textLight}`}>Client:</span>
                        <span className={`${theme.colors.text} font-medium`}>
                          {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${theme.colors.textLight}`}>Duration:</span>
                        <span className={`${theme.colors.text} font-medium`}>
                          {selectedProject.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={`${theme.colors.textLight}`}>Year:</span>
                        <span className={`${theme.colors.text} font-medium`}>
                          {selectedProject.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.liveUrl}
                        className={`flex-1 ${theme.buttons} px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 transform hover:scale-105`}
                      >
                        View Live Site
                      </a>
                      <a
                        href={selectedProject.codeUrl}
                        className={`flex-1 border-2 ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.backgroundAlt} px-6 py-3 rounded-lg font-medium text-center transition-all duration-200`}
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready to Start Your Project?
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
              <a
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;