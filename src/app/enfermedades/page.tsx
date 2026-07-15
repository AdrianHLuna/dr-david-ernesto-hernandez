import Link from "next/link";
import { diseases } from "@/data/diseases";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Padecimientos y Enfermedades | Dr. David Ernesto Hernández Torres",
  description: "Información médica sobre condiciones del aparato digestivo, hernias y obesidad tratadas por el Dr. David Ernesto Hernández Torres.",
};

export default function EnfermedadesPage() {
  // Helper to resolve specialty category tags
  const getCategory = (slug: string) => {
    if (slug.includes("obesidad") || slug.includes("reganancia")) return "Bariátrica";
    if (slug.includes("hernia") && !slug.includes("hiatal")) return "Pared Abdominal";
    if (slug.includes("apendicitis")) return "Urgencia Quirúrgica";
    if (slug.includes("tiroides")) return "Glandular";
    return "Digestiva";
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
        
        <FadeUp className="mb-16 mt-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Enfermedades y Padecimientos</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Conoce más sobre las condiciones gastrointestinales, metabólicas y de pared abdominal que diagnosticamos y tratamos con el mayor nivel científico y humano.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {diseases.map(disease => (
            <StaggerItem key={disease.id} className="h-full">
              <Link 
                href={`/enfermedades/${disease.slug}`} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] bg-slate-100 text-emerald-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {getCategory(disease.slug)}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors">
                      {disease.name}
                    </h2>
                    
                    <p className="text-slate-600 text-xs font-light leading-relaxed mb-6 line-clamp-4 font-sans">
                      {disease.description}
                    </p>
                  </div>

                  <span className="text-emerald-600 font-bold font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                    Saber más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
