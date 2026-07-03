import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Natural Dental', path: '/natural-dental' },
    { name: 'Bio in Dent', path: '/bio-in-dent' },
    { name: 'Nosotras', path: '/nosotras' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 z-50 group">
          <div className="flex gap-4 items-center">
            <img src="/logos/natural-logo.png" alt="Natural Dental" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            <img src="/logos/bio-logo.png" alt="Bio in Dent" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative text-sm uppercase tracking-wider font-semibold transition-colors hover:text-[#62C8C1]',
                  isActive ? 'text-[#62C8C1]' : 'text-[#2D4A3E]'
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#62C8C1] rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-[#2D4A3E] p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden',
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-2xl font-serif transition-colors',
                location.pathname === link.path ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
