# P0: Fraud Strategy

*Strategic layer that assesses whether the bank has an articulated vision of how to compete against fraud, where to accept losses, and how to balance security with customer experience.*

**3 sub-dimensions · 9 components · 5 in Screening Core**

## 0.1 — Fraud Vision and Strategy

### 🔷 CORE · 0.1.1 · Existence of a documented strategy

| Level | Descriptor |
|:---:|:---|
| **1** | There is no document articulating the bank's fraud strategy. Decisions are made on a case-by-case basis without a strategic framework. |
| **2** | An informal document or internal presentation mentions fraud objectives, but it is not approved by senior management nor does it have a defined effective period. |
| **3** | A formal fraud strategy document exists, approved by an executive committee, with measurable objectives and a defined time horizon (1–3 years). |
| **4** | The strategy is Board-approved, reviewed at least annually, includes quantitative targets (bps, USD), and has tracking metrics reported quarterly. |
| **5** | The strategy is updated upon each regulatory change, product launch, or significant event. It includes forward-looking scenarios (threat modeling at 3–5 years) and is integrated with the bank's business strategy. |

### 🔷 CORE · 0.1.2 · Articulation of strategic objectives

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud objectives are articulated. The area reacts to events without a defined direction. |
| **2** | Objectives exist implicitly ('reduce fraud') but are not documented, not measurable, and do not distinguish between loss reduction, UX optimization, or regulatory compliance. |
| **3** | Objectives are documented and measurable (e.g., 'reduce fraud loss rate to X bps in cards by December'). They cover at least two dimensions: losses and regulation. |
| **4** | Objectives cover all three dimensions (losses, customer experience, regulation), have assigned owners, and are measured quarterly with actual data. |
| **5** | Objectives are decomposed by product, channel, and segment. A balanced scorecard is used that includes explicit trade-offs between security, experience, and cost. They are dynamically adjusted based on threat intelligence. |

### 0.1.3 · Strategy time horizon

| Level | Descriptor |
|:---:|:---|
| **1** | There is no fraud plan with a time horizon. Operations run day to day. |
| **2** | An annual fraud action plan exists, but it is a list of projects without sequencing or dependencies, and it is not connected to the bank's strategy. |
| **3** | A 1–2 year plan exists with phases, milestones, and estimated budget. It is formally presented to management. |
| **4** | A 3-year plan exists with phases, milestones, approved budget, KPIs per phase, and documented semi-annual reviews with adjustments. |
| **5** | A 3–5 year plan exists with scenarios (base, optimistic, adverse), linked to the bank's strategic plan. It includes horizon scanning for emerging threats and is updated upon each newly identified attack vector. |

## 0.2 — Strategic Risk Decisions

### 🔷 CORE · 0.2.1 · Explicit risk acceptance

| Level | Descriptor |
|:---:|:---|
| **1** | There is no definition of what fraud the bank accepts. Every loss is treated as a program failure. |
| **2** | It is informally acknowledged that some fraud is inevitable, but there is no documentation of acceptance thresholds by product or channel. |
| **3** | A risk acceptance document exists, approved by a committee, with acceptable loss thresholds by product (e.g., 'up to X bps in credit cards'). |
| **4** | Risk acceptance is defined by product, channel, and segment, approved by the Board, reviewed annually, and deviation vs. thresholds is reported quarterly. |
| **5** | Risk acceptance is dynamically calibrated using actual loss data, industry benchmarks, and cost-benefit analysis. Scenario simulations are run to validate thresholds. |

### 🔷 CORE · 0.2.2 · Documented security vs. friction trade-off

| Level | Descriptor |
|:---:|:---|
| **1** | The trade-off is not analyzed. Controls are implemented without considering customer experience impact. |
| **2** | It is informally recognized that controls generate friction, but the impact is neither measured nor documented. |
| **3** | A documented trade-off analysis exists for at least the 3 main controls (e.g., legitimate decline rate, step-up abandonment rate). |
| **4** | The trade-off is measured by product/channel with actual data: false positives, blocked legitimate transactions, post-fraud NPS, and control-driven abandonment. Reported quarterly. |
| **5** | A quantitative model is used to optimize the trade-off in real time: scoring adjusts thresholds automatically to keep friction within approved limits without exceeding the risk appetite. |

### 0.2.3 · Investment prioritization criteria

| Level | Descriptor |
|:---:|:---|
| **1** | No criteria exist for prioritizing investment in fraud. Investment is reactive, triggered by incidents. |
| **2** | Investment decisions are driven by urgency or regulatory pressure, without ROI analysis or comparison of alternatives. |
| **3** | An annual fraud budgeting process exists with documented prioritization criteria (regulatory first, then by loss volume). |
| **4** | A ROI-based prioritization model is used: for each initiative, estimated avoided loss, implementation cost, and friction cost are assessed. |
| **5** | A multi-criteria prioritization engine is used (economic impact × effort × technology dependency × time-to-value) with actual data. Reviewed quarterly. |

## 0.3 — Alignment with Business Strategy

### 🔷 CORE · 0.3.1 · Fraud–business strategy linkage

| Level | Descriptor |
|:---:|:---|
| **1** | The fraud area operates completely separate from the business strategy. It is not consulted for business decisions. |
| **2** | The fraud area learns about new products or channels after their launch. Integration is reactive. |
| **3** | The fraud area participates in product committees and receives information on launches at least 30 days in advance. |
| **4** | Each launch requires a fraud risk assessment approved before go-live. Fraud has a formal seat on the product committee. |
| **5** | The fraud area participates from the design phase (fraud by design). Product KPIs include fraud metrics. Fraud cost per new product is measured at 90 days. |

### 0.3.2 · Participation in launch decisions

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud does not participate in product or digital channel launch decisions. |
| **2** | Fraud is occasionally consulted for high-profile launches, but its input is neither binding nor documented. |
| **3** | Fraud issues a risk opinion for each digital product launch. The opinion is documented but does not block the launch. |
| **4** | The fraud opinion is mandatory and has veto power or can require compensating controls before launch. |
| **5** | Fraud co-designs controls for each new product from the ideation phase. A 'fraud by design' playbook exists with checklists by product/channel type. |

### 0.3.3 · Fraud consideration in digital growth

| Level | Descriptor |
|:---:|:---|
| **1** | The bank's digital strategy does not mention or consider fraud risk. |
| **2** | Fraud risk is generically mentioned in the digital strategy, but there are no specific actions or allocated budget. |
| **3** | The digital strategy includes a fraud chapter with controls by channel (app, web, PIX, open banking) and allocated budget. |
| **4** | Each digital initiative has a fraud risk profile with differentiated controls, success metrics, and a responsible owner. |
| **5** | A predictive fraud risk model by digital channel exists and is updated with actual data. It is used to calibrate control investment before scaling each channel. |

# P1: Governance, Culture, and Organizational Framework

*Assesses the governance structure, policies, committees, and organizational culture that support the fraud program. Anchored in COSO/ACFE Principle 1.*

**5 sub-dimensions · 26 components · 9 in Screening Core**

## 1.1 — Fraud Policy and Risk Appetite

### 🔷 CORE · 1.1.1 · Policy existence and scope

| Level | Descriptor |
|:---:|:---|
| **1** | No written fraud policy exists. Decisions are based on each area's individual judgment. |
| **2** | A policy document exists but covers only operations (cards/transactions). It does not address internal fraud, digital fraud, or origination fraud. |
| **3** | The policy is enterprise-wide: it covers external fraud, internal fraud, digital fraud, origination fraud, and third-party fraud. It is approved by an executive committee and has an effective date. |
| **4** | The policy includes definitions, scope, roles, quantified risk appetite, tolerances by product/channel, and an annual review process with trigger events. |
| **5** | The policy is updated within 30 days of each regulatory change, new product, or significant incident. A traceability matrix exists between the policy and applicable regulatory requirements. |

### 🔷 CORE · 1.1.2 · Quantified risk appetite

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud risk appetite is defined. It has not been discussed in any committee. |
| **2** | Risk appetite is expressed qualitatively ('low', 'moderate') without figures. It is not Board-approved. |
| **3** | Risk appetite is quantified in at least one metric (e.g., fraud loss rate <X bps) and Board-approved. |
| **4** | Risk appetite is quantified by product, channel, and fraud type. It includes tolerances, escalation limits, and deviation is reported monthly. |
| **5** | Risk appetite is calibrated with historical data, peer benchmarks, and loss projections. It is subjected to stress testing. It is reviewed dynamically. |

### 1.1.3 · Tolerances and limits by product/channel

| Level | Descriptor |
|:---:|:---|
| **1** | No differentiated tolerances exist. A uniform criterion is applied across the board. |
| **2** | Informal tolerances exist for some products, but they are not documented. |
| **3** | Documented tolerances exist for at least 3 main products/channels. They are approved by the risk committee. |
| **4** | Each product/channel has specific documented tolerances, with early warning and escalation thresholds. Monitored monthly. |
| **5** | Tolerances are adjusted quarterly using trend analysis and benchmarks. They are decomposed by customer segment and geography. |

### 1.1.4 · Policy review process

| Level | Descriptor |
|:---:|:---|
| **1** | The policy has no review date. It has not been updated in the last 2+ years. |
| **2** | The policy has a theoretical review date but it is not met. The last update is more than 18 months old. |
| **3** | The policy is reviewed annually per schedule. A documented process with an update checklist exists. |
| **4** | In addition to the annual review, defined trigger events exist (new regulation, incident >$X, new channel) that trigger an extraordinary review. |
| **5** | The review includes multi-jurisdictional regulatory benchmarking, gap analysis vs. standards (COSO/ACFE, OCC), and Board approval with documented minutes. |

### 1.1.5 · Alignment with ERM and operational risk

| Level | Descriptor |
|:---:|:---|
| **1** | The fraud policy makes no reference to Enterprise Risk Management or operational risk. |
| **2** | The policy mentions that fraud is a sub-type of operational risk, but there is no practical integration. |
| **3** | The policy maps to the operational risk framework. Fraud events are recorded in the operational loss database. |
| **4** | A shared taxonomy exists between fraud and operational risk. Fraud KRIs feed the operational risk dashboard. |
| **5** | The fraud program is fully integrated into ERM: fraud risk appetite is a sub-component of the total risk appetite, with modeled correlations. |

## 1.2 — Organizational Structure and Accountability

### 🔷 CORE · 1.2.1 · Position in the organizational chart

| Level | Descriptor |
|:---:|:---|
| **1** | The fraud area has no formal position in the organizational chart. Functions are dispersed without coordination. |
| **2** | An identifiable team exists but is embedded in operations or IT, without a direct reporting line to a risk leader. |
| **3** | The area has a defined position reporting to the CRO, CISO, or COO. The leader has a formal title. |
| **4** | Reports to the CRO or equivalent with direct Board access. The Head of Fraud participates in executive committees with a dedicated budget. |
| **5** | Functional independence with clear reporting lines to 1LoD, 2LoD, and the Board. VP/SVP rank with direct escalation authority to the CEO/Board. |

### 1.2.2 · 3LoD roles and responsibilities

| Level | Descriptor |
|:---:|:---|
| **1** | No mapping of fraud roles to the three lines of defense exists. |
| **2** | It is informally recognized that operations is 1LoD and audit is 3LoD, but without documentation. |
| **3** | A RACI document exists that maps fraud roles to 1LoD, 2LoD, and 3LoD. |
| **4** | The RACI is approved by the fraud committee, reviewed annually, and each role has associated KPIs. |
| **5** | The 3LoD model is operationally tested: 2LoD executes independent challenge, 3LoD evaluates the effectiveness of the challenge, and results are reported to the Board. |

### 🔷 CORE · 1.2.3 · Fraud Committee

| Level | Descriptor |
|:---:|:---|
| **1** | No formal fraud committee exists. Decisions are made ad-hoc. |
| **2** | A recurring forum exists but without a charter, formal minutes, or defined quorum. |
| **3** | Committee with an approved charter, minimum monthly frequency, formal minutes, and attendance from fraud, risk, operations, and technology. |
| **4** | The committee has a defined quorum, documented decision rights, action item tracking with owners and dates, and escalation to the Board. |
| **5** | The committee has decision rights over risk appetite by product, scoring model approval, and exceptions. Minutes are audited and action items have aging reports. |

### 1.2.4 · Committee composition

| Level | Descriptor |
|:---:|:---|
| **1** | Not applicable — no fraud committee exists. |
| **2** | The committee is composed of fraud and operations only. |
| **3** | Includes fraud, compliance/AML, technology/IT, and at least one line of business. |
| **4** | Includes fraud, compliance/AML, cyber/IT, legal, operations, lines of business, and an audit observer. Data/Analytics has representation. |
| **5** | Additionally, has a C-suite sponsor, invites business areas based on the agenda, and maintains a roster with designated alternates. |

### 🔷 CORE · 1.2.5 · Board escalation mechanism

| Level | Descriptor |
|:---:|:---|
| **1** | No escalation process exists. The Board does not receive fraud information on a regular basis. |
| **2** | The Board receives information only when a significant incident occurs, reactively. |
| **3** | A documented process exists with loss thresholds that trigger Board notification. |
| **4** | In addition to thresholds, the Board receives quarterly reports with trends, benchmarks, KPIs, and remediation status. |
| **5** | The Board has a risk committee with fraud as a standing agenda item. The Head of Fraud presents directly. The Board can adjust risk appetite in the same session. |

### 1.2.6 · Cross-organizational SLAs

