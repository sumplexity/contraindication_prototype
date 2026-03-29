# Pre-Procedure Risk Assessment Tool — Redesign Spec for Claude Code

## Context

This is a redesign of the existing prototype at `https://sumplexity.github.io/contraindication_prototype/`. The uploaded `index.html` is the current codebase. This spec describes what to change, what to keep, and what to add. The result should be a single `index.html` file that replaces the current one.

The product is being reframed from "contraindication screening" to "pre-procedure risk assessment" — a broader, more defensible positioning. The page must be shorter (2 pages of scroll max, not 3+), more colourful, and include a new data ingestion demo step.

Apply the Sumplexity brand design system throughout. Key rules from the design system:
- Font: Public Sans (already loaded)
- Colours: Brand Green `#0A4D1C`, Warm Coral `#BF5A3A` (pain/problem), Teal `#0C7C6B` (solution), Amber Gold `#C8952E` (proof/value), Deep Navy `#1A2B4D` (context)
- Use narrative accent colours more aggressively than the current version — stat numbers in coral, solution elements in teal, proof in amber
- Section left-edge bars (4px) in accent colours
- No emojis anywhere
- UK English throughout
- Titles are complete, assertive sentences — not topic labels
- Short paragraphs. No fluff. Every sentence earns its place.

## Page Structure (3 sections, ~2 pages of scroll)

### Section 1: Hero + Stats Block (one viewport)

**Title tag / meta:**
```
<title>Pre-procedure risk assessment for private practice | Sumplexity</title>
<meta name="description" content="From messy GP records to structured, source-backed risk assessments in seconds. AI-powered pre-procedure safety for cosmetic and aesthetic clinics.">
```

**Nav:** Keep current nav structure. Update button text from "Try the demo" to "Try the tool". Update nav links:
- "The tool" → #demo
- "Shape the product" → #survey

Remove "The challenge" and "Early access" nav links (those sections no longer exist as separate items).

**Hero headline:**
```
Treatments are getting more complex. Patient histories are getting longer. Your pre-procedure check shouldn't be a manual lookup.
```

**Hero subheadline:**
```
From messy GP records to structured, source-backed risk assessments in seconds. Auditable evidence your practice can act on — and defend.
```

**Hero CTA button:** "Try the tool" → scrolls to #demo

**Stats block** — directly below the hero subheadline, no separate section. Three stat cards in a row, following the one-pager Pain Section pattern:
- Cards have light coral background (`#FAEAE6`), rounded corners, 4px left border in Warm Coral
- Stat numbers are large (ExtraBold, Warm Coral for first two, Deep Navy for third)

Card 1:
- Number: `£98.5M / year`
- Label: `Cost of avoidable adverse drug events in England`
- Context line: `A missed contraindication is the one thing you cannot defend in court`

Card 2:
- Number: `94%`
- Label: `Of adverse events go unreported`
- Context line: `Half of NHS presentations from non-surgical complications required surgery`

Card 3 (Deep Navy accent instead of coral — this is context/urgency, not pain):
- Background: `#E8EBF0` (navy light tint)
- Left border: Deep Navy
- Number: `2026`
- Label: `New licensing enforcement begins`
- Context line: `Red/Amber/Green framework demands documented safety checks. Future-proof your practice now`

After the stats, a single credibility line (keep the current one, slightly reworded):
```
Built by former PwC AI and regulatory compliance specialists, alongside a medico-legal clinical assessor who sees the consequences when pre-procedure checks fail.
```

**CUT ENTIRELY:** The four numbered intro blocks (sections 1-4 in the current version). They are replaced by the stats block above.

---

### Section 2: The Demo (scrolls internally, one visual viewport)

Keep the app-panel wrapper. Update the panel title:
```
See how this could transform your pre-procedure workflow
```

**Step indicator:** Change from 3 steps to 3 steps with new labels:
1. Patient data
2. Procedure
3. Assessment

#### Step 1: Data Ingestion + Patient Profile (NEW DESIGN)

This step is the biggest change. It combines data ingestion demonstration with the existing patient profile editing.

