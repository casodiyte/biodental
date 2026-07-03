import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Contacto() {
  const [activeTab, setActiveTab] = useState<'natural' | 'bio'>('natural');

  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-4 md:px-8 min-h-[calc(100vh-300px)] relative transition-colors duration-500"
               style={{ backgroundColor: activeTab === 'natural' ? '#F0FAFA' : '#F5F2EC' }}>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#2D4A3E] mb-6">
              ¿Lista para tu mejor sonrisa?
            </h1>
            <p className="text-lg opacity-80 text-[#2D4A3E]">
              Selecciona con quién deseas agendar tu cita de valoración.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-md flex relative overflow-hidden">
              <div 
                className="absolute top-2 bottom-2 w-[calc(50%-8px)] rounded-full transition-all duration-500 ease-out z-0"
                style={{ 
                  left: activeTab === 'natural' ? '8px' : 'calc(50% + 4px)',
                  backgroundColor: activeTab === 'natural' ? '#62C8C1' : '#93A785'
                }}
              />
              <button 
                onClick={() => setActiveTab('natural')}
                className={`relative z-10 px-6 md:px-12 py-3 rounded-full font-serif font-bold text-sm md:text-base transition-colors duration-300 ${activeTab === 'natural' ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Natural Dental
              </button>
              <button 
                onClick={() => setActiveTab('bio')}
                className={`relative z-10 px-6 md:px-12 py-3 rounded-full font-serif font-bold text-sm md:text-base transition-colors duration-300 ${activeTab === 'bio' ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Bio in Dent
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative h-[450px] md:h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'natural' ? (
                <motion.div
                  key="natural"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#62C8C1]/30 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 bg-[#62C8C1]/10 p-8 flex flex-col justify-center items-center text-center">
                     <div className="h-24 mb-4">
                        <img src="/logos/natural-logo.png" alt="Natural Dental Logo" className="h-full w-auto object-contain" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-[#1A3A3A]">Dra. Lorena Arellano Rosales</h2>
                      <p className="text-[#62C8C1] font-medium uppercase tracking-wider text-xs mt-1">Ortodoncia y Ortopedia</p>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
                    <a href="tel:5523413894" className="flex items-center gap-4 text-gray-700 hover:text-[#62C8C1] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#62C8C1]/20 transition-colors">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Llamadas</p>
                        <p className="font-semibold text-lg">55 23 41 38 94</p>
                      </div>
                    </a>
                    <a href="https://wa.me/5523413894" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-[#25D366] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</p>
                        <p className="font-semibold text-lg">Enviar mensaje</p>
                      </div>
                    </a>
                    <a href="https://share.google/TNmsyMLrpkYFiQTiq" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-[#62C8C1] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#62C8C1]/20 transition-colors">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Ubicación</p>
                        <p className="font-semibold text-lg">Abrir en Google Maps</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="bio"
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#93A785]/30 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 bg-[#93A785]/10 p-8 flex flex-col justify-center items-center text-center">
                     <div className="h-24 mb-4">
                        <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="h-full w-auto object-contain" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold text-[#2D4A3E]">Licenciada en Estomatología</h2>
                      <p className="text-[#7A8E6E] font-medium uppercase tracking-wider text-xs mt-1">Odontología Biológica</p>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
                    <a href="tel:5521385240" className="flex items-center gap-4 text-gray-700 hover:text-[#93A785] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#93A785]/20 transition-colors">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Llamadas</p>
                        <p className="font-semibold text-lg">55 21 38 52 40</p>
                      </div>
                    </a>
                    <a href="https://wa.me/5521385240" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-[#25D366] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</p>
                        <p className="font-semibold text-lg">Enviar mensaje</p>
                      </div>
                    </a>
                    <a href="https://share.google/plj02tekOxHwOlc63" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-700 hover:text-[#93A785] transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#93A785]/20 transition-colors">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Ubicación</p>
                        <p className="font-semibold text-lg">Abrir en Google Maps</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
