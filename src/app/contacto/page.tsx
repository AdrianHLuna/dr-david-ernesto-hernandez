import { doctor, offices } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export const metadata = {
  title: "Contacto y Ubicaciones | Dr. David Ernesto Hernández Torres",
  description: "Agenda tu consulta con el Dr. David Ernesto Hernández Torres en la Ciudad de México (Roma Norte o Polanco). Cirujano General y Bariatra.",
};

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        
        <FadeUp className="text-center mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Contacto y Ubicaciones</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Consulta médica de especialidad y valoraciones bariátricas. Agenda en cualquiera de nuestros dos consultorios en la Ciudad de México.
          </p>
        </FadeUp>

        {/* Dual Locations Asymmetric Splits */}
        <div className="space-y-12 max-w-6xl mx-auto mb-20">
          
          {/* Consultorio 1: Roma Norte */}
          <FadeUp delay={0.1} className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col lg:flex-row group hover:border-emerald-500/20 transition-all shadow-md">
            {/* Maps Iframe */}
            <div className="lg:w-1/2 min-h-[350px] bg-slate-100 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.502693527633!2d-99.16104782418476!3d19.4222502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff39413bcab3%3A0x64fbcab4567efbcd!2sCalle%20Durango%2064%2C%20Roma%20Norte%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            {/* Info details */}
            <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 font-serif mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-emerald-600 rounded-full" /> Roma Norte
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Dirección</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      Calle Durango #64, Consultorio 401, Colonia Roma Norte, C.P. 06700, Delegación Cuauhtémoc, CDMX.
                    </p>
                    <a href="https://maps.app.goo.gl/9Zp26" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold font-mono text-[9px] uppercase mt-2.5 inline-flex items-center gap-1 hover:text-emerald-700 transition-colors">Abrir en Google Maps &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Horario</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-light">Lunes a Viernes: 14:00 - 20:00 | Sábado: 8:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Consultorio 2: Polanco */}
          <FadeUp delay={0.2} className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col lg:flex-row-reverse group hover:border-emerald-500/20 transition-all shadow-md">
            {/* Maps Iframe */}
            <div className="lg:w-1/2 min-h-[350px] bg-slate-100 relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.295489678129!2d-99.1912563!3d19.4312502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ab3b9b1ab3%3A0xb1b2bc34567efbcd!2sCalle%20Tem%C3%ADstocles%20210%2C%20Polanco%2C%20Polanco%20IV%20Secc%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            {/* Info details */}
            <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 font-serif mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-emerald-600 rounded-full" /> Polanco
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Dirección</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      Calle Temístocles #210, Consultorio 201, Colonia Polanco IV Sección, C.P. 11560, Delegación Miguel Hidalgo, CDMX.
                    </p>
                    <a href="https://maps.app.goo.gl/9Zp26" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold font-mono text-[9px] uppercase mt-2.5 inline-flex items-center gap-1 hover:text-emerald-700 transition-colors">Abrir en Google Maps &rarr;</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Horario</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-light">Lunes a Viernes: 15:00 - 20:00 <span className="text-[10px] text-slate-400 italic">(Sujeto a disponibilidad)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>

        {/* Doctoralia Booking Widget Section */}
        <FadeUp delay={0.3} className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-6 font-serif">Agenda tu Cita en Línea</h3>
          <DoctoraliaWidget />
        </FadeUp>

        {/* General Contact Info & Urgent Bento */}
        <FadeUp delay={0.4} className="bg-slate-50 border border-slate-200 rounded-3xl max-w-4xl mx-auto p-8 sm:p-12 shadow-sm transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Contacto de Oficina</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-1">Correo Electrónico</h4>
                    <p className="text-slate-600 font-light">{doctor.email}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-1">WhatsApp Citas</h4>
                    <p className="text-slate-600 font-light">Roma Norte: <span className="font-bold text-slate-800">56 1855 6040</span></p>
                    <p className="text-slate-600 font-light mt-0.5">Polanco: <span className="font-bold text-slate-800">56 1059 7042</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Línea de Urgencias</h3>
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:5540224820" 
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-emerald-500/40 p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-500 text-xs uppercase tracking-wider">Urgencias Opción 1</h5>
                    <p className="text-slate-800 text-sm font-bold font-mono">55 4022 4820</p>
                  </div>
                </a>

                <a 
                  href="tel:5510122318" 
                  className="flex items-center gap-4 bg-white border border-slate-200 hover:border-emerald-500/40 p-4 rounded-2xl transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-500 text-xs uppercase tracking-wider">Urgencias Opción 2</h5>
                    <p className="text-slate-800 text-sm font-bold font-mono">55 1012 2318</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
