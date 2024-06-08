import * as React from "react";
import Link from "next/link";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "~/utils/tailwind";
import Image from "next/image";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center gap-x-2",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  cn(
    "group inline-flex w-max items-center justify-center rounded-2 p-2 text-3.5 font-medium transition-colors",
    "hover:bg-accent hover:text-accent-foreground",
    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
    "data-[state=open]:text-accent-foreground data-[state=open]:bg-accent",
  ),
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative ml-1.5 transition-transform duration-150 group-data-[state=open]:rotate-180"
      size={14}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
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
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-3 border bg-popover text-popover-foreground",
        "md:w-[var(--radix-navigation-menu-viewport-width)]",
        "data-[state=open]:animate-scale-in data-[state=open]:zoom-in-90",
        "data-[state=closed]:animate-scale-out data-[state=closed]:zoom-out-95",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
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
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

interface NavigationMenuDropdownListProps
  extends VariantProps<typeof navigationMenuDropdownListVariants> {
  children: React.ReactNode;
  className?: string;
}

const navigationMenuDropdownListVariants = cva(
  "grid gap-x-3 gap-y-1 p-4 w-[400px] md:w-[480px] lg:w-[520px]",
  {
    variants: {
      variant: {
        default: "lg:grid-cols-2",
        card: "lg:grid-cols-[.85fr_1fr]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const NavigationMenuDropdownList = React.forwardRef<
  HTMLUListElement,
  NavigationMenuDropdownListProps
>(({ className, variant, children }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(navigationMenuDropdownListVariants({ variant, className }))}
    >
      {children}
    </ul>
  );
});
NavigationMenuDropdownList.displayName = "NavigationMenuDropdownList";

interface NavigationMenuDropdownItemProps
  extends VariantProps<typeof navigationMenuDropdownItemVariants> {
  title: string;
  href: string;
  isRoute?: boolean;
  cardImg?: string;
  cardImgAlt?: string;
  children: React.ReactNode;
}

const navigationMenuDropdownItemVariants = cva(
  "rounded-2 select-none no-underline outline-none",
  {
    variants: {
      variant: {
        default:
          "block p-3 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        card: "from-muted/50 to-muted flex h-full w-full flex-col justify-end bg-gradient-to-b p-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const NavigationMenuDropdownItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuDropdownItemProps
>(
  (
    {
      title,
      href,
      isRoute,
      cardImg: cardImage,
      cardImgAlt: cardImageAlt,
      children,
      variant,
    },
    ref,
  ) => {
    const navigationMenuDropdownItemStyle = cn(
      navigationMenuDropdownItemVariants({ variant }),
    );

    const listItemContent =
      variant === "card" ? (
        <>
          {cardImage ? (
            <div className="relative flex-grow overflow-hidden rounded-3">
              <Image
                src={cardImage}
                alt={cardImageAlt!}
                layout="fill"
                objectFit="cover"
                className="bg-cover"
              />
            </div>
          ) : (
            <div className="flex-grow" />
          )}
          <h4 className="mb-1 mt-3 text-4 font-medium">{title}</h4>
          <p className="text-3.5 leading-6 text-muted-foreground">{children}</p>
        </>
      ) : (
        <>
          <p className="mb-1 text-3.5 font-medium text-foreground">{title}</p>
          <p className="line-clamp-2 text-3.5 leading-6 text-muted-foreground">
            {children}
          </p>
        </>
      );

    if (isRoute) {
      return (
        <li ref={ref} className={cn(variant === "card" && "row-span-3")}>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuDropdownItemStyle}>
              {listItemContent}
            </NavigationMenuLink>
          </Link>
        </li>
      );
    }

    return (
      <li ref={ref} className={cn(variant === "card" && "row-span-3")}>
        <NavigationMenuLink asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={navigationMenuDropdownItemStyle}
          >
            {listItemContent}
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
NavigationMenuDropdownItem.displayName = "NavigationMenuDropdownItem";

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuViewport,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuDropdownList,
  NavigationMenuDropdownItem,
};
