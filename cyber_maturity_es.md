# Cyber Maturity Assessment (CMA) — v0.1 (Pilares 1–3)

*Modelo de madurez de ciberseguridad para banca de talla mundial. Esqueleto anclado en NIST CSF 2.0 (dominio público); síntesis original informada por ISO 27001/27002, FFIEC, NYDFS Part 500, DORA, MITRE ATT&CK y referencias LATAM (SFC Colombia, CNBV México, BCB/CMN Brasil, SB Ecuador). Escala 1–5 donde el nivel 5 representa práctica frontera, no solo "optimizado".*

**Función CSF cubierta en estos pilares: GOVERN (GV)**

---

# P1: Gobierno, Estrategia y Apetito de Riesgo Cyber

*Capa estratégica que evalúa si el banco tiene una visión articulada de ciberseguridad alineada al negocio, supervisión efectiva del Board, un marco de políticas vivo y un apetito de riesgo cuantificado. Anclado en NIST CSF 2.0 (GV.OC, GV.RM, GV.RR, GV.PO); informado por ISO 27001 cl. 5, NYDFS 500.04, DORA art. 5.*

**2 sub-dimensiones · 5 componentes · 4 en Screening Core**

## 1.1 — Estrategia y Operating Model

### 🔷 CORE · 1.1.1 · Estrategia de ciberseguridad documentada y alineada al negocio

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un documento que articule la estrategia de ciberseguridad. Las decisiones se toman por proyecto, de forma reactiva, sin marco rector. |
| **2** | Existe una presentación o documento informal con objetivos de seguridad, pero no está aprobado por la alta dirección, no tiene vigencia definida ni vínculo explícito con la estrategia del banco. |
| **3** | Existe una estrategia de ciberseguridad formal, aprobada por un comité ejecutivo, con objetivos medibles y horizonte definido (1–3 años) y referencia al marco adoptado (ej. NIST CSF). |
| **4** | La estrategia está aprobada por el Board, se revisa al menos anualmente, incluye metas cuantitativas (cobertura de controles, reducción de exposición, MTTD/MTTR objetivo) reportadas trimestralmente, y está vinculada a la estrategia de negocio y al plan de transformación digital. |
| **5** | La estrategia es prospectiva (horizon scanning de amenazas a 3–5 años, threat modeling por línea de negocio), se actualiza ante cada cambio regulatorio, lanzamiento de producto o evento mayor, e incorpora explícitamente trayectorias frontera: zero-trust, resiliencia operacional digital y preparación criptográfica post-cuántica (PQC). Se benchmarkea contra peers Tier-1, no contra baseline. |

### 🔷 CORE · 1.1.2 · Supervisión del Board y comité especializado de ciberseguridad

| Nivel | Descriptor |
|:---:|:---|
| **1** | El Board no recibe información de ciberseguridad de forma estructurada. El tema vive en IT sin escalamiento. |
| **2** | El Board recibe reportes esporádicos de seguridad, normalmente solo tras un incidente. No hay periodicidad ni un responsable de cyber con acceso directo al Board. |
| **3** | El riesgo cyber se reporta periódicamente a un comité (típicamente el Comité de Riesgos), con un CISO o equivalente que presenta de forma recurrente. |
| **4** | Existe supervisión formal y recurrente del Board con cadencia definida; al menos un miembro del Board tiene competencia demostrable en cyber/tecnología; las decisiones quedan en acta y se da seguimiento a compromisos. |
| **5** | Existe un comité de ciberseguridad **independiente** del Comité de Riesgos, con mandato, quórum y métricas propias; el Board ejercita su rol mediante simulacros de crisis a nivel directivo (tabletop ejecutivos) y challenge sessions sobre escenarios frontera (ataque a la cadena de suministro, ransomware sistémico). La efectividad de la supervisión se evalúa y se reporta. |

## 1.2 — Políticas y Apetito de Riesgo

