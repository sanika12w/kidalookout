import json
import os

report_path = "d:/kidalookout/lighthouse-report.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    audits = data.get("audits", {})
    
    print("RENDER BLOCKING INSIGHT:")
    print(json.dumps(audits.get("render-blocking-insight", {}), indent=2))
    
    print("\nFONT DISPLAY INSIGHT:")
    print(json.dumps(audits.get("font-display-insight", {}), indent=2))
    
    print("\nDIAGNOSTICS:")
    print(json.dumps(audits.get("diagnostics", {}), indent=2))
else:
    print("Report not found")
