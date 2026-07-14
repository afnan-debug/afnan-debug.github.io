// Fallback data (used if data/cases.json can't be fetched, e.g. opened via file://).
// Kept in sync with data/cases.json — edit both if you change the dataset, or just
// edit this one if you never touch the JSON file directly.
const FALLBACK_CASES = [
  {
    "id": "FC-2026-0142",
    "typology": "Structuring",
    "entity": "J. Marsh Holdings",
    "acct": "AC-4471",
    "riskScore": 88,
    "status": "Escalated",
    "amount": 47250,
    "opened": "2026-07-02",
    "narrative": "Six cash deposits across four branches, each between $8,400 and $9,700, made over five business days. Deposit sizing sits consistently under the $10,000 CTR threshold.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-4471",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "Branch 04",
        "role": "node",
        "x": 90,
        "y": 40
      },
      {
        "id": "n3",
        "label": "Branch 11",
        "role": "node",
        "x": 90,
        "y": 140
      },
      {
        "id": "n4",
        "label": "Branch 22",
        "role": "node",
        "x": 330,
        "y": 40
      },
      {
        "id": "n5",
        "label": "Branch 07",
        "role": "node",
        "x": 330,
        "y": 140
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "$9,650"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "$8,900"
      },
      {
        "from": "n4",
        "to": "n1",
        "label": "$9,400"
      },
      {
        "from": "n5",
        "to": "n1",
        "label": "$8,450"
      }
    ]
  },
  {
    "id": "FC-2026-0139",
    "typology": "Account Takeover",
    "entity": "R. Delgado",
    "acct": "AC-2290",
    "riskScore": 94,
    "status": "Open",
    "amount": 18900,
    "opened": "2026-07-05",
    "narrative": "Device fingerprint changed at 02:14, password reset at 02:19, two high-value wire transfers initiated at 02:31 \u2014 an 8-minute window inconsistent with the customer's prior 3-year session history.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-2290",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "New device",
        "role": "flag",
        "x": 90,
        "y": 40
      },
      {
        "id": "n3",
        "label": "Pw reset",
        "role": "flag",
        "x": 90,
        "y": 140
      },
      {
        "id": "n4",
        "label": "AC-9981",
        "role": "destination",
        "x": 330,
        "y": 40
      },
      {
        "id": "n5",
        "label": "AC-7743",
        "role": "destination",
        "x": 330,
        "y": 140
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "02:14"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "02:19"
      },
      {
        "from": "n1",
        "to": "n4",
        "label": "$11,200"
      },
      {
        "from": "n1",
        "to": "n5",
        "label": "$7,700"
      }
    ]
  },
  {
    "id": "FC-2026-0137",
    "typology": "Money Mule",
    "entity": "T. Okafor",
    "acct": "AC-5518",
    "riskScore": 76,
    "status": "Pending SAR",
    "amount": 32100,
    "opened": "2026-06-29",
    "narrative": "Dormant account received three inbound payments from unrelated senders, each followed by an outbound transfer to a crypto exchange within 90 minutes of receipt.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-5518",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "Sender A",
        "role": "node",
        "x": 90,
        "y": 40
      },
      {
        "id": "n3",
        "label": "Sender B",
        "role": "node",
        "x": 90,
        "y": 140
      },
      {
        "id": "n4",
        "label": "Sender C",
        "role": "node",
        "x": 90,
        "y": 90
      },
      {
        "id": "n5",
        "label": "Exchange X",
        "role": "destination",
        "x": 350,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "$11,000"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "$9,600"
      },
      {
        "from": "n4",
        "to": "n1",
        "label": "$11,500"
      },
      {
        "from": "n1",
        "to": "n5",
        "label": "$31,800"
      }
    ]
  },
  {
    "id": "FC-2026-0135",
    "typology": "Structuring",
    "entity": "Coastal Vending LLC",
    "acct": "AC-3305",
    "riskScore": 62,
    "status": "Open",
    "amount": 28400,
    "opened": "2026-06-27",
    "narrative": "Business account shows a pattern of same-day cash deposits split between teller and ATM channels, each increment held just under the internal $9,500 alert tier.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-3305",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "Teller dep.",
        "role": "node",
        "x": 100,
        "y": 60
      },
      {
        "id": "n3",
        "label": "ATM dep.",
        "role": "node",
        "x": 100,
        "y": 130
      },
      {
        "id": "n4",
        "label": "ATM dep.",
        "role": "node",
        "x": 330,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "$9,200"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "$9,450"
      },
      {
        "from": "n4",
        "to": "n1",
        "label": "$9,750"
      }
    ]
  },
  {
    "id": "FC-2026-0131",
    "typology": "Account Takeover",
    "entity": "M. Huang",
    "acct": "AC-6642",
    "riskScore": 41,
    "status": "Cleared",
    "amount": 4200,
    "opened": "2026-06-21",
    "narrative": "Login from a new IP triggered step-up authentication; customer confirmed the device and transaction by phone within the hour. Closed as false positive.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-6642",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "New IP",
        "role": "flag",
        "x": 90,
        "y": 90
      },
      {
        "id": "n3",
        "label": "Verified call",
        "role": "node",
        "x": 330,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "flag"
      },
      {
        "from": "n1",
        "to": "n3",
        "label": "cleared"
      }
    ]
  },
  {
    "id": "FC-2026-0128",
    "typology": "Money Mule",
    "entity": "D. Petrov",
    "acct": "AC-7719",
    "riskScore": 81,
    "status": "Escalated",
    "amount": 51300,
    "opened": "2026-06-18",
    "narrative": "Account opened 11 days prior with minimal activity, then received five inbound transfers from accounts previously flagged in unrelated fraud cases.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-7719",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "AC-1102*",
        "role": "node",
        "x": 90,
        "y": 30
      },
      {
        "id": "n3",
        "label": "AC-2287*",
        "role": "node",
        "x": 90,
        "y": 90
      },
      {
        "id": "n4",
        "label": "AC-3391*",
        "role": "node",
        "x": 90,
        "y": 150
      },
      {
        "id": "n5",
        "label": "Ext. wallet",
        "role": "destination",
        "x": 350,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "$14,200"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "$9,800"
      },
      {
        "from": "n4",
        "to": "n1",
        "label": "$12,100"
      },
      {
        "from": "n1",
        "to": "n5",
        "label": "$48,900"
      }
    ]
  },
  {
    "id": "FC-2026-0121",
    "typology": "Structuring",
    "entity": "Blue Harbor Imports",
    "acct": "AC-8837",
    "riskScore": 55,
    "status": "Pending SAR",
    "amount": 19850,
    "opened": "2026-06-11",
    "narrative": "Two related entities under common ownership each deposited amounts just under the reporting threshold on the same business day, at the same branch.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-8837",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "AC-8838 (related)",
        "role": "node",
        "x": 100,
        "y": 60
      },
      {
        "id": "n3",
        "label": "Branch 09",
        "role": "node",
        "x": 330,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "shared owner"
      },
      {
        "from": "n1",
        "to": "n3",
        "label": "$9,850"
      }
    ]
  },
  {
    "id": "FC-2026-0118",
    "typology": "Account Takeover",
    "entity": "S. Whitfield",
    "acct": "AC-1156",
    "riskScore": 90,
    "status": "Open",
    "amount": 26700,
    "opened": "2026-06-08",
    "narrative": "SIM-swap detected via carrier alert; email and mailing address changed within minutes, followed by a maxed-out wire to a newly added external beneficiary.",
    "nodes": [
      {
        "id": "n1",
        "label": "AC-1156",
        "role": "subject",
        "x": 210,
        "y": 90
      },
      {
        "id": "n2",
        "label": "SIM swap",
        "role": "flag",
        "x": 90,
        "y": 40
      },
      {
        "id": "n3",
        "label": "Addr. change",
        "role": "flag",
        "x": 90,
        "y": 140
      },
      {
        "id": "n4",
        "label": "New beneficiary",
        "role": "destination",
        "x": 350,
        "y": 90
      }
    ],
    "edges": [
      {
        "from": "n2",
        "to": "n1",
        "label": "carrier alert"
      },
      {
        "from": "n3",
        "to": "n1",
        "label": "+4min"
      },
      {
        "from": "n1",
        "to": "n4",
        "label": "$26,700"
      }
    ]
  }
];

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
