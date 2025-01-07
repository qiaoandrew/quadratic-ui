import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/Tooltip";

export default function AvatarTooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={150}>
        <TooltipTrigger asChild>
          <Avatar>
            <AvatarImage
              src="https://github.com/qiaoandrew.png"
              alt="@qiaoandrew"
            />
            <AvatarFallback>AQ</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent sideOffset={8}>
          <p>Andrew Qiao</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
