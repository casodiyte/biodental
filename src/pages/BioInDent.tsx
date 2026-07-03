import { motion } from 'framer-motion';
import { Leaf, Droplet, Activity, Heart, ShieldPlus } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import WaveDivider from '../components/ui/WaveDivider';
import ServiceCard from '../components/ui/ServiceCard';

export default function BioInDent() {
  const timeline = [
    { title: "Instituto Politécnico Nacional", desc: "Egresada en Estomatología" },
    { title: "Universidad Autónoma de Tlaxcala", desc: "Diplomado en Ozonoterapia Orofacial (con ALDO)" },
    { title: "Colegio Mexicano de Ginecología, Láser y Funcional", desc: "Diplomado de Terapia Hormonal y Ozonoterapia (en curso)" },
    { title: "ISII México", desc: "Diplomado en Ortopedia Maxilar" },
    { title: "Dr. Cura", desc: "Cursando Odontología Biológica" }
  ];

  const services = [
    { title: "Odontología Biológica", icon: <Leaf />, desc: "Tratamientos libres de metales, respetando la biología y salud general del cuerpo." },
    { title: "Ozonoterapia Dental", icon: <Droplet />, desc: "Uso de ozono médico para desinfección profunda, cicatrización y estimulación del sistema inmune local." },
    { title: "Remoción Segura de Amalgamas", icon: <ShieldPlus />, desc: "Protocolo especializado para retirar empastes de metal minimizando la exposición a toxinas." },
    { title: "Terapia Neural y Funcional", icon: <Activity />, desc: "Abordaje integral para tratar dolores crónicos y focos de interferencia bucales." }
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
              Bio in Dent
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-text)]/80 max-w-2xl mx-auto">
              Odontología Biológica y Ozonoterapia
            </p>
          </motion.div>

          {/* Doctor Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-12 shadow-sm border border-[var(--color-primary)]/20"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-bg)] shrink-0 overflow-hidden relative shadow-inner border-4 border-[var(--color-primary)]/30 mx-auto md:mx-0">
              <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text)]/20 font-serif italic">
                Foto Placeholder
              </div>
            </div>
            
            <div className="flex-grow w-full">
              <h2 className="text-3xl font-serif font-bold mb-2">Licenciada en Estomatología</h2>
              <p className="text-[var(--color-primary)] font-medium mb-8 uppercase tracking-wider text-sm">Formación Académica Integral</p>
              
              {/* Timeline */}
              <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-3 md:ml-0 space-y-6">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="relative pl-6"
                  >
                    <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full -left-[7px] top-2"></div>
                    <h3 className="font-bold text-[var(--color-text)]">{item.title}</h3>
                    <p className="text-[var(--color-text)]/70 text-sm mt-1">{item.desc}</p>
                  </motion.div>
                ))}
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
            <h2 className="text-4xl font-serif font-bold mb-4">Nuestros Servicios</h2>
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