| Level | Descriptor |
|:---:|:---|
| **1** | No SLAs exist between fraud and other areas (IT, operations, business). |
| **2** | Informal agreements exist but there are no documented or measurable SLAs. |
| **3** | Documented SLAs for at least 2 key relationships (fraud-IT, fraud-ops). |
| **4** | SLAs cover all key relationships, approved by the respective heads, measured monthly with a dashboard. |
| **5** | SLAs with penalties/escalation for non-compliance, semi-annual review, and measurement presented at the fraud committee. |

### 🔷 CORE · 1.2.7 · Escalation protocols (internal vs. external fraud)

| Level | Descriptor |
|:---:|:---|
| **1** | No differentiation in protocols between internal and external fraud exists. |
| **2** | It is recognized that internal fraud requires different treatment, but the same processes are used. |
| **3** | Documented differentiated protocols: external fraud through monitoring; internal fraud is escalated to compliance, audit, and/or legal. |
| **4** | Internal fraud protocols include evidence preservation, access restriction, HR notification, and formal chain of custody. Tested annually. |
| **5** | Internal fraud has a specialized team with access to logs, CCTV, and emails (with legal approval). Playbook with response times by severity. |

### 1.2.8 · Designated Fraud Officer

| Level | Descriptor |
|:---:|:---|
| **1** | No officer or formally designated responsible exists before the regulator. |
| **2** | A de facto responsible person exists, but the designation is neither formal nor recognized by the regulator. |
| **3** | A formally designated Fraud Officer exists, with an appointment record and known to the regulator. |
| **4** | The Officer has documented authority, a dedicated budget, and direct Board access. |
| **5** | The Officer holds certifications (CFE, CAMS), has tenure protection, and performance is evaluated with specific KPIs. |

## 1.3 — Senior Management and Board Oversight

### 🔷 CORE · 1.3.1 · Frequency and depth of Board reporting

| Level | Descriptor |
|:---:|:---|
| **1** | The Board does not receive fraud reports. The topic only arises if there is a public incident. |
| **2** | The Board receives information annually, included in a general operational risk report without breakdown. |
| **3** | The Board receives a dedicated report at least quarterly with loss metrics, trends, and initiative status. |
| **4** | The report includes peer benchmarks, root cause analysis, remediation status, and loss projections. |
| **5** | Monthly reporting of key KPIs and quarterly with deep dive. Interactive dashboard, exception-based reporting, and prepared questions for Board challenge. |

### 1.3.2 · Board understanding of fraud risk

| Level | Descriptor |
|:---:|:---|
| **1** | The Board has no knowledge of fraud risk beyond media coverage. |
| **2** | It has received at least one educational presentation, but there is no recurring training. |
| **3** | Receives annual education on trends, new vectors, and program status. Attendance is documented. |
| **4** | At least one member has fraud/risk experience. The Board asks documented challenge questions in the minutes. |
| **5** | Continuous education program (2+ sessions/year), has visited the monitoring center, and its questions have generated documentable changes. |

### 1.3.3 · Participation in risk appetite decisions

| Level | Descriptor |
|:---:|:---|
| **1** | The Board does not participate in fraud risk appetite decisions. |
| **2** | The Board approves risk appetite ceremonially without substantive discussion. |
| **3** | The Board discusses and approves annually. The discussion is documented in the minutes. |
| **4** | The Board actively modifies proposals: there is evidence of changes requested vs. management's original proposal. |
| **5** | The Board connects fraud risk appetite with the bank's total risk appetite. It evaluates adverse scenarios and approves differentiated tolerances. |

### 1.3.4 · Responsible C-suite executive

| Level | Descriptor |
|:---:|:---|
| **1** | No C-suite executive has explicit responsibility over the fraud program. |
| **2** | The CRO or COO has nominal responsibility, but without fraud KPIs in their evaluation. |
| **3** | A C-suite executive has explicit documented responsibility. Fraud appears in their job description. |
| **4** | The executive has fraud KPIs in their evaluation, chairs or co-chairs the committee, and reports to the Board. |
| **5** | A Chief Fraud Officer or equivalent exists with a seat on the executive committee, a dedicated budget, and authority to halt launches. |

## 1.4 — Ethical Culture and Awareness Programs

### 1.4.1 · Code of ethics and fraud

| Level | Descriptor |
|:---:|:---|
| **1** | No code of ethics mentioning fraud exists, or the existing code does not address internal or external fraud. |
| **2** | The code mentions fraud generically ('do not tolerate fraudulent conduct') without definitions, examples, or consequences. |
| **3** | The code addresses internal and external fraud with clear definitions, role-specific examples, disciplinary consequences, and is Board-approved. |
| **4** | It is supplemented with anonymized real cases from the bank. Signed annually. Knowledge is tested through assessments. |
| **5** | Updated with new typologies each year. There is evidence that consequences have been enforced based on the code. |

### 🔷 CORE · 1.4.2 · Employee awareness program

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud awareness program for employees exists. |
| **2** | Annual, mandatory fraud training via generic e-learning, without role-specific content. |
| **3** | Annual program differentiated by role, with content updated based on the bank's recent typologies. |
| **4** | Quarterly program with phishing/social engineering simulations, knowledge assessments, and coverage metrics. |
| **5** | Gamification, red team exercises, and correlation is measured between training and spontaneous detection/reporting metrics. |

### 1.4.3 · Role-specific specialized training

| Level | Descriptor |
|:---:|:---|
| **1** | No role-differentiated fraud training exists. |
| **2** | Investigators receive basic training, but analysts, technology, and business staff have no specific training. |
| **3** | Differentiated plan: analysts (typologies), investigators (chain of custody), technology (rules/models), business (red flags). |
| **4** | Each role has a curriculum with target certifications (CFE, CAMS). Progress is tracked and budget is allocated. |
| **5** | Includes rotations across areas, mentoring, and conference participation (ACFE, RSA). Linked to career development plans. |

### 1.4.4 · Whistleblower channel

| Level | Descriptor |
|:---:|:---|
| **1** | No whistleblower channel exists, or the existing one does not cover fraud. |
| **2** | One exists but is poorly known, not actively promoted, and does not offer anonymity guarantees. |
| **3** | Accessible channel (phone, email, web), promotes anonymity, operated by an independent third party, covers internal and external fraud. |
| **4** | Actively promoted (semi-annual campaigns), has a response SLA (<48h), case tracking, and protection against retaliation. |
| **5** | Channel metrics are measured: volume, % substantiated, resolution time. Compared vs. benchmarks. The Board receives a semi-annual report. |

### 1.4.5 · Tone from the top

| Level | Descriptor |
|:---:|:---|
| **1** | No evidence exists of senior management messages about fraud or ethics. |
| **2** | The CEO has mentioned the importance of ethics generically, but without specific reference to fraud. |
| **3** | At least one annual CEO message specifically about fraud prevention, distributed organization-wide. |
| **4** | Quarterly messages, participation in awareness events, with program data. |
| **5** | CEO and Board reference fraud in earnings calls, annual reports, and town halls. The anti-fraud culture is part of employer branding. |

### 1.4.6 · Anti-fraud culture measurement

| Level | Descriptor |
|:---:|:---|
| **1** | Anti-fraud culture is not measured in the organization. |
| **2** | Some ethics questions in the climate survey, but no fraud-specific questions. |
| **3** | The survey includes fraud-specific questions ('do you know how to report?', 'do you trust there will be no retaliation?'). |
| **4** | In addition to the survey, proxy indicators are measured: volume of spontaneous reports, time-to-report, voluntary participation. |
| **5** | Composite anti-fraud culture index combining surveys, proxy indicators, and simulation results. Compared year over year. |

## 1.5 — Regulatory Alignment

### 🔷 CORE · 1.5.1 · Regulatory requirements mapping

| Level | Descriptor |
|:---:|:---|
| **1** | No mapping of regulatory requirements applicable to the fraud program exists. |
| **2** | The main regulators are known but there is no systematic mapping of requirements vs. controls. |
| **3** | A compliance matrix exists that maps each requirement to a program control. Updated annually. |
| **4** | The matrix includes multi-jurisdiction coverage, compliance status, owner, and remediation plan. Presented to the compliance committee. |
| **5** | Updated within 30 days of each regulatory change. Includes impact analysis, timeline, and traceability to FCMA components. |

### 1.5.2 · Regulatory change monitoring

| Level | Descriptor |
|:---:|:---|
| **1** | No process for monitoring regulatory changes in fraud exists. |
| **2** | Compliance monitors general regulation, but there is no specific feed for fraud. |
| **3** | Monitoring process with defined sources and at least a quarterly bulletin to the fraud team. |
| **4** | The bulletin includes impact analysis, compliance timeline, and implementation owner. |
| **5** | Continuous monitoring (automated alerts), multi-jurisdiction, each change has an impact assessment with a tracked deadline. |

### 1.5.3 · Regulatory findings history and remediation

| Level | Descriptor |
|:---:|:---|
| **1** | No centralized record of regulatory findings in fraud is maintained. |
| **2** | Findings are documented when they occur but without centralized tracking or aging reports. |
| **3** | Centralized tracker with description, date, severity, owner, remediation plan, and closure date. |
| **4** | Reported monthly to the committee. Aging, closure rate, and recurrence are measured. Those >90 days are escalated. |
| **5** | Integrated with the internal audit system. Root cause analysis is performed on recurring findings. Patterns inform policy updates. |

# P2: Fraud Risk Assessment and Threat Intelligence

*Assesses the bank's ability to identify, assess, and prioritize fraud risks. Anchored in COSO/ACFE Principle 2.*

**5 sub-dimensions · 17 components · 7 in Screening Core**

## 2.1 — Fraud Risk Identification

### 🔷 CORE · 2.1.1 · Fraud scheme inventory

| Level | Descriptor |
|:---:|:---|
| **1** | No scheme inventory exists. The team knows fraud types through personal experience. |
| **2** | An informal list exists, not formally documented, without product/channel differentiation, and not updated in over 12 months. |
| **3** | Documented inventory differentiated by type (internal/external), product, channel, and modus operandi. Has an update date and owner. |
| **4** | Updated quarterly with input from investigations, intelligence, and vendors. Each scheme includes: description, indicators, controls, and historical loss. |
| **5** | Dynamic inventory automatically fed from investigations and threat intel. Includes emerging schemes not yet observed but detected in peers. |

### 🔷 CORE · 2.1.2 · Emerging threat identification process

| Level | Descriptor |
|:---:|:---|
| **1** | No emerging threat identification process exists. The bank learns about threats when it suffers them. |
| **2** | The team occasionally reads industry publications, but without a structured process or designated owner. |
| **3** | Documented process with defined sources (FS-ISAC, vendors, ACFE, dark web monitoring), frequency, and designated owner. |
| **4** | Threats are assessed using a potential impact methodology and prioritized. Presented at the fraud committee. |
| **5** | Predictive threat modeling is used: analysis of how adversaries could exploit new products before it happens. Red team exercises conducted annually. |

### 2.1.3 · Inventory coverage

| Level | Descriptor |
|:---:|:---|
| **1** | The inventory covers only card-based transactional fraud. |
| **2** | Covers transactional fraud and some additional types, but leaves out entire categories. |
| **3** | Covers at least: transactional, origination, ATO, internal fraud, and digital channel fraud. |
| **4** | Full coverage: transactional (by channel), origination, ATO, internal, third-party, P2P/instant payments, and APP fraud. |
| **5** | Total coverage plus emerging categories: mule accounts, voice cloning/deepfake, AI-assisted social engineering, fraud-as-a-service, and cross-border. |

### 2.1.4 · Update frequency

| Level | Descriptor |
|:---:|:---|
| **1** | The inventory is not updated or has no last-update date. |
| **2** | Updated ad-hoc when an incident occurs, without a defined frequency. |
| **3** | Updated at least annually as part of the risk assessment. |
| **4** | Updated quarterly with input from investigations, intelligence, and product changes. |
| **5** | Updated in near-real-time: each investigation automatically feeds the inventory. SLA of 5 days to incorporate a new typology. |

## 2.2 — Inherent Risk Assessment Methodology

### 🔷 CORE · 2.2.1 · Formal documented methodology

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud risk assessment methodology exists. |
| **2** | Informal methodology (brainstorming session) that is neither documented nor repeatable. |
| **3** | Documented methodology based on likelihood × impact, with defined scales, applied to each scheme. |
| **4** | Includes quantitative criteria (loss data, volume) and qualitative criteria. Applied consistently and documented. |
| **5** | Uses actual loss data, actuarial projections, and benchmarks to quantify risk in USD. Independently validated. |

### 2.2.2 · Assessment granularity

| Level | Descriptor |
|:---:|:---|
| **1** | The assessment is at the institution level: a single risk score. |
| **2** | Differentiates between internal and external fraud, but does not decompose further. |
| **3** | Performed by product and by channel. |
| **4** | Performed by product × channel × fraud type. Highest-risk combinations are identified. |
| **5** | Includes product × channel × type × segment × geography. Multi-dimensional heat map, executed quarterly. |

### 2.2.3 · Business line participation

| Level | Descriptor |
|:---:|:---|
| **1** | Business lines do not participate in the assessment. |
| **2** | They are consulted occasionally but their input is neither structured nor documented. |
| **3** | Each line designates a representative who participates in the annual assessment. |
| **4** | Lines co-assess the risks of their products, validate prioritization, and commit to remediation plans. |
| **5** | Lines are co-owners: they participate quarterly, contribute business data, and their KPIs include collaboration metrics with fraud. |

### 2.2.4 · Likelihood and impact rating criteria

