# FCMA Editor — Setup Guide

## Archivos del repo

```
cftg2699-oss/fcma-editor/
├── index.html      ← App principal
├── fcma_es.md      ← Assessment en español
├── fcma_en.md      ← Assessment en inglés
├── fcma_pt.md      ← Assessment en portugués (pendiente traducir descriptores)
├── Code.gs         ← Google Apps Script (NO va en el repo, va en Google)
└── README.md       ← Este archivo
```

## Paso 1: Crear el Google Sheet + Apps Script

1. Ve a [Google Sheets](https://sheets.google.com) → Crear nueva hoja de cálculo
2. Nómbrala **"FCMA Assessments"**
3. Menú → **Extensiones → Apps Script**
4. Borra el contenido de `Code.gs` y pega el contenido del archivo `Code.gs` incluido
5. Guarda (Ctrl+S)
6. Click **Deploy → New deployment**
7. Tipo: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** → Copia la URL que te da (empieza con `https://script.google.com/macros/s/...`)

## Paso 2: Conectar el index.html con Google Sheets

1. Abre `index.html`
2. Busca la línea:
   ```
   const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Reemplaza `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` con la URL que copiaste
4. Guarda y sube al repo

## Paso 3: Subir al repo

```bash
git add index.html fcma_es.md fcma_en.md
git commit -m "feat: i18n + registro + Google Sheets backend"
git push
```

## URLs de acceso

| Modo | URL | Descripción |
|:---|:---|:---|
| **Editor** | `https://cftg2699-oss.github.io/fcma-editor/` | Para ti — editar, importar/exportar |
| **Cliente** | `https://cftg2699-oss.github.io/fcma-editor/?mode=assess` | Para clientes — registro + NDA + assessment |

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
- ES → `fcma_es.md`
- EN → `fcma_en.md`
- PT → `fcma_pt.md`

Si el archivo no existe, cae al contenido embebido (español).
