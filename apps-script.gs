// Google Apps Script for the Georgia & Greg RSVP sheet.
// Extensions > Apps Script in the Sheet, paste this, then Deploy > New deployment > Web app
// (Execute as: Me, Who has access: Anyone). Paste the web app URL into RSVP_ENDPOINT in the page.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = (e && e.parameter) || {};
  sheet.appendRow([
    new Date(),
    p.name || "",
    p.attending || "",
    p.guests || "",
    p.dietary || ""
  ]);
  return ContentService.createTextOutput("ok");
}

function doGet() {
  return ContentService.createTextOutput("RSVP endpoint is live");
}
