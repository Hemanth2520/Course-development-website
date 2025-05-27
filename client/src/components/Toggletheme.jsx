import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Detect system preference on component mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  // Apply theme based on state
  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
      root.style.setProperty('--text-color', 'var(--text-color-dark)');
      root.style.setProperty('--btn-color', 'var(--btn-color-dark)');
      root.style.setProperty('--btn-hover', 'var(--btn-hover-dark)');
      root.style.setProperty('--helper-color', 'var(--helper-color-dark)');
      root.style.setProperty('--card-bg', 'var(--card-bg-dark)');
      root.style.setProperty('--input-bg', 'var(--input-bg-dark)');
      root.style.setProperty('--input-border', 'var(--input-border-dark)');
      root.style.setProperty('--box-shadow', 'var(--shadow-dark)');
    } else {
      root.style.setProperty('--bg-color', 'var(--bg-color-light)');
      root.style.setProperty('--text-color', 'var(--text-color-light)');
      root.style.setProperty('--btn-color', 'var(--btn-color-light)');
      root.style.setProperty('--btn-hover', 'var(--btn-hover-light)');
      root.style.setProperty('--helper-color', 'var(--helper-color-light)');
      root.style.setProperty('--card-bg', 'var(--card-bg-light)');
      root.style.setProperty('--input-bg', 'var(--input-bg-light)');
      root.style.setProperty('--input-border', 'var(--input-border-light)');
      root.style.setProperty('--box-shadow', 'var(--shadow-light)');
    }
  }, [darkMode]);

  return (
    <div className="theme-toggle" onClick={toggleTheme} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </div>
  );
};