**Step heading:** `Build the patient picture`

**Subtext (brief, replaces the current 4-item numbered list):**
```
Select an example patient to see how the tool processes different data formats, or enter details manually.
```

**Four patient tiles** displayed as cards in a row (or 2x2 on mobile). Each tile shows:
- Patient name and age (bold)
- Key conditions/medications (smaller text, muted)
- Data source type indicator — a small icon-like label (no emojis — use a small styled badge/tag):
  - `Pharmacy printout` for Sarah
  - `GP email` for James
  - `Patient transcript` for Lisa (NEW)
  - `Manual entry` for the blank one

Patient tiles in order:
```
1. Sarah, 68 — Warfarin, AF, diabetes        [Pharmacy printout]
2. James, 24 — On Roaccutane                  [GP email]  
3. Lisa, 42 — Semaglutide (Ozempic), obesity  [Patient transcript]
4. + Enter details manually                   [Manual entry]
```

**Tile 4 (manual entry) is visually distinct** — lighter/outlined style, positioned last.

**What happens when you click a patient tile (tiles 1-3):**

1. The tile highlights as selected
2. Below the tiles, a "raw data" box appears showing a simulated source document:

**Sarah's raw data** — styled like a pharmacy printout (monospace font, slightly grey background, looks like a printed receipt/summary):
```
PATIENT MEDICATION RECORD
NHS No: 485 293 7714
Name: Sarah Mitchell    DOB: 14/03/1958

Current Medications:
- Warfarin 5mg tablets — 1 daily (INR target 2-3)
- Metformin 500mg — 2x daily  
- Ramipril 5mg — 1 daily
- Atorvastatin 20mg — 1 at night

Diagnoses: Type 2 diabetes mellitus, Atrial fibrillation,
Hypertension, Hypercholesterolaemia

Known allergies: NKDA (no known drug allergies)

Printed: 27/03/2026  Boots Pharmacy, Mill Road, Cambridge
```

**James's raw data** — styled like an email (with To/From/Subject header):
```
From: reception@parkmedical.nhs.uk
To: info@cambridgelaserclinic.com
Subject: Patient referral info — James Cooper

Hi,

James is a 24yo male currently on Roaccutane (isotretinoin 40mg/day) 
prescribed by Dr Patel at Addenbrooke's dermatology for severe nodular 
acne. He's been on it about 4 months now. No other medications. 
He mentioned wanting to ask about acne scarring treatments once his 
course finishes.

No known allergies. Otherwise fit and well.

Best,
Park Medical Surgery Reception
```

**Lisa's raw data** — styled like a conversation transcript (with quotation formatting):
```
PATIENT CONSULTATION NOTES — 28/03/2026

Practitioner: "What medications are you currently taking?"

Patient: "I'm on Ozempic, the weekly injection — I've been on it 
about 6 months now for weight loss. My GP prescribed it. I'm also 
taking the pill, Cerelle I think it's called."

Practitioner: "Any medical conditions I should know about?"

Patient: "Nothing major. I'm a bit overweight obviously, that's why 
I'm on the Ozempic. Oh, and I get migraines sometimes. I had my 
appendix out years ago but that's it."

Practitioner: "Any allergies?"

Patient: "Not that I know of. Actually wait — I had a reaction to 
some plasters once, they made my skin go red and itchy. Does that 
count?"
```

3. A "Process patient data" button appears below the raw data
4. Click → brief animation (1-2 seconds, use a simplified version of the current loading animation — maybe just a progress bar with "Extracting and structuring patient data..." text)
5. The raw data box transforms/fades into the structured patient profile (the current multi-select fields, pre-populated with the extracted data):

**Sarah's structured data:**
- Medications: Warfarin, Metformin, Ramipril, Atorvastatin
- Conditions: Diabetes (Type 2), Atrial fibrillation, Hypertension
- Allergies: (none)

**James's structured data:**
- Medications: Isotretinoin (Roaccutane)
- Conditions: (none)
- Allergies: (none)

**Lisa's structured data:**
- Medications: Semaglutide (Ozempic), Desogestrel (Cerelle)
- Conditions: Obesity, Migraine
- Allergies: Adhesives / plasters

