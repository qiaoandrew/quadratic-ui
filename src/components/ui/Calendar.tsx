"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "~/utils/tailwind";

import { buttonVariants } from "~/components/ui/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-background p-2.5", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0",
        caption: "flex justify-between items-center mb-0.5",
        caption_label: "text-3.5 font-medium text-foreground",
        nav: "gap-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "size-7 rounded-1.5",
        ),
        table: "w-full border-collapse",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-1.5 size-8 flex justify-center items-center font-normal text-[12.8px]",
        row: "flex w-full",
        cell: "relative p-0 text-center text-3.5 focus-within:relative focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "size-8 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft size={16} />,
        IconRight: () => <ChevronRight size={16} />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export { Calendar };
