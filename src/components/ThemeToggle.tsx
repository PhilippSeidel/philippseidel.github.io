import React from 'react';
import { useEffect, useState, ChangeEvent } from 'react';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const attrTheme = document.body.getAttribute('data-bs-theme');
        if (attrTheme === 'light' || attrTheme === 'dark') return attrTheme;
        return 'dark'; // fallback
      });

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <div className="form-check form-switch px-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === 'dark' ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-sun-fill"></i>}
      </label>
    </div>
  );
};

export default ThemeToggle;
