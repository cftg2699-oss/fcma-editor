# FINANCIAL CRIME MATURITY ASSESSMENT

## MÓDULO A: FRAUD RISK MANAGEMENT PROGRAM

### Estructura Completa del Assessment con Descriptores Específicos por Componente

**DOCUMENTO CONFIDENCIAL — USO INTERNO**

Mayo 2026 — v2.0

---

## Resumen Cuantitativo

| Elemento | Valor |
|:---|:---|
| **Pilares** | 9 (P0–P8) |
| **Sub-dimensiones** | 49 |
| **Componentes evaluables (Deep Dive)** | 175 |
| **Componentes del Screening Core** | 61 |
| **Descriptores por componente** | 5 (específicos y únicos por componente) |
| **Escala de madurez** | 1–5 con verbos, evidencia y criterios objetivos |
| **Total de descriptores únicos** | 875 |
| **Módulos futuros** | AML/BSA (Módulo B) + Model Risk Management (Módulo C) |
| **Frameworks de referencia** | COSO/ACFE 2023, McKinsey, Gartner 5-Layer, OCC 2011-12 / SR 11-7 → SR 26-2, FFIEC BSA/AML, BACEN Res. 4.557 |

---

## Cómo Leer Este Documento

### Identificación del Screening Core

Cada componente que forma parte del **Screening Core (60 preguntas)** está marcado con:

> **🔷 CORE** — al inicio del título del componente

Esto permite dos modos de ejecución del assessment:

| Modo | Componentes | Duración | Resultado |
|:---|:---|:---|:---|
| **Screening** | 61 componentes marcados 🔷 CORE | 1–2 sesiones (2–4 horas) | Radar chart por pilar, top-15 brechas, recomendación de alcance |
| **Deep Dive** | Los 175 componentes completos | 4–6 sesiones por pilar | Assessment granular con action plan priorizado por sub-dimensión |

### Descriptores de Nivel

Cada componente tiene **5 afirmaciones únicas y específicas** que describen exactamente qué debe existir, cómo debe funcionar, y qué evidencia debe estar presente para calificar en ese nivel.

**Regla de scoring:** Si la institución cumple parcialmente con un nivel, se califica en el nivel inmediatamente inferior que se cumple completamente. No se asignan medios puntos.

**Aggregación:** Componente → Sub-dimensión (promedio ponderado) → Pilar (promedio ponderado) → Score Total.

**Gap Analysis:** Score actual vs. score target (definido por el banco o baseline mínimo de 3.0) genera el action plan.

**Lens económico transversal:** ¿ROI neto positivo? ¿Fricción al cliente? ¿Revenue perdido vs. fraude evitado?

---

## Frameworks de Referencia

| Framework / Fuente | Uso en el Assessment |
|:---|:---|
| **COSO/ACFE Fraud Risk Management Guide (2nd Ed., 2023)** | 5 principios de gestión de riesgo de fraude — columna vertebral de P1-P5 y P7 |
| **McKinsey — Four Key Capabilities for Fraud Management (2022)** | Capacidades de detección, prevención, investigación e integración enterprise |
| **Gartner — 5-Layer Fraud Detection Model / Capability Model** | Capas de detección y arquitectura tecnológica (P4, P6) |
| **OCC 2011-12 / SR 11-7 → SR 26-2 — Model Risk Management** | Ciclo de vida de modelos ML, validación independiente (P6, futuro Módulo C) |
| **FFIEC BSA/AML Examination Manual (2020)** | 4 pilares de compliance AML (futuro Módulo B) |
| **McKinsey — Financial Crime & Fraud in the Age of Cybersecurity (2019)** | Modelos de convergencia Fraude-Cyber-AML (P8) |
| **BACEN Res. 4.557** | Requisitos de gestión de riesgo para instituciones financieras (Brasil) |

---

## Índice del Screening Core (60 Preguntas)

Las siguientes preguntas constituyen el Screening Core — suficientes para obtener un diagnóstico rápido del programa completo:

**P0: Estrategia de Fraude** (5 preguntas)

1. **0.1.1** — Existencia de estrategia documentada
2. **0.1.2** — Articulación de objetivos estratégicos
3. **0.2.1** — Risk acceptance explícito
4. **0.2.2** — Trade-off seguridad vs. fricción documentado
5. **0.3.1** — Vinculación fraude-estrategia comercial

**P1: Gobernanza, Cultura y Marco Organizacional** (9 preguntas)

6. **1.1.1** — Existencia y alcance de la política
7. **1.1.2** — Apetito de riesgo cuantificado
8. **1.2.1** — Ubicación en el organigrama
9. **1.2.3** — Comité de Fraude
10. **1.2.5** — Mecanismo de escalamiento al Board
11. **1.2.7** — Protocolos de escalamiento (interno vs. externo)
12. **1.3.1** — Frecuencia y profundidad del reporte al Board
13. **1.4.2** — Programa de concientización para empleados
14. **1.5.1** — Mapeo de requisitos regulatorios

**P2: Evaluación de Riesgo de Fraude e Inteligencia de Amenazas** (7 preguntas)

15. **2.1.1** — Inventario de esquemas de fraude
16. **2.1.2** — Proceso de identificación de amenazas emergentes
17. **2.2.1** — Metodología formal documentada
18. **2.3.1** — Proceso de evaluación de controles
19. **2.4.1** — Cálculo de riesgo residual
20. **2.5.1** — Función de inteligencia de fraude
21. **2.5.2** — Integración de inteligencia con detección

**P3: Prevención y Actividades de Control (Basado en Journey)** (8 preguntas)

22. **3.1.1** — Mapeo de journeys con puntos de vulnerabilidad
23. **3.1.2** — Cobertura de controles por etapa del journey
24. **3.2.1** — Programa contra robo de identidad
25. **3.2.2** — Detección de identidades sintéticas
26. **3.3.1** — Métodos de autenticación por canal
27. **3.3.3** — Protección contra ATO
28. **3.4.2** — Controles en pagos en tiempo real (PIX/instant)
29. **3.5.1** — Detección de indicadores de coerción

**P4: Detección, Monitoreo y Decisioning** (9 preguntas)

30. **4.1.1** — Cobertura por canales y productos
31. **4.1.2** — Inventario y documentación de reglas
32. **4.1.5** — Desempeño de reglas
33. **4.2.1** — Existencia y alcance de modelos ML
34. **4.2.2** — Validación independiente de modelos
35. **4.2.4** — Monitoreo de performance en producción
36. **4.3.1** — Capacidad real-time
37. **4.4.1** — Proceso de triage
38. **4.5.1** — Visión unificada del cliente

**P5: Investigación, Respuesta y Recuperación** (6 preguntas)

39. **5.1.1** — Herramienta de case management
40. **5.2.1** — Metodología formal documentada
41. **5.3.1** — Proceso de recovery
42. **5.3.2** — Contabilización de pérdidas
43. **5.4.1** — Protocolos de notificación al cliente
44. **5.6.2** — Retroalimentación a detección

**P6: Datos, Analítica y Tecnología** (7 preguntas)

45. **6.1.1** — Calidad de datos de entrada
46. **6.2.1** — Repositorio de datos de fraude
47. **6.3.1** — Inventario de modelos
48. **6.3.4** — Monitoreo continuo de modelos en producción
49. **6.4.1** — Inventario de herramientas
50. **6.5.1** — Capacidad de escalar
51. **6.5.2** — Disponibilidad y disaster recovery

**P7: Gestión de Desempeño, Reporte y Mejora Continua** (5 preguntas)

52. **7.1.1** — Set de métricas definidas
53. **7.1.2** — Traducción del riesgo en dinero
54. **7.2.1** — Frecuencia y formato de reporting
55. **7.3.1** — Alcance de auditoría interna
56. **7.4.1** — Benchmark por peer group

**P8: Integración Cross-Funcional e Inteligencia** (5 preguntas)

57. **8.1.1** — Modelo operativo actual
58. **8.2.1** — Compartición de alertas y datos
59. **8.3.1** — Marco legal para acción de fraude
60. **8.4.1** — Fraud by design en desarrollo de productos
61. **8.5.1** — Participación en consorcios

---

# P0: Estrategia de Fraude

*Capa estratégica que evalúa si el banco tiene una visión articulada de cómo competir contra el fraude, dónde aceptar pérdidas y cómo equilibrar seguridad con experiencia de cliente.*

**3 sub-dimensiones · 9 componentes · 5 en Screening Core**

## 0.1 — Visión y Estrategia de Fraude

### 🔷 CORE · 0.1.1 · Existencia de estrategia documentada

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe ningún documento que articule la estrategia de fraude del banco. Las decisiones se toman caso a caso sin marco estratégico. |
| **2** | Existe un documento informal o presentación interna que menciona objetivos de fraude, pero no está aprobado por la alta dirección ni tiene vigencia definida. |
| **3** | Existe un documento formal de estrategia de fraude aprobado por un comité ejecutivo, con objetivos medibles y un horizonte temporal definido (1–3 años). |
| **4** | La estrategia está aprobada por el Board, se revisa al menos anualmente, incluye metas cuantitativas (bps, USD), y tiene métricas de seguimiento que se reportan trimestralmente. |
| **5** | La estrategia se actualiza ante cada cambio regulatorio, lanzamiento de producto o evento significativo. Incluye escenarios prospectivos (threat modeling a 3–5 años) y está integrada con la estrategia de negocio del banco. |

### 🔷 CORE · 0.1.2 · Articulación de objetivos estratégicos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay objetivos de fraude articulados. El área reacciona a lo que ocurre sin dirección definida. |
| **2** | Los objetivos existen implícitamente ('reducir fraude') pero no están documentados, no son medibles, y no distinguen entre reducir pérdidas, optimizar UX o cumplir regulación. |
| **3** | Los objetivos están documentados y son medibles (ej: 'reducir fraud loss rate a X bps en tarjetas para diciembre'). Cubren al menos dos dimensiones: pérdidas y regulación. |
| **4** | Los objetivos cubren las tres dimensiones (pérdidas, experiencia de cliente, regulación), tienen owners asignados, y se miden trimestralmente con datos reales. |
| **5** | Los objetivos se descomponen por producto, canal y segmento. Se usa un balanced scorecard que incluye trade-offs explícitos entre seguridad, experiencia y costo. Se ajustan dinámicamente basándose en threat intelligence. |

### 0.1.3 · Horizonte temporal de la estrategia

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un plan de fraude con horizonte temporal. Se opera día a día. |
| **2** | Existe un plan de acción anual de fraude, pero es una lista de proyectos sin secuencia ni dependencias, y no se conecta con la estrategia del banco. |
| **3** | Existe un plan a 1–2 años con fases, hitos y presupuesto estimado. Se presenta formalmente a management. |
| **4** | Existe un plan a 3 años con fases, hitos, presupuesto aprobado, KPIs por fase, y revisiones semestrales documentadas con ajustes. |
| **5** | Existe un plan a 3–5 años con escenarios (base, optimista, adverso), vinculado al plan estratégico del banco. Incluye horizon scanning de amenazas emergentes y se actualiza ante cada nuevo vector de ataque identificado. |

## 0.2 — Decisiones Estratégicas de Riesgo

### 🔷 CORE · 0.2.1 · Risk acceptance explícito

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe ninguna definición de qué fraude el banco acepta. Toda pérdida se trata como falla del programa. |
| **2** | Informalmente se reconoce que algún fraude es inevitable, pero no hay documentación de umbrales de aceptación por producto o canal. |
| **3** | Existe un documento de risk acceptance aprobado por un comité, con umbrales de pérdida aceptable por producto (ej: 'hasta X bps en tarjetas de crédito'). |
| **4** | El risk acceptance está definido por producto, canal y segmento, aprobado por el Board, revisado anualmente, y se reporta la desviación vs. umbrales cada trimestre. |
| **5** | El risk acceptance se calibra dinámicamente usando datos de pérdida real, benchmark de industria, y análisis de costo-beneficio. Se ejecutan simulaciones de escenarios para validar los umbrales. |

### 🔷 CORE · 0.2.2 · Trade-off seguridad vs. fricción documentado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se analiza el trade-off. Los controles se implementan sin considerar impacto en la experiencia del cliente. |
| **2** | Se reconoce informalmente que los controles generan fricción, pero no se mide ni se documenta el impacto. |
| **3** | Existe un análisis documentado del trade-off para al menos los 3 controles principales (ej: tasa de declinaciones legítimas, tasa de abandono en step-up). |
| **4** | Se mide el trade-off por producto/canal con datos reales: false positives, transacciones legítimas bloqueadas, NPS post-fraude, y abandono por control. Se reporta trimestralmente. |
| **5** | Se usa un modelo cuantitativo que optimiza el trade-off en tiempo real: el scoring ajusta umbrales automáticamente para mantener la fricción dentro de límites aprobados sin exceder el apetito de riesgo. |

### 0.2.3 · Criterios de priorización de inversión

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen criterios para priorizar inversión en fraude. Se invierte reactivamente ante incidentes. |
| **2** | La inversión se decide por urgencia o presión regulatoria, sin análisis de ROI ni comparación entre alternativas. |
| **3** | Existe un proceso anual de presupuesto de fraude con criterios de priorización documentados (regulatorio primero, luego por volumen de pérdida). |
| **4** | Se usa un modelo de priorización basado en ROI: para cada iniciativa se estima pérdida evitada, costo de implementación y costo de fricción. |
| **5** | Se usa un motor de priorización multi-criterio (impacto económico × esfuerzo × dependencia tecnológica × tiempo a valor) con datos reales. Se revisa trimestralmente. |

## 0.3 — Alineación con Estrategia de Negocio

### 🔷 CORE · 0.3.1 · Vinculación fraude-estrategia comercial

| Nivel | Descriptor |
|:---:|:---|
| **1** | El área de fraude opera completamente separada de la estrategia comercial. No se le consulta para decisiones de negocio. |
| **2** | El área de fraude se entera de nuevos productos o canales después de su lanzamiento. La integración es reactiva. |
| **3** | El área de fraude participa en comités de producto y recibe información sobre lanzamientos con al menos 30 días de anticipación. |
| **4** | Cada lanzamiento requiere un fraud risk assessment aprobado antes de go-live. Fraude tiene un asiento formal en el comité de producto. |
| **5** | El área de fraude participa desde la fase de diseño (fraud by design). Los KPIs de producto incluyen métricas de fraude. Se mide el costo de fraude por producto nuevo a 90 días. |

### 0.3.2 · Participación en decisiones de lanzamiento

| Nivel | Descriptor |
|:---:|:---|
| **1** | Fraude no participa en decisiones de lanzamiento de productos ni canales digitales. |
| **2** | Fraude es consultado ocasionalmente para lanzamientos de alto perfil, pero su input no es vinculante ni se documenta. |
| **3** | Fraude emite un dictamen de riesgo para cada lanzamiento de producto digital. El dictamen es documentado pero no bloquea el lanzamiento. |
| **4** | El dictamen de fraude es obligatorio y tiene poder de veto o de exigir controles compensatorios antes del lanzamiento. |
| **5** | Fraude co-diseña los controles de cada nuevo producto desde la fase de ideación. Existe un playbook de 'fraud by design' con checklists por tipo de producto/canal. |

### 0.3.3 · Consideración de fraude en crecimiento digital

| Nivel | Descriptor |
|:---:|:---|
| **1** | La estrategia digital del banco no menciona ni considera el riesgo de fraude. |
| **2** | El riesgo de fraude se menciona genéricamente en la estrategia digital, pero no hay acciones específicas ni presupuesto asignado. |
| **3** | La estrategia digital incluye un capítulo de fraude con controles por canal (app, web, PIX, open banking) y presupuesto asignado. |
| **4** | Cada iniciativa digital tiene un perfil de riesgo de fraude con controles diferenciados, métricas de éxito y owner responsable. |
| **5** | Existe un modelo predictivo de riesgo de fraude por canal digital que se actualiza con datos reales. Se usa para calibrar la inversión en controles antes de escalar cada canal. |

---

# P1: Gobernanza, Cultura y Marco Organizacional

*Evalúa la estructura de gobierno, políticas, comités y cultura organizacional que soportan el programa de fraude. Anclado en COSO/ACFE Principio 1.*

**5 sub-dimensiones · 26 componentes · 9 en Screening Core**

## 1.1 — Política de Fraude y Apetito de Riesgo

