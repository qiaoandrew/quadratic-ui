import { cn } from "~/utils/tailwind";

interface GradientTextProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-linear-(--brand-gradient) bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
