import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";

function CalEmbed({ calLink, brandColor }: { calLink: string, brandColor: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: brandColor } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [brandColor]);

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-white relative">
      <Cal
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
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
                      <h2 className="text-2xl font-serif font-bold text-[#1A3A3A]">C.D.E.O Lorena Arellano Rosales</h2>
                      <p className="text-[#62C8C1] font-medium uppercase tracking-wider text-xs mt-1">Cirujano Dentista Especialista en Ortodoncia</p>
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

          {/* Agenda tu Cita Section */}
          <div className="mt-32 text-center pb-12">
            <svg className="w-full h-12 mb-8 text-[#93A785]/20" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" />
            </svg>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-[#2D4A3E] mb-10"
            >
              Agenda tu cita en línea
            </motion.h2>
            
            <div className="flex justify-center mb-10">
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

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-4 md:p-8 shadow-xl border-2 transition-colors duration-500"
              style={{ borderColor: activeTab === 'natural' ? 'rgba(98,200,193,0.3)' : 'rgba(147,167,133,0.3)' }}
            >
              {activeTab === 'natural' ? (
                <CalEmbed key="cal-natural" calLink="lnatural-dental" brandColor="#62C8C1" />
              ) : (
                <CalEmbed key="cal-bio" calLink="bioindent" brandColor="#93A785" />
              )}
            </motion.div>
          </div>

          {/* Maps Section */}
          <div className="mt-20 mb-10 text-center pb-12">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-[#2D4A3E] mb-12"
            >
              Encuéntranos
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              {/* Natural Dental Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white px-8 py-3 rounded-t-2xl shadow-sm border-b-2 border-[#62C8C1] w-3/4 -mb-2 relative z-10">
                  <h3 className="font-serif font-bold text-[#1A3A3A]">Natural Dental</h3>
                </div>
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-[#62C8C1]/50 bg-gray-100">
                  <iframe 
                    src="https://maps.google.com/maps?q=Natural+Dental+CDMX&hl=es&z=15&output=embed" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0, borderRadius: '16px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a 
                  href="https://share.google/TNmsyMLrpkYFiQTiq" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 px-8 py-3 rounded-full bg-[#62C8C1] text-white font-bold hover:bg-[#50b2ab] transition-all shadow-md flex items-center gap-2"
                >
                  <MapPin size={18} /> Cómo llegar
                </a>
              </motion.div>

              {/* Bio in Dent Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white px-8 py-3 rounded-t-2xl shadow-sm border-b-2 border-[#93A785] w-3/4 -mb-2 relative z-10">
                  <h3 className="font-serif font-bold text-[#2D4A3E]">Bio in Dent</h3>
                </div>
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-[#93A785]/50 bg-gray-100">
                  <iframe 
                    src="https://maps.google.com/maps?q=Bio+in+Dent+CDMX&hl=es&z=15&output=embed" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0, borderRadius: '16px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a 
                  href="https://share.google/plj02tekOxHwOlc63" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-6 px-8 py-3 rounded-full bg-[#93A785] text-white font-bold hover:bg-[#7b8e6f] transition-all shadow-md flex items-center gap-2"
                >
                  <MapPin size={18} /> Cómo llegar
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
