"use client";

import { useState, useEffect } from "react";

import { Progress } from "~/components/ui/Progress";

export default function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full max-w-80" />;
}
