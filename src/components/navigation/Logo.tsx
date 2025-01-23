import Link from "next/link";
import type { VariantProps } from "tailwind-variants";

import GradientText from "~/components/effects/GradientText";
import { tv } from "~/utils/tailwind";

const logoVariants = tv({
  slots: {
    base: "flex items-center",
    iconContainer: "relative",
    rectangle1: "bg-muted-foreground absolute bottom-0 left-0",
    rectangle2: "border-foreground absolute top-0 right-0 border",
    text: "font-display font-semibold",
  },
  variants: {
    size: {
      md: {
        base: "gap-x-2",
        iconContainer: "size-4.5",
        rectangle1: "rounded-1 size-4",
        rectangle2: "rounded-1 size-4",
        text: "text-4",
      },
      lg: {
        base: "gap-x-2.5",
        iconContainer: "size-6",
        rectangle1: "rounded-1-5 size-[21px]",
        rectangle2: "rounded-1-5 size-[21px]",
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
