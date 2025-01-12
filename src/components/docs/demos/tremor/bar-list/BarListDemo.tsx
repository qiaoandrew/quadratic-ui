"use client";

import { toast } from "sonner";

import { BarList } from "~/components/charts/tremor/BarList";

const DATA = [
  { name: "/home", value: 843 },
  { name: "/imprint", value: 46 },
  { name: "/cancellation", value: 3 },
  { name: "/blocks", value: 108 },
  { name: "/documentation", value: 384 },
];

export default function BarListDemo() {
  return (
    <BarList
      data={DATA}
      onValueChange={(item) => toast.message(JSON.stringify(item, null, 2))}
      className="max-w-112"
    />
  );
}
