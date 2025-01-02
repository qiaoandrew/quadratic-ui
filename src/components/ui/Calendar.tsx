import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "~/utils/tailwind";
import { buttonVariants } from "~/components/ui/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-background p-2.5", className)}
      classNames={{
        months:
          "flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0 relative",
        month_caption: "flex justify-center h-8 relative items-center",
        caption_label: "text-3.5 font-medium",
        nav: "absolute inset-x-0",
        button_previous: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "absolute left-0 z-10 [&_svg]:size-4.5",
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "absolute right-0 top-0 z-10 [&_svg]:size-4.5",
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        week: "flex",
        weekday:
          "size-8 p-0 text-3.5 font-normal flex items-center justify-center text-muted-foreground",
        day: cn(
          buttonVariants({ variant: "ghost", subject: "icon", size: "xs" }),
          "p-0 text-3.5 font-normal",
          props.mode === "range" &&
            "rounded-0 [&.day-range-end]:rounded-r-1.5 [&.day-range-start]:rounded-l-1.5",
        ),
        day_button: "size-full",
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground aria-selected:bg-primary/60 aria-selected:text-primary-foreground/60",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: (props) =>
          props.orientation === "left" ? (
            <ChevronLeft {...props} />
          ) : (
            <ChevronRight {...props} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
