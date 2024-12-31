import { cn } from "~/utils/tailwind";

import GradientText from "~/components/effects/GradientText";

export default function Hero() {
  return (
    <section className="mb-12 px-6 pt-21 md:pt-24 xl:pt-32 3xl:px-[calc((100vw-1248px)/2)]">
      <h1
        className={cn(
          "max-w-[328px] font-display text-7 font-semibold leading-10",
          "xs:max-w-[400px] xs:text-8 xs:leading-12",
          "sm:max-w-[580px]",
          "md:max-w-[664px] md:text-9 md:leading-13",
          "lg:max-w-[732px] lg:text-10 lg:leading-14",
          "xl:max-w-224 xl:text-12 xl:leading-16",
        )}
      >
        <GradientText>
          Beautiful, slightly styled components to build your next side project
          faster.
        </GradientText>
      </h1>
    </section>
  );
}
