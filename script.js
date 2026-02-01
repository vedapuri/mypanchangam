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
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const total = elapsedMs + remainingMs;
  const fraction = elapsedMs / total;

  // --- Geometry ---
  const centerX = 160;
  const centerY = 140;
  const radius  = 80;
  const startAngle = -0.5 * Math.PI; // 12 o'clock

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // --- Remaining (gray) ---
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(
    centerX,
    centerY,
    radius,
    startAngle + fraction * 2 * Math.PI,
    startAngle + 2 * Math.PI
  );
  ctx.fillStyle = "#e0e0e0";
  ctx.fill();

  // --- Elapsed (green) ---
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(
    centerX,
    centerY,
    radius,
    startAngle,
    startAngle + fraction * 2 * Math.PI
  );
  ctx.fillStyle = "#4CAF50";
  ctx.fill();

  // --- Outline ---
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  // --- Red boundary line ---
  const boundaryAngle = startAngle + fraction * 2 * Math.PI;
  const lineLen = radius * 0.85;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.cos(boundaryAngle) * lineLen,
    centerY + Math.sin(boundaryAngle) * lineLen
  );
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();

  // --- Arrowhead ---
  const tipRadius = radius * 0.98;
  const tipX = centerX + Math.cos(boundaryAngle) * tipRadius;
  const tipY = centerY + Math.sin(boundaryAngle) * tipRadius;
  const arrowSize = 6;

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(
    tipX - Math.cos(boundaryAngle - Math.PI / 8) * arrowSize,
    tipY - Math.sin(boundaryAngle - Math.PI / 8) * arrowSize
  );
  ctx.lineTo(
    tipX - Math.cos(boundaryAngle + Math.PI / 8) * arrowSize,
    tipY - Math.sin(boundaryAngle + Math.PI / 8) * arrowSize
  );
  ctx.closePath();
  ctx.fillStyle = "red";
  ctx.fill();

  // --- 0 / 25 / 50 / 75 labels ---
  ctx.fillStyle = "blue";
  ctx.font = "9px Arial";
  ["0", "25", "50", "75"].forEach((label, i) => {
    const a = startAngle + i * 0.25 * 2 * Math.PI;
    ctx.fillText(
      label,
      centerX + Math.cos(a) * radius * 0.82 - 6,
      centerY + Math.sin(a) * radius * 0.82 + 4
    );
  });

  // --- Title ---
  ctx.fillStyle = "#000";
  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.fillText(titleText, centerX, centerY + radius + 22);

  // --- Legend ---
  const percentComplete = (fraction * 100).toFixed(2);
  const percentRemaining = (100 - percentComplete).toFixed(2);

  ctx.textAlign = "left";
  ctx.font = "14px Arial";

  let x = 20;
  const y = centerY + radius + 40;

  ctx.fillStyle = "#4CAF50";
  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "#000";
  ctx.fillText(`Complete: ${percentComplete}%`, x + 16, y + 9);

  x += ctx.measureText(`Complete: ${percentComplete}%`).width + 30;

  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "#000";
  ctx.fillText(`Remaining: ${percentRemaining}%`, x + 16, y + 9);
}


/***********************
 * CALL IT
 ***********************/
loadElementData(ELEMENT_DEFINITIONS.thithi);


