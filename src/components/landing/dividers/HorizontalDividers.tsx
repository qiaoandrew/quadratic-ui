import { cn } from "~/utils/tailwind";
import { LANDING_DEMOS } from "~/constants/landingDemos";

export default function HorizontalDividers() {
  const twoColumnDividerCount = Math.ceil(LANDING_DEMOS.length / 2);
  const threeColumnDividerCount = Math.ceil(LANDING_DEMOS.length / 3);

  return (
    <div className="pointer-events-none absolute inset-x-0 inset-y-7 z-20 flex flex-col gap-y-16">
      {Array.from({ length: LANDING_DEMOS.length }).map((_, i) => (
        <div
          className={cn(
            "h-64 border-y",
            i >= twoColumnDividerCount && "md:hidden",
            i >= threeColumnDividerCount && "3xl:hidden",
          )}
          key={i}
        />
      ))}
    </div>
  );
}
