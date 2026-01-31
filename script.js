const THITHI_MAPPING = {
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
};

async function loadData() {
  const nowlocal = new Date();
  nowlocal.setSeconds(0, 0);
  const nowUTC = nowlocal.getTime();

  document.getElementById("output").innerHTML = `
    <b>Current date & time:</b>
    ${nowlocal.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })}<br>
  `;

  const response = await fetch("data_thithi.csv?v=" + Date.now());
  const text = await response.text();
  const lines = text.trim().split("\n");

  const headers = lines[0].split(",").map(h => h.trim());
  const idx = name => headers.indexOf(name);
  const rows = lines.slice(1);

  for (const row of rows) {
    const cols = row.split(",");

    const fromUTC = Date.parse(
      `${cols[idx("t_from_date")].slice(0,4)}-${cols[idx("t_from_date")].slice(4,6)}-${cols[idx("t_from_date")].slice(6,8)}T` +
      `${cols[idx("t_from_hh")].padStart(2,"0")}:${cols[idx("t_from_mm")].padStart(2,"0")}:00Z`
    );

    const toUTC = Date.parse(
      `${cols[idx("t_to_date")].slice(0,4)}-${cols[idx("t_to_date")].slice(4,6)}-${cols[idx("t_to_date")].slice(6,8)}T` +
      `${cols[idx("t_to_hh")].padStart(2,"0")}:${cols[idx("t_to_mm")].padStart(2,"0")}:00Z`
    );

    if (nowUTC >= fromUTC && nowUTC < toUTC) {
      const fromLocal = new Date(fromUTC);
      const toLocal = new Date(toUTC);

      const thithiCode = cols[idx("t_Thithi_1")];
      const thithiDesc = THITHI_MAPPING[thithiCode] ?? thithiCode;

      const elapsedMs = nowUTC - fromUTC;
      const remainingMs = toUTC - nowUTC;

      const elapsedStr = formatDuration(elapsedMs);
      const remainingStr = formatDuration(remainingMs);

      // ✅ REPLACED INLINE HTML WITH THIS FUNCTION CALL
      renderThithiBlock({
        title: "Thithi details",
        thithiDesc,
        fromLocal,
        toLocal,
        elapsedStr,
        remainingStr,
        elapsedMs,
        remainingMs,
        canvasId: "timePie1"
      });

      return;
    }
  }

  document.getElementById("output").innerHTML +=
    "<br>No matching record for current time.";
}
//
function drawTimePie(canvasId, elapsedMs, remainingMs) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const total = elapsedMs + remainingMs;
  const fraction = elapsedMs / total;

  const centerX = 120;
  const centerY = 120;
  const radius = 70;
  const startAngle = -0.5 * Math.PI;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ---- Remaining (gray) ----
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

  // ---- Elapsed (green) ----
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

  // ---- Outline ----
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  // ---- Red boundary line ----
  const boundaryAngle = startAngle + fraction * 2 * Math.PI;
  const lineEnd = radius * 0.85;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.cos(boundaryAngle) * lineEnd,
    centerY + Math.sin(boundaryAngle) * lineEnd
  );
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();

  // ---- Arrowhead ----
  const arrowRadius = radius * 0.98;
  const tipX = centerX + Math.cos(boundaryAngle) * arrowRadius;
  const tipY = centerY + Math.sin(boundaryAngle) * arrowRadius;
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

  // ---- 0 / 25 / 50 / 75 labels ----
  ctx.fillStyle = "blue";
  ctx.font = "8px Arial";
  ["0", "25", "50", "75"].forEach((label, i) => {
    const a = startAngle + i * 0.25 * 2 * Math.PI;
    ctx.fillText(
      label,
      centerX + Math.cos(a) * radius * 0.8 - 6,
      centerY + Math.sin(a) * radius * 0.8 + 4
    );
  });

  // ---- Title ----
  ctx.font = "14px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(
    "Thithi in progress .....",
    centerX,
    centerY + radius + 20
  );

  // ---- Legend ----
  const percentComplete = (fraction * 100).toFixed(2);
  const percentRemaining = (100 - percentComplete).toFixed(2);

  ctx.textAlign = "left";
  ctx.font = "14px Arial";

  let x = 10;
  const y = centerY + radius + 40;

  ctx.fillStyle = "#4CAF50";
  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "#000";
  ctx.fillText(`Complete: ${percentComplete}%`, x + 16, y + 9);

  x += ctx.measureText(`Complete: ${percentComplete}%`).width + 40;

  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "#000";
  ctx.fillText(`Remaining: ${percentRemaining}%`, x + 16, y + 9);
}

//

/* ================================
   REUSABLE RENDER BLOCK
================================ */
function renderThithiBlock({
  title,
  thithiDesc,
  fromLocal,
  toLocal,
  elapsedStr,
  remainingStr,
  elapsedMs,
  remainingMs,
  canvasId
}) {
  document.getElementById("output").innerHTML += `
    <br><b>${title}</b><br><br>
    Name: ${thithiDesc}<br>
    Starts at: ${fromLocal.toLocaleString()}<br>
    Ends at: ${toLocal.toLocaleString()}<br>
    Elapsed time: ${elapsedStr}<br>
    Remaining time: ${remainingStr}<br>
    <canvas id="${canvasId}" width="450" height="400" style="margin-top:10px;"></canvas>
  `;

  drawTimePie(canvasId, elapsedMs, remainingMs);
}

/* ================================
   SMALL HELPER
================================ */
function formatDuration(ms) {
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${d > 0 ? d + " d " : ""}${h} h ${m} min`;
}

loadData();
