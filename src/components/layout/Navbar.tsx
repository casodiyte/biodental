import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="flex items-center gap-2 md:gap-4 z-50 group shrink-0">
          <div className="flex gap-2 md:gap-4 items-center">
            <img src="/logos/natural-logo.png" alt="Natural Dental" className="h-7 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            <img src="/logos/bio-logo.png" alt="Bio in Dent" className="h-7 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
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

        {/* Mobile Nav Dropdown */}
        <div
          className={cn(
            'absolute top-full left-0 w-full bg-white shadow-xl flex flex-col transition-all duration-300 ease-in-out origin-top md:hidden',
            isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'px-6 py-4 text-sm uppercase tracking-wider font-semibold border-b border-gray-100 last:border-none transition-colors',
                location.pathname === link.path ? 'text-[#62C8C1] bg-gray-50' : 'text-[#2D4A3E] hover:bg-gray-50'
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
