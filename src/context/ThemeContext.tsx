import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

type Theme = 'natural' | 'bio' | 'home' | 'shared';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>('home');

  useEffect(() => {
    let newTheme: Theme = 'home';
    
    if (location.pathname === '/natural-dental') {
      newTheme = 'natural';
    } else if (location.pathname === '/bio-in-dent') {
      newTheme = 'bio';
    } else if (location.pathname === '/nosotras' || location.pathname === '/contacto') {
      newTheme = 'shared';
    }

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
