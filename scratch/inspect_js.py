import json
import os

report_path = "d:/kidalookout/lighthouse-report.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    audits = data.get("audits", {})
    
    print("BOOTUP TIME:")
    print(json.dumps(audits.get("bootup-time", {}), indent=2))
    
    print("\nUNUSED JAVASCRIPT:")
    print(json.dumps(audits.get("unused-javascript", {}), indent=2))
    
    print("\nMAIN THREAD WORK BREAKDOWN:")
    print(json.dumps(audits.get("mainthread-work-breakdown", {}), indent=2))
else:
    print("Report not found")
