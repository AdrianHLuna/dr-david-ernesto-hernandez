import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "David Ernesto Hernández Torres",
  title: "Dr.",
  specialty: "Cirugía General",
  specialistTitle: "Cirujano General",
  subspecialty: "Especialista en Laparoscopia, Hernias, Vesícula, Reflujo y Tiroides",
  cedula: "12748741", // IPN
  cedulaEspecialidad: "15115068", // UNAM
  cofepris: undefined,
  phone: "5618556040",
  whatsapp: "5618556040",
  email: "contacto@drdavidhernandez.com",
  address: "Roma Norte: Durango 64, Cons. 401 | Polanco: Temístocles 210, Cons. 201",
  city: "Ciudad de México",
  state: "CDMX",
  country: "México",
  googleMapsUrl: "https://g.page/r/CRpfRTPdVagQEBM/",
  consultationPrice: 1100,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito", "Pagos NFC", "Cheques"],
  insurances: ["Todos los seguros médicos (Pago Directo y Reembolso)"],
  schedule: "Roma Norte: Lun a Vie 14:00-20:00, Sáb 8:00-15:00 | Polanco: Lun a Vie 15:00-20:00 (Sujeto a disponibilidad)",
  photo: "/hero.jpg",
  bio: "El Dr. David Ernesto Hernández Torres es médico cirujano egresado del Instituto Politécnico Nacional (IPN), con especialidad en Cirugía General por la Universidad Nacional Autónoma de México (UNAM). Cuenta con certificaciones vigentes ante la Asociación Mexicana de Cirugía General (AMCG) y el Consejo Mexicano de Cirugía General (CMCG), además de ser miembro activo del Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas (CMCOEM). Especializado en cirugía laparoscópica de hernias de pared abdominal, cirugía de vesícula, reflujo gastroesofágico y nódulos tiroideos, ha atendido a más de 1,000 pacientes brindando un trato humano, ético y de máxima seguridad clínica.",
  philosophy: "Tratamientos quirúrgicos mínimamente invasivos con los más altos estándares de seguridad y tecnología para una recuperación rápida y una mejor calidad de vida.",
  experience: [
    {
      year: "Trayectoria Profesional",
      title: "Especialista en Cirugía General",
      description: "Práctica clínica dedicada a la cirugía laparoscópica de vesícula, hernias complejas de pared abdominal, reflujo gastroesofágico y nódulos tiroideos.",
    },
    {
      year: "Atención Clínica",
      title: "Más de 1,000 pacientes atendidos",
      description: "Enfoque clínico centrado en el paciente, brindando valoraciones de primera vez, seguimiento post-operatorio e interconsultas de segunda opinión.",
    }
  ],
  certifications: [
    {
      name: "Cédula Profesional General (Médico Cirujano y Partero)",
      institution: "Instituto Politécnico Nacional (IPN) - Céd. 12748741",
    },
    {
      name: "Cédula de Especialidad en Cirugía General",
      institution: "Universidad Nacional Autónoma de México (UNAM) - Céd. 15115068",
    },
    {
      name: "Asociación Mexicana de Cirugía General (AMCG)",
      institution: "Miembro Activo (Reg. CB25009325)",
    },
    {
      name: "Consejo Mexicano de Cirugía General (CMCG)",
      institution: "Cirujano Certificado (Cert. C24026124)",
    },
    {
      name: "Colegio Mexicano de Cirugía para la Obesidad (CMCOEM)",
      institution: "Miembro Activo",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano y Partero",
      institution: "Escuela Superior de Medicina, Instituto Politécnico Nacional (IPN)",
      year: "Egreso",
    },
    {
      degree: "Especialidad en Cirugía General",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "Egreso",
    }
  ],
  sameAs: [
    "https://www.doctoralia.com.mx/david-ernesto-hernandez-torres/cirujano-general/ciudad-de-mexico",
    "https://g.page/r/CRpfRTPdVagQEBM/",
    "https://g.page/r/CcqO37YbTeVrEBM/"
  ]
};

// Array de consultorios para mapeo detallado
export const offices = [
  {
    id: "office-1",
    name: "Consultorio Roma Norte",
    address: "Calle Durango #64, Consultorio 401, Colonia Roma Norte, Delegación Cuauhtémoc",
    city: "Ciudad de México",
    state: "CDMX",
    cp: "06700",
    phone: "5618556040",
    whatsapp: "5618556040",
    googleMapsUrl: "https://g.page/r/CRpfRTPdVagQEBM/"
  },
  {
    id: "office-2",
    name: "Consultorio Polanco",
    address: "Calle Temístocles #210, Consultorio 201, Colonia Polanco IV Sección, Delegación Miguel Hidalgo",
    city: "Ciudad de México",
    state: "CDMX",
    cp: "11560",
    phone: "5610597042",
    whatsapp: "5610597042",
    googleMapsUrl: "https://g.page/r/CcqO37YbTeVrEBM/"
  }
];