Note Lisa's data extraction is deliberately impressive — it correctly identifies "Cerelle" as desogestrel, maps "a bit overweight" to obesity (given Ozempic context), and captures the plaster allergy from a vague patient description.

**All fields are editable** after processing. The multi-select inputs work exactly as they do now.

**Smart follow-up questions** — after the structured fields appear, show a collapsible/expandable bar (collapsed by default):

Style: Teal left border (3px), light teal background (`#E6F3F1`), with a clickable header:
```
[Expand icon] Smart follow-up: 2 questions identified for your team to verify
```

When expanded, show hardcoded questions per patient:

Sarah:
- "Patient's INR was last checked on [date unknown]. Recommend INR check within 24 hours of any invasive procedure."
- "Warfarin and atorvastatin can interact — confirm current INR is stable and within target range (2-3)."

James:
- "Isotretinoin course started approximately 4 months ago. Confirm exact start date and expected end date with prescribing dermatologist."
- "Patient mentioned interest in scarring treatments — confirm isotretinoin has been discontinued for at least 6 months before any skin resurfacing procedure."

Lisa:
- "Patient reports plaster adhesive reaction. Clarify: was this a local skin irritation or a systemic allergic response? Consider patch testing if unclear."
- "Semaglutide (Ozempic) causes delayed gastric emptying. If any sedation or general anaesthesia is planned, confirm cessation timing with prescribing GP."

**When tile 4 (manual entry) is clicked:** No raw data box, no processing animation. Just show the empty multi-select fields directly (current behaviour). The smart follow-up bar does not appear for manual entry.

**Illustration banner** — this is the conditional disclaimer:
- When an example patient is loaded and NOT edited: no banner
- When the user edits any field (adds/removes a tag) OR uses manual entry: show an info-style banner (blue, not red) above the "Continue to procedure" button:
```
This prototype demonstrates the tool's capabilities using curated clinical scenarios. 
Findings are illustrative — the full product assesses against comprehensive BNF, NICE, 
and SmPC databases in real time.
```

Track whether user has modified from the original example patient state. Set a flag `userModified = true` when any tag is added or removed after an example patient is loaded.

#### Step 2: Procedure Selection

Keep current design and behaviour. Changes:

1. **Remove the 'Dental' category entirely** (no dental procedures)
2. **Add 'Ultherapy' to the 'Laser / energy' category**
3. Add Semaglutide-relevant procedure tags:
   - Add a new tag `sedationRisk` that includes all surgical procedures plus any that commonly involve sedation
   - Tag Ultherapy under appropriate existing tags

Updated PROCEDURES object:
```javascript
const PROCEDURES = {
    'Injectables': [
        'Botox (botulinum toxin)',
        'Dermal fillers (hyaluronic acid)',
        'Lip filler',
        'PRP (platelet-rich plasma)',
        'Mesotherapy',
        'Fat dissolving (Kybella/Aqualyx)',
    ],
    'Laser / energy': [
        'Laser hair removal',
        'IPL (intense pulsed light)',
        'Fractional laser resurfacing',
        'RF microneedling',
        'HIFU',
        'Ultherapy',
        'Cryolipolysis (CoolSculpting)',
    ],
    'Chemical / topical': [
        'Chemical peel (glycolic)',
        'Chemical peel (TCA)',
        'Chemical peel (phenol)',
        'Microneedling',
        'Dermaplaning',
        'Microdermabrasion',
    ],
    'Surgical': [
        'Liposuction',
        'Blepharoplasty',
        'Rhinoplasty',
        'Breast augmentation',
        'Abdominoplasty',
        'BBL (Brazilian butt lift)',
    ],
};
```

Add `Ultherapy` to the relevant PROC_TAGS (skinSurface, woundHealing as appropriate — Ultherapy is a non-invasive HIFU treatment, so it should be in similar tags to HIFU).

#### Step 3: Risk Assessment Output

Keep the current rendering structure and logic largely intact. Changes:

