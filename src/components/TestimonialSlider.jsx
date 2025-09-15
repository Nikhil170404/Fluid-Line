import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {  AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const TestimonialSlider = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Serum Institute of India Pvt. Ltd.',
      role: 'Leading Pharmaceutical Company',
      content: 'WebCraft was awarded the turnkey project for Supply, Inspection, Testing, Erection and Commissioning of complete website infrastructure. Their expertise in modern web technologies and attention to detail exceeded our expectations.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Jubilant Life Sciences',
      role: 'Healthcare & Life Sciences',
      content: 'We are pleased to be associated with WebCraft as our strategic digital partner in our continuous journey on the path of progress. Their innovative solutions have transformed our online presence.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Cargill India Ltd.',
      role: 'Global Food Corporation',
      content: 'WebCraft was awarded turnkey projects for Supply, Development & Deployment of our digital platforms. Their commitment to quality and timely delivery makes them our preferred technology partner.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'TechCorp Solutions',
      role: 'Technology Startup',
      content: 'Working with WebCraft has been a game-changer for our startup. They delivered a stunning website that perfectly captures our brand vision and has significantly boosted our online conversions.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Global Retail Chain',
      role: 'E-commerce Business',
      content: 'The team at WebCraft transformed our outdated website into a modern, responsive platform. Our online sales have increased by 150% since the launch. Highly recommended!',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`py-20 ${theme.colors.backgroundAlt}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.text} mb-4 font-heading`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg ${theme.colors.textLight} max-w-2xl mx-auto`}>
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-80 md:h-64 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${theme.colors.background} rounded-2xl ${theme.shadows} p-8 border ${theme.colors.border}`}
              >
                <div className="text-center h-full flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className={`w-5 h-5 ${theme.colors.accent.replace('bg-', 'text-')} fill-current`} />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className={`text-lg md:text-xl ${theme.colors.textLight} mb-8 italic leading-relaxed`}>
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className={`w-12 h-12 ${theme.colors.backgroundAlt} rounded-full flex items-center justify-center`}>
                      <span className={`text-lg font-semibold ${theme.colors.text}`}>
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${theme.colors.text}`}>
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className={`text-sm ${theme.colors.textLight}`}>
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${theme.colors.background} ${theme.shadows} p-3 rounded-full ${theme.colors.textLight} hover:${theme.colors.text} transition-all duration-200 z-10`}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${theme.colors.background} ${theme.shadows} p-3 rounded-full ${theme.colors.textLight} hover:${theme.colors.text} transition-all duration-200 z-10`}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? theme.colors.primary
                    : `${theme.colors.border} hover:${theme.colors.backgroundAlt}`
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <p className={`text-center ${theme.colors.textLight} mb-8`}>
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`w-24 h-12 ${theme.colors.backgroundAlt} rounded-lg flex items-center justify-center`}
              >
                <span className={`text-xs ${theme.colors.textLight} font-semibold`}>
                  LOGO {i}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;