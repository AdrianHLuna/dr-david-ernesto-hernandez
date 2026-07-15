import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "dh-dis-001",
    slug: "obesidad-clinica",
    name: "Obesidad Grados I, II y III",
    technicalName: "Obesidad Clínica y Enfermedad Metabólica",
    description: "La obesidad es una enfermedad crónica, compleja y progresiva caracterizada por una acumulación anormal o excesiva de grasa corporal que perjudica la salud. Se asocia directamente con comorbilidades graves como la diabetes tipo 2, la hipertensión arterial, dislipidemia (colesterol/triglicéridos elevados), hígado graso y apnea del sueño. Cuando los métodos convencionales fallan, la cirugía bariátrica (manga gástrica y bypass gástrico) es el tratamiento más eficaz a largo plazo para lograr la remisión de estas enfermedades metabólicas y mejorar la expectativa y calidad de vida del paciente.",
    symptoms: [
      "Dificultad persistente para perder peso a pesar de dietas y ejercicio",
      "Hambre frecuente y dificultad para controlar las porciones (falta de saciedad)",
      "Cansancio crónico y falta de aire al realizar esfuerzos cotidianos",
      "Dolores articulares en rodillas, caderas y columna debido al exceso de peso",
      "Apnea obstructiva del sueño y ronquidos intensos nocturnos"
    ],
    causes: [
      "Desequilibrio energético prolongado (mayor ingesta calórica que el gasto metabólico)",
      "Predisposición genética y alteraciones hormonales en la regulación del apetito",
      "Factores ambientales y consumo excesivo de alimentos ultraprocesados",
      "Estilo de vida sedentario y trastornos del sueño"
    ],
    riskFactors: [
      "Antecedentes familiares directos de obesidad o diabetes",
      "Enfermedades endocrinológicas como hipotiroidismo o resistencia a la insulina",
      "Alto nivel de estrés y malos hábitos de descanso diario"
    ],
    mexicoStats: "México ocupa el segundo lugar mundial en obesidad en adultos. Más del 75% de los mexicanos mayores de 20 años padece de sobrepeso u obesidad.",
    complications: [
      "Diabetes Mellitus Tipo 2 y resistencia a la insulina",
      "Hipertensión arterial crónica y enfermedades cardiovasculares",
      "Hígado graso metabólico (esteatohepatitis)",
      "Mayor riesgo de ciertos tipos de cáncer y desgaste articular severo"
    ],
    treatments: [
      "Cirugía de Manga Gástrica por laparoscopia (mínima invasión)",
      "Cirugía de Bypass Gástrico por laparoscopia",
      "Tratamiento médico integral multidisciplinario (nutrición y psicología)"
    ],
    faqs: [
      {
        question: "¿Cómo saber si soy candidato a cirugía bariátrica?",
        answer: "Generalmente son candidatos pacientes con un Índice de Masa Corporal (IMC) mayor a 35, o mayor a 30 si presentan enfermedades asociadas como diabetes, hipertensión o apnea del sueño, y que no hayan obtenido resultados duraderos con tratamientos convencionales."
      },
      {
        question: "¿La cirugía bariátrica cura la diabetes tipo 2?",
        answer: "Sí, en un gran porcentaje de casos se logra la remisión completa de la diabetes tipo 2 (los niveles de azúcar se normalizan sin necesidad de medicamentos), especialmente tras un bypass gástrico, debido a los cambios metabólicos y hormonales inducidos por la cirugía."
      }
    ],
    relatedServices: ["consulta-cirugia-general-y-bariatrica", "manga-gastrica-y-bypass-laparoscopico"],
    relatedSymptoms: ["dificultad-bajar-peso", "ardor-pecho-y-agruras"],
    image: "/images/diseases/obesidad.jpg",
    seo: {
      title: "Tratamiento de Obesidad y Cirugía Bariátrica CDMX | Dr. David Hernández",
      description: "Recupere su salud metabólica. Especialista en cirugía bariátrica (manga y bypass gástrico) en Roma Norte y Polanco. Agende su valoración.",
      keywords: ["cirugía bariátrica CDMX", "manga gástrica precio México", "cirujano bariatra Roma Norte", "tratamiento de la obesidad"]
    }
  },
  {
    id: "dh-dis-002",
    slug: "reganancia-de-peso-bariatrica",
    name: "Reganancia de Peso Post-Bariátrica",
    technicalName: "Falla Quirúrgica o Metabólica Post-Bariátrica",
    description: "La reganancia de peso o la pérdida de peso insuficiente después de una cirugía bariátrica (como manga gástrica o bypass gástrico) es una situación multifactorial que afecta a un porcentaje de pacientes a mediano o largo plazo. Puede deberse a cambios anatómicos (dilatación de la manga o del reservorio gástrico), adaptaciones metabólicas del organismo, o bien al retorno de hábitos alimenticios inapropiados. El Dr. David Hernández evalúa de manera minuciosa cada caso para determinar si el paciente se beneficia de una cirugía de revisión (conversión de manga a bypass) o de un manejo médico-nutricional de rescate.",
    symptoms: [
      "Recuperación progresiva del peso que ya se había perdido con la cirugía anterior",
      "Pérdida de peso insuficiente (menos del 50% del exceso de peso esperado)",
      "Retorno de la sensación de hambre constante o aumento de la capacidad alimentaria",
      "Aparición o empeoramiento de reflujo gastroesofágico severo tras una manga gástrica",
      "Intolerancia alimentaria persistente o vómitos frecuentes"
    ],
    causes: [
      "Dilatación anatómica del estómago residual o de la unión gastrointestinal",
      "Falta de seguimiento nutricional y psicológico a largo plazo",
      "Adaptación del metabolismo del cuerpo para ahorrar energía",
      "Presencia de fístulas o fallas mecánicas en la anatomía quirúrgica previa"
    ],
    riskFactors: [
      "Haberse sometido a cirugía bariátrica hace más de 5 años sin seguimiento regular",
      "Falta de apego al programa de suplementación y ejercicio",
      "Desarrollo de reflujo gastroesofágico severo post-manga gástrica"
    ],
    mexicoStats: "Se estima que hasta un 15% a 20% de los pacientes bariátricos pueden experimentar reganancia de peso significativa a los 5 a 10 años de su cirugía inicial por falta de un manejo continuo.",
    complications: [
      "Reaparición de enfermedades metabólicas controladas (diabetes, hipertensión)",
      "Esofagitis severa o esófago de Barrett debido al reflujo biliar/ácido post-manga",
      "Frustración psicológica y pérdida de movilidad articular"
    ],
    treatments: [
      "Cirugía de revisión bariátrica por laparoscopia (conversión de manga a bypass gástrico)",
      "Ajuste y remodelación de un bypass gástrico previo",
      "Terapia médica y farmacológica de rescate metabólico con apoyo nutricional continuo"
    ],
    faqs: [
      {
        question: "¿Se puede volver a operar a alguien que ya tuvo una cirugía bariátrica?",
        answer: "Sí, se llama cirugía de revisión. Es un procedimiento más complejo que requiere alta experiencia. La conversión de una manga gástrica a un bypass gástrico es la técnica más realizada, especialmente cuando hay reganancia de peso combinada con reflujo gastroesofágico severo."
      },
      {
        question: "¿Por qué da reflujo después de una manga gástrica?",
        answer: "La manga gástrica aumenta la presión dentro del estómago residual y altera la anatomía de la unión esófago-gástrica. Si el paciente desarrolla reflujo severo que no cede con medicamentos, la conversión a bypass gástrico es el tratamiento de elección para eliminar el reflujo por completo."
      }
    ],
    relatedServices: ["consulta-segunda-opinion", "manga-gastrica-y-bypass-laparoscopico"],
    relatedSymptoms: ["dificultad-bajar-peso", "ardor-pecho-y-agruras"],
    image: "/images/diseases/reganancia.jpg",
    seo: {
      title: "Cirugía de Revisión y Reganancia de Peso CDMX | Dr. David Hernández",
      description: "Especialista en conversión de manga a bypass por reganancia de peso o reflujo en la Ciudad de México. Consulta de segunda opinión médica.",
      keywords: ["reganancia de peso manga gástrica", "cirugía de revisión bariátrica CDMX", "conversión de manga a bypass", "reflujo después de manga gástrica"]
    }
  },
  {
    id: "dh-dis-003",
    slug: "reflujo-y-hernia-hiatal",
    name: "Reflujo Gastroesofágico y Hernia Hiatal",
    technicalName: "Enfermedad por Reflujo Gastroesofágico (ERGE) y Hernia Hiatal",
    description: "La Enfermedad por Reflujo Gastroesofágico (ERGE) ocurre cuando el ácido del estómago fluye con frecuencia hacia el esófago, irritando su revestimiento. A menudo se asocia con una hernia hiatal, condición en la cual la parte superior del estómago se empuja hacia arriba a través del diafragma (el músculo que separa el abdomen del tórax). Esta alteración mecánica destruye la válvula natural antireflujo. Cuando el tratamiento con medicamentos no es suficiente o existe una hernia hiatal grande, la cirugía laparoscópica (fundoplicatura) corrige mecánicamente este problema.",
    symptoms: [
      "Sensación de ardor o quemazón en el pecho (agruras o pirosis)",
      "Regurgitación de alimentos o líquido amargo/ácido hacia la garganta",
      "Dolor o ardor en la boca del estómago (gastritis)",
      "Dificultad para pasar los alimentos (sensación de atorado)",
      "Tos seca crónica, ronquera o asma de difícil control por microaspiración"
    ],
    causes: [
      "Debilitamiento o relajación del esfínter esofágico inferior",
      "Desplazamiento del estómago hacia el tórax a través del hiato diafragmático (hernia hiatal)",
      "Aumento de la presión intraabdominal debido a obesidad o embarazo"
    ],
    riskFactors: [
      "Obesidad clínica (multiplica el riesgo de reflujo y hernia hiatal)",
      "Tabaquismo y consumo frecuente de irritantes, alcohol o grasas",
      "Padecer esclerodermia o vaciamiento gástrico retardado"
    ],
    mexicoStats: "La ERGE es una de las patologías digestivas más frecuentes en México, afectando a cerca del 20% al 25% de la población adulta debido a hábitos dietéticos.",
    complications: [
      "Esofagitis erosiva (inflamación y heridas en el esófago)",
      "Estenosis esofágica (estrechamiento del esófago que dificulta tragar)",
      "Esófago de Barrett (cambio celular premaligno en el revestimiento del esófago)",
      "Mayor riesgo de desarrollar adenocarcinoma de esófago"
    ],
    treatments: [
      "Fundoplicatura laparoscópica tipo Nissen (reconstrucción de la válvula antireflujo)",
      "Reparación del hiato diafragmático con puntos de sutura",
      "Medicamentos inhibidores de la bomba de protones (omeprazol y derivados)"
    ],
    faqs: [
      {
        question: "¿Cuándo se debe operar el reflujo y la hernia hiatal?",
        answer: "Se opera si el paciente no desea depender de medicamentos de por vida, si hay poco control de los síntomas a pesar del tratamiento, si hay complicaciones como esofagitis severa o esófago de Barrett, o si la hernia hiatal es grande y comprime estructuras del tórax."
      },
      {
        question: "¿Cómo es la recuperación tras la cirugía de reflujo?",
        answer: "Al ser laparoscópica, el dolor es mínimo y la estancia hospitalaria suele ser de un solo día. El paciente debe seguir una dieta blanda/líquida durante las primeras dos a tres semanas mientras cicatriza la nueva válvula."
      }
    ],
    relatedServices: ["cirugia-reflujo-y-hernia-hiatal"],
    relatedSymptoms: ["ardor-pecho-y-agruras", "dolor-abdominal"],
    image: "/images/diseases/reflujo.jpg",
    seo: {
      title: "Cirugía de Reflujo Gastroesofágico y Hernia Hiatal en CDMX",
      description: "Elimine las agruras y el reflujo definitivamente. Especialista en fundoplicatura laparoscópica en Roma Norte y Polanco. Dr. David Hernández.",
      keywords: ["cirugía de hernia hiatal CDMX", "fundoplicatura laparoscópica precio", "tratamiento para el reflujo", "gastritis y reflujo esofágico"]
    }
  },
  {
    id: "dh-dis-004",
    slug: "piedras-en-la-vesicula",
    name: "Piedras en la Vesícula (Colelitiasis)",
    technicalName: "Colelitiasis y Colecistitis Aguda/Crónica",
    description: "La colelitiasis es la presencia de cálculos o piedras dentro de la vesícula biliar, un órgano pequeño que almacena la bilis producida por el hígado. Las piedras obstruyen temporal o definitivamente el conducto de salida de la vesícula, lo que provoca dolor intenso (cólico biliar) o una infección grave (colecistitis aguda). El tratamiento definitivo y preventivo de elección es la colecistectomía laparoscópica (extracción de la vesícula por mínima invasión), la cual evita complicaciones potencialmente mortales como la pancreatitis biliar.",
    symptoms: [
      "Dolor severo y repentino debajo de las costillas del lado derecho, que puede irradiarse a la espalda",
      "Dolor que se presenta principalmente después de comer alimentos grasos, lácteos o huevo",
      "Náuseas, vómito y distensión abdominal tras las comidas",
      "Coloración amarilla en la piel y ojos (ictericia), orina oscura y evacuaciones pálidas (indican obstrucción de la vía biliar)"
    ],
    causes: [
      "Desequilibrio químico en la bilis que provoca la cristalización del colesterol o bilirrubina",
      "Vaciamiento ineficaz o lento de la vesícula biliar"
    ],
    riskFactors: [
      "Ser mujer y tener más de 40 años (las hormonas femeninas favorecen su formación)",
      "Obesidad clínica o pérdida rápida de peso (muy común post-cirugía bariátrica)",
      "Embarazo o uso de anticonceptivos orales"
    ],
    mexicoStats: "La colelitiasis y la inflamación de la vesícula representan la segunda causa de cirugía general de urgencia en adultos en México, con una mayor prevalencia en mujeres.",
    complications: [
      "Colecistitis aguda (infección y peligro de perforación de la vesícula)",
      "Coledocolitiasis (migración de piedras a los conductos del hígado)",
      "Pancreatitis biliar (inflamación del páncreas, condición grave de terapia intensiva)",
      "Cáncer de vesícula biliar (asociado a inflamación crónica por piedras grandes)"
    ],
    treatments: [
      "Colecistectomía laparoscópica (cirugía de mínima invasión para retirar la vesícula y sus piedras)",
      "Cirugía abierta (solo en casos de adherencias extremas o complicaciones severas)"
    ],
    faqs: [
      {
        question: "¿Se pueden disolver las piedras de la vesícula con medicamentos?",
        answer: "No de forma efectiva. Los medicamentos no disuelven las piedras de forma definitiva y el riesgo de que una piedra pequeña migre y tape el páncreas es muy alto. El único tratamiento definitivo y seguro es retirar la vesícula con las piedras."
      },
      {
        question: "¿Cómo se vive sin vesícula biliar?",
        answer: "Se vive de manera completamente normal. El hígado sigue produciendo bilis para la digestión, la cual fluye directamente al intestino. Solo se requiere una dieta baja en grasas durante los primeros 15 a 30 días postoperatorios mientras el cuerpo se adapta."
      }
    ],
    relatedServices: ["colecistectomía-laparoscopica"],
    relatedSymptoms: ["dolor-debajo-costillas", "dolor-abdominal"],
    image: "/images/diseases/vesicula.jpg",
    seo: {
      title: "Cirugía de Vesícula Biliar por Laparoscopia CDMX | Dr. David Hernández",
      description: "Evite complicaciones graves. Especialista en colecistectomía laparoscópica en Roma Norte y Polanco. Cirugía de vesícula segura y rápida.",
      keywords: ["cirugía de vesícula precio CDMX", "colecistectomía laparoscópica Roma Norte", "piedras en la vesícula síntomas", "dolor de vesícula comer grasa"]
    }
  },
  {
    id: "dh-dis-005",
    slug: "hernias-abdominales",
    name: "Hernias de Pared Abdominal",
    technicalName: "Hernia Inguinal, Umbilical, Epigástrica y Postincisional",
    description: "Una hernia ocurre cuando un órgano o tejido interno sobresale a través de una zona de debilidad o desgarro en los músculos de la pared abdominal que lo contienen. Se manifiestan como un bulto o bolita visible que suele aumentar de tamaño al realizar esfuerzos físicos. Las hernias más comunes son las inguinales (en la ingle), umbilicales (en el ombligo), epigástricas (arriba del ombligo) y las incisionales o eventraciones (que aparecen sobre una cicatriz de una cirugía previa). Requieren reparación quirúrgica para evitar que el intestino se atore o pierda flujo sanguíneo.",
    symptoms: [
      "Aparición de un abultamiento o bolita visible en el ombligo, ingle o cicatriz quirúrgica",
      "Dolor, ardor o molestia en la zona del bulto al toser, levantar objetos pesados o pujar",
      "Dolor abdominal agudo e inflamación severa en caso de que la hernia se atore",
      "Náusea, vómito e incapacidad de evacuar en hernias estranguladas"
    ],
    causes: [
      "Debilidad congénita (de nacimiento) en los músculos de la pared abdominal",
      "Aumento constante de la presión interna del abdomen por sobrepeso, tos crónica, estreñimiento o cargar pesado",
      "Mala cicatrización de una incisión quirúrgica previa"
    ],
    riskFactors: [
      "Obesidad clínica (debilita los tejidos y aumenta la presión abdominal)",
      "Realizar esfuerzos físicos intensos o trabajos de carga pesada frecuentemente",
      "Padecer de tos crónica o estreñimiento severo",
      "Tener antecedentes de hernias en la familia"
    ],
    mexicoStats: "La hernioplastia (reparación de hernias) es uno de los procedimientos de cirugía general más programados en México, con la hernia inguinal siendo la más común en hombres y la umbilical en mujeres.",
    complications: [
      "Hernia encarcelada o incarcerada (el tejido queda atrapado y no se puede regresar al abdomen)",
      "Hernia estrangulada (el flujo sanguíneo del intestino atrapado se corta, provocando gangrena y perforación intestinal en horas, una emergencia de vida o muerte)"
    ],
    treatments: [
      "Hernioplastia laparoscópica con colocación de malla (técnica mínimamente invasiva de rápida recuperación)",
      "Hernioplastia abierta tradicional con colocación de malla"
    ],
    faqs: [
      {
        question: "¿Las hernias pueden curarse solas o con fajas?",
        answer: "No. Las hernias son un defecto físico en el músculo (un agujero) y la única forma de repararlas es mediante cirugía. Las fajas solo contienen el bulto temporalmente, pero no curan la hernia y su uso prolongado puede debilitar aún más el músculo."
      },
      {
        question: "¿Por qué se usa una malla en la cirugía de hernia?",
        answer: "La colocación de una malla especial biocompatible refuerza la pared muscular debilitada. Su uso ha demostrado reducir la probabilidad de que la hernia vuelva a aparecer a menos del 1%, en comparación con las técnicas antiguas de solo dar puntos de sutura."
      }
    ],
    relatedServices: ["hernioplastia-abdominal-laparoscopica"],
    relatedSymptoms: ["abultamiento-abdomen-ingle", "dolor-abdominal"],
    image: "/images/diseases/hernia.jpg",
    seo: {
      title: "Cirugía de Hernia Inguinal y Umbilical CDMX | Dr. David Hernández",
      description: "Reparación de hernias con malla por laparoscopia. Especialista en cirugía de hernia inguinal, umbilical y postincisional en Roma Norte y Polanco.",
      keywords: ["cirugía de hernia inguinal precio CDMX", "hernioplastia laparoscópica Polanco", "hernia umbilical tratamiento", "operación de hernia con malla"]
    }
  },
  {
    id: "dh-dis-006",
    slug: "apendicitis-aguda",
    name: "Apendicitis Aguda",
    technicalName: "Apendicitis Aguda Congestiva y Perforada",
    description: "La apendicitis es la inflamación del apéndice cecal, una estructura pequeña en forma de saco ubicada al inicio del colon en la parte inferior derecha del abdomen. Es la causa más común de dolor abdominal agudo que requiere cirugía de emergencia en el mundo. La obstrucción del apéndice por restos de materia fecal o inflamación provoca una acumulación de bacterias, aumento de presión y peligro inminente de perforación (peritonitis). Requiere cirugía de apendicectomía inmediata por laparoscopia.",
    symptoms: [
      "Dolor que inicia alrededor del ombligo y se desplaza hacia la parte inferior derecha del abdomen",
      "Dolor agudo que empeora notablemente al caminar, toser o realizar movimientos bruscos",
      "Pérdida total del apetito (anorexia), náuseas y vómito",
      "Fiebre de bajo grado y escalofríos",
      "Abdomen doloroso y muy rígido al tacto"
    ],
    causes: [
      "Obstrucción del interior del apéndice por un fecalito (materia fecal endurecida)",
      "Inflamación de los tejidos linfáticos del apéndice por infecciones virales o bacterianas"
    ],
    riskFactors: [
      "Se puede presentar a cualquier edad, aunque es más común en jóvenes entre 10 y 30 años",
      "No existen factores de prevención claros más que acudir a valoración oportuna ante dolor abdominal"
    ],
    mexicoStats: "La apendicectomía es la cirugía general de urgencia más frecuente en todos los hospitales públicos y privados de la Ciudad de México y el país.",
    complications: [
      "Perforación del apéndice con peritonitis localizada o generalizada",
      "Sepsis abdominal (infección sistémica grave)",
      "Formación de plastrón o absceso apendicular"
    ],
    treatments: [
      "Apendicectomía laparoscópica de urgencia (extracción del apéndice inflamado mediante mínima incisión)",
      "Apendicectomía abierta (en casos de peritonitis severa y tardía)"
    ],
    faqs: [
      {
        question: "¿Qué pasa si se toma un analgésico ante sospecha de apendicitis?",
        answer: "Está totalmente contraindicado. Tomar analgésicos o antibióticos sin diagnóstico médico enmascara el dolor y los síntomas, haciendo que el paciente crea que mejoró mientras el apéndice se sigue perforando internamente, retrasando una cirugía urgente."
      },
      {
        question: "¿Cuáles son las ventajas de la apendicectomía laparoscópica?",
        answer: "Permite una recuperación mucho más rápida, menor dolor postoperatorio, cicatrices milimétricas estéticas y menor riesgo de infecciones en las heridas en comparación con la cirugía abierta tradicional."
      }
    ],
    relatedServices: ["consulta-cirugia-general-y-bariatrica"],
    relatedSymptoms: ["dolor-abdominal", "dolor-debajo-costillas"],
    image: "/images/diseases/apendicitis.jpg",
    seo: {
      title: "Urgencias de Apendicitis y Cirugía de Apéndice en CDMX",
      description: "Atención inmediata de apendicectomía laparoscópica las 24 horas. Dr. David Ernesto Hernández Torres. Roma Norte y Polanco.",
      keywords: ["cirugía de apendicitis CDMX urgencias", "apendicectomía laparoscópica precio", "dolor abdominal lado derecho abajo", "cirujano general urgencias CDMX"]
    }
  },
  {
    id: "dh-dis-007",
    slug: "nodulos-tiroideos",
    name: "Nódulos Tiroideos",
    technicalName: "Nódulo Tiroideo y Patología Quirúrgica Tiroidea",
    description: "Un nódulo tiroideo es un crecimiento o bulto anormal de células dentro de la glándula tiroides, ubicada en la base del cuello. La gran mayoría de los nódulos son benignos (no cancerosos), pero un porcentaje requiere evaluación exhaustiva mediante ultrasonido y biopsia por aspiración (BAAF) para descartar cáncer de tiroides. Si el nódulo es sospechoso de malignidad, crece rápidamente, altera la respiración/deglución o causa hipertiroidismo, el tratamiento de elección es la tiroidectomía (cirugía de remoción parcial o total de la tiroides).",
    symptoms: [
      "Aparición de un abultamiento o bolita visible o palpable en la parte anterior del cuello",
      "Dificultad para tragar alimentos sólidos o líquidos (disfagia)",
      "Dificultad para respirar (disnea) al acostarse debido a compresión mecánica",
      "Ronquera o cambios persistentes en el tono de la voz",
      "Dolor en la parte anterior del cuello que puede irradiarse al oído"
    ],
    causes: [
      "Crecimiento excesivo de tejido tiroideo normal (adenoma benigno)",
      "Quistes tiroideos (sacos llenos de líquido)",
      "Tiroiditis o inflamación crónica de la glándula",
      "Cáncer de tiroides (crecimiento celular maligno)"
    ],
    riskFactors: [
      "Exposición previa a radiación en cabeza o cuello",
      "Tener antecedentes familiares de nódulos tiroideos o cáncer de tiroides",
      "Ser mujer y tener edad avanzada (los nódulos son más frecuentes en mujeres)"
    ],
    mexicoStats: "Los nódulos tiroideos palpables afectan a cerca del 5% al 7% de la población mexicana, detectándose en un porcentaje mucho mayor mediante ultrasonidos rutinarios de cuello.",
    complications: [
      "Compresión de la tráquea y el esófago si el nódulo crece excesivamente",
      "Desarrollo de hipertiroidismo secundario (nódulo autónomo hiperfuncionante)",
      "Progresión o metástasis de cáncer de tiroides si se retrasa el diagnóstico"
    ],
    treatments: [
      "Tiroidectomía total o parcial (hemitiroidectomía) por cirugía abierta de mínima incisión estética",
      "Monitoreo clínico y por ultrasonido periódico (en nódulos benignos no obstructivos)"
    ],
    faqs: [
      {
        question: "¿Tener un nódulo en la tiroides significa que tengo cáncer?",
        answer: "No. Más del 90% de los nódulos tiroideos evaluados son benignos. Sin embargo, todo nódulo mayor a 1 cm o con características sospechosas por ultrasonido debe someterse a una biopsia BAAF para descartar malignidad con certeza."
      },
      {
        question: "¿Qué pasa si me retiran toda la tiroides?",
        answer: "Si se realiza una tiroidectomía total, el paciente deberá tomar una tableta diaria de hormona tiroidea de por vida para suplir la función del órgano, lo cual permite llevar una vida completamente saludable y sin restricciones."
      }
    ],
    relatedServices: ["consulta-segunda-opinion"],
    relatedSymptoms: ["abultamiento-abdomen-ingle"],
    image: "/images/diseases/tiroides.jpg",
    seo: {
      title: "Cirugía de Tiroides y Nódulos Tiroideos CDMX | Dr. David Hernández",
      description: "Diagnóstico y cirugía de tiroides (tiroidectomía) en la Ciudad de México. Especialista en nódulos tiroideos en Roma Norte y Polanco.",
      keywords: ["cirugía de tiroides precio CDMX", "tiroidectomía laparoscópica o abierta", "nódulo tiroideo biopsia BAAF", "cirujano de cuello y tiroides"]
    }
  }
];
