"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/InputOTP";

export default function InputOTPControlledDemo() {
  const slotStyles = "xs:h-18 xs:w-14 xs:text-6";

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-y-6">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
        className="xs:gap-x-4"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className={slotStyles} />
          <InputOTPSlot index={1} className={slotStyles} />
          <InputOTPSlot index={2} className={slotStyles} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} className={slotStyles} />
          <InputOTPSlot index={4} className={slotStyles} />
          <InputOTPSlot index={5} className={slotStyles} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-3-5 text-center">
        {value === ""
          ? "Enter your one-time password."
          : `You entered: ${value}`}
      </p>
    </div>
  );
}
