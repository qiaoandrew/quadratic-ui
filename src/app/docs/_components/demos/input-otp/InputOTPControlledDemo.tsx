"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/InputOTP";

export default function InputOTPControlledDemo() {
  const slotClassName = "xs:h-18 xs:w-14 xs:text-6";

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
          <InputOTPSlot index={0} className={slotClassName} />
          <InputOTPSlot index={1} className={slotClassName} />
          <InputOTPSlot index={2} className={slotClassName} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} className={slotClassName} />
          <InputOTPSlot index={4} className={slotClassName} />
          <InputOTPSlot index={5} className={slotClassName} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-center text-3.5">
        {value === ""
          ? "Enter your one-time password."
          : `You entered: ${value}`}
      </p>
    </div>
  );
}
