# Cyber Maturity Assessment (CMA) — v0.2 · Pillars 1–11

*Cybersecurity maturity model for world-class banking. Skeleton anchored in NIST CSF 2.0 (public domain); original synthesis informed by ISO 27001/27002, FFIEC, NYDFS Part 500, DORA, MITRE ATT&CK, and LATAM references (SFC Colombia, CNBV Mexico, BCB/CMN Brazil, SB Ecuador). 1–5 scale where Level 5 represents frontier practice, not merely "optimized." All descriptors are original wording; sources are cited as "informed by," without reproducing their text.*

**Coverage: 11 pillars · NIST CSF 2.0 functions — GOVERN (P1–P3), IDENTIFY (P4), PROTECT (P5–P8), DETECT (P9), RESPOND+RECOVER (P10) + cross-cutting convergence pillar (P11).**

---

# P1: Cyber Governance, Strategy and Risk Appetite

*Strategic layer assessing whether the bank has an articulated cybersecurity vision aligned to the business, effective Board oversight, a living policy framework, and a quantified risk appetite. Anchored in NIST CSF 2.0 (GV.OC, GV.RM, GV.RR, GV.PO); informed by ISO 27001 cl. 5, NYDFS 500.04, DORA art. 5.*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 1.1 — Strategy and Operating Model

### 🔷 CORE · 1.1.1 · Documented cybersecurity strategy aligned to the business

| Level | Descriptor |
|:---:|:---|
| **1** | No document articulates the cybersecurity strategy. Decisions are made project by project, reactively, with no guiding framework. |
| **2** | A presentation or informal document with security objectives exists, but it is not approved by senior management, has no defined validity period, and no explicit link to the bank's strategy. |
| **3** | A formal cybersecurity strategy exists, approved by an executive committee, with measurable objectives, a defined horizon (1–3 years), and reference to the adopted framework (e.g., NIST CSF). |
| **4** | The strategy is Board-approved, reviewed at least annually, includes quantitative targets (control coverage, exposure reduction, target MTTD/MTTR) reported quarterly, and is linked to the business strategy and the digital transformation plan. |
| **5** | The strategy is forward-looking (3–5 year threat horizon scanning, threat modeling per business line), is updated upon every regulatory change, product launch, or major event, and explicitly incorporates frontier trajectories: zero trust, digital operational resilience, and post-quantum cryptography (PQC) readiness. It is benchmarked against Tier-1 peers, not against baseline. |

### 🔷 CORE · 1.1.2 · Board oversight and dedicated cybersecurity committee

| Level | Descriptor |
|:---:|:---|
| **1** | The Board receives no structured cybersecurity information. The topic lives inside IT with no escalation. |
| **2** | The Board receives sporadic security reports, typically only after an incident. There is no defined cadence and no cyber lead with direct access to the Board. |
| **3** | Cyber risk is reported periodically to a committee (typically the Risk Committee), with a CISO or equivalent presenting on a recurring basis. |
| **4** | Formal, recurring Board oversight exists with a defined cadence; at least one Board member has demonstrable cyber/technology competence; decisions are minuted and commitments are tracked. |
| **5** | A cybersecurity committee **independent** from the Risk Committee exists, with its own mandate, quorum, and metrics; the Board exercises its role through executive-level crisis simulations (executive tabletops) and challenge sessions on frontier scenarios (supply chain attack, systemic ransomware). The effectiveness of oversight is itself evaluated and reported. |

## 1.2 — Policies and Risk Appetite

### 🔷 CORE · 1.2.1 · Cybersecurity policy framework

| Level | Descriptor |
|:---:|:---|
| **1** | No body of cybersecurity policies exists. Practices depend on each team's individual judgment. |
| **2** | Scattered policies cover only some domains (e.g., passwords, acceptable use), without formal approval or a review process. |
| **3** | An enterprise-wide policy framework exists, approved by an executive committee, with a clear hierarchy (policy → standard → procedure) and defined validity. Employees acknowledge receipt. |
| **4** | The framework covers all domains of the model, is Board-approved, is reviewed annually with trigger events (new regulation, new channel, major incident), and a traceability matrix exists between each policy and the applicable regulatory requirements (US + the LATAM jurisdictions where the bank operates). |
| **5** | Policies are managed as living controls: updates within 30 days of regulatory/technology changes, auditable versioning, and measurement of **actual adherence** (not mere existence) through continuous control monitoring. Traceability is multi-jurisdictional (e.g., NYDFS 500, DORA, SFC/CNBV/BCB) and is maintained as a queryable data object, not a static annex. |

### 🔷 CORE · 1.2.2 · Quantified cyber risk appetite and tolerance

| Level | Descriptor |
|:---:|:---|
| **1** | No cyber risk appetite exists. It has never been discussed in any committee. |
| **2** | Appetite is expressed qualitatively ("low," "moderate") without metrics, and is not Board-approved. |
| **3** | Appetite is quantified in at least one metric (e.g., maximum acceptable exposure, % of critical assets unpatched, RTO of critical services) and is Board-approved. |
| **4** | Appetite is quantified by domain and by asset/service criticality, with tolerances, early-warning thresholds, and escalation thresholds; deviation vs. appetite is reported monthly to the relevant committee. |
| **5** | Appetite is calibrated with actual loss/exposure data, peer benchmarking, and economic risk quantification (e.g., FAIR); it undergoes stress testing and adverse scenarios, and is adjusted dynamically. Limits feed automated operational decisions (e.g., blocking deployments that would exceed the exposure threshold). |

### 1.2.3 · Roles, responsibilities and RACI (incl. CISO independence)

| Level | Descriptor |
|:---:|:---|
| **1** | Cybersecurity roles are undefined. No formal figure is accountable for information security. |
| **2** | An informal security lead exists, frequently subordinated to IT, without a written mandate or segregation of duties from those who operate the technology. |
| **3** | A CISO or equivalent exists with a formally defined role and a basic RACI for the main security functions. |
| **4** | The CISO has organizational independence from IT (does not report to those they must oversee), with a reporting line to the Board or a risk C-level; the RACI covers all domains and is aligned to the three-lines-of-defense model. |
| **5** | The structure is externally validated, with proven segregation of duties, succession planning for critical roles, and team coverage/capacity metrics (skills gap, 24/7 coverage ratio) actively managed. Roles adapt to new surfaces (e.g., cloud security lead, digital operational resilience owner). |

---

# P2: Compliance, Risk and Assurance

*Assesses the discipline of cyber risk management (how risk is identified, measured, and reported), multi-jurisdictional regulatory traceability, and the strength of independent assurance. It is the hinge between governance and operations. Anchored in NIST CSF 2.0 (GV.RM, GV.OV, ID.RA); informed by ISO 27005, FFIEC IT Handbook, NYDFS 500.02/500.06, DORA ch. II.*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 2.1 — Cyber Risk Management

