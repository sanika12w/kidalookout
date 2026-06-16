import json
import os

report_path = "d:/kidalookout/lighthouse-report-prod.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    audits = data.get("audits", {})
    
    print("LCP BREAKDOWN INSIGHT:")
    print(json.dumps(audits.get("lcp-breakdown-insight", {}), indent=2))
    
    print("\nLCP DISCOVERY INSIGHT:")
    print(json.dumps(audits.get("lcp-discovery-insight", {}), indent=2))
    
    print("\nMETRICS:")
    print(json.dumps(audits.get("metrics", {}), indent=2))
else:
    print("Report not found")