### 🔷 CORE · 1.1.1 · Existencia y alcance de la política

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe una política de fraude escrita. Las decisiones se basan en criterio individual de cada área. |
| **2** | Existe un documento de política pero cubre solo operaciones (tarjetas/transacciones). No abarca fraude interno, digital, ni originación. |
| **3** | La política es enterprise-wide: cubre fraude externo, interno, digital, originación y terceros. Está aprobada por un comité ejecutivo y tiene fecha de vigencia. |
| **4** | La política incluye definiciones, alcance, roles, apetito de riesgo cuantificado, tolerancias por producto/canal, y un proceso de revisión anual con trigger events. |
| **5** | La política se actualiza dentro de los 30 días de cada cambio regulatorio, nuevo producto o incidente significativo. Existe una matriz de trazabilidad entre la política y los requisitos regulatorios aplicables. |

### 🔷 CORE · 1.1.2 · Apetito de riesgo cuantificado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un apetito de riesgo de fraude definido. No se ha discutido en ningún comité. |
| **2** | El apetito de riesgo se expresa cualitativamente ('bajo', 'moderado') sin cifras. No está aprobado por el Board. |
| **3** | El apetito de riesgo está cuantificado en al menos una métrica (ej: fraud loss rate <X bps) y aprobado por el Board. |
| **4** | El apetito está cuantificado por producto, canal y tipo de fraude. Incluye tolerancias, límites de escalamiento y se reporta la desviación mensualmente. |
| **5** | El apetito se calibra con datos históricos, benchmark de peers, y proyecciones de pérdida. Se somete a stress testing. Se revisa dinámicamente. |

### 1.1.3 · Tolerancias y límites por producto/canal

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen tolerancias diferenciadas. Se aplica un criterio uniforme a todo. |
| **2** | Existen tolerancias informales para algunos productos, pero no están documentadas. |
| **3** | Existen tolerancias documentadas para al menos 3 productos/canales principales. Están aprobadas por el comité de riesgo. |
| **4** | Cada producto/canal tiene tolerancias específicas documentadas, con umbrales de alerta temprana y de escalamiento. Se monitorean mensualmente. |
| **5** | Las tolerancias se ajustan trimestralmente usando análisis de tendencia y benchmark. Se descomponen por segmento de cliente y geografía. |

### 1.1.4 · Proceso de revisión de la política

| Nivel | Descriptor |
|:---:|:---|
| **1** | La política no tiene fecha de revisión. No se ha actualizado en los últimos 2+ años. |
| **2** | La política tiene una fecha de revisión teórica pero se incumple. La última actualización tiene más de 18 meses. |
| **3** | La política se revisa anualmente según calendario. Existe un proceso documentado con checklist de actualización. |
| **4** | Además de la revisión anual, tiene trigger events definidos (nueva regulación, incidente >$X, nuevo canal) que disparan revisión extraordinaria. |
| **5** | La revisión incluye benchmark regulatorio multi-jurisdicción, gap analysis vs. estándares (COSO/ACFE, OCC), y aprobación por el Board con acta documentada. |

### 1.1.5 · Alineación con ERM y riesgo operacional

| Nivel | Descriptor |
|:---:|:---|
| **1** | La política de fraude no hace referencia al Enterprise Risk Management ni a riesgo operacional. |
| **2** | La política menciona que fraude es un sub-tipo de riesgo operacional, pero no hay integración práctica. |
| **3** | La política se mapea al framework de riesgo operacional. Los eventos de fraude se registran en la base de pérdidas operacionales. |
| **4** | Existe taxonomía compartida entre fraude y riesgo operacional. Los KRIs de fraude alimentan el dashboard de riesgo operacional. |
| **5** | El programa de fraude está plenamente integrado al ERM: el apetito de riesgo de fraude es sub-componente del apetito total, con correlaciones modeladas. |

## 1.2 — Estructura Organizacional y Accountability

### 🔷 CORE · 1.2.1 · Ubicación en el organigrama

| Nivel | Descriptor |
|:---:|:---|
| **1** | El área de fraude no tiene una ubicación formal en el organigrama. Las funciones están dispersas sin coordinación. |
| **2** | Existe un equipo identificable pero embebido en operaciones o IT, sin reporte directo a un líder de riesgo. |
| **3** | El área tiene posición definida con reporte al CRO, CISO o COO. El líder tiene título formal. |
| **4** | Reporta al CRO o equivalente con acceso directo al Board. El Head de Fraude participa en comités ejecutivos con presupuesto propio. |
| **5** | Independencia funcional con líneas de reporte claras a 1LoD, 2LoD y Board. Rango VP/SVP con poder de escalamiento directo al CEO/Board. |

### 1.2.2 · Roles y responsabilidades 3LoD

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un mapeo de roles de fraude a las tres líneas de defensa. |
| **2** | Se reconoce informalmente que operaciones es 1LoD y auditoría es 3LoD, pero sin documentación. |
| **3** | Existe un documento RACI que mapea roles de fraude a 1LoD, 2LoD y 3LoD. |
| **4** | El RACI está aprobado por el comité de fraude, se revisa anualmente, y cada rol tiene KPIs asociados. |
| **5** | El modelo de 3LoD se testea operativamente: 2LoD ejecuta challenge independiente, 3LoD evalúa efectividad del challenge, resultados se reportan al Board. |

### 🔷 CORE · 1.2.3 · Comité de Fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un comité de fraude formal. Decisiones se toman ad-hoc. |
| **2** | Existe un espacio recurrente pero sin charter, actas formales, ni quórum definido. |
| **3** | Comité con charter aprobado, frecuencia mínima mensual, actas formales, y asistencia de fraude, riesgo, operaciones y tecnología. |
| **4** | El comité tiene quórum definido, derechos de decisión documentados, tracking de action items con owners y fechas, y escalamiento al Board. |
| **5** | El comité tiene decision rights sobre apetito de riesgo por producto, aprobación de modelos de scoring, y excepciones. Las actas se auditan y los action items tienen aging reports. |

### 1.2.4 · Composición del Comité

| Nivel | Descriptor |
|:---:|:---|
| **1** | No aplica — no existe comité de fraude. |
| **2** | El comité está compuesto solo por fraude y operaciones. |
| **3** | Incluye fraude, compliance/AML, tecnología/IT y al menos una línea de negocio. |
| **4** | Incluye fraude, compliance/AML, cyber/IT, legal, operaciones, líneas de negocio, y un observador de auditoría. Data/Analytics tiene representación. |
| **5** | Además, tiene un sponsor C-suite, invita áreas de negocio según la agenda, y mantiene un roster con suplentes designados. |

### 🔷 CORE · 1.2.5 · Mecanismo de escalamiento al Board

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso de escalamiento. El Board no recibe información de fraude de forma regular. |
| **2** | El Board recibe información solo cuando ocurre un incidente significativo, reactivamente. |
| **3** | Existe proceso documentado con umbrales de pérdida que disparan notificación al Board. |
| **4** | Además de umbrales, el Board recibe reporte trimestral con tendencias, benchmark, KPIs y estado de remediación. |
| **5** | El Board tiene un comité de riesgo con fraude como agenda fija. El Head de Fraude presenta directamente. El Board puede ajustar el apetito de riesgo en la misma sesión. |

### 1.2.6 · SLAs cross-organizacionales

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen SLAs entre fraude y otras áreas (IT, operaciones, negocio). |
| **2** | Existen acuerdos informales pero no hay SLAs documentados ni medibles. |
| **3** | SLAs documentados para al menos 2 relaciones clave (fraude-IT, fraude-ops). |
| **4** | SLAs cubren todas las relaciones clave, aprobados por los heads, se miden mensualmente con dashboard. |
| **5** | SLAs con penalizaciones/escalamiento por incumplimiento, revisión semestral, y medición presentada en el comité de fraude. |

### 🔷 CORE · 1.2.7 · Protocolos de escalamiento (interno vs. externo)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe diferenciación en protocolos entre fraude interno y externo. |
| **2** | Se reconoce que fraude interno requiere tratamiento diferente, pero se usan los mismos procesos. |
| **3** | Protocolos diferenciados documentados: fraude externo por monitoreo; fraude interno se escala a compliance, auditoría y/o legal. |
| **4** | Protocolos de fraude interno incluyen preservación de evidencia, restricción de acceso, notificación a RRHH, y cadena de custodia formal. Se testean anualmente. |
| **5** | Fraude interno tiene equipo especializado con acceso a logs, CCTV, y correos (con aprobación legal). Playbook con tiempos de respuesta por severidad. |

### 1.2.8 · Oficial de Fraude designado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un oficial o responsable designado formalmente ante el regulador. |
| **2** | Hay un responsable de facto, pero su designación no es formal ni reconocida por el regulador. |
| **3** | Existe un Oficial de Fraude formalmente designado, con acta de nombramiento y conocido por el regulador. |
| **4** | El Oficial tiene autoridad documentada, presupuesto propio, y acceso directo al Board. |
| **5** | El Oficial tiene certificaciones (CFE, CAMS), protección de tenure, y su desempeño se evalúa con KPIs específicos. |

## 1.3 — Supervisión de Alta Dirección y Board

### 🔷 CORE · 1.3.1 · Frecuencia y profundidad del reporte al Board

| Nivel | Descriptor |
|:---:|:---|
| **1** | El Board no recibe reportes de fraude. El tema solo surge si hay un incidente público. |
| **2** | El Board recibe información anualmente, incluida en un reporte general de riesgo operacional sin desglose. |
| **3** | El Board recibe reporte dedicado al menos trimestralmente con métricas de pérdida, tendencias y estado de iniciativas. |
| **4** | El reporte incluye benchmark vs. peers, análisis de root cause, estado de remediación, y proyecciones de pérdida. |
| **5** | Reporting mensual de KPIs clave y trimestral con deep dive. Dashboard interactivo, exception-based reporting, y preguntas preparadas para el challenge del Board. |

### 1.3.2 · Entendimiento del Board sobre riesgo de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | El Board no tiene conocimiento sobre el riesgo de fraude más allá de lo que sale en medios. |
| **2** | Ha recibido al menos una presentación educativa, pero no tiene formación recurrente. |
| **3** | Recibe educación anual sobre tendencias, nuevos vectores y estado del programa. Se documenta asistencia. |
| **4** | Al menos un miembro tiene experiencia en fraude/riesgo. El Board hace preguntas de challenge documentadas en acta. |
| **5** | Programa de educación continua (2+ sesiones/año), ha visitado el centro de monitoreo, y sus preguntas han generado cambios documentables. |

### 1.3.3 · Participación en decisiones de apetito de riesgo

| Nivel | Descriptor |
|:---:|:---|
| **1** | El Board no participa en decisiones de apetito de riesgo de fraude. |
| **2** | El Board aprueba el apetito de forma ceremonial sin discusión sustancial. |
| **3** | El Board discute y aprueba anualmente. La discusión está documentada en acta. |
| **4** | El Board modifica activamente las propuestas: hay evidencia de cambios solicitados vs. propuesta original de management. |
| **5** | El Board conecta el apetito de fraude con el apetito total del banco. Evalúa escenarios adversos y aprueba tolerancias diferenciadas. |

### 1.3.4 · Ejecutivo responsable C-suite

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay un ejecutivo C-suite con responsabilidad explícita sobre el programa de fraude. |
| **2** | El CRO o COO tiene la responsabilidad nominalmente, pero sin KPIs de fraude en su evaluación. |
| **3** | Hay un ejecutivo C-suite con responsabilidad explícita documentada. Fraude aparece en su job description. |
| **4** | El ejecutivo tiene KPIs de fraude en su evaluación, preside o co-preside el comité, y reporta al Board. |
| **5** | Existe un Chief Fraud Officer o equivalente con asiento en el comité ejecutivo, presupuesto propio, y autoridad para detener lanzamientos. |

## 1.4 — Cultura Ética y Programas de Concientización

### 1.4.1 · Código de ética y fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un código de ética que mencione fraude, o el código existente no aborda fraude interno ni externo. |
| **2** | El código menciona fraude genéricamente ('no tolerar conductas fraudulentas') sin definiciones, ejemplos ni consecuencias. |
| **3** | El código aborda fraude interno y externo con definiciones claras, ejemplos por rol, consecuencias disciplinarias, aprobado por la Junta. |
| **4** | Se complementa con casos reales anonimizados del banco. Se firma anualmente. Se testea conocimiento con evaluaciones. |
| **5** | Se actualiza con nuevas tipologías cada año. Existe evidencia de que se han aplicado consecuencias basándose en el código. |

### 🔷 CORE · 1.4.2 · Programa de concientización para empleados

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un programa de concientización de fraude para empleados. |
| **2** | Capacitación de fraude anual, obligatoria, tipo e-learning genérico, sin contenido específico por rol. |
| **3** | Programa anual diferenciado por rol, con contenido actualizado basado en tipologías recientes del banco. |
| **4** | Programa trimestral con simulaciones de phishing/social engineering, evaluaciones de conocimiento, y métricas de cobertura. |
| **5** | Gamification, red team exercises, y se mide correlación entre capacitación y métricas de detección/reporte espontáneo. |

### 1.4.3 · Capacitación especializada por rol

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe capacitación de fraude diferenciada por rol. |
| **2** | Los investigadores reciben capacitación básica, pero analistas, tecnología y negocio no tienen formación específica. |
| **3** | Plan diferenciado: analistas (tipologías), investigadores (cadena de custodia), tecnología (reglas/modelos), negocio (red flags). |
| **4** | Cada rol tiene currículo con certificaciones objetivo (CFE, CAMS). Se mide avance y se asigna presupuesto. |
| **5** | Incluye rotaciones entre áreas, mentoring, participación en conferencias (ACFE, RSA). Se vincula al plan de carrera. |

### 1.4.4 · Canal de denuncias (whistleblower)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un canal de denuncias, o el existente no cubre fraude. |
| **2** | Existe pero es poco conocido, no se promueve activamente, y no ofrece garantías de anonimato. |
| **3** | Canal accesible (teléfono, email, web), promueve anonimato, operado por tercero independiente, cubre fraude interno y externo. |
| **4** | Se promueve activamente (campañas semestrales), tiene SLA de respuesta (<48h), tracking de casos, y protección contra retaliación. |
| **5** | Se miden métricas del canal: volumen, % sustanciadas, tiempo de resolución. Se compara vs. benchmark. El Board recibe reporte semestral. |

### 1.4.5 · Tone from the top

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay evidencia de mensajes de la alta dirección sobre fraude o ética. |
| **2** | El CEO ha mencionado la importancia de la ética genéricamente, pero sin referencia específica a fraude. |
| **3** | Al menos un mensaje anual del CEO específicamente sobre prevención de fraude, distribuido a toda la organización. |
| **4** | Mensajes trimestrales, participación en eventos de concientización, con datos del programa. |
| **5** | CEO y Board hacen referencia a fraude en earnings calls, reportes anuales, y town halls. La cultura antifraude es parte del employer branding. |

### 1.4.6 · Medición de cultura antifraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide la cultura antifraude en la organización. |
| **2** | Alguna pregunta sobre ética en la encuesta de clima, pero no preguntas específicas sobre fraude. |
| **3** | La encuesta incluye preguntas específicas sobre fraude ('¿sabes cómo reportar?', '¿confías en que no habrá retaliación?'). |
| **4** | Además de encuesta, se miden indicadores proxy: volumen de reportes espontáneos, tiempo de reporte, participación voluntaria. |
| **5** | Índice compuesto de cultura antifraude que combina encuestas, indicadores proxy, resultados de simulaciones. Se compara año a año. |

## 1.5 — Alineación Regulatoria

### 🔷 CORE · 1.5.1 · Mapeo de requisitos regulatorios

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un mapeo de requisitos regulatorios aplicables al programa de fraude. |
| **2** | Se conocen los principales reguladores pero no hay mapeo sistemático de requisitos vs. controles. |
| **3** | Existe matriz de cumplimiento que mapea cada requisito a un control del programa. Se actualiza anualmente. |
| **4** | La matriz incluye multi-jurisdicción, estado de cumplimiento, owner, y plan de remediación. Se presenta al comité de compliance. |
| **5** | Se actualiza dentro de 30 días de cada cambio regulatorio. Incluye análisis de impacto, timeline, y trazabilidad a los componentes del FCMA. |