### 🔷 CORE · 2.1.1 · Cybersecurity risk assessment methodology

| Level | Descriptor |
|:---:|:---|
| **1** | No cyber risk assessment methodology exists. Risks are addressed only when they materialize. |
| **2** | One-off, isolated assessments are performed (e.g., only for an audit or a project), without a consistent methodology or a risk inventory. |
| **3** | A documented risk assessment methodology exists, with a defined scale (likelihood × impact), applied periodically to critical assets/processes, and a maintained risk register. |
| **4** | The methodology is enterprise-wide, integrates inherent and residual risk, links each risk to controls and owners, runs on a defined cadence plus change-driven triggers, and its results feed investment prioritization and Board reporting. |
| **5** | Quantification is economic (e.g., FAIR / expected loss in USD), informed by threat intelligence and scenario modeling (incl. supply chain attacks and systemic events); risk assessment is continuous—not annual—fed by near-real-time exposure telemetry, and is validated against reality through threat-led testing (red team, purple team). |

### 🔷 CORE · 2.1.2 · KRIs, metrics and Board reporting

| Level | Descriptor |
|:---:|:---|
| **1** | No cyber risk indicators are measured. There is no structured reporting. |
| **2** | Loose operational metrics are reported (e.g., number of incidents, patches applied) without risk context or thresholds. |
| **3** | A defined KRI set exists, with thresholds, reported periodically to the risk committee; metrics measure program performance (e.g., MFA coverage, % of assets inventoried). |
| **4** | KRIs measure **actual risk level**, not just performance (e.g., exposure window of critical vulnerabilities, configuration drift, MTTD/MTTR); they are consolidated into Board-level indices, with trends and comparison vs. appetite, and trigger action when thresholds are exceeded. |
| **5** | Reporting integrates external factors (threat landscape, sector attacks, third-party intel) dynamically adjusting thresholds; an executive dashboard in business language (risk in USD, resilience of critical services) is generated automatically from authoritative sources, with no manual consolidation. Benchmarked against Tier-1 peers. |

## 2.2 — Compliance and Assurance

### 🔷 CORE · 2.2.1 · Multi-jurisdictional regulatory traceability

| Level | Descriptor |
|:---:|:---|
| **1** | There is no mapping between the bank's controls and regulatory requirements. Compliance is demonstrated improvisationally at each examination. |
| **2** | An informal understanding of the main obligations exists (e.g., the local regulator), but with no traceability matrix or structured evidence. |
| **3** | A matrix maps controls to the primary regulator(s)' requirements, with evidence identified per control. |
| **4** | Traceability is multi-jurisdictional (US + each LATAM jurisdiction of operation + applicable global standards such as ISO/PCI DSS), with one control satisfying multiple requirements mapped once ("test once, satisfy many"), and versioned evidence available to examiners. |
| **5** | Compliance is continuous and demonstrable on demand: automated control monitoring produces near-real-time evidence; the matrix absorbs new requirements (e.g., DORA, NYDFS updates, BCB/SFC/CNBV rules) through a regulatory horizon-scanning process; gaps are detected before the exam, not during it. |

### 🔷 CORE · 2.2.2 · Internal audit and independent control validation

| Level | Descriptor |
|:---:|:---|
| **1** | Cybersecurity controls are neither audited nor independently validated. Effectiveness is assumed. |
| **2** | Sporadic reviews occur, typically self-assessments by the security team itself, with no independence. |
| **3** | Internal audit (second/third line) reviews cybersecurity per a plan, and one-off external validations exist (e.g., regulation-mandated annual pentest). |
| **4** | A risk-based assurance program exists, with cyber-competent internal audit, independent external validations (configuration audits, internal and external pentesting), and a formal findings follow-up cycle through closure. Validation reduces reliance on self-assessment. |
| **5** | Assurance combines lines of defense with **continuous adversarial technical validation**: red teaming and intelligence-led exercises (TIBER-EU / CBEST / iCAST style), recurring purple teaming, and automated control assurance. Results feed back into risk assessment and strategy. The independence and competence of assurance are periodically evaluated. |

### 2.2.3 · Findings, exceptions and remediation management

| Level | Descriptor |
|:---:|:---|
| **1** | Findings from audits, exams, and tests are not centrally managed. Many are never remediated. |
| **2** | Findings are logged in scattered spreadsheets, without clear owners or remediation SLAs; follow-up is inconsistent. |
| **3** | A centralized findings repository exists with owner, severity, and target date; exceptions are documented and approved. |
| **4** | Remediation is managed with severity-based SLAs, escalation upon breach, and aging reported to the committee; risk exceptions have validity periods, owners, and approval at the appropriate level, and are reviewed at expiry. |
| **5** | Findings management is predictive and risk-based: prioritization uses real exposure and asset criticality (not just nominal severity); aging and exceptions are monitored in real time with automatic alerts; recurring root causes are analyzed and closed systemically, not case by case. |

---

# P3: Third-Party and Supply Chain Cyber Risk

*Elevates third-party risk to its own pillar—following the CRI/Deloitte criterion of treating it as an "Extend" function—because in banking the attack surface increasingly lives outside the perimeter. Covers the vendor lifecycle and systemic supply chain risk (fourth party, concentration, resilience). Anchored in NIST CSF 2.0 (GV.SC); informed by ISO 27036, FFIEC Outsourcing, NYDFS 500.11, DORA ch. V.*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 3.1 — Third-Party Lifecycle

### 🔷 CORE · 3.1.1 · Vendor due diligence and inherent risk tiering

| Level | Descriptor |
|:---:|:---|
| **1** | No cyber risk evaluation of vendors exists. Contracts are signed without assessing the vendor's security posture. |
| **2** | Informal reviews are done only for some large vendors, with no consistent criteria or risk classification. |
| **3** | A pre-contract due diligence process exists with a security questionnaire and a vendor classification by inherent risk (high/medium/low). |
| **4** | Tiering is methodological (by data access, service criticality, network connectivity) and defines due diligence depth; high-risk vendors are assessed with technical evidence (certifications, SOC 2 reports, testing), not just self-declared questionnaires. The third-party inventory is complete and maintained. |
| **5** | Due diligence is complemented with **continuous external monitoring** of the vendor's posture (security ratings, external surface exposure, breach intel) and independent validation for the most critical third parties; tiering is recalculated dynamically upon service changes or deterioration signals. The risk of third-party-provided AI/models is explicitly assessed. |

### 🔷 CORE · 3.1.2 · Contractual clauses, audit rights and notification

