# Contraindication & Risk Assessment Tool — Project Brief

## Purpose of This Document

This document is the complete context brief for building a proof-of-concept (POC) interactive demo and landing page for an AI-powered medical contraindication and risk assessment tool. It contains everything needed to understand the product vision, target user, validation strategy, and what needs to be built. Read the companion research document (`contraindication-market-research.md`) for the full market analysis — this brief references it but does not duplicate it.

Apply Sumplexity's brand design system from the style/design document when building all UI. No branding guidelines are repeated here.

---

## What the Product Is

An AI tool that performs instant, contextual risk assessments before medical procedures. A practitioner (or patient) inputs:

1. **Patient's existing medical conditions** (e.g. diabetes, hypertension, autoimmune disorders)
2. **Patient's current medications** (e.g. methotrexate, warfarin, isotretinoin, lithium)
3. **Patient's known allergies** (e.g. lidocaine, latex, penicillin)
4. **The planned procedure** (e.g. chemical peel, Botox injection, laser resurfacing, dental implant, dermal filler)

The tool then cross-references all four inputs against each other and against any medications or substances associated with the procedure itself (e.g. anaesthetics, post-procedure antibiotics, topical agents) to produce:

- **Contraindication flags** — absolute ("do not proceed") and relative ("proceed with caution / modified protocol")
- **Drug interaction alerts** — between current medications and procedure-associated medications
- **Allergy cross-reactivity warnings** — where known allergies may react with procedure substances
- **Condition-procedure risk factors** — where existing conditions elevate procedure risk (e.g. bleeding disorders + injectable treatments)
- **An overall risk severity rating** — with plain-language explanation of what could go wrong and why

The critical differentiator versus every existing tool on the market: **procedure-specific contextual assessment**. Current drug interaction databases (BNF, Lexicomp, FDB Multilex) check drug-drug and drug-condition interactions but do not factor in the specific procedure being planned. Surgical risk calculators (SORT, P-POSSUM) factor in the procedure but not the patient's medications. No tool connects all dimensions. This is the gap.

---

## Who It's For

### Primary user: Medical professionals in private practice

The core use case is **post-consent, pre-procedure**. A patient has consented to a treatment. The practitioner has their medical history form (conditions, medications, allergies). The practitioner needs to quickly assess whether anything in the patient's profile creates a risk against this specific procedure. Today, this is done via manual BNF lookups, memory, or guesswork — especially in private practice where there is no integrated electronic prescribing system, no on-site pharmacist, and no access to NHS medication records.

Target practitioner types (in priority order):

1. **Aesthetic practitioners** — nurses, doctors, and non-medical professionals performing Botox, fillers, laser, chemical peels, microneedling, PRP, etc. Highest contraindication risk combined with weakest existing safety infrastructure. Incoming UK regulation (licensing requirements, face-to-face consultation mandates for prescribing) creates urgent demand.
2. **Cosmetic surgeons** — liposuction, rhinoplasty, breast augmentation, BBL, etc. Higher-stakes procedures with significant litigation exposure.
3. **Private dentists** — implants, extractions, sedation dentistry, whitening. 69% of UK dental market is now private-pay. Many offer aesthetic treatments too.
4. **Private physiotherapists, chiropractors, osteopaths** — injection therapies, shockwave, dry needling.
5. **Private hospitals and surgical centres** — longer sales cycle but highest contract value.
6. **Pharmacists** — with expanding independent prescriber rights from 2026 and Pharmacy First programme, pharmacists increasingly need pre-prescription risk assessment tools.

### Secondary user: Patients exploring procedures

A potential patient is considering a procedure (e.g. lip filler, laser hair removal, teeth whitening). They know they take certain medications. They want to check whether their medications might be a problem before booking a consultation. This is a self-service, informational use case — not diagnostic. The patient-facing interface is Phase 2 (the POC focuses on the professional interface) but should be acknowledged in the landing page messaging.

### The tool is NOT targeting the NHS as the initial market

