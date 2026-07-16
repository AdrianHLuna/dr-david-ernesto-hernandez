import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "dh-ser-001",
    slug: "consulta-cirugia-general-y-bariatrica",
    name: "Consulta Especializada en Cirugía General y Bariátrica",
    description: "Consulta de valoración inicial para el diagnóstico de obesidad, reflujo, piedras en la vesícula y hernias de pared abdominal.",
    longDescription: "La consulta de primera vez con el Dr. David Ernesto Hernández Torres consiste en una evaluación médica exhaustiva. Se realiza una revisión clínica detallada de tu historial de salud, síntomas y estudios previos. Si padeces obesidad, se calcula tu Índice de Masa Corporal (IMC) y se evalúan tus comorbilidades (diabetes, hipertensión) para diseñar un plan quirúrgico personalizado de manga o bypass gástrico. Asimismo, se valoran quirúrgicamente problemas de hernias abdominales o reflujo gastroesofágico, brindando una explicación clara del tratamiento óptimo.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "45 a 60 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Diagnóstico preciso y plan de tratamiento quirúrgico a la medida.",
      "Cálculo e interpretación de estudios de laboratorio, ultrasonidos y endoscopias.",
      "Evaluación inicial completa para cirugía de manga gástrica o bypass.",
      "Explicación detallada de riesgos, beneficios y el proceso de recuperación."
    ],
    postOpRecommendations: [
      "Llevar todos los estudios previos que posea (ultrasonidos, endoscopias, laboratorios).",
      "Presentar por escrito las dudas y síntomas principales para su revisión.",
      "Llegar 10 minutos antes de la hora programada."
    ],
    priceRange: "$1,100 MXN",
    technicalSpecs: {
      "Alcance": "Valoración inicial de cirugía general y bariatría",
      "Estudios en consulta": "Exploración física abdominal detallada y toma de signos vitales",
      "Financiamiento": "Meses con intereses fijos y diferidos desde 6 a 24 meses únicamente con Mend Pay"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica", "reflujo-y-hernia-hiatal", "piedras-en-la-vesicula", "hernias-abdominales"],
    image: "/servicios/consulta.png",
    seo: {
      title: "Consulta de Cirugía General y Bariátrica CDMX | Dr. David Hernández",
      description: "Agende su consulta de valoración inicial por obesidad, reflujo o hernias en Roma Norte y Polanco. Costo: $1,100 MXN.",
      keywords: ["consulta cirujano general CDMX", "cirujano bariatra Roma Norte", "valoración manga gástrica CDMX", "doctor de obesidad consulta"]
    }
  },
  {
    id: "dh-ser-002",
    slug: "consulta-subsecuente-y-seguimiento",
    name: "Consulta Subsecuente y de Seguimiento Postoperatorio",
    description: "Consulta de control para el seguimiento clínico de pacientes operados o bajo tratamiento médico continuo.",
    longDescription: "La consulta subsecuente permite el monitoreo cercano del proceso de cicatrización y evolución metabólica del paciente operado. En pacientes bariátricos, es vital para dar seguimiento a la progresión de la dieta (líquida, papilla, blanda y sólida) y vigilar la tolerancia alimentaria. En pacientes operados de hernias o vesícula, permite retirar puntos de sutura, vigilar la herida y autorizar el regreso gradual a las actividades cotidianas del paciente.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "30 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Retiro de puntos y control del estado de las heridas quirúrgicas.",
      "Seguimiento nutricional y metabólico post-cirugía bariátrica.",
      "Detección y manejo oportuno de intolerancia alimentaria o reflujo.",
      "Autorización médica para el regreso seguro a actividades físicas o laborales."
    ],
    postOpRecommendations: [
      "Reportar cualquier síntoma inusual antes de su cita (fiebre o dolor intenso).",
      "Seguir las pautas de alimentación indicadas previamente.",
      "Acudir con ropa cómoda que facilite la exploración del abdomen."
    ],
    priceRange: "$800 MXN",
    technicalSpecs: {
      "Propósito": "Control y seguimiento postoperatorio",
      "Frecuencia sugerida": "Según indicación quirúrgica (típicamente a los 7 días, 1 mes y 3 meses post-cirugía)"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica", "reflujo-y-hernia-hiatal", "piedras-en-la-vesicula", "hernias-abdominales"],
    image: "/servicios/consulta.png",
    seo: {
      title: "Consulta Subsecuente y Control Postoperatorio | Dr. David Hernández",
      description: "Seguimiento médico estrecho para pacientes operados de manga, bypass, vesícula o hernias. Consulta en Roma Norte y Polanco.",
      keywords: ["consulta subsecuente cirujano", "control postoperatorio CDMX", "doctor de seguimiento bariátrico", "retiro de puntos cirugía general"]
    }
  },
  {
    id: "dh-ser-003",
    slug: "consulta-segunda-opinion",
    name: "Valoración de Segunda Opinión Médica",
    description: "Evaluación detallada para confirmar diagnósticos o proponer alternativas quirúrgicas ante cirugías programadas complejas.",
    longDescription: "La consulta de segunda opinión ofrece al paciente la certeza y tranquilidad necesarias antes de someterse a una intervención quirúrgica mayor o de revisión. El Dr. David Hernández analiza minuciosamente tu expediente clínico, estudios de imagen (ultrasonidos, tomografías) e historial médico para corroborar el diagnóstico de colecistitis, hernia de pared abdominal, o queratopatía tiroidea, y sugerir si es candidato a una técnica por laparoscopia (mínima invasión) de menor riesgo.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "60 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Confirmación diagnóstica basada en evidencia científica y guías internacionales.",
      "Evaluación de técnicas laparoscópicas avanzadas de mínima invasión.",
      "Análisis detallado de cirugías bariátricas previas con falla o reganancia.",
      "Absoluta discreción y profesionalismo en la revisión de tu caso."
    ],
    postOpRecommendations: [
      "Llevar todo el expediente clínico impreso o digital (recetas, notas médicas, reportes quirúrgicos previos).",
      "Traer los discos o carpetas con los estudios de imagen (no solo la interpretación escrita)."
    ],
    priceRange: "$1,100 MXN",
    technicalSpecs: {
      "Alcance": "Revisión clínica exhaustiva y propuesta terapéutica",
      "Especialidad": "Cirugía de revisión bariátrica y hernias complejas"
    },
    relatedConditions: ["reganancia-de-peso-bariatrica", "hernias-abdominales", "reflujo-y-hernia-hiatal", "nodulos-tiroideos"],
    image: "/servicios/consulta.png",
    seo: {
      title: "Segunda Opinión Médica en Cirugía y Bariometría CDMX",
      description: "Tome decisiones seguras sobre su salud. Consulta de segunda opinión por cirugía de hernias, vesícula o bariátrica con el Dr. David Hernández.",
      keywords: ["segunda opinion cirujano CDMX", "cirugía de revisión bariátrica", "doctor especialista en hernias complejas", "evaluación de cirugía previa"]
    }
  },
  {
    id: "dh-ser-004",
    slug: "consulta-virtual-remota",
    name: "Consulta Virtual (Telemedicina)",
    description: "Orientación médica online por videollamada para la revisión de estudios, pre-valoración o seguimiento a distancia.",
    longDescription: "La consulta virtual te permite tener acceso al Dr. David Ernesto Hernández Torres desde la comodidad de tu hogar o lugar de trabajo. Es ideal para una pre-valoración bariátrica (donde se discuten opciones de manga o bypass), para revisar y explicar resultados de exámenes de laboratorio o estudios de imagen encargados en consultas previas, o para el seguimiento rutinario de pacientes estables que se encuentran fuera de la Ciudad de México.",
    type: "consultorio",
    anesthesiaType: "Ninguna",
    duration: "30 minutos",
    recoveryTime: "Inmediata",
    isPainful: false,
    benefits: [
      "Acceso médico inmediato desde cualquier lugar sin necesidad de trasladarse.",
      "Revisión y lectura cómoda de exámenes clínicos y estudios de imagen.",
      "Orientación bariátrica inicial antes de programar tus estudios presenciales.",
      "Seguimiento clínico para pacientes foráneos."
    ],
    postOpRecommendations: [
      "Asegurar una conexión estable a internet y una cámara de video funcional.",
      "Enviar los estudios de laboratorio o reportes por correo electrónico antes de la videollamada."
    ],
    priceRange: "$800 MXN",
    technicalSpecs: {
      "Plataforma": "Videollamada segura (Google Meet o Zoom)",
      "Requisito": "Envío previo de estudios en formato PDF o imagen"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica", "reflujo-y-hernia-hiatal", "piedras-en-la-vesicula"],
    image: "/servicios/consulta.png",
    seo: {
      title: "Consulta en Línea (Telemedicina) Cirugía General | Dr. David",
      description: "Consulta médica online con el Dr. David Ernesto Hernández Torres. Revisión de estudios y pre-valoración bariátrica a distancia. Costo: $800 MXN.",
      keywords: ["consulta medica online cdmx", "telemedicina cirujano general", "videollamada doctor obesidad", "segunda opinion virtual"]
    }
  },
  {
    id: "dh-ser-005",
    slug: "manga-gastrica-y-bypass-laparoscopico",
    name: "Cirugía Bariátrica (Manga Gástrica y Bypass Gástrico)",
    description: "Procedimientos laparoscópicos de mínima invasión para la reducción del tamaño estomacal y el control definitivo de la obesidad clínica.",
    longDescription: "La cirugía bariátrica por laparoscopia representa el tratamiento más efectivo y duradero para combatir la obesidad moderada a severa y controlar enfermedades metabólicas asociadas. La Manga Gástrica (Gastrectomía Vertical) consiste en retirar aproximadamente el 80% del estómago, creando un reservorio tubular estrecho. Esto limita mecánicamente la ingesta de comida y reduce la hormona del hambre (grelina). El Bypass Gástrico (derivación) reduce el tamaño gástrico y reconecta el intestino para limitar la absorción de calorías y grasas, siendo altamente metabólico para lograr la remisión de la diabetes tipo 2. Ambas cirugías se realizan mediante puertos milimétricos, garantizando menor dolor y rápida recuperación.",
    type: "hospitalario",
    anesthesiaType: "Anestesia General",
    duration: "60 a 120 minutos",
    recoveryTime: "7 a 10 días para actividades ligeras; 4 semanas para ejercicio de fuerza",
    isPainful: false, // Controlado con analgesia multimodal postoperatoria
    benefits: [
      "Pérdida del 60% al 85% del exceso de peso corporal en el primer año.",
      "Remisión de la diabetes tipo 2 e hipertensión arterial en más del 80% de los casos.",
      "Resolución de apnea del sueño y disminución del colesterol y triglicéridos.",
      "Recuperación rápida por abordaje laparoscópico de mínima invasión.",
      "Mejora sustancial en la movilidad, salud articular y autoestima."
    ],
    postOpRecommendations: [
      "Llevar una dieta líquida estricta durante las primeras 2 semanas postoperatorias.",
      "Caminar diariamente desde el primer día para prevenir coágulos y acelerar la digestión.",
      "Tomar suplementos bariátricos diarios de por vida para asegurar la ingesta de vitaminas.",
      "Evitar cargar más de 5 kg de peso durante el primer mes."
    ],
    priceRange: "Rango de precio sujeto a valoración hospitalaria",
    technicalSpecs: {
      "Técnica": "Laparoscopía de 4 o 5 puertos milimétricos (mínima invasión)",
      "Materiales": "Grapadoras quirúrgicas automáticas de titanio de última generación",
      "Estancia": "1 a 2 noches de hospitalización para control médico inicial"
    },
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica"],
    image: "/servicios/manga-gastrica.png",
    seo: {
      title: "Manga Gástrica y Bypass Gástrico en CDMX | Dr. David Hernández",
      description: "Cirugía para perder peso y controlar la diabetes en la CDMX. Manga y bypass gástrico laparoscópico con el Dr. David Ernesto Hernández Torres.",
      keywords: ["manga gastrica cdmx precio", "bypass gastrico df", "cirujano bariatra cdmx", "operacion de obesidad df"]
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