### 1.5.2 · Monitoreo de cambios regulatorios

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso de monitoreo de cambios regulatorios en fraude. |
| **2** | Compliance monitorea regulación general, pero no hay feed específico para fraude. |
| **3** | Proceso de monitoreo con fuentes definidas y boletín al menos trimestral al equipo de fraude. |
| **4** | El boletín incluye análisis de impacto, timeline de cumplimiento, y owner de implementación. |
| **5** | Monitoreo continuo (alertas automáticas), multi-jurisdicción, cada cambio tiene impact assessment con deadline tracked. |

### 1.5.3 · Historial de hallazgos regulatorios y remediación

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se lleva registro centralizado de hallazgos regulatorios en fraude. |
| **2** | Los hallazgos se documentan cuando ocurren pero sin tracking centralizado ni aging report. |
| **3** | Tracker centralizado con descripción, fecha, severidad, owner, plan de remediación, y fecha de cierre. |
| **4** | Se reporta mensualmente al comité. Se mide aging, closure rate, y recurrencia. Los >90 días se escalan. |
| **5** | Integrado con sistema de auditoría interna. Se hace root cause analysis de recurrentes. Los patrones alimentan la actualización de la política. |

---

# P2: Evaluación de Riesgo de Fraude e Inteligencia de Amenazas

*Evalúa la capacidad del banco para identificar, evaluar y priorizar riesgos de fraude. Anclado en COSO/ACFE Principio 2.*

**5 sub-dimensiones · 17 componentes · 7 en Screening Core**

## 2.1 — Identificación de Riesgos de Fraude

### 🔷 CORE · 2.1.1 · Inventario de esquemas de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un inventario de esquemas. El equipo conoce los tipos de fraude por experiencia personal. |
| **2** | Existe una lista informal no documentada formalmente, sin diferenciación por producto/canal, y con más de 12 meses sin actualización. |
| **3** | Inventario documentado que diferencia por tipo (interno/externo), producto, canal y modus operandi. Tiene fecha de actualización y owner. |
| **4** | Se actualiza trimestralmente con input de investigaciones, inteligencia y vendors. Cada esquema tiene: descripción, indicadores, controles y pérdida histórica. |
| **5** | Inventario dinámico que se alimenta automáticamente de investigaciones y threat intel. Incluye esquemas emergentes no observados pero detectados en peers. |

### 🔷 CORE · 2.1.2 · Proceso de identificación de amenazas emergentes

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de identificación de amenazas emergentes. El banco se entera cuando las sufre. |
| **2** | El equipo lee publicaciones de industria ocasionalmente, pero sin proceso estructurado ni responsable. |
| **3** | Proceso documentado con fuentes definidas (FS-ISAC, vendors, ACFE, dark web monitoring), frecuencia y responsable. |
| **4** | Las amenazas se evalúan con metodología de impacto potencial y se priorizan. Se presentan en el comité de fraude. |
| **5** | Se usa threat modeling predictivo: se analiza cómo adversarios podrían explotar nuevos productos antes de que ocurra. Red team exercises anualmente. |

### 2.1.3 · Cobertura del inventario

| Nivel | Descriptor |
|:---:|:---|
| **1** | El inventario cubre solo fraude transaccional con tarjetas. |
| **2** | Cubre fraude transaccional y algún tipo adicional, pero deja fuera categorías completas. |
| **3** | Cubre al menos: transaccional, originación, ATO, fraude interno, y fraude en canales digitales. |
| **4** | Cobertura completa: transaccional (por canal), originación, ATO, interno, terceros, P2P/instant payments, y APP fraud. |
| **5** | Cobertura total más categorías emergentes: mule accounts, voice cloning/deepfake, AI-assisted social engineering, fraud-as-a-service, y cross-border. |

### 2.1.4 · Frecuencia de actualización

| Nivel | Descriptor |
|:---:|:---|
| **1** | El inventario no se actualiza o no existe fecha de última actualización. |
| **2** | Se actualiza ad-hoc cuando ocurre un incidente, sin frecuencia definida. |
| **3** | Se actualiza al menos anualmente como parte de la evaluación de riesgo. |
| **4** | Se actualiza trimestralmente con input de investigaciones, inteligencia y cambios en productos. |
| **5** | Se actualiza en near-real-time: cada investigación alimenta automáticamente el inventario. SLA de 5 días para incorporar nueva tipología. |

## 2.2 — Metodología de Evaluación de Riesgo Inherente

### 🔷 CORE · 2.2.1 · Metodología formal documentada

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe una metodología de evaluación de riesgo de fraude. |
| **2** | Metodología informal (reunión de brainstorming) no documentada ni repetible. |
| **3** | Metodología documentada basada en probabilidad × impacto, con escalas definidas, aplicada a cada esquema. |
| **4** | Incluye criterios cuantitativos (datos de pérdida, volumen) y cualitativos. Se aplica consistentemente y se documenta. |
| **5** | Usa datos reales de pérdida, proyecciones actuariales, y benchmark para cuantificar riesgo en USD. Se valida independientemente. |

### 2.2.2 · Granularidad de la evaluación

| Nivel | Descriptor |
|:---:|:---|
| **1** | La evaluación es a nivel institución: un solo score de riesgo. |
| **2** | Diferencia entre fraude interno y externo, pero no descompone más. |
| **3** | Se realiza por producto y por canal. |
| **4** | Se realiza por producto × canal × tipo de fraude. Se identifican combinaciones de mayor riesgo. |
| **5** | Incluye producto × canal × tipo × segmento × geografía. Heat map multi-dimensional, ejecución trimestral. |

### 2.2.3 · Participación de líneas de negocio

| Nivel | Descriptor |
|:---:|:---|
| **1** | Las líneas de negocio no participan en la evaluación. |
| **2** | Se les consulta ocasionalmente pero su input no es estructurado ni documentado. |
| **3** | Cada línea designa un representante que participa en la evaluación anual. |
| **4** | Las líneas co-evalúan los riesgos de sus productos, validan la priorización, y se comprometen con planes de remediación. |
| **5** | Las líneas son co-owners: participan trimestralmente, aportan datos de negocio, y sus KPIs incluyen métricas de colaboración con fraude. |

### 2.2.4 · Criterios de calificación de probabilidad e impacto

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen criterios de calificación. La evaluación es puramente subjetiva. |
| **2** | Se usan escalas cualitativas genéricas ('alto/medio/bajo') sin definición de qué significa cada nivel. |
| **3** | Existen criterios documentados: probabilidad se mide con escala definida (ej: 1=raro, 5=casi seguro) e impacto en USD con rangos específicos por tamaño del banco. |
| **4** | Los criterios combinan datos cuantitativos (frecuencia histórica, volumen de pérdida) con cualitativos (experticia del equipo). Se calibran anualmente con datos reales. |
| **5** | Los criterios se validan estadísticamente: la probabilidad se basa en distribuciones actuariales de eventos, el impacto se modela con simulación Monte Carlo. Se someten a challenge independiente. |

## 2.3 — Evaluación de Efectividad de Controles

### 🔷 CORE · 2.3.1 · Proceso de evaluación de controles

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se evalúa la efectividad de controles. Se asumen efectivos una vez implementados. |
| **2** | Se revisan cuando falla algo, sin evaluación proactiva ni periódica. |
| **3** | Proceso anual de evaluación de controles clave con testing por muestra y documentación. |
| **4** | Cada control tiene owner, se testea semestralmente (design + operating effectiveness), y alimenta el riesgo residual. |
| **5** | Testing continuo con métrica de efectividad en producción (detection rate por regla, % de fraude que pasó cada control). Se usa para recalibrar o retirar. |

### 2.3.2 · Vinculación controles-esquemas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe mapeo entre controles y esquemas de fraude. |
| **2** | Se sabe informalmente qué controles cubren qué, pero sin documentación. |
| **3** | Matriz controles × esquemas documentada. Se identifican esquemas con gaps. |
| **4** | La matriz se actualiza con cada nuevo esquema. Se mide cobertura. Los gaps se priorizan. |
| **5** | La matriz incluye efectividad medida por esquema. Se ejecutan simulaciones de falla de controles. Se identifican single points of failure. |

### 2.3.3 · Pruebas de efectividad de controles

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se testean los controles de fraude. Se asumen efectivos porque existen. |
| **2** | Se testean controles solo cuando falla algo o cuando auditoría lo exige. |
| **3** | Se ejecutan pruebas de efectividad al menos anualmente para los controles clave: se verifica design effectiveness y se documenta. |
| **4** | Se testea design y operating effectiveness semestralmente. Se usan datos reales (ej: transacciones fraudulentas conocidas que pasaron el control). Se documenta el resultado por control. |
| **5** | Se ejecuta red teaming: se simulan ataques reales contra los controles para medir su efectividad en condiciones adversas. Se mide la tasa de bypass por control y se usa para recalibrar. |

## 2.4 — Determinación de Riesgo Residual y Priorización

### 🔷 CORE · 2.4.1 · Cálculo de riesgo residual

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se calcula el riesgo residual de fraude. |
| **2** | Noción cualitativa ('alto', 'medio', 'bajo') sin cálculo formal. |
| **3** | Se calcula como riesgo inherente menos efectividad de controles. Se registra por esquema. |
| **4** | Se cuantifica en USD (pérdida esperada post-controles) por producto/canal. Se compara vs. apetito aprobado. |
| **5** | Se monitorea continuamente con datos reales. Desviaciones vs. apetito disparan alertas automáticas y planes de acción. |

### 2.4.2 · Aceptación formal de riesgos residuales

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los riesgos residuales no se aceptan formalmente. |
| **2** | Algunos se aceptan implícitamente ('no tenemos presupuesto') sin aprobación formal. |
| **3** | Los que exceden tolerancia se presentan al comité para aceptación o remediación. |
| **4** | La aceptación requiere firma del owner de negocio + aprobación del comité de riesgo, con justificación documentada. |
| **5** | La aceptación tiene ciclo de vida: revisión trimestral, expiración automática, re-aprobación requerida. Se reporta inventario de riesgos aceptados. |

## 2.5 — Inteligencia de Fraude (Fraud Threat Intelligence)

### 🔷 CORE · 2.5.1 · Función de inteligencia de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe función de inteligencia de fraude. Sin acceso a fuentes externas. |
| **2** | El equipo lee newsletters y alertas de vendors, pero sin función ni responsable asignado. |
| **3** | Responsable de inteligencia con fuentes definidas y producción regular de reportes. |
| **4** | Múltiples fuentes (FS-ISAC, consorcios, vendors, OSINT, dark web), reportes mensuales, alimenta reglas/modelos. |
| **5** | Ciclo completo (recolección → análisis → diseminación → acción → feedback). Alertas near-real-time. Se mide impacto en detección. |

### 🔷 CORE · 2.5.2 · Integración de inteligencia con detección

| Nivel | Descriptor |
|:---:|:---|
| **1** | La inteligencia no se conecta con reglas ni modelos de detección. |
| **2** | Ocasionalmente se crea una regla desde inteligencia, pero el proceso es ad-hoc. |
| **3** | Proceso documentado: inteligencia genera ticket que el equipo de reglas evalúa y prioriza. |
| **4** | El proceso tiene SLA (ej: <72h para amenaza crítica). Se mide time-to-deploy desde intel hasta producción. |
| **5** | Feeds de IoCs se convierten programáticamente en features para modelos ML. Se mide la contribución de intel al detection rate. |

### 2.5.3 · Fuentes de inteligencia (internas y externas)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se usan fuentes de inteligencia de fraude, ni internas ni externas. |
| **2** | Se usan fuentes internas (resultados de investigaciones) pero no se consumen fuentes externas. |
| **3** | Se consumen al menos 3 fuentes externas (FS-ISAC, alertas de vendors, redes de pago) además de las internas. Están documentadas. |
| **4** | Se consolidan fuentes internas (investigaciones, alertas, quejas) con externas (consorcios, OSINT, dark web, law enforcement). Se evalúa la calidad de cada fuente anualmente. |
| **5** | Se usa un threat intelligence platform (TIP) que agrega, correlaciona y prioriza inteligencia de 10+ fuentes. Se mide la tasa de actionable intelligence y el time-to-action. |

### 2.5.4 · Producción de reportes de inteligencia

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se producen reportes de inteligencia de fraude. |
| **2** | Se comparten hallazgos informalmente por email o chat cuando alguien encuentra algo relevante. |
| **3** | Se produce un boletín de inteligencia al menos mensual, con destinatarios definidos (equipo de fraude, reglas, management). |
| **4** | Se producen reportes diferenciados: operativos (semanales, para analistas y reglas), tácticos (mensuales, para management), y estratégicos (trimestrales, para Board). Cada uno con formato y profundidad apropiados. |
| **5** | Los reportes incluyen indicadores de compromiso (IoCs) accionables, recomendaciones de reglas/modelos, y assessment de amenazas a 90 días. Se mide cuántas recomendaciones se implementan y su impacto en detección. |

---

# P3: Prevención y Actividades de Control (Basado en Journey)

*Evalúa los controles preventivos a lo largo del customer journey, incluyendo APP fraud/scams. Anclado en COSO/ACFE Principio 3.*

**7 sub-dimensiones · 28 componentes · 8 en Screening Core**

## 3.1 — Mapeo de Customer Journeys

### 🔷 CORE · 3.1.1 · Mapeo de journeys con puntos de vulnerabilidad

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe mapeo de journeys desde perspectiva de fraude. |
| **2** | Se conocen informalmente pero no están documentados con vulnerabilidades. |
| **3** | Mapas para los 3 productos/canales principales con puntos de vulnerabilidad y controles mapeados. |
| **4** | Todos los journeys mapeados, cada punto con control asignado y owner. Se actualiza ante cada cambio de flujo. |
| **5** | Incluyen heatmap de riesgo por punto, datos de pérdida real, y war games semestrales para nuevas vulnerabilidades. |

### 🔷 CORE · 3.1.2 · Cobertura de controles por etapa del journey

| Nivel | Descriptor |
|:---:|:---|
| **1** | Controles concentrados en una sola etapa (generalmente post-transacción). |
| **2** | Hay controles en 2 etapas pero quedan vacíos en autenticación, post-transacción o disputas. |
| **3** | Controles en las 5 etapas: onboarding, autenticación, transacción, post-transacción y disputa. |
| **4** | Controles diferenciados por canal y producto en cada etapa. Se mide efectividad por etapa. |
| **5** | Controles adaptativos: la intensidad se ajusta dinámicamente según risk score. Se mide tasa de captura y fricción por etapa. |

### 3.1.3 · Controles embebidos vs. bolt-on

| Nivel | Descriptor |
|:---:|:---|
| **1** | Todos los controles son bolt-on: agregados después del diseño del journey. |
| **2** | Algunos están embebidos (ej: OTP), pero la mayoría son parches. |
| **3** | Los controles principales están diseñados como parte del journey original. |
| **4** | Existe guía de 'fraud by design' aplicada en diseño de todos los journeys nuevos. |
| **5** | Todos los controles son invisibles al cliente (frictionless by design) a menos que el risk score exceda umbral. |

### 3.1.4 · Análisis de gaps en journeys digitales vs. presenciales

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se ha realizado un análisis de gaps entre journeys digitales y presenciales. |
| **2** | Se reconoce que los journeys digitales tienen mayor riesgo, pero no se ha cuantificado el gap de controles. |
| **3** | Se ha realizado un gap analysis que identifica controles presentes en el journey presencial ausentes en el digital (y viceversa). Documentado. |
| **4** | El gap analysis se actualiza semestralmente, incluye plan de remediación con timeline, y se prioriza por pérdida esperada. |
| **5** | Existe un programa continuo de penetration testing de journeys digitales que identifica vulnerabilidades antes de que sean explotadas. Los resultados alimentan el roadmap de controles. |

## 3.2 — Onboarding e Identidad

### 🔷 CORE · 3.2.1 · Programa contra robo de identidad

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe programa formal de identity theft. No se buscan red flags. |
| **2** | Se revisan documentos manualmente en apertura presencial, sin programa digital. |
| **3** | Programa documentado con red flags por canal, capacitación al front, y al menos una herramienta de verificación. |
| **4** | Verificación documental + no documental + digital ID verification. Se mide tasa de detección en onboarding. |
| **5** | Multimodal verification: documento + facial match + device intelligence + behavioral analytics. |

