import { AlertCircleIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutDestructiveDemo() {
  return (
    <Callout variant="destructive" className="max-w-128">
      <AlertCircleIcon />
      <CalloutText>
        Use red callouts to give the user an error message.
      </CalloutText>
    </Callout>
  );
}
