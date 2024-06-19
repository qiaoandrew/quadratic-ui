import Link from "next/link";

import { badgeVariants } from "~/components/ui/Badge";

export default function BadgeNextjsLinkDemo() {
  return (
    <Link href="/" className={badgeVariants({ variant: "outline" })}>
      Home
    </Link>
  );
}
