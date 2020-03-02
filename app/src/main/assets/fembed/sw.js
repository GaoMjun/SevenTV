//addEventListener('install', e => {
//    console.log("sw install");
//});

addEventListener('fetch', e => {
    e.respondWith(getResponse(e.request))
});

async function getResponse(req) {
    const url = new URL(req.url)

//    if (url.host === 'fvs.io') {
//        const r = await fetch('getRedirectLink?url='+req.url);
//        const link = await r.text();
//
//        return await fetch(link, req);
//    }

    return await fetch(req)
}