| Level | Descriptor |
|:---:|:---|
| **1** | Contracts include no cybersecurity clauses. There are no incident notification obligations. |
| **2** | Some contracts include generic confidentiality clauses, but no specific security requirements, audit rights, or notification timelines. |
| **3** | Contracts with relevant vendors include security requirements, incident notification obligations, and confidentiality clauses, validated by Legal. |
| **4** | Standardized contractual requirements exist by risk level: audit rights, security SLAs, defined incident notification timelines (e.g., ≤72/48h), subcontracting obligations, and documented exit strategies. Contractual compliance is monitored. |
| **5** | Contracts include enforceable, verifiable resilience metrics, the right to participate in joint testing (e.g., IR exercises), notification requirements aligned to each jurisdiction's regulatory windows, and frontier clauses (transparency on AI use, escrow, PQC roadmap requirements). Compliance is verified with evidence, not assumed. |

### 3.1.3 · Continuous monitoring and secure offboarding

| Level | Descriptor |
|:---:|:---|
| **1** | There is no monitoring of vendor posture after contracting. Termination ignores security (access stays live, data is not returned/destroyed). |
| **2** | Monitoring is ad hoc; offboarding depends on the business area's judgment, with no access-revocation checklist or data handling. |
| **3** | High-risk vendors are reassessed periodically (e.g., annual due diligence) and an offboarding procedure exists with access revocation and data disposition. |
| **4** | Monitoring is continuous for critical vendors (certification reviews, incident alerts, SLA performance); offboarding is formalized with verified access revocation, certified data return/destruction, and connectivity closure, with evidence. |
| **5** | Monitoring combines real-time external signals (ratings, breaches, exposure) with telemetry of the third party's connectivity; deterioration triggers automatic reassessment; offboarding is orchestrated and auditable end-to-end, and the absence of residual access is proven through technical validation. |

## 3.2 — Systemic Supply Chain Risk

### 🔷 CORE · 3.2.1 · Fourth-party and concentration risk

| Level | Descriptor |
|:---:|:---|
| **1** | The bank sees only its direct vendors. There is no visibility or consideration of subcontractors (fourth party) or concentration. |
| **2** | The existence of subcontractors and shared dependencies is acknowledged, but they are neither mapped nor managed. |
| **3** | Fourth-party dependencies of critical vendors are identified and concentration in key providers is recognized (e.g., the same hyperscaler or the same core banking platform). |
| **4** | A supply chain map of critical services exists (vendor → subcontractors → underlying infrastructure), with concentration analysis and single points of failure, feeding mitigation decisions (multi-vendor, contingency). |
| **5** | Concentration and fourth-party risk are modeled at a systemic level (scenarios of a sector-shared provider failing), impact is quantified, and it is managed with active strategies (diversification, portable exit, subcontracting transparency requirements). The bank participates in sector-level supply chain visibility initiatives. |

### 🔷 CORE · 3.2.2 · Resilience and recovery required from critical third parties

| Level | Descriptor |
|:---:|:---|
| **1** | Critical vendors are neither required nor verified to have recovery capability. Service continuity is assumed. |
| **2** | It is assumed that large vendors "have their own plan," but no evidence is requested nor integrated into the bank's continuity. |
| **3** | Critical vendors are asked for evidence of continuity/recovery plans (RTO/RPO), documented as part of due diligence. |
| **4** | Critical third parties' RTO/RPO are aligned with the bank's resilience objectives and integrated into its BIA; the existence and testing of vendor plans are verified, and third-party failure scenarios are included in the bank's continuity exercises. |
| **5** | Supply chain resilience is jointly tested (coordinated recovery exercises with critical vendors), verifiable impact tolerance is required, and the bank maintains the ability to operate through the prolonged unavailability of a critical vendor (portable exit, proven contingency). Aligned to digital operational resilience frameworks (e.g., DORA). |

---

# P4: Asset, Data and Exposure Surface Management

*First IDENTIFY pillar. Assesses whether the bank knows what it has, what it is worth, and where it can be attacked: an authoritative asset inventory, data classification, discovery of the unmanaged (shadow IT), and visibility of the external exposure surface. You cannot protect what you do not know. Anchored in NIST CSF 2.0 (ID.AM, ID.RA-01); informed by ISO 27001 A.5.9/A.5.12, CIS Controls 1–3 (conceptual), FFIEC IT Asset Mgmt.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 4.1 — Inventory and Classification

### 🔷 CORE · 4.1.1 · Asset inventory and authoritative CMDB

| Level | Descriptor |
|:---:|:---|
| **1** | No asset inventory exists. No one can answer with certainty how many servers, endpoints, or applications the bank has. |
| **2** | Partial, scattered inventories exist (spreadsheets per team), outdated and unreconciled with each other. |
| **3** | A centralized inventory of hardware, software, and applications exists, with an owner assigned per asset, updated periodically through discovery tools. |
| **4** | An authoritative CMDB consolidates the sources of truth (network discovery, agents, EDR, scanners) into a single reconciled record; each asset has an owner, criticality, and classification; coverage is measured and gaps are closed. Includes cloud assets, containers, and SaaS, not only on-prem. |
| **5** | The inventory is continuous and near-real-time, with automatic reconciliation across sources and immediate detection of new or unauthorized assets; it covers the entire surface (on-prem, multi-cloud, OT/IoT where applicable, identities, data, AI models) and automatically feeds risk prioritization and response. Inventory completeness is treated as a KRI reported to the Board. |

### 🔷 CORE · 4.1.2 · Data classification and sensitive information mapping

| Level | Descriptor |
|:---:|:---|
| **1** | Data is not classified. No distinction is made between public information and critical customer data. |
| **2** | A classification scheme exists on paper (e.g., public/internal/confidential), but it is not applied consistently and no one knows where sensitive information resides. |
| **3** | A formal classification scheme is applied at the system level, with defined data owners and sensitive-information repositories identified. |
| **4** | Classification covers the full data lifecycle (creation, use, storage, retention, disposal), with mapping of critical data flows, alignment to privacy/residency obligations per jurisdiction (LATAM + global), and periodic validation. |
| **5** | Classification and sensitive-data discovery are automated and continuous (assisted data discovery/labeling), including unstructured data and cloud repositories; flow mapping stays live and directly feeds DLP, encryption, and access controls (governed in P6). Classification is applied as a persistent attribute that travels with the data. |

## 4.2 — Visibility and Exposure Surface

### 4.2.1 · Shadow IT and discovery of unmanaged assets

