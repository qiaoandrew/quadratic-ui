import DocMenu from "./_components/DocMenu";
import DocTOC from "./_components/DocTOC";

import { getPrimitivesMenu } from "~/utils/navigation";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const primitivesMenu = await getPrimitivesMenu();

  return (
    <div className="container-docs">
      <DocMenu primitivesMenu={primitivesMenu} />
      <div className="pt-18 md:pt-26 flex gap-x-16 md:ml-[304px]">
        <div className="pb-30 grow overflow-x-hidden">{children}</div>
        <DocTOC />
      </div>
    </div>
  );
}
