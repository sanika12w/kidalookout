import json
import os

report_path = "d:/kidalookout/lighthouse-report.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    audits = data.get("audits", {})
    keys = [k for k in audits.keys() if "paint" in k or "lcp" in k or "element" in k]
    print("Found keys:", keys)
    
    for k in keys:
        display = audits[k].get("displayValue")
        if display:
            print(f"  {k}: {display}")
        elif audits[k].get("score") is not None:
            print(f"  {k}: score={audits[k].get('score')}")
        else:
            # Print a snippet of details
            det = audits[k].get("details")
            if det:
                print(f"  {k}: details present (keys: {list(det.keys()) if isinstance(det, dict) else 'non-dict'})")
            else:
                print(f"  {k}: no display/score/details")
else:
    print("Report not found")
