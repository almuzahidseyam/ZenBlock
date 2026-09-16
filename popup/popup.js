document.addEventListener('DOMContentLoaded', () => {
    const toggleAds = document.getElementById('toggleAds');
    const toggleNsfw = document.getElementById('toggleNsfw');

    // Load initial states
    chrome.storage.local.get(['adsEnabled', 'nsfwEnabled'], (res) => {
        toggleAds.checked = res.adsEnabled !== false; // Default true
        toggleNsfw.checked = res.nsfwEnabled !== false; // Default true
    });

    // Event listeners
    toggleAds.addEventListener('change', (e) => {
        chrome.storage.local.set({ adsEnabled: e.target.checked });
    });

    toggleNsfw.addEventListener('change', (e) => {
        chrome.storage.local.set({ nsfwEnabled: e.target.checked });
    });
});
