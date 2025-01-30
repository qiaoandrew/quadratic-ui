import { cn } from "~/utils/tailwind";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-1.5 bg-muted animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
