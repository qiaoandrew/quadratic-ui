"use client";

import { useState } from "react";
import { BarList } from "~/components/ui/BarList";

const DATA = [
  { name: "/home", value: 843 },
  { name: "/imprint", value: 46 },
  { name: "/cancellation", value: 3 },
  { name: "/blocks", value: 108 },
  { name: "/documentation", value: 384 },
];

export default function BarListClickableDemo() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="flex w-full max-w-[500px] flex-col gap-y-4">
      <BarList
        data={DATA}
        onValueChange={(item) => setSelectedItem(JSON.stringify(item, null, 2))}
        className="w-full"
      />
      <pre className="rounded-md w-full rounded-1.5 bg-accent p-2 text-3.5">
        {selectedItem === "" ? "Click on a bar." : selectedItem}
      </pre>
    </div>
  );
}
