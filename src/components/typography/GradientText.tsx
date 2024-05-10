import { cn } from "~/utils/tailwind";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-dark bg-clip-text text-transparent dark:bg-gradient-light",
        className,
      )}
    >
      {children}
    </span>
  );
}
