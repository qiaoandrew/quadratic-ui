"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/InputOTP";

export default function InputOTPPatternDemo() {
  const slotClassName = "xs:h-18 xs:w-14 xs:text-6";

  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
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
  );
}
