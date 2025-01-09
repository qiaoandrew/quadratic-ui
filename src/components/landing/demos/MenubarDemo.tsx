import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarShortcutGroup,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/Menubar";

export default function MenubarDemo() {
  return (
    <Menubar className="z-10">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>T</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarItem>
            New Window
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>N</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print...
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>P</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>Z</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarItem>
            Redo
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>⇧</MenubarShortcut>
              <MenubarShortcut>Z</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent className="w-40">
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>R</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload
            <MenubarShortcutGroup>
              <MenubarShortcut>⌘</MenubarShortcut>
              <MenubarShortcut>⇧</MenubarShortcut>
              <MenubarShortcut>R</MenubarShortcut>
            </MenubarShortcutGroup>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