| Level | Descriptor |
|:---:|:---|
| **1** | No rating criteria exist. The assessment is purely subjective. |
| **2** | Generic qualitative scales ('high/medium/low') are used without definition of what each level means. |
| **3** | Documented criteria exist: likelihood is measured on a defined scale (e.g., 1=rare, 5=almost certain) and impact in USD with specific ranges by bank size. |
| **4** | Criteria combine quantitative data (historical frequency, loss volume) with qualitative data (team expertise). Calibrated annually with actual data. |
| **5** | Criteria are statistically validated: likelihood is based on actuarial event distributions, impact is modeled with Monte Carlo simulation. Subject to independent challenge. |

## 2.3 — Control Effectiveness Assessment

### 🔷 CORE · 2.3.1 · Control assessment process

| Level | Descriptor |
|:---:|:---|
| **1** | Control effectiveness is not assessed. Controls are assumed effective once implemented. |
| **2** | Reviewed when something fails, without proactive or periodic assessment. |
| **3** | Annual assessment process for key controls with sample testing and documentation. |
| **4** | Each control has an owner, is tested semi-annually (design + operating effectiveness), and feeds into residual risk. |
| **5** | Continuous testing with production effectiveness metrics (detection rate per rule, % of fraud that bypassed each control). Used to recalibrate or retire. |

### 2.3.2 · Control-to-scheme mapping

| Level | Descriptor |
|:---:|:---|
| **1** | No mapping between controls and fraud schemes exists. |
| **2** | It is informally known which controls cover what, but without documentation. |
| **3** | Documented controls × schemes matrix. Schemes with gaps are identified. |
| **4** | The matrix is updated with each new scheme. Coverage is measured. Gaps are prioritized. |
| **5** | The matrix includes measured effectiveness by scheme. Control failure simulations are run. Single points of failure are identified. |

### 2.3.3 · Control effectiveness testing

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud controls are not tested. They are assumed effective because they exist. |
| **2** | Controls are tested only when something fails or when audit requires it. |
| **3** | Effectiveness tests are executed at least annually for key controls: design effectiveness is verified and documented. |
| **4** | Design and operating effectiveness are tested semi-annually. Actual data is used (e.g., known fraudulent transactions that bypassed the control). Results are documented per control. |
| **5** | Red teaming is executed: real attacks are simulated against controls to measure effectiveness under adverse conditions. Bypass rate is measured per control and used to recalibrate. |

## 2.4 — Residual Risk Determination and Prioritization

### 🔷 CORE · 2.4.1 · Residual risk calculation

| Level | Descriptor |
|:---:|:---|
| **1** | Residual fraud risk is not calculated. |
| **2** | Qualitative notion ('high', 'medium', 'low') without formal calculation. |
| **3** | Calculated as inherent risk minus control effectiveness. Recorded by scheme. |
| **4** | Quantified in USD (expected post-control loss) by product/channel. Compared vs. approved risk appetite. |
| **5** | Continuously monitored with actual data. Deviations vs. risk appetite trigger automatic alerts and action plans. |

### 2.4.2 · Formal acceptance of residual risks

