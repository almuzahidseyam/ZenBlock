document.addEventListener('DOMContentLoaded', () => {
    const toggleAds = document.getElementById('toggleAds');
    const toggleNsfw = document.getElementById('toggleNsfw');

    // Load initial states
    chrome.storage.local.get(['adsEnabled', 'nsfwEnabled'], (res) => {
        toggleAds.checked = res.adsEnabled !== false;   // on unless turned off
        // The adult filter is a second 30,000-rule set and Chrome guarantees
        // 30,000 in total, so it is off until asked for -- see background.js.
        toggleNsfw.checked = res.nsfwEnabled === true;
    });

    // Event listeners
    toggleAds.addEventListener('change', (e) => {
        chrome.storage.local.set({ adsEnabled: e.target.checked });
    });

    toggleNsfw.addEventListener('change', (e) => {
        chrome.storage.local.set({ nsfwEnabled: e.target.checked });
    });

    // If Chrome refused a ruleset, the worker rolls the setting back and leaves
    // the reason here. Show it rather than let the toggle spring back unexplained.
    chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName !== 'local') return;
        if (changes.nsfwEnabled) toggleNsfw.checked = changes.nsfwEnabled.newValue === true;
        if (changes.adsEnabled) toggleAds.checked = changes.adsEnabled.newValue !== false;
        const note = document.getElementById('rulesetError');
        if (note && changes.lastRulesetError) {
            note.textContent = changes.lastRulesetError.newValue
                ? 'Chrome could not enable that filter: ' + changes.lastRulesetError.newValue
                : '';
        }
    });
});
