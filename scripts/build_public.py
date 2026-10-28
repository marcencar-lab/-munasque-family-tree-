import re,sys,os,shutil,glob
S=sys.argv[1]
page=open(f'{S}/out/site/munasque-lineage-linked.html',encoding='utf-8').read()
strip='''<section style="max-width:1100px;margin:12px auto 0;display:flex;gap:10px;flex-wrap:wrap;font-size:14px">
<a href="Munasque_family_report.pdf" style="border:1px solid var(--line);border-radius:4px;padding:6px 10px;text-decoration:none">Printable PDF</a>
<a href="data/valiente_munasque.ged" style="border:1px solid var(--line);border-radius:4px;padding:6px 10px;text-decoration:none">GEDCOM file</a>
<a href="data/people.csv" style="border:1px solid var(--line);border-radius:4px;padding:6px 10px;text-decoration:none">People register (CSV)</a>
<a href="data/sources.csv" style="border:1px solid var(--line);border-radius:4px;padding:6px 10px;text-decoration:none">Source list (CSV)</a>
<a href="charts/" style="border:1px solid var(--line);border-radius:4px;padding:6px 10px;text-decoration:none">Chart files (SVG)</a>
</section>
'''
page=page.replace('<nav class="sec"',strip+'<nav class="sec"',1)
html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="robots" content="noindex,nofollow"><style>:root{color-scheme:light dark}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>'+page+'</body></html>'
os.makedirs(f'{S}/public/charts',exist_ok=True); os.makedirs(f'{S}/public/data',exist_ok=True)
open(f'{S}/public/index.html','w',encoding='utf-8').write(html)
for f in glob.glob(f'{S}/out/charts/*.svg'): shutil.copy(f,f'{S}/public/charts/')
for f in ['people.csv','relationships.csv','sources.csv','research_facts.csv','discrepancies.csv']: shutil.copy(f'{S}/out/{f}',f'{S}/public/data/')
shutil.copy(f'{S}/out/valiente_munasque.ged',f'{S}/public/data/'); shutil.copy(f'{S}/out/data.json',f'{S}/public/data/')
shutil.copy(f'{S}/out/print/Munasque_family_report.pdf',f'{S}/public/'); shutil.copy(f'{S}/out/print/report_print.html',f'{S}/public/print.html')
os.makedirs(f'{S}/public/images',exist_ok=True)
for f in glob.glob(f'{S}/out/images/*.jpg'): shutil.copy(f,f'{S}/public/images/')
print('public site built')
