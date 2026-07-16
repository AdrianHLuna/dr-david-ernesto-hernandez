# 🖼️ Guía de Prompts de Imágenes — Dr. David Ernesto Hernández Torres | Cirugía General y Bariátrica

Este documento contiene las especificaciones y prompts de Midjourney para generar los recursos visuales del sitio web. El estilo es fotorrealista clínico, de alta gama editorial, limpio y libre de contenido gráfico desagradable (sin sangre o heridas expuestas).

---

## 🎨 Paleta de Colores del Proyecto
* **Color Primario (Pizarra Oscura):** `#0f172a` (Slate 900)
* **Color de Acento (Esmeralda Clínico):** `#059669` (Emerald 600)
* **Color Secundario (Verde Menta Suave):** `#10b981` (Emerald 500)
* **Fondos y Neutros:** `#f8fafc` (Slate 50), Studio White.

---

## 1. Rol y Tono del Generador de Imágenes

```
Rol: Experto en generación de imágenes para marketing médico premium.
Tono: Empático, esperanzador y de alta precisión clínica.
Estilo: Fotorrealismo puro.

PROHIBIDO: Estética futurista, ciencia ficción, hologramas, neones o
interfaces digitales tipo HUD. Las anatomías deben parecer ilustraciones
médicas de libros de texto de ultra-lujo o fotografías clínicas reales.

Limpieza Digital: Cero texto, letras, firmas o logotipos.
Iluminación: Luz blanca clínica brillante o luz natural suave de estudio.
Sin efectos de "brillo digital".
Restricción: Sin sangre ni contenido gráfico alarmante. Todo higienizado y seguro.
```

---

## 9. Prompt de Coherencia Visual (Sesión Inicial)

Al iniciar una sesión de generación en cualquier herramienta, usar siempre este prompt de contexto antes de los prompts individuales para definir el rol y la coherencia visual:

```
All images in this set must follow a consistent luxury medical photorealism style.
No sci-fi, no holograms, no digital UI. Clean white or neutral clinical environments.
Natural tissue and instrument colors. Slate 900 (#0f172a) and Emerald 600 (#059669) as accent.
8k resolution, unreal engine 5 photorealism, medical textbook quality.
```

---

## 📐 Estructura Base de Prompt (Aplicar a todos)

Todo prompt individual en este documento sigue esta estructura exacta:

