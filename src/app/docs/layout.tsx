import DocMenu from "./_components/DocMenu";
import DocTOC from "./_components/DocTOC";

import { getPrimitivesMenuItems } from "~/utils/navigation";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const primitivesMenuItems = await getPrimitivesMenuItems();

  return (
    <div className="container-docs">
      <DocMenu primitivesMenuItems={primitivesMenuItems} />
      <div className="pt-18 md:pt-26 flex gap-x-16 md:ml-[304px]">
        <div className="pb-30 grow overflow-x-hidden">{children}</div>
        <DocTOC />
      </div>
    </div>
  );
}