### 🔷 CORE · 1.2.1 · Marco de políticas de ciberseguridad

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un cuerpo de políticas de ciberseguridad. Las prácticas dependen del criterio individual de cada equipo. |
| **2** | Existen políticas dispersas que cubren solo algunos dominios (ej. contraseñas, uso aceptable), sin aprobación formal ni proceso de revisión. |
| **3** | Existe un marco de políticas enterprise-wide, aprobado por un comité ejecutivo, con jerarquía clara (política → estándar → procedimiento) y vigencia definida. Los empleados acusan recibo. |
| **4** | El marco cubre todos los dominios del modelo, está aprobado por el Board, se revisa anualmente con trigger events (nueva regulación, nuevo canal, incidente mayor), y existe una matriz de trazabilidad entre cada política y los requisitos regulatorios aplicables (US + jurisdicciones LATAM donde opera). |
| **5** | Las políticas se gestionan como controles vivos: actualización dentro de 30 días ante cambios regulatorios/tecnológicos, versionado auditable, y medición de **adherencia real** (no solo existencia) mediante control monitoring continuo. La traceability es multi-jurisdicción (ej. NYDFS 500, DORA, SFC/CNBV/BCB) y se mantiene como objeto de datos consultable, no como anexo estático. |

### 🔷 CORE · 1.2.2 · Apetito y tolerancia de riesgo cyber cuantificados

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un apetito de riesgo cyber. No se ha discutido en ningún comité. |
| **2** | El apetito se expresa de forma cualitativa ("bajo", "moderado") sin métricas, y no está aprobado por el Board. |
| **3** | El apetito está cuantificado en al menos una métrica (ej. exposición máxima aceptable, % de activos críticos sin parchear, RTO de servicios críticos) y aprobado por el Board. |
| **4** | El apetito está cuantificado por dominio y por criticidad de activo/servicio, con tolerancias, umbrales de alerta temprana y de escalamiento; la desviación vs. apetito se reporta mensualmente al comité correspondiente. |
| **5** | El apetito se calibra con datos de pérdida/exposición real, benchmark de peers y cuantificación económica del riesgo (ej. FAIR); se somete a stress testing y a escenarios adversos, y se ajusta dinámicamente. Los límites alimentan decisiones operativas automatizadas (ej. bloqueo de despliegues que excedan el umbral de exposición). |

### 1.2.3 · Roles, responsabilidades y RACI (incl. independencia del CISO)

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los roles de ciberseguridad no están definidos. No existe una figura formal responsable de la seguridad de la información. |
| **2** | Existe un responsable de seguridad informal, frecuentemente subordinado a IT, sin mandato escrito ni segregación de funciones respecto de quien opera la tecnología. |
| **3** | Existe un CISO o equivalente con rol formalmente definido y un RACI básico para las funciones principales de seguridad. |
| **4** | El CISO tiene independencia organizacional respecto de IT (no reporta a quien opera lo que debe supervisar), con línea de reporte al Board o a un C-level de riesgo; el RACI cubre todos los dominios y está alineado al modelo de tres líneas de defensa. |
| **5** | La estructura está validada externamente, con segregación de funciones probada, plan de sucesión para roles críticos, y métricas de cobertura/capacidad del equipo (skills gap, ratio de cobertura 24/7) que se gestionan activamente. Los roles se ajustan ante nuevas superficies (ej. responsable de seguridad cloud, owner de resiliencia operacional digital). |

---

# P2: Cumplimiento, Riesgo y Aseguramiento

*Evalúa la disciplina de gestión de riesgo cyber (cómo se identifica, mide y reporta), la trazabilidad regulatoria multi-jurisdicción y la fortaleza del aseguramiento independiente. Es la bisagra entre gobierno y operación. Anclado en NIST CSF 2.0 (GV.RM, GV.OV, ID.RA); informado por ISO 27005, FFIEC IT Handbook, NYDFS 500.02/500.06, DORA cap. II.*

**2 sub-dimensiones · 5 componentes · 4 en Screening Core**

## 2.1 — Gestión de Riesgo Cyber

### 🔷 CORE · 2.1.1 · Metodología de risk assessment de ciberseguridad

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe una metodología de evaluación de riesgo cyber. Los riesgos se atienden cuando se materializan. |
| **2** | Se hacen evaluaciones puntuales y aisladas (ej. solo ante una auditoría o un proyecto), sin metodología consistente ni inventario de riesgos. |
| **3** | Existe una metodología documentada de risk assessment, con escala definida (probabilidad × impacto), aplicada periódicamente sobre activos/procesos críticos, y un registro de riesgos mantenido. |
| **4** | La metodología es enterprise-wide, integra riesgo inherente y residual, vincula cada riesgo a controles y owners, se ejecuta con cadencia definida más triggers por cambio, y los resultados alimentan la priorización de inversión y el reporte al Board. |
| **5** | La cuantificación es económica (ej. FAIR / pérdida esperada en USD), informada por threat intelligence y modelado de escenarios (incl. ataques a la cadena de suministro y eventos sistémicos); el risk assessment es continuo —no anual— alimentado por telemetría de exposición en near-real-time, y se valida contra la realidad mediante pruebas threat-led (red team, purple team). |

