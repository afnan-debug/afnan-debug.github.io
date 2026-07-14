// Fallback data (used if data/cases.json can't be fetched, e.g. opened via file://).
// The canonical copy lives in data/cases.json — edit that file to change the dataset,
// this constant just keeps the page working when there's no HTTP server.
const FALLBACK_CASES = [];

const ROLE_COLOR = {
  subject: "#d6493a",
  destination: "#c9a24b",
  flag: "#d6493a",
  node: "#4fa3d1",
};

const STATUS_CLASS = {
  "Open": "open",
  "Escalated": "escalated",
  "Pending SAR": "pending",
  "Cleared": "cleared",
};

const RISK_COLOR = (score) => {
  if (score >= 80) return "var(--alarm)";
  if (score >= 55) return "var(--gold)";
  return "var(--ok)";
};

let allCases = [];
let activeFilter = "All";
let selectedId = null;

async function loadCases() {
  try {
    const res = await fetch("data/cases.json", { cache: "no-store" });
    if (!res.ok) throw new Error("bad response");
    const json = await res.json();
    return json.cases;
  } catch (e) {
    return FALLBACK_CASES;
  }
}

function fmtMoney(n) {
  return "$" + n.toLocaleString("en-US");
}

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function renderKPIs(cases) {
  const open = cases.filter(c => c.status === "Open" || c.status === "Escalated").length;
  const highRisk = cases.filter(c => c.riskScore >= 80).length;
  const sars = cases.filter(c => c.status === "Pending SAR").length;
  const avgAmt = Math.round(cases.reduce((s, c) => s + c.amount, 0) / cases.length);

  document.getElementById("kpi-open").textContent = open;
  document.getElementById("kpi-highrisk").textContent = highRisk;
  document.getElementById("kpi-sars").textContent = sars;
  document.getElementById("kpi-avgamt").textContent = fmtMoney(avgAmt);
}

function renderFilters(cases) {
  const typologies = ["All", ...new Set(cases.map(c => c.typology))];
  const wrap = document.getElementById("filters");
  wrap.innerHTML = "";
  typologies.forEach(t => {
    const chip = document.createElement("button");
    chip.className = "chip" + (t === activeFilter ? " active" : "");
    chip.textContent = t === "All" ? "All typologies" : t;
    chip.setAttribute("type", "button");
    chip.addEventListener("click", () => {
      activeFilter = t;
      render();
    });
    wrap.appendChild(chip);
  });
}

function renderTable(cases) {
  const tbody = document.getElementById("case-tbody");
  tbody.innerHTML = "";
  const filtered = activeFilter === "All" ? cases : cases.filter(c => c.typology === activeFilter);
  document.getElementById("case-count").textContent = filtered.length + " case" + (filtered.length === 1 ? "" : "s");

  filtered.forEach(c => {
    const tr = document.createElement("tr");
    if (c.id === selectedId) tr.classList.add("selected");
    tr.innerHTML = `
      <td class="td-id">${c.id}</td>
      <td class="td-entity">
        <div class="name">${c.entity}</div>
        <div class="acct">${c.acct}</div>
      </td>
      <td>${c.typology}</td>
      <td>
        <div class="risk-bar-wrap">
          <div class="risk-bar"><span style="width:${c.riskScore}%; background:${RISK_COLOR(c.riskScore)}"></span></div>
          <span class="risk-num">${c.riskScore}</span>
        </div>
      </td>
      <td class="td-amount">${fmtMoney(c.amount)}</td>
      <td><span class="stamp ${STATUS_CLASS[c.status]}">${c.status}</span></td>
      <td class="td-id">${fmtDate(c.opened)}</td>
    `;
    tr.addEventListener("click", () => {
      selectedId = c.id;
      render();
    });
    tbody.appendChild(tr);
  });
}

function buildGraphSVG(nodes, edges) {
  const w = 340, h = 180;
  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));

  const edgeSVG = edges.map(e => {
    const a = nodeById[e.from], b = nodeById[e.to];
    if (!a || !b) return "";
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - 8;
    return `
      <line class="edge-line" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" marker-end="url(#arrow)" />
      <text class="edge-label" x="${mx}" y="${my}" text-anchor="middle">${e.label}</text>
    `;
  }).join("");

  const nodeSVG = nodes.map(n => {
    const color = ROLE_COLOR[n.role] || "#7c8698";
    const r = n.role === "subject" ? 9 : 6;
    return `
      <circle class="node-circle" cx="${n.x}" cy="${n.y}" r="${r}" fill="${color}22" stroke="${color}" />
      <text class="node-label" x="${n.x}" y="${n.y + r + 12}" text-anchor="middle">${n.label}</text>
    `;
  }).join("");

  return `
    <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#384456" />
        </marker>
      </defs>
      ${edgeSVG}
      ${nodeSVG}
    </svg>
  `;
}

function renderDrawer(cases) {
  const body = document.getElementById("drawer-body");
  const c = cases.find(x => x.id === selectedId);

  if (!c) {
    body.innerHTML = `
      <div class="drawer-empty">
        <div class="glyph">§</div>
        Select a case from the ledger<br>to open the investigation file.
      </div>
    `;
    return;
  }

  const usedRoles = [...new Set(c.nodes.map(n => n.role))];
  const legendLabels = { subject: "subject account", destination: "destination / exit", flag: "flagged event", node: "related party" };

  body.innerHTML = `
    <div class="drawer-case-id">${c.id} &middot; opened ${fmtDate(c.opened)}</div>
    <div class="drawer-entity">${c.entity}</div>
    <div class="drawer-tags">
      <span class="tag">${c.acct}</span>
      <span class="tag">${c.typology}</span>
      <span class="stamp ${STATUS_CLASS[c.status]}">${c.status}</span>
    </div>
    <div class="narrative">${c.narrative}</div>
    <div class="graph-label">Link analysis</div>
    <div class="graph-wrap">${buildGraphSVG(c.nodes, c.edges)}</div>
    <div class="legend">
      ${usedRoles.map(r => `<span><i style="background:${ROLE_COLOR[r] || "#7c8698"}"></i>${legendLabels[r] || r}</span>`).join("")}
    </div>
  `;
}

function render() {
  renderFilters(allCases);
  renderTable(allCases);
  renderDrawer(allCases);
}

(async function init() {
  allCases = await loadCases();
  document.getElementById("stamp-date").textContent = new Date().toLocaleDateString("en-US", {
    month: "short", day: "2-digit", year: "numeric"
  });
  renderKPIs(allCases);
  render();
})();
