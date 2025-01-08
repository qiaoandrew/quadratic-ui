"use client";

import { useState } from "react";

import { Calendar } from "~/components/ui/Calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-3 border"
    />
  );
}
