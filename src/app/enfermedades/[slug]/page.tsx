import { diseases } from "@/data/diseases";
import { doctor } from "@/data/doctor";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaCheckCircle, FaExclamationTriangle, FaStethoscope, FaInfoCircle, FaCalendarCheck } from "react-icons/fa";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    slug: disease.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) return {};
  
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const disease = diseases.find((d) => d.slug === resolvedParams.slug);
  if (!disease) notFound();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.description,
      signOrSymptom: disease.symptoms.map(s => ({ "@type": "MedicalSignOrSymptom", name: s })),
      riskFactor: disease.riskFactors.map(r => ({ "@type": "MedicalRiskFactor", name: r })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: disease.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      <StructuredData data={schemas} />
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]} />
        
        {/* Hero Enfermedad (Bento Header) */}
        <FadeUp className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 mt-8">
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 text-slate-800 relative overflow-hidden flex flex-col justify-center shadow-sm">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 font-serif text-slate-900 leading-tight">{disease.name}</h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{disease.description}</p>
          </div>
          <div className="lg:col-span-4 border border-slate-200 rounded-3xl overflow-hidden relative group shadow-sm min-h-[200px]">
            <img 
              src={disease.image} 
              alt={disease.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
            />
          </div>
          <div className="lg:col-span-3 bg-gradient-to-br from-emerald-50 to-white border border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-md">
            <FaInfoCircle className="text-emerald-600 text-2xl" />
            <div>
              <h4 className="font-bold text-slate-900 text-[10px] uppercase tracking-widest mb-2">Impacto en México</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {disease.mexicoStats}
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main content Bento column */}
          <StaggerContainer className="lg:col-span-8 space-y-8">
            
            {/* Box 1: Symptoms */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-3">
                <FaExclamationTriangle className="text-emerald-600" /> Síntomas y Señales de Alerta
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disease.symptoms.map(sym => (
                  <li key={sym} className="bg-slate-50/50 p-4 rounded-xl border border-slate-150 flex items-start gap-3 hover:border-emerald-500/20 transition-all group">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{sym}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Box 2: Causes and Risk factors */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif flex items-center gap-2">
                  <FaStethoscope className="text-emerald-600" /> Causas Comunes
                </h3>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-2.5 font-light leading-relaxed">
                  {disease.causes.map(cause => <li key={cause} className="hover:text-slate-800 transition-colors">{cause}</li>)}
                </ul>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-slate-200 pt-8 sm:pt-0 sm:pl-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif">Factores de Riesgo</h3>
                <ul className="list-disc list-inside text-xs text-slate-500 space-y-2.5 font-light leading-relaxed">
                  {disease.riskFactors.map(factor => <li key={factor} className="hover:text-slate-800 transition-colors">{factor}</li>)}
                </ul>
              </div>
            </StaggerItem>

            {/* Box 3: Treatments */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-3">
                <FaCheckCircle className="text-emerald-600" /> Opciones de Tratamiento
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {disease.treatments.map(treatment => (
                  <span key={treatment} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-xs font-medium hover:border-emerald-500/20 transition-all cursor-default">
                    {treatment}
                  </span>
                ))}
              </div>
            </StaggerItem>

            {/* Box 4: FAQs */}
            <StaggerItem className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {disease.faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-150 hover:border-slate-350 transition-colors">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Sidebar CTA Bento column */}
          <FadeUp delay={0.2} className="lg:col-span-4 h-full">
            <div className="sticky top-32 bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-500/20 rounded-3xl p-8 text-white shadow-md hover:shadow-lg transition-shadow group flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-black mb-4 font-serif">¿Requiere una Valoración Médica?</h3>
                <p className="text-slate-100/90 mb-8 font-light text-xs leading-relaxed">
                  El diagnóstico oportuno previene complicaciones graves. El {doctor.title} {doctor.name} cuenta con la más alta preparación clínica para brindarle una opción segura.
                </p>
              </div>
              <a 
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full flex items-center justify-center gap-3 bg-white text-emerald-950 font-black py-4 rounded-xl hover:scale-105 hover:bg-slate-50 transition-all shadow-md text-xs uppercase tracking-wider font-bold"
              >
                <FaCalendarCheck className="group-hover:rotate-12 transition-transform" /> Agendar Consulta
              </a>
            </div>
          </FadeUp>

        </div>
      </div>
    </div>
  );
}
