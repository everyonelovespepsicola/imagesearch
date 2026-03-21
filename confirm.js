// ==UserScript==
// @name         Verify Google Image Size Filter
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds a badge to Google Images if a hidden Megapixel filter is active
// @match        *://*.google.com/search*
// @match        *://*.google.ca/search*
// @match        *://*.google.co.uk/search*
// @match        *://*.google.com.au/search*
// @include      *://*.google.*/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function checkAndAddBadge() {
        // Check if the URL has our specific 'islt' (Image Size Larger Than) parameter
        const urlParams = new URLSearchParams(window.location.search);
        
        // Make sure we are actually on an image search before proceeding
        if (urlParams.get('tbm') !== 'isch' && urlParams.get('udm') !== '2') return;

        const tbs = urlParams.get('tbs') || '';
        
        if (tbs.includes('islt:')) {
            // If our badge is already on the screen, don't add a duplicate
            if (document.getElementById('gm-size-badge')) return;

            // Extract the specific size (like '4mp') from the string
            let sizeMatch = tbs.match(/islt:(\w+)/);
            let sizeText = sizeMatch ? sizeMatch[1].toUpperCase() : "Custom Size";

            // Check system theme to match Google's colors natively
            let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            let bgColor = isDark ? '#303134' : '#ffffff';
            let textColor = isDark ? '#e8eaed' : '#202124';
            let shadowColor = isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)';

            // Create an adaptive popup window to inject into the page
            let popup = document.createElement('div');
            popup.id = 'gm-size-badge';
            popup.style.cssText = `position:fixed; top:20px; right:20px; background:${bgColor}; color:${textColor}; padding:15px 20px; border-radius:8px; font-family:sans-serif; z-index:2147483647; font-weight:bold; box-shadow:0 4px 10px ${shadowColor}; display:flex; align-items:center; transition: opacity 0.5s ease; opacity: 1;`;
            
            let text = document.createElement('span');
            text.innerText = `✅ Filtering: Larger than ${sizeText}`;
            
            popup.appendChild(text);
            
            // Appending to documentElement prevents it from being wiped if Google replaces the <body>
            if (document.documentElement) {
                document.documentElement.appendChild(popup);
            }

            // Fade out after 4 seconds
            setTimeout(() => {
                let badge = document.getElementById('gm-size-badge');
                if (badge) {
                    badge.style.opacity = '0';
                    // Hide completely after the 0.5s CSS transition so it doesn't block mouse clicks
                    setTimeout(() => badge.style.display = 'none', 500);
                }
            }, 4000);
        }
    }

    // Run immediately when the script fires
    checkAndAddBadge();

    // Run every 1 second to make sure the badge stays there even if Google changes the page content
    setInterval(checkAndAddBadge, 1000);
})();
