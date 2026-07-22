import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaInfoCircle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import DoctoraliaWidget from "@/components/DoctoraliaWidget";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.longDescription,
    procedureType: service.type === "ambulatorio" ? "NoninvasiveProcedure" : "SurgicalProcedure",
    howPerformed: service.description,
    preparation: service.anesthesiaType ? `Anestesia: ${service.anesthesiaType}` : undefined,
    performer: {
      "@type": "Physician",
      name: `${doctor.title} ${doctor.name}`,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      <StructuredData data={schema} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#5b9ed8]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]} />
        
        {/* Hero Servicio (Bento Header) */}
        <FadeUp className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 mt-8">
          <div className="lg:col-span-5 bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-10 text-[#343f55] relative overflow-hidden flex flex-col justify-center shadow-sm">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#e9f3ff] border border-[#bed2e9] text-[#2f4764] font-bold text-xs uppercase tracking-wider mb-4">
                {service.type}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-[#343f55] leading-tight">{service.name}</h1>
            <p className="text-xs sm:text-sm text-[#474f5a] leading-relaxed font-light">{service.longDescription}</p>
          </div>
          <div className="lg:col-span-4 border border-[#bed2e9] rounded-3xl overflow-hidden relative group shadow-sm min-h-[200px]">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
          </div>
          <div className="lg:col-span-3 bg-gradient-to-br from-[#e9f3ff] to-white border border-[#bed2e9] rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-md">
            <FaInfoCircle className="text-[#5b9ed8] text-2xl" />
            <div>
              <h4 className="font-bold text-[#343f55] text-[10px] uppercase tracking-widest mb-2">Anestesia Utilizada</h4>
              <p className="text-xs text-[#474f5a] font-light leading-relaxed">
                {service.anesthesiaType || "Sin anestesia / Local"}
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content Bento column */}
          <StaggerContainer className="lg:col-span-8 space-y-8">
            
            {/* Box 1: Technical specs */}
            <StaggerItem className="bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#343f55] mb-6 flex items-center gap-3">
                <FaInfoCircle className="text-[#5b9ed8]" /> Ficha Técnica
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#f8fbff] p-8 rounded-2xl border border-[#bed2e9]/60 shadow-inner">
                <div className="border-b border-[#bed2e9]/60 pb-4">
                  <dt className="text-xs font-bold text-[#8196af] uppercase tracking-widest">Duración Promedio</dt>
                  <dd className="text-base font-bold text-[#343f55] mt-1">{service.duration || "Variable"}</dd>
                </div>
                <div className="border-b border-[#bed2e9]/60 pb-4">
                  <dt className="text-xs font-bold text-[#8196af] uppercase tracking-widest">Tiempo de Recuperación</dt>
                  <dd className="text-base font-bold text-[#343f55] mt-1">{service.recoveryTime || "Inmediata"}</dd>
                </div>
                <div className="border-b sm:border-0 border-[#bed2e9]/60 pb-4 sm:pb-0">
                  <dt className="text-xs font-bold text-[#8196af] uppercase tracking-widest">¿Es doloroso?</dt>
                  <dd className="text-base font-bold text-[#343f55] mt-1">{service.isPainful ? "Sí, requiere manejo analgésico" : "Dolor leve a nulo"}</dd>
                </div>

                {/* Custom Specs */}
                {service.technicalSpecs && Object.entries(service.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="col-span-1 sm:col-span-2 border-t border-[#bed2e9]/60 pt-4 mt-2">
                    <dt className="text-xs font-bold text-[#8196af] uppercase tracking-widest">{key}</dt>
                    <dd className="text-base font-bold text-[#343f55] mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            {/* Box 2: Benefits */}
            <StaggerItem className="bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#343f55] mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-[#5b9ed8]" /> Beneficios del Procedimiento
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {service.benefits.map(benefit => (
                  <li key={benefit} className="bg-[#f8fbff] p-4 rounded-xl border border-[#bed2e9]/60 flex items-start gap-3 hover:border-[#5b9ed8] transition-all group">
                    <FaCheckCircle className="text-[#5b9ed8] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-[#474f5a] font-light leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Box 3: Recommendations */}
            <StaggerItem className="bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#343f55] mb-6">Recomendaciones Postoperatorias</h2>
              <div className="bg-[#f8fbff] p-6 rounded-2xl border border-[#bed2e9]/60">
                <ul className="list-disc list-inside text-xs sm:text-sm text-[#474f5a] space-y-3 font-light leading-relaxed">
                  {service.postOpRecommendations.map(rec => <li key={rec} className="hover:text-[#343f55] transition-colors">{rec}</li>)}
                </ul>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Sidebar CTA Bento column */}
          <FadeUp delay={0.2} className="lg:col-span-4 h-full space-y-6">
            <div className="bg-gradient-to-br from-[#343f55] to-[#2f4764] border border-[#343f55] rounded-3xl p-8 text-white shadow-md hover:shadow-lg transition-shadow group flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="text-2xl font-black mb-4">¿Desea agendar este servicio?</h3>
                <p className="text-slate-200 mb-8 font-light text-xs leading-relaxed">
                  Antes de cualquier procedimiento, el {doctor.title} {doctor.name} realizará una valoración médica detallada para diseñar el plan de tratamiento óptimo para ti.
                </p>
              </div>
              <a 
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-3 bg-[#5b9ed8] text-white font-bold py-4 rounded-xl hover:bg-[#2571ac] transition-all shadow-md text-xs uppercase tracking-wider"
              >
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar por WhatsApp
              </a>
            </div>

            {/* Doctoralia Inline Booking block */}
            <div className="rounded-3xl border border-[#bed2e9] bg-white p-4 shadow-sm">
              <h4 className="text-sm font-bold text-[#343f55] mb-4 text-center">Reserva Cita Directamente</h4>
              <DoctoraliaWidget />
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

