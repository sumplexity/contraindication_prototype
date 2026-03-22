/**
 * Google Apps Script — deploy as web app to receive form submissions.
 *
 * Setup:
 * 1. Create a new Google Sheet
 * 2. Open Extensions > Apps Script
 * 3. Paste this code into Code.gs
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL and paste it into WEBHOOK_URL in index.html
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'timestamp',
        'form_type',
        'email',
        'practice_type',
        'practice_size',
        'feature_rankings',
        'current_process',
        'check_duration',
        'safety_concern',
        'demo_medications',
        'demo_conditions',
        'demo_allergies',
        'demo_procedure',
        'demo_risk_level',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'device_type',
      ]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.form_type || '',
      data.email || '',
      data.practice_type || '',
      data.practice_size || '',
      JSON.stringify(data.feature_rankings || {}),
      data.current_process || '',
      data.check_duration || '',
      data.safety_concern || '',
      JSON.stringify(data.demo_medications || []),
      JSON.stringify(data.demo_conditions || []),
      JSON.stringify(data.demo_allergies || []),
      data.demo_procedure || '',
      data.demo_risk_level || '',
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || '',
      data.device_type || '',
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
