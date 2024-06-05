import { BarList } from "~/components/ui/BarList";

const DATA = [
  { name: "/home", value: 843 },
  { name: "/imprint", value: 46 },
  { name: "/cancellation", value: 3 },
  { name: "/blocks", value: 108 },
  { name: "/documentation", value: 384 },
];

export default function BarListDemo() {
  return <BarList data={DATA} sortOrder="descending" className="w-full" />;
}
