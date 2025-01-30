import { tv } from "~/utils/tailwind";

const dialogOverlayVariants = tv({
  base: [
    "fixed inset-0 z-50 bg-black/80",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  ],
});

const dialogContentVariants = tv({
  base: [
    "rounded-4 bg-background fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2.5rem)] max-w-128 -translate-x-1/2 -translate-y-1/2 border p-6",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "[&>button]:absolute [&>button]:top-2.5 [&>button]:right-2.5",
  ],
});

const dialogHeaderVariants = tv({
  base: ["flex flex-col gap-y-1.5 pb-5", "xs:pb-6"],
});

const dialogFooterVariants = tv({
  base: [
    "flex flex-col-reverse gap-y-3 pt-7",
    "xs:flex-row xs:justify-end xs:gap-x-4 xs:pt-8",
  ],
});

const dialogTitleVariants = tv({
  base: "text-5 font-semibold",
});

const dialogDescriptionVariants = tv({
  base: "text-3.5 text-muted-foreground leading-6",
});

export {
  dialogOverlayVariants,
  dialogContentVariants,
  dialogHeaderVariants,
  dialogFooterVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
};
