// AppSumo OAuth redirect: the buyer lands here after "Activate now" on AppSumo.
// We swap the one-time ?code for the buyer's AppSumo license key and show it with
// the steps to activate it inside G-Stack Studio.
//
// Vercel > Settings > Environment Variables:
//   APPSUMO_CLIENT_ID, APPSUMO_CLIENT_SECRET   AppSumo Partner Portal > OAuth
//   APPSUMO_REDIRECT_URI                        exactly the URL saved in AppSumo, e.g.
//                                               https://gstackstudio.vercel.app/api/appsumo-redirect

const SITE = "https://gstackstudio.vercel.app/";
const YOUTUBE = "https://www.youtube.com/@gstackstudio";
const WHATSAPP = "https://wa.me/923028981089";

function esc(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function page(title, inner) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | G-Stack Studio</title>
<style>
:root{--bg:#09090b;--card:#18181b;--line:#27272a;--ink:#fafafa;--mut:#a1a1aa;--acc:#38bdf8;--btn:#0284c7}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 system-ui,Segoe UI,sans-serif;display:grid;place-items:center;min-height:100vh;padding:24px 16px}
.card{max-width:560px;width:100%;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:28px}
h1{margin:0 0 6px;font-size:24px}p{color:var(--mut);margin:0 0 14px}
.key{display:flex;gap:8px;align-items:center;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin:8px 0 18px;font:600 15px ui-monospace,Consolas,monospace;overflow-wrap:anywhere}
.key span{flex:1;min-width:0}button,.btn{background:var(--btn);color:#fff;border:0;border-radius:8px;padding:8px 14px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-block}
ol{color:var(--ink);padding-left:20px;margin:0 0 18px}li{margin:4px 0}a{color:var(--acc)}
.row{display:flex;gap:10px;flex-wrap:wrap}.ghost{background:transparent;border:1px solid var(--line)}
</style></head><body><main class="card">${inner}</main></body></html>`;
}

module.exports = async (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const code = (req.query && req.query.code) || "";
  if (!code) {
    // 200 so AppSumo's "Validate" check on this URL passes
    res.status(200).send(page("Missing code", `<h1>Something went wrong</h1>
<p>Open AppSumo, go to <b>My Products</b> and click <b>Activate</b> on G-Stack Studio again.</p>`));
    return;
  }
  try {
    const t = await fetch("https://appsumo.com/openid/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.APPSUMO_CLIENT_ID,
        client_secret: process.env.APPSUMO_CLIENT_SECRET,
        code,
        redirect_uri: process.env.APPSUMO_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });
    const tok = await t.json();
    if (!tok.access_token) throw new Error(tok.error || "no token");
    const l = await fetch("https://appsumo.com/openid/license_key/?access_token=" + encodeURIComponent(tok.access_token));
    const lic = await l.json();
    if (!lic.license_key) throw new Error("no license");
    const key = esc(lic.license_key);
    res.status(200).send(page("Your license", `<h1>🎉 Welcome to G-Stack Studio</h1>
<p>Here is your AppSumo license key. Keep it safe, you'll need it to activate the app.</p>
<div class="key"><span id="k">${key}</span><button onclick="navigator.clipboard.writeText(document.getElementById('k').textContent);this.textContent='Copied ✓'">Copy</button></div>
<ol>
<li>Download and install G-Stack Studio (Windows 10 / 11).</li>
<li>Open the app. In the activation window type <b>your email</b> at the top.</li>
<li>Paste the key above into the <b>AppSumo code</b> box (under "or redeem an AppSumo code") and click <b>Redeem</b>.</li>
</ol>
<div class="row"><a class="btn" href="${SITE}">Download G-Stack Studio</a>
<a class="btn ghost" href="${YOUTUBE}">Setup videos</a>
<a class="btn ghost" href="${WHATSAPP}">Help on WhatsApp</a></div>`));
  } catch (e) {
    res.status(502).send(page("Try again", `<h1>We couldn't fetch your key</h1>
<p>The link from AppSumo can only be used once. Go back to AppSumo, open <b>My Products</b> and click <b>Activate</b> again.
If it still fails, message us on <a href="${WHATSAPP}">WhatsApp</a>.</p>`));
  }
};
