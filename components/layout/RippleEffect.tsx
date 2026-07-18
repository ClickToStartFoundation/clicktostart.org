"use client";

import { useEffect } from "react";

/**
 * The signature click flourish from the design — a quick accent ring blooming
 * at the pointer on every click. Skipped entirely for reduced-motion users.
 */
export function RippleEffect() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onClick = (event: MouseEvent) => {
      const ring = document.createElement("div");
      ring.style.cssText = `position:fixed;left:${event.clientX}px;top:${event.clientY}px;width:44px;height:44px;border:2.5px solid #4e96d9;border-radius:50%;pointer-events:none;z-index:9999;animation:ctsfRipple .5s ease-out forwards`;
      document.body.appendChild(ring);
      window.setTimeout(() => ring.remove(), 600);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
