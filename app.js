const scenarios=[
{ id:"FC-2026-0042", cyber:86, financial:91, events:[
["09:12","Authentication","Five failed logins followed by a successful login from a new device."],
["09:15","Device","Device fingerprint is not associated with the customer's normal profile."],
["09:19","Beneficiary","A new beneficiary is added immediately after authentication."],
["09:24","Transaction","$18,500 wire initiated; historical customer transactions are typically below $2,000."],
["09:25","Correlation","Cyber and transaction signals converge on a high-risk account-takeover pattern."]
], reasons:["Multiple failed authentication attempts","New device after successful authentication","New beneficiary added immediately after login","Transaction is materially outside historical behavior","Cyber and financial signals occur in the same session"], decision:"ESCALATE"},
{ id:"FC-2026-0043", cyber:72, financial:58, events:[
["14:03","Authentication","Login from an unfamiliar device after two failed attempts."],
["14:10","Session","Customer completes normal account activity."],
["14:26","Transaction","$3,200 transfer is above normal but not extreme."],
["14:29","Correlation","Evidence warrants additional verification before escalation."]
], reasons:["Unfamiliar device","Repeated authentication failures","Moderate transaction anomaly","No high-confidence beneficiary anomaly"], decision:"MONITOR"}
];

function setBar(id,value){document.getElementById(id).style.width=value+"%";document.getElementById(id.replace("Bar","Pct")).textContent=value}
function run(){
 const s=scenarios[Math.floor(Math.random()*scenarios.length)];
 const combined=Math.round(s.cyber*.45+s.financial*.55);
 document.getElementById("caseId").textContent=s.id;
 document.getElementById("cyberScore").textContent=s.cyber;
 document.getElementById("financialScore").textContent=s.financial;
 document.getElementById("combinedScore").textContent=combined;
 document.getElementById("riskLabel").textContent=combined>=80?"HIGH RISK":combined>=60?"ELEVATED RISK":"LOWER RISK";
 document.getElementById("decision").textContent=s.decision;
 setBar("cyberBar",s.cyber); setBar("financialBar",s.financial); setBar("combinedBar",combined);
 document.getElementById("timeline").innerHTML=s.events.map(e=>`<div class="event"><time>${e[0]}</time><div><b>${e[1]}</b><span>${e[2]}</span></div></div>`).join("");
 document.getElementById("reasons").innerHTML=s.reasons.map(x=>`<li>${x}</li>`).join("");
 document.getElementById("decisionFeedback").textContent=combined>=80?"Recommended triage: escalate for deeper financial-crime investigation and validate the evidence trail.":"Recommended triage: monitor/request additional evidence before making an escalation decision.";
}
document.getElementById("runScenario").addEventListener("click",run);
document.querySelectorAll(".choice").forEach(btn=>btn.addEventListener("click",()=>{
 document.getElementById("decisionFeedback").textContent=`Investigator selected: ${btn.textContent}. This is a synthetic training decision and does not represent a regulatory conclusion.`;
}));