### 🔷 CORE · 3.2.2 · Detección de identidades sintéticas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se buscan identidades sintéticas en originación. |
| **2** | Se revisan solicitudes sospechosas manualmente, sin herramientas específicas. |
| **3** | Se usan al menos 2 señales de synthetic ID (SSN randomization, credit file thin con actividad alta). |
| **4** | Modelo o score específico que evalúa consistencia de datos, velocidad de construcción de crédito, patrones anómalos. |
| **5** | Enfoque multi-capa: score + consortium data + análisis de grafos + verificación de dispositivo. Se mide detection rate específico. |

### 3.2.3 · Validación de dispositivo en onboarding digital

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se valida el dispositivo en onboarding digital. |
| **2** | Se registra información básica (IP, user agent) pero no se usa para decisiones. |
| **3** | Device fingerprinting en onboarding comparado contra listas negras. |
| **4** | Device fingerprint enriquecido con geolocalización, velocity, integrado con score de onboarding. |
| **5** | Device intelligence en real-time: reputation score, emulador detection, jailbreak/root, VPN/proxy. Decisión holística. |

### 3.2.4 · Debida diligencia reforzada para clientes de alto riesgo

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe debida diligencia reforzada para clientes de alto riesgo desde la perspectiva de fraude. |
| **2** | Se aplica EDD para AML/KYC pero no se incluyen criterios de riesgo de fraude. |
| **3** | Se aplica EDD de fraude para al menos 2 segmentos de alto riesgo (ej: nuevos clientes digitales, clientes con historial de chargebacks). |
| **4** | Se aplica EDD con criterios de fraude diferenciados por producto, canal y perfil. Los criterios se revisan anualmente basándose en datos de pérdida. |
| **5** | La EDD de fraude está integrada con el scoring de onboarding: el nivel de due diligence se determina dinámicamente por el risk score del aplicante. Se mide la tasa de detección en EDD vs. diligencia estándar. |

### 3.2.5 · Listas negras internas y compartidas (consorcios)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mantienen listas negras de fraude. |
| **2** | Se mantiene una lista negra interna básica (ej: tarjetas comprometidas), pero no se comparte con consorcios ni se actualiza sistemáticamente. |
| **3** | Se mantienen listas negras internas por tipo (dispositivos, beneficiarios, identidades) y se consume al menos una lista externa de consortium. |
| **4** | Las listas se actualizan en near-real-time desde investigaciones y fuentes externas. Se usan en el scoring de detección. Se mide la contribución de cada lista al detection rate. |
| **5** | Se participa activamente en consorcios de compartición bidireccional. Las listas se integran programáticamente con el motor de detección. Se mide false match rate y true match rate por lista. |

### 3.2.6 · Cotejo contra listas de sanciones (OFAC)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se cotejan clientes ni transacciones contra listas de sanciones desde la perspectiva de fraude. |
| **2** | El cotejo existe en AML/compliance pero no está integrado con el flujo de fraude. |
| **3** | El cotejo contra OFAC/SDN se ejecuta en onboarding y se comparte el resultado con el equipo de fraude. |
| **4** | El cotejo se ejecuta en onboarding y en cada transacción para beneficiarios de alto riesgo. Los matches se investigan con protocolo documentado. |
| **5** | El cotejo es real-time, multi-lista (OFAC, UN, EU, listas locales), con fuzzy matching avanzado. Se integra con el scoring de fraude y se audita la tasa de false positives. |

## 3.3 — Autenticación y Control de Acceso

### 🔷 CORE · 3.3.1 · Métodos de autenticación por canal

| Nivel | Descriptor |
|:---:|:---|
| **1** | Solo usuario + contraseña en todos los canales. Sin segundo factor. |
| **2** | MFA (OTP SMS) en al menos un canal; otros dependen solo de contraseña. |
| **3** | MFA en todos los canales digitales. Métodos: OTP y push notification como mínimo. |
| **4** | Además de MFA, métodos avanzados en al menos un canal: biometría, device binding, behavioral biometrics. |
| **5** | Autenticación adaptativa multi-método: el sistema selecciona método según risk score de la sesión. |

### 3.3.2 · Autenticación adaptativa basada en riesgo

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe. Todos pasan por el mismo flujo independientemente del riesgo. |
| **2** | Step-up para operaciones fijas (ej: transferencias >$X), pero no basado en riesgo de sesión. |
| **3** | Step-up se activa basado en al menos 3 señales de riesgo (monto, dispositivo nuevo, geo atípica). |
| **4** | Risk engine evalúa 10+ señales en tiempo real y decide nivel de autenticación. Se mide tasa de abandono por nivel. |
| **5** | Motor de autenticación se entrena continuamente con datos de fraude confirmado. Se optimiza para minimizar fricción en sesiones legítimas. |

### 🔷 CORE · 3.3.3 · Protección contra ATO

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen controles específicos para ATO. No se monitorean cambios de dispositivo, SIM swap ni credential stuffing. |
| **2** | Se detectan cambios de contraseña con notificación, pero sin monitoreo de otros indicadores. |
| **3** | Se monitorean al menos 3 indicadores: cambio de dispositivo + cambio de datos de contacto + login desde IP/geo atípica. |
| **4** | Score de riesgo de sesión que integra device fingerprint, behavioral biometrics, velocity, IP reputation, SIM swap detection. |
| **5** | Multi-capa en real-time: credential intelligence, session risk scoring, behavioral analytics, coordinación con telecom para SIM swap. |

### 3.3.4 · Balance seguridad/fricción en autenticación

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide la fricción generada por la autenticación. |
| **2** | Se conocen quejas de clientes por la autenticación, pero no se mide sistemáticamente. |
| **3** | Se mide la tasa de abandono en el flujo de autenticación por canal. Se reporta mensualmente. |
| **4** | Se mide abandono, tiempo de completación, tasa de error, y NPS por método de autenticación. Se usa para calibrar el step-up. |
| **5** | Existe un modelo de optimización que balancea seguridad (fraud prevented) vs. fricción (abandono + NPS) por segmento de cliente. Se recalibra trimestralmente. |

## 3.4 — Controles Transaccionales

### 3.4.1 · Límites transaccionales

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen límites diferenciados para fraude. |
| **2** | Límites genéricos por canal sin diferenciación por perfil de riesgo del cliente. |
| **3** | Límites por canal y producto con al menos 3 niveles (nuevo, regular, VIP). Se revisan anualmente. |
| **4** | Límites dinámicos según perfil de comportamiento del cliente. Se mide impacto en experiencia. |
| **5** | Límites completamente adaptativos: se recalculan por transacción basándose en risk score, contexto (hora, dispositivo, beneficiario). Se optimizan para minimizar declinaciones legítimas. |

### 🔷 CORE · 3.4.2 · Controles en pagos en tiempo real (PIX/instant)

| Nivel | Descriptor |
|:---:|:---|
| **1** | Mismos controles que pagos batch — sin diferenciación. |
| **2** | Se aplican mismos límites más restrictivos, sin controles específicos. |
| **3** | Controles específicos: scoring real-time, verificación de beneficiario, velocity checks para el canal. |
| **4** | Incluye mule account detection, behavioral analytics, confirmación de beneficiario (CoP), hold inteligente (<30 seg) para alto riesgo. |
| **5** | Scoring <100ms con modelo ML específico para el canal. FP rate medido por separado. Network intelligence para beneficiarios de alto riesgo. |

### 3.4.3 · Reglas de negocio preventivas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen reglas preventivas más allá de límites de monto. |
| **2** | Existen 2-3 reglas básicas (ej: bloqueo por país, límite de monto), aplicadas uniformemente. |
| **3** | Existen reglas diferenciadas: velocity checks, geo-fencing, merchant category restrictions, y horarios atípicos. Documentadas con owner. |
| **4** | Las reglas preventivas se calibran con datos de fraude real. Se mide el impacto de cada regla en la prevención vs. la fricción generada. |
| **5** | Las reglas son dinámicas: se ajustan en near-real-time según el perfil del cliente y el contexto de la transacción. Se usa A/B testing para validar nuevas reglas antes de despliegue general. |

### 3.4.4 · Proceso de excepción y override de controles

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso de excepción. Los controles se aplican o no se aplican, sin documentación. |
| **2** | Las excepciones se otorgan informalmente (ej: un gerente autoriza por teléfono). No se documentan. |
| **3** | Existe un proceso documentado: solicitud, justificación, aprobación por autoridad definida, y registro de la excepción. |
| **4** | Las excepciones se registran en un sistema, tienen vigencia limitada, y se auditan trimestralmente. Se mide el volumen de excepciones y su correlación con pérdidas. |
| **5** | Las excepciones se analizan como señal de que el control necesita recalibración. Patrones de excepción recurrentes disparan revisión del control. Se reporta al comité. |

## 3.5 — Prevención de APP Fraud / Scams

### 🔷 CORE · 3.5.1 · Detección de indicadores de coerción

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se buscan indicadores de coerción o social engineering en el journey. |
| **2** | Los analistas están entrenados para identificar coerción en llamadas, pero sin detección automatizada. |
| **3** | Se monitorean al menos 3 señales automatizadas: monto inusual + beneficiario nuevo + hora atípica. |
| **4** | Behavioral analytics: tiempos de sesión anómalos, patrones de typing que sugieren dictado, sesión telefónica simultánea. |
| **5** | Modelo ML específico para APP fraud integrando behavioral, transaccional y contextual. Friction inteligente pre-autorización. |

### 3.5.2 · Educación proactiva al cliente

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe programa de educación al cliente sobre fraude o scams. |
| **2** | Alertas ocasionales en redes sociales o sitio web, sin programa estructurado. |
| **3** | Programa con contenido por canal (in-app tips, emails, SMS) enfocado en tipologías frecuentes. Publicación mensual. |
| **4** | Warnings contextuales en el journey (ej: al transferir a beneficiario nuevo). Se mide tasa de interacción. |
| **5** | Personalización: warnings adaptados al perfil del cliente y contexto de la transacción. Se mide impacto en tasa de fraude. |

### 3.5.3 · Protocolo de confirmación de beneficiario (CoP)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un protocolo de confirmación de beneficiario antes de pagos. |
| **2** | Se muestra el nombre del banco destino pero no se valida el nombre del beneficiario. |
| **3** | Se implementa Confirmation of Payee o equivalente para pagos de alto riesgo: se valida nombre del beneficiario vs. cuenta destino antes de autorizar. |
| **4** | CoP se aplica a todos los pagos a nuevos beneficiarios. Se mide la tasa de mismatch y su correlación con fraude. Se notifica al cliente antes de proceder. |
| **5** | CoP con inteligencia: además de name matching, se evalúa el riesgo del beneficiario (mule score, historial de fraude en consortium). Se bloquean automáticamente los beneficiarios de alto riesgo. |

## 3.6 — Controles de Fraude Interno

### 3.6.1 · Segregación de funciones

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se ha evaluado la segregación desde perspectiva de fraude interno. |
| **2** | Se reconocen algunas incompatibilidades pero sin matriz formal. |
| **3** | Matriz de segregación para procesos de alto riesgo, documentada y revisada anualmente. |
| **4** | La matriz se aplica sistémicamente en permisos del core. Se audita semestralmente. Se detectan violaciones. |
| **5** | Monitoreo en real-time: cualquier violación genera alerta inmediata. Se reporta al comité mensualmente. |

### 3.6.2 · Monitoreo de actividad de empleados

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se monitorea actividad de empleados desde perspectiva de fraude. |
| **2** | Se revisan logs manualmente ante sospecha, sin monitoreo proactivo. |
| **3** | Se monitorean al menos 3 indicadores: acceso fuera de horario, volumen inusual, acceso a cuentas sin relación. |
| **4** | Motor de reglas específico para fraude interno: comportamiento, acceso a info sensible, txns en cuentas de empleados/familiares. |
| **5** | Behavioral analytics de empleados: baseline por rol, correlación con HR data, revisiones de acceso trimestrales. |

### 3.6.3 · Autorización dual para operaciones sensibles

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe autorización dual para operaciones sensibles. |
| **2** | Se requiere autorización dual solo para algunas operaciones (ej: transferencias internacionales >$X), pero no está sistematizado. |
| **3** | Existe una lista documentada de operaciones que requieren autorización dual: ajustes de cuenta, cambio de límites, overrides de controles, operaciones manuales de alto valor. |
| **4** | La autorización dual se implementa sistémicamente: el sistema no permite completar la operación sin la segunda aprobación. Se audita el cumplimiento. |
| **5** | Se monitorea la efectividad de la autorización dual: se analizan los casos donde la segunda aprobación detectó anomalías. Se ajusta la lista de operaciones anualmente. |

### 3.6.4 · Background checks para posiciones de riesgo

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se realizan background checks desde la perspectiva de fraude para posiciones de riesgo. |
| **2** | Se hacen background checks estándar de RRHH al contratar, pero no se repiten ni se enfocan en riesgo de fraude. |
| **3** | Se realizan background checks específicos de fraude (antecedentes judiciales, crediticios, referencias) para posiciones de alto riesgo. Se documenta. |
| **4** | Los background checks se repiten periódicamente (al menos cada 2 años) para posiciones de alto riesgo. Se monitorean cambios de perfil financiero del empleado. |
| **5** | Se usa un programa continuo de monitoring: alertas automáticas si un empleado en posición de riesgo tiene cambios significativos en su perfil crediticio o antecedentes. Se integra con el monitoreo de fraude interno. |

## 3.7 — Controles de Terceros y Vendors

### 3.7.1 · Due diligence de fraude sobre proveedores

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se evalúa riesgo de fraude sobre proveedores o partners. |
| **2** | Se evalúa riesgo de terceros en general pero sin componente específico de fraude. |
| **3** | Preguntas de fraude en evaluación de terceros de alto riesgo. Se documenta. |
| **4** | Cuestionario específico con scoring. Los de alto riesgo requieren revisión periódica y controles contractuales. |
| **5** | Se monitorean indicadores de fraude originados vía terceros. Se comparten datos con partners estratégicos. Auditorías de fraude sobre terceros. |

### 3.7.2 · Controles contractuales con terceros

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen controles contractuales de fraude con terceros. |
| **2** | Los contratos con terceros mencionan fraude genéricamente ('cumplir con estándares de seguridad'). |
| **3** | Los contratos incluyen cláusulas específicas: liability shift, obligación de monitoreo, reporte de incidentes <24h, y derecho de auditoría. |
| **4** | Las cláusulas se revisan anualmente. Se mide el cumplimiento de los SLAs contractuales de fraude. Se escalan incumplimientos. |
| **5** | Los contratos incluyen KPIs de fraude medibles (ej: tasa de fraude originado por el tercero <X bps), penalidades por incumplimiento, y data sharing bidireccional. |

### 3.7.3 · Monitoreo de fraude originado por terceros

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se monitorea el fraude originado a través de canales de terceros. |
| **2** | Se conoce que algunos terceros originan fraude, pero no se mide ni se trackea. |
| **3** | Se mide la tasa de fraude por tercero/partner al menos trimestralmente. Se compara vs. canales propios. |
| **4** | Se monitorea en near-real-time la tasa de fraude por tercero. Se aplican controles diferenciados para terceros de alto riesgo. Se escalan desviaciones. |
| **5** | Existe un dashboard de fraude por tercero integrado con el programa de vendor management. Los terceros con tasa de fraude >umbral se ponen en plan de remediación o se terminan. |

---

# P4: Detección, Monitoreo y Decisioning

*Evalúa las capacidades de detección en tiempo real y batch, modelos ML, gestión de alertas e impacto al cliente. Anclado en COSO/ACFE Principio 3 (detectivo) + Gartner 5 Layers.*

**6 sub-dimensiones · 23 componentes · 9 en Screening Core**

## 4.1 — Motor de Monitoreo Transaccional

### 🔷 CORE · 4.1.1 · Cobertura por canales y productos

| Nivel | Descriptor |
|:---:|:---|
| **1** | El motor cubre solo un canal o producto (ej: solo tarjetas de crédito). |
| **2** | Cubre 2–3 canales pero deja fuera canales significativos (ej: PIX o digital banking). |
| **3** | Cubre todos los canales y productos principales: tarjetas, transferencias, pagos instantáneos, banca digital y originación. |
| **4** | Cobertura total con reglas diferenciadas por canal/producto. Se mide detection rate por canal. Canales nuevos se integran en <90 días. |
| **5** | Cobertura universal con scoring unificado: reglas del canal + modelo ML cross-channel + network intelligence. Alerta si un canal queda sin monitoreo. |

