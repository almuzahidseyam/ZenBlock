// Lightweight YouTube Ad Skipper
const skipAds = () => {
    // Hide overlay ads and banner ads
    const adElements = document.querySelectorAll('.ad-showing, .ad-interrupting, #masthead-ad, .ytd-video-masthead-ad-v3-renderer, .ytd-in-feed-ad-layout-renderer, .ytp-ad-overlay-container');
    adElements.forEach(el => {
        el.style.display = 'none';
    });

    // Automatically click the "Skip Ad" button if it appears
    const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-skip-ad-button');
    if (skipBtn) {
        skipBtn.click();
    }

    // Fast-forward unskippable video ads
    const video = document.querySelector('video');
    const adPreview = document.querySelector('.ytp-ad-text');
    if (video && document.querySelector('.ad-showing')) {
        // On a live stream duration is Infinity, which is not NaN -- the old
        // guard let it through and seeking to Infinity breaks the player.
        if (Number.isFinite(video.duration) && video.duration > 0) {
            video.currentTime = video.duration;
        }
    }
};

// Only poll while a YouTube tab is actually visible. The previous version ran
// every 500ms for the life of every YouTube tab, including ones left in the
// background for hours, which is hard to square with "minimal CPU".
let timer = null;
const startPolling = () => { if (timer === null) timer = setInterval(skipAds, 500); };
const stopPolling = () => { if (timer !== null) { clearInterval(timer); timer = null; } };

document.addEventListener('visibilitychange', () => {
    document.hidden ? stopPolling() : startPolling();
});
if (!document.hidden) startPolling();
