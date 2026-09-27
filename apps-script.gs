// Google Apps Script attached to the "Wedding RSVP responses" sheet (deployed as a web app).
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var p = (e && e.parameter) || {};
  var when = Utilities.formatDate(new Date(), "Europe/London", "dd/MM/yyyy HH:mm");
  sheet.appendRow([when, p.name || "", p.attending || "", p.guests || "", p.dietary || ""]);
  return ContentService.createTextOutput("ok");
}

function doGet() {
  return ContentService.createTextOutput("RSVP endpoint is live");
}
