/**
 * Runs before first paint to apply the saved theme with no flash of the wrong
 * palette. Defaults to light — matching the design's default state. Kept tiny
 * and inlined via `dangerouslySetInnerHTML`.
 */
export const THEME_STORAGE_KEY = "ctsf-theme";

export const themeScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var t=(s==='dark'||s==='light')?s:'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
