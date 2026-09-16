// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        adsEnabled: true,
        nsfwEnabled: true
    });
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.adsEnabled !== undefined) {
        const isEnabled = changes.adsEnabled.newValue;
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: isEnabled ? ["ads_tracking"] : [],
            disableRulesetIds: isEnabled ? [] : ["ads_tracking"]
        });
    }
    if (changes.nsfwEnabled !== undefined) {
        const isEnabled = changes.nsfwEnabled.newValue;
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: isEnabled ? ["adult_nsfw"] : [],
            disableRulesetIds: isEnabled ? [] : ["adult_nsfw"]
        });
    }
});
