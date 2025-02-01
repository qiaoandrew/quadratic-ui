import { CalendarIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { Button } from "~/components/ui/Button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/HoverCard";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex justify-between gap-x-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/vercel.png"
              className="rounded-full border"
            />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-3.5 mb-1.5 font-semibold">@nextjs</h4>
            <p className="text-3 mb-3 leading-5">
              The React Framework - created and maintained by @vercel.
            </p>
            <div className="flex items-center">
              <CalendarIcon size={14} className="mr-2 opacity-70" />{" "}
              <span className="text-3 text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