### 🔷 CORE · 2.1.2 · KRIs, métricas y reporting al Board

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se miden indicadores de riesgo cyber. No hay reporting estructurado. |
| **2** | Se reportan métricas operativas sueltas (ej. cantidad de incidentes, parches aplicados) sin contexto de riesgo ni umbrales. |
| **3** | Existe un set de KRIs definido, con umbrales, reportado periódicamente al comité de riesgos; las métricas miden desempeño del programa (ej. cobertura de MFA, % de activos inventariados). |
| **4** | Los KRIs miden **nivel de riesgo real**, no solo desempeño (ej. ventana de exposición de vulnerabilidades críticas, deriva de configuración, MTTD/MTTR); se consolidan en índices para el Board, con tendencia y comparación vs. apetito, y disparan acciones cuando exceden umbral. |
| **5** | El reporting integra factores externos (threat landscape, ataques al sector, intel de terceros) ajustando dinámicamente los umbrales; existe un dashboard ejecutivo en lenguaje de negocio (riesgo en USD, resiliencia de servicios críticos) generado de forma automatizada desde fuentes autoritativas, sin consolidación manual. Se benchmarkea contra peers Tier-1. |

## 2.2 — Cumplimiento y Aseguramiento

### 🔷 CORE · 2.2.1 · Trazabilidad regulatoria multi-jurisdicción

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay un mapeo entre los controles del banco y los requisitos regulatorios. El cumplimiento se demuestra de forma improvisada ante cada examen. |
| **2** | Existe un entendimiento informal de las obligaciones principales (ej. el regulador local), pero sin matriz de trazabilidad ni evidencia estructurada. |
| **3** | Existe una matriz que mapea los controles a los requisitos del/los reguladores primarios, con evidencia identificada por control. |
| **4** | La trazabilidad es multi-jurisdicción (US + cada jurisdicción LATAM donde opera + estándares globales aplicables como ISO/PCI DSS), con un control que satisface múltiples requisitos mapeado una sola vez ("test once, satisfy many"), y evidencia versionada y disponible para examinadores. |
| **5** | El cumplimiento es continuo y demostrable on-demand: control monitoring automatizado produce evidencia en tiempo casi real; la matriz absorbe nuevos requisitos (ej. DORA, actualizaciones de NYDFS, normas BCB/SFC/CNBV) mediante un proceso de horizon scanning regulatorio; los gaps se detectan antes del examen, no durante. |

### 🔷 CORE · 2.2.2 · Auditoría interna y validación independiente de controles

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los controles de ciberseguridad no se auditan ni se validan de forma independiente. La efectividad se asume. |
| **2** | Hay revisiones esporádicas, normalmente autoevaluaciones del propio equipo de seguridad, sin independencia. |
| **3** | Auditoría interna (segunda/tercera línea) revisa ciberseguridad según un plan, y existen validaciones externas puntuales (ej. pentest anual exigido por regulación). |
| **4** | Existe un programa de aseguramiento basado en riesgo, con auditoría interna competente en cyber, validaciones externas independientes (auditorías de configuración, pentest interno y externo) y un ciclo formal de seguimiento de hallazgos hasta cierre. La validación reduce la dependencia de la autoevaluación. |
| **5** | El aseguramiento combina líneas de defensa con **validación técnica adversarial continua**: red teaming y ejercicios threat-led de inteligencia (estilo TIBER-EU / CBEST / iCAST), purple teaming recurrente, y control assurance automatizado. Los resultados retroalimentan el risk assessment y la estrategia. La independencia y competencia del aseguramiento se evalúan periódicamente. |

