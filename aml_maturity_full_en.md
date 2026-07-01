# AML Maturity Assessment (AMA) — v0.1 · Pillars 1–11

*Anti-money laundering / counter-terrorist financing program maturity model for world-class banking. This is a **maturity assessment of the AML program**, not an inherent/residual risk assessment. Skeleton anchored in the FFIEC BSA/AML Examination Manual and FinCEN/BSA requirements (US government works, public domain); original synthesis informed conceptually by the FATF 40 Recommendations and FATF effectiveness outcomes, Wolfsberg Group guidance, Basel AML principles, and LATAM references (SARLAFT/SAGRILAFT — SFC Colombia, CNBV PLD/FT Mexico, BCB Circular 3.978 Brazil, UAFE Ecuador, GAFILAT). 1–5 scale where Level 5 represents frontier practice — effectiveness and outcomes, not checkbox compliance. All descriptors are original wording; sources are cited as "informed by," without reproducing their text.*

**Coverage: 11 pillars — Governance (P1), Risk Assessment (P2), Customer Due Diligence (P3), Sanctions (P4), Monitoring (P5), Investigations & Reporting (P6), Data & Models (P7), Products & Third Parties (P8), People (P9), Independent Testing (P10) + cross-cutting convergence pillar (P11). Companion to the Cyber Maturity Assessment (CMA) and the Financial Crime Maturity Assessment (FCMA) fraud framework.**

---

# P1: AML Governance, Strategy and Risk Appetite

*Strategic layer assessing whether the institution has an empowered and independent AML function, effective Board and senior management oversight, a living policy framework, and a quantified financial crime risk appetite. Anchored in FFIEC BSA/AML (BSA compliance program pillar); informed by FATF R.1/R.2, Wolfsberg governance guidance, SARLAFT governance requirements.*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 1.1 — Leadership and Oversight

### 🔷 CORE · 1.1.1 · Designated AML officer: mandate, independence and resources

| Level | Descriptor |
|:---:|:---|
| **1** | No formally designated AML/BSA officer exists, or the role is nominal — held part-time by someone with no mandate, budget, or authority. |
| **2** | An AML officer is designated but lacks independence (reports into the business they must oversee), has no documented mandate, and resources are visibly insufficient for the institution's risk. |
| **3** | A formally designated AML officer exists with a written mandate, a defined reporting line to senior management, and a dedicated team sized against a basic workload measure. |
| **4** | The AML officer has organizational independence and direct access to the Board or a Board committee; resourcing is justified against the risk assessment and alert/case volumes; deputies and succession are defined; stature is sufficient to challenge the business and stop high-risk activity. |
| **5** | The AML function operates as a strategic capability: capacity is modeled dynamically (volumes, complexity, regulatory change) and adjusted proactively; the officer's authority to veto products, customers, or markets is exercised and documented; effectiveness of the function itself is measured with outcome indicators and validated externally. Talent strategy covers scarce specialisms (crypto, trade finance, sanctions, data science). |

### 🔷 CORE · 1.1.2 · Board and senior management oversight

| Level | Descriptor |
|:---:|:---|
| **1** | The Board receives no structured AML information. Money laundering risk is treated as an operational back-office matter. |
| **2** | The Board receives sporadic AML updates, typically after a regulatory finding or a press event. There is no defined cadence or committee ownership. |
| **3** | AML risk is reported periodically to a designated committee, with the AML officer presenting; the Board approves the AML program and its material changes. |
| **4** | Oversight is formal and recurring with a defined cadence; reporting covers risk posture (not just activity volumes): emerging typologies, SAR trends, backlog health, regulatory pipeline, remediation status; decisions are minuted and tracked; at least one Board member has demonstrable financial crime competence. |
| **5** | The Board actively challenges the program: it reviews effectiveness outcomes (detection yield, proceeds disrupted, risk reduced), participates in financial-crime scenario exercises, and sets explicit expectations for frontier risks (instant payments, crypto exposure, AI-enabled laundering). Oversight quality is itself periodically evaluated. |

## 1.2 — Program Framework and Appetite

### 🔷 CORE · 1.2.1 · AML policy framework and multi-jurisdictional traceability

| Level | Descriptor |
|:---:|:---|
| **1** | No coherent body of AML policies exists. Practices depend on individual judgment and legacy habit. |
| **2** | Scattered policies cover some obligations (e.g., KYC forms, cash reporting), without formal approval, review cycles, or coverage of all business lines. |
| **3** | An enterprise-wide AML policy framework exists, approved at the right level, with a clear hierarchy (policy → standard → procedure), defined ownership, and periodic review. |
| **4** | The framework covers all products, channels, and legal entities; each policy is traceable to the regulatory requirements it satisfies across every jurisdiction of operation (US + each LATAM regulator); updates are triggered by regulatory change, new typologies, and exam findings — not just the calendar. |
| **5** | Policies are managed as living controls: regulatory horizon scanning feeds updates within defined SLAs; traceability (FinCEN/FFIEC, FATF, SFC/CNBV/BCB/UAFE) is maintained as a queryable data object; adherence — not mere existence — is measured through control monitoring, and divergences between jurisdictions are governed deliberately (highest-standard-wins or documented local variance). |

### 🔷 CORE · 1.2.2 · Financial crime risk appetite

| Level | Descriptor |
|:---:|:---|
| **1** | No financial crime risk appetite exists. The institution has never articulated which ML/TF risks it will and will not accept. |
| **2** | Appetite exists only as generic language ("zero tolerance for money laundering") with no metrics, thresholds, or consequences for the business. |
| **3** | Appetite is articulated with at least some quantified elements (e.g., prohibited customer types and geographies, maximum share of high-risk customers) and is approved by the Board. |
| **4** | Appetite is quantified across dimensions (customer risk mix, geographic exposure, product risk, alert/case backlog tolerances, SAR timeliness), with early-warning thresholds, escalation rules, and monthly deviation reporting; it demonstrably constrains business decisions (customer exits, market entries). |
| **5** | Appetite is calibrated with effectiveness data and threat intelligence, stress-tested against scenarios (e.g., a de-risking wave, a new corridor, a crypto product launch), and dynamically enforced: breaches trigger automatic business consequences (onboarding freezes, enhanced approvals). The institution can show regulators how appetite shapes its actual risk profile over time. |

### 1.2.3 · Three lines of defense and business accountability