| Level | Descriptor |
|:---:|:---|
| **1** | There is no capability to detect assets, applications, or cloud services used outside IT. Shadow IT is invisible. |
| **2** | Shadow IT is known to exist (e.g., SaaS contracted by business areas), but detection is anecdotal and reactive. |
| **3** | Controls detect part of the shadow IT (e.g., SaaS discovery via proxy/CASB, network scanning for unregistered devices). |
| **4** | Discovery of unmanaged assets is systematic and covers multiple vectors (network, cloud, SaaS via CASB, orphaned identities); findings are reconciled against the inventory and their onboarding or blocking is governed. |
| **5** | Discovery is continuous and multi-surface, with near-immediate detection of any unauthorized asset, cloud service, or identity; the "unmanaged asset rate" is measured as a control indicator and integrated with external ASM. The process actively reduces shadow IT, not merely detects it. |

### 🔷 CORE · 4.2.2 · External Attack Surface Management (ASM)

| Level | Descriptor |
|:---:|:---|
| **1** | The bank has no visibility of its external attack surface. It does not know which of its assets are visible and reachable from the internet. |
| **2** | Knowledge of external exposure is point-in-time (e.g., whatever an annual pentest surfaces), with no continuous view or inventory of exposed assets. |
| **3** | An inventory of internet-exposed assets exists (domains, IPs, certificates, services), reviewed periodically to detect unwanted exposure. |
| **4** | An External Attack Surface Management (EASM) capability discovers and recurrently monitors the bank's external footprint—including forgotten assets, subdomains, cloud exposure, and leaks on public surfaces—reconciled with the inventory and risk-prioritized. |
| **5** | ASM is continuous and complemented by the adversary's perspective: permanent outside-in discovery, correlation with threat intelligence on which exposure is being actively exploited, and monitoring of brand/assets across clear/deep/dark surfaces. Findings are automatically routed to exposure management and remediation (P9) with criticality-based SLAs. The exposed surface is treated as a board-legible risk metric and trends downward over time. |

---

# P5: Identity and Access Management (IAM / PAM)

*First PROTECT pillar and, in modern banking, the true perimeter: identity is the dominant attack surface. Assesses identity lifecycle management, role-based access control, protection of privileged and service accounts, authentication strength, and identity governance. Anchored in NIST CSF 2.0 (PR.AA); informed by ISO 27001 A.5.15–A.5.18, NIST 800-63, NYDFS 500.07/500.12, CIS Controls 5–6 (conceptual).*

**2 sub-dimensions · 5 components · 4 in Screening Core**

## 5.1 — Identity and Access Control

### 🔷 CORE · 5.1.1 · Identity lifecycle (Joiner–Mover–Leaver)

| Level | Descriptor |
|:---:|:---|
| **1** | No defined process exists for access creation, changes, and removal. Accounts get created and are rarely deleted. Orphaned accounts abound. |
| **2** | The JML process is manual and depends on informal tickets; deprovisioning depends on HR remembering to notify, frequently late. There is no periodic reconciliation. |
| **3** | A documented JML process exists, with access creation/modification/removal triggered by HR events, and periodic access reviews. |
| **4** | JML is orchestrated between HR and IAM with defined SLAs; terminations and role changes revoke access in a timely manner (incl. elevated access before the exit interview); orphaned/dormant account metrics exist and are actively driven down. Covers employees, contractors, and third parties. |
| **5** | Provisioning is automated and attribute/role-based (ABAC/RBAC), with near-immediate deprovisioning upon changes; reconciliation is continuous, with automatic detection of orphaned accounts, excessive access, and privilege drift. Identity is the axis of a zero-trust architecture: access is evaluated dynamically based on context and risk. |

### 🔷 CORE · 5.1.2 · Role-based access control and least privilege

| Level | Descriptor |
|:---:|:---|
| **1** | Access is granted case by case, with no role model. Over-provisioning ("just in case") predominates. |
| **2** | Some access profiles exist, but they coexist with many exceptions and direct grants; least privilege is not applied consistently. |
| **3** | A role model (RBAC) tied to positions exists, with profiles approved by security before assignment and segregation of duties (SoD) considered for critical roles. |
| **4** | RBAC is enterprise-wide, with SoD enforced and monitored, periodic access recertification by owners, and detection/correction of excessive access or conflicts. Least privilege is measured and audited. |
| **5** | Access is dynamic and just-in-time: privileges are granted for limited time and context, not permanently; SoD conflicts are prevented at request time; the model is tuned with analytics of actual access usage (identity analytics) to eliminate unused permissions. Aligned to zero trust ("never trust, always verify"). |

### 5.1.3 · Identity governance and access recertification

| Level | Descriptor |
|:---:|:---|
| **1** | Access is never reviewed after being granted. No one validates whether it is still needed. |
| **2** | Sporadic, manual reviews of some systems occur, with incomplete coverage and inconsistent evidence. |
| **3** | A periodic access recertification process exists for critical systems, with owners validating the ongoing need for permissions and leaving evidence. |
| **4** | A formal Identity Governance (IGA) platform or process orchestrates risk-based recertifications, covering all critical systems, with approval traceability and remediation of non-recertified access. |
| **5** | Identity governance is continuous and risk-based: recertification is prioritized by sensitivity and anomaly signals (identity analytics), unused access is revoked automatically, and Identity Security Posture is measured and reported as a risk indicator. Covers human and non-human identities (service, machine, workloads). |

## 5.2 — Privileged Access and Authentication

### 🔷 CORE · 5.2.1 · Privileged access management (PAM) and service accounts

| Level | Descriptor |
|:---:|:---|
| **1** | Privileged accounts (admin, root, domain admin) are shared, with static passwords and no control over who uses them. Service accounts are invisible. |
| **2** | It is acknowledged that privileged accounts need special care, but control is manual; service accounts exist without inventory or credential rotation. |
| **3** | Privileged accounts are identified and segregated from daily-use accounts; access requires approval; a service account inventory exists. |
| **4** | A PAM solution exists with a credential vault, automatic rotation, check-out/check-in, privileged session recording, and alerts on anomalous use; service accounts are inventoried, with managed credentials and documented purpose. |
| **5** | Privileged access is just-in-time and zero-standing-privilege: no permanent privileges; every elevation is temporary, approved, and logged; sessions are monitored with behavioral analytics (UEBA) detecting abuse in real time (feeding P9); machine/workload secrets are managed dynamically (secrets management) with no embedded credentials. |

### 🔷 CORE · 5.2.2 · Multi-factor authentication and credential strength

