<div align="center">
  <img src="icons/icon128.png" width="100" alt="ZenBlock Logo">
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
- 🔞 **NSFW/Adult Filter:** Built-in toggle to block over 30,000 known adult and disturbing websites for safe browsing.
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
