"use client";

import { useState } from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope, FaChevronRight, FaRegHospital } from "react-icons/fa";
import { FadeUp } from "@/components/Animations";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export default function ContactoPage() {
  const [activeOffice, setActiveOffice] = useState<"roma" | "polanco">("roma");

  // Office data mapped for tab content
  const officeDetails = {
    roma: {
      name: "Roma Norte",
      address: "Calle Durango #64, Consultorio 401, Colonia Roma Norte, C.P. 06700, Delegación Cuauhtémoc, CDMX.",
      between: "Entre Calle Mérida y Calle Córdoba",
      schedule: "Lunes a Viernes: 14:00 - 20:00 | Sábado: 8:00 - 15:00",
      phone: "5618556040",
      mapUrl: "https://g.page/r/CRpfRTPdVagQEBM/",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.502693527633!2d-99.16104782418476!3d19.4222502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff39413bcab3%3A0x64fbcab4567efbcd!2sCalle%20Durango%2064%2C%20Roma%20Norte%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
    },
    polanco: {
      name: "Polanco",
      address: "Calle Temístocles #210, Consultorio 201, Colonia Polanco IV Sección, C.P. 11560, Delegación Miguel Hidalgo, CDMX.",
      between: "Entre Avenida Horacio y Avenida Homero",
      schedule: "Lunes a Viernes: 15:00 - 20:00 (Sujeto a disponibilidad)",
      phone: "5610597042",
      mapUrl: "https://g.page/r/CcqO37YbTeVrEBM/",
      iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-99.1912563!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ab3b9b1ab3%3A0xb1b2bc34567efbcd!2sCalle%20Tem%C3%ADstocles%20210%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
    }
  };

  const currentOffice = officeDetails[activeOffice];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#5b9ed8]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-10 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#343f55] mb-4">Contacto y Ubicaciones</h1>
          <p className="text-base sm:text-lg text-[#474f5a] max-w-2xl mx-auto font-light">
            Seleccione el consultorio de su preferencia para ver los detalles de ubicación, horarios y mapa interactivo.
          </p>
        </FadeUp>

        {/* Dynamic Tab Switcher */}
        <FadeUp className="flex justify-center mb-10">
          <div className="bg-[#e9f3ff] p-1.5 rounded-2xl flex gap-1.5 border border-[#bed2e9]">
            <button
              onClick={() => setActiveOffice("roma")}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeOffice === "roma"
                  ? "bg-[#5b9ed8] text-white shadow-sm"
                  : "text-[#343f55] hover:text-[#5b9ed8]"
              }`}
            >
              <FaRegHospital /> Roma Norte
            </button>
            <button
              onClick={() => setActiveOffice("polanco")}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeOffice === "polanco"
                  ? "bg-[#5b9ed8] text-white shadow-sm"
                  : "text-[#343f55] hover:text-[#5b9ed8]"
              }`}
            >
              <FaRegHospital /> Polanco
            </button>
          </div>
        </FadeUp>

        {/* Interactive Tab Content Block */}
        <FadeUp className="bg-white border border-[#bed2e9] rounded-[2.5rem] overflow-hidden shadow-lg mb-16 flex flex-col lg:flex-row min-h-[450px]">
          {/* Left: Map (60% width) */}
          <div className="lg:w-7/12 min-h-[350px] lg:min-h-0 bg-slate-50 relative">
            <iframe 
              src={currentOffice.iframeUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] opacity-95 transition-all duration-500"
            />
          </div>

          {/* Right: Info Card (5/12 width) */}
          <div className="lg:w-5/12 p-8 sm:p-12 flex flex-col justify-between bg-white">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] bg-[#e9f3ff] text-[#2f4764] px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block mb-3 border border-[#bed2e9]">
                  Consultorio Activo
                </span>
                <h2 className="text-3xl font-bold text-[#343f55] mb-1">
                  Sede {currentOffice.name}
                </h2>
                <p className="text-xs text-[#8196af] font-light">{currentOffice.between}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e9f3ff] border border-[#bed2e9] flex items-center justify-center text-[#5b9ed8] flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#343f55] text-xs uppercase tracking-wider mb-1">Ubicación</h4>
                    <p className="text-[#474f5a] text-xs sm:text-sm font-light leading-relaxed">
                      {currentOffice.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e9f3ff] border border-[#bed2e9] flex items-center justify-center text-[#5b9ed8] flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#343f55] text-xs uppercase tracking-wider mb-1">Horarios de Consulta</h4>
                    <p className="text-[#474f5a] text-xs sm:text-sm font-light leading-relaxed">
                      {currentOffice.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#bed2e9]/60 flex flex-wrap gap-4 items-center">
              <a 
                href={currentOffice.mapUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3.5 bg-[#5b9ed8] hover:bg-[#2571ac] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all inline-flex items-center gap-2 shadow-sm"
              >
                Cómo Llegar <FaChevronRight size={10} />
              </a>
              <a 
                href={`tel:${currentOffice.phone}`}
                className="text-[#343f55] hover:text-[#5b9ed8] font-bold font-mono text-sm inline-flex items-center gap-2"
              >
                <FaPhone size={12} /> {currentOffice.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Grid: Doctoralia widget left / Contacts & Urgencies right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Doctoralia Widget (7 cols) */}
          <FadeUp className="lg:col-span-7 bg-white border border-[#bed2e9] rounded-[2rem] p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#343f55] mb-6 text-center sm:text-left">Agenda tu Cita en Línea</h3>
            <DoctoraliaWidget />
          </FadeUp>

          {/* Quick Contact & Urgencies Bento (5 cols) */}
          <FadeUp className="lg:col-span-5 space-y-6">
            <div className="bg-[#f8fbff] border border-[#bed2e9] rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#343f55] mb-6">Línea Directa de Urgencias</h3>
              <p className="text-xs text-[#474f5a] font-light mb-6">
                Disponible las 24 horas para pacientes bariátricos y emergencias quirúrgicas agudas (apendicitis, dolor vesicular severo).
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:5540224820" 
                  className="flex items-center gap-4 bg-white border border-[#bed2e9] hover:border-[#5b9ed8] p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e9f3ff] flex items-center justify-center text-[#5b9ed8] group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#8196af] text-[10px] uppercase tracking-wider">Urgencias (Opción 1)</h5>
                    <p className="text-[#343f55] text-sm font-bold font-mono">55 4022 4820</p>
                  </div>
                </a>

                <a 
                  href="tel:5510122318" 
                  className="flex items-center gap-4 bg-white border border-[#bed2e9] hover:border-[#5b9ed8] p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e9f3ff] flex items-center justify-center text-[#5b9ed8] group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#8196af] text-[10px] uppercase tracking-wider">Urgencias (Opción 2)</h5>
                    <p className="text-[#343f55] text-sm font-bold font-mono">55 1012 2318</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#bed2e9] rounded-[2rem] p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#343f55]">Otros Canales</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#e9f3ff] border border-[#bed2e9] flex items-center justify-center text-[#5b9ed8] flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#343f55] uppercase tracking-wider">Correo Directo</h4>
                    <p className="text-[#474f5a] font-light mt-0.5">{doctor.email}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#e9f3ff] border border-[#bed2e9] flex items-center justify-center text-[#5b9ed8] flex-shrink-0">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div className="text-xs">
                    <h4 className="font-bold text-[#343f55] uppercase tracking-wider">WhatsApp Citas</h4>
                    <p className="text-[#474f5a] font-light mt-0.5">Roma: <span className="font-bold text-[#343f55]">56 1855 6040</span></p>
                    <p className="text-[#474f5a] font-light mt-0.5">Polanco: <span className="font-bold text-[#343f55]">56 1059 7042</span></p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </div>
  );
}

