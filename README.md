# FCMA Editor — Setup Guide

## Archivos del repo

```
cftg2699-oss/fcma-editor/
├── index.html            ← App principal (assessment, resultados, dashboard)
├── fcma_report.html      ← Reporte ejecutivo (se abre con "Results"): incluye pestaña ✨ AI Executive Report y botones ⬇ PDF / ⬇ PowerPoint
├── fcma_erm.html         ← Consolidado ERM (assessment padre): junta los assessments hijos de una institución (se abre desde History → "ERM roll-up")
├── samples/              ← Assessment ya completado de ejemplo (PDF y CSV) para probar la importación (ingeniería inversa)
├── fcma-config.js        ← Configuración compartida: AI_URL (URL del servicio de IA)
├── fcma-bridge.js        ← Puente que da a la IA/exportación acceso al assessment desde fcma_report.html
├── fcma-ai.js            ← Relleno con IA, reporte con IA y modelo de datos del reporte
├── fcma-sim.js           ← Modo demo: IA simulada (sin API key), se usa solo si AI_URL está vacío
├── fcma-export.js        ← Descarga PDF (jsPDF) y PowerPoint (PptxGenJS)
├── fcma_es.md            ← Assessment en español (copia de FCMA_Assessment_Final_v2.md)
├── fcma_en.md            ← Assessment en inglés
├── apps-script/AI.gs     ← Servicio de IA (Google Apps Script, proyecto aparte)
├── vendor/               ← jsPDF, PptxGenJS y pdf.js (sin depender de un CDN)
├── tests/                ← Pruebas del servicio de IA (npm test)
└── README.md             ← Este archivo
```

El Apps Script de Google Sheets (registro y respuestas) **no** está en el repo; vive en Google.
`fcma_pt.md` no existe todavía: en portugués la app usa los descriptores en español.

## Paso 1: Google Sheet + Apps Script (registro y respuestas)

