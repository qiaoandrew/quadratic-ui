import { Badge } from "~/components/ui/Badge";

export default function BadgeDemo() {
  return (
    <div className="z-10 flex gap-x-3">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
    </div>
  );
}
