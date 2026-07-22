import { symptoms } from "@/data/symptoms";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaExclamationTriangle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) return {};
  
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
  };
}

export default async function SymptomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const symptom = symptoms.find((s) => s.slug === resolvedParams.slug);
  if (!symptom) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalSignOrSymptom",
    name: symptom.name,
    description: symptom.description,
    cause: symptom.causes.map(c => ({ "@type": "MedicalCause", name: c })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      <StructuredData data={schema} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#5b9ed8]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Hero Síntoma (Bento Header) */}
        <FadeUp className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 mt-8">
          <div className="lg:col-span-8 bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-12 text-[#343f55] relative overflow-hidden flex flex-col justify-center shadow-sm">
            <div className="flex items-center gap-2 text-[#5b9ed8] font-bold text-xs uppercase tracking-wider mb-6">
              <FaExclamationTriangle size={12} /> Síntoma de Alerta
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-[#343f55]">{symptom.name}</h1>
            <p className="text-sm sm:text-base text-[#474f5a] leading-relaxed font-light">{symptom.description}</p>
          </div>
          <div className="lg:col-span-4 border border-[#bed2e9] rounded-3xl overflow-hidden relative group shadow-sm min-h-[220px]">
            <img 
              src={symptom.image} 
              alt={symptom.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main content Bento column */}
          <StaggerContainer className="lg:col-span-8 space-y-8">
            
            {/* Box 1: Why Consult */}
            <StaggerItem className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 p-8 sm:p-12 rounded-3xl hover:shadow-md transition-all group">
              <h2 className="text-xl sm:text-2xl font-bold text-[#343f55] mb-6 flex items-center gap-3">
                <FaExclamationTriangle className="text-rose-500 group-hover:scale-115 transition-transform" /> ¿Por qué no debe ignorarse?
              </h2>
              <p className="text-sm sm:text-base text-[#474f5a] font-light leading-relaxed">
                {symptom.whyConsult}
              </p>
            </StaggerItem>

            {/* Box 2: Causes */}
            <StaggerItem className="bg-white border border-[#bed2e9] rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-[#343f55] mb-6">Posibles Causas de este Síntoma</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {symptom.causes.map(cause => (
                  <li key={cause} className="bg-[#f8fbff] p-6 rounded-2xl border border-[#bed2e9]/60 font-light text-xs sm:text-sm text-[#474f5a] hover:border-[#5b9ed8] transition-all cursor-default leading-relaxed">
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-[#8196af] mt-6 italic font-light">* El listado anterior expone únicamente sospechas clínicas de causas comunes. Es indispensable acudir a valoración médica para obtener un diagnóstico definitivo y seguro.</p>
            </StaggerItem>
            
          </StaggerContainer>

          {/* Sidebar CTA Bento column */}
          <FadeUp delay={0.2} className="lg:col-span-4 h-full">
            <div className="sticky top-32 bg-gradient-to-br from-[#343f55] to-[#2f4764] border border-[#343f55] rounded-3xl p-8 text-white shadow-md hover:shadow-lg transition-shadow group flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-black mb-4">Especialista en Diagnóstico</h3>
                <p className="text-slate-200 mb-8 font-light text-xs leading-relaxed">
                  No espere a que la molestia aumente. Agendar una valoración oportuna con el {doctor.title} {doctor.name} es el primer paso para su tranquilidad y salud.
                </p>
              </div>
              <a 
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-3 bg-[#5b9ed8] text-white font-bold py-4 rounded-xl hover:bg-[#2571ac] transition-all shadow-md text-xs uppercase tracking-wider font-bold"
              >
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar por WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

