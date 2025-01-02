"use client";

import { cn } from "~/utils/tailwind";

import { buttonVariants } from "~/components/ui/Button";
import { Calendar } from "~/components/ui/Calendar";

export default function CalendarDemo() {
  return (
    <Calendar
      mode="single"
      classNames={{
        month_caption: "h-6 flex items-center justify-center",
        caption_label: "text-3 font-medium",
        button_previous: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "absolute left-0 top-0 z-10 size-6 [&_svg]:size-3.5",
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "absolute right-0 top-0 z-10 size-6 [&_svg]:size-3.5",
        ),
        weekday:
          "size-6 p-0 text-[11px] font-normal flex items-center justify-center text-muted-foreground",
        day: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "size-6 rounded-1 p-0 text-[11px] font-normal",
        ),
      }}
      className="z-10 rounded-3 border p-1.5"
    />
  );
}
