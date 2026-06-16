# Project Context Document: ReqsAI

## 1. Executive Summary & Startup Profile
* **Company Name:** Kntro-Soft (Lima, Peru)
* **Product Name:** ReqsAI
* **Core Mission:** Eliminate information loss during software requirements elicitation by leveraging real-time Generative AI and Natural Language Processing (NLP).
* **Target Market:** Tech startups, software factories, and enterprise IT departments operating under Agile methodologies within Latin America.

### 1.1. Core Value Propositions
* **Instant Documentation:** Automatic generation of structured User Stories accompanied by functional acceptance criteria written in **Gherkin syntax** (`Given-When-Then`) via state-of-the-art LLMs.
* **Real-Time Consultative Assistance:** Live acoustic/text processing during discovery meetings to prompt analysts with strategic questions, revealing hidden edge cases and logic gaps *while* the client is present.
* **Intelligent Context Integration (RAG):** Utilization of Retrieval-Augmented Generation to surface previous project context, preventing requirement duplication and enforcing consistent architectural alignments.
* **Enterprise Privacy:** A multi-tenant architecture utilizing a rigid **schema-per-tenant isolation strategy** to guarantee strict boundaries around organizational data and intellectual property.

---

## 2. Problem Statement & Market Analysis (5W2H)

* **WHO:** Affects Systems Analysts, Product Owners, Business Analysts, Technical Leaders, and downstream engineering squads across LATAM software organizations.
* **WHAT:** Critical data loss during client discovery meetings. Human cognitive limits prevent analysts from practicing active listening while simultaneously documenting comprehensive edge cases. This translates to an immediate accumulation of functional technical debt.
* **WHERE:** Remote, hybrid, or in-person discovery and scoping sessions within software development environments.
* **WHEN:** Occurs during the **Requirements Elicitation Phase**. The problem compounds post-meeting when analysts attempt to retroactively reconstruct agreements from raw memory or long videos.
* **WHY:** Over-reliance on passive, artisanal documentation workflows in a highly automated ecosystem. Communication issues remain a primary contributor to IT project failure.
* **HOW:** Materializes as upstream rework, infinite feedback loops, and delayed sprints because developers are forced to freeze tasks to ask for structural definitions.
* **HOW MUCH:** Industry data indicates fixing a requirement flaw during development costs 10x more than during design, skyrocketing to 100x if it slips into production. The targeted operational benchmark for ReqsAI is a **40% reduction in requirements-focused follow-up meetings** and a **first-pass User Story acceptance rate exceeding 80%**.

---

## 3. Targeted User Personas & Segmentation

### 3.1. Alex - The Technical Leader (Startup Segment)
* **Demographics:** 30–35 years old, engineering/computer science background, native digital tools user.
* **Context:** Operates in high-velocity startup environments, scaling hybrid roles between product architecture and team leadership.
* **Frictions:** High cognitive load, friction moving from conversations to clean backlogs, detests manual formatting documentation tasks.
* **Desired Outcome:** Code-ready Gherkin criteria synchronized into backlogs immediately post-meeting so the sprint velocity never drops.

### 3.2. Claudia - The Enterprise Systems Analyst (Corporate Segment)
* **Demographics:** 30–45 years old, standard enterprise tooling ecosystems (Azure DevOps, Enterprise Architect), corporate governance frameworks (SAFe/CMMI).
* **Context:** Acts as a strict institutional bridge between non-technical corporate business stakeholders and specialized dev teams.
* **Frictions:** Overwhelmed by massive multi-hour recordings, prone to missing nested edge cases, bound to rigorous documentation and strict compliance regulations.
* **Desired Outcome:** Automated synthesis of vast requirements, immediate alignment with existing architectures via RAG, and bulletproof security isolation.

---

## 4. Product Metric Framework (AARRR Focus)
* **Acquisition:** Target a 25% conversion rate from outbound/inbound loops to a 14-day free trial.
* **Activation:** 40% of trial accounts must process $\ge 3$ live meetings and generate complete User Story sets within week one.
* **Retention:** Stabilize a 60% conversion rate from active trial startups into standard monthly subscribers.
* **Revenue:** Focus on a $49 average MRR for the startup tier and custom annual contracts ($\$4,000+$) for mid-market/enterprise levels.
* **Referral:** 25% of active power users referring the product to peer Product Managers and Engineers.