| Level | Descriptor |
|:---:|:---|
| **1** | Authentication relies solely on username and password, with no MFA and no effective strength policies. |
| **2** | MFA exists on isolated access points (e.g., VPN), but not broadly; critical access still relies on password alone. |
| **3** | MFA is deployed for remote access, privileged accounts, and critical applications, with password policies aligned to good practice. |
| **4** | MFA is broadly mandatory (incl. internal access to sensitive systems), with resistant factors and adaptive authentication based on session risk (location, device, behavior); MFA coverage is measured as a KRI. |
| **5** | Authentication is phishing-resistant and trends toward passwordless (FIDO2/passkeys, certificates), evaluated continuously and contextually within a zero-trust architecture; the authentication posture contemplates emerging threats (MFA bypass, AI-assisted attacks, deepfakes in verification) and prepares for quantum-resistant cryptography where applicable. Coverage ≈ total, verified rather than declared. |

---

# P6: Data Protection, Privacy and Cryptography

*PROTECT pillar centered on the data as the object to protect wherever it lives. Governs encryption and keys, data loss prevention (DLP) at the policy level, privacy and data residency per jurisdiction, and masking. Owns the "what" is protected; P7 implements the "where." Anchored in NIST CSF 2.0 (PR.DS); informed by ISO 27001 A.8.10–A.8.12/A.8.24, NIST 800-57 (key management), PCI DSS (conceptual), LATAM data protection laws (e.g., Habeas Data Colombia, LGPD Brazil, LFPDPPP Mexico).*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 6.1 — Cryptography and Leakage Prevention

### 🔷 CORE · 6.1.1 · Encryption governance and key management

| Level | Descriptor |
|:---:|:---|
| **1** | No encryption policy exists. Cryptography use is inconsistent and sensitive data commonly travels and rests in the clear. |
| **2** | Encryption is applied piecemeal (e.g., HTTPS, some disks), but with no defined standard, no formal key management, and obsolete protocols still in use. |
| **3** | An encryption policy requires protection in transit and at rest for sensitive data, with current protocols and basic key and certificate management. |
| **4** | Encryption is standardized by data classification, with centralized key and certificate management (rotation, custody, offline root, lifecycle), a certificate inventory with expiry alerts, and controlled retirement of obsolete algorithms. Coverage is audited. |
| **5** | Cryptographic management is centralized and automated (KMS/HSM, secrets management, crypto-agility), with a complete inventory of cryptographic usage enabling algorithm migration without rewriting applications; a post-quantum cryptography (PQC) roadmap exists with discovery of vulnerable assets and a transition plan. Cryptographic posture is managed as an active risk. |

### 🔷 CORE · 6.1.2 · Data loss prevention (DLP) — policy and coverage

| Level | Descriptor |
|:---:|:---|
| **1** | No DLP exists. There is no way to detect or prevent unauthorized exfiltration of sensitive data. |
| **2** | Partial controls exist (e.g., USB blocking), but no content-aware DLP solution and no coverage of the main channels (email, web, cloud). |
| **3** | DLP is deployed on key channels (endpoint, email, web) with rules based on data classification, generating alerts that are investigated. |
| **4** | DLP covers endpoint, email, web, shared repositories, and SaaS/cloud (via CASB), with policies aligned to classification and regulatory obligations; DLP incidents are treated as first-order security events with their own playbooks, not as secondary noise. |
| **5** | Data protection is data-centric and context-aware: it combines DLP with persistent classification, data access controls and, where applicable, encryption/tokenization that travels with the information; detection uses behavioral analytics to distinguish true exfiltration from legitimate activity, is integrated with the SOC/SIEM (P9), and covers emerging vectors (e.g., leakage via generative AI tools). |

## 6.2 — Privacy and Minimization

### 🔷 CORE · 6.2.1 · Privacy and data residency per jurisdiction

| Level | Descriptor |
|:---:|:---|
| **1** | Privacy is not managed from security. No one knows what personal data is processed or where it resides. |
| **2** | Basic privacy requirements are met reactively, with no personal data mapping and no consideration of residency/cross-border transfer. |
| **3** | Defined responsibility for privacy exists, with identification of the personal data processed and consideration of the obligations of the main jurisdictions where the bank operates. |
| **4** | Personal data processing is mapped per jurisdiction (LATAM + global), with residency and cross-border transfer controls, impact assessments (DPIAs) for sensitive initiatives, and formal coordination among security, privacy, and compliance. |
| **5** | Privacy is embedded by design: personal data flows are kept live and queryable, per-jurisdiction obligations are applied as verifiable controls (residency, minimization, retention), and the posture adapts proactively to new regulation (privacy horizon scanning). The use of personal data in AI models is explicitly governed. |

### 6.2.2 · Masking, tokenization and minimization in non-production environments

| Level | Descriptor |
|:---:|:---|
| **1** | Real customer data is used freely in development, testing, and analytics, unprotected. |
| **2** | The risk of using production data in non-prod is acknowledged, but protection is inconsistent and manual. |
| **3** | A policy requires masking or synthetic data in non-production environments for sensitive data, applied in the main systems. |
| **4** | Masking/tokenization is standardized and consistently applied in non-prod and analytics; sensitive production data is masked at the application level as needed; propagation of real data is minimized. |
| **5** | Minimization is systematic: centrally governed tokenization/anonymization, synthetic data generation for development and testing, and controls that prevent by design the exposure of real data outside its authorized purpose. Masking effectiveness is validated (re-identification risk). |

---

# P7: Infrastructure, Cloud and Application Security

*PROTECT pillar that implements technical security where the technology lives: network and hardening, secure cloud configuration (the biggest surface shift in banking), and secure development of applications and APIs. Owns the technical "where/how"; P6 governs the data. Anchored in NIST CSF 2.0 (PR.PS, PR.IR); informed by ISO 27001 A.8.8–A.8.9/A.8.25–A.8.28, CIS Benchmarks (conceptual), OWASP ASVS/API Top 10 (conceptual), CSA CCM, FFIEC.*

**3 sub-dimensions · 4 components · 4 in Screening Core**

## 7.1 — Infrastructure and Network

### 🔷 CORE · 7.1.1 · Network security and segmentation

| Level | Descriptor |
|:---:|:---|
| **1** | The network is flat, with no segmentation. An attacker who gets into one point can reach everything. The perimeter is the only control. |
| **2** | A firewall perimeter exists, but internal segmentation is minimal and rules accumulate with no governance or review. |
| **3** | The network is segmented into zones (e.g., production/development, DMZ, critical segments), with access control between zones and next-generation firewalls with IPS/IDS. |
| **4** | Segmentation is granular and criticality-based, with network access control (NAC) and device posture validation before connecting; rules are reviewed periodically; traffic is inspected and monitored (feeding P9). Applies to remote and third-party access. |
| **5** | The architecture trends toward network zero trust: microsegmentation, application access via ZTNA instead of traditional VPN, access decisions by identity+context+posture on every connection, and assumed breach (lateral movement limited by design). Network policy is managed as code, auditable and tested. |

### 🔷 CORE · 7.1.2 · Hardening and secure configuration management

