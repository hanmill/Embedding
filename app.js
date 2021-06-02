// Where you write the java script
console.log("Hello from B2S!");

// To do list:
// 1. Select the container in the html
// 2. Give the viz options(height and width)
// 3. Variable for the dashboard url

const vizContainer = document.getElementById("vizContainer");
const vizURL =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";
// must use the link in the share options
const vizOptions = {
  height: 800,
  width: 1000,
  hideToolbar: true,
};

let viz;
// must define the variable viz prior to using it in the below function
function initViz() {
  viz = new tableau.Viz(vizContainer, vizURL, vizOptions);
}
// wait until the page has fully loaded, then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

// Export pdf Button:
// Button element in your index.html
// Link the button to the app.java script
// Create the tableau function
// add a listener to carry out the funtion when clicking the button

const exportPDF = document.getElementById("exportPDF");
function loadPDF() {
  viz.showExportPDFDialog();
  console.log("PDF export window loaded");
}
exportPDF.addEventListener("click", loadPDF);

// Export to Powerpoint
const exportPowerpoint = document.getElementById("exportPowerpoint");
function loadPowerpoint() {
  viz.showExportPowerPointDialog();
  console.log("Powerpoint export window loaded");
}
exportPowerpoint.addEventListener("click", loadPowerpoint);

// Export to Image
const exportImage = document.getElementById("exportImage");
function loadimage() {
  viz.showExportImageDialog();
  console.log("Image export window loaded");
}
exportImage.addEventListener("click", loadimage);
