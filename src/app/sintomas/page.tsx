import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "Síntomas de Alarma Gastrointestinal | Dr. David Ernesto Hernández Torres",
  description: "Identifica los síntomas digestivos y de pared abdominal que requieren valoración por el cirujano general Dr. David Ernesto Hernández Torres.",
};

export default function SintomasPage() {
  // Helper to determine severity badges
  const getSeverity = (slug: string) => {
    if (slug.includes("dolor-abdominal") || slug.includes("dolor-agudo") || slug.includes("abultamiento")) {
      return { label: "Urgencia Alta", style: "bg-rose-500/10 text-rose-600 border-rose-500/20" };
    }
    return { label: "Valoración Clínica", style: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" };
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Síntomas de Alarma</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Identificar a tiempo señales de alarma gastrointestinal o abultamientos en la pared abdominal es clave para prevenir complicaciones graves y programar una atención médica oportuna.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {symptoms.map(sym => {
            const severity = getSeverity(sym.slug);
            return (
              <StaggerItem key={sym.id} className="h-full">
                <Link 
                  href={`/sintomas/${sym.slug}`} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border ${severity.style}`}>
                          {severity.label}
                        </span>
                        <FaExclamationTriangle size={12} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                      </div>
                      
                      <h2 className="text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors">
                        {sym.name}
                      </h2>
                      
                      <p className="text-slate-600 text-xs font-light leading-relaxed mb-6 line-clamp-4">
                        {sym.description}
                      </p>
                    </div>

                    <span className="text-emerald-600 font-bold font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                      Saber más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
