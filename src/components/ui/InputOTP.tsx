"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { useContext } from "react";

import { cn } from "~/utils/tailwind";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentPropsWithoutRef<typeof OTPInput>) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-x-3 has-[:disabled]:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center", className)} {...props} />;
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const inputOTPContext = useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index];
  const { char, isActive } = slot ?? {
    char: "",
    isActive: false,
  };

  return (
    <div
      className={cn(
        "relative flex h-14 w-10 items-center justify-center border-y border-r border-input text-4 transition-all",
        "first:rounded-l-1.5 first:border-l last:rounded-r-1.5",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      className="h-1 w-3 rounded-full bg-border"
      {...props}
    />
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
