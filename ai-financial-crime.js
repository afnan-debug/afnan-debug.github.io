const transactions = [

  {
    date: "07/21/2026",
    type: "Incoming",
    counterparty: "New Account A",
    amount: "$18,500"
  },

  {
    date: "07/23/2026",
    type: "Incoming",
    counterparty: "New Account B",
    amount: "$12,900"
  },

  {
    date: "07/25/2026",
    type: "Outgoing",
    counterparty: "New Account C",
    amount: "$9,700"
  },

  {
    date: "07/27/2026",
    type: "Incoming",
    counterparty: "New Account D",
    amount: "$21,300"
  },

  {
    date: "07/29/2026",
    type: "Outgoing",
    counterparty: "External Beneficiary",
    amount: "$16,800"
  },

  {
    date: "08/02/2026",
    type: "Incoming",
    counterparty: "New Account E",
    amount: "$8,230"
  }

];


function startCase() {

  const caseSection = document.getElementById("case");

  caseSection.classList.remove("hidden");

  loadTransactions();

  caseSection.scrollIntoView({
    behavior: "smooth"
  });

}


function loadTransactions() {

  const container =
    document.getElementById("transactions");

  container.innerHTML = "";

  transactions.forEach(tx => {

    const row = document.createElement("div");

    row.className = "transaction";

    row.innerHTML = `

      <div>
        <strong>${tx.date}</strong>
      </div>

      <div>
        ${tx.type} → ${tx.counterparty}
      </div>

      <div class="amount">
        ${tx.amount}
      </div>

    `;

    container.appendChild(row);

  });

}


function runAI() {

  const output =
    document.getElementById("aiOutput");

  output.classList.remove("hidden");

  output.innerHTML = `

    <h3>AI-Assisted Investigative Assessment</h3>

    <p>
      <strong>Behavioral anomaly:</strong>
      The customer's transaction volume has materially increased
      compared with the historical baseline.
    </p>

    <p>
      <strong>Relationship anomaly:</strong>
      Multiple newly observed counterparties appear within a
      relatively short period.
    </p>

    <p>
      <strong>Identity-risk indicator:</strong>
      Synthetic identity and manipulated-verification indicators
      require additional human validation.
    </p>

    <p>
      <strong>Network concern:</strong>
      Transaction relationships should be reviewed collectively
      rather than evaluated as isolated events.
    </p>

    <hr>

    <p>
      <strong>AI recommendation:</strong>
      Escalate the case for enhanced investigation and independently
      validate the underlying evidence.
    </p>

    <p>
      <em>
      AI output represents an investigative lead, not a final
      determination.
      </em>
    </p>

  `;

}


function decision(choice) {

  const output =
    document.getElementById("decisionOutput");

  if (choice === "close") {

    output.innerHTML = `
      ❌ <strong>Investigator Assessment:</strong>
      Closing the alert would not adequately address the
      combination of behavioral, network and identity-risk indicators.
    `;

    output.style.background = "#35151a";

  }


  if (choice === "monitor") {

    output.innerHTML = `
      ⚠️ <strong>Investigator Assessment:</strong>
      Continued monitoring could be appropriate in some situations,
      but the current combination of indicators supports deeper review.
    `;

    output.style.background = "#352a10";

  }


  if (choice === "escalate") {

    output.innerHTML = `
      ✅ <strong>Investigator Assessment:</strong>
      Strong decision. The combined indicators justify enhanced
      investigation and independent validation of the AI-generated leads.
    `;

    output.style.background = "#102f25";

  }

}