### 2.2.3 · Gestión de hallazgos, excepciones y remediación

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los hallazgos de auditorías, exámenes y pruebas no se gestionan de forma centralizada. Muchos no se remedian. |
| **2** | Los hallazgos se registran en hojas de cálculo dispersas, sin owners claros ni SLA de remediación; el seguimiento es inconsistente. |
| **3** | Existe un repositorio centralizado de hallazgos con owner, severidad y fecha objetivo; las excepciones se documentan y se aprueban. |
| **4** | La remediación se gestiona con SLA por severidad, escalamiento ante incumplimiento, y reporte de aging al comité; las excepciones de riesgo tienen vigencia, dueño y aprobación al nivel adecuado, y se revisan al vencer. |
| **5** | La gestión de hallazgos es predictiva y basada en riesgo: la priorización usa exposición real y criticidad de activo (no solo severidad nominal); el aging y las excepciones se monitorean en tiempo real con alertas automáticas; las causas raíz recurrentes se analizan y se cierran de forma sistémica, no caso a caso. |

---

# P3: Riesgo Cyber de Terceros y Cadena de Suministro

*Eleva el riesgo de terceros a pilar propio —siguiendo el criterio de CRI/Deloitte que lo tratan como función "Extend"— porque en banca la superficie de ataque vive cada vez más fuera del perímetro. Cubre el ciclo de vida del proveedor y el riesgo sistémico de cadena de suministro (cuarta parte, concentración, resiliencia). Anclado en NIST CSF 2.0 (GV.SC); informado por ISO 27036, FFIEC Outsourcing, NYDFS 500.11, DORA cap. V.*

**2 sub-dimensiones · 5 componentes · 4 en Screening Core**

## 3.1 — Ciclo de Vida del Tercero

### 🔷 CORE · 3.1.1 · Due diligence e inherent risk tiering de proveedores

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe evaluación de riesgo cyber sobre proveedores. Se contrata sin valorar su postura de seguridad. |
| **2** | Se hacen revisiones informales solo para algunos proveedores grandes, sin criterios consistentes ni clasificación por riesgo. |
| **3** | Existe un proceso de due diligence pre-contractual con cuestionario de seguridad y una clasificación de proveedores por riesgo inherente (alto/medio/bajo). |
| **4** | El tiering es metodológico (por acceso a datos, criticidad del servicio, conectividad a red) y define la profundidad de la due diligence; los proveedores de alto riesgo se evalúan con evidencia técnica (certificaciones, reportes SOC 2, pruebas), no solo cuestionarios autodeclarados. El inventario de terceros está completo y mantenido. |
| **5** | La due diligence se complementa con **monitoreo externo continuo** de la postura del proveedor (security ratings, exposición en superficie externa, intel de brechas) y validación independiente para los terceros más críticos; el tiering se recalcula dinámicamente ante cambios en el servicio o señales de deterioro. Se evalúa explícitamente el riesgo de IA/modelos provistos por terceros. |

### 🔷 CORE · 3.1.2 · Cláusulas contractuales, derecho de auditoría y notificación

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los contratos no incluyen cláusulas de ciberseguridad. No hay obligaciones de notificación de incidentes. |
| **2** | Algunos contratos incluyen cláusulas genéricas de confidencialidad, pero no requisitos de seguridad específicos, derecho de auditoría ni plazos de notificación. |
| **3** | Los contratos de proveedores relevantes incluyen requisitos de seguridad, obligación de notificar incidentes y cláusulas de confidencialidad, validados por Legal. |
| **4** | Existen requisitos contractuales estandarizados por nivel de riesgo: derecho de auditoría, SLA de seguridad, plazos de notificación de incidentes definidos (ej. ≤72/48h), obligaciones de subcontratación, y estrategias de salida documentadas. Cumplimiento contractual monitoreado. |
| **5** | Los contratos incluyen métricas de resiliencia exigibles y verificables, derecho a participar en pruebas conjuntas (ej. ejercicios de IR), requisitos de notificación alineados a las ventanas regulatorias de cada jurisdicción, y cláusulas frontera (transparencia sobre uso de IA, escrow, requisitos PQC en roadmap). El cumplimiento se verifica con evidencia, no se asume. |

