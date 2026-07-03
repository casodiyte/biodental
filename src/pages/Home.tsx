import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <PageTransition className="relative min-h-screen">
      {/* Split Hero Section */}
      <section className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden pt-20 md:pt-0">
        
        {/* Top Center Content (Headline) */}
        <div className="absolute top-28 left-0 right-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-2">
              Tu sonrisa, nuestra pasión
            </h1>
            <p className="text-white drop-shadow-md text-sm md:text-lg font-medium">
              Dos especialistas, un mismo compromiso con tu salud dental
            </p>
          </motion.div>
        </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white drop-shadow-md z-20"
          >
            <ChevronDown size={32} />
          </motion.div>

        {/* Left Side: Bio in Dent (Sage Green) */}
        <motion.div
          className="relative h-1/2 md:h-full flex flex-col items-center justify-center p-8 cursor-pointer group"
          animate={{
            width: window.innerWidth < 768 ? '100%' : hoveredSide === 'left' ? '55%' : hoveredSide === 'right' ? '45%' : '50%'
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{ backgroundColor: '#93A785' }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          
          <div className="z-10 text-center flex flex-col items-center mt-12 md:mt-0 md:mr-24 transition-transform duration-500 group-hover:scale-105">
            <div className="h-32 md:h-40 mb-6 drop-shadow-lg">
              <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="h-full w-auto object-contain" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F2EC] mb-2 drop-shadow-md">
              Bio in Dent
            </h2>
            <p className="text-[#EDE4D4] font-medium text-lg mb-1">Lic. en Estomatología</p>
            <p className="text-[#F5F2EC]/80 text-sm mb-6 max-w-xs">Odontología Biológica y Ozonoterapia</p>
            
            <Link to="/bio-in-dent" className="inline-flex items-center gap-2 bg-[#F5F2EC] text-[#2D4A3E] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Conocer más <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Natural Dental (Teal) */}
        <motion.div
          className="relative h-1/2 md:h-full flex flex-col items-center justify-center p-8 cursor-pointer group"
          animate={{
            width: window.innerWidth < 768 ? '100%' : hoveredSide === 'right' ? '55%' : hoveredSide === 'left' ? '45%' : '50%'
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{ backgroundColor: '#62C8C1' }}
        >
          {/* Organic SVG Divider for Desktop */}
          <div className="hidden md:block absolute top-0 -left-1 w-24 h-full text-[#93A785]">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="w-full h-full fill-current">
              <path d="M0,0 Q50,50 0,100 Z" />
            </svg>
          </div>

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          
          <div className="z-10 text-center flex flex-col items-center mt-12 md:mt-0 md:ml-24 transition-transform duration-500 group-hover:scale-105">
            <div className="h-32 md:h-40 mb-8 relative flex justify-center items-center">
              <div className="absolute -translate-y-6 w-32 h-32 md:w-40 md:h-40 bg-white/80 blur-2xl rounded-full z-0"></div>
              <img src="/logos/natural-logo.png" alt="Natural Dental Logo" className="h-full w-auto object-contain relative z-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#F0FAFA] mb-2 drop-shadow-md">
              Natural Dental
            </h2>
            <p className="text-[#E6F7F6] font-medium text-lg mb-1">Dra. Lorena Arellano Rosales</p>
            <p className="text-[#F0FAFA]/80 text-sm mb-6 max-w-xs">Ortodoncia y Ortopedia Maxilar</p>
            
            <Link to="/natural-dental" className="inline-flex items-center gap-2 bg-[#F0FAFA] text-[#1A3A3A] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Conocer más <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 px-4 md:px-8 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D4A3E] mb-6">Atención Integral y Especializada</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#93A785] to-[#62C8C1] mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Creemos que la salud bucal es el reflejo de la salud integral. Por eso unimos dos especialidades bajo un mismo techo, ofreciendo tratamientos funcionales, estéticos y biológicamente compatibles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Bio in Dent Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F5F2EC] rounded-3xl p-8 md:p-10 border border-[#93A785]/20 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#93A785]/20 flex items-center justify-center text-[#93A785] mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2D4A3E] mb-4">Odontología Biológica</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                En <strong>Bio in Dent</strong>, tratamos la causa raíz de los problemas dentales utilizando ozonoterapia y materiales 100% libres de metales. Nuestro enfoque holístico protege tu salud sistémica y fortalece tu sistema inmunológico.
              </p>
              <ul className="space-y-3 text-sm text-[#2D4A3E] font-medium mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#93A785]"></div> Ozonoterapia Dental</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#93A785]"></div> Remoción Segura de Amalgamas</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#93A785]"></div> Terapia Neural</li>
              </ul>
              <Link to="/bio-in-dent" className="text-[#93A785] font-bold hover:text-[#2D4A3E] transition-colors inline-flex items-center gap-2">
                Descubrir Bio in Dent <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Natural Dental Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F0FAFA] rounded-3xl p-8 md:p-10 border border-[#62C8C1]/20 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#62C8C1]/20 flex items-center justify-center text-[#62C8C1] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 6 4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"/><path d="m20 22-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A3A3A] mb-4">Ortodoncia y Estética</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                En <strong>Natural Dental</strong>, diseñamos sonrisas perfectas y funcionales. Especializados en ortopedia maxilar y ortodoncia invisible, corregimos alteraciones guiando el desarrollo facial con la tecnología más avanzada.
              </p>
              <ul className="space-y-3 text-sm text-[#1A3A3A] font-medium mb-8">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#62C8C1]"></div> Alineadores Invisibles</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#62C8C1]"></div> Ortodoncia Convencional</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#62C8C1]"></div> Rehabilitación Oral</li>
              </ul>
              <Link to="/natural-dental" className="text-[#62C8C1] font-bold hover:text-[#1A3A3A] transition-colors inline-flex items-center gap-2">
                Descubrir Natural Dental <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
