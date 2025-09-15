import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {  } from 'framer-motion';
import { 
  UserGroupIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  HeartIcon,
  CheckCircleIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const { theme } = useTheme();

  const values = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Quality',
      description: 'Every project undergoes rigorous testing and quality assurance to ensure exceptional performance and reliability.',
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Customer Focus',
      description: 'Your success is our priority. We work closely with you to understand your needs and exceed expectations.',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in transparent communication and collaborative partnerships that drive mutual success.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      bio: 'With 10+ years in web development, Alex leads our vision of making quality web solutions accessible to all businesses.',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Sarah brings expertise in modern frameworks and AI integration, ensuring our solutions are always cutting-edge.',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Design Director',
      image: '/api/placeholder/300/300',
      bio: 'Mike crafts beautiful, user-centered designs that not only look great but drive real business results.',
    },
    {
      name: 'Emily Watson',
      role: 'Project Manager',
      image: '/api/placeholder/300/300',
      bio: 'Emily ensures every project is delivered on time and exceeds client expectations through meticulous planning.',
    },
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to democratize web development' },
    { year: '2020', title: '50+ Projects', description: 'Reached our first major milestone of successful projects' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to include specialized developers and designers' },
    { year: '2022', title: 'AI Integration', description: 'Pioneered AI-enhanced development processes' },
    { year: '2023', title: '200+ Clients', description: 'Served over 200 satisfied clients across various industries' },
    { year: '2024', title: 'Global Reach', description: 'Expanded services to international markets' },
  ];

  const stats = [
    { number: 500, label: 'Projects Completed', suffix: '+' },
    { number: 200, label: 'Happy Clients', suffix: '+' },
    { number: 15, label: 'Team Members', suffix: '+' },
    { number: 5, label: 'Years Experience', suffix: '+' },
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
              About WebCraft
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl ${theme.colors.textWhite} opacity-90 max-w-3xl mx-auto`}
            >
              We're passionate about creating digital experiences that transform businesses 
              and drive real results. Our mission is to make professional web development 
              accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className={`${theme.colors.textLight}`}>
                  Founded in 2019, WebCraft began with a simple yet ambitious goal: to bridge the gap 
                  between high-quality web development and affordability. We noticed that many businesses, 
                  especially startups and small enterprises, struggled to find professional web services 
                  that fit their budgets.
                </p>
                <p className={`${theme.colors.textLight}`}>
                  Our founders, with their combined 20+ years of experience in technology and design, 
                  set out to create a company that would deliver enterprise-level quality at accessible prices. 
                  We've since grown into a team of passionate developers, designers, and strategists who 
                  share this vision.
                </p>
                <p className={`${theme.colors.textLight}`}>
                  Today, we're proud to have helped over 500 businesses establish their digital presence 
                  and achieve their online goals. Our commitment to innovation, quality, and customer 
                  satisfaction remains stronger than ever.
                </p>
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
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-3xl font-bold ${theme.colors.primary.replace('bg-', 'text-')} mb-2`}>
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className={`text-sm ${theme.colors.textLight}`}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              These core values guide everything we do and shape the way we work with our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${theme.colors.background} p-8 rounded-xl ${theme.shadows} border ${theme.colors.border} text-center group`}
              >
                <div className={`${theme.colors.primary} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${theme.colors.textWhite} group-hover:scale-110 transition-transform duration-200`}>
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme.colors.text} mb-4`}>
                  {value.title}
                </h3>
                <p className={`${theme.colors.textLight} leading-relaxed`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              Key milestones that have shaped our company and driven our growth.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${theme.colors.border} h-full hidden lg:block`}></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
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
                      <div className={`text-2xl font-bold ${theme.colors.primary.replace('bg-', 'text-')} mb-2`}>
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-semibold ${theme.colors.text} mb-3`}>
                        {milestone.title}
                      </h3>
                      <p className={`${theme.colors.textLight}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className={`w-4 h-4 ${theme.colors.primary} rounded-full border-4 ${theme.colors.background} z-10 my-4 lg:my-0 hidden lg:block`}></div>

                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textLight} max-w-3xl mx-auto`}
            >
              The talented individuals behind WebCraft who make the magic happen every day.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${theme.colors.background} rounded-xl ${theme.shadows} border ${theme.colors.border} overflow-hidden group`}
              >
                <div className="relative overflow-hidden">
                  <div className={`w-full h-64 ${theme.colors.backgroundAlt} flex items-center justify-center`}>
                    <UserGroupIcon className={`w-20 h-20 ${theme.colors.textLight}`} />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.colors.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold ${theme.colors.text} mb-2`}>
                    {member.name}
                  </h3>
                  <p className={`${theme.colors.primary.replace('bg-', 'text-')} font-medium mb-3`}>
                    {member.role}
                  </p>
                  <p className={`${theme.colors.textLight} text-sm leading-relaxed`}>
                    {member.bio}
                  </p>
                </div>
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
              Ready to Work with Us?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-xl ${theme.colors.textWhite} opacity-90 mb-8 max-w-2xl mx-auto`}
            >
              Let's bring your vision to life. Contact us today for a free consultation.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;