| Level | Descriptor |
|:---:|:---|
| **1** | Systems are deployed with default configurations. There are no security baselines and no configuration change control. |
| **2** | Some hardening guides exist, but their application is inconsistent and configuration drift is not verified. |
| **3** | Secure configuration baselines exist (servers, workstations, network devices), applied before deployment and documented; configuration changes go through change control. |
| **4** | Hardening is standardized against recognized benchmarks, validated through recurring configuration scanning, with drift detection and correction; least privilege (no local install rights) is enforced and monitored. |
| **5** | Secure configuration is applied as code (IaC with embedded policies), validated in the pipeline before deployment (policy-as-code), with automatic drift remediation and continuously verified posture. Infrastructure immutability reduces the surface of uncontrolled change. |

## 7.2 — Cloud Security

### 🔷 CORE · 7.2.1 · Cloud security posture and configuration (CSPM / landing zone)

| Level | Descriptor |
|:---:|:---|
| **1** | The cloud is used without its own security model: on-prem controls are replicated or there are no controls. Misconfigurations (open buckets, excessive identities) go unnoticed. |
| **2** | Cloud is used with basic per-account controls, but with no standardized landing zone, no centralized posture visibility, and no clear understanding of the shared responsibility model. |
| **3** | A landing zone exists with baseline guardrails (identity, network, logging), and cloud configuration is reviewed periodically against the provider's good practices. |
| **4** | CSPM continuously evaluates multi-cloud configuration against benchmarks, detecting and prioritizing misconfigurations and excessive identities (CIEM); guardrails are enforced by policy and deviations are remediated with SLAs. The shared responsibility model is documented and operated. |
| **5** | Cloud security is native, continuous, and automated (CNAPP: CSPM+CIEM+workload protection+containers): posture evaluated in real time, insecure deployments prevented in the pipeline, automatic remediation, and zero-trust architecture extended to workloads and machine identities. Covers containers, serverless, and data security posture (DSPM). |

## 7.3 — Application Security

### 🔷 CORE · 7.3.1 · Secure SDLC, AppSec and API security

| Level | Descriptor |
|:---:|:---|
| **1** | Security is not part of development. Applications are released without security testing. APIs are exposed without specific controls. |
| **2** | Secure coding guidelines exist, but their application depends on the project; security testing is sporadic and late (at the end, if at all). |
| **3** | The SDLC includes defined security testing (e.g., SAST and/or vulnerability scanning before production), with coordinated remediation; critical applications are assessed before going live. |
| **4** | Security is integrated across the lifecycle (SAST/DAST/SCA in the pipeline, third-party dependency and vulnerability management, security gates before release), with threat modeling for critical applications and specific API security controls (authentication, rate limiting, API inventory). |
| **5** | Mature DevSecOps: security as code integrated into CI/CD with automatic gates, continuous testing (incl. runtime), continuous API inventory and monitoring (incl. shadow/zombie APIs), software supply chain management (SBOM, artifact signing, build integrity). The security of AI-generated code and components is explicitly governed. |

---

# P8: Culture, Awareness and Human Risk

*PROTECT pillar centered on the human factor as both attack surface and line of defense. Covers the awareness program and simulated phishing, insider risk, and resistance to social engineering. Owns the execution of the human program; mandate and policy live in P1/P2. Anchored in NIST CSF 2.0 (PR.AT); informed by ISO 27001 A.6.3, NIST 800-50, NYDFS 500.14, SANS Security Awareness Maturity (conceptual).*

**2 sub-dimensions · 3 components · 3 in Screening Core**

## 8.1 — Awareness and Behavior

### 🔷 CORE · 8.1.1 · Awareness program and security culture

| Level | Descriptor |
|:---:|:---|
| **1** | There is no security awareness. Employees are unaware of their responsibilities and the risks. |
| **2** | A generic annual "check-the-box" training exists, with no segmentation and no effectiveness measurement. |
| **3** | A formal, mandatory, recurring program exists (onboarding + annual), with role-relevant content and completion records reported to management. |
| **4** | The program is continuous and segmented by role risk level, with frequent reinforcements instead of a single annual session, sustained communication, and measurement of behavior change (not just attendance). Includes the Board. |
| **5** | Awareness is managed as measurable human-risk reduction: personalized by user risk profile, residual human risk measured with real indicators, and integrated with technical signals (e.g., high-risk users receive reinforced controls). The security culture is positive (report without fear) and is itself evaluated. |

### 🔷 CORE · 8.1.2 · Simulated phishing and social engineering resistance

| Level | Descriptor |
|:---:|:---|
| **1** | Employee resistance to phishing or social engineering is never tested. The first real test is the real attack. |
| **2** | Sporadic phishing simulations are run, with a punitive approach or no structured follow-up. |
| **3** | A recurring simulated phishing program exists, with click/report rate metrics and targeted training for those who fall. |
| **4** | Simulations cover multiple vectors (email, voice/vishing, SMS) with realistic scenarios aligned to the sector's actual threats; the report rate (not just click rate) is measured and improves over time; the approach is positive reinforcement, with escalating difficulty. |
| **5** | The program simulates frontier threats (AI-assisted social engineering, voice/video deepfakes, MFA-bypass attacks, multichannel pretexting) in threat-led scenarios; results are correlated with real telemetry and feed both personalized awareness and technical controls. Human resistance is treated as a continuously measured and trained capability. |

## 8.2 — Insider Risk

### 🔷 CORE · 8.2.1 · Insider risk management program

| Level | Descriptor |
|:---:|:---|
| **1** | Insider risk (malicious or negligent) is not considered. Internal activity monitoring is nonexistent. |
| **2** | Indirect controls exist (e.g., whistleblower channel, some logging), but no insider risk program and no profiling of high-risk positions. |
| **3** | Technical monitoring of user activity and a whistleblower channel exist; higher-risk positions receive additional attention, though without a formal catalog. |
| **4** | An insider risk program exists with formal profiling of high-risk roles, proportional monitoring, signal correlation (data access, transfers, behavior), and a multidisciplinary management process (security, HR, legal) with due care for privacy and rights. |
| **5** | The program uses behavioral analytics (UEBA) to detect deviations from each user's baseline, with dynamic risk indicators integrated into the SOC (P9) and into fraud/AML convergence (P11); the approach balances detection, deterrence, and privacy, and its effectiveness is validated. Covers human insiders and the abuse of compromised identities/credentials. |

---

# P9: Detection, Monitoring (SOC/SIEM) and Threat Intelligence

