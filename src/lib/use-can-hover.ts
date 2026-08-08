"use client";

import { useEffect, useState } from "react";

/** True when the primary input supports hover (fine pointer + hover capability). */
export function useCanHover(): boolean {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return canHover;
}
