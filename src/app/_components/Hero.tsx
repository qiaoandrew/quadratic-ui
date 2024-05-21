import Image from "next/image";
import Link from "next/link";

import GradientText from "~/components/typography/GradientText";
import { Button } from "~/components/ui/Button";

import { cn } from "~/utils/tailwind";

export default function Hero() {
  return (
    <section
      className={cn(
        "container-docs mb-12 mt-24",
        "md:mt-28",
        "2xl:mb-24 2xl:mt-32",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-y-3",
          "xs:gap-y-4",
          "md:px-3",
          "lg:flex-row lg:justify-between lg:gap-x-12",
        )}
      >
        <h1
          className={cn(
            "max-w-[370px] shrink-0 font-logo text-7 font-semibold leading-10",
            "xs:text-8 xs:leading-11",
            "sm:max-w-[410px] sm:text-9 sm:leading-13",
            "xl:max-w-[500px] xl:text-11 xl:leading-15",
            "2xl:max-w-[580px] 2xl:text-12 2xl:leading-16",
          )}
        >
          <GradientText>
            The fastest way to build your next project.
          </GradientText>
        </h1>
        <div
          className={cn(
            "flex flex-col gap-y-6",
            "xs:gap-y-8",
            "sm:gap-y-10",
            "lg:mt-2 lg:gap-y-8",
            "2xl:mt-3 2xl:gap-y-12",
          )}
        >
          <p
            className={cn(
              "max-w-[380px] font-display text-3.5 leading-7",
              "xs:text-4 xs:leading-8",
              "sm:max-w-[480px] sm:text-4.5 sm:leading-8",
              "lg:max-w-[400px] lg:text-4 lg:leading-8",
              "xl:max-w-[480px] xl:text-4.5 xl:leading-8",
              "2xl:max-w-[580px] 2xl:text-5 2xl:leading-9",
            )}
          >
            Build your projects faster by copy and pasting from
            quadratic/ui&apos;s curated collection of 40+ components built using
            Radix UI, shadcn/ui, and Tailwind CSS.
          </p>
          <div
            className={cn(
              "flex flex-col gap-y-4",
              "xs:flex-row xs:gap-x-6",
              "md:gap-x-8",
            )}
          >
            <Button
              className={cn(
                "bg-gradient-dark py-2.5 font-[550] dark:bg-gradient-light",
                "xs:px-4 xs:py-3 xs:text-4",
                "2xl:rounded-3 2xl:px-4.5 2xl:py-4 2xl:text-5",
              )}
              asChild
            >
              <Link href="/docs/getting-started/installation">Get Started</Link>
            </Button>
            <Button
              variant="secondary"
              className={cn(
                "gap-x-2.5 border border-muted-foreground/50 bg-secondary py-2.5 font-[550]",
                "xs:gap-x-3.5 xs:px-4 xs:py-3 xs:text-4",
                "2xl:rounded-3 2xl:px-4.5 2xl:py-4 2xl:text-5",
              )}
              asChild
            >
              <a
                href="https://www.figma.com/community/file/1351315753275186770/quadratic-ui"
                target="_blank"
                rel="noreferrer noopenner"
              >
                <Image
                  src="/img/figma.svg"
                  alt="Figma logo"
                  width={13}
                  height={20}
                />
                View in Figma
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
