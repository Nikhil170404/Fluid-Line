import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme definitions
const themes = {
  corporate: {
    name: 'Corporate Blue',
    colors: {
      primary: 'bg-blue-600',
      primaryHover: 'hover:bg-blue-700',
      secondary: 'bg-gray-100',
      accent: 'bg-red-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-gray-50',
      border: 'border-gray-200',
      gradient: 'from-blue-600 to-blue-800',
    },
    shadows: 'shadow-lg shadow-blue-500/25',
    buttons: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  modern: {
    name: 'Modern Dark',
    colors: {
      primary: 'bg-gray-900',
      primaryHover: 'hover:bg-gray-800',
      secondary: 'bg-gray-800',
      accent: 'bg-emerald-500',
      text: 'text-white',
      textLight: 'text-gray-300',
      textWhite: 'text-white',
      background: 'bg-gray-900',
      backgroundAlt: 'bg-gray-800',
      border: 'border-gray-700',
      gradient: 'from-gray-900 to-black',
    },
    shadows: 'shadow-lg shadow-emerald-500/25',
    buttons: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  },
  vibrant: {
    name: 'Vibrant Purple',
    colors: {
      primary: 'bg-purple-600',
      primaryHover: 'hover:bg-purple-700',
      secondary: 'bg-pink-100',
      accent: 'bg-yellow-400',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-purple-50',
      border: 'border-purple-200',
      gradient: 'from-purple-600 to-pink-600',
    },
    shadows: 'shadow-lg shadow-purple-500/25',
    buttons: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
  ocean: {
    name: 'Ocean Breeze',
    colors: {
      primary: 'bg-cyan-600',
      primaryHover: 'hover:bg-cyan-700',
      secondary: 'bg-blue-100',
      accent: 'bg-orange-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-cyan-50',
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-blue-600',
    },
    shadows: 'shadow-lg shadow-cyan-500/25',
    buttons: 'bg-cyan-600 hover:bg-cyan-700 text-white',
  },
  sunset: {
    name: 'Sunset Orange',
    colors: {
      primary: 'bg-orange-600',
      primaryHover: 'hover:bg-orange-700',
      secondary: 'bg-orange-100',
      accent: 'bg-red-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-orange-50',
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-red-500',
    },
    shadows: 'shadow-lg shadow-orange-500/25',
    buttons: 'bg-orange-600 hover:bg-orange-700 text-white',
  },
  forest: {
    name: 'Forest Green',
    colors: {
      primary: 'bg-green-700',
      primaryHover: 'hover:bg-green-800',
      secondary: 'bg-green-100',
      accent: 'bg-yellow-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-green-50',
      border: 'border-green-200',
      gradient: 'from-green-600 to-green-800',
    },
    shadows: 'shadow-lg shadow-green-500/25',
    buttons: 'bg-green-700 hover:bg-green-800 text-white',
  },
  royal: {
    name: 'Royal Indigo',
    colors: {
      primary: 'bg-indigo-700',
      primaryHover: 'hover:bg-indigo-800',
      secondary: 'bg-indigo-100',
      accent: 'bg-gold-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-indigo-50',
      border: 'border-indigo-200',
      gradient: 'from-indigo-600 to-purple-700',
    },
    shadows: 'shadow-lg shadow-indigo-500/25',
    buttons: 'bg-indigo-700 hover:bg-indigo-800 text-white',
  },
  rose: {
    name: 'Rose Gold',
    colors: {
      primary: 'bg-rose-600',
      primaryHover: 'hover:bg-rose-700',
      secondary: 'bg-rose-100',
      accent: 'bg-amber-500',
      text: 'text-gray-900',
      textLight: 'text-gray-600',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-rose-50',
      border: 'border-rose-200',
      gradient: 'from-rose-500 to-pink-600',
    },
    shadows: 'shadow-lg shadow-rose-500/25',
    buttons: 'bg-rose-600 hover:bg-rose-700 text-white',
  },
  neon: {
    name: 'Neon Cyber',
    colors: {
      primary: 'bg-gray-900',
      primaryHover: 'hover:bg-gray-800',
      secondary: 'bg-gray-800',
      accent: 'bg-lime-400',
      text: 'text-lime-400',
      textLight: 'text-gray-300',
      textWhite: 'text-lime-400',
      background: 'bg-black',
      backgroundAlt: 'bg-gray-900',
      border: 'border-lime-400',
      gradient: 'from-black to-gray-900',
    },
    shadows: 'shadow-lg shadow-lime-400/25',
    buttons: 'bg-lime-400 hover:bg-lime-500 text-black',
  },
  minimalist: {
    name: 'Minimalist White',
    colors: {
      primary: 'bg-gray-800',
      primaryHover: 'hover:bg-gray-900',
      secondary: 'bg-gray-50',
      accent: 'bg-black',
      text: 'text-gray-900',
      textLight: 'text-gray-500',
      textWhite: 'text-white',
      background: 'bg-white',
      backgroundAlt: 'bg-gray-50',
      border: 'border-gray-300',
      gradient: 'from-gray-100 to-white',
    },
    shadows: 'shadow-lg shadow-gray-500/10',
    buttons: 'bg-black hover:bg-gray-800 text-white',
  },
};

const ThemeContext = createContext();

// Custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('corporate');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('portfolio-theme', themeName);
    }
  };

  const theme = themes[currentTheme];

  const value = { 
    currentTheme, 
    theme, 
    changeTheme, 
    themes,
    themesList: Object.keys(themes)
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};