### 3.1.3 · Monitoreo continuo y offboarding seguro

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay monitoreo de la postura del proveedor después de contratar. La terminación no contempla la seguridad (accesos quedan vivos, datos no se devuelven/destruyen). |
| **2** | El monitoreo es ad-hoc; el offboarding depende del criterio del área usuaria, sin checklist de revocación de accesos ni gestión de datos. |
| **3** | Se revalúa a los proveedores de alto riesgo periódicamente (ej. due diligence anual) y existe un procedimiento de offboarding con revocación de accesos y disposición de datos. |
| **4** | El monitoreo es continuo para proveedores críticos (revisión de certificaciones, alertas de incidentes, performance de SLA); el offboarding está formalizado con verificación de revocación de accesos, devolución/destrucción certificada de datos y cierre de conectividad, con evidencia. |
| **5** | El monitoreo combina señales externas en tiempo real (ratings, brechas, exposición) con telemetría de la conectividad del tercero; el deterioro dispara reevaluación automática; el offboarding es orquestado y auditable end-to-end, y se prueba que no queden accesos residuales mediante validación técnica. |

## 3.2 — Riesgo Sistémico de Cadena de Suministro

### 🔷 CORE · 3.2.1 · Riesgo de cuarta parte y concentración

| Nivel | Descriptor |
|:---:|:---|
| **1** | El banco solo ve a sus proveedores directos. No hay visibilidad ni consideración de los subcontratistas (cuarta parte) ni de la concentración. |
| **2** | Se reconoce que existen subcontratistas y dependencias compartidas, pero no se mapean ni se gestionan. |
| **3** | Se identifican las dependencias de cuarta parte de los proveedores críticos y se reconoce la concentración en proveedores clave (ej. un mismo hyperscaler o un mismo core bancario). |
| **4** | Existe un mapeo de la cadena de suministro de los servicios críticos (proveedor → subcontratistas → infraestructura subyacente), con análisis de concentración y puntos únicos de falla, alimentando decisiones de mitigación (multi-vendor, contingencia). |
| **5** | El riesgo de concentración y de cuarta parte se modela a nivel sistémico (escenarios de caída de un proveedor compartido por el sector), se cuantifica su impacto, y se gestiona con estrategias activas (diversificación, salida portable, requisitos de transparencia de subcontratación). El banco participa en iniciativas sectoriales de visibilidad de cadena de suministro. |

### 🔷 CORE · 3.2.2 · Resiliencia y recuperación exigida a terceros críticos

| Nivel | Descriptor |
|:---:|:---|
| **1** | No se exige ni se verifica que los proveedores críticos tengan capacidad de recuperación. La continuidad del servicio se asume. |
| **2** | Se asume que los proveedores grandes "tienen su propio plan", pero no se solicita evidencia ni se integra a la continuidad del banco. |
| **3** | Se solicita a los proveedores críticos evidencia de planes de continuidad/recuperación (RTO/RPO) y se documenta como parte de la due diligence. |
| **4** | Los RTO/RPO de los terceros críticos están alineados con los objetivos de resiliencia del banco e integrados en su BIA; se verifica la existencia y prueba de los planes del proveedor, y se incluyen escenarios de falla de terceros en los ejercicios de continuidad del banco. |
| **5** | La resiliencia de la cadena se prueba conjuntamente (ejercicios de recuperación coordinados con proveedores críticos), se exige tolerancia de impacto verificable, y el banco mantiene capacidad de operar ante la indisponibilidad prolongada de un proveedor crítico (salida portable, contingencia probada). Alineado a marcos de resiliencia operacional digital (ej. DORA). |

---

# P4: Gestión de Activos, Datos y Superficie de Exposición

*Pilar de visibilidad: no se protege lo que no se conoce. Cubre el inventario autoritativo de activos, la clasificación de datos y sus flujos, el shadow IT, y la gestión continua de la superficie de exposición. Descubre e inventaría la exposición; la remediación de vulnerabilidades vive en P9. Anclado en NIST CSF 2.0 (ID.AM, ID.RA); informado por ISO 27001 A.5.9–A.5.12, CIS Controls 1–3, FFIEC Asset Management.*

**2 sub-dimensiones · 5 componentes · 4 en Screening Core**

## 4.1 — Inventario y Clasificación

