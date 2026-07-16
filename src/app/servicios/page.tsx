import Link from "next/link";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FaArrowRight, FaRegClock, FaDollarSign, FaHospitalSymbol } from "react-icons/fa";

export const metadata = {
  title: "Procedimientos y Cirugías | Dr. David Ernesto Hernández Torres",
  description: "Conoce los procedimientos quirúrgicos generales y bariátricos realizados por el Dr. David Ernesto Hernández Torres.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 relative overflow-hidden bg-mesh-grid">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
        
        <FadeUp className="mb-16 mt-8 text-center sm:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-serif">Procedimientos y Servicios Quirúrgicos</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-light">
            Ofrecemos soluciones quirúrgicas avanzadas con técnicas laparoscópicas de mínima invasión para obesidad, pared abdominal y tracto digestivo superior.
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
          {services.map(service => (
            <StaggerItem key={service.id}>
              <Link 
                href={`/servicios/${service.slug}`} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row p-8 gap-8 items-center group"
              >
                {/* Details layout Left */}
                <div className="flex-grow space-y-4 text-center md:text-left w-full md:w-3/4">
                  <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                    <span className="text-[9px] bg-slate-100 text-emerald-650 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <FaHospitalSymbol size={10} /> {service.type}
                    </span>
                    <span className="text-[9px] bg-slate-100 text-emerald-650 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <FaRegClock size={10} /> {service.duration}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-emerald-600 transition-colors">
                    {service.name}
                  </h2>
                  
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing & CTA Right */}
                <div className="w-full md:w-1/4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 flex flex-col items-center md:items-start gap-4">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest block font-bold">Costo Estimado</span>
                    <span className="text-xl font-bold font-mono text-emerald-600 flex items-center mt-0.5">
                      <FaDollarSign size={14} /> {service.priceRange?.replace(/\D/g, "") ? service.priceRange : "Valoración"}
                    </span>
                  </div>

                  <span className="text-emerald-600 font-bold font-mono text-[10px] uppercase tracking-wider flex items-center gap-2 group-hover:text-slate-900 transition-colors">
                    Ver más <FaArrowRight size={8} className="group-hover:translate-x-1 transition-transform" />
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
