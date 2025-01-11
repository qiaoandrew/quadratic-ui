import Link from "next/link";
import type { VariantProps } from "tailwind-variants";

import GradientText from "~/components/effects/GradientText";
import { tv } from "~/utils/tailwind";

const logoVariants = tv({
  slots: {
    base: "flex items-center",
    iconContainer: "relative",
    rectangle1: "absolute bottom-0 left-0 bg-muted-foreground",
    rectangle2: "absolute right-0 top-0 border border-foreground",
    text: "font-display font-semibold",
  },
  variants: {
    size: {
      md: {
        base: "gap-x-2",
        iconContainer: "size-4.5",
        rectangle1: "size-4 rounded-1",
        rectangle2: "size-4 rounded-1",
        text: "text-4",
      },
      lg: {
        base: "gap-x-2.5",
        iconContainer: "size-6",
        rectangle1: "size-[21px] rounded-1.5",
        rectangle2: "size-[21px] rounded-1.5",
        text: "text-6",
      },
    },
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  onMouseEnter?: () => void;
}

export default function Logo({ size, onMouseEnter }: LogoProps) {
  const { base, iconContainer, rectangle1, rectangle2, text } = logoVariants({
    size,
  });

  return (
    <Link href="/" onMouseEnter={onMouseEnter} className={base()}>
      <span className={iconContainer()}>
        <span className={rectangle1()} />
        <span className={rectangle2()} />
      </span>
      <GradientText className={text()}>quadratic/ui</GradientText>
    </Link>
  );
}
