"use client";

import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";

const MIN_DISPLAY_MS = 350;
const MAX_DISPLAY_MS = 2500;

export default function InitialPageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      setVisible(false);
    };

    const scheduleHide = () => {
      const elapsed = performance.now() - startedAt;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(hide, delay);
    };

    if (document.readyState !== "loading") {
      scheduleHide();
    } else {
      document.addEventListener("DOMContentLoaded", scheduleHide, { once: true });
    }

    const maxTimer = window.setTimeout(hide, MAX_DISPLAY_MS);

    return () => {
      document.removeEventListener("DOMContentLoaded", scheduleHide);
      window.clearTimeout(maxTimer);
    };
  }, []);

  if (!visible) return null;

  return <PageLoader />;
}