### 🔷 CORE · 4.1.1 · Inventario de activos (CMDB)

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un inventario de activos. Nadie puede afirmar con certeza qué hardware, software y servicios tiene el banco. |
| **2** | Existen inventarios parciales y dispersos (hojas de cálculo por equipo), desactualizados y sin owner. La cobertura es incierta. |
| **3** | Existe un inventario centralizado de activos de hardware y software, alimentado por herramientas de descubrimiento, con cobertura mayoritaria del entorno conocido y un owner asignado. |
| **4** | Existe una CMDB autoritativa que consolida hardware, software, servicios y datos en una única fuente de verdad, integrada con herramientas de descubrimiento y protección (ej. gestión de endpoints, escaneo, EDR); cada activo tiene owner, criticidad y ciclo de vida; las brechas de cobertura se miden y cierran. |
| **5** | El inventario es near-real-time y se reconcilia automáticamente entre múltiples fuentes (red, cloud, identidad, EDR); detecta activos no registrados al aparecer; cubre activos efímeros (contenedores, funciones serverless) y de IA/modelos; la criticidad se deriva del mapeo a servicios de negocio, no se asigna manualmente. La completitud del inventario es un KRI reportado al Board. |

### 🔷 CORE · 4.1.2 · Clasificación de datos y mapeo de flujos

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los datos no están clasificados. No se sabe dónde residen los datos sensibles ni cómo se mueven. |
| **2** | Existe un esquema de clasificación teórico (ej. público/interno/confidencial), pero no se aplica de forma consistente ni hay mapeo de dónde viven los datos. |
| **3** | Existe un esquema de clasificación formal aplicado a los sistemas principales; los datos sensibles y regulados (PII, datos de tarjeta, datos de cliente) están identificados a nivel de sistema. |
| **4** | La clasificación se aplica a nivel de sistema y de repositorio, con flujos de datos sensibles documentados (data flow mapping), considerando residencia/soberanía de datos por jurisdicción; la clasificación gobierna controles diferenciados (cifrado, acceso, retención). |
| **5** | La clasificación y el descubrimiento de datos sensibles son continuos y, donde aplica, automatizados (data discovery sobre estructurado y no estructurado, incl. cloud); los flujos se mantienen vivos y se usan para detectar exfiltración y para validar residencia de datos; la clasificación alimenta directamente la política de DLP y de cifrado (ver P6). |

### 4.1.3 · Gestión de shadow IT y activos no autorizados

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay conciencia ni control del shadow IT. Equipos y áreas adquieren tecnología y SaaS sin que seguridad lo sepa. |
| **2** | Se reconoce que existe shadow IT, pero no se detecta sistemáticamente ni se gestiona. |
| **3** | Existen controles básicos para detectar dispositivos y software no autorizados (ej. descubrimiento de red, allowlisting parcial) y un proceso para regularizarlos. |
| **4** | El shadow IT se detecta de forma recurrente en red, endpoints y cloud (incl. SaaS no sancionado vía CASB/descubrimiento), con un proceso formal de regularización o bloqueo y métricas de exposición por activos no autorizados. |
| **5** | La detección de activos y servicios no autorizados es continua y cubre SaaS, cloud y conexiones de terceros; el uso no sancionado se bloquea o se incorpora automáticamente al gobierno; la fricción para adquirir tecnología de forma segura se reduce deliberadamente para eliminar el incentivo del shadow IT. |

## 4.2 — Gestión de la Superficie de Exposición

### 🔷 CORE · 4.2.1 · Attack Surface Management externo

| Nivel | Descriptor |
|:---:|:---|
| **1** | El banco no tiene visibilidad de su superficie de exposición externa. No sabe qué activos suyos son alcanzables desde internet. |
| **2** | La superficie externa se revisa solo de forma puntual (ej. durante un pentest anual), quedando ciega el resto del tiempo. |
| **3** | Existe un inventario de activos expuestos a internet (dominios, IPs, servicios) mantenido periódicamente, y se identifican exposiciones obvias (puertos abiertos, servicios sin actualizar). |
| **4** | Existe un proceso de External Attack Surface Management (EASM) continuo que descubre activos expuestos —incluyendo los desconocidos/olvidados—, certificados, subdominios y exposición de la cadena de suministro digital; los hallazgos se enrutan a remediación (P9) con priorización por riesgo. |
| **5** | El EASM es continuo y correlaciona la exposición externa con threat intelligence (ej. activos mencionados en foros, credenciales filtradas, exposición explotada activamente); descubre exposición vía terceros y cuarta parte; la reducción de superficie de ataque es un objetivo medido y reportado, no un subproducto. |

