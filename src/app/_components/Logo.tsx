import Link from "next/link";

import GradientText from "../../components/typography/GradientText";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      <div className="relative size-6">
        <div className="absolute bottom-0 left-0 size-5 rounded-1 bg-gradient-dark dark:bg-gradient-light" />
        <div className="absolute right-0 top-0 size-5 rounded-1 border border-highlight-foreground" />
      </div>
      <p className="font-logo text-5 font-semibold">
        <GradientText>quadratic/ui</GradientText>
      </p>
    </Link>
  );
}
