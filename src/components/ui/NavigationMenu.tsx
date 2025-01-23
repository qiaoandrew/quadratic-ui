import Image from "next/image";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type { VariantProps } from "tailwind-variants";
import { ChevronDownIcon } from "lucide-react";

import { tv, cn } from "~/utils/tailwind";

import _Link from "~/components/ui/_Link";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport
        className={cn(
          "data-[state=open]:fade-in-0",
          "data-[state=closed]:fade-out-0",
        )}
      />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-x-2",
        className,
      )}
      {...props}
    />
  );
}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = tv({
  base: [
    "group rounded-2 text-3-5 inline-flex h-9 w-max items-center justify-center gap-x-1.5 px-2 font-medium transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus:bg-accent focus:text-accent-foreground focus:outline-hidden",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-active:bg-accent/50 data-[state=open]:bg-accent/50",
  ],
});

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        aria-hidden="true"
        className="size-3.5 transition-transform group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "top-0 left-0 w-full",
        "md:absolute md:w-auto",
        "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
        "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
        "data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-start]:slide-out-to-left-52",
        "data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-end]:slide-out-to-right-52",
        className,
      )}
      {...props}
    />
  );
}

const NavigationMenuLink = NavigationMenuPrimitive.Link;

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-0 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center rounded-3 bg-popover text-popover-foreground relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border",
          "md:w-[var(--radix-navigation-menu-viewport-width)]",
          "data-[state=open]:animate-scale-in data-[state=open]:zoom-in-90",
          "data-[state=closed]:animate-scale-out data-[state=closed]:zoom-out-95",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        "data-[state=visible]:animate-in data-[state=visible]:fade-in",
        "data-[state=hidden]:animate-out data-[state=hidden]:fade-out",
        className,
      )}
      {...props}
    >
      <div className="rounded-tl-0.5 bg-border relative top-[60%] size-2 rotate-45" />
    </NavigationMenuPrimitive.Indicator>
  );
}

const navigationMenuDropdownListVariants = tv({
  base: "grid w-80 gap-x-3 gap-y-1 p-4 lg:w-128",
  variants: {
    variant: {
      default: "lg:grid-cols-2",
      card: "lg:grid-cols-[.85fr_1fr]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface NavigationMenuDropdownListProps
  extends VariantProps<typeof navigationMenuDropdownListVariants>,
    React.ComponentProps<"div"> {}

function NavigationMenuDropdownList({
  className,
  variant,
  ...props
}: NavigationMenuDropdownListProps) {
  return (
    <div
      className={cn(navigationMenuDropdownListVariants({ variant, className }))}
      {...props}
    />
  );
}

const navigationMenuDropdownItemVariants = tv({
  base: "rounded-2 flex flex-col no-underline outline-hidden select-none",
  variants: {
    variant: {
      default: cn(
        "block p-3 transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground",
      ),
      card: "from-muted/50 to-muted row-span-3 size-full flex-col justify-end bg-linear-to-b p-6",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type NavigationMenuDropdownItemProps = Omit<
  VariantProps<typeof navigationMenuDropdownItemVariants>,
  "variant"
> & {
  title: string;
  description: string;
  href: string;
} & (
    | {
        variant: "card";
        cardImgSrc: string;
        cardImgAlt: string;
      }
    | { variant: "default"; cardImgSrc?: never; cardImgAlt?: never }
  ) &
  (React.ComponentProps<typeof _Link> | React.ComponentProps<"a">);

function NavigationMenuDropdownItem({
  title,
  description,
  href,
  cardImgSrc,
  cardImgAlt,
  variant,
  className,
  ...props
}: NavigationMenuDropdownItemProps) {
  const listItemContent =
    variant === "card" ? (
      <>
        <div className="relative mb-4 grow">
          <Image
            src={cardImgSrc}
            alt={cardImgAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-3 bg-cover"
          />
        </div>
        <h4 className="text-4 mb-1 font-medium">{title}</h4>
        <p className="text-3-5 text-muted-foreground leading-6">
          {description}
        </p>
      </>
    ) : (
      <>
        <p className="text-3-5 text-foreground mb-1 font-medium">{title}</p>
        <p className="text-3-5 text-muted-foreground line-clamp-2 leading-6">
          {description}
        </p>
      </>
    );

  return (
    <NavigationMenuLink
      className={navigationMenuDropdownItemVariants({ variant, className })}
      asChild
    >
      <_Link href={href} {...props}>
        {listItemContent}
      </_Link>
    </NavigationMenuLink>
  );
}

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavigationMenuDropdownList,
  NavigationMenuDropdownItem,
};
