import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/qiaoandrew.png" alt="@qiaoandrew" />
      <AvatarFallback>AQ</AvatarFallback>
    </Avatar>
  );
}
