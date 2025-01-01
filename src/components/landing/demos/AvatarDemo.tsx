import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";

export default function AvatarDemo() {
  return (
    <div className="flex gap-x-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/qiaoandrew.png"
          alt="@qiaoandrew"
        />
        <AvatarFallback>AQ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AQ</AvatarFallback>
      </Avatar>
    </div>
  );
}