| Level | Descriptor |
|:---:|:---|
| **1** | AML is seen as compliance's problem. The business takes no ownership of financial crime risk in its P&L or decisions. |
| **2** | Lines of defense exist on paper, but the first line performs no meaningful AML controls and accountability is diffuse. |
| **3** | Roles across the three lines are documented; the first line executes defined controls (onboarding checks, escalations) and compliance monitors them. |
| **4** | First-line ownership is real: business leaders carry financial crime objectives and metrics, control performance is measured per business unit, and consequences (compensation, approvals) attach to failures; the second line challenges rather than executes. |
| **5** | Accountability is embedded end-to-end: financial crime risk is priced into business decisions, first-line control performance is transparent to the Board, individual accountability regimes are operational, and the model is periodically validated for real (not nominal) segregation between the lines. |

---

# P2: Enterprise-Wide Risk Assessment (EWRA)

*The engine of the risk-based approach: how the institution identifies, measures, and documents its inherent ML/TF risk and the effectiveness of mitigating controls — and whether the result actually drives decisions. Anchored in FFIEC BSA/AML (risk assessment expectations); informed by FATF R.1, Wolfsberg EWRA guidance, SARLAFT segmentation requirements.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 2.1 — Methodology and Coverage

### 🔷 CORE · 2.1.1 · EWRA methodology (inherent risk × controls = residual)

| Level | Descriptor |
|:---:|:---|
| **1** | No enterprise-wide ML/TF risk assessment exists, or it is a static document written once for the regulator and never used. |
| **2** | An assessment exists but is qualitative, undocumented in method, and produced ad hoc; inherent risk, controls, and residual risk are not distinguished. |
| **3** | A documented methodology exists distinguishing inherent risk, control effectiveness, and residual risk, with defined scales and rationale, applied consistently and refreshed on a defined cycle. |
| **4** | The methodology is data-driven: inherent risk factors are quantified from actual portfolio data (customer mix, volumes, corridors), control effectiveness is evidenced (testing results, KPI performance) rather than asserted, and residual risk conclusions are challenged by the second line and approved by governance. |
| **5** | The EWRA is dynamic: key risk factors are refreshed continuously from live data, emerging typologies and threat intelligence adjust the assessment between formal cycles, scenario analysis quantifies exposure to specific threats, and the methodology itself is independently validated. The EWRA is demonstrably the single source of truth for the risk-based approach. |

### 🔷 CORE · 2.1.2 · Coverage of customers, products, channels, and geographies

