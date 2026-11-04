"""Fetch selected place photographs with file-level Commons credits. Run manually."""
import concurrent.futures,json,urllib.request,urllib.parse,io,time
from pathlib import Path
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
places={'ontario':'Point_Pelee_National_Park','monarch-forest':'Monarch_Butterfly_Biosphere_Reserve','greenland':'Ilulissat','antarctica':'Paradise_Harbour','columbia':'Columbia_River','salmon-river':'Salmon_River_(Idaho)','tambora':'Mount_Tambora','geneva':'Chillon_Castle','coffee-origin':'Ethiopian_montane_forests','haraz':'Haraz_Mountains','titicaca':'Isla_del_Sol','ireland':'Cliffs_of_Moher','tana':'Lake_Tana','nile-delta':'Nile_Delta','florida-straits':'Florida_Keys','western-europe':'Cornwall','thames':'River_Thames','sargasso':'Horseshoe_Bay,_Bermuda','india':'Western_Ghats'}
def get(url):
 req=urllib.request.Request(url,headers={'User-Agent':'GeonautsGuide/1.0 educational geography stories (djcastelino)'})
 time.sleep(2)
 with urllib.request.urlopen(req,timeout=25) as response:return response.read()
def fetch(item):
 key,title=item;data=json.loads(get('https://en.wikipedia.org/api/rest_v1/page/summary/'+title))
 image=data.get('originalimage',{}).get('source') or data.get('thumbnail',{}).get('source')
 if not image:raise ValueError('No photograph for '+key)
 path=urllib.parse.urlparse(image).path.split('/');name=urllib.parse.unquote(path[-2] if '/thumb/' in image else path[-1])
 params={'action':'query','format':'json','titles':'File:'+name,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':1200}
 meta=json.loads(get('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params)))
 info=next(iter(meta['query']['pages'].values()))['imageinfo'][0];m=info['extmetadata']
 credit={k:m.get(k,{}).get('value','') for k in ['Artist','LicenseShortName','LicenseUrl','AttributionRequired']}
 if credit['LicenseShortName'] not in {'Public domain','CC0','CC BY 2.0','CC BY 3.0','CC BY 4.0','CC BY-SA 2.0','CC BY-SA 2.5','CC BY-SA 3.0','CC BY-SA 4.0'}:raise ValueError('Review license for '+key+': '+credit['LicenseShortName'])
 credit['source']=info['descriptionurl'];credit['description']=title.replace('_',' ')
 picture=Image.open(io.BytesIO(get(info.get('thumburl',info['url'])))).convert('RGB');picture.thumbnail((1200,1000));picture.save(ROOT/'public/images/connections'/f'{key}.jpg',quality=84,optimize=True)
 return key,credit
credits=json.loads((ROOT/'src/data/connection-credits.json').read_text())
with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:
 futures={pool.submit(fetch,item):item[0] for item in places.items() if item[0] not in credits}
 for future in concurrent.futures.as_completed(futures):
  try:key,credit=future.result();credits[key]=credit;print(key,credit['LicenseShortName'],flush=True)
  except Exception as error:print('NEEDS REVIEW',futures[future],str(error),flush=True)
(ROOT/'src/data/connection-credits.json').write_text(json.dumps(credits,ensure_ascii=False,indent=2)+'\n')