NHS hospitals already have FDB Multilex embedded in their EPR systems (EMIS, SystmOne, Epic, Cerner). The NHS procurement pathway is 12–24 months with DTAC, DCB0129/0160, and DSPT compliance requirements. Private practice has none of this — the decision-maker is the individual practitioner or clinic owner, sales cycles are weeks not years, and the tool can launch as a standalone web app with no integration requirements. NHS is the expansion play after proving product-market fit in private practice.

---

## Why This Matters (The Problem)

### Private practice has a patient safety blind spot

- Private practitioners cannot access NHS Summary Care Records or GP-held medication lists. They rely entirely on patient self-reporting.
- Most private clinics have no clinical decision support software. Practice management tools (Cliniko, Pabau, Dentally, WriteUpp, Semble) collect patient medical history but do not analyse it for contraindications.
- Pabau is the only exception with some BNF-integrated prescribing alerts, but even Pabau does not offer procedure-specific risk contextualisation.
- The pre-procedure risk check in private practice is not standardised. It varies wildly by practitioner training, experience, and diligence.

### The consequences are real

- England sees an estimated 237 million medication errors annually, 66 million potentially clinically significant.
- Avoidable adverse drug events cost the NHS £98.5 million/year, cause/contribute to 1,708 deaths.
- In aesthetic medicine specifically: a fatality from a non-surgical BBL in 2024, 15 women hospitalised from counterfeit Botox, half of patients presenting to NHS with non-surgical cosmetic complications required surgery.
- 92% of aesthetic practitioners are unaware of the MHRA Yellow Card adverse event reporting mechanism.
- The Yellow Card scheme has a 94% median underreporting rate — true private practice adverse event rates are unknown but likely significant.

### Regulatory tailwinds create urgency

- UK government announced a crackdown on unsafe cosmetic procedures in 2025 — only qualified healthcare professionals will perform highest-risk procedures, clinics will need licensing.
- Wales already implemented premises licensing in 2024. Scotland launched consultation in December 2024.
- From June 2025, independent nurse/midwife prescribers must conduct face-to-face consultations with documented clinical assessments before prescribing for non-surgical cosmetic procedures.
- Pharmacist independent prescribing expands in 2026.
- All of this creates demand for demonstrable, auditable safety systems — a contraindication tool becomes both a compliance requirement and a competitive differentiator for practitioners.

---

## What We're Building for the POC

### Goal

A working interactive demo that lets someone experience the core value proposition in under 60 seconds, embedded in a landing page that captures interest, collects feature preferences, and builds a waitlist. This is a **validation tool**, not a production product. The purpose is to get it in front of aesthetic practitioners and private clinic owners to gauge demand, refine the feature set, and collect email signups.

### Component 1: Interactive Demo

A single-page flow with these steps:

**Step 1 — Patient Input**
- Text input or searchable dropdown for **medications** (allow multiple). Pre-populate suggestions with common medications that have known procedural contraindications: warfarin, aspirin, methotrexate, isotretinoin (Accutane/Roaccutane), lithium, blood thinners (rivaroxaban, apixaban), immunosuppressants, SSRIs, retinoids, NSAIDs.
- Text input or searchable dropdown for **conditions** (allow multiple). Common: diabetes, hypertension, autoimmune conditions, bleeding disorders, epilepsy, heart conditions, pregnancy, breastfeeding, keloid scarring tendency, active skin infections.
- Text input or searchable dropdown for **allergies** (allow multiple). Common: lidocaine/local anaesthetics, latex, aspirin/NSAIDs, penicillin, adhesives/plasters.

**Step 2 — Procedure Selection**
- Searchable list or categorised dropdown of procedures. Focus on aesthetic and dental for the POC:
  - **Injectables**: Botox (botulinum toxin), dermal fillers (hyaluronic acid), lip filler, PRP (platelet-rich plasma), mesotherapy, Kybella/fat dissolving
  - **Laser/Energy**: laser hair removal, IPL, fractional laser resurfacing, RF microneedling, HIFU, cryolipolysis (CoolSculpting)
  - **Chemical/Topical**: chemical peel (glycolic, TCA, phenol), microneedling, dermaplaning, microdermabrasion
  - **Surgical**: liposuction, blepharoplasty, rhinoplasty, breast augmentation, abdominoplasty, BBL
  - **Dental**: extraction, implant, root canal, crown preparation, teeth whitening, sedation dentistry

