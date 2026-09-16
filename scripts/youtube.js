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
        if (!isNaN(video.duration)) {
            video.currentTime = video.duration;
        }
    }
};

// Run periodically to catch dynamically loaded ads without heavy DOM observation overhead
setInterval(skipAds, 500);