*DETECT pillar and operational nerve center. Covers monitoring and detection (SOC, SIEM, EDR/XDR), vulnerability and exposure management (P4 discovers; here it is managed and remediated), and threat intelligence with threat hunting anchored in MITRE ATT&CK (freely usable). Anchored in NIST CSF 2.0 (DE.CM, DE.AE, ID.RA-01/06); informed by MITRE ATT&CK, ISO 27001 A.8.15–A.8.16, NIST 800-40 (patch management), FFIEC.*

**2 sub-dimensions · 4 components · 3 in Screening Core**

## 9.1 — Monitoring and Detection

### 🔷 CORE · 9.1.1 · SOC, SIEM and event correlation

| Level | Descriptor |
|:---:|:---|
| **1** | There is no centralized security monitoring. Events are neither collected nor correlated. Attacks are discovered late or by third parties. |
| **2** | Some logs are collected in a scattered manner and reviewed reactively; there is no 24/7 detection capability and no cross-source correlation. |
| **3** | A SOC exists (internal or outsourced) with a SIEM centralizing logs from key sources, defined detection use cases, and operations with defined coverage. |
| **4** | The SOC operates 24/7 with a SIEM fed by broad sources (network, endpoint, identity, cloud), risk-prioritized use cases, threat intel integration, and actively managed performance metrics (MTTD, source coverage, false positive rate). EDR/XDR deployed on endpoints. |
| **5** | Detection is mapped to MITRE ATT&CK with per-technique detection coverage measurement and deliberate gap closure; it combines XDR (cross-domain correlation), behavioral analytics (UEBA), and AI-assisted detection, with automation (SOAR) that enriches and responds; detection engineering is a continuous process validated through purple teaming. Detection is identity-aware and supply-chain-threat-aware. |

### 9.1.2 · Threat intelligence (CTI) and threat hunting

| Level | Descriptor |
|:---:|:---|
| **1** | Threat intelligence is neither consumed nor produced. Detection is purely signature-reactive. |
| **2** | Generic feeds or alerts are received (e.g., from the security vendor), but with no process to contextualize or action them; there is no hunting. |
| **3** | Structured CTI consumption exists from sector sources (e.g., FS-ISAC) and commercial ones, with basic indicator-of-compromise management and occasional hunting exercises. |
| **4** | CTI is integrated into detection and risk management: contextualized for relevance to the bank, prioritized based on the sector threat landscape, and threat hunting is recurring and hypothesis-driven (ATT&CK-aligned). |
| **5** | CTI is predictive and operationalized: adversary-specific intelligence prioritizes defenses and threat-led testing (informs red/purple teams); continuous hunting assisted by analytics/AI; production of own intelligence and participation in sector sharing. CTI feeds strategic decisions (P1/P2) and fraud/AML convergence (P11). |

## 9.2 — Vulnerability and Exposure Management

### 🔷 CORE · 9.2.1 · Vulnerability management and patching

| Level | Descriptor |
|:---:|:---|
| **1** | No vulnerability management process exists. Patching is sporadic and reactive. Exposure is unknown. |
| **2** | Occasional scanning occurs, but findings are not managed consistently; patching lacks SLAs and prioritization. |
| **3** | Recurring vulnerability scanning exists with reporting, and a patching process with severity-based prioritization and defined maintenance windows. |
| **4** | Management is continuous, with risk-based prioritization (asset criticality + real exploitability, not just CVSS), remediation SLAs per risk level, escalation upon breach, and exposure-window metrics reported as KRIs. Covers infrastructure, applications, and cloud. |
| **5** | Exposure management is continuous and prioritizes by real-world exploitability (active exploitation intelligence, external surface exposure from P4) and attack paths; remediation of the critical-and-exploitable is agile and, where possible, automated or virtually patched; it operates under a Continuous Threat Exposure Management (CTEM) model validated with adversarial testing. |

### 🔷 CORE · 9.2.2 · Offensive security testing (pentest, red team, purple team)

| Level | Descriptor |
|:---:|:---|
| **1** | No offensive security testing is performed. Control effectiveness is never validated against an attacker. |
| **2** | One-off pentests are done (often only due to regulatory requirement), of limited scope and with no structured findings follow-up. |
| **3** | A recurring pentesting program exists over critical internal and external assets, with managed findings remediation. |
| **4** | The program combines internal and external pentesting with risk-based scoping, additional independent validations, and red team exercises that realistically test detection and response; results feed back into detection engineering and risk assessment. |
| **5** | Validation is adversarial and continuous: red teaming and intelligence-led exercises in the style of TIBER-EU / CBEST / iCAST based on real intelligence, recurring purple teaming that improves detection coverage (ATT&CK), and continuous control validation (BAS, breach & attack simulation). Posture is measured by demonstrated ability to detect and respond, not by the existence of controls. |

---

# P10: Incident Response, Forensics and Operational Resilience

*Pillar merging RESPOND and RECOVER. Covers incident response (playbooks, CSIRT), forensic capability, continuity/recovery (BCP/DR), and operational resilience—including ransomware-specific recovery. The goal is not just to respond, but to limit impact and ensure critical services survive. Anchored in NIST CSF 2.0 (RS.MA/RS.AN/RS.MI, RC.RP/RC.CO); informed by NIST 800-61, ISO 27035/27031, FFIEC BCM, DORA ch. III–IV, operational resilience principles (BCBS).*

**2 sub-dimensions · 4 components · 4 in Screening Core**

## 10.1 — Incident Response

### 🔷 CORE · 10.1.1 · Response plan, playbooks and CSIRT

| Level | Descriptor |
|:---:|:---|
| **1** | No incident response plan exists. Every incident is handled improvisationally. There is no team and no defined roles. |
| **2** | A generic high-level plan exists, but with no per-scenario playbooks, no clear roles, and no designated response team. |
| **3** | A response plan exists with defined roles, a CSIRT (internal or via retainer), and playbooks for the main scenarios (ransomware, phishing, DDoS), with severity classification. |
| **4** | Playbooks are operational and detailed (actionable steps, evidence collection, escalation criteria, communications), with severity-based response SLAs; the CSIRT guarantees 24/7 coverage with defined capacity; lessons learned feed back into the playbooks. |
| **5** | Response is orchestrated and partially automated (SOAR) with rapid containment; playbooks cover frontier scenarios (supply chain compromise, identity/cloud attack, exfiltration-based extortion) and are validated through regular exercises; communications (internal, regulatory, customers) are prepared and aligned to each jurisdiction's notification windows. Response capability is measured by MTTR and exercise outcomes. |

### 🔷 CORE · 10.1.2 · Forensic capability and root cause analysis

