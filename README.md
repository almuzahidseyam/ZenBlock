<div align="center">
  <img src="logo.png" width="150" alt="ZenBlock Logo">
  <h1>ZenBlock: Ultra-Light Adblock & Safety</h1>
  <p><strong>A lightning-fast, highly effective Manifest V3 Chrome Extension to block ads, YouTube videos ads, and NSFW content.</strong></p>
  
  [![Manifest V3](https://img.shields.io/badge/Manifest-V3-success?style=for-the-badge&logo=googlechrome)](https://developer.chrome.com/docs/extensions/mv3/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
  [![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)]()
</div>

<br/>

## 🚀 About ZenBlock
Inspired by the philosophy of *uBlock Origin Lite*, **ZenBlock** is built entirely on the modern `declarativeNetRequest` API. Unlike older adblockers that intercept and evaluate every single network request using JavaScript (which slows down the browser and consumes RAM), ZenBlock feeds thousands of blocking rules directly into Chrome's C++ network engine. 

The result? **Zero network bottleneck, lightning-fast page loads, and highly effective ad blocking.**

### ✨ Features
- ⚡ **Ultra-Lightweight:** Uses native browser engines for blocking. Minimal CPU and RAM footprint.
- 🚫 **Comprehensive Ad-Blocking:** Includes over 30,000 rules to block ads, trackers, and telemetry.
- 🎥 **YouTube Ad Skipper:** Custom lightweight script to automatically skip video ads and hide banner overlays instantly.
- 🔞 **NSFW/Adult Filter:** An optional toggle covering 30,000 adult sites. It ships **off** by
  design: Chrome guarantees an extension 30,000 enabled static rules *in total*, the ad list
  already uses that whole allowance, and enabling both at install meant the second list could
  silently fail to load while its toggle still read as on. Switch it on in the popup — if Chrome
  refuses, ZenBlock now says so instead of pretending.
- 🎨 **Premium UI:** A beautifully designed, dark-themed popup interface with simple toggles.

## 📥 Installation Guide

Since ZenBlock is currently in its open-source release, you can easily install it locally in Developer Mode.

1. **Download the Extension:**
   - Clone this repository: `git clone https://github.com/almuzahidseyam/ZenBlock.git`
   - Or download the ZIP file from the [Releases](#) tab and extract it.
2. **Open Chrome Extensions Page:**
   - Open Google Chrome and navigate to `chrome://extensions/`
3. **Enable Developer Mode:**
   - Toggle the **Developer mode** switch in the top right corner.
4. **Load the Extension:**
   - Click **Load unpacked** in the top left corner.
   - Select the extracted `ZenBlock` folder.
5. **Pin & Enjoy!**
   - Click the puzzle icon in Chrome and pin ZenBlock. Open the popup to toggle settings.

## 🛠️ How It Works (Technical details)
ZenBlock leverages **Manifest V3**'s `declarativeNetRequest` to load massive JSON rulesets (derived from popular blocklists like StevenBlack's hosts). 

When you toggle a setting in the UI:
- Background service workers dynamically enable or disable the static rulesets (`updateEnabledRulesets`).
- YouTube ad-skipping relies on a highly efficient `document_start` interval script rather than heavy `MutationObservers`, ensuring the DOM isn't bottlenecked during heavy video rendering.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check [issues page](https://github.com/almuzahidseyam/ZenBlock/issues).

## 📄 License
This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 🧪 How to Test ZenBlock
To see ZenBlock in action and verify its effectiveness, try visiting these testing platforms and heavy-ad websites:

### 1. Dedicated Ad-Block Testers
* **[CanYouBlockIt.com](https://canyoublockit.com/)**: Click on "Extreme Test" or "Simple Test". If ZenBlock is active, you will not see any banner or popup ads.
* **[AdBlock-Tester.com](https://adblock-tester.com/)**: This site scans your browser and gives a score out of 100 based on how powerful your adblocker is. (ZenBlock scores highly by blocking complex trackers!)

### 2. Popular Heavy-Ad Sites
* **[Speedtest.net](https://www.speedtest.net/)**: Normally, this site is filled with massive banner ads on both sides. With ZenBlock turned on, the interface becomes much cleaner.
* **News Portals (e.g., Prothom Alo)**: Standard news portals rely heavily on Google banner ads. Visit them to see a clean, distraction-free reading experience.

### 3. YouTube Video Ad Test
Play any popular music video or lengthy YouTube video. ZenBlock's special lightweight script will automatically skip video ads the moment they appear and hide annoying banner overlays.

### 4. NSFW / Adult Filter Test
Open the ZenBlock popup and switch the **"Block NSFW Content"** toggle ON (it is off by default —
see the feature note above). Try visiting any known adult website. ZenBlock will instantly terminate the connection and block the site from loading!
