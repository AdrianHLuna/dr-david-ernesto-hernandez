import Link from "next/link";
import Image from "next/image";
import { doctor, offices } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-[#343f55] text-[#8196af] pt-20 pb-10 border-t border-[#474f5a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Contacto y Logotipo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 select-none">
              <Image 
                src="/logo-footer.png" 
                alt={`Logo ${doctor.title} ${doctor.name}`} 
                width={240} 
                height={55} 
                className="h-11 w-auto object-contain brightness-110"
              />
            </Link>
            <div className="flex flex-col gap-4 text-xs">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-[#5b9ed8] transition-all duration-300">
                <FaWhatsapp className="text-[#5b9ed8] text-base" /> {doctor.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
              </a>
              <a href={`tel:${doctor.phone}`} className="flex items-center gap-3 text-slate-200 hover:text-[#5b9ed8] transition-all duration-300">
                <FaPhone className="text-[#5b9ed8] text-sm" /> {doctor.phone.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3")}
              </a>
            </div>
            
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mt-4">Métodos de Pago</h4>
            <div className="flex flex-wrap gap-2">
              {doctor.paymentMethods.map(method => (
                <span key={method} className="bg-[#2f4764] text-[9px] uppercase font-bold tracking-wider px-3 py-1.5 text-white border border-[#474f5a] rounded-sm">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Padecimientos */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Padecimientos</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {diseases.slice(0, 6).map(d => (
                <li key={d.id}>
                  <Link href={`/enfermedades/${d.slug}`} className="hover:text-white transition-all duration-300">{d.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/enfermedades" className="text-[#5b9ed8] font-semibold tracking-widest text-xs uppercase hover:underline">
                  Ver todos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Procedimientos</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {services.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link href={`/servicios/${s.slug}`} className="hover:text-white transition-all duration-300">{s.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/servicios" className="text-[#5b9ed8] font-semibold tracking-widest text-xs uppercase hover:underline">
                  Ver todos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Consultorios */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Ubicaciones</h3>
            <div className="flex flex-col gap-6 text-xs leading-relaxed">
              {offices.map((office) => (
                <div key={office.id} className="flex gap-3">
                  <FaMapMarkerAlt className="text-[#5b9ed8] mt-0.5 flex-shrink-0 text-base" />
                  <div>
                    <h4 className="font-bold text-white mb-0.5">{office.name}</h4>
                    <p className="text-slate-300 font-light">{office.address}, {office.city}</p>
                    <a 
                      href={office.googleMapsUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#5b9ed8] hover:underline text-[10px] uppercase font-bold tracking-wider mt-1 block"
                    >
                      Ver en mapa &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-[#474f5a] pt-8 text-center text-xs flex flex-col gap-3 font-light">
          <p className="text-slate-300">
            Cédula Profesional: <strong className="font-medium text-white">{doctor.cedula}</strong> (IPN) &nbsp;|&nbsp; 
            Cédula Especialidad: <strong className="font-medium text-white">{doctor.cedulaEspecialidad}</strong> (UNAM) &nbsp;|&nbsp; 
            CMCG: <strong className="font-medium text-white">C24026124</strong>
          </p>
          <p className="text-[#8196af] text-[10px] tracking-wide uppercase">
            © {new Date().getFullYear()} Dr. David Ernesto Hernández Torres. Todos los derechos reservados. &nbsp;|&nbsp; 
            <Link href="/aviso-de-privacidad" className="hover:text-white underline">Aviso de Privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

