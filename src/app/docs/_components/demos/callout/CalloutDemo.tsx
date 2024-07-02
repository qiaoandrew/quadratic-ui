import { InfoIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutDemo() {
  return (
    <Callout className="max-w-128">
      <InfoIcon size={20} />
      <CalloutText>
        Use default callouts to give the user information.
      </CalloutText>
    </Callout>
  );
}
