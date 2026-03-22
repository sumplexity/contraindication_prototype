# Modularity

## Structure

### docs/
Static site served by GitHub Pages — the POC landing page + interactive demo.

| File | Purpose |
|------|---------|
| `index.html` | Single page: landing page sections + embedded 3-step demo + survey + waitlist |
| `css/design-system.css` | Sumplexity design system CSS extracted from styleguide |
| `css/app.css` | Page-specific styles (hero, demo, survey, responsive) |
| `js/risk-data.js` | 15 hardcoded contraindication scenarios, medication/condition/allergy/procedure lists, lookup logic |
| `js/demo.js` | 3-step demo UI: multi-select inputs, procedure selection, step navigation, result rendering |
| `js/form.js` | Survey + waitlist form submission to Google Apps Script webhook |
| `js/tracking.js` | Silent capture: UTM params, device type, demo state for hidden form fields |
| `js/app.js` | Page initialisation — wires up Tracking, Demo, Forms on DOMContentLoaded |
| `google-apps-script.js` | Reference file (not served) — Google Apps Script to deploy for form data collection |
| `assets/logos/` | Sumplexity brand logo variants (PNG) |

### src/frontend/styleguide/
Design system reference — the source HTML file and brand assets. CSS is extracted to `docs/css/design-system.css`.

### scripts/
Local/one-off scripts not part of production code.

### taskdocs/
Information docs and task documentation. Old versions archived in `taskdocs/archive/`.
