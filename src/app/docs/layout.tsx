import DocMenu from "./_components/navigation/DocMenu";
import DocTOC from "./_components/navigation/DocTOC";

import { getComponentsMenuItems, getTOCs } from "~/utils/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const { primitivesMenuItems, compositesMenuItems, chartsMenuItems } =
    await getComponentsMenuItems();
  const tocs = await getTOCs();

  return (
    <div className="container-docs">
      <DocMenu
        primitivesMenuItems={primitivesMenuItems}
        compositesMenuItems={compositesMenuItems}
        chartsMenuItems={chartsMenuItems}
      />
      <div className="flex gap-x-16 pt-24 md:ml-[304px] md:pt-26">
        <div className="grow overflow-x-hidden px-0.5 pb-30">{children}</div>
        <DocTOC tocs={tocs} />
      </div>
    </div>
  );
}
