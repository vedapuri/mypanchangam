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

/* ================================
   NEW / CLEAN DRAW FUNCTION
================================ */
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

  // Remaining
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

  // Elapsed
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

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#333";
  ctx.stroke();

  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "#000";
  ctx.fillText(
    "Thithi in progress .....",
    centerX,
    centerY + radius + 20
  );
}

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