1. **Severity labels:** Change from "Critical / Attention / Guidance" to "Red / Amber / Green" to mirror the new UK licensing framework language. Update badge colours accordingly (Red = danger, Amber = warning, Green = success/guidance).

2. **Add a plain-English one-liner** to each finding card, displayed below the title and above the expandable clinical reasoning. This should be a simple sentence a non-clinical person can understand. Add a `plainEnglish` field to each scenario object.

3. **The illustrative banner** — if `userModified === true`, show the same blue info banner at the top of the results (before the risk banner).

4. **Full product teaser** — replace the current "Consider alternative approaches" box at the bottom with:
```
In the full product: automated GP record ingestion, smart follow-up question 
generation, GP confirmation form generation, patient self-service portal, 
audit trail documentation, and practice management integration.
```
Style: Teal left border, light teal background.

---

### Section 3: Survey + Waitlist (combined, one viewport)

Merge the current separate survey and waitlist sections into one panel. Remove the standalone waitlist section at the bottom entirely.

**Panel title:**
```
Help build the tool your practice needs
```

**Updated feature ranking list (drag to rank):**
1. Drug-procedure contraindication checking
2. Data ingestion: GP records and pharmacy printouts
3. Data ingestion: consultation transcripts and notes
4. AI-generated follow-up questions for admin team
5. GP confirmation form generation
6. Audit trail and compliance documentation
7. Patient self-service portal
8. Practice management software integration (Cliniko, Pabau, etc.)
9. Multi-language support

**Keep these survey fields as-is:**
- "How do you currently handle pre-procedure contraindication checks?" (dropdown, same options)
- "How long does a typical pre-procedure check take you today?" (dropdown, same options)

**Update practice type options (remove dentistry):**
- Aesthetic clinic (injectables)
- Aesthetic clinic (laser/energy)
- Cosmetic surgery
- Multi-treatment clinic
- Other

**Practice size:** Keep as-is.

**"What is your biggest concern about pre-procedure safety?"** — change from optional to REQUIRED. Remove "(optional)" from the label. Add `required` attribute.

**Email field** — keep as optional, same position and styling.

**Add a waitlist CTA** at the bottom of the survey form (after the submit button), styled as a visually distinct block:
```
Join early access — shape what we build next
[email input] [Join]
```
This replaces the separate waitlist section. Keep the same webhook submission logic.

---

## Scenario Data Changes

### CRITICAL: Fix the SSRI scenario (CURRENTLY INCORRECT)

The current `ssri_adrenaline` scenario claims SSRIs interact with adrenaline in local anaesthetics. This is WRONG — research confirms SSRIs do not have significant epinephrine interactions. The interaction is with TCAs (tricyclic antidepressants), not SSRIs.

**Replace the entire scenario** with an SSRI bleeding risk scenario:

```javascript
{
    id: 'ssri_bleeding',
    title: 'SSRI use with bleeding-risk procedure',
    triggerMeds: ['sertraline', 'fluoxetine', 'citalopram', 'venlafaxine', 'paroxetine'],
    triggerConditions: [],
    triggerAllergies: [],
    procedureTag: 'bleedingRisk',
    severity: 'attention',
    category: 'Drug-procedure interaction',
    plainEnglish: 'These antidepressants can make bleeding last longer during and after the procedure.',
    explanation: 'SSRIs inhibit serotonin reuptake in platelets, impairing platelet aggregation and prolonging bleeding time. This increases the risk of bruising, haematoma, and prolonged bleeding during injectable and surgical procedures. The effect is additive with other antiplatelet or anticoagulant medications.',
    recommendations: [
        'Inform patient of increased bruising and bleeding risk',
        'Do not advise discontinuation of SSRIs without prescriber approval — withdrawal risks may outweigh procedural bleeding risk',
        'Avoid concurrent NSAID use in the peri-procedural period',
        'Apply extended pressure to injection/incision sites',
        'Schedule post-procedure review to monitor for haematoma',
        'If patient is also on anticoagulants, treat as high-risk — seek haematology advice',
    ],
},
```

### NEW: Add Semaglutide (Ozempic) scenario

