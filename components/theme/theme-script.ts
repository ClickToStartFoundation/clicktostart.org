/**
 * Runs before first paint to apply the saved theme with no flash of the wrong
 * palette. Defaults to light — matching the design's default state. Kept tiny
 * and inlined via `dangerouslySetInnerHTML`.
 */
export const THEME_STORAGE_KEY = "ctsf-theme";

export const THEME_COLORS = { light: "#ffffff", dark: "#0b1f3f" } as const;

/** Keeps the browser-chrome tint (address bar on phones) matching the theme. */
export function syncThemeColorMeta(theme: "light" | "dark") {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

export const themeScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var t=(s==='dark'||s==='light')?s:'light';document.documentElement.setAttribute('data-theme',t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'${THEME_COLORS.dark}':'${THEME_COLORS.light}');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
