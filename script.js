/***********************
 * ELEMENT DEFINITIONS
 ***********************/
const ELEMENT_DEFINITIONS = {
  thithi: {
    title: "Thithi details",
    csv: "data_thithi.csv",
    codeColumn: "t_Thithi_1",
    fromPrefix: "t_from",
    toPrefix: "t_to",
    mapping: {
      PRA: "Prathama",
      DWI: "Dwitheeya",
      TRU: "Trutheeya",
      CHA: "Chathurthi",
      PAN: "Panchami",
      SHA: "Shashthi",
      SAP: "Sapthami",
      ASH: "Ashtami",
      NAV: "Navami",
      DAS: "Dashami",
      EKA: "Ekadashi",
      DWA: "Dwadashi",
      TRY: "Trayodashi",
      CHD: "Chathurdashi",
      POU: "Pournamaasi",
      AMA: "Amaavaasya"
    },
    canvasId: "timePie1",
    pieLabel: "Thithi in progress ....."
  }
};


/***********************
 * MAIN ENTRY POINT
 ***********************/
async function loadElementData(def) {
  const nowLocal = new Date();
  nowLocal.setSeconds(0, 0);
  const nowUTC = nowLocal.getTime();

  document.getElementById("output").innerHTML = `
    <b>Current date & time:</b> ${nowLocal.toLocaleString()}<br>
  `;

  const response = await fetch(def.csv + "?v=" + Date.now());
  const text = await response.text();
  const lines = text.trim().split("\n");

  const headers = lines[0].split(",").map(h => h.trim());
  const idx = name => headers.indexOf(name);

  for (const line of lines.slice(1)) {
    const cols = line.split(",");

    const fromUTC = parseUTC(cols, idx, def.fromPrefix);
    const toUTC   = parseUTC(cols, idx, def.toPrefix);

    if (nowUTC >= fromUTC && nowUTC < toUTC) {
      const code = cols[idx(def.codeColumn)];
      const name = def.mapping?.[code] ?? code;

      const elapsedMs = nowUTC - fromUTC;
      const remainingMs = toUTC - nowUTC;

      renderElementBlock({
        title: def.title,
        name,
        fromLocal: new Date(fromUTC),
        toLocal: new Date(toUTC),
        elapsedStr: formatDuration(elapsedMs),
        remainingStr: formatDuration(remainingMs),
        elapsedMs,
        remainingMs,
        canvasId: def.canvasId,
        pieLabel: def.pieLabel
      });

      return;
    }
  }

  document.getElementById("output").innerHTML +=
    "<br>No matching record for current time.";
}


/***********************
 * HELPERS
 ***********************/
function parseUTC(cols, idx, prefix) {
  const d = cols[idx(prefix + "_date")];
  const hh = cols[idx(prefix + "_hh")].padStart(2, "0");
  const mm = cols[idx(prefix + "_mm")].padStart(2, "0");

  return Date.parse(
    `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}T${hh}:${mm}:00Z`
  );
}

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}


/***********************
 * RENDER BLOCK
 ***********************/
function renderElementBlock({
  title,
  name,
  fromLocal,
  toLocal,
  elapsedStr,
  remainingStr,
  elapsedMs,
  remainingMs,
  canvasId,
  pieLabel
}) {
  document.getElementById("output").innerHTML += `
    <br><b>${title}</b><br><br>
    Name: ${name}<br>
    Starts at: ${fromLocal.toLocaleString()}<br>
    Ends at: ${toLocal.toLocaleString()}<br>
    Elapsed time: ${elapsedStr}<br>
    Remaining time: ${remainingStr}<br>
    <canvas id="${canvasId}" width="450" height="400" style="margin-top:10px;"></canvas>
  `;

  drawTimePie(canvasId, elapsedMs, remainingMs, pieLabel);
}


/***********************
 * PIE CHART
 ***********************/
function drawTimePie(canvasId, elapsedMs, remainingMs, titleText) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const total = elapsedMs + remainingMs;
  const elapsedAngle = (elapsedMs / total) * 2 * Math.PI;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 140;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // elapsed
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, 0, elapsedAngle);
  ctx.fillStyle = "#4CAF50";
  ctx.fill();

  // remaining
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, elapsedAngle, 2 * Math.PI);
  ctx.fillStyle = "#E0E0E0";
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";

  ctx.fillText("Elapsed", centerX - 70, centerY);
  ctx.fillText("Remaining", centerX + 80, centerY);

  ctx.fillText(titleText, centerX, centerY + radius + 25);
}


/***********************
 * CALL IT
 ***********************/
loadElementData(ELEMENT_DEFINITIONS.thithi);
