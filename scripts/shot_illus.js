const { chromium } = require('playwright'); const path=require('path');
(async()=>{ const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:1200,height:900}});
  await pg.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'load'}); await pg.waitForTimeout(800);
  await pg.screenshot({path:'out/print/shot_hero.png'});
  const el=await pg.$('.illus-grid'); await el.scrollIntoViewIfNeeded(); await pg.waitForTimeout(800);
  await el.screenshot({path:'out/print/shot_gallery.png'});
  const m=await pg.setViewportSize({width:390,height:844}); await pg.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'load'}); await pg.waitForTimeout(500);
  await pg.screenshot({path:'out/print/shot_hero_phone.png'});
  await b.close(); })();
