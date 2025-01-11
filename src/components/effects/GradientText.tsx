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
        "bg-light-gradient dark:bg-dark-gradient inline-block bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
