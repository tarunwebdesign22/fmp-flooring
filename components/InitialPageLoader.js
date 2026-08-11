"use client";

import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";

export default function InitialPageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);

    if (document.readyState === "complete") {
      hide();
      return undefined;
    }

    window.addEventListener("load", hide, { once: true });
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!visible) return null;

  return <PageLoader />;
}
