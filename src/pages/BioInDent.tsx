import { motion } from 'framer-motion';
import { Leaf, Droplet, Activity, Heart, ShieldPlus, FileHeart, Sparkles, Stethoscope, Scissors, Smile, Baby } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import WaveDivider from '../components/ui/WaveDivider';
import ServiceCard from '../components/ui/ServiceCard';
import SEO from '../components/SEO';

export default function BioInDent() {
  const philosophy = "Con una visión holística y biológica, nuestro enfoque se centra en tratar la causa raíz de los problemas dentales, utilizando ozonoterapia y materiales 100% biocompatibles para proteger la salud sistémica del paciente.";

  const services = [
    { title: "Odontología Biológica", icon: <Leaf />, desc: "Tratamientos libres de metales, respetando la biología y salud general del cuerpo." },
    { title: "Ozonoterapia Dental", icon: <Droplet />, desc: "Uso de ozono médico para desinfección profunda, cicatrización y estimulación del sistema inmune local." },
    { title: "Examen Epigenético", icon: <FileHeart />, desc: "Evaluación para personalizar tratamientos basados en tu respuesta celular." },
    { title: "Odontología Integral y Estética", icon: <Sparkles />, desc: "Cuidado integral, restaurador y embellecimiento de tu sonrisa." },
    { title: "Disfunción de ATM", icon: <Activity />, desc: "Diagnóstico y tratamiento para la articulación temporomandibular." },
    { title: "Remoción Segura de Amalgamas", icon: <ShieldPlus />, desc: "Protocolo especializado para retirar empastes de metal minimizando la exposición a toxinas." }
  ];

  const specialtyServices = [
    { title: "Endodoncia", icon: <Stethoscope />, desc: "Tratamiento de conductos para salvar tus dientes naturales." },
    { title: "Cirugía Bucal y Maxilofacial", icon: <Scissors />, desc: "Procedimientos quirúrgicos seguros y especializados." },
    { title: "Implantes Dentales", icon: <ShieldPlus />, desc: "Opciones biocompatibles para reemplazar piezas faltantes." },
    { title: "Prótesis Fija y Removible", icon: <Smile />, desc: "Restauración funcional y estética de tu sonrisa." },
    { title: "Ortodoncia Convencional", icon: <Activity />, desc: "Tratamiento con brackets para alinear tus dientes." },
    { title: "Invisalign (Alineadores)", icon: <Sparkles />, desc: "Ortodoncia invisible para mayor comodidad." },
    { title: "Atención Especial a Niños", icon: <Baby />, desc: "Cuidado dental pediátrico con calidez y paciencia." }
  ];

  return (
    <PageTransition>
      <SEO 
        title="Bio in Dent - Odontología Biológica" 
        description="Bio in Dent. Clínica de Odontología Biológica y Ozonoterapia. Tratamientos integrales y libres de metales para proteger tu salud sistémica."
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-[var(--color-bg)]">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-primary)] mb-6 drop-shadow-sm">
              Bio in Dent
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-text)]/80 max-w-2xl mx-auto">
              Odontología Biológica y Ozonoterapia
            </p>
          </motion.div>

          {/* Brand Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-white/20 relative overflow-hidden"
          >
            {/* Soft background glow for card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 flex items-center justify-center p-4 relative z-10 bg-white/10 rounded-full backdrop-blur-sm shadow-inner">
               <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="w-full h-full object-contain drop-shadow-xl brightness-110" />
            </div>
            
            <div className="flex-grow w-full text-center md:text-left relative z-10 text-white">
              <h2 className="text-3xl font-serif font-bold mb-2">Filosofía Bio in Dent</h2>
              <p className="text-[var(--color-secondary)] font-medium mb-6 uppercase tracking-wider text-sm drop-shadow-md">Odontología Biológica</p>
              
              <div className="relative border-l-2 border-[var(--color-secondary)]/50 ml-3 md:ml-0 pl-6 text-white/95 leading-relaxed text-lg italic font-light drop-shadow-sm">
                "{philosophy}"
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider fill="var(--color-surface)" />

      {/* Main Services */}
      <section className="py-20 px-4 md:px-8 bg-[var(--color-surface)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4 text-[var(--color-primary)]">Nuestros Servicios</h2>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            <p className="mt-6 text-[var(--color-text)]/80 max-w-2xl mx-auto">
              La odontología biológica entiende que la boca está conectada con el resto del cuerpo. 
              Nuestros tratamientos están diseñados para promover tu salud integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} title={s.title} description={s.desc} icon={s.icon} delay={i * 0.1} />
            ))}
          </div>

          <div className="text-center mt-24 mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-[var(--color-primary)]">Servicios por Especialista</h2>
            <div className="w-12 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialtyServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} description={s.desc} icon={s.icon} delay={i * 0.1} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <a href="/contacto" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] px-8 py-3 rounded-full font-medium hover:brightness-110 transition-all shadow-md hover:shadow-lg">
                <Heart size={18} /> Agendar cita
              </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