```javascript
{
    id: 'glp1_sedation',
    title: 'GLP-1 agonist use with procedure involving sedation or anaesthesia',
    triggerMeds: ['semaglutide', 'ozempic', 'wegovy', 'tirzepatide', 'mounjaro'],
    triggerConditions: [],
    triggerAllergies: [],
    procedureTag: 'surgical',
    severity: 'critical',
    category: 'Drug-procedure contraindication',
    plainEnglish: 'Weight loss injections like Ozempic slow digestion, creating a serious choking risk under anaesthesia — even after normal fasting.',
    explanation: 'GLP-1 receptor agonists (semaglutide, tirzepatide) cause delayed gastric emptying. Patients may retain solid gastric contents despite following standard pre-operative fasting guidelines. This significantly increases the risk of pulmonary aspiration during sedation or general anaesthesia — a potentially fatal complication. The American Society of Anesthesiologists recommends cessation prior to elective procedures.',
    recommendations: [
        'For weekly GLP-1 dosing (e.g. Ozempic): discontinue at least 7 days before procedure',
        'For daily GLP-1 dosing: discontinue the day before procedure',
        'Consider extended fasting period (24+ hours) if medication cannot be stopped in time',
        'Perform point-of-care gastric ultrasound before induction if available',
        'If significant gastric contents are found, defer the procedure',
        'Many patients do not volunteer GLP-1 use — screen specifically for weight loss medications',
        'Inform patient\'s prescribing GP of the planned procedure and cessation requirement',
    ],
},
```

Add `Semaglutide (Ozempic)`, `Tirzepatide (Mounjaro)` to the MEDICATIONS array.

Add `Obesity` and `Migraine` to the CONDITIONS array.

