import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/InputOTP";

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6} className="z-10">
      <InputOTPGroup>
        <InputOTPSlot index={0} className="bg-background" />
        <InputOTPSlot index={1} className="bg-background" />
        <InputOTPSlot index={2} className="bg-background" />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} className="bg-background" />
        <InputOTPSlot index={4} className="bg-background" />
        <InputOTPSlot index={5} className="bg-background" />
      </InputOTPGroup>
    </InputOTP>
  );
}
