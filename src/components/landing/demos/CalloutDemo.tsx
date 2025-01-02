import { InfoIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutDemo() {
  return (
    <Callout className="max-w-[340px] rounded-2 px-2.5 py-3 text-3 [&>svg]:size-4">
      <InfoIcon />
      <CalloutText>
        Use default callouts to give the user information.
      </CalloutText>
    </Callout>
  );
}
