import { motion } from 'framer-motion';
import { HeartHandshake, Star, Shield, Lightbulb } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Nosotras() {
  const values = [
    { title: "Confianza", icon: <Shield />, desc: "Construimos relaciones duraderas basadas en la honestidad y transparencia." },
    { title: "Profesionalismo", icon: <Star />, desc: "Actualización constante y uso de tecnología de vanguardia." },
    { title: "Calidez Humana", icon: <HeartHandshake />, desc: "Trato empático, entendiendo los miedos y necesidades de cada paciente." },
    { title: "Innovación", icon: <Lightbulb />, desc: "Enfoque biológico y estético para resultados superiores." }
  ];

  const timelineBio = [
    { title: "Instituto Politécnico Nacional", desc: "Egresada en Estomatología" },
    { title: "Universidad Autónoma de Tlaxcala", desc: "Diplomado en Ozonoterapia Orofacial" },
    { title: "Colegio Mexicano de Ginecología", desc: "Diplomado de Terapia Hormonal y Ozonoterapia" },
    { title: "ISII México", desc: "Diplomado en Ortopedia Maxilar" },
    { title: "Dr. Cura", desc: "Cursando Odontología Biológica" }
  ];

  const timelineNatural = [
    { title: "Especialista en Ortodoncia", desc: "y Ortopedia Maxilar" },
    { title: "Experiencia Clínica", desc: "Diseñando sonrisas hermosas y funcionales" },
    { title: "Tecnología de Vanguardia", desc: "Diagnóstico y corrección maxilar" },
    { title: "Trato Humano", desc: "Enfoque cálido y centrado en el paciente" }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 md:px-8 bg-[var(--color-bg)]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Nosotras</h1>
            <p className="text-xl font-light opacity-80 leading-relaxed">
              Dos visiones, una misma misión: brindar atención dental integral con un enfoque humano, femenino y altamente profesional. Creemos que la salud bucal es el reflejo de la salud integral.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
            
            {/* Split Decorative Line (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent -translate-x-1/2"></div>

            {/* Bio in Dent Side */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:pr-16 text-right flex flex-col items-end"
            >
              <div className="h-24 mb-6">
                <img src="/logos/bio-logo.png" alt="Bio in Dent Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#93A785]/20 shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/images/clau.jpeg" alt="Lic. Claudia" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#93A785] mb-2">Lic. en Estomatología</h2>
              <p className="text-sm uppercase tracking-widest opacity-60 mb-6">Bio in Dent</p>
              
              <p className="opacity-80 leading-relaxed text-right mb-8">
                Con una visión holística y biológica, su enfoque se centra en tratar la causa raíz de los problemas dentales, utilizando ozonoterapia y materiales 100% biocompatibles para proteger la salud sistémica del paciente.
              </p>

              <div className="relative border-r-2 border-[#93A785]/30 pr-6 space-y-4 text-right w-full">
                {timelineBio.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="relative"
                  >
                    <div className="absolute w-3 h-3 bg-[#93A785] rounded-full -right-[29px] top-1.5"></div>
                    <h3 className="font-bold text-sm md:text-base text-[var(--color-text)]">{item.title}</h3>
                    <p className="text-[var(--color-text)]/70 text-xs md:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Natural Dental Side */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:pl-16 flex flex-col items-start"
            >
              <div className="h-24 mb-6">
                <img src="/logos/natural-logo.png" alt="Natural Dental Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-[#62C8C1]/20 shadow-lg group-hover:shadow-xl transition-shadow">
                <img src="/images/lore.jpeg" alt="C.D.E.O Lorena Arellano Rosales" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#62C8C1] mb-1">C.D.E.O Lorena Arellano Rosales</h2>
              <p className="text-sm font-medium text-[#1A3A3A] mb-2">Cirujano Dentista Especialista en Ortodoncia</p>
              <p className="text-xs uppercase tracking-widest opacity-60 mb-6">Natural Dental</p>

              <p className="opacity-80 leading-relaxed text-left mb-8">
                Especialista en ortodoncia y ortopedia maxilar, su pasión es diseñar sonrisas funcionales y estéticamente perfectas, guiando el desarrollo facial y corrigiendo alteraciones con la tecnología más avanzada.
              </p>
              
              <div className="relative border-l-2 border-[#62C8C1]/30 pl-6 space-y-4 text-left w-full">
                {timelineNatural.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="relative"
                  >
                    <div className="absolute w-3 h-3 bg-[#62C8C1] rounded-full -left-[29px] top-1.5"></div>
                    <h3 className="font-bold text-sm md:text-base text-[var(--color-text)]">{item.title}</h3>
                    <p className="text-[var(--color-text)]/70 text-xs md:text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Shared Values */}
      <section className="py-20 px-4 md:px-8 bg-[var(--color-surface)] mt-12 rounded-t-[3rem]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Nuestros Valores</h2>
            <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center flex flex-col items-center p-6 bg-[var(--color-bg)] rounded-3xl"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-2">{v.title}</h3>
                <p className="opacity-70 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
