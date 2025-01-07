import { AsteriskIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutSuccessDemo() {
  return (
    <Callout variant="success" className="max-w-128">
      <AsteriskIcon />
      <CalloutText>
        Use green callouts to give the user a useful tip.
      </CalloutText>
    </Callout>
  );
}
