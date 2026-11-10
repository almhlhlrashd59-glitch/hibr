const V="hibr-1794353431";
const FILES=["./FoxitDingbats.pfb", "./FoxitFixed.pfb", "./FoxitFixedBold.pfb", "./FoxitFixedBoldItalic.pfb", "./FoxitFixedItalic.pfb", "./FoxitSans.pfb", "./FoxitSansBold.pfb", "./FoxitSansBoldItalic.pfb", "./FoxitSansItalic.pfb", "./FoxitSerif.pfb", "./FoxitSerifBold.pfb", "./FoxitSerifBoldItalic.pfb", "./FoxitSerifItalic.pfb", "./FoxitSymbol.pfb", "./LICENSE_FOXIT", "./LICENSE_LIBERATION", "./LiberationSans-Bold.ttf", "./LiberationSans-BoldItalic.ttf", "./LiberationSans-Italic.ttf", "./LiberationSans-Regular.ttf", "./apple-touch-icon.png", "./icon-192.png", "./icon-512.png", "./index.html", "./jspdf.umd.min.js", "./manifest.json", "./maskable-512.png", "./pdf.min.js", "./pdf.worker.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const u=new URL(r.url);if(u.origin!==location.origin)return;
  const nav=r.mode==="navigate"||u.pathname.endsWith("/index.html")||u.pathname.endsWith("/");
  if(nav){e.respondWith(fetch(r).then(x=>{const cp=x.clone();caches.open(V).then(c=>c.put("./index.html",cp));return x}).catch(()=>caches.match("./index.html")));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r)));
});
