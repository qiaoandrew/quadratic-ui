import { LightbulbIcon } from "lucide-react";

import { Callout, CalloutText } from "~/components/ui/Callout";

export default function CalloutInfoDemo() {
  return (
    <Callout variant="info" className="max-w-128">
      <LightbulbIcon />
      <CalloutText>Use blue callouts to give users an idea.</CalloutText>
    </Callout>
  );
}
