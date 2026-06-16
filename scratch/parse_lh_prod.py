import json
import os

report_path = "d:/kidalookout/lighthouse-report-prod.json"
if os.path.exists(report_path):
    with open(report_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    categories = data.get("categories", {})
    audits = data.get("audits", {})
    
    print("PRODUCTION LIGHTHOUSE CATEGORIES:")
    for cat_id, cat_data in categories.items():
        print(f"  {cat_data.get('title')}: {cat_data.get('score') * 100:.1f}")
        
    print("\nKEY METRICS:")
    metrics = [
        ("first-contentful-paint", "First Contentful Paint (FCP)"),
        ("largest-contentful-paint", "Largest Contentful Paint (LCP)"),
        ("total-blocking-time", "Total Blocking Time (TBT)"),
        ("cumulative-layout-shift", "Cumulative Layout Shift (CLS)"),
        ("speed-index", "Speed Index"),
        ("interactive", "Time to Interactive (TTI)")
    ]
    for audit_id, label in metrics:
        audit = audits.get(audit_id, {})
        display_val = audit.get("displayValue", "N/A")
        score = audit.get("score")
        score_val = f"{score * 100:.1f}" if score is not None else "N/A"
        print(f"  {label}: {display_val} (Score: {score_val})")
else:
    print(f"Report not found at {report_path}")