```
[Descripción Técnica de la Imagen]
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI,
hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

## 🦠 Enfermedades (`/public/images/diseases/`)

### `obesidad.jpg`
**Condición:** Obesidad Grados I, II y III
**Prompt:**
```
A professional and respectful clinical full-body photograph of a person with obesity standing in a bright modern medical consultation room, captured with empathy and high dignity, realistic clinical setting.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `reganancia.jpg`
**Condición:** Reganancia de Peso Post-Bariátrica
**Prompt:**
```
Minimalist 3D anatomical render of the human stomach silhouette showing a clean sleeve gastrectomy gastric capacity reduction, high precision medical textbook model.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `reflujo.jpg`
**Condición:** Reflujo Gastroesofágico y Hernia Hiatal
**Prompt:**
```
Clear 3D anatomical model showing a clean cross-section of the human lower esophageal sphincter (LES) and stomach valve under bright studio lighting, educational style.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `vesicula.jpg`
**Condición:** Piedras en la Vesícula (Colelitiasis)
**Prompt:**
```
Medical 3D cross-section of a human gallbladder showing small smooth cholesterol gallstones inside, set against a clean slate-grey background, high-end CGI.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `hernia.jpg`
**Condición:** Hernias de Pared Abdominal
**Prompt:**
```
Clear 3D anatomical cross-section render of a human abdominal muscle wall showing a hernia bulge where tissue gently protrudes through a natural gap in the muscle fibers, educational textbook style.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgical mesh, medical mesh, patch, surgical tools, surgical clips, sutures, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `apendicitis.jpg`
**Condición:** Apendicitis Aguda
**Prompt:**
```
Aesthetic 3D anatomical model of the human cecum and the appendix showing congestion, textbook medical illustration style on a dark slate background.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `tiroides.jpg`
**Condición:** Nódulos Tiroideos
**Prompt:**
```
Clear 3D anatomical representation of the human thyroid gland in the lower neck showing a small nodule on the right lobe, high-precision clinical rendering.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `colecistitis.jpg`
**Condición:** Colecistitis Aguda y Crónica
**Prompt:**
```
Aesthetic 3D medical cross-section render of a human gallbladder with highly thickened, inflamed walls, resting on a clean slate background.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgical tools, surgical mesh, hands, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `hernia-inguinal.jpg`
**Condición:** Hernia Inguinal
**Prompt:**
```
Clear 3D anatomical cross-section render of the human male inguinal region showing a tissue protrusion bulged through the inguinal canal fibers, medical textbook style.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgical mesh, medical mesh, patch, surgical tools, sutures, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `diastasis-rectos.jpg`
**Condición:** Diástasis de Músculos Rectos
**Prompt:**
```
Clear 3D anatomical front-view render of the human abdominal muscle wall showing a vertical gap separation between the left and right rectus abdominis muscles along the linea alba, medical textbook model.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgical mesh, medical mesh, patch, surgical tools, sutures, incision, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

## 🛠️ Servicios (`/public/images/services/`)

### `consulta.jpg`
**Servicio:** Consulta Especializada en Cirugía General y Bariátrica
**Prompt:**
```
A premium medical stethoscope lying next to a digital tablet on a clean, modern white medical desk in a bright, luxury consulting room, soft shadows.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `manga-gastrica.jpg`
**Servicio:** Cirugía Bariátrica (Manga Gástrica y Bypass Gástrico)
**Prompt:**
```
A close-up photograph of a professional medical surgical monitor screen inside a dark operating room. The screen displays a clear, clean, and highly detailed laparoscopic view of a human stomach undergoing a sleeve gastrectomy (manga gástrica capacity reduction). A laparoscopic surgical grasper is shown next to the neatly shaped tubular stomach, with clean anatomical structures visible. Spotless, clean presentation, no blood, no open wounds, high-resolution clinical feed.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgeons, people standing, doctors, blood, red, open wounds, flesh, graphic, cuts, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `vesicula.jpg`
**Servicio:** Cirugía de Vesícula por Laparoscopia
**Prompt:**
```
A close-up photograph of a professional medical surgical monitor screen inside a dark operating room. The screen displays a clear, clean, and highly detailed laparoscopic view of a human gallbladder (vesícula biliar) and the cystic duct. Fine laparoscopic forceps are shown holding the gallbladder gently during the procedure. Spotless clinical feed, no blood, no open wounds.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgeons, people standing, doctors, blood, red, open wounds, flesh, graphic, cuts, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `hernias.jpg`
**Servicio:** Cirugía de Hernias de Pared Abdominal con Malla
**Prompt:**
```
A close-up photograph of a professional medical surgical monitor screen inside a dark operating room. The screen displays a clear, clean, and highly detailed laparoscopic view of the internal abdominal wall hernia defect. A sterile, modern composite surgical mesh is shown neatly placed and secured over the muscle wall defect to reinforce it. Spotless clinical view, no blood, no open wounds.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgeons, people standing, doctors, blood, red, open wounds, flesh, graphic, cuts, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `cirugia-reflujo.jpg`
**Servicio:** Cirugía para Reflujo y Hernia Hiatal por Laparoscopia
**Prompt:**
```
A close-up photograph of a professional medical surgical monitor screen inside a dark operating room. The screen displays a clear, clean, and highly detailed laparoscopic view of the gastroesophageal junction and the diaphragm hiatal repair. A surgical instrument is shown gently placing the fundoplication wrap around the lower esophagus to correct reflux. Spotless clinical feed, no blood, no open wounds.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: surgeons, people standing, doctors, blood, red, open wounds, flesh, graphic, cuts, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

## 🤒 Síntomas (`/public/images/symptoms/`)

