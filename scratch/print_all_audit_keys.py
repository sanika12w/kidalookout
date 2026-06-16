import json
import os

report_path = "d:/kidalookout/lighthouse-report.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    audits = data.get("audits", {})
    keys = sorted(list(audits.keys()))
    print("TOTAL AUDITS:", len(keys))
    # print all keys in chunks
    for i in range(0, len(keys), 30):
        print(", ".join(keys[i:i+30]))
else:
    print("Report not found")