**Step 3 — Risk Assessment Output**
- Display a structured risk report showing:
  - **Overall risk level** — a clear visual indicator (e.g. green/amber/red or a severity scale)
  - **Specific contraindication flags** with severity and explanation
  - **Recommended actions** — e.g. "Discontinue isotretinoin 6 months prior to procedure", "Consult prescribing physician regarding warfarin management", "Use alternative to lidocaine-based anaesthetic"
  - **Procedure-specific notes** — risks particular to this procedure given the patient's profile
- The output should look and feel like a real clinical decision support tool — professional, authoritative, structured.

**Important: The backend is hardcoded for the POC.** The demo does not need a real AI backend. Pre-build risk assessment responses for 10–15 common medication/procedure combinations. Use a lookup table or simple matching logic to serve the right response. The combinations to cover:

1. Warfarin/blood thinners + any injectable procedure
2. Isotretinoin (Roaccutane) + chemical peel / laser / microneedling
3. Methotrexate + any procedure requiring wound healing
4. Lithium + procedures involving local anaesthetic
5. NSAIDs/aspirin + any procedure with bleeding risk
6. Immunosuppressants + any procedure with infection risk
7. SSRIs + procedures involving adrenaline-containing local anaesthetic
8. Pregnancy + Botox / chemical peel / laser
9. Diabetes + any surgical procedure or slow-healing procedure
10. Bleeding disorder + any injectable or surgical procedure
11. Lidocaine allergy + any procedure using local anaesthetic
12. Active skin infection + any skin-surface procedure
13. Keloid scarring + microneedling / laser / surgical
14. Epilepsy + procedures involving light-based devices (laser/IPL)
15. Retinoids (topical) + chemical peel / dermaplaning

For combinations not in the lookup table, display a sensible fallback: "No known contraindications identified for this combination. A full AI-powered assessment covering [X] drug interactions and [Y] condition-procedure risk factors will be available in the full product. Sign up for early access below."

### Component 2: Landing Page

A single-page site wrapping the demo with:

**Hero section**
- Clear headline communicating the value prop. Something in the space of: instant contraindication checking for your clinic / know the risks before the procedure / the safety layer private practice is missing.
- Subheadline reinforcing the speed and specificity angle.
- CTA button scrolling down to the demo.

**Problem statement section**
- Brief, punchy copy about the gap in private practice safety infrastructure. Reference the key stats (237M medication errors, no CDS in private practice, incoming regulation).

**How it works section**
- 3-step visual: input patient data → select procedure → get instant risk assessment.

**The interactive demo itself**
- Embedded in the page as the centrepiece.

**Feature prioritisation survey (post-demo)**
- After someone completes a demo assessment, show a short survey. This should feel like a natural continuation, not a separate form.
- Question 1: "Which of these capabilities would be most valuable to your practice?" (multi-select or rank)
  - Instant contraindication and drug interaction alerts
  - Pre-procedure safety checklist generation
  - Patient-facing self-check portal (patients check their own risks before booking)
  - Integration with your practice management software (Cliniko, Pabau, Dentally, etc.)
  - Audit trail / compliance documentation for CQC or insurance
  - Post-procedure monitoring alerts
- Question 2: "What type of practice are you?" (single select)
  - Aesthetic clinic
  - Cosmetic surgery
  - Private dental practice
  - Private hospital / surgical centre
  - Pharmacy
  - Physiotherapy / sports medicine
  - Other (free text)
- Question 3: "How many practitioners in your practice?" (single select)
  - Solo practitioner
  - 2–5
  - 6–20
  - 20+
- Optional: email for waitlist signup

**Social proof / credibility section**
- Reference the market context: incoming UK regulation, expanding prescribing rights, MHRA's own investment in AI drug interaction tools.
- "Built by Sumplexity" — brief credibility line about the company's AI expertise.

**Waitlist CTA**
- Final email capture for practitioners who want early access.

### Component 3: Email Outreach Prep

The landing page URL will be used in cold email outreach to aesthetic clinics and private practices. The page must therefore:
- Load fast and look professional on first impression
- Be mobile-responsive (practitioners will open emails on phones)
- Have a clear, compelling meta title and description for link previews
- Not require any login or account creation to try the demo
- The demo interaction should take under 60 seconds

