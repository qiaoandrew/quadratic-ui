import { cn } from "~/utils/tailwind";

import GradientText from "~/components/effects/GradientText";

export default function Hero() {
  return (
    <section
      className={cn(
        "mb-12 px-6 pt-21",
        "md:px-9 md:pt-24",
        "xl:pt-32",
        "3xl:mb-28 3xl:px-[calc((100vw-1256px)/2)]",
      )}
    >
      <h1
        className={cn(
          "font-display text-7 max-w-[328px] leading-10 font-semibold",
          "xs:max-w-[400px] xs:text-8 xs:leading-12",
          "sm:max-w-[580px]",
          "md:text-9 md:max-w-[664px] md:leading-13",
          "lg:text-10 lg:max-w-[732px] lg:leading-14",
          "xl:text-12 xl:max-w-224 xl:leading-16",
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
