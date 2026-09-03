import fitz
import os
import json
import re

pdf_dir = r"C:\Users\fadil\OneDrive\Desktop\Personal\Resume\Original\Certifications"
out_dir = r"C:\Users\fadil\OneDrive\Desktop\Fadil_Portfolio\public\images\certificates"

certs = []

for idx, file in enumerate(os.listdir(pdf_dir)):
    if not file.endswith(".pdf"):
        continue
    path = os.path.join(pdf_dir, file)
    name = file[:-4]
    doc = fitz.open(path)
    page = doc[0]
    
    # Extract link via annotations
    links = page.get_links()
    link_url = ""
    for link in links:
        if link.get("uri"):
            link_url = link["uri"]
            break
            
    # If not found via annotations, fallback to text regex for coursera
    if not link_url:
        text = page.get_text()
        urls = re.findall(r'coursera\.org/verify/[A-Za-z0-9]+', text)
        if urls:
            link_url = "https://" + urls[0]
            
    img_name = f"{name.replace(' ', '_')}.png"
            
    certs.append({
        "id": idx + 1,
        "name": name,
        "image": f"/images/certificates/{img_name}",
        "link": link_url,
        "desc": f"Verified certification for {name}."
    })

print(json.dumps(certs, indent=2))
