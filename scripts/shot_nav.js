const { chromium } = require('playwright'); const path=require('path');
(async()=>{ const b=await chromium.launch(); const pg=await b.newPage({viewport:{width:390,height:844}});
  await pg.goto('file://'+path.resolve(process.argv[2]),{waitUntil:'load'}); await pg.waitForTimeout(500);
  await pg.locator('#explorer').scrollIntoViewIfNeeded(); await pg.waitForTimeout(300); await pg.screenshot({path:'out/print/nav_closed.png'});
  await pg.click('nav.sec .navtoggle'); await pg.waitForTimeout(300); await pg.screenshot({path:'out/print/nav_open.png'});
  await pg.click('nav.sec .links a[href="#s-7-geography-and-migration"]'); await pg.waitForTimeout(400); await pg.screenshot({path:'out/print/nav_after.png'});
  await pg.setViewportSize({width:1200,height:700}); await pg.waitForTimeout(300); await pg.screenshot({path:'out/print/nav_desktop.png'});
  console.log('open?',await pg.evaluate(()=>document.querySelector('nav.sec').classList.contains('open'))); await b.close(); })();
