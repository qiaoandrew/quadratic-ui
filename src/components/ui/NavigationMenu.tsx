import Image from "next/image";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type { VariantProps } from "tailwind-variants";
import { ChevronDownIcon } from "lucide-react";

import { tv, cn } from "~/utils/tailwind";

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
    "group inline-flex h-9 w-max items-center justify-center gap-x-1.5 rounded-2 px-2 text-3.5 font-medium transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
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
        "left-0 top-0 w-full",
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
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-3 border bg-popover text-popover-foreground",
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
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        "data-[state=visible]:animate-in data-[state=visible]:fade-in",
        "data-[state=hidden]:animate-out data-[state=hidden]:fade-out",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-0.5 bg-border" />
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
  base: "flex select-none flex-col rounded-2 no-underline outline-none",
  variants: {
    variant: {
      default: cn(
        "block p-3 transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground",
      ),
      card: "row-span-3 size-full flex-col justify-end bg-gradient-to-b from-muted/50 to-muted p-6",
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
  (React.ComponentProps<typeof Link> | React.ComponentProps<"a">);

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
        <div className="relative mb-4 flex-grow">
          <Image
            src={cardImgSrc}
            alt={cardImgAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-3 bg-cover"
          />
        </div>
        <h4 className="mb-1 text-4 font-medium">{title}</h4>
        <p className="text-3.5 leading-6 text-muted-foreground">
          {description}
        </p>
      </>
    ) : (
      <>
        <p className="mb-1 text-3.5 font-medium text-foreground">{title}</p>
        <p className="line-clamp-2 text-3.5 leading-6 text-muted-foreground">
          {description}
        </p>
      </>
    );

  if (href.startsWith("/")) {
    return (
      <NavigationMenuLink
        className={navigationMenuDropdownItemVariants({ variant, className })}
        asChild
      >
        <Link href={href} {...props}>
          {listItemContent}
        </Link>
      </NavigationMenuLink>
    );
  }

  return (
    <NavigationMenuLink
      className={navigationMenuDropdownItemVariants({ variant, className })}
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {listItemContent}
      </a>
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
