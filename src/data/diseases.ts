import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "dh-dis-001",
    slug: "obesidad-clinica",
    name: "Obesidad Grados I, II y III",
    technicalName: "Obesidad Clínica y Enfermedad Metabólica",
    description: "La obesidad es una enfermedad crónica, compleja y progresiva caracterizada por una acumulación anormal o excesiva de grasa corporal que perjudica la salud. Se clasifica en grado I (IMC 30–34.9), grado II (IMC 35–39.9) y grado III u obesidad mórbida (IMC ≥40). Se asocia directamente con comorbilidades graves como la diabetes tipo 2, la hipertensión arterial, dislipidemia (colesterol/triglicéridos elevados), hígado graso y apnea del sueño. El Dr. David Hernández realiza la valoración, diagnóstico y manejo médico-quirúrgico de las complicaciones asociadas a la obesidad.",
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
      "Valoración médica integral y plan de tratamiento multidisciplinario",
      "Evaluación y manejo de comorbilidades (diabetes, hipertensión, reflujo)",
      "Referencia a especialista bariátrico cuando se requiera manejo quirúrgico de la obesidad"
    ],
    faqs: [
      {
        question: "¿Qué especialista debo consultar por obesidad?",
        answer: "El Dr. David Hernández puede realizar la valoración inicial, evaluar comorbilidades (diabetes, hipertensión, reflujo) y las complicaciones quirúrgicas asociadas a la obesidad, orienta al paciente y coordina el manejo multidisciplinario con el especialista correspondiente."
      },
      {
        question: "¿Qué padecimientos relacionados con la obesidad atiende el Dr. Hernández?",
        answer: "Atiende hernias abdominales asociadas al sobrepeso, reflujo gastroesofágico, hernia hiatal, colecistitis y cálculos biliares frecuentes en pacientes con obesidad, así como complicaciones gastrointestinales relacionadas al exceso de peso."
      }
    ],
    relatedServices: ["consulta-cirugia-general"],
    relatedSymptoms: ["dificultad-bajar-peso", "ardor-pecho-y-agruras"],
    image: "/enfermedades/obesidad.png",
    seo: {
      title: "Obesidad y Complicaciones Quirúrgicas CDMX | Dr. David Hernández",
      description: "Valoración médica de obesidad y sus complicaciones quirúrgicas (hernias, reflujo, vesícula) en Roma Norte y Polanco. Dr. David Hernández Torres.",
      keywords: ["complicaciones de la obesidad cirugía", "cirujano general obesidad CDMX", "reflujo por obesidad tratamiento", "hernia por sobrepeso"]
    }
  },
  {
    id: "dh-dis-002",
    slug: "reganancia-de-peso-bariatrica",
    name: "Reganancia de Peso Post-Bariátrica",
    technicalName: "Falla Quirúrgica o Metabólica Post-Bariátrica",
    description: "La reganancia de peso o la pérdida de peso insuficiente después de una cirugía bariátrica (como manga gástrica o bypass gástrico) es una situación multifactorial que afecta a un porcentaje de pacientes a mediano o largo plazo. Puede deberse a cambios anatómicos (dilatación de la manga o del reservorio gástrico), adaptaciones metabólicas del organismo, o bien al retorno de hábitos alimenticios inapropiados. El Dr. David Hernández evalúa las complicaciones gastrointestinales asociadas y brinda orientación médica especializada.",
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
      "Valoración de segunda opinión médica y evaluación de complicaciones gastrointestinales",
      "Manejo del reflujo gastroesofágico post-manga por laparoscopia",
      "Terapia médica y farmacológica de rescate metabólico con apoyo nutricional continuo"
    ],
    faqs: [
      {
        question: "¿Qué especialista debo consultar si tengo complicaciones de cirugía bariátrica?",
        answer: "El Dr. David Hernández puede evaluar las complicaciones gastrointestinales como reflujo severo, intolerancia alimentaria o hernias postoperatorias. Para la conversión de cirugía (manga a bypass), se coordinará la referencia al especialista bariátrico adecuado."
      },
      {
        question: "¿Por qué da reflujo después de una manga gástrica?",
        answer: "La manga gástrica aumenta la presión dentro del estómago residual y altera la anatomía de la unión esófago-gástrica, lo que provoca reflujo crónico. Este reflujo puede valorarse y manejarse quirúrgicamente con una fundoplicatura laparoscópica."
      }
    ],
    relatedServices: ["consulta-segunda-opinion", "cirugia-reflujo-y-hernia-hiatal"],
    relatedSymptoms: ["dificultad-bajar-peso", "ardor-pecho-y-agruras"],
    image: "/enfermedades/reganancia.png",
    seo: {
      title: "Complicaciones Post-Bariátricas y Reflujo CDMX | Dr. David Hernández",
      description: "Evaluación de reflujo, intolerancia alimentaria y hernias en pacientes post-bariátricos en la Ciudad de México. Dr. David Ernesto Hernández Torres.",
      keywords: ["complicaciones manga gástrica CDMX", "reflujo después de cirgía bariátrica", "segunda opinión cirugía bariátrica", "intolerancia alimentaria post-operatoria"]
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
    image: "/enfermedades/reflujo.png",
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
    image: "/enfermedades/vesicula.png",
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
    image: "/enfermedades/hernia.png",
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
    image: "/enfermedades/apendicitis.png",
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
    image: "/enfermedades/tiroides.png",
    seo: {
      title: "Cirugía de Tiroides y Nódulos Tiroideos CDMX | Dr. David Hernández",
      description: "Diagnóstico y cirugía de tiroides (tiroidectomía) en la Ciudad de México. Especialista en nódulos tiroideos en Roma Norte y Polanco.",
      keywords: ["cirugía de tiroides precio CDMX", "tiroidectomía laparoscópica o abierta", "nódulo tiroideo biopsia BAAF", "cirujano de cuello y tiroides"]
    }
  },
  {
    id: "dh-dis-008",
    slug: "colecistitis-aguda-cronica",
    name: "Colecistitis Aguda y Crónica",
    technicalName: "Colecistitis Aguda o Crónica Litiásica/Alitiásica",
    description: "La colecistitis es la inflamación de la vesícula biliar, frecuentemente ocasionada por la obstrucción del conducto de salida (conducto cístico) por piedras. Puede presentarse de forma aguda (inflamación repentina con dolor muy intenso, fiebre y peligro de infección o perforación) o crónica (episodios repetitivos de cólicos e inflamación que dañan y engrosan las paredes de la vesícula de manera permanente). Representa una de las principales urgencias quirúrgicas en México y requiere la remoción de la vesícula biliar por laparoscopia.",
    symptoms: [
      "Dolor severo y constante debajo de las costillas del lado derecho que puede irradiarse al hombro",
      "Náuseas y vómito de características persistentes",
      "Fiebre de bajo grado o escalofríos en casos de infección activa",
      "Dolor extremo a la palpación del abdomen superior derecho"
    ],
    causes: [
      "Obstrucción del flujo de la bilis por un cálculo impactado en el conducto cístico",
      "Infección bacteriana secundaria por estasis biliar",
      "Trastornos de vaciamiento o vascularidad de la vesícula"
    ],
    riskFactors: [
      "Haber presentado cólicos biliares de forma previa",
      "Ser mujer, tener más de 40 años, cursar con obesidad o experimentar pérdida rápida de peso",
      "Ayuno prolongado o nutrición parenteral"
    ],
    mexicoStats: "La inflamación vesicular (colecistitis) es la segunda causa de intervención de cirugía general de urgencia en adultos en México, afectando predominantemente al género femenino.",
    complications: [
      "Gangrena vesicular (muerte del tejido de la vesícula por falta de riego)",
      "Perforación de la vesícula con peritonitis biliar grave",
      "Empiema vesicular (acumulación de pus dentro del órgano)"
    ],
    treatments: [
      "Colecistectomía laparoscópica de urgencia o programada (estándar de oro)",
      "Manejo médico inicial con ayuno, hidratación intravenosa y antibióticos de amplio espectro"
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre piedras en la vesícula y colecistitis?",
        answer: "Las piedras (colelitiasis) pueden permanecer en la vesícula por años sin causar síntomas. La colecistitis es la complicación directa que ocurre cuando una de esas piedras bloquea el conducto de salida de forma permanente, provocando inflamación y dolor agudo que requiere atención inmediata."
      },
      {
        question: "¿Se puede curar la colecistitis solo con medicamentos?",
        answer: "No de forma definitiva. Los antibióticos y analgésicos pueden desinflamar la vesícula temporalmente, pero las piedras seguirán ahí y el riesgo de un nuevo ataque aún más severo o de pancreatitis biliar es sumamente alto. La cirugía de extirpación es el único tratamiento definitivo."
      },
      {
        question: "¿Cómo es el postoperatorio tras una cirugía de colecistitis?",
        answer: "Al realizarse por laparoscopia (mínima invasión), el dolor es muy leve y la mayoría de los pacientes regresan a casa en menos de 24 horas. Se requiere una dieta baja en grasas por 2 semanas y se puede retomar la vida normal en unos 7 días."
      }
    ],
    relatedServices: ["colecistectomía-laparoscopica"],
    relatedSymptoms: ["dolor-debajo-costillas", "dolor-abdominal-agudo"],
    image: "/enfermedades/colecistitis.png",
    seo: {
      title: "Colecistitis Aguda y Crónica CDMX | Dr. David Hernández",
      description: "Tratamiento definitivo para vesícula biliar inflamada o infectada. Colecistectomía laparoscópica urgente y programada en Roma Norte y Polanco.",
      keywords: ["colecistitis aguda tratamiento", "vesícula biliar inflamada cirujano", "colecistectomía de urgencia CDMX", "dolor de vesícula comer grasas"]
    }
  },
  {
    id: "dh-dis-009",
    slug: "hernia-inguinal",
    name: "Hernia Inguinal",
    technicalName: "Hernia Inguinal Directa e Indirecta",
    description: "La hernia inguinal es la protrusión de una porción de tejido (como grasa intraabdominal o un segmento de intestino) a través de una zona de debilidad o desgarro en los músculos del canal inguinal. Es un defecto muy frecuente debido a la predisposición anatómica masculina. Causa molestias, dolor persistente o pesadez en la ingle, y requiere corrección quirúrgica (hernioplastia con colocación de malla) para prevenir complicaciones graves de estrangulamiento intestinal.",
    symptoms: [
      "Abultamiento visible o palpable en el área de la ingle que incrementa al estar de pie, toser o pujar",
      "Dolor, pesadez o molestia persistente en la ingle",
      "Dolor agudo irradiado hacia el escroto en pacientes varones",
      "Sensación de ardor o debilidad en el sitio de la hernia"
    ],
    causes: [
      "Debilidad de nacimiento (congénita) en los tejidos del canal inguinal",
      "Esfuerzo repetitivo por levantar objetos pesados, tos crónica o estreñimiento",
      "Aumento constante de la presión dentro del abdomen por sobrepeso"
    ],
    riskFactors: [
      "Ser del género masculino (tienen hasta 8 veces más probabilidad de padecerla)",
      "Antecedentes de hernias inguinales en familiares de primer grado",
      "Tabaquismo crónico (altera la síntesis de colágeno y debilita los tejidos)",
      "Tos o estreñimiento crónicos"
    ],
    mexicoStats: "La hernia inguinal representa la hernia de pared abdominal más diagnosticada y operada en hombres en México, siendo la ingle derecha la localización más común.",
    complications: [
      "Incarcelación (la hernia queda atrapada afuera del abdomen y no puede regresarse con maniobras manuales)",
      "Estrangulación (el flujo de sangre al intestino atrapado se suspende, causando gangrena intestinal y requiriendo cirugía de urgencia)"
    ],
    treatments: [
      "Hernioplastia inguinal laparoscópica con malla (técnica TAPP / TEP de mínima invasión)",
      "Hernioplastia abierta con colocación de malla (técnica de Lichtenstein)"
    ],
    faqs: [
      {
        question: "¿Las hernias inguinales siempre deben operarse?",
        answer: "Sí, debido a que el canal inguinal es un espacio estrecho y rígido, existe un riesgo constante de que una porción de intestino quede atrapada (encarcelada) y pierda su circulación sanguínea (estrangulación). Por ello, se recomienda programar la cirugía al momento del diagnóstico."
      },
      {
        question: "¿Es mejor la cirugía abierta o la laparoscópica para hernia inguinal?",
        answer: "La cirugía laparoscópica ofrece ventajas significativas: cicatrices de pocos milímetros, menor dolor postoperatorio, menor riesgo de dolor crónico inguinal y una recuperación mucho más rápida. Es ideal sobre todo en hernias de ambos lados (bilaterales) o recurrentes."
      },
      {
        question: "¿Se puede realizar ejercicio después de una cirugía de hernia inguinal?",
        answer: "Se puede caminar y realizar actividades ligeras desde el primer día. Sin embargo, para realizar actividades de carga, ejercicio de gimnasio, correr o cualquier esfuerzo abdominal importante, se deben esperar entre 6 y 8 semanas para asegurar la correcta integración de la malla."
      }
    ],
    relatedServices: ["hernioplastia-abdominal-laparoscopica"],
    relatedSymptoms: ["abultamiento-abdomen-ingle", "dolor-abdominal-agudo"],
    image: "/enfermedades/hernia-inguinal.png",
    seo: {
      title: "Cirugía de Hernia Inguinal CDMX | Dr. David Ernesto Hernández",
      description: "Reparación de hernia inguinal con malla por laparoscopia. Menor dolor y rápida recuperación. Consulta en la Roma Norte y Polanco.",
      keywords: ["hernia inguinal cirugía precio", "hernioplastia inguinal laparoscópica CDMX", "bolita en la ingle dolorosa", "cirujano especialista en hernias"]
    }
  },
  {
    id: "dh-dis-010",
    slug: "diastasis-de-rectos",
    name: "Diástasis de Músculos Rectos",
    technicalName: "Diástasis de los Músculos Rectos Abdominales",
    description: "La diástasis de rectos es la separación de los músculos rectos del abdomen (los músculos del 'six-pack') debido al estiramiento y adelgazamiento de la línea alba (el tejido conectivo que los mantiene unidos en el centro). Se observa con frecuencia tras el embarazo o pérdidas masivas de peso. Aunque técnicamente no es una hernia porque no hay un orificio con riesgo de estrangulación, debilita la estabilidad abdominal, produce dolor de espalda crónico y frecuentemente coexiste con hernias umbilicales o epigástricas.",
    symptoms: [
      "Protrusión o cresta vertical en la línea media del abdomen al incorporarse o hacer esfuerzo",
      "Flacidez excesiva y apariencia de 'abdomen de embarazada' que no mejora con ejercicio",
      "Dolor crónico en la zona lumbar (lumbalgia) debido a la debilidad del soporte del core",
      "Inestabilidad postural y debilidad general de la pared abdominal"
    ],
    causes: [
      "Embarazo (el estiramiento extremo del útero sobre la pared muscular)",
      "Pérdida o ganancia masiva y rápida de peso",
      "Predisposición genética o debilidad estructural del tejido conectivo"
    ],
    riskFactors: [
      "Haber tenido múltiples embarazos o gestaciones de bebés grandes (macrosomía)",
      "Embarazos con poca diferencia de tiempo entre ellos",
      "Realizar ejercicios abdominales tradicionales con técnica incorrecta o cargas excesivas"
    ],
    mexicoStats: "La diástasis de rectos afecta a un gran número de mujeres postparto en México, siendo frecuentemente confundida con obesidad abdominal y asociada a hernias umbilicales no resueltas.",
    complications: [
      "Desarrollo o recidiva de hernias umbilicales y epigástricas complejas",
      "Dolor de espalda crónico severo debido al desbalance muscular",
      "Disfunción del suelo pélvico e incontinencia urinaria de esfuerzo"
    ],
    treatments: [
      "Reconstrucción laparoscópica de la pared abdominal (plicatura de rectos por mínima invasión)",
      "Fisioterapia del suelo pélvico y ejercicios hipopresivos para diástasis leves"
    ],
    faqs: [
      {
        question: "¿La diástasis de rectos se puede quitar con ejercicio?",
        answer: "La diástasis leve (menos de 2 cm) puede mejorar y estabilizarse con fisioterapia especializada y ejercicios hipopresivos. Sin embargo, cuando la separación es mayor o cursa con dolor lumbar y hernia asociada, el ejercicio ordinario no la corrige y los abdominales tradicionales pueden empeorarla. La plicatura quirúrgica es el tratamiento reconstructivo adecuado."
      },
      {
        question: "¿Cómo se corrige quirúrgicamente la diástasis de rectos?",
        answer: "Actualmente se realiza de forma mínimamente invasiva por laparoscopia. El procedimiento consiste en suturar y aproximar los músculos rectos a la línea media (plicatura) y colocar una malla ultraligera de refuerzo detrás de los músculos para dar soporte a la pared abdominal, resolviendo al mismo tiempo cualquier hernia umbilical."
      },
      {
        question: "¿Cuándo es el momento ideal para operarse de diástasis después del embarazo?",
        answer: "Se recomienda esperar al menos 6 meses después del parto y que se haya estabilizado el peso corporal. Además, es ideal realizar la cirugía cuando la mujer no tenga planes de futuros embarazos, ya que una nueva gestación volvería a estirar y separar las fibras musculares."
      }
    ],
    relatedServices: ["hernioplastia-abdominal-laparoscopica"],
    relatedSymptoms: ["abultamiento-abdomen-ingle", "dificultad-bajar-peso"],
    image: "/enfermedades/diastasis-rectos.png",
    seo: {
      title: "Cirugía de Diástasis de Rectos en CDMX | Dr. David Hernández",
      description: "Reconstrucción laparoscópica de la pared abdominal por diástasis de rectos y hernia umbilical en la CDMX. Recupere la firmeza de su abdomen.",
      keywords: ["diástasis de rectos tratamiento CDMX", "plicatura de músculos rectos precio", "abdomen abultado postparto cirugía", "reparación de hernia umbilical y diástasis"]
    }
  }
];
