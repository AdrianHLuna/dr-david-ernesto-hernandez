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
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]} />
        
        {/* Hero Síntoma (Bento Header) */}
        <FadeUp className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 mb-16 mt-8 relative overflow-hidden flex flex-col justify-center shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-6">
            <FaExclamationTriangle size={12} /> Síntoma de Alerta
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 relative z-10 font-serif text-slate-900">{symptom.name}</h1>
          <p className="text-sm sm:text-base text-slate-600 relative z-10 leading-relaxed font-light max-w-4xl">{symptom.description}</p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main content Bento column */}
          <StaggerContainer className="lg:col-span-8 space-y-8">
            
            {/* Box 1: Why Consult */}
            <StaggerItem className="bg-gradient-to-br from-rose-50 to-white border border-rose-200 p-8 sm:p-12 rounded-3xl hover:shadow-md transition-all group">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-3">
                <FaExclamationTriangle className="text-rose-500 group-hover:scale-115 transition-transform" /> ¿Por qué no debe ignorarse?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {symptom.whyConsult}
              </p>
            </StaggerItem>

            {/* Box 2: Causes */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Posibles Causas de este Síntoma</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {symptom.causes.map(cause => (
                  <li key={cause} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150 font-light text-xs sm:text-sm text-slate-600 hover:border-slate-350 transition-all cursor-default leading-relaxed">
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-slate-400 mt-6 italic font-light">* El listado anterior expone únicamente sospechas clínicas de causas comunes. Es indispensable acudir a valoración médica para obtener un diagnóstico definitivo y seguro.</p>
            </StaggerItem>
            
          </StaggerContainer>

          {/* Sidebar CTA Bento column */}
          <FadeUp delay={0.2} className="lg:col-span-4 h-full">
            <div className="sticky top-32 bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-500/20 rounded-3xl p-8 text-white shadow-md hover:shadow-lg transition-shadow group flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-black mb-4 font-serif">Especialista en Diagnóstico</h3>
                <p className="text-slate-100/90 mb-8 font-light text-xs leading-relaxed">
                  No espere a que la molestia aumente. Agendar una valoración oportuna con el {doctor.title} {doctor.name} es el primer paso para su tranquilidad y salud.
                </p>
              </div>
              <a 
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-3 bg-white text-emerald-950 font-black py-4 rounded-xl hover:scale-105 hover:bg-slate-50 transition-all shadow-md text-xs uppercase tracking-wider font-bold"
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
