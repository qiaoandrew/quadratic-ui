import { cn } from "~/utils/tailwind";
import { DEMOS } from "~/constants/demos";

export default function DemosGrid() {
  return (
    <section className="container-docs mb-36 grid grid-cols-1 gap-9 sm:grid-cols-2 md:px-3 xl:grid-cols-3">
      {DEMOS.map(({ id, Component }) => (
        <div
          className={cn(
            "flex h-[320px] min-h-60 items-center justify-center overflow-hidden rounded-4 border border-border/50 p-6",
          )}
          key={id}
        >
          <Component />
        </div>
      ))}
    </section>
  );
}