### 🔷 CORE · 4.1.2 · Inventario y documentación de reglas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe inventario de reglas. Las reglas están en el sistema pero sin documentación externa. |
| **2** | Existe una lista de reglas activas, pero sin documentación del propósito, lógica ni performance. |
| **3** | Cada regla tiene: nombre, descripción, lógica, fecha de creación, owner, esquema que ataca, y alertas/mes. |
| **4** | Además: detection rate, FP rate, last calibration date, y justificación de umbrales. Se revisa semestralmente. |
| **5** | Inventario dinámico: métricas de producción se actualizan automáticamente. Reglas sin disparar en >6 meses se marcan para revisión. Reglas con FP >90% se escalan para recalibración. |

### 4.1.3 · Calibración de umbrales

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los umbrales se definieron al implementar y no se han modificado. |
| **2** | Se ajustan reactivamente cuando las quejas o pérdidas suben, sin proceso periódico. |
| **3** | Recalibración al menos semestral basada en distribución de alertas y feedback de investigaciones. |
| **4** | Recalibración trimestral con datos de TP y FP, documentando cada cambio con before/after metrics. |
| **5** | Optimización automática: el sistema recomienda ajustes maximizando detection con constraint de FP. Los cambios pasan por governance. |

### 4.1.4 · Governance del rule set

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe governance. Cualquiera con acceso puede cambiar reglas. |
| **2** | Proceso informal ('pedir aprobación al jefe') no documentado ni auditado. |
| **3** | Proceso documentado: solicitud, justificación, aprobación, testing en QA antes de producción. |
| **4** | Incluye change advisory board, backtesting, impact analysis, y rollback procedure. |
| **5** | Full governance: ticket, backtesting, aprobación dual, canary testing, monitoring post-deploy 7 días, rollback automático si FP excede umbral. |

### 🔷 CORE · 4.1.5 · Desempeño de reglas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide el desempeño por regla individual. |
| **2** | Se conoce el FP rate global pero no por regla. |
| **3** | Se mide detection rate y FP rate por regla al menos trimestralmente. Se identifican top-10 por volumen. |
| **4** | Cada regla tiene scorecard: alertas, detection rate, FP rate, TP rate, pérdida detectada y no detectada. Revisión mensual. |
| **5** | Dashboards real-time por regla, alertas automáticas si FP excede threshold o regla deja de disparar. Reporte trimestral de 'reglas zombie'. |

## 4.2 — Modelos de Machine Learning

### 🔷 CORE · 4.2.1 · Existencia y alcance de modelos ML

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se usan modelos ML. Todo el monitoreo es con reglas estáticas. |
| **2** | Se usa un modelo ML de vendor (ej: FICO/Falcon) sin customización ni modelos propietarios. |
| **3** | Modelos ML (vendor + al menos 1 propietario) para detección. Cubren al menos un tipo de fraude. |
| **4** | Múltiples modelos ML: fraude transaccional, ATO, originación, y al menos uno cross-channel. Documentación técnica completa. |
| **5** | Portfolio completo: por tipo de fraude, canal y segmento. Técnicas avanzadas (deep learning, graph neural networks). Se mide contribution margin ML vs. reglas. |

### 🔷 CORE · 4.2.2 · Validación independiente de modelos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se validan independientemente. El equipo que desarrolla también valida. |
| **2** | Validación básica interna antes de deployment, por el mismo equipo. |
| **3** | Equipo o función de validación independiente (2LoD o tercero) que valida antes de producción. Se documenta. |
| **4** | Sigue OCC 2011-12 / SR 11-7: conceptual soundness, outcomes analysis, ongoing monitoring. Informe con hallazgos. |
| **5** | Backtesting riguroso, stability analysis (PSI), AUC/Gini, calibration analysis, bias testing, stress testing. Revalidación anual. |

### 4.2.3 · Champion/challenger

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso. El modelo en producción es el único hasta reemplazo manual. |
| **2** | Modelos nuevos se desarrollan como reemplazo total sin ejecución en paralelo. |
| **3** | Al menos un challenger en shadow mode para comparar performance antes del swap. |
| **4** | Múltiples challengers en paralelo con métricas automatizadas. El swap se decide con datos. |
| **5** | A/B testing en producción con control de exposición. Ciclo champion/challenger continuo. |

### 🔷 CORE · 4.2.4 · Monitoreo de performance en producción

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se monitorea performance una vez en producción. |
| **2** | Se revisa manualmente cada 6+ meses o cuando hay aumento de pérdidas. |
| **3** | Monitoreo mensual: AUC, detection rate, FP rate, score distribution. |
| **4** | Monitoreo real-time o semanal con alertas automáticas si métricas se degradan (AUC, PSI, FP rate). |
| **5** | Framework completo: performance + feature drift + concept drift + data quality checks. Backtesting mensual. Trigger automático de reentrenamiento. |

### 4.2.5 · Tipos de modelos y técnicas utilizadas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se usan modelos de ML para fraude. |
| **2** | Se usa un solo tipo de modelo (ej: regresión logística o score de vendor) sin explorar otras técnicas. |
| **3** | Se usan al menos 2 tipos de modelos: supervisados (ej: gradient boosting) y al menos un no supervisado (ej: clustering para anomalías). |
| **4** | Se usa un ensemble de modelos que combina múltiples técnicas (supervisados, no supervisados, redes neuronales). Se evalúa el contribution de cada técnica al detection. |
| **5** | Se usan técnicas de frontera: graph neural networks para detección de redes, deep learning para secuencias transaccionales, generative models para data augmentation en clases raras. Se documenta la justificación de cada técnica. |

### 4.2.6 · Explainability e interpretabilidad de modelos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se evalúa la explainability de los modelos. Son cajas negras. |
| **2** | Se conocen las features más importantes del modelo, pero no se puede explicar una decisión individual. |
| **3** | Se usan técnicas de explainability (SHAP, LIME) para al menos el modelo principal. Se puede explicar por qué una transacción se marcó como sospechosa. |
| **4** | La explainability se integra en el flujo de investigación: el analista ve las top-N razones de cada alerta. Se evalúa la utilidad de las explicaciones con feedback de los analistas. |
| **5** | La explainability se usa también para cumplimiento regulatorio (fair lending, bias testing), para debugging de modelos, y para comunicación al cliente cuando se requiere. Se audita anualmente. |

### 4.2.7 · Proceso de desarrollo de modelos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso estandarizado de desarrollo de modelos de fraude. |
| **2** | Los modelos se desarrollan ad-hoc: un data scientist los construye con su propia metodología. |
| **3** | Existe un proceso documentado con etapas: definición del problema, data selection, feature engineering, training, testing, documentación, y deployment. |
| **4** | El proceso incluye peer review en cada etapa, data governance (linaje de datos de entrenamiento), testing con datos out-of-time, y documentación completa alineada con OCC/SR 11-7. |
| **5** | El proceso está automatizado (MLOps pipeline): feature store, automated training, automated testing (AUC, stability, bias), automated documentation, y deployment con canary testing. Se mide el time-to-production de un nuevo modelo. |

## 4.3 — Arquitectura de Detección: Real-Time vs. Batch

### 🔷 CORE · 4.3.1 · Capacidad real-time

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe detección en tiempo real. Todo es batch (D+1). |
| **2** | Algunas alertas en near-real-time (<1 hora), mayoría batch diario. |
| **3** | Scoring en real-time (<500ms) para los canales principales. |
| **4** | Scoring <200ms para todos los canales. Se monitorea latencia con SLA. |
| **5** | Scoring <100ms con 99.9% uptime. Soporta 10x picos. Stress tests trimestrales. Failover con degradación graceful. |

### 4.3.2 · Procesos batch complementarios

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen procesos batch de detección. Todo lo que no se detecta en real-time se pierde. |
| **2** | Se ejecutan consultas manuales ad-hoc cuando se sospecha de un patrón, pero no hay procesos batch automatizados. |
| **3** | Existen procesos batch diarios que buscan patrones de largo plazo: velocidad acumulada, patrones de beneficiario recurrente, ring detection. |
| **4** | Los procesos batch cubren tipologías que no se pueden detectar en real-time: slow-burn patterns, synthetic ID rings, colusión interna. Se ejecutan diariamente con alertas automáticas. |
| **5** | Se combinan real-time y batch en una arquitectura lambda/kappa: el real-time decide en milisegundos, el batch revalúa con contexto histórico completo y genera alertas retroactivas. Se mide la contribución de cada capa. |

### 4.3.3 · Arquitectura de decisioning

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay una arquitectura de decisioning definida. Las decisiones son manuales o automáticas sin criterios claros. |
| **2** | Las decisiones se dividen binariamente: automática (aprobado) o manual (cola de revisión). Sin matices. |
| **3** | Existe una arquitectura de 3 niveles: aprobación automática (bajo riesgo), alerta para revisión (medio riesgo), y bloqueo automático (alto riesgo). Los umbrales están documentados. |
| **4** | La arquitectura incluye decisiones intermedias: aprobación con step-up authentication, aprobación con hold temporal, y aprobación con notificación al cliente. Se mide el impacto de cada decisión. |
| **5** | La arquitectura es adaptativa: los umbrales de decisión se ajustan dinámicamente por canal, producto y hora del día. Se usa reinforcement learning para optimizar las decisiones en función de outcome real. |

## 4.4 — Gestión de Alertas y Triage

### 🔷 CORE · 4.4.1 · Proceso de triage

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de triage. Alertas en orden de llegada sin priorización. |
| **2** | Se priorizan informalmente las de mayor monto, sin criterios documentados ni SLAs. |
| **3** | Proceso documentado con criterios de priorización, asignación, y SLAs de disposición. |
| **4** | Triage automático: score de prioridad asigna alertas a colas con SLA diferenciado. Las de máxima prioridad con SLA <30 min. |
| **5** | ML de priorización ordena por probabilidad de TP × impacto financiero. Las de baja probabilidad se auto-dispositivan. Se optimiza productividad. |

### 4.4.2 · Impacto en el cliente de los falsos positivos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide el impacto de los falsos positivos en el cliente. |
| **2** | Se conocen quejas por bloqueos pero no se cuantifican ni correlacionan con el motor. |
| **3** | Se mide tasa de transacciones legítimas declinadas y se reporta mensualmente. |
| **4** | Se mide: declinaciones legítimas, NPS post-fraude, revenue perdido, tasa de contacto por FP. Se presenta al comité. |
| **5** | Modelo de impacto que cuantifica en USD el costo total de la fricción. Se usa para calibrar umbrales de detección. |

### 4.4.3 · Productividad del equipo de análisis

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide la productividad del equipo de análisis de alertas. |
| **2** | Se conoce informalmente cuántas alertas revisa cada analista, pero no se mide ni se compara. |
| **3** | Se mide: alertas por analista por día, tiempo promedio de disposición, y tasa de disposición correcta. |
| **4** | Se mide con granularidad: por analista, por tipo de alerta, por turno. Se usa para balanceo de carga, identificación de necesidades de capacitación, y planificación de headcount. |
| **5** | Se optimiza la productividad con ML: las alertas se enrutan al analista con mayor expertise en el tipo de fraude. Se usa gamification y quality scoring para incentivar accuracy, no solo volumen. |

### 4.4.4 · Categorización de disposiciones y retroalimentación

| Nivel | Descriptor |
|:---:|:---|
| **1** | Las alertas se cierran sin categorización del resultado. |
| **2** | Las alertas se cierran como 'fraude' o 'no fraude' sin subcategorización. |
| **3** | Se categorizan con al menos 5 disposiciones: fraude confirmado (por tipo), falso positivo (por razón), escalado, y pendiente. Se usa para métricas. |
| **4** | Las disposiciones alimentan directamente las métricas de performance de reglas y modelos. Se usa la razón del falso positivo para recalibrar. |
| **5** | Las disposiciones se usan como labels de reentrenamiento para modelos ML. Se ejecuta quality assurance sobre las disposiciones (doble revisión de una muestra). Se mide la tasa de error de los analistas. |

## 4.5 — Monitoreo Cross-Channel

### 🔷 CORE · 4.5.1 · Visión unificada del cliente

| Nivel | Descriptor |
|:---:|:---|
| **1** | Cada canal tiene monitoreo independiente. No se cruza información. |
| **2** | Se comparten algunas listas pero el scoring es por canal sin visión del cliente. |
| **3** | Customer-level score que agrega actividad de al menos 2 canales para el decisioning. |
| **4** | Score customer-level que integra todos los canales simultáneamente. |
| **5** | Score con features cross-channel en real-time: el modelo detecta patrones multi-canal que ningún canal detecta solo. |

### 4.5.2 · Correlación de eventos entre canales

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se correlacionan eventos entre canales. |
| **2** | Se correlacionan manualmente durante la investigación, pero no en el momento de la detección. |
| **3** | Se correlacionan al menos 3 tipos de eventos cross-canal en near-real-time (ej: cambio de clave + transferencia + cambio de dispositivo). |
| **4** | Existe un motor de correlación de eventos que monitorea secuencias cross-canal en tiempo real. Se tienen al menos 10 escenarios de correlación activos. |
| **5** | El motor de correlación usa event-driven architecture: cada evento del cliente se evalúa en contexto de su actividad en todos los canales en los últimos 7 días. Los modelos ML consumen features de correlación como input. |

## 4.6 — Analítica de Red / Grafos

### 4.6.1 · Capacidad de análisis de grafos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se usa análisis de grafos para detección. |
| **2** | Link analysis manual para investigaciones puntuales, no parte del proceso de detección. |
| **3** | Se usa para al menos un caso de uso: mule networks o synthetic ID rings. Herramienta dedicada. |
| **4** | Uso sistemático: mule networks, synthetic ID rings, colusión interna, beneficiario compartido. Integrado con alertas. |
| **5** | Graph analytics en near-real-time como feature input para modelos ML. Graph neural networks para detección de comunidades. |

