import Link from "next/link";

import { Button } from "~/components/ui/Button";

export default function ButtonNextjsLinkDemo() {
  return (
    <Button asChild>
      <Link href="/docs/components/primitives/button">Button</Link>
    </Button>
  );
}