| Level | Descriptor |
|:---:|:---|
| **1** | The assessment ignores whole dimensions of the business — new products, digital channels, or foreign operations are simply absent. |
| **2** | Coverage is partial and legacy-biased: traditional products are assessed while newer channels (digital onboarding, instant payments, fintech partnerships) are not. |
| **3** | All four canonical dimensions (customers, products/services, channels, geographies) are covered for the main business lines, with high-risk categories identified. |
| **4** | Coverage is complete across legal entities and jurisdictions, includes emerging exposures (instant payments, crypto touchpoints, BaaS/embedded finance, correspondent relationships), and granularity is sufficient to differentiate risk within categories — not just label whole product lines "high." |
| **5** | Coverage is continuously reconciled against the actual product and customer inventory (nothing launches or onboards outside the assessment's perimeter); risk factors are decomposed to the level where controls attach; and cross-dimension interactions (e.g., high-risk customer × instant channel × high-risk corridor) are explicitly modeled rather than averaged away. |

## 2.2 — Cadence and Consequences

### 2.2.1 · Refresh cadence and event triggers

| Level | Descriptor |
|:---:|:---|
| **1** | The assessment is never refreshed, or only when a regulator asks for it. |
| **2** | Refresh happens irregularly, with no defined triggers; material changes (acquisitions, product launches) do not prompt reassessment. |
| **3** | A defined refresh cycle exists (e.g., annual), plus recognition that major changes require interim updates. |
| **4** | Formal triggers operate in practice: new products, markets, acquisitions, significant typology shifts, and material exam findings each prompt a scoped reassessment with documented conclusions before or shortly after the change. |
| **5** | Reassessment is embedded in change management: no product, channel, or market change reaches approval without an EWRA impact analysis; trigger sensitivity is tuned with hindsight reviews (did we catch the changes that mattered?); and interim updates are versioned and auditable. |

### 🔷 CORE · 2.2.2 · Linkage of EWRA results to controls, resourcing and strategy

| Level | Descriptor |
|:---:|:---|
| **1** | The assessment, where it exists, changes nothing: controls, staffing, and monitoring intensity are identical regardless of its conclusions. |
| **2** | The link is rhetorical — documents claim risk-based allocation, but no traceable connection exists between assessed risk and control design or resources. |
| **3** | High-risk areas identified in the EWRA receive demonstrably enhanced treatment (EDD populations, monitoring scenarios, review frequencies) in at least the main cases. |
| **4** | A documented mapping connects each material residual risk to specific controls, monitoring coverage, and resourcing decisions; gaps identified in the EWRA generate remediation plans with owners and dates tracked to closure. |
| **5** | The EWRA operates as an allocation engine: control intensity, alert thresholds, review cycles, testing depth, and headcount are tuned to assessed risk and re-tuned when it changes; the institution can demonstrate to any examiner the causal chain from risk to control to resource — and show that lower-risk areas are deliberately de-intensified, evidencing a genuine (not one-way) risk-based approach. |

---

# P3: Customer Due Diligence and KYC

*The gateway control: identifying who the customer is, who owns and controls it, how risky the relationship is, and keeping that understanding current through the lifecycle. Anchored in FFIEC BSA/AML (CIP, CDD rule, beneficial ownership); informed by FATF R.10/R.12/R.22, Wolfsberg CDD guidance, SARLAFT knowledge-of-customer requirements.*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 3.1 — Identification and Risk Rating

### 🔷 CORE · 3.1.1 · Customer identification and onboarding (CIP)

| Level | Descriptor |
|:---:|:---|
| **1** | Identification is a formality: documents are collected without verification, and accounts open with incomplete or inconsistent data. |
| **2** | Basic document collection and verification exist for the main customer types, but with inconsistent application, weak digital-channel controls, and no independent verification against reliable sources. |
| **3** | A formal CIP exists covering all customer types and channels, with verification against reliable independent sources, documented exceptions, and prohibition of anonymous relationships. |
| **4** | Verification is risk-proportionate and channel-robust: digital onboarding uses document authenticity checks and biometric/liveness verification; data quality is enforced at capture; exceptions are time-bound, tracked, and escalated; non-face-to-face risk is explicitly mitigated. |
| **5** | Identity assurance is continuous and fraud-aware: onboarding integrates synthetic-identity and impersonation detection (deepfake-resistant verification), identity confidence is scored and revisited when signals change, and identity data interoperates with fraud and cyber controls (see P11). Verification effectiveness is measured with outcome data (identity-related losses, false identities caught). |

### 🔷 CORE · 3.1.2 · Customer risk rating model

| Level | Descriptor |
|:---:|:---|
| **1** | Customers are not risk-rated, or every customer carries the same default rating. |
| **2** | A rudimentary rating exists (e.g., a geography flag) applied inconsistently, with no methodology and no consequences for treatment. |
| **3** | A documented risk-rating methodology exists using multiple factors (customer type, products, geography, activity), applied at onboarding, with ratings driving at least EDD assignment. |
| **4** | The model is calibrated and governed: factor weights are justified and back-tested against outcomes (SAR-filed customers, confirmed cases), ratings refresh on trigger events and periodic cycles, overrides are controlled and monitored, and rating drives differentiated treatment across monitoring, review frequency, and approvals. |
| **5** | Risk rating is dynamic: behavior observed post-onboarding continuously re-scores the customer (perpetual risk assessment), the model's discriminatory power is measured and improved (high-risk ratings actually concentrate the bad outcomes), and segment-level analytics detect rating drift and gaming. Model governance meets formal model-risk standards (see P7). |

### 🔷 CORE · 3.1.3 · Beneficial ownership and control

| Level | Descriptor |
|:---:|:---|
| **1** | Beneficial ownership is not identified. Legal entities are onboarded as opaque shells. |
| **2** | Ownership information is requested but taken at face value, with no thresholds consistently applied and no identification of controllers distinct from owners. |
| **3** | Beneficial owners are identified at defined thresholds and verified like natural-person customers; control persons are captured; the information is stored and retrievable. |
| **4** | Ownership chains are unwrapped through complex structures (trusts, layered entities, foreign vehicles) with documented rationale; ownership data is refreshed on triggers and reviews; discrepancies with external registries are investigated and, where required, reported. |
| **5** | Ownership understanding is network-based: entity data is resolved and linked across the portfolio (shared owners, addresses, directors), enabling detection of shell networks and nominee patterns; changes in control are detected proactively from data rather than declared; and the institution contributes to and consumes registry ecosystems where the law allows. |

## 3.2 — Enhanced and Ongoing Due Diligence

### 🔷 CORE · 3.2.1 · Enhanced due diligence for higher-risk customers (incl. PEPs)

| Level | Descriptor |
|:---:|:---|
| **1** | No enhanced treatment exists for higher-risk customers. PEPs, high-risk geographies, and cash-intensive businesses are onboarded like everyone else. |
| **2** | Some higher-risk categories are recognized, but EDD is a form-filling exercise with no additional verification, senior approval, or ongoing intensity. |
| **3** | Defined EDD populations exist (PEPs, high-risk jurisdictions, high-risk activities) with documented additional measures: source-of-funds/wealth inquiry, senior management approval, and enhanced review frequency. PEP status triggers EDD — not automatic rejection. |
| **4** | EDD is substantive and proportionate: source-of-wealth corroboration uses independent evidence for the highest-risk relationships, approval levels scale with risk, EDD files are complete and current, and the population is actively managed (entries, exits, downgrades justified). |
| **5** | EDD is intelligence-led: adverse media and external data continuously enrich high-risk files, relationship-level risk is assessed across all connected accounts and entities, exit decisions are governed and executed without leakage, and EDD effectiveness is measured (do EDD populations yield the expected detection outcomes?). De-risking is deliberate and documented, not indiscriminate. |

### 3.2.2 · Ongoing due diligence and KYC refresh (toward perpetual KYC)

| Level | Descriptor |
|:---:|:---|
| **1** | KYC information is captured once at onboarding and never updated. Files decay indefinitely. |
| **2** | Refresh happens only reactively (e.g., when a payment fails screening or a regulator asks); backlogs of outdated files are large and unmanaged. |
| **3** | A periodic refresh cycle exists differentiated by risk (e.g., 1/3/5 years), with trigger-based reviews for material events, and backlog is measured and managed. |
| **4** | Refresh is risk-proportionate and operationally healthy: cycles are met, trigger events (activity inconsistent with profile, ownership changes, adverse media) reliably prompt reviews, and refresh outcomes feed re-rating and monitoring adjustments. |
| **5** | KYC trends toward perpetual: data-driven signals (transaction behavior, external registries, screening deltas) continuously validate or challenge the customer profile, replacing much of the calendar-based cycle; low-risk refreshes are automated end-to-end; and the institution can evidence that customer understanding is current, not merely recently stamped. |

---

# P4: Sanctions and Watchlist Screening

*The zero-tolerance control: preventing prohibited relationships and transactions with sanctioned parties, and governing the technology that decides what is and is not a match. Anchored in FFIEC BSA/AML and OFAC expectations (public domain); informed by Wolfsberg sanctions screening guidance, UN/EU/local list obligations across jurisdictions.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 4.1 — Coverage and Technology

### 🔷 CORE · 4.1.1 · Screening coverage: customers, parties, and payments

| Level | Descriptor |
|:---:|:---|
| **1** | Screening is absent or limited to a manual check of new customers against a stale list. |
| **2** | Customers are screened at onboarding only; payments and related parties (beneficial owners, directors, counterparties) are not systematically covered. |
| **3** | Screening covers the customer base (at onboarding and on list updates), related parties, and cross-border payments in real time against the applicable lists (OFAC, UN, EU, local). |
| **4** | Coverage is complete and evidenced: all payment types and messaging fields, trade finance documents, internal transfers where required, and non-customer parties; coverage maps exist showing every flow, system, and list, with gaps tracked to closure; list updates propagate within defined, tested SLAs. |
| **5** | Coverage extends to frontier exposure: instant payment rails screened within rail latency budgets, crypto-related exposure (where applicable) screened against blockchain analytics and VASP lists, vessel/dual-use and sectoral sanctions logic applied where relevant, and coverage completeness is continuously reconciled against the transaction universe rather than asserted. |

### 🔷 CORE · 4.1.2 · Matching technology, fuzzy logic and threshold governance

| Level | Descriptor |
|:---:|:---|
| **1** | Matching is exact-string only; trivial name variations sail through. No one governs the settings. |
| **2** | Some fuzzy matching exists, but thresholds and rules were set by the vendor at installation and never revisited; false-negative risk is unknown. |
| **3** | Matching logic (fuzzy algorithms, transliteration, weak aliases) is documented, thresholds are formally owned, and changes go through governance. |
| **4** | Threshold calibration is evidence-based: above/below-threshold testing quantifies the false-negative/false-positive trade-off, name-variation test decks (transliterations, truncations, noise) run periodically, and results drive tuning decisions approved by governance. Fuzzy-matching weaknesses (e.g., short names, non-Latin scripts) are known and mitigated. |
| **5** | Matching effectiveness is proven continuously: automated regression testing on every list, system, or threshold change; independent validation of the matching engine; adversarial testing simulates evasion techniques (name manipulation, payment stripping); and match quality metrics are trended and reported. The institution knows — with evidence — what it would and would not catch. |

## 4.2 — Alert Handling and List Management

### 🔷 CORE · 4.2.1 · Alert adjudication, blocking and escalation

| Level | Descriptor |
|:---:|:---|
| **1** | Alerts pile up unworked, or are cleared en masse without documented rationale. Potential true matches are not escalated. |
| **2** | Alerts are worked, but adjudication quality is inconsistent, documentation is thin, and escalation criteria for potential true matches are informal. |
| **3** | A defined adjudication process exists with documented disposition rationale, four-eyes review for closures of higher-risk alerts, clear escalation of potential matches, and execution of blocking/rejection with required regulatory reporting. |
| **4** | Adjudication is quality-managed: SLAs by risk, sampling-based QA with feedback loops, adjudicator competence requirements, and decision consistency measured; blocking/rejection operations are tested (can the institution actually stop a live payment in time?); regulatory reports are complete and timely. |
| **5** | Adjudication is intelligence-augmented: entity resolution and contextual data pre-enrich alerts, machine assistance triages obvious false positives under governed models with human accountability for true-match decisions, and hindsight reviews of closed alerts validate that nothing real was missed. Response to a designation event (new sanctions on an existing counterparty) is rehearsed and fast. |

### 4.2.2 · List management and update integrity

| Level | Descriptor |
|:---:|:---|
| **1** | Lists are updated manually and sporadically; no one can say which list version screened which transaction. |
| **2** | Updates are automated for the main lists but unverified; internal lists (exits, prohibited parties) are informal or absent. |
| **3** | List sourcing, update frequency, and application are documented for all applicable lists (international, local, internal), with version control. |
| **4** | Update integrity is verified: automated ingestion with completeness/failure alarms, end-to-end propagation SLAs measured (list publication → live screening), internal lists governed with defined criteria for addition and removal, and full auditability of which list version applied to any given screen. |
| **5** | List operations are resilient and anticipatory: contingency for feed failures, pre-positioning for expected designation events, jurisdiction-conflict handling (e.g., contradictory sanction regimes) governed with legal sign-off, and periodic independent verification that the lists in production exactly match authoritative sources. |

---

# P5: Transaction Monitoring and Detection

*The detection engine: converting typologies into scenarios and analytics that surface suspicious activity across every product and channel — with quality, coverage, and agility. Anchored in FFIEC BSA/AML (suspicious activity monitoring); informed by FATF typologies, Wolfsberg monitoring guidance, Egmont casework, SARLAFT segmentation and signal expectations.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 5.1 — Detection Design

### 🔷 CORE · 5.1.1 · Typology and scenario coverage

| Level | Descriptor |
|:---:|:---|
| **1** | Monitoring, where it exists, consists of a handful of vendor-default rules unrelated to the institution's actual risks. |
| **2** | Rules exist but their link to typologies is undocumented; whole risk areas identified in the EWRA (e.g., trade, mules, funnel accounts) have no corresponding detection. |
| **3** | A documented scenario inventory maps each rule to the typologies and risks it addresses; coverage is reviewed against the EWRA, and material gaps have remediation plans. |
| **4** | Coverage is risk-complete and current: every material typology in the EWRA maps to detection logic (or a documented, accepted gap); new typologies from FIU alerts, FATF/GAFILAT reports, and internal cases are assessed for coverage within defined SLAs; product and channel launches include detection coverage before go-live. |
| **5** | Coverage is threat-led and agile: typology intelligence converts to deployed detection in days, not quarters; red-team-style testing injects synthetic laundering patterns to verify scenarios actually fire; and coverage is measured empirically (which typologies would we catch, at what stage?) rather than asserted from the inventory. |

### 🔷 CORE · 5.1.2 · Alert quality, thresholds and tuning

| Level | Descriptor |
|:---:|:---|
| **1** | Thresholds are the vendor defaults from installation. Alert volumes are either overwhelming noise or suspiciously silent. |
| **2** | Some thresholds have been adjusted, but changes are undocumented, untested, and driven by backlog pressure rather than risk. |
| **3** | A formal tuning process exists: threshold changes are risk-justified, tested before deployment (including below-the-line sampling), documented, and approved through governance. |
| **4** | Tuning is a managed cycle: periodic above/below-the-line testing quantifies what changes would gain or lose, segment-specific thresholds reflect customer risk and behavior, alert productivity (alert→case→SAR yield) is trended per scenario, and unproductive scenarios are fixed or retired with documented rationale. |
| **5** | Detection quality is continuously optimized: champion/challenger testing of thresholds and logic, feedback loops from investigation outcomes retrain prioritization, and suppression/hibernation logic is governed with the same rigor as detection itself. The institution can demonstrate the false-negative risk it accepts at any threshold — a defensible, quantified position rather than an inherited setting. |

## 5.2 — Advanced Detection and Reach

### 5.2.1 · Behavioral analytics, machine learning and network detection

| Level | Descriptor |
|:---:|:---|
| **1** | Detection is exclusively static rules on single transactions. Relationships and behavior over time are invisible. |
| **2** | Some aggregation exists (velocity, volume over windows), but no behavioral profiling and no view across related accounts or parties. |
| **3** | Behavioral elements operate in production: customer/segment profiling with deviation detection, and initial use of relationship data (shared attributes, counterparty patterns) in monitoring or investigation. |
| **4** | Advanced analytics are embedded: peer-group and behavioral models complement rules, network/graph analytics detect mule rings, funnel structures, and layering chains across the portfolio, and model outputs are integrated into the same case flow with appropriate explainability for investigators and regulators. |
| **5** | Detection is a governed analytics ecosystem: machine learning prioritizes and enriches (with model risk management per P7), graph analytics runs continuously rather than per-investigation, entity resolution unifies identity across products and entities, and privacy-preserving techniques extend detection across institutional boundaries where the legal framework allows. Effectiveness gains over the rules-only baseline are measured and reported. |

### 🔷 CORE · 5.2.2 · Coverage of all products, channels and payment rails

| Level | Descriptor |
|:---:|:---|
| **1** | Only legacy core products are monitored. Digital channels, new payment rails, and subsidiary activity flow unwatched. |
| **2** | Main channels are monitored, but material blind spots exist (e.g., instant payments, wallets, cross-entity flows) with no compensating controls or documented acceptance. |
| **3** | All material products and channels feed monitoring, with data completeness checks; known gaps are documented, risk-accepted at the right level, and scheduled for closure. |
| **4** | Coverage is reconciled and rail-appropriate: source-system-to-monitoring reconciliation proves completeness, instant/real-time rails have detection designed for their speed (pre- or immediately post-transaction), and cross-product views prevent structuring across channels from evading single-channel logic. |
| **5** | Coverage anticipates the frontier: new rails and products (instant schemes, crypto touchpoints, embedded finance flows via partners) are monitored from day one with rail-native latency, cross-entity and cross-border flows are monitored on a consolidated basis, and coverage assurance is continuous — any new unmonitored flow surfaces automatically rather than in next year's audit. |

---

# P6: Investigations, Case Management and Regulatory Reporting

*Where detection becomes outcome: investigating alerts with quality and consistency, deciding and filing SARs/STRs that are useful to authorities, meeting threshold-reporting and recordkeeping obligations, and sharing information lawfully. Anchored in FFIEC BSA/AML and FinCEN SAR/CTR requirements; informed by FATF R.20/R.29, Egmont guidance, local ROS/STR regimes across LATAM.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 6.1 — Investigations and Suspicious Activity Reporting

### 🔷 CORE · 6.1.1 · Case management and investigation quality

| Level | Descriptor |
|:---:|:---|
| **1** | There is no case management. Alerts are dispositioned in spreadsheets or inboxes, with no audit trail and no linkage between related alerts. |
| **2** | A basic case tool exists, but investigations vary wildly by analyst, documentation is thin, related activity is not connected, and backlogs are unmeasured. |
| **3** | A case management system provides workflow, audit trail, and documentation standards; investigation procedures define required steps and evidence; backlog and aging are measured and managed. |
| **4** | Investigation quality is managed: risk-based SLAs, a QA program with sampling and feedback, alert-to-case consolidation across products and time (the analyst sees the whole customer, not one alert), competence requirements per case complexity, and workload models that keep capacity ahead of volume. |
| **5** | Investigation is intelligence-grade: cases auto-assemble the full relationship and network context (linked entities, historical activity, prior cases, external data), analytics assist narrative-relevant evidence gathering under human accountability, decision consistency is measured across analysts, and hindsight reviews of closed cases validate quality against later-confirmed outcomes. |

### 🔷 CORE · 6.1.2 · SAR/STR decisioning, quality and timeliness

| Level | Descriptor |
|:---:|:---|
| **1** | Suspicious activity reports are rarely or never filed, or filed so poorly (boilerplate narratives, missing subjects) as to be useless. |
| **2** | Filings occur but decision criteria are informal, timeliness is inconsistent against regulatory deadlines, and narrative quality is unmanaged. |
| **3** | Documented decision criteria govern file/no-file calls with second review; deadlines are tracked and met; narratives follow a quality standard (who, what, when, where, why, how); continuing-activity reviews operate. |
| **4** | Reporting is decision-quality managed: no-file decisions carry documented rationale subject to QA, narrative quality is sampled and scored, filing data is complete and accurate (validated fields, correct typology codes), and metrics (conversion rates, timeliness, amendment rates) are trended and governed. |
| **5** | Reporting maximizes utility to authorities: narratives are structured for FIU consumption, feedback from FIUs and law enforcement (requests, follow-ups, outcomes where available) loops back into detection and investigation priorities, defensive filing is actively measured and reduced, and the institution can evidence that its reporting contributes to real disruption — the FATF effectiveness standard, not the volume standard. |

## 6.2 — Regulatory Reporting Operations and Information Sharing

### 🔷 CORE · 6.2.1 · Threshold reporting, recordkeeping and data retention

| Level | Descriptor |
|:---:|:---|
| **1** | Currency/threshold reports (CTRs and local equivalents) are missed or chronically late; records required by law cannot be reliably retrieved. |
| **2** | Threshold reporting operates for obvious cases, but aggregation logic is weak (structuring across branches/channels goes unaggregated), exemptions are unmanaged, and retrieval of historical records is slow and uncertain. |
| **3** | Threshold reporting is automated with documented aggregation rules; exemptions are governed and reviewed; recordkeeping meets retention requirements with tested retrieval. |
| **4** | Reporting operations are controlled end-to-end: completeness reconciliations prove every reportable event is captured, rejected/errored filings are remediated within SLAs, aggregation logic is tested against structuring patterns, and records (including monitoring data and case files) are retrievable within regulator-request timeframes with proven drills. |
| **5** | Reporting operations are resilient and analytics-ready: filing pipelines are monitored with automated integrity checks, regulatory data requests of any scope are serviceable quickly from governed data stores, retention covers new data types (digital channel telemetry, model outputs) deliberately, and reporting data doubles as an analytical asset for detecting structuring and typology shifts. |

### 6.2.2 · Lawful information sharing and public-private cooperation

| Level | Descriptor |
|:---:|:---|
| **1** | The institution neither responds effectively to authority requests nor uses any lawful sharing mechanism. Requests languish. |
| **2** | Authority requests (e.g., 314(a)-type list matching, FIU requests) are answered, but late, incompletely, or through improvised processes. |
| **3** | Formal processes handle authority requests within deadlines and with complete searches; where a legal gateway exists (e.g., 314(b)-type inter-institution sharing), participation is considered and governed. |
| **4** | Sharing is an active capability: authority-request handling is measured (timeliness, completeness), inter-institution sharing gateways are used purposefully for live investigations with proper legal controls, and intelligence received (FIU alerts, sector advisories) demonstrably feeds detection and EDD. |
| **5** | The institution is a network actor: it participates in public-private partnerships and typology working groups, contributes and consumes actionable intelligence, pilots privacy-preserving collaborative analytics where the legal framework allows, and measures the detection uplift attributable to shared intelligence — treating collaboration as a control, not a courtesy. |

---

# P7: Data, Technology and Model Risk Management

*The foundation nobody sees until it fails: whether the data feeding screening and monitoring is complete and correct, and whether the models making risk decisions are governed, validated, and explainable. Anchored in FFIEC BSA/AML (systems expectations) and model risk management supervisory guidance (public domain); informed by Wolfsberg technology guidance and emerging AI governance expectations.*

**2 sub-dimensions · 3 components · 2 in Screening Core**

## 7.1 — Data Foundations

### 🔷 CORE · 7.1.1 · Data quality, completeness and lineage for AML systems

| Level | Descriptor |
|:---:|:---|
| **1** | No one can attest that all transactions and customers actually reach the monitoring and screening systems. Feeds break silently. |
| **2** | Main feeds are mapped, but completeness is assumed rather than reconciled; data-quality defects (missing counterparties, truncated fields) are discovered by accident. |
| **3** | Source-to-system data flows are documented, key feeds have completeness reconciliations, and material data-quality issues are logged and remediated. |
| **4** | Data assurance is systematic: automated reconciliations prove completeness for every material feed, field-level quality rules (validity, population, consistency) run continuously with alerting, lineage is documented from source to alert, and data defects are treated as compliance incidents with impact analysis (what did we fail to screen or monitor?). |
| **5** | Data is governed as a first-class control: a data-control framework covers every AML-relevant flow with ownership and SLAs, quality metrics are reported to governance alongside alert metrics, impact of historical defects is quantified and remediated through lookbacks where warranted, and new data sources (digital telemetry, device signals, external data) are onboarded through governed pipelines that preserve lineage and auditability. |

## 7.2 — Model Governance

### 🔷 CORE · 7.2.1 · Model inventory, governance and independent validation

| Level | Descriptor |
|:---:|:---|
| **1** | Monitoring scenarios, screening engines, and risk-rating logic are not recognized as models. Nothing is inventoried or validated. |
| **2** | Some systems are acknowledged as models, but validation is a one-time vendor assurance or an internal review without independence or depth. |
| **3** | An inventory covers AML models (monitoring scenarios, screening matching, customer risk rating), each with an owner, documentation, and periodic independent validation covering conceptual soundness, data, and performance. |
| **4** | Model risk management is fully applied: validations test what matters (false-negative risk, threshold sensitivity, segment performance), findings carry mandatory remediation with governance tracking, changes go through controlled release with testing, and ongoing monitoring detects performance drift between validations. |
| **5** | Model governance is continuous and proportionate: automated performance monitoring with drift alarms, validation depth scaled to model materiality and complexity, challenger models test incumbent assumptions, and the full decision chain (data → model → threshold → alert → outcome) is reconstructible for any historical decision an examiner questions. |

### 7.2.2 · AI and advanced analytics governance in AML

| Level | Descriptor |
|:---:|:---|
| **1** | AI/ML is either absent or used informally with no governance — outputs influence decisions without anyone owning the risk. |
| **2** | ML pilots exist but outside model governance: no documentation of training data, no bias assessment, no explainability standard, no fallback. |
| **3** | AI/ML used in AML processes is inventoried and governed: documented purpose and data, human accountability for consequential decisions, and explainability sufficient for investigators to act on outputs. |
| **4** | AI governance is substantive: bias and disparate-impact testing where models touch customers, explainability standards matched to decision type (triage vs. reporting), performance benchmarked against pre-AI baselines, degradation and adversarial-manipulation risks assessed, and regulator-ready documentation of how each model works and is controlled. |
| **5** | AI is a governed advantage: generative and advanced models (e.g., investigation assistance, narrative drafting) operate under defined guardrails with human sign-off on regulatory outputs, continuous monitoring covers drift, leakage, and misuse, the institution can evidence outcome improvement (detection uplift, quality, timeliness) attributable to AI, and its governance anticipates emerging AI regulation across its jurisdictions. |

---

# P8: Products, Third Parties and High-Risk Channels

*Where new risk enters: launching products with eyes open, managing correspondent and intermediary relationships, and governing the fintech/BaaS partnerships through which the institution's rails serve customers it never onboarded. Anchored in FFIEC BSA/AML (correspondent, MSB, new-product expectations); informed by FATF R.13/R.17, Wolfsberg correspondent banking (CBDDQ) guidance, regional BaaS/fintech supervisory expectations.*

**2 sub-dimensions · 3 components · 2 in Screening Core**

## 8.1 — Product and Channel Risk

### 🔷 CORE · 8.1.1 · New product, service and channel risk approval

| Level | Descriptor |
|:---:|:---|
| **1** | Products and channels launch with no AML review. Compliance finds out after go-live — or from the regulator. |
| **2** | AML review happens informally or late for some launches, with no defined process, criteria, or authority to stop a launch. |
| **3** | A formal new-product approval process includes mandatory AML risk assessment before launch, with documented conditions (controls, monitoring coverage) and AML sign-off authority. |
| **4** | The process has teeth and reach: it covers material changes to existing products (not just new ones), conditions are verified as implemented before launch, post-launch reviews confirm the risk behaves as assessed, and the EWRA and detection coverage update as part of the launch, not after it. |
| **5** | Product risk governance is anticipatory: emerging-risk analysis (instant rails, crypto features, embedded finance) informs design before proposals mature, launch conditions include measurable detection readiness tested pre-go-live, and a portfolio view of product risk evolution is reported to governance — the institution shapes its risk profile deliberately rather than discovering it. |

### 8.1.2 · Correspondent banking and nested relationships

| Level | Descriptor |
|:---:|:---|
| **1** | Correspondent relationships (where they exist) are maintained with no AML due diligence on the respondent or understanding of downstream customers. |
| **2** | Basic due diligence exists on direct respondents, but nested/downstream activity, payable-through exposure, and respondent-program quality are not assessed. |
| **3** | Correspondent due diligence follows a defined standard (e.g., structured questionnaires), risk-rates respondents, prohibits shell-bank exposure, and reviews relationships periodically. |
| **4** | Correspondent risk is actively managed: respondents' own AML programs are substantively assessed (not just documented), nested activity is identified and either understood or restricted, transaction activity is monitored against the expected profile per relationship, and deviations trigger review, restriction, or exit. |
| **5** | Correspondent oversight is data-driven: corridor and counterparty analytics detect profile drift and unusual downstream patterns in near-real time, relationship risk aggregates into a portfolio view with concentration limits, exits are executed cleanly, and intelligence (typologies, regulatory actions on respondents) feeds ongoing assessment. Where the institution is itself a respondent, it can evidence its program to counterparties at frontier standard. |

## 8.2 — Fintech Partnerships and Intermediated Business

### 🔷 CORE · 8.2.1 · BaaS, agents, and fintech program oversight

| Level | Descriptor |
|:---:|:---|
| **1** | The institution provides rails or accounts to fintechs/agents with no visibility into the end customers or the partner's AML controls. |
| **2** | Partner contracts mention compliance obligations, but there is no onboarding due diligence standard, no ongoing oversight, and no access to end-customer or transaction detail sufficient to monitor. |
| **3** | A defined program governs intermediated business: partner AML due diligence before onboarding, contractual obligations (KYC standards, data access, audit rights, termination), and monitoring of partner-originated flows. |
| **4** | Oversight is substantive and continuous: partners' KYC and monitoring are tested (not just attested), end-customer data flows to the institution at the granularity its own obligations require, partner-level risk metrics (alert rates, SAR yield, complaint and fraud signals) are trended, and underperforming partners face remediation or offboarding with evidence. |
| **5** | Intermediated business is controlled as if direct: the institution maintains customer-level visibility and monitoring across all partner programs, onboards partners through risk-tiered due diligence with technical integration testing, detects partner-program abuse patterns (synthetic onboarding waves, mule recruitment through partner apps) with dedicated analytics, and can demonstrate to any regulator that outsourced acquisition never meant outsourced accountability. |

---

# P9: Training, Culture and Human Capital

*The human layer: whether people at every level know their obligations, whether the culture supports escalation over revenue, and whether the AML function can attract and keep the expertise it needs. Anchored in FFIEC BSA/AML (training pillar); informed by FATF guidance on effectiveness, Wolfsberg culture-of-compliance publications.*

**2 sub-dimensions · 3 components · 2 in Screening Core**

## 9.1 — Training and Awareness

### 🔷 CORE · 9.1.1 · Role-based AML training program

| Level | Descriptor |
|:---:|:---|
| **1** | No AML training exists, or a single generic module is recycled for everyone regardless of role. |
| **2** | Annual generic training operates as a checkbox: same content for tellers, private bankers, and the Board; completion tracked, comprehension not. |
| **3** | Training is role-based and recurring: frontline, high-risk functions, compliance, and the Board receive differentiated content; completion is enforced and comprehension is assessed. |
| **4** | Training is risk-targeted and current: content updates with new typologies, products, and findings; high-risk roles train more often and deeper; effectiveness is measured beyond quizzes (escalation quality, control performance); and case-based learning uses the institution's own (sanitized) matters. |
| **5** | Capability development is continuous: micro-learning triggered by role changes, product launches, and typology alerts; specialist curricula (sanctions, trade, crypto, investigations) with certification paths; training effectiveness is correlated with operational outcomes (referral quality, error rates), and gaps feed the program automatically. |

### 9.1.2 · Compliance culture and incentives

| Level | Descriptor |
|:---:|:---|
| **1** | Culture rewards looking away: revenue pressure overrides escalation, and raising AML concerns is career-limiting. |
| **2** | Leadership voices support for compliance, but incentives are untouched — bonuses reward volume regardless of financial crime hygiene, and escalations are quietly discouraged. |
| **3** | The tone from the top is consistent, escalation channels exist and are used without retaliation, and serious compliance failures carry visible consequences. |
| **4** | Culture is engineered, not hoped for: financial crime metrics enter performance objectives and compensation for business leaders, escalation volume and quality are tracked as health signals, culture is measured (surveys, focus reviews) and acted on, and the business demonstrably accepts revenue loss for risk decisions. |
| **5** | Culture is a demonstrable control: behavioral indicators (escalation patterns, override rates, exit-decision friction) are monitored and reported to the Board, consequence management is consistent across seniority, culture findings from independent reviews drive concrete change, and the institution can evidence — with decisions, not slogans — that financial crime risk outranks short-term revenue. |

## 9.2 — Capacity

### 🔷 CORE · 9.2.1 · Staffing capacity, expertise and retention

| Level | Descriptor |
|:---:|:---|
| **1** | The AML team is chronically understaffed and undertrained; backlogs are structural and turnover erases what little expertise accumulates. |
| **2** | Headcount exists but is sized by history rather than workload; expertise is concentrated in one or two people; surge events (a lookback, a remediation) break the operation. |
| **3** | Capacity is planned against measured workload (alerts, cases, reviews), specialist roles are defined, and vacancies and turnover are managed actively. |
| **4** | Workforce management is quantitative: capacity models project demand by process, quality-adjusted productivity is tracked, surge strategies exist (cross-training, managed services with oversight), and scarce expertise (sanctions, crypto, data science) is deliberately built or acquired with retention plans. |
| **5** | The workforce is a strategic asset: capability maps identify and close expertise gaps ahead of need, career paths and rotation keep institutional knowledge while renewing perspective, augmentation (analytics, AI assistance) is deployed to raise analyst leverage rather than mask under-resourcing, and capacity health is a Board-visible metric with defined risk thresholds. |

---

# P10: Independent Testing and Audit

*The verification layer: whether someone independent, competent, and empowered regularly proves the program works — and whether what they find actually gets fixed. Anchored in FFIEC BSA/AML (independent testing pillar); informed by IIA standards, FATF effectiveness methodology, supervisory exam practice.*

**1 sub-dimension · 2 components · 2 in Screening Core**

## 10.1 — Assurance and Remediation

### 🔷 CORE · 10.1.1 · Independent testing: scope, depth and competence

| Level | Descriptor |
|:---:|:---|
| **1** | No independent testing occurs, or the "test" is a courtesy review by people who report to the function being tested. |
| **2** | Periodic audits occur but are checklist-based, skip technical areas (thresholds, matching logic, data completeness), and use staff without AML expertise. |
| **3** | Independent testing on a defined cycle covers the program's pillars with documented methodology, risk-based scoping, and testers with adequate AML competence and independence. |
| **4** | Testing is substantive: it validates control effectiveness (transaction testing, alert re-performance, below-threshold sampling, data reconciliation) rather than policy existence; technical domains (tuning, screening logic, model performance) are in scope with the right skills, and coverage over the cycle is complete against the EWRA. |
| **5** | Assurance is continuous and effectiveness-focused: automated control testing runs between audit cycles, thematic deep-dives track emerging risks, testing evaluates outcomes (would this program detect the typologies that matter?) in the spirit of FATF effectiveness, and the assurance function itself is externally quality-assessed. |

### 🔷 CORE · 10.1.2 · Findings remediation and examination readiness

| Level | Descriptor |
|:---:|:---|
| **1** | Findings from audits and exams disappear into inboxes. The same issues resurface exam after exam. |
| **2** | Findings are logged, but remediation slips chronically, closure is self-declared without validation, and root causes are never addressed. |
| **3** | A governed remediation process tracks findings with owners, dates, and severity; closure requires evidence; overdue items escalate; and regulatory commitments are managed with priority. |
| **4** | Remediation is credible: closure is independently validated, root-cause analysis prevents recurrence (and recurrence is measured), aging and themes are reported to the Board, and examination readiness is maintained continuously — evidence, data, and narratives are producible on demand, not assembled in panic. |
| **5** | The institution stays ahead of its examiners: self-identified issues (found and fixed before external parties do) dominate the findings mix and are tracked as a health indicator, thematic analysis of findings drives structural fixes, mock examinations test readiness under realistic pressure, and regulatory relationships are managed with transparency that has been earned, not asserted. |

---

# P11: AML–Fraud–Cyber Convergence

*Cross-cutting, differentiating pillar — the mirror of CMA P11, seen from the AML side. It does not re-own monitoring, KYC, or the SOC: it assesses how integrated the three financial crime disciplines operate against threats that cut across them — mule networks laundering fraud proceeds, account takeover feeding money movement, scams generating reportable flows, synthetic identities defeating onboarding. The hinge that binds AMA, CMA, and the FCMA fraud framework into one family. Anchored in FFIEC expectations of enterprise-wide risk management; informed by FATF typologies linking cyber-enabled fraud and ML, Egmont casework, FinCrime convergence practice (proprietary lens).*

**2 sub-dimensions · 3 components · 2 in Screening Core**

## 11.1 — Convergence Operating Model

### 🔷 CORE · 11.1.1 · Integrated financial crime governance (AML–fraud–cyber)

| Level | Descriptor |
|:---:|:---|
| **1** | AML, fraud, and cyber operate in complete silos with separate governance, taxonomies, and languages. A mule network is three different unshared problems. |
| **2** | Collaboration is informal and case-triggered; no shared structure, mandate, or taxonomy exists, and joint work depends on personal relationships. |
| **3** | A standing forum connects the three disciplines with defined escalation channels for cross-domain cases and some shared reporting. |
| **4** | A formal convergence operating model exists: joint governance, a shared financial crime taxonomy, defined cross-domain case processes with clear ownership, and integrated financial crime risk reporting to the Board. |
| **5** | Convergence is structural: unified financial crime strategy and appetite, a merged function (Financial Crime Unit) or coordination of equivalent maturity, integrated metrics, and a model that treats AML, fraud, and cyber as facets of one risk. The value of convergence is measured — cases and networks detected that any silo alone would have missed. |

### 🔷 CORE · 11.1.2 · Shared signals and cross-domain typologies

| Level | Descriptor |
|:---:|:---|
| **1** | AML never sees fraud or cyber signals. A confirmed account takeover generates no AML review; confirmed fraud proceeds move unmonitored. |
| **2** | Signals cross domains manually and occasionally — an investigator remembers to ask — with no systematic feeds or defined use cases. |
| **3** | Defined cross-domain use cases operate: confirmed fraud triggers AML review of the receiving accounts, cyber-compromise events flag affected customers for monitoring attention, and mule indicators flow between fraud and AML. |
| **4** | Signal sharing is systematic: fraud outcomes, cyber telemetry (credential compromise, device signals), and AML data enrich each other's detection and investigation; convergent typologies (mule networks, APP-scam proceeds, ATO-driven layering) have dedicated joint detection; and investigations assemble the cross-domain picture by default. |
| **5** | A unified analytics layer correlates the three domains in real time: an identity compromise triggers fraud controls and AML review automatically; graph analytics spans fraud rings and laundering networks as one object; SAR narratives incorporate the cyber-fraud chain, raising their value to authorities; and joint typology development turns each domain's intelligence into the others' detection within days. |

## 11.2 — Identity as a Common Surface

### 11.2.1 · Customer identity across KYC, fraud and authentication

| Level | Descriptor |
|:---:|:---|
| **1** | Onboarding KYC, fraud identity checks, and authentication operate as unrelated silos with separate data. Synthetic identities pass KYC because no one connects the signals. |
| **2** | The areas acknowledge the shared identity problem, but verification, fraud screening, and authentication remain separate controls with separate vendors and no shared view. |
| **3** | Identity signals are shared for key cases: fraud-confirmed identities feed KYC review, ATO signals inform customer risk, and synthetic-identity findings flow to onboarding rules. |
| **4** | Customer identity is governed as one surface: onboarding verification, ongoing authentication, and identity-fraud detection share data and reinforce each other across the lifecycle; synthetic identity, impersonation, and ATO are covered by design; and identity risk feeds the AML customer risk rating. |
| **5** | A unified identity-trust strategy spans the customer lifecycle: risk-based continuous verification, real-time signal sharing across KYC/fraud/cyber, defense against frontier threats (synthetic identity at scale, deepfakes in verification, AI-assisted impersonation), and identity treated as a first-order financial crime control — measured, governed, and reported as such. |

---

*End of framework · Pillars 1–11 complete · v0.1 · All descriptors are original wording (synthesis); sources are cited as "informed by," without reproducing their text. Companion to the CMA (cyber) and FCMA (fraud) frameworks. Pending joint review and adjustment.*
