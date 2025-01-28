import { cn } from "~/utils/tailwind";
import { LANDING_DEMOS } from "~/constants/landingDemos";

import LandingDemo from "~/components/landing/demos/LandingDemo";
import HorizontalDividers from "~/components/landing/dividers/HorizontalDividers";
import VerticalDividers from "~/components/landing/dividers/VerticalDividers";

export default function Demos() {
  return (
    <section
      className={cn(
        "relative grid gap-x-8 overflow-hidden px-6 pt-7 pb-12",
        "md:grid-cols-2 md:px-9",
        "3xl:grid-cols-3 3xl:px-[calc((100vw-1256px)/2)]",
      )}
    >
      <VerticalDividers />
      <HorizontalDividers />
      {LANDING_DEMOS.map((demo) => (
        <LandingDemo {...demo} key={demo.id} />
      ))}
    </section>
  );
}
