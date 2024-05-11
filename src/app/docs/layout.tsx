import DocMenu from "./_components/DocMenu";
import DocTOC from "./_components/DocTOC";

import { getPrimitivesMenuItems } from "~/utils/docs";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const primitivesMenuItems = await getPrimitivesMenuItems();

  return (
    <div className="container-docs">
      <DocMenu primitivesMenuItems={primitivesMenuItems} />
      <div className="flex gap-x-16 pt-18 md:ml-[304px] md:pt-26">
        <div className="grow overflow-x-hidden pb-30">{children}</div>
        <DocTOC />
      </div>
    </div>
  );
}
