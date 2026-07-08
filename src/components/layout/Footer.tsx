import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-bg)] py-12 transition-colors duration-500 ease-in-out">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brands */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-6 w-fit mb-2">
              <img src="/logos/natural-logo.png" alt="Natural Dental Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90" />
              <div className="w-px h-8 bg-[var(--color-bg)]/30"></div>
              <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-sm opacity-80 font-light mt-2 max-w-xs">
              Dos especialistas, un mismo compromiso con tu salud dental. Odontología integral con enfoque humano y profesional.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold mb-2">Enlaces Rápidos</h4>
            <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">Inicio</Link>
            <Link to="/natural-dental" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">Natural Dental</Link>
            <Link to="/bio-in-dent" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">Bio in Dent</Link>
            <Link to="/nosotras" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">Nosotras</Link>
            <Link to="/contacto" className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">Contacto</Link>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold mb-2">Contacto</h4>
            <a href="tel:5523413894" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">
              <Phone size={16} />
              <span>55 23 41 38 94 (Natural Dental)</span>
            </a>
            <a href="tel:5521385240" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-[var(--color-primary)] transition-colors">
              <Phone size={16} />
              <span>55 21 38 52 40 (Bio in Dent)</span>
            </a>
            <div className="flex items-center gap-2 text-sm opacity-80 mt-2">
              <MapPin size={16} className="shrink-0" />
              <span>Ubicaciones en CDMX / Estado de México</span>
            </div>
            
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-bg)]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {year} Natural Dental & Bio in Dent. Todos los derechos reservados.</p>
          <p>Diseño orgánico y profesional</p>
        </div>
      </div>
    </footer>
  );
}
