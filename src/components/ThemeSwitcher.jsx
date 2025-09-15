import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SwatchIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, changeTheme, themes, themesList } = useTheme();

  const handleThemeChange = (themeName) => {
    changeTheme(themeName);
    toast.success(`Theme changed to ${themes[themeName].name}`);
    setIsOpen(false);
  };

  const getThemePreview = (themeName) => {
    const theme = themes[themeName];
    return (
      <div className="flex space-x-1">
        <div className={`w-3 h-3 rounded-full ${theme.colors.primary.replace('bg-', 'bg-')}`}></div>
        <div className={`w-3 h-3 rounded-full ${theme.colors.accent.replace('bg-', 'bg-')}`}></div>
        <div className={`w-3 h-3 rounded-full ${theme.colors.secondary.replace('bg-', 'bg-')}`}></div>
      </div>
    );
  };

  return (
    <>
      {/* Theme Switcher Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 rounded-full ${themes[currentTheme].colors.primary} ${themes[currentTheme].colors.textWhite} shadow-lg hover:shadow-xl transition-all duration-300`}
          title="Switch Theme"
        >
          <SwatchIcon className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            />

            {/* Theme Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className={`fixed right-0 top-0 h-full w-80 ${themes[currentTheme].colors.background} shadow-2xl z-50 overflow-y-auto`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-xl font-bold ${themes[currentTheme].colors.text}`}>
                    Choose Theme
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded-lg ${themes[currentTheme].colors.textLight} hover:${themes[currentTheme].colors.backgroundAlt} transition-colors`}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Current Theme */}
                <div className="mb-6">
                  <p className={`text-sm ${themes[currentTheme].colors.textLight} mb-2`}>
                    Current Theme
                  </p>
                  <div className={`p-3 rounded-lg ${themes[currentTheme].colors.backgroundAlt} ${themes[currentTheme].colors.border} border`}>
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${themes[currentTheme].colors.text}`}>
                        {themes[currentTheme].name}
                      </span>
                      {getThemePreview(currentTheme)}
                    </div>
                  </div>
                </div>

                {/* Theme Options */}
                <div className="space-y-3">
                  <p className={`text-sm ${themes[currentTheme].colors.textLight} mb-3`}>
                    Available Themes
                  </p>
                  {themesList.map((themeName) => (
                    <motion.button
                      key={themeName}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleThemeChange(themeName)}
                      className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                        themeName === currentTheme
                          ? `${themes[currentTheme].colors.primary} ${themes[currentTheme].colors.textWhite} border-transparent`
                          : `${themes[currentTheme].colors.backgroundAlt} ${themes[currentTheme].colors.border} hover:${themes[currentTheme].colors.backgroundAlt} hover:border-opacity-50`
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-medium ${
                            themeName === currentTheme 
                              ? themes[currentTheme].colors.textWhite 
                              : themes[currentTheme].colors.text
                          }`}>
                            {themes[themeName].name}
                          </h3>
                          <p className={`text-sm mt-1 ${
                            themeName === currentTheme 
                              ? 'text-white text-opacity-80' 
                              : themes[currentTheme].colors.textLight
                          }`}>
                            {themeName === currentTheme ? 'Currently Active' : 'Click to apply'}
                          </p>
                        </div>
                        {getThemePreview(themeName)}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Theme Info */}
                <div className={`mt-6 p-4 rounded-lg ${themes[currentTheme].colors.backgroundAlt}`}>
                  <h4 className={`font-medium ${themes[currentTheme].colors.text} mb-2`}>
                    About Themes
                  </h4>
                  <p className={`text-sm ${themes[currentTheme].colors.textLight}`}>
                    Choose from 10 professionally designed themes. Each theme offers a unique 
                    color palette and aesthetic to match your brand or preference.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;