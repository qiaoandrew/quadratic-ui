"use client";

import { usePathname } from "next/navigation";
import { cn } from "~/utils/tailwind";

export default function DocsMenu() {
  const pathname = usePathname();

  return <aside className={cn("")}></aside>;
}
