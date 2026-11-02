// AppSumo Licensing webhook -> G-Stack license Sheet.
// AppSumo POSTs here on purchase / activate / upgrade / downgrade / deactivate.
// Every real event is double-checked against AppSumo's own API before it reaches the
// Sheet, so a forged POST to this URL cannot create a license.
//
// Vercel > Settings > Environment Variables:
//   APPSUMO_API_KEY      AppSumo Partner Portal > API key (private_key)
//   GS_SCRIPT_URL        your Google Apps Script web-app URL (the one the app uses)
//   GS_APPSUMO_SECRET    same text as APPSUMO_HOOK_SECRET in the Sheet script

const API = "https://api.licensing.appsumo.com/v2/licenses/";

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => { data += c; });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

async function lookup(key) {
  const r = await fetch(API + encodeURIComponent(key), {
    headers: { "X-AppSumo-Licensing-Key": process.env.APPSUMO_API_KEY || "" },
  });
  if (!r.ok) return null;
  return r.json();
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "POST only" });
    return;
  }
  let body = {};
  try { body = JSON.parse(await readBody(req) || "{}"); } catch (e) { body = {}; }
  const event = String(body.event || "");

  // AppSumo's "Validate" button sends test events: just answer success
  if (body.test === true || body.test === "true") {
    res.status(200).json({ success: true, event });
    return;
  }
  if (!body.license_key || !event) {
    res.status(400).json({ success: false, event, message: "license_key and event required" });
    return;
  }
  // add-ons are not sold yet: acknowledge and ignore
  if (body.parent_license_key) {
    res.status(200).json({ success: true, event });
    return;
  }

  // trust AppSumo's API, not the POST body
  const lic = await lookup(body.license_key);
  if (!lic || !lic.license_key) {
    res.status(401).json({ success: false, event, message: "License not found at AppSumo" });
    return;
  }

  const payload = {
    license_key: lic.license_key,
    event,
    status: lic.status || body.license_status || "",
    tier: lic.tier != null ? lic.tier : body.tier,
    prev_license_key: body.prev_license_key || "",
    reason: (body.extra && body.extra.reason) || "",
  };
  const url = process.env.GS_SCRIPT_URL + "?action=appsumo_event&secret=" +
    encodeURIComponent(process.env.GS_APPSUMO_SECRET || "");
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    const out = await r.json().catch(() => ({}));
    if (!out.success) {
      res.status(500).json({ success: false, event, message: out.message || "Sheet error" });
      return;
    }
  } catch (e) {
    res.status(500).json({ success: false, event, message: "Sheet unreachable" });
    return;
  }
  res.status(200).json({ success: true, event });
};
