import { getTOCs } from "~/utils/docs";

import DocsMenu from "~/components/docs/navigation/DocsMenu";
import DocsTOC from "~/components/docs/navigation/DocsTOC";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const tocs = await getTOCs();

  return (
    <div className="mx-6 3xl:mx-[calc((100vw-1280px)/2)]">
      <DocsMenu />
      <div className="flex gap-x-16 pt-21 md:ml-72 xl:pt-28">
        <div className="grow overflow-x-hidden pb-18 xl:pb-24">{children}</div>
        <DocsTOC tocs={tocs} />
      </div>
    </div>
  );
}
