"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const BookScene = dynamic(() => import("./BookScene"), { ssr: false });

const OFFSCREEN = { top: -10_000, left: 0, width: 720, height: 720 };

export function BookSceneHost() {
  const pathname = usePathname();
  const onWork = pathname === "/work";

  const [persist, setPersist] = useState(() => pathname === "/work");

  useLayoutEffect(() => {
    if (pathname === "/work") setPersist(true);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    let cancelled = false;
    const arm = () => {
      if (!cancelled) setPersist(true);
    };
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(arm, { timeout: 2800 });
      return () => {
        cancelled = true;
        cancelIdleCallback(id);
      };
    }
    const t = setTimeout(arm, 400);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [pathname]);

  const [rect, setRect] = useState(OFFSCREEN);

  const syncRect = useCallback(() => {
    if (!onWork) {
      setRect({ ...OFFSCREEN });
      return;
    }
    const el = document.getElementById("book-section");
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRect({
      top: r.top,
      left: r.left,
      width: Math.max(1, r.width),
      height: Math.max(1, r.height),
    });
  }, [onWork]);

  useLayoutEffect(() => {
    syncRect();
  }, [syncRect, onWork, pathname]);

  useEffect(() => {
    if (!onWork) return;
    const el = document.getElementById("book-section");
    if (!el) return;
    const ro = new ResizeObserver(() => syncRect());
    ro.observe(el);
    window.addEventListener("scroll", syncRect, true);
    window.addEventListener("resize", syncRect);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", syncRect, true);
      window.removeEventListener("resize", syncRect);
    };
  }, [onWork, syncRect]);

  if (!persist) return null;

  return (
    <div
      className={onWork ? "fixed z-10" : "fixed z-0"}
      style={{
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        pointerEvents: onWork ? "auto" : "none",
        visibility: onWork ? "visible" : "hidden",
      }}
      aria-hidden={!onWork}
    >
      <BookScene />
    </div>
  );
}
