import { cn } from "~/utils/tailwind";

export default function VerticalDividers() {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-6 inset-y-0 z-10 grid pt-7 pb-28",
        "3xl:inset-x-[calc((100vw-1256px)/2)] md:inset-x-9 md:grid-cols-2 md:gap-x-8",
        "3xl:grid-cols-3",
      )}
    >
      <div className="border-x" />
      <div className="hidden border-x md:block" />
      <div className="3xl:block hidden border-x" />
      <div className="absolute inset-x-0 top-0 h-7 border-x" />
      <div className="absolute inset-x-0 bottom-0 h-28 border-x" />
    </div>
  );
}