### `dificultad-peso.jpg`
**Síntoma:** Dificultad persistente para bajar de peso
**Prompt:**
```
A clean medical tape measure lying on top of a sleek clinical scale plate under soft natural lighting, health and metabolism concept.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `ardor-pecho.jpg`
**Síntoma:** Ardor en el pecho o "agruras"
**Prompt:**
```
Abstract 3D medical illustration representing heartburn or acidity as a warm amber flow moving up a cool slate-blue digestive tract model.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `dolor-costillas.jpg`
**Síntoma:** Dolor debajo de las costillas (Lado derecho)
**Prompt:**
```
Close-up artistic clinical shot of a doctor gently performing palpation on the right upper quadrant of a patient's abdomen in a warm room.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `abultamiento.jpg`
**Síntoma:** Abultamiento o bolita en abdomen o ingle
**Prompt:**
```
Palpation of a small umbilical nodule on an anatomical torso model in a bright medical classroom, clean lighting.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `dolor-agudo.jpg`
**Síntoma:** Dolor abdominal repentino y progresivo
**Prompt:**
```
A patient sitting in a clinical bed holding their abdomen, expressing mild discomfort, warm natural clinic lighting, soft shadows.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `intolerancia-vomito.jpg`
**Síntoma:** Vómitos o reflujo después de cirugía bariátrica
**Prompt:**
```
A clean, half-filled glass of water and a small plate with basic clinical digestive crackers on a white tray, recovery post-op diet concept.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `hambre-frecuente.jpg`
**Síntoma:** Hambre frecuente o falta de saciedad
**Prompt:**
```
A professional product shot of a small, healthy portion of clinical nutrition food in a small ceramic bowl next to a glass of water on a clean white desk, representing gastric portion control and dietary discipline.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `cansancio.jpg`
**Síntoma:** Cansancio o falta de aire al hacer esfuerzo
**Prompt:**
```
A clean, professional medical device pulse oximeter and a blood pressure monitor resting on a white table in a bright clinical consultation office, representing diagnostic health tracking.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `dificultad-tragar.jpg`
**Síntoma:** Dificultad para pasar los alimentos (Disfagia)
**Prompt:**
```
An artistic and clear 3D clinical illustration representing swallowing transition as a cool blue liquid flow gently passing down a stylized human neck and throat model.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

### `sangrado-digestivo.jpg`
**Síntoma:** Evacuaciones o vómito con sangre
**Prompt:**
```
A sleek, modern glass vial containing a clear blue liquid marker resting next to an medical file folder on a bright white clinical desk, representing pathology diagnostic analysis, clean and sterile presentation.
Lighting: Clean, bright medical studio lighting, soft shadows.
Color Palette: Slate 900 (#0f172a), Emerald 600 (#059669), Emerald 500 (#10b981), Studio White, Anthracite (#333333).
Composition: Symmetrical scientific view or focused clinical macro.
Mood: Informative, clear, professional.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style
--ar 16:9 --v 6.0
Negative Prompt: blood, red, wounds, graphic, alarming, cuts, hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature.
```

---

## 📋 Resumen de Archivos

| Categoría | Archivo | Nombre de la entidad |
|---|---|---|
| Enfermedades | `obesidad.jpg` | Obesidad Grados I, II y III |
| Enfermedades | `reganancia.jpg` | Reganancia de Peso Post-Bariátrica |
| Enfermedades | `reflujo.jpg` | Reflujo Gastroesofágico y Hernia Hiatal |
| Enfermedades | `vesicula.jpg` | Piedras en la Vesícula (Colelitiasis) |
| Enfermedades | `hernia.jpg` | Hernias de Pared Abdominal |
| Enfermedades | `apendicitis.jpg` | Apendicitis Aguda |
| Enfermedades | `tiroides.jpg` | Nódulos Tiroideos |
| Enfermedades | `colecistitis.jpg` | Colecistitis Aguda y Crónica |
| Enfermedades | `hernia-inguinal.jpg` | Hernia Inguinal |
| Enfermedades | `diastasis-rectos.jpg` | Diástasis de Músculos Rectos |
| Servicios | `consulta.jpg` | Consulta Especializada en Cirugía General y Bariátrica |
| Servicios | `manga-gastrica.jpg` | Cirugía Bariátrica (Manga Gástrica y Bypass Gástrico) |
| Servicios | `vesicula.jpg` | Cirugía de Vesícula por Laparoscopia |
| Servicios | `hernias.jpg` | Cirugía de Hernias de Pared Abdominal con Malla |
| Servicios | `cirugia-reflujo.jpg` | Cirugía para Reflujo y Hernia Hiatal por Laparoscopia |
| Síntomas | `dificultad-peso.jpg` | Dificultad persistente para bajar de peso |
| Síntomas | `ardor-pecho.jpg` | Ardor en el pecho o "agruras" |
| Síntomas | `dolor-costillas.jpg` | Dolor debajo de las costillas (Lado derecho) |
| Síntomas | `abultamiento.jpg` | Abultamiento o bolita en abdomen o ingle |
| Síntomas | `dolor-agudo.jpg` | Dolor abdominal repentino y progresivo |
| Síntomas | `intolerancia-vomito.jpg` | Vómitos o reflujo después de cirugía bariátrica |
| Síntomas | `hambre-frecuente.jpg` | Hambre frecuente o falta de saciedad |
| Síntomas | `cansancio.jpg` | Cansancio o falta de aire al hacer esfuerzo |
| Síntomas | `dificultad-tragar.jpg` | Dificultad para pasar los alimentos (Disfagia) |
| Síntomas | `sangrado-digestivo.jpg` | Evacuaciones o vómito con sangre |

