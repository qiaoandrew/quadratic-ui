import { cn } from "~/utils/tailwind";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-1.5 bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
