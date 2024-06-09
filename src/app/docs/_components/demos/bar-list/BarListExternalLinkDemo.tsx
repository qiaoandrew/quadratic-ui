import { BarList } from "~/components/ui/BarList";

const DATA = [
  { name: "/home", href: "#", value: 843 },
  { name: "/imprint", href: "#", value: 46 },
  { name: "/cancellation", href: "#", value: 3 },
  { name: "/blocks", href: "#", value: 108 },
  { name: "/documentation", href: "#", value: 384 },
];

export default function BarListExternalLinkDemo() {
  return (
    <BarList
      data={DATA}
      sortOrder="ascending"
      className="w-full max-w-[500px]"
    />
  );
}
