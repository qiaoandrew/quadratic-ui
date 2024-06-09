"use client";

import { BarList } from "~/components/ui/BarList";

const DATA = [
  { name: "/home", value: 843 },
  { name: "/imprint", value: 46 },
  { name: "/cancellation", value: 3 },
  { name: "/blocks", value: 108 },
  { name: "/documentation", value: 384 },
];

export default function BarListValueFormatterDemo() {
  return (
    <BarList
      data={DATA}
      className="w-full max-w-[500px]"
      valueFormatter={(value) => `${value} Visitors`}
    />
  );
}