| Level | Descriptor |
|:---:|:---|
| **1** | No forensic capability exists. After an incident, it is impossible to determine what happened, how, or what was affected. |
| **2** | Forensic capability is nonexistent or entirely dependent on third parties with no prior contract; evidence preservation is improvised. |
| **3** | Forensic capability exists (internal or via vendor retainers) and a root cause analysis process for high-priority incidents. |
| **4** | Forensic capability is sufficient and ready (active retainers, tooling, evidence preservation with chain of custody); root cause analysis is mandatory for major incidents and its corrective actions are managed through closure, feeding systemic improvements. |
| **5** | Forensic capability is robust and prepared for complex environments (cloud, containers, endpoints at scale), with readiness enabling deep investigation and intact preservation; root cause analysis identifies systemic patterns and control weaknesses that are corrected structurally; it integrates with intelligence for attribution and defense improvement. |

## 10.2 — Continuity and Resilience

### 🔷 CORE · 10.2.1 · Business continuity and disaster recovery (BCP/DR)

| Level | Descriptor |
|:---:|:---|
| **1** | No continuity or recovery plans exist. A major disruption would halt the bank with no defined recovery path. |
| **2** | Partial or outdated plans exist, with no per-service RTO/RPO and no real testing. |
| **3** | Documented BCP and DR exist with RTO/RPO per critical service, based on a BIA, and with periodic testing (at least annual). |
| **4** | Plans are aligned to a BIA that prioritizes by process/service criticality, with RTO/RPO validated through tests including real data center failover; test findings are remediated. Recovery contemplates cyber scenarios, not just physical disasters. |
| **5** | Resilience is designed around critical business services with defined impact tolerances verified through severe-but-plausible testing (incl. systemic cyber scenarios and failure of critical third parties from P3); recovery is largely automated and tested regularly. Aligned to digital operational resilience frameworks (e.g., DORA, BCBS). |

### 🔷 CORE · 10.2.2 · Ransomware resilience and recovery

| Level | Descriptor |
|:---:|:---|
| **1** | There is no ransomware-specific preparation. Backups could be encrypted along with everything else. |
| **2** | Backups exist, but with no immutability or isolation guarantee, and no tested recovery plan for mass encryption. |
| **3** | A backup strategy exists (e.g., 3-2-1 rule) with periodically tested restores and a ransomware playbook. |
| **4** | Backups include immutable and/or isolated (air-gapped) copies protected against deletion/encryption, with regularly tested restores and measured recovery times; a ransomware recovery plan exists with predefined roles, decisions, and communications. |
| **5** | Ransomware resilience is designed end-to-end: immutable backups with locked retention (time-lock), an isolated and tested recovery environment, clean-recovery capability validated regularly under realistic scenarios, and orchestration enabling restoration of critical services within the defined tolerance. Executive decision-making (incl. the payment dilemma) is rehearsed in Board tabletops (link to P1). |

---

# P11: Cyber–Fraud–AML Convergence

*Cross-cutting, differentiating pillar. It does not re-own the SOC, IAM, or monitoring (those live in their pillars): it is the methodological connective tissue that assesses how integrated the three disciplines of extended financial crime—cyber, fraud, and AML—operate against threats that cut across them (account takeover, social engineering, authorized push payment fraud, mule networks, synthetic identity). It is what justifies the cyber assessment being done by the financial crime expert, and the return hinge toward FCMA. Anchored in NIST CSF 2.0 (GV.RM/GV.OC as risk integration); informed by FinCrime convergence (proprietary lens), FATF, MITRE ATT&CK + fraud/ML typologies.*

**2 sub-dimensions · 3 components · 2 in Screening Core**

## 11.1 — Convergence Operating Model

### 🔷 CORE · 11.1.1 · Organizational and governance integration of cyber–fraud–AML

| Level | Descriptor |
|:---:|:---|
| **1** | Cyber, fraud, and AML operate in complete silos, with separate governance, committees, and languages. They do not talk to each other. |
| **2** | Informal, ad hoc collaboration exists between the areas (e.g., around a specific incident), but with no structure, mandate, or shared processes. |
| **3** | A forum or committee brings the three disciplines together with some regularity, with defined channels for escalating cases that cross domains. |
| **4** | A formal convergence operating model exists, with joint governance, a shared financial crime risk taxonomy, defined processes for cross-domain cases, and clear responsibilities; financial crime risk is reported to the Board in an integrated manner. |
| **5** | Convergence is structural: unified financial crime strategy and appetite, a merged team/function (e.g., a Financial Crime Unit) or very high-maturity coordination, integrated metrics, and an operating model that treats cyber, fraud, and AML as facets of a single risk. The value of convergence is measured (cases detected that a silo would have missed). |

### 🔷 CORE · 11.1.2 · Shared signals and cross-domain use cases

| Level | Descriptor |
|:---:|:---|
| **1** | Cyber, fraud, and AML data and signals are isolated. An alert in one domain never enriches another. |
| **2** | Data is exchanged manually and case by case (e.g., fraud is consulted after a cyber incident), with no technical integration and no defined use cases. |
| **3** | Some cross-domain use cases are defined (e.g., correlating credential compromise with transactional fraud) and some structured signal exchange exists. |
| **4** | Signals are shared systematically across domains (e.g., cyber telemetry + account behavior + ML typologies), with operational use cases for convergent threats (ATO, social engineering, APP fraud, mules) and coordinated detection. |
| **5** | A unified analytics layer correlates signals from the three domains in real time (e.g., an identity compromise detected in cyber automatically triggers fraud controls and AML review); graph analytics/AI are leveraged to uncover networks and patterns no silo would see. Use cases evolve with the convergent threat landscape. |

## 11.2 — Identity as a Common Surface

### 11.2.1 · Customer identity as a shared surface (identity fraud / ATO / synthetic identity)

| Level | Descriptor |
|:---:|:---|
| **1** | Customer identity is managed in fragments across onboarding (AML/KYC), authentication (cyber), and fraud, with no common view. Attackers exploit the seams. |
| **2** | The areas acknowledge they share the identity problem, but the controls (KYC, authentication, identity fraud detection) operate separately. |
| **3** | Coordination around customer identity exists for key cases (e.g., sharing ATO signals between cyber and fraud), though without a comprehensive model. |
| **4** | Customer identity is treated as a common surface governed end-to-end: onboarding (KYC/verification), continuous authentication, and identity fraud detection share signals and reinforce each other; ATO, synthetic identity, and impersonation are covered. |
| **5** | A unified identity-trust strategy spans the entire customer lifecycle, with risk-based continuous verification and authentication, real-time signal sharing across KYC/cyber/fraud, and defense against frontier threats (synthetic identity at scale, deepfakes in verification, AI-assisted fraud). Identity is a first-order financial crime control, measured and governed as such. |

---

*End of framework · Pillars 1–11 complete · v0.2 · All descriptors are original wording (synthesis); sources are cited as "informed by," without reproducing their text. Pending joint review and adjustment.*