| Level | Descriptor |
|:---:|:---|
| **1** | Residual risks are not formally accepted. |
| **2** | Some are implicitly accepted ('we don't have budget') without formal approval. |
| **3** | Those exceeding tolerance are presented to the committee for acceptance or remediation. |
| **4** | Acceptance requires the business owner's signature + risk committee approval, with documented justification. |
| **5** | Acceptance has a lifecycle: quarterly review, automatic expiration, re-approval required. An inventory of accepted risks is reported. |

## 2.5 — Fraud Threat Intelligence

### 🔷 CORE · 2.5.1 · Fraud intelligence function

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud intelligence function exists. No access to external sources. |
| **2** | The team reads newsletters and vendor alerts, but there is no dedicated function or assigned owner. |
| **3** | Intelligence owner with defined sources and regular report production. |
| **4** | Multiple sources (FS-ISAC, consortia, vendors, OSINT, dark web), monthly reports, feeds rules/models. |
| **5** | Full cycle (collection → analysis → dissemination → action → feedback). Near-real-time alerts. Detection impact is measured. |

### 🔷 CORE · 2.5.2 · Integration of intelligence with detection

| Level | Descriptor |
|:---:|:---|
| **1** | Intelligence does not connect to detection rules or models. |
| **2** | Occasionally a rule is created from intelligence, but the process is ad-hoc. |
| **3** | Documented process: intelligence generates a ticket that the rules team evaluates and prioritizes. |
| **4** | The process has an SLA (e.g., <72h for critical threat). Time-to-deploy from intel to production is measured. |
| **5** | IoC feeds are programmatically converted into features for ML models. Intel's contribution to the detection rate is measured. |

### 2.5.3 · Intelligence sources (internal and external)

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud intelligence sources are used, neither internal nor external. |
| **2** | Internal sources (investigation results) are used but external sources are not consumed. |
| **3** | At least 3 external sources are consumed (FS-ISAC, vendor alerts, payment networks) in addition to internal ones. Documented. |
| **4** | Internal sources (investigations, alerts, complaints) are consolidated with external ones (consortia, OSINT, dark web, law enforcement). Each source's quality is evaluated annually. |
| **5** | A threat intelligence platform (TIP) is used that aggregates, correlates, and prioritizes intelligence from 10+ sources. Actionable intelligence rate and time-to-action are measured. |

### 2.5.4 · Intelligence report production

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud intelligence reports are produced. |
| **2** | Findings are shared informally via email or chat when someone finds something relevant. |
| **3** | An intelligence bulletin is produced at least monthly, with defined recipients (fraud team, rules, management). |
| **4** | Differentiated reports are produced: operational (weekly, for analysts and rules), tactical (monthly, for management), and strategic (quarterly, for Board). Each with appropriate format and depth. |
| **5** | Reports include actionable indicators of compromise (IoCs), rule/model recommendations, and 90-day threat assessments. The number of recommendations implemented and their detection impact are measured. |

# P3: Prevention and Control Activities (Journey-Based)

*Assesses preventive controls along the customer journey, including APP fraud/scams. Anchored in COSO/ACFE Principle 3.*

**7 sub-dimensions · 28 components · 8 in Screening Core**

## 3.1 — Customer Journey Mapping

### 🔷 CORE · 3.1.1 · Journey mapping with vulnerability points

| Level | Descriptor |
|:---:|:---|
| **1** | No journey mapping from a fraud perspective exists. |
| **2** | Informally known but not documented with vulnerabilities. |
| **3** | Maps for the 3 main products/channels with vulnerability points and mapped controls. |
| **4** | All journeys mapped, each point with an assigned control and owner. Updated upon each flow change. |
| **5** | Include risk heat maps by point, actual loss data, and semi-annual war games for new vulnerabilities. |

### 🔷 CORE · 3.1.2 · Control coverage by journey stage

| Level | Descriptor |
|:---:|:---|
| **1** | Controls concentrated in a single stage (generally post-transaction). |
| **2** | Controls in 2 stages but gaps remain in authentication, post-transaction, or disputes. |
| **3** | Controls across all 5 stages: onboarding, authentication, transaction, post-transaction, and dispute. |
| **4** | Controls differentiated by channel and product at each stage. Effectiveness is measured per stage. |
| **5** | Adaptive controls: intensity adjusts dynamically based on risk score. Capture rate and friction are measured per stage. |

### 3.1.3 · Embedded vs. bolt-on controls

| Level | Descriptor |
|:---:|:---|
| **1** | All controls are bolt-on: added after the journey design. |
| **2** | Some are embedded (e.g., OTP), but most are patches. |
| **3** | The main controls are designed as part of the original journey. |
| **4** | A 'fraud by design' guide is applied in the design of all new journeys. |
| **5** | All controls are invisible to the customer (frictionless by design) unless the risk score exceeds a threshold. |

### 3.1.4 · Gap analysis of digital vs. in-person journeys

| Level | Descriptor |
|:---:|:---|
| **1** | No gap analysis between digital and in-person journeys has been performed. |
| **2** | It is recognized that digital journeys carry higher risk, but the control gap has not been quantified. |
| **3** | A gap analysis has been performed identifying controls present in the in-person journey but absent in the digital one (and vice versa). Documented. |
| **4** | The gap analysis is updated semi-annually, includes a remediation plan with timeline, and is prioritized by expected loss. |
| **5** | A continuous penetration testing program for digital journeys exists that identifies vulnerabilities before they are exploited. Results feed the controls roadmap. |

## 3.2 — Onboarding and Identity

### 🔷 CORE · 3.2.1 · Identity theft prevention program

| Level | Descriptor |
|:---:|:---|
| **1** | No formal identity theft program exists. Red flags are not identified. |
| **2** | Documents are reviewed manually at in-person account opening, without a digital program. |
| **3** | Documented program with red flags by channel, front-line training, and at least one verification tool. |
| **4** | Documentary + non-documentary verification + digital ID verification. Detection rate at onboarding is measured. |
| **5** | Multimodal verification: document + facial match + device intelligence + behavioral analytics. |

### 🔷 CORE · 3.2.2 · Synthetic identity detection

| Level | Descriptor |
|:---:|:---|
| **1** | Synthetic identities are not screened for in origination. |
| **2** | Suspicious applications are reviewed manually, without specific tools. |
| **3** | At least 2 synthetic ID signals are used (SSN randomization, thin credit file with high activity). |
| **4** | A specific model or score evaluates data consistency, credit-building velocity, and anomalous patterns. |
| **5** | Multi-layered approach: score + consortium data + graph analysis + device verification. Specific detection rate is measured. |

### 3.2.3 · Device validation at digital onboarding

| Level | Descriptor |
|:---:|:---|
| **1** | No device validation at digital onboarding. |
| **2** | Basic information is recorded (IP, user agent) but not used for decisions. |
| **3** | Device fingerprinting at onboarding compared against blacklists. |
| **4** | Enriched device fingerprint with geolocation, velocity, integrated with the onboarding score. |
| **5** | Real-time device intelligence: reputation score, emulator detection, jailbreak/root, VPN/proxy. Holistic decision. |

### 3.2.4 · Enhanced due diligence for high-risk customers

| Level | Descriptor |
|:---:|:---|
| **1** | No enhanced due diligence for high-risk customers from a fraud perspective exists. |
| **2** | EDD is applied for AML/KYC but does not include fraud risk criteria. |
| **3** | Fraud EDD is applied for at least 2 high-risk segments (e.g., new digital customers, customers with chargeback history). |
| **4** | EDD is applied with fraud criteria differentiated by product, channel, and profile. Criteria are reviewed annually based on loss data. |
| **5** | Fraud EDD is integrated with the onboarding scoring: the level of due diligence is dynamically determined by the applicant's risk score. Detection rate in EDD vs. standard diligence is measured. |

### 3.2.5 · Internal and shared blacklists (consortia)

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud blacklists are maintained. |
| **2** | A basic internal blacklist is maintained (e.g., compromised cards), but it is not shared with consortia nor systematically updated. |
| **3** | Internal blacklists by type (devices, beneficiaries, identities) are maintained and at least one external consortium list is consumed. |
| **4** | Lists are updated in near-real-time from investigations and external sources. Used in the detection scoring. Each list's contribution to the detection rate is measured. |
| **5** | Active participation in bidirectional sharing consortia. Lists are programmatically integrated with the detection engine. False match rate and true match rate are measured per list. |

### 3.2.6 · Sanctions list screening (OFAC)

| Level | Descriptor |
|:---:|:---|
| **1** | Customers and transactions are not screened against sanctions lists from a fraud perspective. |
| **2** | Screening exists in AML/compliance but is not integrated with the fraud workflow. |
| **3** | OFAC/SDN screening is run at onboarding and results are shared with the fraud team. |
| **4** | Screening is run at onboarding and on each transaction for high-risk beneficiaries. Matches are investigated with a documented protocol. |
| **5** | Real-time, multi-list screening (OFAC, UN, EU, local lists), with advanced fuzzy matching. Integrated with the fraud scoring and false positive rate is audited. |

## 3.3 — Authentication and Access Control

### 🔷 CORE · 3.3.1 · Authentication methods by channel

| Level | Descriptor |
|:---:|:---|
| **1** | Username + password only across all channels. No second factor. |
| **2** | MFA (SMS OTP) in at least one channel; others rely on password only. |
| **3** | MFA across all digital channels. Methods: OTP and push notification at minimum. |
| **4** | In addition to MFA, advanced methods in at least one channel: biometrics, device binding, behavioral biometrics. |
| **5** | Adaptive multi-method authentication: the system selects the method based on the session risk score. |

### 3.3.2 · Risk-based adaptive authentication

| Level | Descriptor |
|:---:|:---|
| **1** | Does not exist. Everyone goes through the same flow regardless of risk. |
| **2** | Step-up for fixed operations (e.g., transfers >$X), but not based on session risk. |
| **3** | Step-up is triggered based on at least 3 risk signals (amount, new device, atypical geo). |
| **4** | Risk engine evaluates 10+ signals in real time and decides the authentication level. Abandonment rate by level is measured. |
| **5** | The authentication engine is continuously trained with confirmed fraud data. Optimized to minimize friction for legitimate sessions. |

### 🔷 CORE · 3.3.3 · ATO protection

| Level | Descriptor |
|:---:|:---|
| **1** | No specific ATO controls exist. Device changes, SIM swap, or credential stuffing are not monitored. |
| **2** | Password changes are detected with notification, but no monitoring of other indicators. |
| **3** | At least 3 indicators are monitored: device change + contact data change + login from atypical IP/geo. |
| **4** | Session risk score integrating device fingerprint, behavioral biometrics, velocity, IP reputation, SIM swap detection. |
| **5** | Multi-layered real-time: credential intelligence, session risk scoring, behavioral analytics, telecom coordination for SIM swap. |

### 3.3.4 · Security/friction balance in authentication

| Level | Descriptor |
|:---:|:---|
| **1** | Friction generated by authentication is not measured. |
| **2** | Customer complaints about authentication are known, but not systematically measured. |
| **3** | Authentication flow abandonment rate is measured by channel. Reported monthly. |
| **4** | Abandonment, completion time, error rate, and NPS are measured by authentication method. Used to calibrate step-up. |
| **5** | An optimization model exists that balances security (fraud prevented) vs. friction (abandonment + NPS) by customer segment. Recalibrated quarterly. |

## 3.4 — Transaction Controls

### 3.4.1 · Transaction limits

| Level | Descriptor |
|:---:|:---|
| **1** | No differentiated fraud limits exist. |
| **2** | Generic limits by channel without differentiation by customer risk profile. |
| **3** | Limits by channel and product with at least 3 tiers (new, regular, VIP). Reviewed annually. |
| **4** | Dynamic limits based on the customer's behavioral profile. Experience impact is measured. |
| **5** | Fully adaptive limits: recalculated per transaction based on risk score, context (time, device, beneficiary). Optimized to minimize legitimate declines. |

### 🔷 CORE · 3.4.2 · Real-time payment controls (PIX/instant)

| Level | Descriptor |
|:---:|:---|
| **1** | Same controls as batch payments — no differentiation. |
| **2** | Same limits applied more restrictively, without specific controls. |
| **3** | Specific controls: real-time scoring, beneficiary verification, velocity checks for the channel. |
| **4** | Includes mule account detection, behavioral analytics, confirmation of payee (CoP), intelligent hold (<30 sec) for high risk. |
| **5** | Scoring <100ms with a channel-specific ML model. FP rate measured separately. Network intelligence for high-risk beneficiaries. |

### 3.4.3 · Preventive business rules

| Level | Descriptor |
|:---:|:---|
| **1** | No preventive rules exist beyond amount limits. |
| **2** | 2-3 basic rules exist (e.g., country block, amount limit), applied uniformly. |
| **3** | Differentiated rules exist: velocity checks, geo-fencing, merchant category restrictions, and atypical time-of-day. Documented with owner. |
| **4** | Preventive rules are calibrated with actual fraud data. The impact of each rule on prevention vs. friction generated is measured. |
| **5** | Rules are dynamic: adjusted in near-real-time based on the customer profile and transaction context. A/B testing is used to validate new rules before general deployment. |

### 3.4.4 · Exception and control override process

| Level | Descriptor |
|:---:|:---|
| **1** | No exception process exists. Controls are either applied or not, without documentation. |
| **2** | Exceptions are granted informally (e.g., a manager authorizes by phone). Not documented. |
| **3** | A documented process exists: request, justification, approval by a defined authority, and exception log. |
| **4** | Exceptions are recorded in a system, have limited duration, and are audited quarterly. Exception volume and its correlation with losses are measured. |
| **5** | Exceptions are analyzed as a signal that the control needs recalibration. Recurring exception patterns trigger a control review. Reported to the committee. |

## 3.5 — APP Fraud / Scam Prevention

### 🔷 CORE · 3.5.1 · Coercion indicator detection

| Level | Descriptor |
|:---:|:---|
| **1** | No coercion or social engineering indicators are identified in the journey. |
| **2** | Analysts are trained to identify coercion on calls, but without automated detection. |
| **3** | At least 3 automated signals are monitored: unusual amount + new beneficiary + atypical time. |
| **4** | Behavioral analytics: anomalous session times, typing patterns suggesting dictation, simultaneous phone session. |
| **5** | ML model specific to APP fraud integrating behavioral, transactional, and contextual data. Intelligent pre-authorization friction. |

### 3.5.2 · Proactive customer education

| Level | Descriptor |
|:---:|:---|
| **1** | No customer education program on fraud or scams exists. |
| **2** | Occasional alerts on social media or website, without a structured program. |
| **3** | Program with content by channel (in-app tips, emails, SMS) focused on frequent typologies. Monthly publication. |
| **4** | Contextual warnings within the journey (e.g., when transferring to a new beneficiary). Interaction rate is measured. |
| **5** | Personalization: warnings adapted to the customer's profile and transaction context. Impact on fraud rate is measured. |

### 3.5.3 · Confirmation of Payee (CoP) protocol

| Level | Descriptor |
|:---:|:---|
| **1** | No beneficiary confirmation protocol before payments exists. |
| **2** | The destination bank name is displayed but the beneficiary name is not validated. |
| **3** | Confirmation of Payee or equivalent is implemented for high-risk payments: the beneficiary name is validated against the destination account before authorization. |
| **4** | CoP is applied to all payments to new beneficiaries. Mismatch rate and its correlation with fraud are measured. The customer is notified before proceeding. |
| **5** | CoP with intelligence: in addition to name matching, the beneficiary's risk is assessed (mule score, consortium fraud history). High-risk beneficiaries are automatically blocked. |

## 3.6 — Internal Fraud Controls

### 3.6.1 · Segregation of duties

| Level | Descriptor |
|:---:|:---|
| **1** | Segregation has not been assessed from an internal fraud perspective. |
| **2** | Some incompatibilities are recognized but without a formal matrix. |
| **3** | Segregation matrix for high-risk processes, documented and reviewed annually. |
| **4** | The matrix is systemically enforced in core system permissions. Audited semi-annually. Violations are detected. |
| **5** | Real-time monitoring: any violation generates an immediate alert. Reported to the committee monthly. |

### 3.6.2 · Employee activity monitoring

| Level | Descriptor |
|:---:|:---|
| **1** | Employee activity is not monitored from a fraud perspective. |
| **2** | Logs are reviewed manually upon suspicion, without proactive monitoring. |
| **3** | At least 3 indicators are monitored: off-hours access, unusual volume, access to unrelated accounts. |
| **4** | Dedicated rule engine for internal fraud: behavior, access to sensitive information, transactions on employee/family accounts. |
| **5** | Employee behavioral analytics: baseline per role, correlation with HR data, quarterly access reviews. |

### 3.6.3 · Dual authorization for sensitive operations

| Level | Descriptor |
|:---:|:---|
| **1** | No dual authorization for sensitive operations exists. |
| **2** | Dual authorization is required only for some operations (e.g., international transfers >$X), but it is not systematized. |
| **3** | A documented list of operations requiring dual authorization exists: account adjustments, limit changes, control overrides, high-value manual operations. |
| **4** | Dual authorization is systemically enforced: the system does not allow the operation to complete without the second approval. Compliance is audited. |
| **5** | Dual authorization effectiveness is monitored: cases where the second approval detected anomalies are analyzed. The list of operations is adjusted annually. |

### 3.6.4 · Background checks for high-risk positions

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud-focused background checks are performed for high-risk positions. |
| **2** | Standard HR background checks are done at hiring, but they are not repeated or fraud-focused. |
| **3** | Fraud-specific background checks (criminal records, credit, references) are performed for high-risk positions. Documented. |
| **4** | Background checks are repeated periodically (at least every 2 years) for high-risk positions. Changes in the employee's financial profile are monitored. |
| **5** | A continuous monitoring program is used: automatic alerts if an employee in a high-risk position has significant changes in their credit profile or records. Integrated with internal fraud monitoring. |

## 3.7 — Third-Party and Vendor Controls

### 3.7.1 · Fraud due diligence on vendors

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud risk is not assessed for vendors or partners. |
| **2** | General third-party risk is assessed but without a fraud-specific component. |
| **3** | Fraud questions included in the assessment of high-risk third parties. Documented. |
| **4** | Specific questionnaire with scoring. High-risk parties require periodic review and contractual controls. |
| **5** | Fraud indicators originating through third parties are monitored. Data is shared with strategic partners. Fraud audits of third parties are conducted. |

### 3.7.2 · Contractual controls with third parties

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud-related contractual controls with third parties exist. |
| **2** | Contracts with third parties mention fraud generically ('comply with security standards'). |
| **3** | Contracts include specific clauses: liability shift, monitoring obligation, incident reporting <24h, and right to audit. |
| **4** | Clauses are reviewed annually. Compliance with contractual fraud SLAs is measured. Non-compliance is escalated. |
| **5** | Contracts include measurable fraud KPIs (e.g., fraud rate originated by the third party <X bps), penalties for non-compliance, and bidirectional data sharing. |

### 3.7.3 · Third-party originated fraud monitoring

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud originating through third-party channels is not monitored. |
| **2** | It is known that some third parties originate fraud, but it is neither measured nor tracked. |
| **3** | Fraud rate per third party/partner is measured at least quarterly. Compared vs. proprietary channels. |
| **4** | Fraud rate per third party is monitored in near-real-time. Differentiated controls are applied for high-risk third parties. Deviations are escalated. |
| **5** | A fraud dashboard per third party exists, integrated with the vendor management program. Third parties with fraud rates exceeding the threshold are placed on a remediation plan or terminated. |

# P4: Detection, Monitoring, and Decisioning

*Assesses real-time and batch detection capabilities, ML models, alert management, and customer impact. Anchored in COSO/ACFE Principle 3 (detective) + Gartner 5 Layers.*

**6 sub-dimensions · 23 components · 9 in Screening Core**

## 4.1 — Transaction Monitoring Engine

### 🔷 CORE · 4.1.1 · Coverage by channels and products

| Level | Descriptor |
|:---:|:---|
| **1** | The engine covers only one channel or product (e.g., credit cards only). |
| **2** | Covers 2–3 channels but leaves out significant channels (e.g., PIX or digital banking). |
| **3** | Covers all major channels and products: cards, transfers, instant payments, digital banking, and origination. |
| **4** | Full coverage with differentiated rules by channel/product. Detection rate is measured by channel. New channels are integrated within <90 days. |
| **5** | Universal coverage with unified scoring: channel rules + cross-channel ML model + network intelligence. Alert if a channel becomes unmonitored. |

### 🔷 CORE · 4.1.2 · Rule inventory and documentation

| Level | Descriptor |
|:---:|:---|
| **1** | No rule inventory exists. Rules are in the system but without external documentation. |
| **2** | A list of active rules exists, but without documentation of purpose, logic, or performance. |
| **3** | Each rule has: name, description, logic, creation date, owner, targeted scheme, and alerts/month. |
| **4** | Additionally: detection rate, FP rate, last calibration date, and threshold justification. Reviewed semi-annually. |
| **5** | Dynamic inventory: production metrics are updated automatically. Rules not fired in >6 months are flagged for review. Rules with FP >90% are escalated for recalibration. |

### 4.1.3 · Threshold calibration

| Level | Descriptor |
|:---:|:---|
| **1** | Thresholds were defined at implementation and have not been modified. |
| **2** | Adjusted reactively when complaints or losses increase, without a periodic process. |
| **3** | At least semi-annual recalibration based on alert distribution and investigation feedback. |
| **4** | Quarterly recalibration with TP and FP data, documenting each change with before/after metrics. |
| **5** | Automatic optimization: the system recommends adjustments maximizing detection with an FP constraint. Changes go through governance. |

### 4.1.4 · Rule set governance

| Level | Descriptor |
|:---:|:---|
| **1** | No governance exists. Anyone with access can change rules. |
| **2** | Informal process ('ask the boss for approval') that is neither documented nor audited. |
| **3** | Documented process: request, justification, approval, QA testing before production. |
| **4** | Includes a change advisory board, backtesting, impact analysis, and rollback procedure. |
| **5** | Full governance: ticket, backtesting, dual approval, canary testing, 7-day post-deploy monitoring, automatic rollback if FP exceeds threshold. |

### 🔷 CORE · 4.1.5 · Rule performance

| Level | Descriptor |
|:---:|:---|
| **1** | Individual rule performance is not measured. |
| **2** | The global FP rate is known but not per rule. |
| **3** | Detection rate and FP rate are measured per rule at least quarterly. Top-10 by volume are identified. |
| **4** | Each rule has a scorecard: alerts, detection rate, FP rate, TP rate, detected loss, and undetected loss. Monthly review. |
| **5** | Real-time dashboards per rule, automatic alerts if FP exceeds threshold or a rule stops firing. Quarterly 'zombie rules' report. |

## 4.2 — Machine Learning Models

### 🔷 CORE · 4.2.1 · ML model existence and scope

| Level | Descriptor |
|:---:|:---|
| **1** | ML models are not used. All monitoring relies on static rules. |
| **2** | A vendor ML model is used (e.g., FICO/Falcon) without customization or proprietary models. |
| **3** | ML models (vendor + at least 1 proprietary) for detection. Cover at least one fraud type. |
| **4** | Multiple ML models: transactional fraud, ATO, origination, and at least one cross-channel. Complete technical documentation. |
| **5** | Complete portfolio: by fraud type, channel, and segment. Advanced techniques (deep learning, graph neural networks). Contribution margin of ML vs. rules is measured. |

### 🔷 CORE · 4.2.2 · Independent model validation

| Level | Descriptor |
|:---:|:---|
| **1** | Models are not independently validated. The developing team also validates. |
| **2** | Basic internal validation before deployment, by the same team. |
| **3** | Independent validation team or function (2LoD or third party) validates before production. Documented. |
| **4** | Follows OCC 2011-12 / SR 11-7: conceptual soundness, outcomes analysis, ongoing monitoring. Report with findings. |
| **5** | Rigorous backtesting, stability analysis (PSI), AUC/Gini, calibration analysis, bias testing, stress testing. Annual revalidation. |

### 4.2.3 · Champion/challenger

| Level | Descriptor |
|:---:|:---|
| **1** | No process exists. The production model is the only one until manual replacement. |
| **2** | New models are developed as complete replacements without parallel execution. |
| **3** | At least one challenger in shadow mode to compare performance before the swap. |
| **4** | Multiple challengers in parallel with automated metrics. The swap is decided with data. |
| **5** | A/B testing in production with exposure control. Continuous champion/challenger cycle. |

### 🔷 CORE · 4.2.4 · Production performance monitoring

| Level | Descriptor |
|:---:|:---|
| **1** | Performance is not monitored once in production. |
| **2** | Reviewed manually every 6+ months or when losses increase. |
| **3** | Monthly monitoring: AUC, detection rate, FP rate, score distribution. |
| **4** | Real-time or weekly monitoring with automatic alerts if metrics degrade (AUC, PSI, FP rate). |
| **5** | Complete framework: performance + feature drift + concept drift + data quality checks. Monthly backtesting. Automatic retraining trigger. |

### 4.2.5 · Model types and techniques used

| Level | Descriptor |
|:---:|:---|
| **1** | ML models are not used for fraud. |
| **2** | A single model type is used (e.g., logistic regression or vendor score) without exploring other techniques. |
| **3** | At least 2 model types are used: supervised (e.g., gradient boosting) and at least one unsupervised (e.g., clustering for anomalies). |
| **4** | A model ensemble combining multiple techniques (supervised, unsupervised, neural networks) is used. Each technique's contribution to detection is evaluated. |
| **5** | Frontier techniques are used: graph neural networks for network detection, deep learning for transactional sequences, generative models for data augmentation on rare classes. The justification for each technique is documented. |

### 4.2.6 · Model explainability and interpretability

| Level | Descriptor |
|:---:|:---|
| **1** | Model explainability is not evaluated. They are black boxes. |
| **2** | The model's most important features are known, but an individual decision cannot be explained. |
| **3** | Explainability techniques (SHAP, LIME) are used for at least the main model. Why a transaction was flagged as suspicious can be explained. |
| **4** | Explainability is integrated into the investigation workflow: the analyst sees the top-N reasons for each alert. The usefulness of explanations is evaluated with analyst feedback. |
| **5** | Explainability is also used for regulatory compliance (fair lending, bias testing), model debugging, and client communication when required. Audited annually. |

### 4.2.7 · Model development process

| Level | Descriptor |
|:---:|:---|
| **1** | No standardized fraud model development process exists. |
| **2** | Models are developed ad-hoc: a data scientist builds them with their own methodology. |
| **3** | A documented process exists with stages: problem definition, data selection, feature engineering, training, testing, documentation, and deployment. |
| **4** | The process includes peer review at each stage, data governance (training data lineage), out-of-time testing, and complete documentation aligned with OCC/SR 11-7. |
| **5** | The process is automated (MLOps pipeline): feature store, automated training, automated testing (AUC, stability, bias), automated documentation, and deployment with canary testing. Time-to-production for new models is measured. |

## 4.3 — Detection Architecture: Real-Time vs. Batch

### 🔷 CORE · 4.3.1 · Real-time capability

| Level | Descriptor |
|:---:|:---|
| **1** | No real-time detection exists. Everything is batch (D+1). |
| **2** | Some alerts in near-real-time (<1 hour), majority batch daily. |
| **3** | Real-time scoring (<500ms) for main channels. |
| **4** | Scoring <200ms for all channels. Latency is monitored with SLA. |
| **5** | Scoring <100ms with 99.9% uptime. Supports 10x peaks. Quarterly stress tests. Failover with graceful degradation. |

### 4.3.2 · Complementary batch processes

| Level | Descriptor |
|:---:|:---|
| **1** | No batch detection processes exist. Anything not detected in real-time is missed. |
| **2** | Manual ad-hoc queries are run when a pattern is suspected, but no automated batch processes exist. |
| **3** | Daily batch processes exist that look for long-term patterns: accumulated velocity, recurring beneficiary patterns, ring detection. |
| **4** | Batch processes cover typologies that cannot be detected in real-time: slow-burn patterns, synthetic ID rings, internal collusion. Run daily with automatic alerts. |
| **5** | Real-time and batch are combined in a lambda/kappa architecture: real-time decides in milliseconds, batch re-evaluates with full historical context and generates retroactive alerts. Each layer's contribution is measured. |

### 4.3.3 · Decisioning architecture

| Level | Descriptor |
|:---:|:---|
| **1** | No defined decisioning architecture exists. Decisions are manual or automatic without clear criteria. |
| **2** | Decisions are binary: automatic (approved) or manual (review queue). No nuances. |
| **3** | A 3-tier architecture exists: automatic approval (low risk), alert for review (medium risk), and automatic block (high risk). Thresholds are documented. |
| **4** | The architecture includes intermediate decisions: approval with step-up authentication, approval with temporary hold, and approval with customer notification. The impact of each decision is measured. |
| **5** | The architecture is adaptive: decision thresholds adjust dynamically by channel, product, and time of day. Reinforcement learning is used to optimize decisions based on actual outcomes. |

## 4.4 — Alert Management and Triage

### 🔷 CORE · 4.4.1 · Triage process

| Level | Descriptor |
|:---:|:---|
| **1** | No triage process exists. Alerts are handled in order of arrival without prioritization. |
| **2** | Highest-amount alerts are informally prioritized, without documented criteria or SLAs. |
| **3** | Documented process with prioritization criteria, assignment, and disposition SLAs. |
| **4** | Automated triage: a priority score assigns alerts to queues with differentiated SLAs. Top-priority alerts with SLA <30 min. |
| **5** | ML prioritization ranks by TP probability × financial impact. Low-probability alerts are auto-dispositioned. Productivity is optimized. |

### 4.4.2 · Customer impact of false positives

| Level | Descriptor |
|:---:|:---|
| **1** | False positive impact on the customer is not measured. |
| **2** | Complaints from blocks are known but not quantified or correlated with the engine. |
| **3** | Legitimate declined transaction rate is measured and reported monthly. |
| **4** | Measured: legitimate declines, post-fraud NPS, lost revenue, contact rate per FP. Presented to the committee. |
| **5** | An impact model quantifies the total cost of friction in USD. Used to calibrate detection thresholds. |

### 4.4.3 · Analysis team productivity

| Level | Descriptor |
|:---:|:---|
| **1** | Alert analysis team productivity is not measured. |
| **2** | It is informally known how many alerts each analyst reviews, but it is not measured or compared. |
| **3** | Measured: alerts per analyst per day, average disposition time, and correct disposition rate. |
| **4** | Measured with granularity: by analyst, by alert type, by shift. Used for workload balancing, training needs identification, and headcount planning. |
| **5** | Productivity is optimized with ML: alerts are routed to the analyst with the greatest expertise in the fraud type. Gamification and quality scoring are used to incentivize accuracy, not just volume. |

### 4.4.4 · Disposition categorization and feedback

| Level | Descriptor |
|:---:|:---|
| **1** | Alerts are closed without result categorization. |
| **2** | Alerts are closed as 'fraud' or 'not fraud' without sub-categorization. |
| **3** | Categorized with at least 5 dispositions: confirmed fraud (by type), false positive (by reason), escalated, and pending. Used for metrics. |
| **4** | Dispositions directly feed rule and model performance metrics. The false positive reason is used to recalibrate. |
| **5** | Dispositions are used as retraining labels for ML models. Quality assurance is executed on dispositions (double review of a sample). Analyst error rate is measured. |

## 4.5 — Cross-Channel Monitoring

### 🔷 CORE · 4.5.1 · Unified customer view

| Level | Descriptor |
|:---:|:---|
| **1** | Each channel has independent monitoring. No information is cross-referenced. |
| **2** | Some lists are shared but scoring is per channel without a customer view. |
| **3** | Customer-level score aggregating activity from at least 2 channels for decisioning. |
| **4** | Customer-level score integrating all channels simultaneously. |
| **5** | Score with cross-channel features in real-time: the model detects multi-channel patterns that no single channel detects alone. |

### 4.5.2 · Cross-channel event correlation

| Level | Descriptor |
|:---:|:---|
| **1** | Events are not correlated across channels. |
| **2** | Correlated manually during investigation, but not at the time of detection. |
| **3** | At least 3 types of cross-channel events are correlated in near-real-time (e.g., password change + transfer + device change). |
| **4** | An event correlation engine monitors cross-channel sequences in real time. At least 10 active correlation scenarios exist. |
| **5** | The correlation engine uses event-driven architecture: each customer event is evaluated in the context of their activity across all channels in the last 7 days. ML models consume correlation features as input. |

## 4.6 — Network / Graph Analytics

### 4.6.1 · Graph analysis capability

| Level | Descriptor |
|:---:|:---|
| **1** | Graph analysis is not used for detection. |
| **2** | Manual link analysis for specific investigations, not part of the detection process. |
| **3** | Used for at least one use case: mule networks or synthetic ID rings. Dedicated tool. |
| **4** | Systematic use: mule networks, synthetic ID rings, internal collusion, shared beneficiary. Integrated with alerts. |
| **5** | Near-real-time graph analytics as feature input for ML models. Graph neural networks for community detection. |

### 4.6.2 · Graph visualization tools

| Level | Descriptor |
|:---:|:---|
| **1** | Graph visualization tools are not used. |
| **2** | Generic tools (Excel, Gephi) are used for ad-hoc visualization during investigations. |
| **3** | A dedicated graph visualization tool (Linkurious, i2 Analyst's Notebook, or similar) is used, integrated with fraud data. |
| **4** | The tool is integrated with case management: the investigator can explore the subject's relationship network directly from the case. |
| **5** | Graph visualization is automatically generated for each high-risk alert: the analyst sees the customer's relationship network, frequent beneficiaries, shared devices, and network anomalies before opening the case. |

# P5: Investigation, Response, and Recovery

*Assesses investigation capabilities, incident response, and loss recovery. Anchored in COSO/ACFE Principle 4.*

**7 sub-dimensions · 19 components · 6 in Screening Core**

## 5.1 — Case Management and Tools

### 🔷 CORE · 5.1.1 · Case management tool

| Level | Descriptor |
|:---:|:---|
| **1** | Cases are managed via email, spreadsheets, or manual notes. No dedicated tool. |
| **2** | Generic ticketing is used (ServiceNow, Jira) adapted, without specialized fraud workflows or fields. |
| **3** | Dedicated tool (NICE Actimize, Verafin, or similar) with workflows by case type and specific fields. |
| **4** | Integrated with the detection engine (alerts → cases automatically), with core systems (query/block from the case), and automated reports. |
| **5** | Full integration: receives alerts, enriches with customer data, suggests typology and actions based on historical data, closes the loop with detection (automatic feedback). |

### 5.1.2 · Workflow by case type

| Level | Descriptor |
|:---:|:---|
| **1** | No differentiated workflows exist. All follow the same generic process. |
| **2** | It is informally known that an ATO is investigated differently, but without documentation. |
| **3** | Documented workflows for at least 3 types: transactional, ATO, and internal fraud. Each with steps, SLAs, and escalation. |
| **4** | Workflows for 5+ types with differentiated SLAs, evidence checklists, and escalation criteria. SLA compliance is measured. |
| **5** | Dynamic workflows: the system adapts steps based on complexity (simple: fast-track <2h; complex: senior investigator). Time-to-resolution and recovery rate by type are measured. |

### 5.1.3 · Case assignment (automatic vs. manual)

| Level | Descriptor |
|:---:|:---|
| **1** | Cases are assigned manually by a supervisor. No documented criteria. |
| **2** | Assigned by rotation or availability, without considering complexity or analyst expertise. |
| **3** | Assignment uses at least 2 criteria: fraud type and analyst workload. Documented. |
| **4** | Assignment is automatic based on fraud type, complexity, analyst expertise, and current workload. Workload is balanced in real time. |
| **5** | Assignment uses ML: predicts case complexity and assigns it to the analyst with the highest probability of quick and correct resolution. Assignment efficiency is measured. |

## 5.2 — Investigation Methodology

### 🔷 CORE · 5.2.1 · Formal documented methodology

| Level | Descriptor |
|:---:|:---|
| **1** | No methodology exists. Each investigator follows their own process. |
| **2** | Informal process transmitted verbally, neither documented nor audited. |
| **3** | Documented methodology with: steps, classification criteria, report templates, evidence checklist. |
| **4** | Aligned with ACFE standards. Includes chain of custody, escalation criteria, and periodic review. |
| **5** | Tested with simulated cases (tabletop exercises) annually. Updated with lessons learned. Investigators are evaluated with quality metrics. |

### 5.2.2 · Investigator competence

| Level | Descriptor |
|:---:|:---|
| **1** | No specific training in fraud investigation. |
| **2** | Practical experience but no certifications or recent formal training. |
| **3** | At least 50% of the team has formal training. CFE or equivalent certification is targeted. |
| **4** | At least 50% hold CFE or CAMS. Continuous training plan with budget. |
| **5** | Multiple certifications (CFE, CAMS, CISA), industry conferences, digital forensics lab. Peer reviews of investigations. |

### 5.2.3 · Evidence handling and preservation protocols

| Level | Descriptor |
|:---:|:---|
| **1** | No evidence handling protocols exist. Evidence is stored ad-hoc. |
| **2** | Evidence is kept in shared folders or emails, without a formal chain of custody. |
| **3** | A documented chain of custody protocol exists: who collected, when, how it was preserved, and where it is stored. Applied to significant cases. |
| **4** | The protocol is applied to all cases. Evidence is stored in a secure repository with access control and audit trail. Followed for cases that may escalate to law enforcement. |
| **5** | Evidence preservation meets forensic standards: hash integrity of digital files, metadata preservation, and documentation that supports admissibility in legal proceedings. |

### 5.2.4 · Case escalation and classification criteria

| Level | Descriptor |
|:---:|:---|
| **1** | No escalation criteria exist. All cases are handled at the same level. |
| **2** | High-amount or high-visibility cases are informally escalated, without documented criteria. |
| **3** | Documented escalation criteria exist: by amount (>$X), by type (internal fraud, PEP, employee), by complexity, and by reputational impact. |
| **4** | Criteria include escalation levels (analyst → supervisor → head → committee → Board) with maximum response times per level. Compliance is measured. |
| **5** | The case management system automatically applies escalation criteria. Cases not resolved within the SLA are automatically escalated to the next level. |

## 5.3 — Loss Recovery and Mitigation

### 🔷 CORE · 5.3.1 · Recovery process

| Level | Descriptor |
|:---:|:---|
| **1** | No recovery process exists. Losses are fully absorbed. |
| **2** | Chargebacks (cards) are executed but there is no recovery for other types. |
| **3** | Process includes: chargebacks, judicial recovery, and fraud insurance. Recovery rate is tracked. |
| **4** | Recovery rate by type and channel. Analyzed monthly. Dedicated team or function. |
| **5** | Decision model: for each case, recovery cost vs. probability of success is evaluated. ROI of the effort is optimized. |

### 🔷 CORE · 5.3.2 · Loss accounting

| Level | Descriptor |
|:---:|:---|
| **1** | No clear methodology. Numbers are unreliable. |
| **2** | Recorded in generic GL codes. Gross loss, recovered, and net loss are not distinguished. |
| **3** | Fraud-specific GL codes. Gross, recovered, and net loss are recorded. Reported monthly. |
| **4** | Differentiated by type, channel, and product. Detection date vs. occurrence date is recorded. Quarterly reconciliation with finance. |
| **5** | Complete methodology: fraud loss + operational cost + replacement cost + friction cost = 'total cost of fraud'. |

### 5.3.3 · Write-off decisions

| Level | Descriptor |
|:---:|:---|
| **1** | No formal write-off process for fraud losses exists. Losses remain pending indefinitely. |
| **2** | Write-off decisions are made ad-hoc by finance, without input from the fraud area. |
| **3** | A documented process exists: write-off thresholds, approval authority by amount, and required documentation. Fraud participates in the decision. |
| **4** | The process includes a recoverability analysis before write-off. Justification is documented. Write-off volume is reported to the fraud committee monthly. |
| **5** | A decision model is used that evaluates recovery probability vs. pursuit cost. Write-offs are analyzed by type and channel to identify systemic patterns. |

## 5.4 — Communication and Customer Experience

### 🔷 CORE · 5.4.1 · Customer notification protocols

| Level | Descriptor |
|:---:|:---|
| **1** | No protocols exist. The customer finds out when they see the transaction or the block. |
| **2** | Notification via the available channel, without scripting or defined timelines. |
| **3** | Documented protocols: timelines (<X hours), channels (SMS, email, push, call), and scripting. |
| **4** | Differentiated by fraud type and segment. Post-notification NPS and perceived resolution time are measured. |
| **5** | Proactive, personalized, real-time notification via the preferred channel, with specific information and timeline. Customer effort score is measured. |

### 5.4.2 · Re-issuance and restitution process

| Level | Descriptor |
|:---:|:---|
| **1** | No standardized post-fraud credential re-issuance or fund restitution process exists. |
| **2** | Cards are re-issued and funds are restituted, but the process is manual and timelines are inconsistent. |
| **3** | Documented process with SLAs: card re-issuance <48h, provisional credit <24h, and digital credential restoration <4h. |
| **4** | SLAs are measured and reported. The process is differentiated by customer segment (retail, commercial, wealth). Post-restitution customer satisfaction is measured. |
| **5** | Automated process: the system executes restitution and re-issuance automatically upon fraud confirmation. Customer effort is minimized. Total time from detection to complete resolution is measured. |

### 5.4.3 · Customer liability limitation policies

| Level | Descriptor |
|:---:|:---|
| **1** | No documented policies exist regarding customer liability in fraud cases. |
| **2** | Minimum regulation is applied (e.g., Reg E) but the bank has no proprietary policy. |
| **3** | A documented policy exists defining customer liability by fraud type and channel, aligned with regulation (Reg E, Reg Z, or local equivalent). |
| **4** | The policy is proactively communicated to the customer. Differentiated by fraud type (ATO vs. APP fraud vs. card fraud). Reviewed annually. |
| **5** | The policy includes a decision framework that evaluates liability on a case-by-case basis considering: customer negligence level, controls the bank should have applied, and regulatory precedents. Decision consistency is measured. |

## 5.5 — Regulatory Reporting

### 5.5.1 · Fraud-related SAR process

| Level | Descriptor |
|:---:|:---|
| **1** | No SAR process for fraud exists, or fraud is not involved in the filing. |
| **2** | Fraud refers to compliance for SAR, without clear criteria or tracking. |
| **3** | Documented referral criteria. Referral volume and outcome are tracked. |
| **4** | Referral SLAs (<24h for urgent), compliance feedback, and quality metrics. |
| **5** | Automated process: cases meeting criteria are automatically referred with evidence. Acceptance rate and time-to-file are measured. |

### 5.5.2 · Currency Transaction Reports (CTRs)

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud-related CTRs are filed, or the fraud team is not involved in the process. |
| **2** | CTRs are processed by compliance/AML without input from the fraud team. |
| **3** | Fraud refers to compliance transactions that may require a CTR when structuring patterns are detected. Documented. |
| **4** | An integrated process exists: the fraud engine automatically identifies structuring patterns and refers them to compliance for CTR with corresponding evidence. |
| **5** | Structuring monitoring is integrated between fraud and AML: models share features and alerts are jointly evaluated. Structuring detection rate is measured. |

### 5.5.3 · Payment network reporting

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud cases are not reported to payment networks (Visa, Mastercard) beyond chargebacks. |
| **2** | Chargebacks are processed but fraud intelligence is not shared with the networks. |
| **3** | Participation in network reporting programs (Visa VALE, MC Safety Net). High-risk merchants and fraud patterns are reported. |
| **4** | Network intelligence is actively consumed and contributed. Network data is used to calibrate rules and models. Compromised BINs are reported. |
| **5** | A dedicated team or function manages the relationship with payment networks. Participation in pilots for new network tools. The impact of network intelligence on detection is measured. |

## 5.6 — Lessons Learned and Feedback Loop

### 5.6.1 · Post-mortem process

| Level | Descriptor |
|:---:|:---|
| **1** | No post-mortems are conducted. Cases are closed without review. |
| **2** | Only for very high-impact incidents, on an ad-hoc basis. |
| **3** | Documented process for cases >$X or new typologies. Includes: what happened, why it was not detected, what to change. |
| **4** | Standard template, execution within 5 days, action items with owners and deadlines tracked at the committee. |
| **5** | Automatically feed the scheme inventory, rules/models team, and controls program. Time-to-remediate is measured. |

### 🔷 CORE · 5.6.2 · Feedback to detection

| Level | Descriptor |
|:---:|:---|
| **1** | No feedback from investigation to detection exists. |
| **2** | New patterns are informally discussed, without a process. |
| **3** | Documented process: investigator completes a feedback form, rules team evaluates. |
| **4** | Feedback is systemic: each closed case generates a feature record that feeds model/rule development. Lead time is measured. |
| **5** | Automatic feedback: investigator labels (fraud confirmed / legitimate) are injected into the retraining dataset. Full cycle every 30 days. |

## 5.7 — Dispute Resolution

### 5.7.1 · Dispute resolution procedures

| Level | Descriptor |
|:---:|:---|
| **1** | No formal fraud dispute resolution procedures exist. |
| **2** | Resolved on a case-by-case basis without standardized process or deadline tracking. |
| **3** | Documented procedures with regulatory timelines, reimbursement processes, and chargeback management. |
| **4** | Procedures include SLAs by dispute type, deadline compliance tracking, and aging reports. |
| **5** | Automated resolution for simple disputes, with dispute pattern analysis to detect friendly fraud. Customer vs. bank resolution rate is measured. |

# P6: Data, Analytics, and Technology

*Assesses the data infrastructure, models, technology stack, and innovation supporting the fraud program.*

**6 sub-dimensions · 22 components · 7 in Screening Core**

## 6.1 — Data Quality, Lineage, and Governance

### 🔷 CORE · 6.1.1 · Input data quality

| Level | Descriptor |
|:---:|:---|
| **1** | Input data quality for the fraud engine is not measured. |
| **2** | Quality issues have been identified but without a measurement or remediation process. |
| **3** | At least 3 dimensions are measured (completeness, accuracy, timeliness) for key data. Documented. |
| **4** | Quality dashboard with alert thresholds. The impact of poor quality on detection is measured. |
| **5** | Real-time data quality monitoring by field. The financial impact of poor quality is quantified. |

### 6.1.2 · Documented data lineage

| Level | Descriptor |
|:---:|:---|
| **1** | The lineage of data feeding the engine is unknown. |
| **2** | The primary source is known but transformations and intermediaries are not. |
| **3** | Lineage documented for key fields: source, transformations, frequency, consumer. |
| **4** | Complete automated lineage (data lineage tool). Updated upon schema changes. |
| **5** | Complete automated lineage actively used: upon incident, traced to source within minutes. Pre-change impact analysis. |

### 6.1.3 · Fraud data governance

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud-specific data governance exists. |
| **2** | The bank's general governance is applied but without fraud-specific considerations. |
| **3** | Data ownership and stewardship defined for fraud datasets. Data dictionary available. |
| **4** | Governance includes quality remediation processes, new field approval, and periodic dictionary review. |
| **5** | Mature governance: data contracts with upstream, quality SLAs, and data stewards participate in the fraud committee. |

### 6.1.4 · Data quality remediation processes

| Level | Descriptor |
|:---:|:---|
| **1** | No remediation processes exist when quality issues are identified. |
| **2** | Data issues are remediated ad-hoc when they cause visible errors in the fraud engine. |
| **3** | A documented process exists: issue identification, root cause, remediation, and validation. Quality incidents are tracked. |
| **4** | Quality incidents are classified by severity, have remediation SLAs, and are escalated if not resolved on time. Recurrence is measured. |
| **5** | A continuous data quality improvement program exists: incident patterns are analyzed, preventive controls are implemented in data pipelines, and year-over-year improvement is measured. |

## 6.2 — Data Architecture and Integration

### 🔷 CORE · 6.2.1 · Fraud data repository

| Level | Descriptor |
|:---:|:---|
| **1** | Data is dispersed across multiple systems without a centralized repository. |
| **2** | Partial repository (e.g., vendor alert database) that does not consolidate all sources. |
| **3** | Data warehouse or data lake consolidating alerts, investigations, losses, and rules. Used for reporting. |
| **4** | Single source of truth: integrates detection, investigation, losses, and recovery. Used for model development and benchmarking. |
| **5** | Unified data lake on modern architecture (cloud, lakehouse) with fraud, AML, and cyber data. Shared feature store. |

### 6.2.2 · Data enrichment

| Level | Descriptor |
|:---:|:---|
| **1** | Transaction data is not enriched with external sources. |
| **2** | At least one enrichment source (IP geolocation or device fingerprint). |
| **3** | 3+ sources: device fingerprint, geolocation, bureau, and at least one consortium source. |
| **4** | Real-time enrichment for scoring. Each source's value is periodically evaluated. |
| **5** | Full stack: device intelligence, behavioral biometrics, email/phone risk scoring, dark web, bidirectional consortium. Marginal lift of each source is measured. |

### 6.2.3 · Cross-channel and cross-system integration

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud data comes from isolated systems. No integration between channels or with core systems. |
| **2** | Partial integration exists (e.g., cards + core banking) but digital channels, call center, or others are disconnected. |
| **3** | Integration with at least 4 sources exists: core banking, digital channels, cards, and call center. Data flows into the fraud engine. |
| **4** | Complete cross-channel integration with known and monitored latency. Open banking and third-party API sources are included. |
| **5** | Real-time integration with all sources via event streaming (Kafka or similar). Each customer event reaches the fraud engine in <100ms regardless of the originating channel. |

### 6.2.4 · Real-time vs. batch data availability

| Level | Descriptor |
|:---:|:---|
| **1** | All fraud data is available only in batch (D+1 or later). |
| **2** | Transactional data is in near-real-time (<1h) but context data (profile, history) is batch only. |
| **3** | Transactional and customer profile data is available in real-time for scoring. Analytical data is batch. |
| **4** | Dual architecture: real-time for detection (transactions + profile + features) and batch for analytics/reporting. Latency of each pipeline is monitored. |
| **5** | Unified feature store serving features in both real-time (<50ms) and batch. Feature consistency is guaranteed between training (batch) and inference (real-time). |

## 6.3 — ML Model Lifecycle

### 🔷 CORE · 6.3.1 · Model inventory

| Level | Descriptor |
|:---:|:---|
| **1** | No inventory exists. The number of models in production is unknown. |
| **2** | The main ones are informally known but without a formal inventory with metadata. |
| **3** | Formal inventory with: name, purpose, type, deployment date, owner, and status. |
| **4** | Additionally: current performance metrics, last validation date, tiering, and next scheduled validation. |
| **5** | Automated model registry: updated at each deployment, integrates real-time production metrics, generates expiration alerts. Audited annually. |

### 6.3.2 · Model risk tiering

| Level | Descriptor |
|:---:|:---|
| **1** | Models are not classified by risk level. |
| **2** | It is informally recognized that some are more critical, but without formal classification. |
| **3** | Classified into at least 3 tiers (high, medium, low) based on financial impact and scope. |
| **4** | Tiering determines: validation frequency, documentation depth, approval level, monitoring frequency. |
| **5** | Calibrated annually with actual impact data. Used to prioritize resources. Tier-1 has mandatory annual independent validation. |

### 6.3.3 · Standardized development process

| Level | Descriptor |
|:---:|:---|
| **1** | No standardized process exists. Each data scientist develops models their own way. |
| **2** | An informal guide exists but is not consistently followed or audited. |
| **3** | Documented process with stages: problem statement, data exploration, feature engineering, model selection, training, validation, documentation, deployment. |
| **4** | The process includes mandatory peer review, documentation checklist (aligned with OCC/SR 11-7), out-of-time testing, and governance sign-off before production. |
| **5** | Automated MLOps pipeline: version control for data and code, automated training, automated testing (performance, bias, stability), automated documentation, and CI/CD for deployment. |

### 🔷 CORE · 6.3.4 · Continuous production model monitoring

| Level | Descriptor |
|:---:|:---|
| **1** | Models are not monitored once deployed. |
| **2** | Performance is reviewed manually and sporadically. |
| **3** | Monthly monitoring: AUC, KS, detection rate, FP rate by model. |
| **4** | Automated monitoring with alerts: feature drift (PSI >0.1), performance degradation (AUC drop >X%), data quality, and score distribution changes. |
| **5** | Complete model monitoring framework with automated retraining triggers, continuous A/B testing, concept drift detection, and health dashboards per model. Automated monthly backtesting. |

### 6.3.5 · Model retirement/replacement process

| Level | Descriptor |
|:---:|:---|
| **1** | No retirement process exists. Obsolete models remain in production indefinitely. |
| **2** | Models are retired ad-hoc when replaced, but without a formal process or documentation. |
| **3** | A documented retirement process exists: retirement criteria (performance degradation, obsolescence), approval, transition plan, and retirement documentation. |
| **4** | Retirement requires governance approval, a shadow scoring period in parallel with the successor model, and validation that the replacement does not degrade detection. |
| **5** | The complete lifecycle (development → deployment → monitoring → retirement) is managed in the model registry. An archive of retired models is maintained with their historical performance for audit. |

## 6.4 — Technology Stack and Vendor Management

### 🔷 CORE · 6.4.1 · Tool inventory

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud tool inventory exists. |
| **2** | The main ones are known but without a formal inventory with licensing and support. |
| **3** | Formal inventory: tool, vendor, purpose, license, support, annual cost, renewal date. |
| **4** | Includes evaluation: performance, user satisfaction, functional gaps, alternatives assessed. |
| **5** | Annual vendor evaluation: performance vs. SLA, roadmap, cost-benefit, benchmark vs. alternatives. |

### 6.4.2 · Vendor concentration risk

| Level | Descriptor |
|:---:|:---|
| **1** | Vendor dependency is not assessed as a risk. |
| **2** | Dependency on the main vendor is recognized but alternatives have not been evaluated. |
| **3** | The risk has been assessed and a contingency plan for the main vendor exists. |
| **4** | For each critical vendor: contingency plan, portability assessed, alternative vendor identified. |
| **5** | Annual vendor stress test. Contracts with portability clauses and source code in escrow. |

### 6.4.3 · Technology vendor contract and SLA management

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud vendor contracts are not actively managed. |
| **2** | Contracts are automatically renewed without performance evaluation or renegotiation. |
| **3** | Contracts have documented performance SLAs (uptime, latency, support). Reviewed at each renewal. |
| **4** | SLA compliance is measured monthly. Non-compliance is formally escalated. Negotiation is based on actual performance. |
| **5** | A vendor evaluation framework is used including: performance vs. SLA, roadmap alignment, total cost of ownership, concentration risk, and benchmark vs. alternatives. Presented to the committee annually. |

## 6.5 — Infrastructure, Scalability, and Performance

### 🔷 CORE · 6.5.1 · Scalability capacity

| Level | Descriptor |
|:---:|:---|
| **1** | Scalability capacity under peak conditions has not been assessed. |
| **2** | Limitations are known but without quantification or testing. |
| **3** | Load testing executed at least once. Maximum throughput is known. |
| **4** | Quarterly load tests. Supports 2x normal peak. Capacity is monitored with alerts. |
| **5** | Stress tests at 5–10x normal volume. Auto-scaling configured. 12-month capacity planning. |

### 🔷 CORE · 6.5.2 · Availability and disaster recovery

| Level | Descriptor |
|:---:|:---|
| **1** | RTO/RPO is unknown. No DR specific to the fraud engine. |
| **2** | It is known that it depends on general infrastructure, but it has no dedicated DR. |
| **3** | DR plan with defined RTO and RPO. Documented. |
| **4** | DR tested annually. RTO <4 hours. Automatic or semi-automatic failover. |
| **5** | RTO <1 hour, RPO <15 minutes. Automatic failover tested quarterly. Degraded mode (basic rules) available. |

### 6.5.3 · Production performance monitoring (latency, throughput)

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud engine production performance is not monitored. |
| **2** | Performance is reviewed when there are complaints or slowness incidents. |
| **3** | Key metrics are monitored: P50/P95/P99 latency, throughput (TPS), and uptime. Alert thresholds exist. |
| **4** | Monitored in real-time with dashboards. Performance alerts are automatically escalated. Trend analysis is run for capacity planning. |
| **5** | SLOs (Service Level Objectives) exist by channel: e.g., P99 latency <100ms for PIX, <200ms for cards. Error budget is measured. Performance tests are run before each release. |

## 6.6 — Innovation and Emerging Technologies

### 6.6.1 · New technology evaluation process

| Level | Descriptor |
|:---:|:---|
| **1** | No process for evaluating new fraud technologies exists. |
| **2** | Evaluated ad-hoc when a vendor presents them. |
| **3** | Documented process: identification, fit evaluation with POC, business case. |
| **4** | Fraud lab or sandbox with anonymized real data. At least 2 POCs/year. |
| **5** | Innovation roadmap with budget. Behavioral biometrics, GenAI, graph neural networks are evaluated. ROI of each POC is measured. |

### 6.6.2 · PCI and encryption

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud data encryption controls for data in transit and at rest have not been evaluated. |
| **2** | General bank encryption is relied upon without fraud-specific validation. |
| **3** | Sensitive fraud data (PAN, tokens) is encrypted in transit and at rest in compliance with PCI DSS. |
| **4** | PCI compliance is audited annually. Encryption controls are specific to the fraud engine and tested. |
| **5** | End-to-end encryption with dedicated key management, tokenization of sensitive data in the fraud data lake, and continuous PCI audit. |

### 6.6.3 · Technology trend tracking

| Level | Descriptor |
|:---:|:---|
| **1** | No tracking of fraud technology trends is performed. |
| **2** | Some conferences or webinars are attended, but without a tracking process. |
| **3** | A radar of emerging fraud technologies is maintained, updated semi-annually, with a relevance evaluation for the bank. |
| **4** | The radar is presented to the fraud committee. At least 2 technologies per year are prioritized for in-depth evaluation (POC or pilot). |
| **5** | An innovation council exists that includes fraud, technology, and data science. Evaluated: adversarial GenAI (deepfakes, voice cloning), behavioral biometrics, graph ML, and privacy-enhancing technologies (PETs). Innovation budget is allocated. |

# P7: Performance Management, Reporting, and Continuous Improvement

*Assesses results measurement, reporting, benchmarking, and program evolution. Anchored in COSO/ACFE Principle 5.*

**5 sub-dimensions · 17 components · 5 in Screening Core**

## 7.1 — KRI, KPI, and Metrics Framework

### 🔷 CORE · 7.1.1 · Defined metrics set

| Level | Descriptor |
|:---:|:---|
| **1** | No defined set of metrics exists. Numbers are reported ad-hoc. |
| **2** | 1–2 basic metrics are measured (total losses and number of cases) without formalization. |
| **3** | Documented set of at least 10 metrics: fraud loss rate, detection rate, FP rate, time-to-detect, time-to-resolve, recovery rate, etc. |
| **4** | Cover 4 dimensions: operational, financial, customer, and cross-functional. Each metric has a definition, formula, source, frequency, owner, and threshold. |
| **5** | Automated dashboard updated daily. Used for operational management. Annual relevance review. |

### 🔷 CORE · 7.1.2 · Translation of risk into monetary terms

| Level | Descriptor |
|:---:|:---|
| **1** | The economic impact of the program is not quantified. |
| **2** | Total loss is reported but without connection to control ROI or customer impact. |
| **3** | Quantified: gross loss, net loss, and program operational cost. |
| **4** | Additionally: avoided loss, cost of false positives, and program ROI. |
| **5** | An economic model translates each maturity point into USD impact. Presented to the CFO and Board in financial language. |

### 7.1.3 · Fraud operational KPIs

| Level | Descriptor |
|:---:|:---|
| **1** | No fraud operational KPIs are measured. |
| **2** | Only alert and case volume is measured, without breakdown or benchmark. |
| **3** | At least the following are measured: fraud loss rate (bps), detection rate, false positive rate, time-to-detect, and time-to-resolve. With documented definition and source. |
| **4** | Operational KPIs are broken down by channel, product, fraud type, and shift. Targets are set and deviation is measured monthly. |
| **5** | Operational KPIs are monitored in real time with automatic alerts for deviations. SPC (Statistical Process Control) is used to distinguish normal variation from alarm signals. |

### 7.1.4 · Fraud financial KPIs

| Level | Descriptor |
|:---:|:---|
| **1** | No financial KPIs for the fraud program are measured. |
| **2** | Total fraud loss (gross loss) is reported, but without breakdown or connection to the program. |
| **3** | Measured: gross loss, net loss (post-recovery), program operational cost (personnel + technology + vendors), and avoided loss. |
| **4** | Program ROI is calculated: (avoided loss − program cost) / program cost. Reported to the CFO quarterly. |
| **5** | A total cost of fraud model is used that includes: fraud loss + operational cost + friction cost (revenue lost to FP) + reputational cost. Each maturity point is translated into USD impact. |

### 7.1.5 · Customer and experience KPIs

| Level | Descriptor |
|:---:|:---|
| **1** | No KPIs measuring the fraud program's customer impact are measured. |
| **2** | Customer complaints from blocks are known, but not quantified as a program KPI. |
| **3** | Measured: legitimate declined transactions (%), contact rate per false positive, and post-fraud-event NPS. |
| **4** | Additionally measured: post-fraud customer effort score, total perceived resolution time, and revenue lost to legitimate declines. Presented to the committee alongside detection metrics. |
| **5** | A lifetime value impact model is used: LTV loss per customer affected by a false positive vs. loss from undetected fraud is quantified. Used to calibrate detection thresholds. |

### 7.1.6 · Cross-functional KPIs

| Level | Descriptor |
|:---:|:---|
| **1** | No collaboration KPIs between fraud and other areas are measured. |
| **2** | Response times from IT or business are informally known, but not measured. |
| **3** | At least 2 cross-functional SLAs are measured: fraud-IT (rule deployment time) and fraud-ops (alert resolution time). |
| **4** | SLAs are measured with all key areas: IT, operations, compliance, business, and legal. Reported to the fraud committee monthly. |
| **5** | Cross-functional KPIs are bidirectional: fraud measures IT and IT measures fraud. Used for continuous improvement and linked to leadership performance evaluations. |

## 7.2 — Reporting to Management and Board

### 🔷 CORE · 7.2.1 · Reporting frequency and format

| Level | Descriptor |
|:---:|:---|
| **1** | No periodic fraud report to management exists. |
| **2** | Annual or ad-hoc report in long-document format without visualizations. |
| **3** | Quarterly report with visual dashboard, trends, and comparison with prior period. |
| **4** | Monthly operational reports + quarterly executive reports. Interactive dashboard, exception-based, with action items. |
| **5** | Continuous reporting: real-time dashboard for operations, monthly for management, quarterly for the Board. Report actionability is measured. |

### 7.2.2 · Report content and quality

| Level | Descriptor |
|:---:|:---|
| **1** | Reports (if they exist) contain only raw data without analysis. |
| **2** | Reports show basic metrics but without trends, comparison with prior periods, or action items. |
| **3** | Reports include: key metrics, trends (MoM, YoY), comparison with prior period, top-N incidents, and initiative status. |
| **4** | Reports are exception-based: they highlight deviations vs. thresholds, include root cause analysis of deviations, and conclude with action items assigned with deadlines. |
| **5** | Reports are audience-differentiated: operational (daily, for the team), tactical (monthly, for management), strategic (quarterly, for the Board). Actionability is measured: % of action items implemented in the following period. |

### 7.2.3 · Significant incident reporting

| Level | Descriptor |
|:---:|:---|
| **1** | No significant fraud incident reporting process exists. |
| **2** | Significant incidents are reported ad-hoc, without a format or criteria for what constitutes 'significant.' |
| **3** | Documented significant incident criteria (amount >$X, type, reputational impact) and a notification process with SLAs (<24h to management, <48h to Board if applicable). |
| **4** | The incident report includes: description, financial impact, preliminary root cause, immediate actions, and remediation plan. Tracked until closure. |
| **5** | A formal post-incident review is conducted for each significant incident. Findings feed: the risk assessment, rules/models, and the fraud policy. Time-to-remediate is measured. |

## 7.3 — Independent Testing and Audit

### 🔷 CORE · 7.3.1 · Internal audit scope

| Level | Descriptor |
|:---:|:---|
| **1** | Internal audit does not cover the fraud program. |
| **2** | Fraud is in the audit universe but has not been audited in 2+ years. |
| **3** | Audited at least every 2 years with a defined scope. |
| **4** | Annual audit covering governance, detection, investigation, reporting, and 3LoD. Findings are tracked. |
| **5** | Continuous auditing: in addition to periodic, 2LoD tests controls quarterly. Findings with aging reports and escalation to the Board if >90 days. |

### 7.3.2 · External audits or independent reviews

| Level | Descriptor |
|:---:|:---|
| **1** | No external audits of the fraud program have been performed. |
| **2** | Fraud has been included in the scope of a regulatory audit, but no voluntary external review has been requested. |
| **3** | At least one external review of the fraud program has been conducted in the last 3 years (consultant, audit firm, or regulator). |
| **4** | Biennial external reviews are conducted. Findings are tracked and reported to the fraud committee and the Board. |
| **5** | Annual external reviews are conducted that include: maturity assessment, benchmark vs. peers, and prioritized recommendations. Results are used to update the roadmap. |

### 7.3.3 · Findings tracking and remediation

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud audit findings are not tracked centrally. |
| **2** | Findings from the most recent audit are tracked, but there is no historical record or aging report. |
| **3** | A centralized tracker exists with: finding, severity, owner, remediation plan, committed date, and status. |
| **4** | The tracker is reported monthly to the fraud committee. Measured: aging (days open), closure rate, and finding recurrence. Those >90 days are escalated to the Board. |
| **5** | The tracker is integrated with the bank's audit system. Root cause analysis is performed on recurring findings. Finding patterns inform roadmap prioritization. |

## 7.4 — Multi-Level External Benchmarking

### 🔷 CORE · 7.4.1 · Peer group benchmarking

| Level | Descriptor |
|:---:|:---|
| **1** | No benchmarking against peers is performed. Relative position is unknown. |
| **2** | Anecdotal peer data (conferences) but no structured benchmark. |
| **3** | Participates in at least one industry survey (ACFE, Gartner, FEBRABAN) and results are compared. |
| **4** | Multi-dimensional benchmark: fraud loss rate, detection rate, FP rate, operational cost vs. same-size peers. |
| **5** | Multi-level benchmark: regional peers, global peers (G-SIBs), regulatory target, and best-in-class by pillar. Used for target-setting. |

### 7.4.2 · Internal benchmark (own trend over time)

| Level | Descriptor |
|:---:|:---|
| **1** | The bank's fraud metric evolution over time is not tracked. |
| **2** | Results are compared vs. the prior year, but without trend analysis or visualization. |
| **3** | A history of at least 3 years of main metrics is maintained. Trend is visualized and change drivers are analyzed. |
| **4** | Internal benchmark is broken down by pillar, product, channel, and fraud type. Areas of improvement and deterioration are identified. Presented to the committee quarterly. |
| **5** | Statistical trend analysis (e.g., control charts, regression) is used to distinguish normal variation from structural changes. Metrics are projected at 12 months and targets are adjusted. |

### 7.4.3 · Industry survey and data participation

| Level | Descriptor |
|:---:|:---|
| **1** | The bank does not participate in industry fraud surveys. |
| **2** | Public industry reports (ACFE Report to the Nations) are consumed but no active participation. |
| **3** | Participates in at least 1 industry survey (ACFE, ABA, FEBRABAN, Gartner) and compares the bank's results vs. the benchmark. |
| **4** | Participates in multiple surveys and consumes vendor benchmarks (FICO consortium, Actimize, Visa/MC network data). Data is used for target-setting. |
| **5** | Active community contributor: shares (anonymized) data, participates in panels, and uses multiple benchmark sources to triangulate the bank's position. |

## 7.5 — Program Evolution and Roadmap

### 7.5.1 · Multi-year roadmap

| Level | Descriptor |
|:---:|:---|
| **1** | No roadmap exists. Operations run year to year without a long-term vision. |
| **2** | List of projects for the year, without dependencies, prioritization, or strategic linkage. |
| **3** | 2+ year roadmap with prioritized initiatives, timeline, estimated budget, and owners. |
| **4** | Linked to the business strategy and assessment gap analysis. Reviewed semi-annually with the committee. |
| **5** | Managed as a program with a PMO: progress tracking, budget vs. actual, risk register, and realized vs. projected benefits. Reported to the Board. |

### 7.5.2 · Change management and evolution communication

| Level | Descriptor |
|:---:|:---|
| **1** | No change management for fraud program initiatives exists. |
| **2** | Changes are implemented without a communication plan or impact management. |
| **3** | A communication plan for major program changes exists. Impacted areas are notified in advance. |
| **4** | Formal change management is executed for each roadmap initiative: stakeholder analysis, communication plan, training, and adoption measurement. |
| **5** | A change management framework (e.g., ADKAR) is used for program transformations. Post-change adoption is measured and the communication strategy is adjusted based on feedback. |

# P8: Cross-Functional Integration and Intelligence

*Assesses convergence between fraud, cybersecurity, AML, legal, and IT. Anchored in McKinsey Fraud-Cyber convergence models.*

**5 sub-dimensions · 14 components · 5 in Screening Core**

## 8.1 — Fraud-Cybersecurity Convergence

### 🔷 CORE · 8.1.1 · Current operating model

| Level | Descriptor |
|:---:|:---|
| **1** | Complete silos. No information, tools, or processes are shared. |
| **2** | Sporadic meetings but without systematic data sharing or joint processes. |
| **3** | Intelligence sharing: cyber alerts are referred to fraud when they have a financial component, and vice versa. Documented. |
| **4** | Bidirectional feeds, weekly meetings, and at least 2 shared use cases (e.g., ATO). |
| **5** | Cyber-fraud fusion team or function with dedicated personnel. Shared platform, data lake, and joint KPIs. |

### 8.1.2 · Fraud-cyber intelligence sharing

| Level | Descriptor |
|:---:|:---|
| **1** | No intelligence is shared between fraud and cybersecurity. |
| **2** | Findings are informally shared when someone considers them relevant, without a process. |
| **3** | A documented sharing process exists: phishing/malware alerts are referred to fraud, and ATO alerts are referred to cyber. |
| **4** | Bidirectional intelligence feeds are shared: cyber IoCs are integrated as features in the fraud scoring, and fraud patterns are shared with the SOC. |
| **5** | A shared threat intelligence platform correlates fraud and cyber signals in real time. Joint detection that neither function would achieve alone is measured. |

### 8.1.3 · Shared use cases and joint operations

| Level | Descriptor |
|:---:|:---|
| **1** | No shared use cases between fraud and cyber exist. |
| **2** | It is recognized that ATO has both fraud and cyber components, but investigation occurs in silos. |
| **3** | At least 3 shared use cases have been defined (e.g., ATO, phishing→fraud, malware→credential theft) with coordination protocols. |
| **4** | Joint operations are executed for complex cases: a fraud investigator and a cyber investigator work the same case. Joint war rooms are held for incidents. |
| **5** | A cyber-fraud fusion team exists with dedicated personnel from both functions. Joint detection metrics are maintained and combined threat hunting exercises are executed. |

## 8.2 — Fraud-AML/BSA Coordination

### 🔷 CORE · 8.2.1 · Alert and data sharing

| Level | Descriptor |
|:---:|:---|
| **1** | Alerts and data are not shared. Systems and databases are completely separate. |
| **2** | Cases are referred manually for SAR, without systematic sharing. |
| **3** | Documented referral process with clear criteria. Alerts with cross-cutting components (e.g., mule accounts) are shared. |
| **4** | Data, alerts, and typologies are shared. Joint financial crime committee. Shared typologies. |
| **5** | FRAML convergence: shared data lake, models with fraud + AML features, joint scoring, and unified governance. |

### 8.2.2 · Shared typologies and data sharing

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud and AML do not share typologies or data. |
| **2** | Cases are referred manually when fraud-linked laundering is suspected. |
| **3** | Documented typologies are shared: mule accounts, post-fraud structuring, fraud proceeds laundering. Documented. |
| **4** | Automated data sharing exists: fraud alerts involving mule accounts are automatically referred to AML with evidence. Shared typologies are used to calibrate models. |
| **5** | Shared financial crime data lake: fraud and AML models consume common features. FRAML models are executed that detect patterns neither function detects alone. |

### 8.2.3 · Joint financial crime committee

| Level | Descriptor |
|:---:|:---|
| **1** | No joint space between fraud and AML exists. |
| **2** | Ad-hoc meetings are held when a cross-cutting case arises. |
| **3** | A monthly joint fraud-AML meeting exists to review cross-cutting cases, share intelligence, and coordinate actions. |
| **4** | A formal financial crime committee exists that includes fraud, AML, compliance, and cyber. With charter, minutes, and tracked action items. |
| **5** | The financial crime committee has decision-making authority over the integrated financial crime strategy. It reports to the Board as a unified function. |

## 8.3 — Fraud-Legal and Compliance Alignment

### 🔷 CORE · 8.3.1 · Legal framework for fraud action

| Level | Descriptor |
|:---:|:---|
| **1** | No coordination with Legal for fraud cases exists. |
| **2** | Legal is involved only in very high-impact cases, reactively. |
| **3** | Documented protocol for when to involve Legal with thresholds and steps to follow. |
| **4** | Legal participates in the committee. Decision framework for: criminal complaint, civil action, judicial recovery, and regulatory reporting. Outcomes are tracked. |
| **5** | Playbook of legal actions by type with cost-benefit analysis. Legal recovery is measured. Legal participates in control design for evidence admissibility. |

### 8.3.2 · Compliance review of the fraud program

| Level | Descriptor |
|:---:|:---|
| **1** | Compliance does not review the fraud program. |
| **2** | Compliance reviews regulatory aspects when there is an audit, but not proactively. |
| **3** | Compliance executes an annual review of the fraud program to validate regulatory compliance. |
| **4** | The compliance review includes: regulatory requirements mapping, key control testing, and recommendations. Findings are tracked. |
| **5** | Compliance participates as active 2LoD: it executes independent challenge of fraud decisions, validates policy adherence, and reports its independent assessment to the Board. |

## 8.4 — Fraud-IT/Technology Alignment

### 🔷 CORE · 8.4.1 · Fraud by design in product development

| Level | Descriptor |
|:---:|:---|
| **1** | IT/Product does not involve fraud in digital product development. |
| **2** | Fraud is involved after design, generally during testing or post-launch. |
| **3** | Fraud participates in the requirements phase. Pre-launch assessment is documented. |
| **4** | A 'fraud by design' checklist is applied in each sprint/release. It is a mandatory gate. |
| **5** | Fraud is embedded in the product team (embedded SME). Controls are part of the product. Fraud at 90 days post-launch is measured. |

### 8.4.2 · IT SLAs for fraud engine support

| Level | Descriptor |
|:---:|:---|
| **1** | No IT SLAs for fraud engine support exist. |
| **2** | IT supports the fraud engine on a 'best effort' basis, without formal SLAs. |
| **3** | Documented SLAs exist: rule deployment time (<24h urgent, <5 days normal), incident support (P1 <1h, P2 <4h), and availability (99.9%). |
| **4** | SLAs are measured monthly and reported to the fraud committee. Non-compliance is formally escalated. |
| **5** | SLAs include: automated deployment pipeline (CI/CD for rules and models), proactive monitoring with alerts to IT and fraud simultaneously, and joint post-mortem for every P1 incident. |

### 8.4.3 · Fraud participation in new technology evaluation

| Level | Descriptor |
|:---:|:---|
| **1** | Fraud does not participate in the evaluation of new technologies or channels at the bank. |
| **2** | Fraud is notified after a new technology is selected, without input authority. |
| **3** | Fraud participates in the evaluation process for new technologies that impact payment channels or account access. |
| **4** | Fraud has a risk evaluation checklist applied to each new technology or channel. It is a mandatory gate before implementation. |
| **5** | Fraud has a 'technology risk radar' that proactively evaluates the fraud risk of emerging technologies (biometrics, open banking APIs, IoT payments) before the bank adopts them. |

## 8.5 — External Intelligence and Information Sharing

### 🔷 CORE · 8.5.1 · Consortium participation

| Level | Descriptor |
|:---:|:---|
| **1** | Does not participate in information-sharing consortia. |
| **2** | Consumes information from one external source but does not actively participate. |
| **3** | Participates in at least 1 consortium (FS-ISAC, vendor consortium, local association) and actively consumes. |
| **4** | Participates and contributes: shares anonymized data, participates in working groups. |
| **5** | Active contributor in multiple consortia. Value received vs. contributed is measured. Intelligence directly feeds rules and models. |

### 8.5.2 · Law enforcement relationship

| Level | Descriptor |
|:---:|:---|
| **1** | No formal relationship with law enforcement for fraud exists. |
| **2** | Contacted only for very high-impact cases, on an ad-hoc basis. |
| **3** | Documented relationship with at least one agency, with contacts and a communication protocol. |
| **4** | Relationships with multiple agencies. Regular referrals with outcome tracking. Participation in task forces. |
| **5** | Active bidirectional relationship: the bank proactively shares intelligence, law enforcement shares early warnings. Outcomes (arrests, recoveries) are measured. |

### 8.5.3 · Active contribution vs. passive intelligence consumption

| Level | Descriptor |
|:---:|:---|
| **1** | The bank only consumes intelligence. It does not contribute to the community. |
| **2** | The bank shares the minimum required information (e.g., mandatory chargebacks to the network). |
| **3** | The bank contributes anonymized data to at least one consortium and participates in industry working groups. |
| **4** | The bank is recognized as an active contributor: leads or co-leads working groups, presents at industry conferences, and shares intelligence proactively. |
| **5** | The bank operates a structured contribution program: measures the contribution/consumption ratio, has a community budget, and its contributions have generated documented improvements in industry detection. |