### 🔷 CORE · 4.2.2 · Descubrimiento y priorización continua de exposición

| Nivel | Descriptor |
|:---:|:---|
| **1** | No hay descubrimiento sistemático de exposiciones internas (vulnerabilidades, configuraciones débiles). Se actúa solo ante incidentes. |
| **2** | Se hacen escaneos esporádicos de vulnerabilidades sobre una parte del entorno, sin priorización consistente ni cobertura completa. |
| **3** | Existe escaneo recurrente de vulnerabilidades con cobertura mayoritaria del entorno y una priorización básica por severidad (ej. CVSS). |
| **4** | El descubrimiento de exposición cubre vulnerabilidades, malas configuraciones y exposición de identidad/activos; la priorización combina severidad con criticidad del activo y explotabilidad real (ej. inteligencia de explotación, EPSS); produce una vista unificada de exposición que alimenta la remediación basada en riesgo (P9). |
| **5** | Opera un modelo de gestión continua de exposición a amenazas (CTEM): descubrimiento permanente, validación de explotabilidad (ej. validación adversarial / attack path analysis), y priorización por el camino de ataque hacia activos críticos —no por volumen de CVEs—. La exposición se mide como "rutas de ataque viables hacia la corona", y su reducción es un KRI de Board. |

---

# P5: Identidad y Gestión de Accesos (IAM / PAM)

*La identidad es el nuevo perímetro y el vector de ataque dominante en banca. Cubre el ciclo de vida de identidad, la autenticación, el gobierno de accesos y el control del acceso privilegiado. Provee y gobierna los accesos; la analítica/detección de anomalías de identidad vive en P9. Anclado en NIST CSF 2.0 (PR.AA); informado por ISO 27001 A.5.15–A.5.18, NIST 800-63, CIS Control 5–6, NYDFS 500.07/500.12.*

**2 sub-dimensiones · 5 componentes · 4 en Screening Core**

## 5.1 — Identidad y Acceso de Usuario

### 🔷 CORE · 5.1.1 · Ciclo de vida de identidad (joiner-mover-leaver) y RBAC

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe un proceso formal de gestión de accesos. Las altas, cambios y bajas se hacen ad-hoc; cuentas de ex-empleados quedan activas. |
| **2** | Existe un proceso manual de altas/bajas, pero inconsistente; los cambios de rol acumulan privilegios (privilege creep) y las bajas no siempre se ejecutan a tiempo. |
| **3** | El ciclo de vida (joiner-mover-leaver) está formalizado, con accesos basados en roles (RBAC) para los sistemas principales y SLA de provisión/revocación definidos. |
| **4** | El ciclo de vida está centralizado (idealmente automatizado vía IGA) y abarca empleados, contratistas y cuentas de servicio; el RBAC cubre todos los sistemas relevantes; las bajas se ejecutan de forma oportuna y verificable, incluyendo cuentas de acceso elevado deshabilitadas antes de la entrevista de salida; métricas de demora/excepción monitoreadas. |
| **5** | La gestión de identidad es policy-driven y automatizada de extremo a extremo, integrada con RR.HH. como fuente autoritativa; aplica RBAC + ABAC para acceso contextual; el aprovisionamiento es de mínimo privilegio por defecto; cubre identidades no humanas (servicios, máquinas, agentes) con el mismo rigor. La deriva de accesos se detecta y corrige automáticamente. |

### 🔷 CORE · 5.1.2 · Autenticación y MFA

| Nivel | Descriptor |
|:---:|:---|
| **1** | El acceso depende solo de usuario y contraseña, sin segundo factor, incluso para acceso remoto y administrativo. |
| **2** | Existe MFA en algunos accesos críticos (ej. VPN), pero no es universal y convive con métodos débiles (ej. SMS) y excepciones amplias. |
| **3** | MFA está desplegado para acceso remoto, accesos privilegiados y aplicaciones críticas, con una política de contraseñas alineada a buenas prácticas. |
| **4** | MFA es prácticamente universal (todos los usuarios, todas las aplicaciones relevantes, todo acceso administrativo), gestionado centralmente (SSO + MFA), con métodos resistentes a robo de credenciales priorizados y excepciones mínimas, vigentes y aprobadas. |
| **5** | La autenticación es phishing-resistant por diseño (FIDO2/passkeys), avanzando hacia passwordless; aplica autenticación adaptativa/continua basada en riesgo (señales de dispositivo, comportamiento, ubicación) como pilar de una arquitectura zero-trust; la re-evaluación de la sesión es continua, no solo en el login. |

