import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuShortcutGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcutGroup>
              <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
              <DropdownMenuShortcut>⇧</DropdownMenuShortcut>
              <DropdownMenuShortcut>P</DropdownMenuShortcut>
            </DropdownMenuShortcutGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcutGroup>
              <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
              <DropdownMenuShortcut>B</DropdownMenuShortcut>
            </DropdownMenuShortcutGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcutGroup>
              <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
              <DropdownMenuShortcut>S</DropdownMenuShortcut>
            </DropdownMenuShortcutGroup>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcutGroup>
              <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
              <DropdownMenuShortcut>K</DropdownMenuShortcut>
            </DropdownMenuShortcutGroup>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-40">
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcutGroup>
              <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
              <DropdownMenuShortcut>+</DropdownMenuShortcut>
              <DropdownMenuShortcut>T</DropdownMenuShortcut>
            </DropdownMenuShortcutGroup>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcutGroup>
            <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
            <DropdownMenuShortcut>⇧</DropdownMenuShortcut>
            <DropdownMenuShortcut>Q</DropdownMenuShortcut>
          </DropdownMenuShortcutGroup>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
