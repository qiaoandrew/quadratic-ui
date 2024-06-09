"use client";

import { useState, useEffect } from "react";

import { ProgressBar } from "~/components/ui/ProgressBar";

export default function ProgressBarWithLabelDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressBar
      value={progress}
      showAnimation
      label="66%"
      className="w-[60%]"
    />
  );
}
