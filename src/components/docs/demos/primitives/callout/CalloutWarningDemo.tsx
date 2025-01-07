import { AlertTriangleIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutWarningDemo() {
  return (
    <Callout variant="warning" className="max-w-128">
      <AlertTriangleIcon />
      <CalloutText>
        Use yellow callouts to give the user a warning message.
      </CalloutText>
    </Callout>
  );
}
