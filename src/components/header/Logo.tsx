import Link from "next/link";

import GradientText from "~/components/effects/GradientText";

interface LogoProps {
  onMouseEnter?: () => void;
}

export default function Logo({ onMouseEnter }: LogoProps) {
  return (
    <Link
      href="/"
      onMouseEnter={onMouseEnter}
      className="flex items-center gap-x-2"
    >
      <span className="relative size-4.5">
        <span className="absolute bottom-0 left-0 size-4 rounded-1 bg-muted-foreground" />
        <span className="absolute right-0 top-0 size-4 rounded-1 border border-foreground" />
      </span>
      <GradientText className="font-display text-4 font-semibold">
        quadratic/ui
      </GradientText>
    </Link>
  );
}
