import { cn } from "~/utils/tailwind";

export default function VerticalDividers() {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-6 inset-y-0 z-10 grid pb-28",
        "md:grid-cols-2 md:gap-x-8 3xl:inset-x-[calc((100vw-1248px)/2)]",
        "3xl:grid-cols-3",
      )}
    >
      <div className="border-x" />
      <div className="hidden border-x md:block" />
      <div className="hidden border-x 3xl:block" />
      <div className="absolute inset-x-0 bottom-0 top-0 border-x" />
    </div>
  );
}
