
const knowledge = {

"aml":
"I have over four years of AML and Fraud Investigation experience including transaction monitoring, KYC/KYB reviews, customer due diligence, fraud investigations, and identifying suspicious financial activity.",

"fraud":
"I enjoy identifying fraud patterns, reviewing alerts, and making risk-based decisions to protect customers and financial institutions.",

"resume":
"Download my resume from the About Me section or contact me directly at Afnan.7@hotmail.com.",

"investigation":
"My investigation process starts with reviewing customer profiles, analyzing transaction behavior, identifying anomalies, assessing risk factors, and documenting findings before escalation.",

"crypto":
"I continuously study cryptocurrency-related financial crime and emerging AML risks involving digital assets.",

"contact":
"You can reach me at Afnan.7@hotmail.com or through LinkedIn."

};

function askAI(){

let question =
document.getElementById("userInput").value.toLowerCase();

let answer =
"I'm still learning. Try asking about AML, fraud, resume, investigation, crypto, or contact information.";

for(let key in knowledge){

if(question.includes(key)){
answer = knowledge[key];
break;
}

}

document.getElementById("chatWindow").innerHTML +=

`<div class="user"><b>You:</b> ${question}</div>

<div class="bot"><b>AI:</b> ${answer}</div><hr>`;

document.getElementById("userInput").value="";

}
function investigate(){

document.getElementById("result").innerHTML = `

<h3>Investigation Steps</h3>

✅ Review Customer KYC

<br>

✅ Verify Source of Funds

<br>

✅ Compare Historical Activity

<br>

✅ Review Beneficiary

<br>

✅ Look for Structuring

<br>

✅ Determine Whether SAR Escalation Is Required

<br><br>

<b>Risk Rating: HIGH</b>

`;

}
