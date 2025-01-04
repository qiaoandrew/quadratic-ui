import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuShortcutGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "~/components/ui/ContextMenu";

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-36 w-64 items-center justify-center rounded-2 border border-dashed text-3.5 font-medium">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-72">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcutGroup>
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
            <ContextMenuShortcut>[</ContextMenuShortcut>
          </ContextMenuShortcutGroup>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcutGroup>
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
            <ContextMenuShortcut>]</ContextMenuShortcut>
          </ContextMenuShortcutGroup>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcutGroup>
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
            <ContextMenuShortcut>R</ContextMenuShortcut>
          </ContextMenuShortcutGroup>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-56">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcutGroup>
                <ContextMenuShortcut>⌘</ContextMenuShortcut>
                <ContextMenuShortcut>⇧</ContextMenuShortcut>
                <ContextMenuShortcut>S</ContextMenuShortcut>
              </ContextMenuShortcutGroup>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcutGroup>
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
            <ContextMenuShortcut>⇧</ContextMenuShortcut>
            <ContextMenuShortcut>B</ContextMenuShortcut>
          </ContextMenuShortcutGroup>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
