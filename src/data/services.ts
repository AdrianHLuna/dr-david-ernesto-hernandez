import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "dh-ser-001",
    slug: "consulta-cirugia-general",
    name: "Consulta Especializada en Cirugía General",
    description: "Consulta de valoración inicial para el diagnóstico de hernias, reflujo gastroesofágico, piedras en la vesícula, apendicitis y nódulos tiroideos.",
    longDescription: "La consulta de primera vez con el Dr. David Ernesto Hernández Torres consiste en una evaluación médica exhaustiva. Se realiza una revisión clínica detallada de tu historial de salud, síntomas y estudios previos. Se valoran y diagnostican problemas de hernias abdominales, padecimientos de la vesícula, reflujo gastroesofágico y hernia hiatal, nódulos tiroideos y urgencias gastrointestinales, brindando una explicación clara del tratamiento quirúrgico óptimo para cada caso.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "45 a 60 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Diagnóstico preciso y plan de tratamiento quirúrgico a la medida.",
      "Cálculo e interpretación de estudios de laboratorio, ultrasonidos y endoscopias.",
      "Valoración completa de hernias, vesícula, reflujo, tiroides y apendicitis.",
      "Explicación detallada de riesgos, beneficios y el proceso de recuperación."
    ],
    postOpRecommendations: [
      "Llevar todos los estudios previos que posea (ultrasonidos, endoscopias, laboratorios).",
      "Presentar por escrito las dudas y síntomas principales para su revisión.",
      "Llegar 10 minutos antes de la hora programada."
    ],
    priceRange: "$1,100 MXN",
    technicalSpecs: {
      "Alcance": "Valoración inicial de cirugía general",
      "Estudios en consulta": "Exploración física abdominal detallada y toma de signos vitales",
      "Financiamiento": "Meses con intereses fijos y diferidos desde 6 a 24 meses únicamente con Mend Pay"
    },
    relatedConditions: ["reflujo-y-hernia-hiatal", "piedras-en-la-vesicula", "hernias-abdominales", "apendicitis-aguda", "nodulos-tiroideos"],
    image: "/servicios/consulta.png",
    seo: {
      title: "Consulta de Cirugía General CDMX | Dr. David Hernández Torres",
      description: "Agende su consulta de valoración inicial por hernias, reflujo, vesícula o tiroides en Roma Norte y Polanco. Costo: $1,100 MXN.",
      keywords: ["consulta cirujano general CDMX", "cirujano general Roma Norte", "valoración hernia CDMX", "doctor cirugía general consulta"]
    }
  },
  {
    id: "dh-ser-006",
    slug: "colecistectomia-laparoscopica",
    name: "Cirugía de Vesícula por Laparoscopia",
    description: "Extracción segura y por mínima invasión de la vesícula biliar inflamada o con cálculos (piedras) para evitar infecciones o pancreatitis.",
    longDescription: "La colecistectomía laparoscópica es el estándar de oro quirúrgico a nivel mundial para tratar las piedras en la vesícula (colelitiasis) y la inflamación de la misma (colecistitis). A través de 4 microincisiones de 5 a 10 mm en el abdomen, el cirujano inserta una videocámara y pinzas microscópicas para disecar y extraer la vesícula enferma con todas sus piedras. Al no requerir grandes cortes musculares, el dolor postoperatorio es mínimo, permitiendo que el paciente regrese a casa el mismo día o al día siguiente de la cirugía.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "45 a 60 minutos",
    recoveryTime: "5 a 7 días para actividades de oficina; 3 semanas para ejercicio",
    isPainful: false, // Dolor leve, manejable con analgésicos convencionales
    benefits: [
      "Eliminación definitiva del dolor agudo causado por comer grasas.",
      "Prevención de complicaciones graves como peritonitis vesicular o pancreatitis biliar.",
      "Cicatrices milimétricas estéticas casi imperceptibles.",
      "Retorno rápido a casa y a las actividades cotidianas."
    ],
    postOpRecommendations: [
      "Dieta baja en grasas y lácteos durante las primeras 3 semanas.",
      "Cuidado e higiene diaria de las heridas con agua y jabón neutro durante el baño.",
      "Caminar para ayudar a eliminar el gas residual utilizado en la cirugía."
    ],
    priceRange: "Sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Abordaje": "Laparoscopía multipuerto (4 incisiones milimétricas)",
      "Estancia hospitalaria": "Ambulatoria o 1 noche de hospitalización para control analgésico"
    },
    relatedConditions: ["piedras-en-la-vesicula"],
    image: "/servicios/vesicula.png",
    seo: {
      title: "Cirugía de Vesícula Laparoscópica CDMX | Dr. David Hernández",
      description: "Evite la pancreatitis. Operación de vesícula biliar por laparoscopia en Roma Norte y Polanco con el Dr. David Ernesto Hernández Torres.",
      keywords: ["cirugia de vesicula laparoscopica precio", "extracción de vesícula cdmx", "colecistectomia costo mexico", "cirujano de vesicula biliar df"]
    }
  },
  {
    id: "dh-ser-007",
    slug: "hernioplastia-abdominal-laparoscopica",
    name: "Cirugía de Hernias de Pared Abdominal con Malla",
    description: "Reparación quirúrgica de hernias inguinales, umbilicales e incisionales utilizando mallas quirúrgicas especiales por técnica laparoscópica.",
    longDescription: "La hernioplastia es la intervención para corregir una hernia (orificio en el músculo abdominal por donde sobresale tejido o intestino). El Dr. David Hernández realiza la reparación mediante técnica laparoscópica de mínima invasión, introduciendo una cámara para colocar y fijar una malla especial biocompatible detrás del defecto muscular. La malla actúa como un refuerzo estructural que soporta la presión interna del abdomen, logrando cerrar el orificio de forma definitiva y reduciendo a menos del 1% la posibilidad de que la hernia vuelva a aparecer.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General o Regional (Bloqueo espinal)",
    duration: "45 a 90 minutos",
    recoveryTime: "7 a 10 días para actividades ligeras; 6 a 8 semanas para cargar pesado",
    isPainful: false, // Dolor moderado controlado con analgésicos
    benefits: [
      "Cierre seguro del orificio muscular evitando que el intestino se estrangule.",
      "Uso de mallas de última generación que garantizan una reparación de por vida.",
      "Menor riesgo de dolor crónico inguinal en comparación con la cirugía abierta.",
      "Cicatrices estéticas muy pequeñas y rápida recuperación muscular."
    ],
    postOpRecommendations: [
      "Evitar cargar más de 5 kg y realizar esfuerzos abdominales intensos durante las primeras 6 semanas.",
      "Caminar constantemente para mantener una buena circulación y digestión.",
      "Utilizar una faja de soporte abdominal blanda si el cirujano lo indica para mayor comodidad."
    ],
    priceRange: "Sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Técnica": "Hernioplastia laparoscópica preperitoneal (TAPP / TEP)",
      "Implante": "Mallas de polipropileno ligero de alta biocompatibilidad",
      "Fijación de malla": "Tachuelas absorbibles o sutura interna"
    },
    relatedConditions: ["hernias-abdominales"],
    image: "/servicios/hernias.png",
    seo: {
      title: "Reparación de Hernia Inguinal y Umbilical CDMX | Dr. David",
      description: "Cirugía de hernia con malla por laparoscopia. Elimine el bulto y el dolor de forma definitiva con el Dr. David Ernesto Hernández Torres.",
      keywords: ["cirugia de hernia umbilical precio", "hernioplastia inguinal laparoscopica", "colocación de malla para hernia", "especialista en hernias cdmx"]
    }
  },
  {
    id: "dh-ser-008",
    slug: "cirugia-reflujo-y-hernia-hiatal",
    name: "Cirugía para Reflujo y Hernia Hiatal por Laparoscopia",
    description: "Fundoplicatura laparoscópica para reconstruir la válvula del esófago y reparar el hiato diafragmático, deteniendo el reflujo de raíz.",
    longDescription: "La cirugía antireflujo (fundoplicatura laparoscópica tipo Nissen) es el tratamiento definitivo para corregir el reflujo gastroesofágico crónico y la hernia hiatal. El procedimiento consiste en regresar el estómago a la cavidad abdominal (si hay hernia hiatal), cerrar y reforzar los pilares del músculo diafragma (hiato) con puntos de sutura, y envolver la parte superior del estómago alrededor del esófago para recrear una válvula mecánica unidireccional que impida que el ácido suba. Se realiza por laparoscopia con cortes milimétricos.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "60 a 90 minutos",
    recoveryTime: "7 a 10 días para actividades normales; dieta líquida/blanda obligatoria por 3 semanas",
    isPainful: false,
    benefits: [
      "Eliminación inmediata de la sensación de ardor, agruras y regurgitación ácida.",
      "Independencia permanente de medicamentos protectores (omeprazol y derivados).",
      "Prevención activa de complicaciones graves como esofagitis severa o esófago de Barrett.",
      "Recuperación rápida y egreso hospitalario típicamente en 24 horas."
    ],
    postOpRecommendations: [
      "Seguir una dieta líquida y licuada durante las primeras 2 semanas para permitir el paso fácil de alimentos por la nueva válvula.",
      "Comer despacio y masticar perfectamente los alimentos.",
      "Evitar bebidas carbonatadas (refrescos) durante los primeros 3 meses postoperatorios."
    ],
    priceRange: "Sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Procedimiento": "Fundoplicatura tipo Nissen (360 grados) o Toupet (270 grados) por laparoscopia",
      "Cierre de hiato": "Sutura con material no absorbible de alta resistencia"
    },
    relatedConditions: ["reflujo-y-hernia-hiatal"],
    image: "/servicios/cirugia-reflujo.png",
    seo: {
      title: "Cirugía de Hernia Hiatal y Reflujo CDMX | Dr. David Hernández",
      description: "Tratamiento definitivo para el reflujo crónico y la hernia hiatal por laparoscopia. Agende su consulta en Roma Norte y Polanco.",
      keywords: ["cirugia de reflujo precio cdmx", "operacion de hernia hiatal costo mexico", "fundoplicatura tipo nissen df", "curar reflujo gastroesofágico"]
    }
  }
];
