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
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaArrowRight,
  FaUserShield
} from "react-icons/fa";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[#5b9ed8]/20 relative overflow-hidden bg-mesh-grid">
      <StructuredData data={homeSchema} />

      {/* Decorative Gradients (Light opacity brand blue) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5b9ed8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-[#2f4764]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. ASYMMETRICAL BENTO HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-16 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Copy + CTAs */}
            <motion.div 
              className="lg:col-span-5 space-y-8 text-center lg:text-left order-2 lg:order-1" 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e9f3ff] border border-[#bed2e9] text-[#2f4764] font-bold text-xs uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5b9ed8] animate-pulse" />
                {doctor.specialty}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#343f55] leading-tight tracking-tight">
                Cirugía General de Mínima Invasión <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b9ed8] to-[#2f4764]">
                  Segura, Precisa y de Alta Calidad.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#474f5a] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Tratamiento laparoscópico especializado de hernias abdominales, vesícula biliar, reflujo gastroesofágico, nódulos tiroideos y urgencias gastrointestinales bajo los más altos estándares de calidad en la Ciudad de México.
              </p>
              
              {/* Credential badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#e9f3ff] text-[#343f55] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-[#bed2e9]">
                  <FaCertificate className="text-[#5b9ed8]" size={10} /> Certificado CMCG
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#e9f3ff] text-[#343f55] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-[#bed2e9]">
                  <FaShieldAlt className="text-[#5b9ed8]" size={10} /> Cirugía de Alta Gama
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#e9f3ff] text-[#343f55] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-[#bed2e9]">
                  <FaMoneyBillWave className="text-[#5b9ed8]" size={10} /> Financiamiento Mend Pay
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-8 py-4 bg-[#5b9ed8] hover:bg-[#2571ac] text-white font-bold text-xs uppercase tracking-widest transition-all rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-[#5b9ed8]/20 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <FaCalendarCheck size={14} /> Agendar Cita
                </a>
                <a 
                  href="#procedimientos" 
                  className="px-8 py-4 bg-[#e9f3ff] hover:bg-[#bed2e9]/40 text-[#343f55] font-bold text-xs uppercase tracking-widest transition-all rounded-2xl border border-[#bed2e9] flex items-center justify-center gap-3"
                >
                  Ver Especialidades
                </a>
              </div>
            </motion.div>

            {/* Right: Large Doctor Photo */}
            <motion.div
              className="lg:col-span-7 order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Photo container — tall portrait aspect, rounded edges */}
              <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#e9f3ff] to-[#bed2e9]/40 border border-[#bed2e9] shadow-2xl shadow-[#343f55]/10"
                style={{ minHeight: "580px" }}
              >
                <img
                  src="/hero.jpg"
                  alt={`${doctor.title} ${doctor.name} — Cirujano Bariátrico y General en CDMX`}
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "580px" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Gradient overlay at bottom for the info cards */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#343f55]/90 via-[#343f55]/40 to-transparent p-6 pt-24">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-white">+1,000</p>
                      <p className="text-[9px] text-white/90 uppercase tracking-widest font-bold mt-0.5">Pacientes</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-white">CMCG</p>
                      <p className="text-[9px] text-white/90 uppercase tracking-widest font-bold mt-0.5">Certificado</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-white">2</p>
                      <p className="text-[9px] text-white/90 uppercase tracking-widest font-bold mt-0.5">Sedes CDMX</p>
                    </div>
                  </div>
                </div>

                {/* Floating logo badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-[#bed2e9] shadow-lg">
                  <Image 
                    src="/logo-header.png" 
                    alt={`Logo ${doctor.name}`} 
                    width={180} 
                    height={40} 
                    className="h-8 w-auto object-contain"
                  />
                  <p className="text-[9px] text-[#5b9ed8] font-bold uppercase tracking-widest mt-1">{doctor.subspecialty}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="py-12 bg-[#e9f3ff]/60 border-y border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#5b9ed8]">+1,000</p>
              <p className="text-xs text-[#474f5a] uppercase tracking-widest mt-1 font-medium">Pacientes Atendidos</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#5b9ed8]">100%</p>
              <p className="text-xs text-[#474f5a] uppercase tracking-widest mt-1 font-medium">Trato Ético y Humano</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#5b9ed8]">CMCG</p>
              <p className="text-xs text-[#474f5a] uppercase tracking-widest mt-1 font-medium">Cirujano Certificado</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#5b9ed8]">2</p>
              <p className="text-xs text-[#474f5a] uppercase tracking-widest mt-1 font-medium">Sedes en CDMX</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BIO & TRUST GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Doctor Photo + Philosophy overlay */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 relative rounded-3xl overflow-hidden shadow-2xl shadow-[#343f55]/15 border border-[#bed2e9]" style={{ minHeight: "600px" }}>
                {/* Doctor photo */}
                <img
                  src="/aboutme.jpg"
                  alt={`${doctor.title} ${doctor.name}`}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ minHeight: "600px", objectPosition: "70% 20%" }}
                />
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#343f55]/95 via-[#343f55]/40 to-transparent pointer-events-none" />

                {/* Philosophy quote overlay at bottom with high legibility glass card */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="bg-[#343f55]/85 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                    <span className="text-[11px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-2 block">Filosofía del Especialista</span>
                    <p className="text-xs sm:text-sm text-white italic leading-relaxed mb-4">
                      &ldquo;{doctor.philosophy}&rdquo;
                    </p>
                    <div className="h-px w-10 bg-[#5b9ed8] mb-3" />
                    <div>
                      <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-wider">{doctor.title} {doctor.name}</h4>
                      <p className="text-[10px] text-[#5b9ed8] font-bold uppercase tracking-wider mt-0.5">{doctor.subspecialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Academic Bento grid */}
            <div className="lg:col-span-7 space-y-10 flex flex-col justify-center pt-0 lg:pt-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block">Sobre el Especialista</span>
                <h2 className="text-3xl text-[#343f55] font-bold flex items-center gap-3">
                  <span className="h-2.5 w-2.5 bg-[#5b9ed8] rounded-full flex-shrink-0" /> Trayectoria Profesional
                </h2>
                <p className="text-[#474f5a] font-light leading-relaxed text-sm sm:text-base">
                  {doctor.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 rounded-2xl border border-[#bed2e9] bg-white hover:border-[#5b9ed8] transition-all shadow-sm">
                  <FaUniversity className="text-[#5b9ed8] text-3xl mb-4" />
                  <h4 className="font-bold text-[#343f55] text-sm uppercase tracking-widest mb-2">Formación</h4>
                  <p className="text-xs text-[#474f5a] font-light leading-relaxed">
                    Médico Cirujano y Partero por el Instituto Politécnico Nacional (IPN) y Especialista en Cirugía General por la Universidad Nacional Autónoma de México (UNAM).
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl border border-[#bed2e9] bg-white hover:border-[#5b9ed8] transition-all shadow-sm">
                  <FaAward className="text-[#5b9ed8] text-3xl mb-4" />
                  <h4 className="font-bold text-[#343f55] text-sm uppercase tracking-widest mb-2">Certificaciones</h4>
                  <p className="text-xs text-[#474f5a] font-light leading-relaxed">
                    Certificado vigente por el Consejo Mexicano de Cirugía General (CMCG) y miembro del Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM).
                  </p>
                </div>

                <div className="sm:col-span-2 p-8 rounded-2xl border border-[#bed2e9] bg-gradient-to-br from-[#e9f3ff]/60 to-white hover:shadow-md transition-all">
                  <FaUserShield className="text-[#5b9ed8] text-3xl mb-4" />
                  <h4 className="font-bold text-[#343f55] text-sm uppercase tracking-widest mb-2">Compromiso con el Paciente</h4>
                  <p className="text-xs text-[#474f5a] font-light leading-relaxed">
                    Cada paciente recibe una valoración médica personalizada, con un plan de tratamiento basado en evidencia científica actualizada, comunicación transparente y acompañamiento integral antes, durante y después del procedimiento.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SYMPTOMS SECTION */}
      <section className="py-24 bg-[#e9f3ff]/30 border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Identifica tus Síntomas</span>
            <h2 className="text-4xl text-[#343f55] mb-4 font-bold">Síntomas de Alerta</h2>
            <p className="text-[#474f5a] max-w-2xl mx-auto font-light text-sm">
              Prestar atención a estas señales del cuerpo es fundamental para prevenir complicaciones y obtener una guía médica oportuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.slice(0, 5).map(sym => {
              const severity = sym.slug.includes("dolor-abdominal") || sym.slug.includes("dolor-agudo") || sym.slug.includes("abultamiento")
                ? { label: "Urgencia Alta", style: "bg-rose-500/10 text-rose-600 border-rose-500/20" }
                : { label: "Valoración Clínica", style: "bg-[#e9f3ff] text-[#2571ac] border-[#bed2e9]" };

              return (
                <div 
                  key={sym.id} 
                  className="bg-white rounded-3xl overflow-hidden border border-[#bed2e9] hover:border-[#5b9ed8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 mb-6">
                      <img 
                        src={sym.image} 
                        alt={sym.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border bg-white/95 backdrop-blur-sm shadow-sm ${severity.style}`}>
                          {severity.label}
                        </span>
                      </div>
                    </div>
                    <div className="px-8 pt-2">
                      <h3 className="text-xl font-bold text-[#343f55] mb-3 group-hover:text-[#5b9ed8] transition-colors line-clamp-2">{sym.name}</h3>
                      <p className="text-[#474f5a] text-xs leading-relaxed font-light mb-6 line-clamp-3">
                        {sym.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8">
                    <Link 
                      href={`/sintomas/${sym.slug}`} 
                      className="text-[#5b9ed8] font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-[#2571ac] transition-colors"
                    >
                      Saber Más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* View all symptoms card */}
            <div className="bg-gradient-to-br from-[#343f55] to-[#2f4764] rounded-3xl p-8 text-white flex flex-col justify-between shadow-md group hover:shadow-xl transition-all duration-300 min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block mb-4">¿Presentas otras molestias?</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Explora el Directorio Completo de Síntomas</h3>
                <p className="text-xs text-[#8196af] font-light leading-relaxed">
                  Contamos con información detallada de causas, alertas e indicaciones médicas para cada molestia digestiva o abdominal.
                </p>
              </div>
              <div>
                <Link 
                  href="/sintomas" 
                  className="w-full flex items-center justify-center gap-3 bg-[#5b9ed8] text-white font-bold py-4 rounded-2xl hover:bg-[#2571ac] transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  Ver Todos los Síntomas <FaArrowRight size={10} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DISEASES SECTION */}
      <section id="procedimientos" className="py-24 bg-white border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Enfoques Clínicos</span>
            <h2 className="text-4xl text-[#343f55] mb-4 font-bold">Padecimientos que Atendemos</h2>
            <p className="text-[#474f5a] max-w-2xl mx-auto font-light text-sm">
              Diagnóstico preciso y cirugía avanzada para patologías de pared abdominal, digestivas y metabólicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.slice(0, 5).map(disease => (
              <div 
                key={disease.id} 
                className="bg-white rounded-3xl overflow-hidden border border-[#bed2e9] hover:border-[#5b9ed8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100 mb-6">
                    <img 
                      src={disease.image} 
                      alt={disease.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-8 pt-2">
                    <h3 className="text-xl font-bold text-[#343f55] mb-3 group-hover:text-[#5b9ed8] transition-colors line-clamp-2">{disease.name}</h3>
                    <p className="text-[#474f5a] text-xs leading-relaxed font-light mb-6">
                      {disease.description.substring(0, 140)}...
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link 
                    href={`/enfermedades/${disease.slug}`} 
                    className="text-[#5b9ed8] font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-[#2571ac] transition-colors"
                  >
                    Leer Más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}

            {/* View all diseases card */}
            <div className="bg-gradient-to-br from-[#343f55] to-[#2f4764] rounded-3xl p-8 text-white flex flex-col justify-between shadow-md group hover:shadow-xl transition-all duration-300 min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block mb-4">Enfoque de especialidad</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">Conoce Todos los Padecimientos</h3>
                <p className="text-xs text-[#8196af] font-light leading-relaxed">
                  Ofrecemos atención médica oportuna y tratamientos laparoscópicos avanzados para una gran variedad de patologías generales y metabólicas.
                </p>
              </div>
              <div>
                <Link 
                  href="/enfermedades" 
                  className="w-full flex items-center justify-center gap-3 bg-[#5b9ed8] text-white font-bold py-4 rounded-2xl hover:bg-[#2571ac] transition-all shadow-md text-xs uppercase tracking-wider"
                >
                  Ver Todas las Enfermedades <FaArrowRight size={10} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-24 bg-[#e9f3ff]/40 border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Servicios Quirúrgicos</span>
            <h2 className="text-4xl text-[#343f55] mb-4 font-bold">Procedimientos y Consulta</h2>
            <p className="text-[#474f5a] max-w-2xl mx-auto font-light text-sm">
              Cirugía laparoscópica de mínima invasión y consultas especializadas orientadas al paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.slice(0, 5).map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl overflow-hidden border border-[#bed2e9] hover:border-[#5b9ed8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-[9px] bg-[#e9f3ff] text-[#2f4764] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-[#bed2e9]">{service.type}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#343f55] mb-2 line-clamp-1">{service.name}</h3>
                    <p className="text-[#474f5a] text-xs font-light leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link 
                    href={`/servicios/${service.slug}`} 
                    className="text-[#343f55] text-xs font-bold py-3 px-6 bg-[#e9f3ff] border border-[#bed2e9] hover:bg-[#5b9ed8] hover:text-white text-center rounded-xl transition-all block w-full"
                  >
                    Detalles del Procedimiento
                  </Link>
                </div>
              </div>
            ))}

            {/* View all services card */}
            <div className="bg-gradient-to-br from-[#e9f3ff] to-white rounded-3xl p-8 border border-[#bed2e9] hover:border-[#5b9ed8] transition-all duration-300 flex flex-col justify-between group min-h-[280px]">
              <div>
                <span className="text-[9px] bg-[#5b9ed8]/10 text-[#5b9ed8] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-4">Portafolio Quirúrgico</span>
                <h3 className="text-lg font-bold text-[#343f55] mb-2">¿Buscas otro procedimiento?</h3>
                <p className="text-[#474f5a] text-xs font-light leading-relaxed mb-6">
                  Conoce toda nuestra gama de procedimientos quirúrgicos generales, bariátricos y de mínima invasión.
                </p>
              </div>
              <Link 
                href="/servicios" 
                className="text-white text-xs font-bold py-4 px-6 bg-[#5b9ed8] hover:bg-[#2571ac] text-center rounded-xl transition-all block w-full shadow-md uppercase tracking-wider"
              >
                Ver Todos los Servicios &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6.5 PRICE, PAYMENTS & INSURANCES SECTION */}
      <section className="py-24 bg-white border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Costos y Financiamiento</span>
            <h2 className="text-4xl text-[#343f55] mb-4 font-bold">Consulta y Métodos de Pago</h2>
            <p className="text-[#474f5a] max-w-2xl mx-auto font-light text-sm">
              Transparencia y facilidades para tu atención médica en la Ciudad de México.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Box 1: Consulta Price */}
            <div className="lg:col-span-4 bg-[#f8fbff] border border-[#bed2e9] rounded-3xl p-8 flex flex-col justify-between hover:border-[#5b9ed8] transition-all shadow-sm group">
              <div>
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block mb-4">Costo de Consulta</span>
                <h3 className="text-2xl font-bold text-[#343f55] mb-2">Valoración Especializada</h3>
                <p className="text-xs text-[#474f5a] font-light leading-relaxed mb-6">
                  Consulta médica inicial detallada de cirugía general y bariatría (manga gástrica, bypass gástrico, reflujo y hernias).
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-[#343f55]">${doctor.consultationPrice} <span className="text-sm font-normal text-[#8196af]">MXN</span></p>
                <p className="text-[10px] text-[#8196af] font-light mt-1">* Sujeto a disponibilidad de agenda.</p>
              </div>
            </div>

            {/* Box 2: Payment Methods */}
            <div className="lg:col-span-4 bg-[#f8fbff] border border-[#bed2e9] rounded-3xl p-8 flex flex-col justify-between hover:border-[#5b9ed8] transition-all shadow-sm">
              <div>
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block mb-4">Métodos de Pago</span>
                <h3 className="text-2xl font-bold text-[#343f55] mb-4">Facilidades de Pago</h3>
                <ul className="space-y-3.5">
                  {doctor.paymentMethods.map(method => (
                    <li key={method} className="flex items-center gap-3 text-xs text-[#343f55] font-medium">
                      <FaCheckCircle className="text-[#5b9ed8] flex-shrink-0" size={14} />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-[#bed2e9]/60 pt-4 mt-6">
                <p className="text-[10px] text-[#8196af] font-light">Aceptamos pagos contactless (NFC) y todas las tarjetas bancarias.</p>
              </div>
            </div>

            {/* Box 3: Insurances */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#343f55] to-[#2f4764] border border-[#343f55] text-white rounded-3xl p-8 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest block mb-4">Seguros Médicos</span>
                <h3 className="text-2xl font-bold text-white mb-3">Convenios y Aseguradoras</h3>
                <p className="text-xs text-slate-200 font-light leading-relaxed mb-6">
                  Aceptamos todas las pólizas de gastos médicos mayores nacionales e internacionales. Te apoyamos en todo el trámite administrativo para Pago Directo o Reembolso de tu cirugía.
                </p>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-xs font-medium text-white leading-normal">
                  {doctor.insurances?.[0] || "Todos los seguros médicos nacionales e internacionales."}
                </div>
              </div>
              <div className="border-t border-white/15 pt-4 mt-6">
                <p className="text-[10px] text-[#8196af] font-light">Consulte con su asesor de seguros antes del procedimiento.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. DOCTORALIA WIDGET SECTION */}
      <section className="py-24 bg-white border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Citas Médicas</span>
            <h2 className="text-3xl text-[#343f55] font-bold mb-4">Agenda en Línea Directamente</h2>
            <p className="text-[#474f5a] max-w-xl mx-auto font-light text-sm">
              Seleccione la fecha y hora de su preferencia en el calendario a continuación para agendar su valoración en Roma Norte o Polanco.
            </p>
          </div>
          <DoctoraliaWidget />
        </div>
      </section>

      {/* 8. LOCATIONS SECTION */}
      <section className="py-24 bg-[#e9f3ff]/40 border-t border-[#bed2e9]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold text-[#5b9ed8] uppercase tracking-widest mb-3 block">Nuestras Clínicas</span>
            <h2 className="text-4xl text-[#343f55] mb-4 font-bold">Ubicación de Consultorios</h2>
            <p className="text-[#474f5a] max-w-2xl mx-auto font-light text-sm">
              Instalaciones confortables y seguras en la Ciudad de México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office) => (
              <div key={office.id} className="border border-[#bed2e9] p-8 rounded-3xl bg-white flex flex-col justify-between hover:border-[#5b9ed8] transition-all shadow-sm">
                <div>
                  <h4 className="text-lg font-bold text-[#343f55] mb-2">{office.name}</h4>
                  <p className="text-[#474f5a] text-xs font-light leading-relaxed mb-4">{office.address}, {office.city}, {office.state}</p>
                </div>
                <div className="border-t border-[#bed2e9]/50 pt-4 mt-6 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#5b9ed8]">
                  <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:underline">Ver en Mapa &rarr;</a>
                  <a href={`tel:${office.phone}`} className="text-[#343f55] hover:text-[#5b9ed8] font-mono">{office.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