### 4.6.2 · Herramientas de visualización de grafos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se usan herramientas de visualización de grafos. |
| **2** | Se usan herramientas genéricas (Excel, Gephi) para visualización ad-hoc durante investigaciones. |
| **3** | Se usa una herramienta dedicada de visualización de grafos (Linkurious, i2 Analyst's Notebook, o similar) integrada con los datos de fraude. |
| **4** | La herramienta está integrada con el case management: el investigador puede explorar la red de relaciones del sujeto directamente desde el caso. |
| **5** | La visualización de grafos se genera automáticamente para cada alerta de alto riesgo: el analista ve la red de relaciones del cliente, beneficiarios frecuentes, dispositivos compartidos, y anomalías de red antes de abrir el caso. |

---

# P5: Investigación, Respuesta y Recuperación

*Evalúa las capacidades de investigación, respuesta ante incidentes y recuperación de pérdidas. Anclado en COSO/ACFE Principio 4.*

**7 sub-dimensiones · 19 componentes · 6 en Screening Core**

## 5.1 — Case Management y Herramientas

### 🔷 CORE · 5.1.1 · Herramienta de case management

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los casos se gestionan por email, spreadsheets o notas manuales. Sin herramienta dedicada. |
| **2** | Se usa ticketing genérico (ServiceNow, Jira) adaptado, sin flujos ni campos especializados de fraude. |
| **3** | Herramienta dedicada (NICE Actimize, Verafin, o similar) con workflows por tipo de caso y campos específicos. |
| **4** | Integrada con motor de detección (alertas → casos automáticamente), con sistemas core (consulta/bloqueo desde el caso), y reportes automáticos. |
| **5** | Full integration: recibe alertas, enriquece con datos del cliente, sugiere tipología y acciones basándose en histórico, cierra el loop con detección (feedback automático). |

### 5.1.2 · Workflow por tipo de caso

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen workflows diferenciados. Todos siguen el mismo proceso genérico. |
| **2** | Informalmente se sabe que un ATO se investiga diferente, pero sin documentación. |
| **3** | Workflows documentados para al menos 3 tipos: transaccional, ATO, y fraude interno. Cada uno con pasos, SLAs y escalamiento. |
| **4** | Workflows para 5+ tipos con SLAs diferenciados, checklists de evidencia, y criterios de escalamiento. Se mide cumplimiento de SLA. |
| **5** | Workflows dinámicos: el sistema adapta pasos según complejidad (simple: fast-track <2h; complejo: investigador senior). Se mide time-to-resolution y recovery rate por tipo. |

### 5.1.3 · Asignación de casos (automática vs. manual)

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los casos se asignan manualmente por un supervisor. No hay criterios documentados. |
| **2** | Se asignan por rotación o disponibilidad, sin considerar complejidad ni expertise del analista. |
| **3** | La asignación usa al menos 2 criterios: tipo de fraude y carga de trabajo del analista. Documentado. |
| **4** | La asignación es automática basada en tipo de fraude, complejidad, expertise del analista, y carga actual. Se balancea la carga en tiempo real. |
| **5** | La asignación usa ML: predice la complejidad del caso y lo asigna al analista con mayor probabilidad de resolución rápida y correcta. Se mide la eficiencia de la asignación. |

## 5.2 — Metodología de Investigación

### 🔷 CORE · 5.2.1 · Metodología formal documentada

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe metodología. Cada investigador sigue su propio proceso. |
| **2** | Proceso informal transmitido verbalmente, no documentado ni auditado. |
| **3** | Metodología documentada con: pasos, criterios de tipificación, plantillas de informe, checklist de evidencia. |
| **4** | Alineada con estándares ACFE. Incluye cadena de custodia, criterios de escalamiento, y revisión periódica. |
| **5** | Se testea con casos simulados (tabletop exercises) anualmente. Se actualiza con lecciones aprendidas. Los investigadores se evalúan con métricas de calidad. |

### 5.2.2 · Competencia de investigadores

| Nivel | Descriptor |
|:---:|:---|
| **1** | Sin formación específica en investigación de fraude. |
| **2** | Experiencia práctica pero sin certificaciones ni capacitación formal reciente. |
| **3** | Al menos 50% del equipo tiene capacitación formal. Se aspira a certificación CFE o equivalente. |
| **4** | Al menos 50% tiene CFE o CAMS. Plan de capacitación continua con presupuesto. |
| **5** | Certificaciones múltiples (CFE, CAMS, CISA), conferencias de industria, laboratorio forense digital. Peer reviews de investigaciones. |

### 5.2.3 · Protocolos de manejo y preservación de evidencia

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen protocolos de manejo de evidencia. La evidencia se almacena ad-hoc. |
| **2** | Se guarda evidencia en carpetas compartidas o emails, sin cadena de custodia formal. |
| **3** | Existe un protocolo documentado de cadena de custodia: quién recopiló, cuándo, cómo se preservó, y dónde se almacena. Se aplica a casos significativos. |
| **4** | El protocolo se aplica a todos los casos. La evidencia se almacena en un repositorio seguro con control de acceso y audit trail. Se sigue para casos que pueden escalar a law enforcement. |
| **5** | La preservación de evidencia cumple con estándares forenses: hash de integridad de archivos digitales, preservación de metadata, y documentación que soporta admisibilidad en proceso judicial. |

### 5.2.4 · Criterios de escalamiento y tipificación de casos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen criterios de escalamiento. Los casos se manejan todos al mismo nivel. |
| **2** | Se escalan informalmente los casos de alto monto o alta visibilidad, sin criterios documentados. |
| **3** | Existen criterios documentados de escalamiento: por monto (>$X), por tipo (fraude interno, PEP, empleado), por complejidad, y por impacto reputacional. |
| **4** | Los criterios incluyen niveles de escalamiento (analista → supervisor → head → comité → Board) con tiempos máximos por nivel. Se mide el cumplimiento. |
| **5** | El sistema de case management aplica automáticamente los criterios de escalamiento. Los casos que no se resuelven dentro del SLA se escalan automáticamente al siguiente nivel. |

## 5.3 — Recuperación y Mitigación de Pérdidas

### 🔷 CORE · 5.3.1 · Proceso de recovery

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de recovery. Las pérdidas se asumen completamente. |
| **2** | Se ejecutan chargebacks (tarjetas) pero no hay recovery para otros tipos. |
| **3** | Proceso incluye: chargebacks, recuperación judicial, y seguro de fraude. Se trackea recovery rate. |
| **4** | Recovery rate por tipo y canal. Se analiza mensualmente. Equipo o función dedicada. |
| **5** | Modelo de decisión: para cada caso se evalúa costo de recuperación vs. probabilidad de éxito. Se optimiza ROI del esfuerzo. |

### 🔷 CORE · 5.3.2 · Contabilización de pérdidas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay metodología clara. Los números no son confiables. |
| **2** | Se registran en GL codes genéricos. No se distingue gross loss, recovered, y net loss. |
| **3** | GL codes específicos de fraude. Se registra gross, recovered, y net loss. Se reporta mensualmente. |
| **4** | Se diferencia por tipo, canal y producto. Se registra fecha de detección vs. ocurrencia. Conciliación trimestral con finanzas. |
| **5** | Metodología completa: fraud loss + costo operativo + costo de reposición + costo de fricción = 'costo total del fraude'. |

### 5.3.3 · Decisiones de write-off

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso formal de write-off de pérdidas de fraude. Las pérdidas quedan indefinidamente como pendientes. |
| **2** | Las decisiones de write-off se toman ad-hoc por finanzas, sin input del área de fraude. |
| **3** | Existe un proceso documentado: umbrales de write-off, autoridad de aprobación por monto, y documentación requerida. Fraude participa en la decisión. |
| **4** | El proceso incluye análisis de recuperabilidad antes del write-off. Se documenta la justificación. Se reporta el volumen de write-offs al comité de fraude mensualmente. |
| **5** | Se usa un modelo de decisión que evalúa la probabilidad de recuperación vs. el costo de perseguir. Los write-offs se analizan por tipo y canal para identificar patrones sistémicos. |

## 5.4 — Comunicación y Experiencia del Cliente

### 🔷 CORE · 5.4.1 · Protocolos de notificación al cliente

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen protocolos. El cliente se entera cuando ve la transacción o el bloqueo. |
| **2** | Se notifica por el canal disponible, sin scripting ni tiempos definidos. |
| **3** | Protocolos documentados: tiempos (<X horas), canales (SMS, email, push, llamada), y scripting. |
| **4** | Diferenciados por tipo de fraude y segmento. Se mide NPS post-notificación y tiempo de resolución percibido. |
| **5** | Notificación proactiva y personalizada en real-time por canal preferido, con información específica y timeline. Se mide customer effort score. |

### 5.4.2 · Proceso de re-emisión y restitución

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso estandarizado de re-emisión de credenciales o restitución de fondos post-fraude. |
| **2** | Se re-emiten tarjetas y se restituyen fondos, pero el proceso es manual y los tiempos son inconsistentes. |
| **3** | Proceso documentado con SLAs: re-emisión de tarjeta <48h, crédito provisional <24h, y restauración de credenciales digitales <4h. |
| **4** | Los SLAs se miden y se reportan. Se diferencia el proceso por segmento de cliente (retail, commercial, wealth). Se mide la satisfacción del cliente post-restitución. |
| **5** | Proceso automatizado: el sistema ejecuta la restitución y re-emisión automáticamente al confirmar el fraude. Se minimiza el esfuerzo del cliente. Se mide el tiempo total desde detección hasta resolución completa. |

### 5.4.3 · Políticas de limitación de responsabilidad del cliente

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen políticas documentadas sobre la responsabilidad del cliente en casos de fraude. |
| **2** | Se aplica la regulación mínima (ej: Reg E) pero no hay una política propia del banco. |
| **3** | Existe una política documentada que define la responsabilidad del cliente por tipo de fraude y canal, alineada con regulación (Reg E, Reg Z, o equivalente local). |
| **4** | La política se comunica proactivamente al cliente. Se diferencia por tipo de fraude (ATO vs. APP fraud vs. fraude con tarjeta). Se revisa anualmente. |
| **5** | La política incluye un framework de decisión que evalúa la responsabilidad caso a caso basándose en: nivel de negligencia del cliente, controles que el banco debió aplicar, y precedentes regulatorios. Se mide la consistencia de las decisiones. |

## 5.5 — Reporte Regulatorio

### 5.5.1 · Proceso de SARs relacionados con fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de SARs para fraude, o fraude no está involucrado en el filing. |
| **2** | Fraude refiere a compliance para SAR, sin criterios claros ni tracking. |
| **3** | Criterios documentados de referral. Se trackea volumen de referrals y outcome. |
| **4** | SLAs de referral (<24h para urgentes), feedback de compliance, y métricas de calidad. |
| **5** | Proceso automatizado: los casos que cumplen criterios se refieren automáticamente con evidencia. Se mide tasa de aceptación y time-to-file. |

### 5.5.2 · Currency Transaction Reports (CTRs)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se presentan CTRs relacionados con fraude, o el equipo de fraude no está involucrado en el proceso. |
| **2** | Los CTRs se procesan por compliance/AML sin input del equipo de fraude. |
| **3** | Fraude refiere a compliance las transacciones que podrían requerir CTR cuando se detectan patrones de structuring. Se documenta. |
| **4** | Existe un proceso integrado: el motor de fraude identifica automáticamente patrones de structuring y los refiere a compliance para CTR con la evidencia correspondiente. |
| **5** | El monitoreo de structuring está integrado entre fraude y AML: los modelos comparten features y las alertas se evalúan conjuntamente. Se mide la tasa de detección de structuring. |

### 5.5.3 · Reporte a redes de pago

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se reportan casos de fraude a las redes de pago (Visa, Mastercard) más allá de los chargebacks. |
| **2** | Se procesan chargebacks pero no se comparte inteligencia de fraude con las redes. |
| **3** | Se participa en los programas de reporte de las redes (Visa VALE, MC Safety Net). Se reportan merchants de alto riesgo y patrones de fraude. |
| **4** | Se consume y se contribuye activamente a la inteligencia de las redes. Se usan los datos de red para calibrar reglas y modelos. Se reportan BINs comprometidos. |
| **5** | Se tiene un equipo o función dedicada a la relación con redes de pago. Se participa en pilotos de nuevas herramientas de la red. Se mide el impacto de la inteligencia de red en la detección. |

## 5.6 — Lecciones Aprendidas y Feedback Loop

### 5.6.1 · Proceso de post-mortem

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se hacen post-mortems. Los casos se cierran sin revisión. |
| **2** | Solo para incidentes de muy alto impacto, de forma ad-hoc. |
| **3** | Proceso documentado para casos >$X o tipología nueva. Incluye: qué pasó, por qué no se detectó, qué cambiar. |
| **4** | Template estándar, ejecución dentro de 5 días, action items con owners y deadlines trackeados en comité. |
| **5** | Alimentan automáticamente inventario de esquemas, equipo de reglas/modelos, y programa de controles. Se mide time-to-remediate. |

### 🔷 CORE · 5.6.2 · Retroalimentación a detección

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe feedback de investigación a detección. |
| **2** | Informalmente se comentan nuevos patrones, sin proceso. |
| **3** | Proceso documentado: investigador completa formulario de feedback, equipo de reglas evalúa. |
| **4** | El feedback es sistémico: cada caso cerrado genera registro de features que alimenta desarrollo de modelos/reglas. Se mide lead time. |
| **5** | Feedback automático: labels de investigadores (fraud confirmed / legitimate) se inyectan al dataset de reentrenamiento. Ciclo completo cada 30 días. |

## 5.7 — Resolución de Disputas

### 5.7.1 · Procedimientos de resolución de disputas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen procedimientos formales de resolución de disputas de fraude. |
| **2** | Se resuelven caso a caso sin proceso estandarizado ni tracking de plazos. |
| **3** | Procedimientos documentados con plazos regulatorios, procesos de reembolso, y gestión de contracargos. |
| **4** | Los procedimientos incluyen SLAs por tipo de disputa, tracking de cumplimiento de plazos, y reportes de aging. |
| **5** | Resolución automatizada para disputas simples, con análisis de patrones de disputa para detectar friendly fraud. Se mide la tasa de resolución a favor del cliente vs. banco. |

---

# P6: Datos, Analítica y Tecnología

*Evalúa la infraestructura de datos, modelos, stack tecnológico e innovación que soporta el programa de fraude.*

**6 sub-dimensiones · 22 componentes · 7 en Screening Core**

## 6.1 — Calidad, Linaje y Gobernanza de Datos

### 🔷 CORE · 6.1.1 · Calidad de datos de entrada

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se mide la calidad de datos de entrada al motor de fraude. |
| **2** | Se han identificado problemas de calidad pero sin proceso de medición ni remediación. |
| **3** | Se miden al menos 3 dimensiones (completitud, exactitud, oportunidad) para datos clave. Se documenta. |
| **4** | Dashboard de calidad con umbrales de alerta. Se mide impacto de mala calidad en detección. |
| **5** | Data quality monitoring en real-time por campo. Se cuantifica impacto financiero de mala calidad. |

### 6.1.2 · Linaje de datos documentado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se conoce el linaje de los datos que alimentan el motor. |
| **2** | Se conoce la fuente principal pero no las transformaciones ni intermediarios. |
| **3** | Linaje documentado para campos principales: fuente, transformaciones, frecuencia, consumidor. |
| **4** | Linaje completo automatizado (herramienta de data lineage). Se actualiza ante cambios de esquema. |
| **5** | Linaje completo automatizado y activamente usado: ante incidente se traza a la fuente en minutos. Impact analysis pre-cambios. |

### 6.1.3 · Governance de datos para fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe governance de datos específica para fraude. |
| **2** | Se aplica la governance general del banco pero sin consideraciones específicas de fraude. |
| **3** | Existe data ownership y stewardship definido para los datasets de fraude. Diccionario de datos disponible. |
| **4** | Governance incluye procesos de remediación de calidad, aprobación de nuevos campos, y revisión periódica del diccionario. |
| **5** | Governance madura: data contracts con upstream, SLAs de calidad, y los data stewards participan en el comité de fraude. |

### 6.1.4 · Procesos de remediación de calidad de datos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen procesos de remediación cuando se identifican problemas de calidad. |
| **2** | Se remedian problemas de datos ad-hoc cuando causan errores visibles en el motor de fraude. |
| **3** | Existe un proceso documentado: identificación del problema, root cause, remediación, y validación. Se trackean los incidentes de calidad. |
| **4** | Los incidentes de calidad se clasifican por severidad, tienen SLA de remediación, y se escalan si no se resuelven a tiempo. Se mide la recurrencia. |
| **5** | Existe un programa de mejora continua de calidad de datos: se analizan patrones de incidentes, se implementan controles preventivos en los pipelines de datos, y se mide la mejora año a año. |

## 6.2 — Arquitectura de Datos e Integración

### 🔷 CORE · 6.2.1 · Repositorio de datos de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | Datos dispersos en múltiples sistemas sin repositorio centralizado. |
| **2** | Repositorio parcial (ej: base de alertas del vendor) que no consolida todas las fuentes. |
| **3** | Data warehouse o data lake que consolida alertas, investigaciones, pérdidas y reglas. Se usa para reporting. |
| **4** | Fuente de verdad: integra detección, investigación, pérdidas y recovery. Se usa para desarrollo de modelos y benchmark. |
| **5** | Data lake unificado en arquitectura moderna (cloud, lake house) con datos de fraude, AML y cyber. Feature store compartido. |

### 6.2.2 · Enriquecimiento de datos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se enriquecen los datos de transacciones con fuentes externas. |
| **2** | Al menos una fuente de enriquecimiento (geolocalización de IP o device fingerprint). |
| **3** | 3+ fuentes: device fingerprint, geolocalización, bureau, y al menos una de consortium. |
| **4** | Enriquecimiento en real-time para scoring. Se evalúa periódicamente el valor de cada fuente. |
| **5** | Stack completo: device intelligence, behavioral biometrics, email/phone risk scoring, dark web, consortium bidireccional. Se mide marginal lift de cada fuente. |

### 6.2.3 · Integración cross-channel y cross-sistema

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los datos de fraude vienen de sistemas aislados. No hay integración entre canales ni con sistemas core. |
| **2** | Hay integración parcial (ej: tarjetas + core bancario) pero canales digitales, call center u otros están desconectados. |
| **3** | Existe integración con al menos 4 fuentes: core bancario, canales digitales, tarjetas, y call center. Los datos fluyen al motor de fraude. |
| **4** | Integración completa cross-channel con latencia conocida y monitoreada. Se incluyen fuentes de open banking y APIs de terceros. |
| **5** | Integración en real-time con todas las fuentes vía event streaming (Kafka o similar). Cada evento del cliente llega al motor de fraude en <100ms independientemente del canal de origen. |

### 6.2.4 · Disponibilidad de datos real-time vs. batch

| Nivel | Descriptor |
|:---:|:---|
| **1** | Todos los datos de fraude están disponibles solo en batch (D+1 o posterior). |
| **2** | Los datos transaccionales están en near-real-time (<1h) pero los datos de contexto (perfil, historial) solo en batch. |
| **3** | Los datos transaccionales y de perfil del cliente están disponibles en real-time para el scoring. Los datos analíticos están en batch. |
| **4** | Arquitectura dual: real-time para detección (transacciones + perfil + features) y batch para analytics/reporting. Se monitorea la latencia de cada pipeline. |
| **5** | Feature store unificado que sirve features tanto en real-time (<50ms) como en batch. Se garantiza feature consistency entre training (batch) e inference (real-time). |

## 6.3 — Ciclo de Vida de Modelos ML

### 🔷 CORE · 6.3.1 · Inventario de modelos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe inventario. No se sabe cuántos modelos hay en producción. |
| **2** | Se conocen los principales informalmente pero sin inventario formal con metadata. |
| **3** | Inventario formal con: nombre, propósito, tipo, fecha de deployment, owner, y estado. |
| **4** | Además: performance metrics actuales, fecha de última validación, tiering, y próxima validación programada. |
| **5** | Model registry automatizado: se actualiza en cada deployment, integra métricas de producción en real-time, genera alertas de vencimiento. Se audita anualmente. |

### 6.3.2 · Model risk tiering

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se clasifican los modelos por nivel de riesgo. |
| **2** | Se reconoce informalmente que algunos son más críticos, pero sin clasificación formal. |
| **3** | Clasificados en al menos 3 tiers (alto, medio, bajo) basados en impacto financiero y alcance. |
| **4** | El tiering determina: frecuencia de validación, profundidad de documentación, nivel de aprobación, frecuencia de monitoring. |
| **5** | Se calibra anualmente con datos de impacto real. Se usa para priorizar recursos. Tier-1 tiene validación anual independiente obligatoria. |

### 6.3.3 · Proceso de desarrollo estandarizado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso estandarizado. Cada data scientist desarrolla modelos a su manera. |
| **2** | Hay una guía informal pero no se sigue consistentemente ni se audita. |
| **3** | Proceso documentado con etapas: problem statement, data exploration, feature engineering, model selection, training, validation, documentation, deployment. |
| **4** | El proceso incluye peer review obligatorio, checklist de documentación (alineado con OCC/SR 11-7), testing con datos out-of-time, y sign-off de governance antes de producción. |
| **5** | MLOps pipeline automatizado: version control de datos y código, automated training, automated testing (performance, bias, stability), automated documentation, y CI/CD para deployment. |

### 🔷 CORE · 6.3.4 · Monitoreo continuo de modelos en producción

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se monitorean los modelos una vez desplegados. |
| **2** | Se revisa performance manualmente de forma esporádica. |
| **3** | Se monitorea mensualmente: AUC, KS, detection rate, FP rate por modelo. |
| **4** | Monitoreo automatizado con alertas: feature drift (PSI >0.1), performance degradation (AUC drop >X%), data quality, y score distribution changes. |
| **5** | Framework completo de model monitoring con automated retraining triggers, A/B testing continuo, concept drift detection, y dashboards de health por modelo. Se ejecuta backtesting mensual automatizado. |

### 6.3.5 · Proceso de retiro/reemplazo de modelos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de retiro. Los modelos obsoletos quedan en producción indefinidamente. |
| **2** | Se retiran modelos ad-hoc cuando se reemplazan, pero sin proceso formal ni documentación. |
| **3** | Existe un proceso documentado de retiro: criterios de retiro (performance degradation, obsolescencia), aprobación, plan de transición, y documentación del retiro. |
| **4** | El retiro requiere aprobación de governance, un período de shadow scoring paralelo con el modelo sucesor, y validación de que el reemplazo no degrada la detección. |
| **5** | El ciclo de vida completo (desarrollo → deployment → monitoring → retiro) está gestionado en el model registry. Se mantiene un archive de modelos retirados con su performance histórica para auditoría. |

## 6.4 — Stack Tecnológico y Gestión de Vendors

### 🔷 CORE · 6.4.1 · Inventario de herramientas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe inventario de herramientas de fraude. |
| **2** | Se conocen las principales pero sin inventario formal con licenciamiento y soporte. |
| **3** | Inventario formal: herramienta, vendor, propósito, licencia, soporte, costo anual, fecha de renovación. |
| **4** | Incluye evaluación: performance, satisfacción del usuario, gaps funcionales, alternativas evaluadas. |
| **5** | Evaluación anual de vendors: performance vs. SLA, roadmap, costo-beneficio, benchmark vs. alternativas. |

### 6.4.2 · Riesgo de concentración de vendor

| Nivel | Descriptor |
|:---:|:---|
| **1** | La dependencia de vendors no se evalúa como riesgo. |
| **2** | Se reconoce dependencia del vendor principal pero sin evaluación de alternativas. |
| **3** | Se ha evaluado el riesgo y existe plan de contingencia para el vendor principal. |
| **4** | Para cada vendor crítico: plan de contingencia, portabilidad evaluada, vendor alternativo identificado. |
| **5** | Vendor stress test anual. Contratos con cláusulas de portabilidad y código fuente en escrow. |

### 6.4.3 · Gestión de contratos y SLAs con vendors de tecnología

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se gestionan activamente los contratos con vendors de fraude. |
| **2** | Se renuevan contratos automáticamente sin evaluación de performance ni renegociación. |
| **3** | Los contratos tienen SLAs de performance documentados (uptime, latencia, soporte). Se revisan en cada renovación. |
| **4** | Se mide el cumplimiento de SLAs mensualmente. Los incumplimientos se escalan formalmente. Se negocia basándose en performance real. |
| **5** | Se usa un framework de evaluación de vendors que incluye: performance vs. SLA, roadmap alignment, costo total de ownership, riesgo de concentración, y benchmark vs. alternativas. Se presenta al comité anualmente. |

## 6.5 — Infraestructura, Escalabilidad y Performance

### 🔷 CORE · 6.5.1 · Capacidad de escalar

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se ha evaluado la capacidad de escalar ante picos. |
| **2** | Se sabe que hay limitaciones pero sin cuantificación ni pruebas. |
| **3** | Load testing ejecutado al menos una vez. Se conoce throughput máximo. |
| **4** | Load tests trimestrales. Soporta 2x pico normal. Se monitorea capacidad con alertas. |
| **5** | Stress tests 5–10x volumen normal. Auto-scaling configurado. Capacity planning a 12 meses. |

### 🔷 CORE · 6.5.2 · Disponibilidad y disaster recovery

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se conoce RTO/RPO. No hay DR específico para el motor de fraude. |
| **2** | Se sabe que depende de la infraestructura general, pero no tiene DR propio. |
| **3** | Plan de DR con RTO y RPO definidos. Documentado. |
| **4** | DR testeado anualmente. RTO <4 horas. Failover automático o semi-automático. |
| **5** | RTO <1 hora, RPO <15 minutos. Failover automático probado trimestralmente. Modo degradado (reglas básicas) disponible. |

### 6.5.3 · Monitoreo de performance en producción (latencia, throughput)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se monitorea la performance del motor de fraude en producción. |
| **2** | Se revisa performance cuando hay quejas o incidentes de lentitud. |
| **3** | Se monitorean métricas clave: latencia P50/P95/P99, throughput (TPS), y uptime. Se tienen umbrales de alerta. |
| **4** | Se monitorea en real-time con dashboards. Las alertas de performance se escalan automáticamente. Se ejecutan análisis de tendencia para capacity planning. |
| **5** | Se tienen SLOs (Service Level Objectives) por canal: ej. P99 latencia <100ms para PIX, <200ms para tarjetas. Se mide el error budget. Se ejecutan performance tests antes de cada release. |

## 6.6 — Innovación y Tecnologías Emergentes

### 6.6.1 · Proceso de evaluación de nuevas tecnologías

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe proceso de evaluación de nuevas tecnologías para fraude. |
| **2** | Se evalúan ad-hoc cuando un vendor las presenta. |
| **3** | Proceso documentado: identificación, evaluación de fit con POC, business case. |
| **4** | Fraud lab o sandbox con datos reales anonimizados. Al menos 2 POCs/año. |
| **5** | Roadmap de innovación con presupuesto. Se evalúan behavioral biometrics, GenAI, graph neural networks. Se mide ROI de cada POC. |

### 6.6.2 · PCI y cifrado

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se han evaluado los controles de cifrado de datos de fraude en tránsito y en reposo. |
| **2** | Se depende del cifrado general del banco sin validación específica para datos de fraude. |
| **3** | Los datos de fraude sensibles (PAN, tokens) están cifrados en tránsito y en reposo conforme a PCI DSS. |
| **4** | Se audita el cumplimiento PCI anualmente. Los controles de cifrado son específicos para el motor de fraude y se testean. |
| **5** | Cifrado end-to-end con gestión de llaves dedicada, tokenización de datos sensibles en el data lake de fraude, y auditoría PCI continua. |

### 6.6.3 · Seguimiento de tendencias tecnológicas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se hace seguimiento de tendencias tecnológicas en fraude. |
| **2** | Se asiste a alguna conferencia o webinar, pero sin proceso de seguimiento. |
| **3** | Se mantiene un radar de tecnologías emergentes para fraude, actualizado semestralmente, con evaluación de relevancia para el banco. |
| **4** | El radar se presenta al comité de fraude. Se priorizan al menos 2 tecnologías por año para evaluación profunda (POC o pilot). |
| **5** | Se tiene un innovation council que incluye fraude, tecnología y data science. Se evalúan: GenAI adversarial (deepfakes, voice cloning), behavioral biometrics, graph ML, y privacy-enhancing technologies (PETs). Se asigna presupuesto de innovación. |

---

# P7: Gestión de Desempeño, Reporte y Mejora Continua

*Evalúa la medición de resultados, reporting, benchmarking y evolución del programa. Anclado en COSO/ACFE Principio 5.*

**5 sub-dimensiones · 17 componentes · 5 en Screening Core**

## 7.1 — Framework de KRIs, KPIs y Métricas

### 🔷 CORE · 7.1.1 · Set de métricas definidas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe set definido de métricas. Se reportan números ad-hoc. |
| **2** | Se miden 1–2 métricas básicas (pérdidas totales y número de casos) sin formalización. |
| **3** | Set documentado de al menos 10 métricas: fraud loss rate, detection rate, FP rate, time-to-detect, time-to-resolve, recovery rate, etc. |
| **4** | Cubren 4 dimensiones: operativas, financieras, de cliente y cross-funcionales. Cada métrica con definición, fórmula, fuente, frecuencia, owner y umbral. |
| **5** | Dashboard automatizado actualizado diariamente. Se usan para gestión operativa. Revisión de relevancia anual. |

### 🔷 CORE · 7.1.2 · Traducción del riesgo en dinero

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se cuantifica el impacto económico del programa. |
| **2** | Se reporta pérdida total pero sin conexión con ROI de controles ni impacto al cliente. |
| **3** | Se cuantifica: gross loss, net loss, y costo operativo del programa. |
| **4** | Además: pérdida evitada, costo de falsos positivos, y ROI del programa. |
| **5** | Modelo económico que traduce cada punto de madurez en impacto USD. Se presenta al CFO y Board con lenguaje financiero. |

### 7.1.3 · KPIs operativos de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se miden KPIs operativos de fraude. |
| **2** | Se mide solo el volumen de alertas y casos, sin desglose ni benchmark. |
| **3** | Se miden al menos: fraud loss rate (bps), detection rate, false positive rate, time-to-detect, y time-to-resolve. Con definición y fuente documentadas. |
| **4** | Los KPIs operativos se desglosan por canal, producto, tipo de fraude, y turno. Se establecen targets y se mide la desviación mensualmente. |
| **5** | Los KPIs operativos se monitorean en real-time con alertas automáticas ante desviaciones. Se usa SPC (Statistical Process Control) para distinguir variación normal de señales de alerta. |

### 7.1.4 · KPIs financieros de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se miden KPIs financieros del programa de fraude. |
| **2** | Se reporta la pérdida total de fraude (gross loss), pero sin desglose ni conexión con el programa. |
| **3** | Se miden: gross loss, net loss (post-recovery), costo operativo del programa (personal + tecnología + vendors), y pérdida evitada. |
| **4** | Se calcula el ROI del programa: (pérdida evitada - costo del programa) / costo del programa. Se reporta al CFO trimestralmente. |
| **5** | Se usa un modelo de costo total del fraude que incluye: fraud loss + costo operativo + costo de fricción (revenue perdido por FP) + costo reputacional. Se traduce cada punto de madurez en impacto USD. |

### 7.1.5 · KPIs de cliente y experiencia

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se miden KPIs de impacto al cliente del programa de fraude. |
| **2** | Se conocen las quejas de clientes por bloqueos, pero no se cuantifican como KPI del programa. |
| **3** | Se miden: transacciones legítimas declinadas (%), tasa de contacto por falso positivo, y NPS post-evento de fraude. |
| **4** | Se mide además: customer effort score post-fraude, tiempo total de resolución percibido, y revenue perdido por declinaciones legítimas. Se presenta al comité junto con métricas de detección. |
| **5** | Se usa un modelo de lifetime value impact: se cuantifica la pérdida de LTV por cliente afectado por un falso positivo vs. la pérdida por fraude no detectado. Se usa para calibrar umbrales de detección. |

### 7.1.6 · KPIs cross-funcionales

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se miden KPIs de colaboración entre fraude y otras áreas. |
| **2** | Se conocen informalmente los tiempos de respuesta de IT o de negocio, pero no se miden. |
| **3** | Se miden al menos 2 SLAs cross-funcionales: fraude-IT (tiempo de deployment de reglas) y fraude-ops (tiempo de resolución de alertas). |
| **4** | Se miden SLAs con todas las áreas clave: IT, operaciones, compliance, negocio, y legal. Se reportan al comité de fraude mensualmente. |
| **5** | Los KPIs cross-funcionales son bidireccionales: fraude mide a IT y IT mide a fraude. Se usan para mejora continua y se vinculan con la evaluación de desempeño de los líderes. |

## 7.2 — Reporte a Management y Board

### 🔷 CORE · 7.2.1 · Frecuencia y formato de reporting

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe reporte periódico de fraude a management. |
| **2** | Reporte anual o ad-hoc, en formato de documento largo sin visualizaciones. |
| **3** | Reporte trimestral con dashboard visual, tendencias, y comparación con período anterior. |
| **4** | Reportes mensuales operativos + trimestrales ejecutivos. Dashboard interactivo, exception-based, action items. |
| **5** | Reporting continuo: dashboard real-time para operaciones, mensual para management, trimestral para Board. Se mide accionabilidad del reporte. |

### 7.2.2 · Contenido y calidad del reporte

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los reportes (si existen) contienen solo datos crudos sin análisis. |
| **2** | Los reportes muestran métricas básicas pero sin tendencias, comparación con períodos anteriores, ni action items. |
| **3** | Los reportes incluyen: métricas clave, tendencias (MoM, YoY), comparación con período anterior, top-N incidentes, y estado de iniciativas. |
| **4** | Los reportes son exception-based: destacan desviaciones vs. umbrales, incluyen root cause analysis de desviaciones, y terminan con action items asignados con deadline. |
| **5** | Los reportes son diferenciados por audiencia: operativo (diario, para el equipo), táctico (mensual, para management), estratégico (trimestral, para Board). Se mide la accionabilidad: % de action items implementados en el siguiente período. |

### 7.2.3 · Reporte de incidentes significativos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso de reporte de incidentes significativos de fraude. |
| **2** | Se reportan incidentes significativos ad-hoc, sin formato ni criterios de qué constituye 'significativo'. |
| **3** | Existen criterios documentados de incidente significativo (monto >$X, tipo, impacto reputacional) y un proceso de notificación con SLA (<24h a management, <48h a Board si aplica). |
| **4** | El reporte de incidente incluye: descripción, impacto financiero, root cause preliminary, acciones inmediatas, y plan de remediación. Se trackea hasta cierre. |
| **5** | Se ejecuta un post-incident review formal para cada incidente significativo. Los hallazgos alimentan: la evaluación de riesgo, las reglas/modelos, y la política de fraude. Se mide el time-to-remediate. |

## 7.3 — Testing Independiente y Auditoría

### 🔷 CORE · 7.3.1 · Alcance de auditoría interna

| Nivel | Descriptor |
|:---:|:---|
| **1** | Auditoría interna no cubre el programa de fraude. |
| **2** | Fraude está en el universo de auditoría pero no se ha auditado en 2+ años. |
| **3** | Se audita al menos cada 2 años con alcance definido. |
| **4** | Auditoría anual que cubre governance, detección, investigación, reporting y 3LoD. Se trackean hallazgos. |
| **5** | Auditoría continua: además de periódica, 2LoD testea controles trimestralmente. Hallazgos con aging reports y escalamiento al Board si >90 días. |

### 7.3.2 · Auditorías externas o revisiones independientes

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se han realizado auditorías externas del programa de fraude. |
| **2** | Se ha incluido fraude en el alcance de una auditoría regulatoria, pero no se ha solicitado una revisión externa voluntaria. |
| **3** | Se ha ejecutado al menos una revisión externa del programa de fraude en los últimos 3 años (consultora, firma de auditoría, o regulador). |
| **4** | Se ejecutan revisiones externas bienales. Los hallazgos se trackean y se reportan al comité de fraude y al Board. |
| **5** | Se ejecutan revisiones externas anuales que incluyen: assessment de madurez, benchmark vs. peers, y recomendaciones priorizadas. Los resultados se usan para actualizar el roadmap. |

### 7.3.3 · Tracking de hallazgos y remediación

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se trackean los hallazgos de auditoría de fraude de forma centralizada. |
| **2** | Se trackean los hallazgos de la auditoría más reciente, pero no hay un histórico ni aging report. |
| **3** | Existe un tracker centralizado con: hallazgo, severidad, owner, plan de remediación, fecha comprometida, y estado. |
| **4** | El tracker se reporta mensualmente al comité de fraude. Se mide: aging (días abierto), closure rate, y recurrencia de hallazgos. Los >90 días se escalan al Board. |
| **5** | El tracker está integrado con el sistema de auditoría del banco. Se ejecuta root cause analysis de hallazgos recurrentes. Los patrones de hallazgos alimentan la priorización del roadmap. |

## 7.4 — Benchmarking Externo Multi-Nivel

### 🔷 CORE · 7.4.1 · Benchmark por peer group

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se hace benchmark contra peers. No se conoce la posición relativa. |
| **2** | Datos anecdóticos de peers (conferencias) pero sin benchmark estructurado. |
| **3** | Se participa en al menos una encuesta de industria (ACFE, Gartner, FEBRABAN) y se comparan resultados. |
| **4** | Benchmark multi-dimensional: fraud loss rate, detection rate, FP rate, costo operativo vs. peers del mismo tamaño. |
| **5** | Benchmark multi-nivel: peers regionales, globales (G-SIBs), target regulatorio, y best-in-class por pilar. Se usa para target-setting. |

### 7.4.2 · Benchmark interno (tendencia temporal propia)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se trackea la evolución temporal de las métricas de fraude del banco. |
| **2** | Se comparan resultados vs. el año anterior, pero sin análisis de tendencia ni visualización. |
| **3** | Se mantiene un histórico de al menos 3 años de las métricas principales. Se visualiza la tendencia y se analizan los drivers de cambio. |
| **4** | El benchmark interno se desglosa por pilar, producto, canal y tipo de fraude. Se identifican áreas de mejora y de deterioro. Se presenta al comité trimestralmente. |
| **5** | Se usa análisis estadístico de tendencia (ej: control charts, regression) para distinguir variación normal de cambios estructurales. Se proyectan métricas a 12 meses y se ajustan targets. |

### 7.4.3 · Participación en encuestas y datos de industria

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se participa en encuestas de industria sobre fraude. |
| **2** | Se consumen reportes públicos de industria (ACFE Report to the Nations) pero no se participa activamente. |
| **3** | Se participa en al menos 1 encuesta de industria (ACFE, ABA, FEBRABAN, Gartner) y se comparan los resultados del banco vs. el benchmark. |
| **4** | Se participa en múltiples encuestas y se consume benchmark de vendors (FICO consortium, Actimize, Visa/MC network data). Se usan los datos para target-setting. |
| **5** | Se es contribuidor activo en la comunidad: se comparten datos (anonimizados), se participa en paneles, y se usan múltiples fuentes de benchmark para triangular la posición del banco. |

## 7.5 — Evolución del Programa y Roadmap

### 7.5.1 · Roadmap plurianual

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe roadmap. Se opera año a año sin visión de largo plazo. |
| **2** | Lista de proyectos para el año, sin dependencias, priorización ni vinculación estratégica. |
| **3** | Roadmap a 2+ años con iniciativas priorizadas, timeline, presupuesto estimado y owners. |
| **4** | Vinculado con estrategia de negocio y gap analysis del assessment. Se revisa semestralmente con comité. |
| **5** | Se gestiona como programa con PMO: tracking de avance, budget vs. actual, risk register, y beneficios realizados vs. proyectados. Se reporta al Board. |

### 7.5.2 · Gestión del cambio y comunicación de la evolución

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe gestión del cambio para las iniciativas del programa de fraude. |
| **2** | Los cambios se implementan sin plan de comunicación ni gestión de impacto. |
| **3** | Existe un plan de comunicación para cambios mayores del programa. Se notifica a las áreas impactadas con anticipación. |
| **4** | Se ejecuta gestión del cambio formal para cada iniciativa del roadmap: stakeholder analysis, plan de comunicación, capacitación, y medición de adopción. |
| **5** | Se usa un framework de change management (ej: ADKAR) para las transformaciones del programa. Se mide la adopción post-cambio y se ajusta la estrategia de comunicación basándose en feedback. |

---

# P8: Integración Cross-Funcional e Inteligencia

*Evalúa la convergencia entre fraude, ciberseguridad, AML, legal e IT. Anclado en McKinsey Fraud-Cyber convergence models.*

**5 sub-dimensiones · 14 componentes · 5 en Screening Core**

## 8.1 — Convergencia Fraude-Ciberseguridad

### 🔷 CORE · 8.1.1 · Modelo operativo actual

| Nivel | Descriptor |
|:---:|:---|
| **1** | Silos completos. No comparten información, herramientas ni procesos. |
| **2** | Reuniones esporádicas pero sin compartición sistemática de datos ni procesos conjuntos. |
| **3** | Compartición de inteligencia: alertas de cyber se refieren a fraude cuando tienen componente financiero, y viceversa. Documentado. |
| **4** | Feeds bidireccionales, reuniones semanales, y al menos 2 casos de uso compartidos (ej: ATO). |
| **5** | Equipo o función de cyber-fraud fusion con personal dedicado. Plataforma compartida, data lake, y KPIs conjuntos. |

### 8.1.2 · Compartición de inteligencia fraude-cyber

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se comparte inteligencia entre fraude y ciberseguridad. |
| **2** | Se comparten informalmente hallazgos cuando alguien considera relevante, sin proceso. |
| **3** | Existe un proceso documentado de compartición: alertas de phishing/malware se refieren a fraude, y alertas de ATO se refieren a cyber. |
| **4** | Se comparten feeds de inteligencia bidireccionales: IoCs de cyber se integran como features en el scoring de fraude, y patrones de fraude se comparten con el SOC. |
| **5** | Se tiene un threat intelligence platform compartido que correlaciona señales de fraude y cyber en tiempo real. Se mide la detección conjunta que ninguna función lograría sola. |

### 8.1.3 · Casos de uso compartidos y operaciones conjuntas

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen casos de uso compartidos entre fraude y cyber. |
| **2** | Se reconoce que ATO tiene componente de fraude y cyber, pero se investiga en silos. |
| **3** | Se han definido al menos 3 casos de uso compartidos (ej: ATO, phishing→fraude, malware→credential theft) con protocolos de coordinación. |
| **4** | Se ejecutan operaciones conjuntas para casos complejos: un investigador de fraude y uno de cyber trabajan el mismo caso. Se tienen war rooms conjuntos para incidentes. |
| **5** | Existe un equipo de cyber-fraud fusion con personal dedicado de ambas funciones. Se tienen métricas de detección conjunta y se ejecutan threat hunting exercises combinados. |

## 8.2 — Coordinación Fraude-AML/BSA

### 🔷 CORE · 8.2.1 · Compartición de alertas y datos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No comparten alertas ni datos. Sistemas y bases completamente separados. |
| **2** | Se refieren casos manualmente para SAR, sin compartición sistemática. |
| **3** | Proceso de referral documentado con criterios claros. Se comparten alertas con componente cruzado (ej: mule accounts). |
| **4** | Se comparten datos, alertas y tipologías. Comité conjunto de financial crime. Tipologías compartidas. |
| **5** | Convergencia FRAML: data lake compartido, modelos con features fraude + AML, scoring conjunto, governance unificada. |

### 8.2.2 · Tipologías compartidas y data sharing

| Nivel | Descriptor |
|:---:|:---|
| **1** | Fraude y AML no comparten tipologías ni datos. |
| **2** | Se refieren casos manualmente cuando se sospecha lavado vinculado a fraude. |
| **3** | Se comparten tipologías documentadas: mule accounts, structuring post-fraude, fraud proceeds laundering. Se documenta. |
| **4** | Existe data sharing automatizado: las alertas de fraude que involucran mule accounts se refieren automáticamente a AML con la evidencia. Se usan tipologías compartidas para calibrar modelos. |
| **5** | Data lake compartido de financial crime: los modelos de fraude y AML consumen features comunes. Se ejecutan modelos FRAML que detectan patrones que ninguna función detecta sola. |

### 8.2.3 · Comité conjunto de financial crime

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un espacio conjunto entre fraude y AML. |
| **2** | Se tienen reuniones ad-hoc cuando surge un caso cruzado. |
| **3** | Existe una reunión mensual conjunta fraude-AML para revisar casos cruzados, compartir inteligencia, y coordinar acciones. |
| **4** | Existe un comité formal de financial crime que incluye fraude, AML, compliance, y cyber. Con charter, actas, y action items tracked. |
| **5** | El comité de financial crime tiene poder de decisión sobre la estrategia integrada de financial crime. Se reporta al Board como una función unificada. |

## 8.3 — Alineación Fraude-Legal y Compliance

### 🔷 CORE · 8.3.1 · Marco legal para acción de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe coordinación con Legal para casos de fraude. |
| **2** | Se involucra a Legal solo en casos de muy alto impacto, reactivamente. |
| **3** | Protocolo documentado de cuándo involucrar a Legal con umbrales y pasos a seguir. |
| **4** | Legal participa en comité. Marco de decisión para: denuncia penal, acción civil, recovery judicial, reporte regulatorio. Se trackean outcomes. |
| **5** | Playbook de acciones legales por tipo con análisis costo-beneficio. Se mide recovery legal. Legal participa en diseño de controles para admisibilidad de evidencia. |

### 8.3.2 · Compliance review del programa de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | Compliance no revisa el programa de fraude. |
| **2** | Compliance revisa aspectos regulatorios cuando hay una auditoría, pero no de forma proactiva. |
| **3** | Compliance ejecuta una revisión anual del programa de fraude para validar cumplimiento regulatorio. |
| **4** | La revisión de compliance incluye: mapeo de requisitos regulatorios, testing de controles clave, y recomendaciones. Los hallazgos se trackean. |
| **5** | Compliance participa como 2LoD activa: ejecuta challenge independiente de las decisiones de fraude, valida la adherencia a la política, y reporta al Board su assessment independiente. |

## 8.4 — Alineación Fraude-IT/Tecnología

### 🔷 CORE · 8.4.1 · Fraud by design en desarrollo de productos

| Nivel | Descriptor |
|:---:|:---|
| **1** | IT/Producto no involucra a fraude en desarrollo de productos digitales. |
| **2** | Fraude se involucra después del diseño, generalmente en testing o post-lanzamiento. |
| **3** | Fraude participa en fase de requerimientos. Se documenta assessment pre-lanzamiento. |
| **4** | Checklist de 'fraud by design' en cada sprint/release. Es un gate obligatorio. |
| **5** | Fraude embebido en equipo de producto (embedded SME). Controles como parte del producto. Se mide fraude a 90 días post-lanzamiento. |

### 8.4.2 · SLAs de IT para soporte del motor de fraude

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existen SLAs de IT para el soporte del motor de fraude. |
| **2** | IT soporta el motor de fraude 'best effort', sin SLAs formales. |
| **3** | Existen SLAs documentados: tiempo de deployment de reglas (<24h urgente, <5 días normal), soporte de incidentes (P1 <1h, P2 <4h), y disponibilidad (99.9%). |
| **4** | Los SLAs se miden mensualmente y se reportan al comité de fraude. Los incumplimientos se escalan formalmente. |
| **5** | Los SLAs incluyen: deployment pipeline automatizado (CI/CD para reglas y modelos), monitoring proactivo con alertas a IT y fraude simultáneamente, y postmortem conjunto para cada incidente P1. |

### 8.4.3 · Participación de fraude en evaluación de nuevas tecnologías

| Nivel | Descriptor |
|:---:|:---|
| **1** | Fraude no participa en la evaluación de nuevas tecnologías o canales del banco. |
| **2** | Fraude es notificado después de que se selecciona una nueva tecnología, sin poder de input. |
| **3** | Fraude participa en el proceso de evaluación de nuevas tecnologías que impactan canales de pago o acceso a cuentas. |
| **4** | Fraude tiene un checklist de evaluación de riesgo que se aplica a cada nueva tecnología o canal. Es un gate obligatorio antes de implementación. |
| **5** | Fraude tiene un 'technology risk radar' que evalúa proactivamente el riesgo de fraude de tecnologías emergentes (biometría, open banking APIs, IoT payments) antes de que el banco las adopte. |

## 8.5 — Inteligencia Externa y Compartición de Información

### 🔷 CORE · 8.5.1 · Participación en consorcios

| Nivel | Descriptor |
|:---:|:---|
| **1** | No participa en consorcios de intercambio de información. |
| **2** | Consume información de una fuente externa pero no participa activamente. |
| **3** | Participa en al menos 1 consorcio (FS-ISAC, consortium del vendor, asociación local) y consume activamente. |
| **4** | Participa y contribuye: comparte datos anonimizados, participa en grupos de trabajo. |
| **5** | Contribuidor activo en múltiples consorcios. Se mide valor recibido vs. aportado. La inteligencia alimenta directamente reglas y modelos. |

### 8.5.2 · Relación con law enforcement

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe relación formal con law enforcement para fraude. |
| **2** | Se contacta solo ante casos de muy alto impacto, ad-hoc. |
| **3** | Relación documentada con al menos una agencia, con contactos y protocolo de comunicación. |
| **4** | Relaciones con múltiples agencias. Referrals regulares con tracking de outcomes. Participación en task forces. |
| **5** | Relación bidireccional activa: el banco comparte inteligencia proactivamente, law enforcement comparte alertas tempranas. Se miden outcomes (arrestos, recuperaciones). |

### 8.5.3 · Contribución activa vs. consumo pasivo de inteligencia

| Nivel | Descriptor |
|:---:|:---|
| **1** | El banco solo consume inteligencia. No contribuye a la comunidad. |
| **2** | El banco comparte información mínima requerida (ej: chargebacks obligatorios a la red). |
| **3** | El banco contribuye datos anonimizados a al menos un consorcio y participa en grupos de trabajo de la industria. |
| **4** | El banco es reconocido como contribuidor activo: lidera o co-lidera grupos de trabajo, presenta en conferencias de industria, y comparte inteligencia proactivamente. |
| **5** | El banco opera un programa de contribución estructurado: mide el ratio contribución/consumo, tiene un budget de comunidad, y sus contribuciones han generado mejoras documentadas en la detección de la industria. |

---

## Resumen Final

| Métrica | Valor |
|:---|:---|
| Pilares | 9 |
| Sub-dimensiones | 49 |
| Componentes (Deep Dive) | 175 |
| Componentes (Screening Core) | 61 |
| Descriptores únicos | 875 |
| Frameworks de referencia | 7 |

---

*FCMA v2.0 — Financial Crime Maturity Assessment — Módulo A: Fraud Risk Management Program*
*© 2026 — Todos los derechos reservados — Documento Confidencial*
