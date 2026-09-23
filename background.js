// ZenBlock -- background service worker.
//
// Chrome guarantees an extension 30,000 enabled static declarativeNetRequest
// rules. Above that it draws from a pool shared with every other installed
// extension, and when that pool is short the request simply fails. ads.json and
// nsfw.json are 30,000 rules each, so the two together are twice the guarantee:
// shipping both enabled in the manifest meant the second one could silently not
// load, with the popup still showing its toggle switched on.
//
// So adult_nsfw is declared disabled and enabled on request, and -- the part
// that was missing -- the result is checked. If Chrome refuses, the toggle is
// put back rather than left lying about what is running.
const RULESETS = { adsEnabled: "ads_tracking", nsfwEnabled: "adult_nsfw" };

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ adsEnabled: true, nsfwEnabled: false, lastRulesetError: null });
});

async function applyRuleset(key, enabled) {
  const id = RULESETS[key];
  try {
    await chrome.declarativeNetRequest.updateEnabledRulesets(
      enabled ? { enableRulesetIds: [id] } : { disableRulesetIds: [id] },
    );
    await chrome.storage.local.set({ lastRulesetError: null });
  } catch (error) {
    // Roll the stored state back so the popup cannot show a filter as on when
    // Chrome never enabled it, and keep the reason for the popup to display.
    await chrome.storage.local.set({
      [key]: !enabled,
      lastRulesetError: `${id}: ${error.message}`,
    });
  }
}

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local") return;
  for (const key of Object.keys(RULESETS)) {
    const change = changes[key];
    // oldValue === newValue happens on the rollback write above; acting on it
    // would put us in a loop.
    if (!change || change.oldValue === change.newValue) continue;
    applyRuleset(key, change.newValue === true);
  }
});
