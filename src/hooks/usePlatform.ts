import { useState } from "react";

export type StreamingPlatform = "spotify" | "apple-music";

const STORAGE_KEY = "sound-atlas-platform";

function getInitialPlatform(): StreamingPlatform {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "spotify" || stored === "apple-music") return stored;
  } catch {
    // localStorage unavailable
  }
  return "apple-music";
}

export function usePlatform() {
  const [platform, setPlatform] = useState<StreamingPlatform>(getInitialPlatform);

  function changePlatform(p: StreamingPlatform) {
    setPlatform(p);
    try {
      localStorage.setItem(STORAGE_KEY, p);
    } catch {
      // localStorage unavailable
    }
  }

  return { platform, changePlatform };
}
