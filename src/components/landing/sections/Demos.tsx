import { LANDING_DEMOS } from "~/constants/landingDemos";

import LandingDemo from "~/components/landing/demos/LandingDemo";
import HorizontalDividers from "~/components/landing/dividers/HorizontalDividers";
import VerticalDividers from "~/components/landing/dividers/VerticalDividers";

export default function Demos() {
  return (
    <section className="relative grid gap-x-8 px-6 pt-7 md:grid-cols-2 3xl:grid-cols-3 3xl:px-[calc((100vw-1248px)/2)]">
      <VerticalDividers />
      <HorizontalDividers />
      {LANDING_DEMOS.map((demo) => (
        <LandingDemo {...demo} key={demo.id} />
      ))}
    </section>
  );
}
