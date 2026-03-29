/**
 * Google Apps Script - deploy as web app to receive form submissions.
 *
 * Setup:
 * 1. Create a new Google Sheet
 * 2. Open Extensions > Apps Script
 * 3. Paste this code into Code.gs
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL and paste it into WEBHOOK_URL in index.html
 *
 * After any code changes, you must create a NEW deployment
 * (not update existing) for changes to take effect.
 */

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Webhook is live' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var raw = e.postData.contents;
    var data = JSON.parse(raw);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'timestamp',
        'form_type',
        'session_id',
        'email',
        'practice_name',
        'practice_type',
        'practice_type_other',
        'practice_size',
        'feature_rankings',
        'current_process',
        'current_process_other',
        'check_duration',
        'safety_concern',
        'demo_medications',
        'demo_conditions',
        'demo_allergies',
        'demo_procedure',
        'demo_risk_level',
        'example_patient',
        'flow_completed',
        'procedure_changed',
        'feedback_popup_response',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'device_type'
      ]);
    }

    var rankings = data.feature_rankings || {};
    var meds = data.demo_medications || data.medications || [];
    var conds = data.demo_conditions || data.conditions || [];
    var allergies = data.demo_allergies || data.allergies || [];

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.form_type || '',
      data.session_id || '',
      data.email || '',
      data.practice_name || '',
      data.practice_type || '',
      data.practice_type_other || '',
      data.practice_size || '',
      typeof rankings === 'object' ? JSON.stringify(rankings) : String(rankings),
      data.current_process || '',
      data.current_process_other || '',
      data.check_duration || '',
      data.safety_concern || '',
      Array.isArray(meds) ? JSON.stringify(meds) : String(meds),
      Array.isArray(conds) ? JSON.stringify(conds) : String(conds),
      Array.isArray(allergies) ? JSON.stringify(allergies) : String(allergies),
      data.demo_procedure || data.procedure || '',
      data.demo_risk_level || data.riskLevel || '',
      data.example_patient || '',
      data.flow_completed || '',
      data.procedure_changed || '',
      data.feedback_popup_response || '',
      data.utm_source || data.source || '',
      data.utm_medium || data.medium || '',
      data.utm_campaign || data.campaign || '',
      data.device_type || ''
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // Log error to sheet for debugging
    var debugSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    debugSheet.appendRow(['ERROR', new Date().toISOString(), err.toString(), e.postData ? e.postData.contents : 'no postData']);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
