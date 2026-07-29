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
  },
  {
    id: "dh-ser-002",
    slug: "manga-gastrica-laparoscopica",
    name: "Manga Gástrica por Laparoscopia",
    description: "Procedimiento bariátrico de mínima invasión que reduce la capacidad del estómago en un 80%, disminuyendo el apetito y promoviendo la pérdida de peso sostenible.",
    longDescription: "La manga gástrica por laparoscopia (gastrectomía vertical en manga) es una técnica quirúrgica altamente efectiva para el tratamiento de la obesidad y sus comorbilidades. Mediante incisiones milimétricas, se retira aproximadamente el 80% del estómago, transformándolo en un tubo delgado. Esto reduce drásticamente la capacidad de ingesta de alimentos y elimina la principal zona productora de ghrelina (la hormona responsable de la sensación de hambre), permitiendo una saciedad rápida y una pérdida de peso progresiva y duradera.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "60 a 90 minutos",
    recoveryTime: "7 a 10 días para actividades diarias; 4 a 6 semanas para ejercicio físico intenso",
    isPainful: false,
    benefits: [
      "Reducción sostenida del 60% al 70% del exceso de peso corporal.",
      "Disminución drástica de la sensación de hambre por reducción de ghrelina.",
      "Mejora o remisión de la diabetes tipo 2, hipertensión y apnea del sueño.",
      "Técnica laparoscópica de mínima invasión con rápida recuperación."
    ],
    postOpRecommendations: [
      "Seguir el esquema dietético por fases (líquidos, puré, alimentos blandos y sólidos).",
      "Tomar la suplementación vitamínica y mineral indicada.",
      "Mantener hidratación constante a pequeños sorbos a lo largo del día."
    ],
    priceRange: "Sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Técnica": "Gastrectomía vertical en manga laparoscópica",
      "Estancia hospitalaria": "1 a 2 noches de hospitalización",
      "Suturas": "Engrapado quirúrgico automático tri-grapado con refuerzo"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica"],
    image: "/servicios/manga-gastrica.png",
    seo: {
      title: "Manga Gástrica Laparoscópica CDMX | Dr. David Hernández",
      description: "Cirugía de manga gástrica por laparoscopia en CDMX (Roma Norte y Polanco). Pierda peso de forma segura y duradera con el Dr. David Hernández Torres.",
      keywords: ["manga gastrica cdmx", "cirugia bariatrica manga gastrica", "manga gastrica precio cdmx", "cirujano bariatrico cdmx"]
    }
  },
  {
    id: "dh-ser-003",
    slug: "bypass-gastrico-laparoscopico",
    name: "Bypass Gástrico por Laparoscopia",
    description: "Cirugía bariátrica y metabólica que combina restricción gástrica y malabsorción, ideal para obesidad severa, diabetes y reflujo severo.",
    longDescription: "El Bypass Gástrico en Y de Roux laparoscópico es considerado el estándar de oro en cirugía bariátrica a nivel mundial. Consiste en la creación de un pequeño reservorio gástrico conectado directamente al intestino delgado, desviando el paso del resto del estómago y duodeno. Este doble mecanismo restrictivo y metabólico genera cambios hormonales inmediatos que favorecen un excelente control glicémico (diabetes), la eliminación del reflujo gastroesofágico y una importante pérdida de peso a largo plazo.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "90 a 120 minutos",
    recoveryTime: "10 a 14 días para retorno laboral; 6 semanas para actividad física intensa",
    isPainful: false,
    benefits: [
      "Pérdida del 70% al 80% del exceso de peso corporal acumulado.",
      "Excelente tasa de remisión o control superior de Diabetes Mellitus Tipo 2.",
      "Control y eliminación definitiva del reflujo gastroesofágico severo.",
      "Normalización del perfil lipídico y reducción del riesgo cardiovascular."
    ],
    postOpRecommendations: [
      "Apego estricto a la suplementación vitamínica continua y controles de laboratorio.",
      "Respetar las indicaciones de la nutricionista bariátrica.",
      "Evitar el consumo de azúcares simples para prevenir el síndrome de dumping."
    ],
    priceRange: "Sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Técnica": "Bypass gástrico laparoscópico en Y de Roux",
      "Estancia hospitalaria": "1 a 2 noches de hospitalización con monitoreo especializado",
      "Anastomosis": "Conexión gastro-yeyunal e yeyuno-yeyunal de alta precisión"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica", "reflujo-y-hernia-hiatal"],
    image: "/servicios/bypass-gastrico.png",
    seo: {
      title: "Bypass Gástrico Laparoscópico CDMX | Dr. David Hernández",
      description: "Cirugía de bypass gástrico por laparoscopia en CDMX para obesidad y diabetes. Valoración en Roma Norte y Polanco con el Dr. David Hernández Torres.",
      keywords: ["bypass gastrico cdmx", "cirugia metabolica diabetes", "bypass gastrico precio mexico", "cirujano bariatrico roma norte polanco"]
    }
  },
  {
    id: "dh-ser-004",
    slug: "control-de-peso-integral",
    name: "Control de Peso y Evaluación Bariátrica",
    description: "Programa médico integral para la evaluación metabólica, diagnóstico de complicaciones digestivas y acompañamiento en la pérdida de peso.",
    longDescription: "El programa de Control de Peso y Evaluación Bariátrica está dirigido a pacientes que buscan una alternativa médica integral frente al sobrepeso y la obesidad. Bajo la atención del Dr. David Ernesto Hernández Torres, se realiza una valoración clínica profunda del estado metabólico, identificación de comorbilidades (diabetes, hipertensión, hígado graso), así como el descarte de problemas quirúrgicos asociados (hernias, litiasis biliar, reflujo). El programa determina la indicación de tratamiento médico o la preparación idónea para cirugía bariátrica.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "45 a 60 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Evaluación médica personalizada y valoración de riesgos metabólicos.",
      "Diagnóstico oportuno de complicaciones asociadas al sobrepeso.",
      "Ruta médica clara: tratamiento nutricional o indicación bariátrica.",
      "Acompañamiento clínico cercano con enfoque ético y seguro."
    ],
    postOpRecommendations: [
      "Presentar estudios de laboratorio recientes (química sanguínea, perfil de lípidos, glucosa).",
      "Realizar seguimiento periódico con el equipo médico multidisciplinario."
    ],
    priceRange: "$1,100 MXN (Consulta inicial)",
    technicalSpecs: {
      "Alcance": "Valoración médica y metabólica inicial y seguimiento",
      "Diagnóstico": "Cálculo de IMC, riesgo cardiovascular y estado gastrointestinal",
      "Financiamiento": "Meses con intereses fijos y diferidos desde 6 a 24 meses únicamente con Mend Pay"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica"],
    image: "/servicios/control-de-peso.png",
    seo: {
      title: "Control de Peso y Evaluación Bariátrica CDMX | Dr. David Hernández",
      description: "Programa médico de control de peso y valoración bariátrica en Roma Norte y Polanco, CDMX. Agende su cita con el Dr. David Hernández Torres.",
      keywords: ["control de peso cdmx", "tratamiento medico obesidad cdmx", "evaluacion bariatrica roma norte", "doctor para bajar de peso cdmx"]
    }
  }
];
