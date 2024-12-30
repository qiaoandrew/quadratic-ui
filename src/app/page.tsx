"use client";

import { useRef } from "react";
import { Button } from "~/components/Button";

export default function HomePage() {
  const ref = useRef(null);
  return (
    <Button variant="primary" ref={ref}>
      Primary
    </Button>
  );
}
