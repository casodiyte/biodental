import { motion } from 'framer-motion';
import { Sparkles, Stethoscope, Smile, ShieldCheck, Heart } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import WaveDivider from '../components/ui/WaveDivider';
import ServiceCard from '../components/ui/ServiceCard';

export default function NaturalDental() {
  const services = [
    { title: "Odontología general y estética", icon: <Sparkles />, desc: "Tratamientos restaurativos con materiales bio-compatibles y de alta estética." },
    { title: "Ortodoncia convencional", icon: <Smile />, desc: "Corrección de la posición dental utilizando brackets tradicionales y estéticos." },
    { title: "Invisalign", icon: <Sparkles />, desc: "Alineadores invisibles de última generación para una sonrisa perfecta sin brackets." },
    { title: "Disfunción de ATM", icon: <Stethoscope />, desc: "Diagnóstico y tratamiento de problemas en la articulación temporomandibular." }
  ];

  const specialistServices = [
    { title: "Endodoncia", icon: <ShieldCheck /> },
    { title: "Cirugía bucal y maxilofacial", icon: <Stethoscope /> },
    { title: "Implantes dentales", icon: <ShieldCheck /> },
    { title: "Prótesis fija y removible", icon: <Smile /> },
    { title: "Prostodoncia", icon: <ShieldCheck /> },
    { title: "Atención especial a niños", icon: <Heart /> }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-[var(--color-bg)]">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-text)] mb-6">
              Natural Dental
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-text)]/80 max-w-2xl mx-auto">
              Ortodoncia y Ortopedia Maxilar
            </p>
          </motion.div>

          {/* Doctor Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-[var(--color-primary)]/20"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-bg)] shrink-0 overflow-hidden relative shadow-inner border-4 border-[var(--color-primary)]/30">
              <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text)]/20 font-serif italic">
                Foto Placeholder
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">Dra. Lorena Arellano Rosales</h2>
              <p className="text-[var(--color-primary)] font-medium mb-6 uppercase tracking-wider text-sm">Cirujano Dentista — Especialista</p>
              <p className="text-[var(--color-text)]/80 leading-relaxed mb-6">
                Con años de experiencia creando sonrisas hermosas y funcionales. Mi enfoque se centra en la estética dental y la corrección maxilar, utilizando tecnología de vanguardia y un trato cálido y humano.
              </p>
              <a href="/contacto" className="inline-flex bg-[var(--color-primary)] text-[var(--color-bg)] px-8 py-3 rounded-full font-medium hover:brightness-110 transition-all shadow-md hover:shadow-lg">
                Agendar valoración
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider fill="var(--color-surface)" />

      {/* Main Services */}
      <section className="py-20 px-4 md:px-8 bg-[var(--color-surface)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Nuestros Servicios</h2>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} title={s.title} description={s.desc} icon={s.icon} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--color-bg)" />

      {/* Specialist Services */}
      <section className="py-20 px-4 md:px-8 bg-[var(--color-bg)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Servicios por Especialista</h2>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialistServices.map((s, i) => (
              <ServiceCard key={i} title={s.title} icon={s.icon} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
