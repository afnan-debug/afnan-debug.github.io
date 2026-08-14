# Cyber Financial Crime Defense Lab

An educational, synthetic-data lab demonstrating how cybersecurity telemetry can strengthen financial-crime investigations.

## What this demonstrates
- Account-takeover detection
- Suspicious authentication and device signals
- Transaction anomaly detection
- Beneficiary risk
- Combined cyber + financial-crime risk scoring
- Investigator triage and escalation

**Safety:** All examples use synthetic data. This project is defensive and does not provide instructions for compromising real systems.

## Run locally
Open `index.html` in a browser. The dashboard is fully client-side.

Optional Python API:
```bash
cd python
python app.py
```

The Python service exposes a small defensive risk-scoring API using only synthetic events.