### 5.1.3 · Gobierno de identidad y recertificación de accesos

| Nivel | Descriptor |
|:---:|:---|
| **1** | Los accesos otorgados nunca se revisan. Nadie valida si los usuarios siguen necesitando lo que tienen. |
| **2** | Se hacen revisiones de acceso esporádicas y manuales para algunos sistemas, sin cobertura ni cadencia definida. |
| **3** | Existe recertificación periódica de accesos para los sistemas críticos, con responsables que validan la vigencia de los privilegios. |
| **4** | La recertificación es periódica y abarca todos los sistemas relevantes, con campañas gestionadas (IGA), foco en accesos privilegiados y de alto riesgo, evidencia auditable, y detección de conflictos de segregación de funciones (SoD). |
| **5** | El gobierno de identidad es continuo y basado en riesgo: la recertificación se intensifica para accesos de alto riesgo y se relaja para los de bajo riesgo (risk-based); el análisis de SoD y de privilegios excesivos es permanente; las recomendaciones de "right-sizing" de accesos se generan de forma automatizada a partir del uso real. |

## 5.2 — Acceso Privilegiado

### 🔷 CORE · 5.2.1 · PAM — cuentas privilegiadas y de servicio

| Nivel | Descriptor |
|:---:|:---|
| **1** | Las cuentas privilegiadas no están controladas. Credenciales de administrador y de servicio se comparten y no se sabe cuántas existen. |
| **2** | Hay conciencia de las cuentas privilegiadas, pero su gestión es manual; las credenciales de servicio están embebidas en sistemas y rara vez rotan. |
| **3** | Existe un inventario de cuentas privilegiadas, segregadas de las cuentas de uso diario, con custodia de credenciales (vault) para las más críticas. |
| **4** | Opera una solución PAM: bóveda de credenciales, rotación automática, segregación de cuentas administrativas, grabación/monitoreo de sesiones privilegiadas, y MFA obligatorio para todo acceso privilegiado; las cuentas de servicio están inventariadas y custodiadas por un equipo responsable. |
| **5** | El acceso privilegiado opera bajo least privilege estricto con elevación just-in-time y cero privilegios permanentes (zero standing privilege); las credenciales de servicio se gestionan sin secretos embebidos (secretless / brokered); toda sesión privilegiada se monitorea y correlaciona (la detección de abuso vive en P9). El privilegio permanente residual es un KRI que tiende a cero. |

### 🔷 CORE · 5.2.2 · Política de mínimo privilegio y acceso just-in-time

| Nivel | Descriptor |
|:---:|:---|
| **1** | No existe el concepto de mínimo privilegio. Los usuarios y administradores tienen más acceso del que necesitan, de forma permanente. |
| **2** | El mínimo privilegio se reconoce como principio pero no se aplica; los usuarios suelen tener derechos de instalación local y privilegios amplios. |
| **3** | Se aplica mínimo privilegio por defecto en endpoints y sistemas principales (sin derechos de administrador local para usuarios), con excepciones gestionadas formalmente. |
| **4** | El mínimo privilegio se aplica de forma transversal con un proceso de excepciones con vigencia y aprobación; el acceso elevado se concede de forma temporal y justificada (workflow de aprobación), reduciendo el privilegio permanente. |
| **5** | El acceso es just-in-time y just-enough por diseño: se concede al momento, con la mínima extensión, y se revoca automáticamente al expirar; integrado en una arquitectura zero-trust donde cada solicitud se evalúa por política y contexto. El "tiempo-de-privilegio" agregado de la organización se mide y se minimiza activamente. |

---

*Fin de Pilares 1–5 · v0.1 · Pendientes P6–P11. Todos los descriptores son redacción original (síntesis); las fuentes se citan como "informado por", sin reproducir su texto.*
