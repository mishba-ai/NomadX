import { useState, useEffect } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#333333',
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#f59e0b',
    card: '#f3f4f6',
    border: '#e5e7eb'
  },
  dark: {
    background: '#111827',
    text: '#f3f4f6',
    primary: '#60a5fa',
    secondary: '#34d399',
    accent: '#fbbf24',
    card: '#1f2937',
    border: '#374151'
  }
};

export default function Theme() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    Object.entries(themes[theme]).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="w-full h-full  bg-[#141414] text-sky-200 p-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-">Theme Settings</h1>
        <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
          <h2 className="text-3xl font-semibold mb-6">Current Theme: {currentTheme}</h2>
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl">Toggle Theme</span>
            <button
              onClick={toggleTheme}
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary p-6 rounded-xl text-center shadow-md">
              <span className="block font-medium text-white">Primary Color</span>
            </div>
            <div className="bg-secondary p-6 rounded-xl text-center shadow-md">
              <span className="block font-medium text-white">Secondary Color</span>
            </div>
            <div className="bg-accent p-6 rounded-xl text-center shadow-md">
              <span className="block font-medium text-white">Accent Color</span>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-xl border border-border">
          <h3 className="text-2xl font-semibold mb-4">Theme Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-xl border border-border">
              <p className="text-text mb-2">Background Color</p>
              <div className="w-full h-20 bg-primary rounded-md mb-2"></div>
              <div className="w-full h-20 bg-secondary rounded-md mb-2"></div>
              <div className="w-full h-20 bg-accent rounded-md"></div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-text mb-2">Card Color</p>
              <button className="w-full py-2 bg-primary text-white rounded-md mb-2">Primary Button</button>
              <button className="w-full py-2 bg-secondary text-white rounded-md mb-2">Secondary Button</button>
              <button className="w-full py-2 bg-accent text-white rounded-md">Accent Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