1. Ve a [Google Sheets](https://sheets.google.com) → Crear nueva hoja de cálculo
2. Nómbrala **"FCMA Assessments"**
3. Menú → **Extensiones → Apps Script**
4. Pega el contenido de `Code.gs` (el que ya usas) y guarda
5. **Deploy → New deployment → Web app** · Execute as: **Me** · Who has access: **Anyone**
6. Copia la URL (`https://script.google.com/macros/s/.../exec`)

## Paso 2: Conectar el index.html con Google Sheets

En `index.html` reemplaza la constante `SHEET_URL` con la URL del paso anterior.

## Paso 3: Servicio de IA (relleno y reporte con IA)

> **Modo demo (sin API key):** si `AI_URL` está vacío (`const AI_URL='';`), la app usa `fcma-sim.js`, un motor
> **simulado** que corre en el navegador. El relleno propone niveles por coincidencia de palabras entre el
> contexto y los descriptores (solo donde hay evidencia; es una aproximación, no una IA real). Si el contexto viene
> dividido en secciones por pilar ("P4 — DETECTION…"), usa solo la sección del pilar que evalúa, y el reporte se
> redacta con plantillas a partir de los cálculos reales. Todas las cifras, PDF y PPT son reales. Al pegar la URL
> del servicio real en `AI_URL`, la app pasa a Claude sin cambiar nada más.

La IA es real: la web llama a un Apps Script **separado** que guarda la API key y llama a Claude.
La key nunca está en el repo ni en el navegador.

1. En [script.google.com](https://script.google.com) → **Nuevo proyecto** → nómbralo `FCMA AI`.
2. Pega el contenido de `apps-script/AI.gs` en `Code.gs` y guarda.
3. **Project Settings → Script properties → Add script property**:

   | Propiedad | Valor | Obligatoria |
   |:---|:---|:---:|
   | `ANTHROPIC_API_KEY` | tu key de [console.anthropic.com](https://console.anthropic.com) | Sí |
   | `AI_MODEL` | por defecto `claude-sonnet-5-5` | No |
   | `AI_DAILY_CAP` | tope de llamadas por día, todos los usuarios (def. 500) | No |
   | `AI_HOURLY_PER_KEY` | tope por hora por código de acceso (def. 40) | No |
   | `AI_TEMPERATURE` | p. ej. `0.2` para respuestas más estables; si no se define, no se envía | No |

4. **Deploy → New deployment → Web app** · Execute as: **Me** · Who has access: **Anyone**.
   Autoriza los permisos cuando los pida (necesita `UrlFetchApp`).
5. Copia la URL `/exec` y pégala en `fcma-config.js` (lo leen `index.html` y `fcma_report.html`):
   ```js
   const AI_URL='https://script.google.com/macros/s/.../exec';
   ```
6. Prueba el servicio antes de la demo:
   ```bash
   curl -sL "$AI_URL"
   # {"ok":true,"service":"fcma-ai","configured":true}

   curl -sL -X POST "$AI_URL" -H 'Content-Type: text/plain' -d '{
     "task":"fill","lang":"es",
     "context":"Banco mediano con estrategia de fraude documentada, aprobada por el directorio y revisada cada año.",
     "components":[{"id":"0.1.1","name":"Existencia de estrategia documentada",
       "levels":["No existe","Informal","Formal","Aprobada y revisada","Dinámica"]}]}'
   ```

**Qué hace y qué no hace el servicio**
- Solo acepta dos tareas (`fill` y `report`) y construye los prompts en el servidor a partir de datos
  estructurados. No es un proxy genérico a Claude.
- Topes de uso por código de acceso/hora y por día para acotar el costo si alguien abusa del endpoint.
- Cada llamada debe terminar en menos de 60 s (límite de `UrlFetchApp`); por eso el relleno se hace por
  pilar, en bloques de 12 componentes, 3 en paralelo.
- Los códigos de acceso no se validan contra el Sheet: solo identifican quién consume el cupo.

## Funcionalidades nuevas

**Relleno con IA** (botón *✨ Rellenar con IA* en el selector de pilares y en cada pregunta)
- El usuario describe la institución y/o adjunta PDF, TXT, MD o CSV (el PDF se lee en el navegador).
- La IA propone un nivel por componente con justificación, confianza (alta/media/baja) y base
  (declarado / inferido / sin evidencia). Si no hay evidencia no propone nivel: no adivina.
- El usuario revisa, edita y aplica. Por defecto solo se aplican las de confianza alta y media.
- Las respuestas aplicadas quedan marcadas como "sugeridas por IA" y se cuentan en el reporte.

**Reporte con IA** (pestaña *Reporte IA* en Resultados)
- Resumen ejecutivo, lectura por pilar, fortalezas, hallazgos críticos y hoja de ruta a 12 meses.
- Todas las cifras salen del cálculo del assessment; la IA solo redacta. El servidor descarta
  componentes o pilares que la IA invente.

**Descarga PDF y PowerPoint** (botones en Resultados)
- Se generan en el navegador. El PPT usa gráficos nativos (radar, barras, dona) editables en PowerPoint.
- Si la IA falla, se ofrece exportar solo con los datos calculados.

### Cálculos

- Score de pilar = promedio de sus componentes respondidos. Score global = promedio de los pilares evaluados.
- Bandas: Inexistente < 1,5 · Reactivo 1,5–2,49 · Definido 2,5–3,49 · Gestionado 3,5–4,24 · Optimizado ≥ 4,25.
- Exposición residual = (5 − score) / 4, en %.
- Brecha crítica = componente en nivel 1 o 2. Meta de referencia: 4,0.

## Pruebas

```bash
node --test             # (o: npm test) servicio de IA: prompts, validaciones, límites, errores
```

## Paso 4: Subir al repo

```bash
git add -A && git commit -m "feat: ..." && git push
```

## URLs de acceso

| Modo | URL | Descripción |
|:---|:---|:---|
| **Editor** | `https://cftg2699-oss.github.io/fcma-editor/` | Para ti — editar, importar/exportar |
| **Cliente** | `https://cftg2699-oss.github.io/fcma-editor/?code=CODIGO` | Para clientes — registro + NDA + assessment |

## Qué llega al Google Sheet

### Hoja "Registrations"
Cada vez que un cliente completa el formulario de registro:
- Timestamp, Company, Contact, Email, Role, Country, Sector, Language, NDA Accepted

### Hoja "Answers"
Cada vez que un cliente ve los resultados o exporta:
- Timestamp, Company, Contact, Email, Country, Sector, Language, Mode
- Total Questions, Answered, Global Score
- Answers JSON (todas las respuestas), Pillar Scores

## Cambiar idioma del contenido

El sistema carga automáticamente el `.md` del idioma seleccionado:
- ES → `fcma_es.md` (si falta, `fcma_en.md`)   
- EN → `fcma_en.md`
- PT → `fcma_pt.md` (si falta, `fcma_es.md`, luego `fcma_en.md`)