---

## 5. System Technical Architecture & Design Constraints

### 5.1. Multi-Tenancy Design
* **Isolation Model:** **Schema-per-tenant approach**. Every workspace or organization must have its data physically or logically separated at the schema level to avoid cross-tenant leaks.
* **Context Engine:** Retains vectorized data mapping previous project iterations (RAG architecture) to provide historical comparison and deduplication alerts.

### 5.2. Functional UX & Design System Guidelines
The user interface draws inspiration from highly scannable, clean productivity tools (e.g., *Notion*), favoring vast negative space, soft structural shadows, and light/neutral foundational blocks.

* **Color Archetype Matrix:**
    * *Primary Controls / States:* Corporate Blues (Actions, navigation focus, buttons).
    * *Semantic Status Indication:* Greens (Completed/Approved), Yellows (Warnings/Drafts), Reds (Errors/Failures).
    * *AI Features Context:* Vibrant Violet / Neon Blue accents to distinguish AI-generated insights from human entries.
* **Typography & Layout Hierarchy:** Prioritizes high-contrast sans-serif type scaling from main pages down to nested tags, labels, and analytical metadata.
* **Navigation Architecture Blueprint:**
    * *Sidebar (Persistent Global Nav):* Dashboard $\rightarrow$ Projects $\rightarrow$ Sessions $\rightarrow$ User Stories $\rightarrow$ Integrations $\rightarrow$ Billing $\rightarrow$ Settings.
    * *Topbar (Contextual Utilities):* Enterprise/Startup Workspace Switcher, Global Omnibox Search Engine, Rapid Actions, User Session Profiles.
    * *Responsive In-App Drawers:* Instead of nesting deep windows, item data sheets (like editing a User Story's Gherkin syntax or auditing AI system confidence scores) open via slide-out side drawers.

### 5.3. Core Structural Data Domains & Labeling Systems
When implementing database structures, UI components, or payload endpoints, use the following standardized English naming conventions and state values:

| Domain Namespace | Functional Scope                                                 | Valid Semantic Lifecycle States                   |
|:-----------------|:-----------------------------------------------------------------|:--------------------------------------------------|
| **Workspace**    | High-level organization or tenant hub.                           | `Active`, `Suspended`, `Trial`                    |
| **Projects**     | Categorization of user efforts per product or client.            | `Active`, `Archived`                              |
| **Sessions**     | Live stream or audio recording file processing node.             | `Live`, `Processing`, `Completed`, `Failed`       |
| **User Stories** | AI-generated requirements containing Gherkin syntax.             | `Draft`, `Pending Review`, `Approved`, `Exported` |
| **Integrations** | Webhooks and authentication nodes for third-party Jira / DevOps. | `Connected`, `Disconnected`                       |

### 5.4. Public Metatags (SEO Architecture)
For public-facing views, landing pages, and authentication checkpoints, use these semantic metadata markers:
* **Title:** `Reqs-AI | AI Requirements Elicitation Platform`
* **Description:** `Convert discovery meetings into structured user stories, Gherkin acceptance criteria and Jira-ready backlog items using AI.`
* **Keywords:** `requirements elicitation, user stories, Gherkin, Jira integration, AI assistant, software requirements`

---

## 6. Validating Core Product Hypotheses (Lean UX Priorities)

1. **Live Advisory Value (High Risk/High Value):** Providing live, contextual recommendations on missed edge cases to the Systems Analyst drives exhaustive discovery. *Metric: Analysts must manually or vocally adopt $\ge 60\%$ of real-time AI suggestions during live client interaction.*
2. **Delivery Velocity (High Risk/High Value):** Contextual RAG execution saves processing hours for Tech Leads. *Metric: Average human modification or corrective manual editing on generated User Stories falls below 15 minutes per session.*
3. **Backlog Ecosystem Retainers:** Seamless workspace exporting directly impacts user stickiness. *Metric: $\ge 80\%$ of approved platform assets are synched out to Jira / third-party tools within 10 minutes of meeting completion.*
4. **Data Isolation as Trust Catalyst:** Schema-level infrastructure reduces enterprise privacy friction. *Metric: Enterprise legal/compliance teams bypass manual review friction directly upon reading tenant-isolation technical documentation.*