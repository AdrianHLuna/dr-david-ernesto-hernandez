"use client";

import { doctor, offices } from "@/data/doctor";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { diseases } from "@/data/diseases";
import { 
  FaCalendarCheck, 
  FaWhatsapp, 
  FaAward, 
  FaUniversity, 
  FaCertificate, 
  FaHospitalSymbol, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaStethoscope, 
  FaHeartbeat,
  FaArrowRight,
  FaUserShield,
  FaClock
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { motion } from "framer-motion";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export default function Home() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: `${doctor.title} ${doctor.name}`,
    description: doctor.bio,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
    },
    priceRange: `$${doctor.consultationPrice} MXN`,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as any;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  } as any;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-500/10 relative overflow-hidden bg-mesh-grid">
      <StructuredData data={homeSchema} />

      {/* Decorative Gradients (Light opacity) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. ASYMMETRICAL BENTO HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-16 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Premium Profile Panel */}
            <motion.div 
              className="lg:col-span-7 space-y-8 text-center lg:text-left" 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {doctor.specialty}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight font-serif">
                Cirugía Bariátrica y Digestiva <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Segura y de Mínima Invasión.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Tratamientos especializados para combatir la obesidad, corregir hernias complejas y erradicar el reflujo gastroesofágico bajo los más altos estándares de calidad internacional en la Ciudad de México.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/10 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <FaCalendarCheck size={14} /> Agendar Cita
                </a>
                <a 
                  href="#procedimientos" 
                  className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-widest transition-all rounded-2xl border border-slate-200 flex items-center justify-center gap-3"
                >
                  Ver Especialidades
                </a>
              </div>
            </motion.div>

            {/* Right: Bento Grid Cards */}
            <motion.div 
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Card 1: Bariatrics */}
              <div className="sm:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-emerald-50/60 to-white border border-emerald-500/10 shadow-md flex flex-col justify-between min-h-[180px] group hover:border-emerald-500/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <FaHeartbeat size={20} />
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">Alta Gama</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Manga y Bypass Gástrico</h3>
                  <p className="text-xs text-slate-500 font-light">Abordaje laparoscópico avanzado para remisión metabólica.</p>
                </div>
              </div>

              {/* Card 2: Certification */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between min-h-[150px] hover:border-emerald-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <FaCertificate size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Certificado CMCG</h4>
                  <p className="text-[11px] text-slate-500">Garantía y aval del Consejo Mexicano de Cirugía.</p>
                </div>
              </div>

              {/* Card 3: Mend Pay */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between min-h-[150px] hover:border-emerald-500/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <FaMoneyBillWave size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Financiamiento</h4>
                  <p className="text-[11px] text-slate-500">6 a 24 meses con Mend Pay.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-serif">+1,000</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Pacientes Atendidos</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-serif">100%</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Trato Ético y Humano</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-serif">CMCG</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Cirujano Certificado</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-serif">2</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Sedes en CDMX</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BIO & TRUST GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Philosophy box */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-8 sm:p-12 rounded-3xl bg-slate-50/50 border border-slate-200 flex flex-col justify-between h-auto shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6 block">Filosofía del Especialista</span>
                <p className="text-xl sm:text-2xl font-serif text-slate-800 italic leading-relaxed mb-8">
                  "{doctor.philosophy}"
                </p>
                <div className="h-[1px] w-12 bg-emerald-600 mb-8" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">{doctor.title} {doctor.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{doctor.subspecialty}</p>
                </div>
              </div>
            </div>

            {/* Right: Academic Bento grid */}
            <div className="lg:col-span-7 space-y-10 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-slate-900 font-bold flex items-center gap-3">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full" /> Trayectoria Profesional
                </h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                  {doctor.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/20 transition-all shadow-sm">
                  <FaUniversity className="text-emerald-600 text-3xl mb-4" />
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Formación</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Médico Cirujano y Partero por el Instituto Politécnico Nacional (IPN) y Especialista en Cirugía General por la Universidad Nacional Autónoma de México (UNAM).
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/20 transition-all shadow-sm">
                  <FaAward className="text-emerald-600 text-3xl mb-4" />
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Certificaciones</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Certificado vigente por el Consejo Mexicano de Cirugía General (CMCG) y miembro del Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DISEASES SECTION */}
      <section id="procedimientos" className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 block">Enfoques Clínicos</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-4 font-bold">Padecimientos que Atendemos</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm">
              Diagnóstico preciso y cirugía avanzada para patologías de pared abdominal, digestivas y metabólicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map(disease => (
              <div 
                key={disease.id} 
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors">{disease.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light mb-6">
                    {disease.description.substring(0, 140)}...
                  </p>
                </div>
                <Link 
                  href={`/enfermedades/${disease.slug}`} 
                  className="text-emerald-600 font-bold font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-slate-900 transition-colors"
                >
                  Leer Más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 block">Servicios Quirúrgicos</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-4 font-bold">Procedimientos y Consulta</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm">
              Cirugía laparoscópica de mínima invasión y consultas especializadas orientadas al paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">{service.type}</span>
                    <span className="text-emerald-600 font-bold font-mono text-xs">{service.priceRange}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link 
                  href={`/servicios/${service.slug}`} 
                  className="text-slate-800 text-xs font-bold py-3 px-6 bg-slate-50 border border-slate-200 hover:border-emerald-500/20 hover:bg-slate-100 text-center rounded-xl transition-all"
                >
                  Detalles del Procedimiento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOCTORALIA WIDGET SECTION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 block">Citas Médicas</span>
            <h2 className="text-3xl font-serif text-slate-900 font-bold mb-4">Agenda en Línea Directamente</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-light text-sm">
              Seleccione la fecha y hora de su preferencia en el calendario a continuación para agendar su valoración en Roma Norte o Polanco.
            </p>
          </div>
          <DoctoraliaWidget />
        </div>
      </section>

      {/* 8. LOCATIONS SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 block">Nuestras Clínicas</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-4 font-bold">Ubicación de Consultorios</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm">
              Instalaciones confortables y seguras en la Ciudad de México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.id} className="border border-slate-200 p-8 rounded-3xl bg-white flex flex-col justify-between hover:border-emerald-500/20 transition-all shadow-sm">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 font-serif mb-2">{office.name}</h4>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-4">{office.address}, {office.city}, {office.state}</p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:underline">Ver en Mapa &rarr;</a>
                  <a href={`tel:${office.phone}`} className="text-slate-800 hover:text-emerald-600 font-mono">{office.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