**Note on email sending**: We are NOT sending emails from a Sumplexity domain to avoid spam risk. A separate outreach domain will be used. The landing page itself will be Sumplexity-branded.

---

## Technical Constraints & Preferences

- **This is a POC, not production software.** Optimise for speed of development and visual impact, not scalability.
- **Sumplexity brand design** — apply from the companion style/design document. Do not invent branding.
- **No real AI backend needed** — hardcoded response lookup for the demo. The point is validating demand, not demonstrating AI capability.
- **Single page application** — the demo and landing page should be one cohesive page, not separate sites.
- **Form submissions** — use a simple external form service (Tally, Typeform embed, or similar) for the survey and waitlist. Alternatively, build a lightweight form that posts to a webhook or stores responses in a simple backend.
- **No user accounts, no login** — zero friction to try the demo.
- **Hosting** — should be deployable to Vercel, Netlify, or Firebase Hosting with minimal configuration.

---

## Key Design Principles for the POC

1. **Professional and clinical** — this is a medical tool. The design should convey trust, authority, and precision. Avoid anything that looks like a consumer wellness app. Think clinical dashboard, not lifestyle product.
2. **Speed is the message** — the demo should feel instant. The risk assessment should appear immediately (or with a brief, purposeful loading animation that suggests AI processing). The entire user journey from landing on the page to seeing a risk assessment should be under 60 seconds.
3. **Show, don't tell** — the interactive demo is the hero of the page, not the marketing copy. Get people into the demo as fast as possible.
4. **The output is the product** — the risk assessment output screen is what sells this tool. It needs to look like something a practitioner would trust and use. Structured, colour-coded severity levels, clear actionable recommendations, professional formatting.
5. **Mobile-first** — outreach recipients will mostly open on mobile. The demo must work flawlessly on phone screens.

---

## Validation Strategy Context

This POC exists within a broader validation plan:

1. **Phase 1 (already happening)**: Discovery conversation with a known aesthetic laser clinic owner. The POC should be ready to show them during or after this conversation.
2. **Phase 2 (this build)**: The interactive demo + landing page.
3. **Phase 3 (immediately after build)**: Cold outreach to UK aesthetic clinics and private practices using scraped contact lists (from CQC registered provider lists, Google Maps, Apollo/Clay). AI-personalised email sequences via Instantly/Smartlead/Lemlist, linking to the landing page. LinkedIn outreach in parallel. Posts in aesthetic practitioner Facebook groups and forums.
4. **Phase 4 (ongoing)**: Analyse survey responses and waitlist signups to determine feature priorities, willingness to pay, and which vertical (aesthetic, dental, surgical) has strongest pull.

The target is 20–30 survey responses and a handful of follow-up calls within 2 weeks of launch to make a go/no-go decision on building the full product.

---

## Reference Documents

- **Market Research**: See the companion deep research document for full competitive landscape, regulatory analysis, market sizing, technical feasibility assessment, and NHS vs private practice comparison. Key findings are summarised in the problem statement and context sections above.
- **Sumplexity Brand/Design**: See the companion style/design document for all visual identity, typography, colour palette, and component styling. Apply this to all UI built for this POC.

---

## Summary of What to Build

| Component | Description | Priority |
|---|---|---|
| Interactive demo | 3-step flow: patient inputs → procedure selection → risk assessment output. Hardcoded backend with 15 common scenarios. | Must have |
| Landing page | Hero, problem statement, how-it-works, embedded demo, feature survey, waitlist signup | Must have |
| Feature survey | Post-demo multi-select/rank of 6 features + practice type + practice size + optional email | Must have |
| Waitlist capture | Email signup integrated into survey and as standalone CTA | Must have |
| Mobile responsiveness | Full functionality on phone screens | Must have |
| Meta tags / link previews | Compelling title + description for email/LinkedIn link sharing | Must have |
| Loading states | Brief purposeful animation during "risk assessment" to suggest AI processing | Nice to have |
| Analytics | Basic page view and demo completion tracking (e.g. Plausible, PostHog, or simple event logging) | Nice to have |