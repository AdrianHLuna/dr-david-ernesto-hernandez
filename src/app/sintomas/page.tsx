import Link from "next/link";
import { symptoms } from "@/data/symptoms";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight } from "react-icons/fa";

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
    return { label: "Valoración Clínica", style: "bg-[#e9f3ff] text-[#2571ac] border-[#bed2e9]" };
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5b9ed8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#343f55] mb-4">Síntomas de Alarma</h1>
          <p className="text-base sm:text-lg text-[#474f5a] max-w-3xl font-light">
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
                  className="bg-white rounded-3xl overflow-hidden border border-[#bed2e9] shadow-sm hover:border-[#5b9ed8] hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img 
                      src={sym.image} 
                      alt={sym.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider border bg-white/95 backdrop-blur-sm shadow-sm ${severity.style}`}>
                        {severity.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-2xl font-bold text-[#343f55] mb-3 group-hover:text-[#5b9ed8] transition-colors">
                        {sym.name}
                      </h2>
                      
                      <p className="text-[#474f5a] text-xs font-light leading-relaxed mb-6 line-clamp-4">
                        {sym.description}
                      </p>
                    </div>

                    <span className="text-[#5b9ed8] font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-[#2571ac] transition-colors">
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

