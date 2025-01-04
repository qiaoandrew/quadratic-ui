import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/InputOTP";

export default function InputOTPDemo() {
  const slotStyles = "xs:h-18 xs:w-14 xs:text-6";

  return (
    <InputOTP maxLength={6} className="xs:gap-x-4">
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
  );
}