Add `Desogestrel (Cerelle)` to the MEDICATIONS array (for Lisa's example).

Add `Adhesives / plasters` is already in ALLERGIES — confirm it's there.

### Update epilepsy scenario wording

The current explanation is actually well-worded (it mentions "~3% of epilepsy patients with confirmed photosensitivity"). Keep it, but add a `plainEnglish` field:
```
plainEnglish: 'Some types of epilepsy can be triggered by flashing or pulsed light from laser devices.'
```

### Add plainEnglish field to ALL existing scenarios

Add a `plainEnglish` string to every scenario in the SCENARIOS array. These should be simple, jargon-free sentences that a receptionist or admin person could understand. Examples:

- blood_thinners_bleeding: `'Blood-thinning medication significantly increases the risk of uncontrolled bleeding during this procedure.'`
- isotretinoin_skin: `'Roaccutane thins the skin and prevents proper healing — skin procedures are unsafe until at least 6 months after stopping.'`
- methotrexate_healing: `'This medication suppresses the immune system, which slows wound healing and raises infection risk.'`
- lithium_anaesthetic: `'Lithium can intensify and prolong the effects of local anaesthetic, and common painkillers given afterwards can push lithium to toxic levels.'`
- nsaids_bleeding: `'Over-the-counter painkillers like ibuprofen thin the blood and increase bruising risk during procedures.'`
- immunosuppressant_infection: `'Immune-suppressing medication means the body cannot fight infection as effectively after the procedure.'`
- pregnancy_procedures: `'Most cosmetic procedures are not safe during pregnancy due to unknown effects on the baby.'`
- diabetes_surgery: `'Diabetes slows wound healing and increases infection risk — blood sugar must be well-controlled before proceeding.'`
- bleeding_disorder: `'A bleeding disorder means the body cannot stop bleeding normally — specialist input is essential before any invasive procedure.'`
- lidocaine_allergy: `'An allergy to local anaesthetic means the standard numbing agent cannot be used — alternatives must be arranged.'`
- skin_infection_surface: `'Performing skin procedures over active infection or inflamed skin can spread the infection and cause serious complications.'`
- keloid_scarring: `'A tendency to form raised, thickened scars means any wound-creating procedure carries a risk of visible scarring.'`
- retinoid_topical_skin: `'Skin creams containing retinoids make the skin thinner and more sensitive — procedures can cause burns or excessive peeling.'`

### Update the example patients object

```javascript
examplePatients: {
    sarah: {
        medications: ['Warfarin', 'Metformin', 'Ramipril', 'Atorvastatin'],
        conditions: ['Diabetes (Type 2)', 'Atrial fibrillation', 'Hypertension'],
        allergies: [],
    },
    james: {
        medications: ['Isotretinoin (Roaccutane)'],
        conditions: [],
        allergies: [],
    },
    lisa: {
        medications: ['Semaglutide (Ozempic)', 'Desogestrel (Cerelle)'],
        conditions: ['Obesity', 'Migraine'],
        allergies: ['Adhesives / plasters'],
    },
},
```

Remove the `mark` patient (replaced by `lisa`). Remove `priya` (replaced by `lisa` — we're going from 4 to 3 named patients + manual entry).

Wait — actually keep it at 3 named + 1 manual. The three named patients give us three different data source types (pharmacy printout, GP email, patient transcript). Manual entry is the fourth option.

### Update the PROC_TAGS for new Semaglutide scenario

The `surgical` tag already covers all surgical procedures. The GLP-1 scenario should trigger for all surgical procedures (which involve general anaesthesia or sedation). This is correct as-is — the `surgical` procedureTag in the new scenario will match liposuction, blepharoplasty, rhinoplasty, breast augmentation, abdominoplasty, BBL.

If we want it to also trigger for procedures that might involve sedation but aren't in the surgical category (e.g. Chemical peel (phenol) can involve sedation), we could add a `sedationRisk` tag. But for the demo, keeping it to surgical procedures is safest and most defensible. Don't over-extend.

---

## Visual / Colour Changes

The current prototype is too muted. Apply the narrative accent colours more aggressively:

1. **Stats block** — coral-tinted backgrounds with coral stat numbers (as described above)
2. **Demo panel** — keep the current clean white panel, but:
   - Step dots: use Brand Green (current is fine)
   - The raw data boxes: distinct visual treatment per type (monospace for pharmacy, email-style for GP email, conversation-style for transcript)
   - The processing animation: use Teal accent
   - Smart follow-up bar: Teal left border + light teal background
3. **Risk assessment output:**
   - Red/Amber/Green severity badges with corresponding background tints
   - High risk banner: red-tinted background
   - Moderate risk banner: amber-tinted background
   - Low risk banner: green-tinted background
4. **Survey panel** — keep current styling but update feature ranking items
5. **Credibility line** — subtle, muted styling (current is fine)

---

## Things to KEEP unchanged

- The webhook URL for form submissions (Google Apps Script)
- UTM parameter tracking
- Device type detection
- Google Analytics placeholder
- The multi-select component behaviour (searchable dropdowns with tags)
- The loading animation pipeline (the step-by-step clinical intelligence simulation)
- The procedure grid layout and radio-button selection
- The finding card expand/collapse behaviour
- The drag-to-rank survey component
- Touch support for mobile drag ranking
- Mobile responsive breakpoints (adjust as needed for new layout)
- The scroll spy for side navigation
- The fallback message for unmatched combinations (update wording slightly to match new framing)

---

## Things to REMOVE

- The four numbered intro blocks (sections 1-4)
- The separate waitlist section at the bottom
- The `priya` and `mark` example patients
- All dental procedures and dental procedure tags
- The SSRI + adrenaline scenario (replace with SSRI + bleeding)
- The "Consider alternative approaches" box (replace with full product teaser)

---

## Mobile Considerations

- Patient tiles: stack 2x2 on tablet, single column on mobile
- Raw data boxes: full width, scrollable if needed
- Stats cards: stack vertically on mobile (1 per row)
- Survey: single column (current behaviour, keep)
- The processing animation must work on mobile — keep it lightweight
- Touch-to-expand for smart follow-up questions (no hover)

---

## File Structure

Single `index.html` file, same as current. All CSS inline in `<style>`, all JS inline in `<script>`. No external dependencies except Google Fonts (Public Sans) which is already loaded.

The logo image path `assets/logos/logo_name_tagline_nobackg.png` should remain the same (it's hosted on GitHub Pages alongside the HTML).
