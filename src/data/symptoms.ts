import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "dh-sym-001",
    slug: "dificultad-bajar-peso",
    name: "Dificultad persistente para bajar de peso",
    description: "La incapacidad de perder peso de forma duradera mediante dietas, ejercicio o tratamientos farmacológicos, o bien la reganancia rápida después de un periodo de pérdida, es una señal de alerta de resistencia metabólica o falla del tratamiento. En pacientes previamente operados de cirugía bariátrica, representa una indicación de valoración para descartar dilatación del estómago residual o necesidad de una cirugía de revisión.",
    causes: [
      "Falla metabólica crónica y resistencia grave a la insulina.",
      "Adaptación anatómica o dilatación gástrica post-manga gástrica previa.",
      "Hábitos dietéticos desordenados sin acompañamiento multidisciplinario."
    ],
    whyConsult: "Debe programar una consulta si a pesar de seguir planes de nutrición y ejercicio no logra perder peso de manera sostenida, o si nota una reganancia rápida del peso previamente perdido tras una cirugía bariátrica.",
    relatedConditions: ["obesidad-clinica", "reganancia-de-peso-bariatrica"],
    image: "/images/symptoms/dificultad-peso.jpg",
    seo: {
      title: "Resistencia para Bajar de Peso y Reganancia CDMX | Dr. David",
      description: "Dificultad crónica para bajar de peso o reganancia tras cirugía bariátrica. Valoración de manga y bypass en Roma Norte y Polanco.",
      keywords: ["dificultad bajar peso", "reganancia peso manga gastrica", "falla cirugía bariátrica", "cirujano bariatra CDMX"]
    }
  },
  {
    id: "dh-sym-002",
    slug: "ardor-pecho-y-agruras",
    name: "Ardor en el pecho o 'agruras'",
    description: "La acidez y la regurgitación ácida hacia la garganta (pirosis) son los síntomas cardinales del reflujo gastroesofágico (ERGE). Ocurren por la debilidad de la válvula que separa el esófago del estómago, o por la presencia de una hernia hiatal. También se presenta con frecuencia tras una cirugía de manga gástrica debido al aumento de presión intragástrica.",
    causes: [
      "Enfermedad por Reflujo Gastroesofágico (ERGE).",
      "Presencia de una Hernia Hiatal que destruye la válvula antireflujo.",
      "Aumento de presión gástrica inducida por cirugía de Manga Gástrica previa."
    ],
    whyConsult: "Debe consultar con el cirujano general si el ardor en el pecho es diario, si interrumpe su sueño por las noches, o si requiere de antiácidos constantes para poder comer sin molestias.",
    relatedConditions: ["reflujo-y-hernia-hiatal", "reganancia-de-peso-bariatrica"],
    image: "/images/symptoms/ardor-pecho.jpg",
    seo: {
      title: "Causas de Agruras y Reflujo Ácido CDMX | Dr. David Hernández",
      description: "¿Sufre de acidez constante o reflujo después de comer? Conozca el tratamiento definitivo y la cirugía antireflujo en CDMX.",
      keywords: ["ardor en el pecho", "agruras constantes tratamiento", "reflujo despues de manga gastrica", "cirugia de reflujo cdmx"]
    }
  },
  {
    id: "dh-sym-003",
    slug: "dolor-debajo-costillas",
    name: "Dolor debajo de las costillas (Lado derecho)",
    description: "El dolor agudo o cólico localizado debajo de las costillas del lado derecho (hipocondrio derecho), que se irradia frecuentemente hacia la espalda o el hombro, suele ser un cólico biliar. Se desencadena típicamente tras la ingesta de comidas ricas en grasas, lácteos o picantes debido a la contracción forzada de la vesícula biliar al intentar expulsar bilis a través de conductos obstruidos por piedras.",
    causes: [
      "Presencia de cálculos o piedras en la vesícula (Colelitiasis).",
      "Inflamación o infección aguda de la vesícula biliar (Colecistitis aguda).",
      "Migración de piedras a los conductos biliares principales (Coledocolitiasis)."
    ],
    whyConsult: "Es de vital importancia acudir a consulta o urgencias si el dolor debajo de las costillas es continuo por más de 4 horas, si se acompaña de fiebre, náuseas, vómito o si nota que su piel u ojos se tornan amarillos (ictericia).",
    relatedConditions: ["piedras-en-la-vesicula"],
    image: "/images/symptoms/dolor-costillas.jpg",
    seo: {
      title: "Dolor de Vesícula Ocular y Cólico Biliar CDMX | Dr. David",
      description: "Dolor en las costillas del lado derecho tras comer grasas. Especialista en cirugía de vesícula biliar en Roma Norte y Polanco.",
      keywords: ["dolor costillas lado derecho", "colico biliar grasas", "piedras en la vesicula dolor", "cirujano de vesicula CDMX"]
    }
  },
  {
    id: "dh-sym-004",
    slug: "abultamiento-abdomen-ingle",
    name: "Abultamiento o bolita en abdomen o ingle",
    description: "La aparición de una protuberancia, masa o bulto palpable en la ingle, el ombligo, la parte media del abdomen o sobre una cicatriz de una operación previa es el signo característico de una hernia. Este abultamiento suele hacerse más grande y doloroso al estar de pie, toser, pujar o realizar esfuerzos físicos, y puede disminuir o desaparecer al acostarse.",
    causes: [
      "Hernia Inguinal (en la ingle, muy común en hombres).",
      "Hernia Umbilical o Epigástrica (en el ombligo o sobre el abdomen medio).",
      "Hernia Postincisional o Eventración (sobre la cicatriz de una cirugía previa)."
    ],
    whyConsult: "Debe ser valorado quirúrgicamente de inmediato si el abultamiento se pone duro, cambia a una coloración morada o roja, produce dolor severo persistente o náuseas, ya que indica una hernia atascada o estrangulada.",
    relatedConditions: ["hernias-abdominales"],
    image: "/images/symptoms/abultamiento.jpg",
    seo: {
      title: "Abultamiento y Hernias Abdominales CDMX | Dr. David",
      description: "¿Nota una bolita en el ombligo o ingle que duele al hacer esfuerzo? Diagnóstico de hernias con el Dr. David Ernesto Hernández Torres.",
      keywords: ["bolita en la ingle hernia", "bulto en el ombligo", "hernia incisional cicatriz", "cirugia de hernia con malla cdmx"]
    }
  },
  {
    id: "dh-sym-005",
    slug: "dolor-abdominal-agudo",
    name: "Dolor abdominal repentino y progresivo",
    description: "El dolor abdominal severo que inicia repentinamente y aumenta de intensidad en pocas horas es una señal de alerta de un cuadro abdominal agudo. Si el dolor se localiza inicialmente alrededor del ombligo y luego se desplaza a la parte inferior derecha, sugiere fuertemente una apendicitis. La automedicación está contraindicada porque oculta los síntomas de perforación.",
    causes: [
      "Apendicitis Aguda (inflamación del apéndice).",
      "Colecistitis Aguda (infección e inflamación de la vesícula).",
      "Perforación de úlcera gástrica o diverticulitis."
    ],
    whyConsult: "Busque atención médica de urgencia si presenta dolor abdominal severo acompañado de rigidez del abdomen (duro al tacto), incapacidad para expulsar gases, fiebre o vómitos persistentes.",
    relatedConditions: ["apendicitis-aguda", "piedras-en-la-vesicula"],
    image: "/images/symptoms/dolor-agudo.jpg",
    seo: {
      title: "Urgencias por Dolor Abdominal Agudo CDMX | Dr. David",
      description: "Dolor abdominal severo y progresivo. Descarte apendicitis aguda o peritonitis. Consulta de urgencias 24/7 en la CDMX.",
      keywords: ["dolor abdominal agudo", "dolor de apendice urgencias cdmx", "peritonitis sintomas", "cirujano general urgencias df"]
    }
  },
  {
    id: "dh-sym-006",
    slug: "intolerancia-alimentaria-post-bariatrica",
    name: "Vómitos o reflujo después de cirugía bariátrica",
    description: "La intolerancia a sólidos, náuseas, vómitos frecuentes o acidez severa tras someterse a una manga gástrica o bypass gástrico son síntomas de alarma. Pueden indicar estenosis (estrechamiento del paso gástrico), reflujo biliar o úlceras marginales en el sitio de las uniones de la cirugía previa, requiriendo valoración especializada.",
    causes: [
      "Estenosis o estrechamiento cicatrizal de la manga gástrica.",
      "Úlcera marginal en la unión del bypass gástrico.",
      "Reflujo gastroesofágico y biliar inducido por presión post-manga gástrica."
    ],
    whyConsult: "Consulte si presenta dificultad para tragar alimentos sólidos, vómitos diarios tras comer o un reflujo ácido/amargo intenso que no disminuye con antiácidos y protectores.",
    relatedConditions: ["reganancia-de-peso-bariatrica", "reflujo-y-hernia-hiatal"],
    image: "/images/symptoms/intolerancia-vomito.jpg",
    seo: {
      title: "Complicaciones y Reflujo Post-Cirugía Bariátrica CDMX",
      description: "Vómitos o intolerancia tras manga o bypass. Diagnóstico y cirugía de revisión con el Dr. David Ernesto Hernández Torres.",
      keywords: ["vomito despues de manga gastrica", "intolerancia alimentaria bypass", "reflujo postbariatrico", "cirugia de revision cdmx"]
    }
  }
];
