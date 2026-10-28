"""Shared list of the labelled illustrative reconstructions (AI-generated, October 2026) and helpers to embed them."""
import base64, os, html
esc=html.escape
AI_NOTE='AI-generated illustrative reconstruction, not a photograph.'
# file, width, height, title, caption
ILLUS=[
 ('01.jpg',1400,792,'Opon, Mactan Island, around 1900.','A fishing and boat-building town of coral shore, nipa houses on stilts and outrigger bancas, as it would have looked while Fernando Umpad Muñasque (1857–1940) and Saturnina Valiente were raising their family. Drawn from the written descriptions and 1900s photographs listed in §7.1.'),
 ('02.jpg',1400,792,'The old church of Opon, 1930s.','Nuestra Señora Virgen de la Regla seen from the pier where the Cebu ferry landed. The 1744 coral-stone church was pulled down and rebuilt in 1960, so this is the church that generations 2–4 of the family knew.'),
 ('03.jpg',1400,792,'Sarangani Bay, February–March 1939.','Settlers of the National Land Settlement Administration landing at Dadiangas (now General Santos). The first group arrived on 27 February 1939 (S40); Sulpicio Y. Muñasque\'s recorded arrival from Lala, Lanao del Norte, followed on 7 March 1939 (S29).'),
 ('04.jpg',1400,792,'A homestead on Panguil Bay, Lanao del Norte, 1930s.','The Lanao del Norte shore is where the largest cluster of the family in the branch sheets (17 people) lives today, and where Sulpicio Y. Muñasque was based at Lala before he left for Dadiangas in 1939.'),
 ('05.jpg',1400,792,'Koronadal Valley settlement, 1940s.','New settler villages under Mount Matutum. Polomolok, Koronadal, Tupi and Surallah, where several branches were recorded living in 2014–2020, grew out of this government land-settlement programme.'),
]
HERO=('06.jpg',1400,600,'Decorative header: an old acacia on a coral-sand shore in the central Philippines.','')
CREDIT=('About these pictures. The six illustrations were generated in October 2026 with the GPT Image model through Higgsfield, from prompts written from the sources in §7.1 (Opon and Mindanao photographs of 1900–1945, the 1939 settlement record, the branch-sheet residences). '
        'They are artists\' impressions of places and periods, not photographs, and no real family member is shown. Treat them as scene-setting, never as evidence.')

def data_uri(path):
    return 'data:image/jpeg;base64,'+base64.b64encode(open(path,'rb').read()).decode()

def figure(item, src, cls='illus', lazy=True):
    f,w,h,title,cap=item
    return (f'<figure class="{cls}"><img src="{src}" alt="{esc(title)} {AI_NOTE}" width="{w}" height="{h}"{" loading=\"lazy\"" if lazy else ""}>'
            f'<figcaption><b>{esc(title)}</b> {esc(cap)} <em class="ai">{AI_NOTE}</em></figcaption></figure>')

def gallery(srcdir, cls='illus', lazy=True):
    return ('<div class="illus-grid">'+''.join(figure(it, f'{srcdir}/{it[0]}', cls, lazy) for it in ILLUS)+'</div>'
            f'<p class="illus-credit">{esc(CREDIT)}</p>')
