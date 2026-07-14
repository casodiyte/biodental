import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Shield, HeartHandshake, Microscope, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <PageTransition className="relative min-h-screen">
      {/* Desktop Split Hero Section (Hidden on mobile) */}
      <section className="hidden md:flex relative w-full h-screen flex-row overflow-hidden pt-0">
        
        {/* Top Center Content (Headline) */}
        <div className="absolute top-8 md:top-12 left-0 right-0 flex flex-col items-center justify-center z-30 pointer-events-none px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center px-6 py-8 md:py-10 w-full max-w-3xl drop-shadow-sm pointer-events-none"
          >
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1A3A3A] mb-3 md:mb-5 leading-[1.1]">
              Dos enfoques,<br />
              <span className="text-[#62C8C1]">una misma misión</span>:<br />
              <span className="italic font-normal">cuidar tu sonrisa.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs md:text-base max-w-xl mx-auto mb-6 font-medium leading-relaxed">
              Atención dental integral y estética avanzada en un solo lugar, con tratamientos diseñados para tu salud, bienestar y confianza.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pointer-events-auto">
              <Link to="/contacto" className="bg-[#62C8C1] hover:bg-[#50b2ab] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto text-sm">
                <Calendar size={18} /> Agendar cita
              </Link>
              <Link to="/contacto" className="bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto text-sm">
                <MessageCircle size={18} /> WhatsApp
              </Link>
            </div>
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

        {/* Left Side: Bio in Dent (Green) */}
        <motion.div
          className="relative h-1/2 md:h-full flex flex-col items-center justify-center p-8 cursor-pointer group bg-[#93A785]"
          animate={{
            width: window.innerWidth < 768 ? '100%' : hoveredSide === 'right' ? '45%' : hoveredSide === 'left' ? '55%' : '50%'
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
          style={{ backgroundColor: '#93A785' }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          
          <div className="z-10 text-center flex flex-col items-center mt-32 md:mt-28 md:mr-24 transition-transform duration-500 group-hover:scale-105">
            <div className="h-20 md:h-32 mb-3 md:mb-5 drop-shadow-lg">
              <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="h-full w-auto object-contain" />
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#F5F2EC] mb-1 md:mb-2 drop-shadow-md">
              Bio in Dent
            </h2>
            <p className="text-[#EDE4D4] font-medium text-sm md:text-lg mb-0.5 md:mb-1">Lic. en Estomatología</p>
            <p className="text-[#F5F2EC]/80 text-xs md:text-sm mb-4 md:mb-6 max-w-xs">Odontología Biológica y Ozonoterapia</p>
            
            <Link to="/bio-in-dent" className="inline-flex items-center gap-2 bg-[#F5F2EC] text-[#2D4A3E] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Conocer más <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Natural Dental (Teal) */}
        <motion.div
          className="relative h-1/2 md:h-full flex flex-col items-center justify-center p-8 cursor-pointer group bg-gradient-to-b from-white via-[#E6F7F6] to-[#62C8C1] z-10"
          animate={{
            width: window.innerWidth < 768 ? '100%' : hoveredSide === 'right' ? '55%' : hoveredSide === 'left' ? '45%' : '50%'
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          {/* Perfect Seamless Blend Divider */}
          <div className="hidden md:block absolute top-0 left-0 w-16 md:w-20 h-full bg-gradient-to-r from-[#93A785] to-transparent pointer-events-none z-0"></div>

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          
          <div className="z-10 text-center flex flex-col items-center mt-32 md:mt-28 md:ml-24 transition-transform duration-500 group-hover:scale-105">
            <div className="h-20 md:h-32 mb-3 md:mb-6 relative flex justify-center items-center">
              <div className="absolute -translate-y-4 md:-translate-y-6 w-24 h-24 md:w-32 md:h-32 bg-white/80 blur-xl md:blur-2xl rounded-full z-0"></div>
              <img src="/logos/natural-logo.png" alt="Natural Dental Logo" className="h-full w-auto object-contain relative z-10" />
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#1A3A3A] mb-1 md:mb-2">
              Natural Dental
            </h2>
            <p className="text-[#2D4A3E] font-medium text-sm md:text-lg mb-0.5 md:mb-1">C.D.E.O Lorena Arellano Rosales</p>
            <p className="text-[#1A3A3A]/80 text-xs md:text-sm mb-4 md:mb-6 max-w-xs">Odontología Integral</p>
            
            <Link to="/natural-dental" className="inline-flex items-center gap-2 bg-[#F0FAFA] text-[#1A3A3A] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
              Conocer más <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mobile Unified Hero Section */}
      <section className="md:hidden relative w-full min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden bg-gradient-to-br from-[#93A785] to-[#62C8C1]">
        
        {/* Top Text */}
        <div className="relative z-20 text-center mb-6 mt-4 w-full">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="px-6 py-4 mx-auto max-w-[90%] drop-shadow-sm"
           >
             <h1 className="text-3xl font-serif font-bold text-[#1A3A3A] mb-3 leading-tight">
               Dos enfoques,<br/>
               <span className="text-[#62C8C1]">una misma misión</span>:<br/>
               <span className="italic font-normal">cuidar tu sonrisa.</span>
             </h1>
             <p className="text-gray-600 text-[11px] font-medium leading-relaxed mb-6">
               Atención dental integral y estética avanzada en un solo lugar.
             </p>

             <div className="flex flex-col gap-3">
               <Link to="/contacto" className="bg-[#62C8C1] hover:bg-[#50b2ab] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-md flex items-center justify-center gap-2 text-sm w-full">
                 <Calendar size={18} /> Agendar cita
               </Link>
               <Link to="/contacto" className="bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full font-bold transition-colors shadow-md flex items-center justify-center gap-2 text-sm w-full">
                 <MessageCircle size={18} /> WhatsApp
               </Link>
             </div>
           </motion.div>
        </div>

        {/* Logos Side by Side - EXACTLY Equal Hierarchy */}
        <div className="relative z-20 w-full max-w-sm mx-auto bg-white/95 backdrop-blur-md rounded-[2rem] p-5 border border-white/50 shadow-2xl flex flex-col gap-6">
           <div className="flex flex-row items-stretch justify-center gap-4">
              
              {/* Bio in Dent */}
              <div className="flex-1 flex flex-col items-center text-center">
                 <div className="h-16 mb-4 flex items-center justify-center w-full">
                    <img src="/logos/bio-logo.png" alt="Bio in Dent" className="max-h-full max-w-[90%] object-contain" />
                 </div>
                 <h2 className="text-[13px] font-serif font-bold text-[#93A785] mb-1">Bio in Dent</h2>
                 <p className="text-[9px] text-gray-500 leading-tight mb-4 flex-grow">Odontología Biológica y Ozonoterapia</p>
                 <Link to="/bio-in-dent" className="bg-[#93A785] hover:bg-[#7b8e6f] text-white px-2 py-2.5 rounded-full text-[10px] uppercase tracking-wider font-bold w-full transition-colors shadow-sm flex items-center justify-center gap-1">
                   Descubrir <ArrowRight size={10} />
                 </Link>
              </div>
              
              {/* Divider */}
              <div className="w-px bg-gray-200 my-2 rounded-full"></div>
              
              {/* Natural Dental */}
              <div className="flex-1 flex flex-col items-center text-center">
                 <div className="h-16 mb-4 flex items-center justify-center w-full">
                    <img src="/logos/natural-logo.png" alt="Natural Dental" className="max-h-full max-w-[90%] object-contain" />
                 </div>
                 <h2 className="text-[13px] font-serif font-bold text-[#62C8C1] mb-1">Natural Dental</h2>
                 <p className="text-[9px] text-gray-500 leading-tight mb-4 flex-grow">Odontología Integral</p>
                 <Link to="/natural-dental" className="bg-[#62C8C1] hover:bg-[#50b2ab] text-white px-2 py-2.5 rounded-full text-[10px] uppercase tracking-wider font-bold w-full transition-colors shadow-sm flex items-center justify-center gap-1">
                   Descubrir <ArrowRight size={10} />
                 </Link>
              </div>

           </div>
        </div>
      </section>      {/* Services Preview Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 bg-[#F5F2EC]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D4A3E] mb-6">¿Por qué elegirnos?</h2>
            <div className="w-24 h-1 bg-[#93A785] mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#93A785]/10 rounded-full flex items-center justify-center text-[#93A785] mb-6">
                <Microscope size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#2D4A3E] mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Contamos con equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#62C8C1]/10 rounded-full flex items-center justify-center text-[#62C8C1] mb-6">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#1A3A3A] mb-3">Trato Humano</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Entendemos tus miedos. Ofrecemos una experiencia relajante, libre de dolor y centrada absolutamente en tu comodidad.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#93A785]/10 rounded-full flex items-center justify-center text-[#93A785] mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#2D4A3E] mb-3">Materiales Seguros</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Utilizamos exclusivamente materiales libres de metales que son 100% seguros y compatibles con la biología de tu organismo.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-[#2D4A3E]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#93A785] to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Transforma tu sonrisa hoy</h2>
          <p className="text-[#EDE4D4] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Agenda tu cita de valoración y descubre cómo nuestro enfoque biológico y estético puede mejorar no solo tu sonrisa, sino tu calidad de vida.
          </p>
          <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-[#2D4A3E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F5F2EC] hover:scale-105 transition-all shadow-xl">
            Agendar mi cita <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
