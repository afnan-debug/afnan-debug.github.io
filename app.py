from http.server import BaseHTTPRequestHandler, HTTPServer
import json

def score(event):
    # Defensive, transparent scoring for synthetic events only.
    cyber = 0
    financial = 0
    reasons = []

    if event.get("failed_logins", 0) >= 3:
        cyber += 25; reasons.append("Repeated failed authentication")
    if event.get("new_device"):
        cyber += 25; reasons.append("New device")
    if event.get("new_beneficiary"):
        cyber += 15; reasons.append("New beneficiary")
    if event.get("unusual_ip"):
        cyber += 20; reasons.append("Unusual network signal")

    amount = float(event.get("amount", 0))
    typical = max(float(event.get("typical_amount", 1)), 1)
    ratio = amount / typical
    if ratio >= 5:
        financial += 40; reasons.append("Transaction materially exceeds typical amount")
    elif ratio >= 2:
        financial += 20; reasons.append("Transaction exceeds typical amount")
    if event.get("rapid_transfer_after_login"):
        financial += 25; reasons.append("Transfer follows login unusually quickly")
    if event.get("high_risk_beneficiary"):
        financial += 25; reasons.append("Beneficiary risk indicator")

    cyber = min(cyber, 100)
    financial = min(financial, 100)
    combined = round(cyber * .45 + financial * .55)
    decision = "ESCALATE" if combined >= 80 else "MONITOR" if combined >= 60 else "REVIEW"
    return {"cyber_score": cyber, "financial_score": financial,
            "combined_score": combined, "decision": decision, "reasons": reasons}

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/score":
            self.send_response(404); self.end_headers(); return
        length = int(self.headers.get("Content-Length", 0))
        event = json.loads(self.rfile.read(length))
        result = score(event)
        body = json.dumps(result).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

if __name__ == "__main__":
    print("Synthetic defensive risk API: http://localhost:8000")
    HTTPServer(("localhost", 8000), Handler).serve_forever()
