import DocMenu from "./_components/DocMenu";
import DocTOC from "./_components/DocTOC";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container-docs">
      <DocMenu />
      <div className="pt-18 md:pt-26 flex gap-x-16 md:ml-[304px]">
        <div className="pb-30 grow overflow-x-hidden">{children}</div>
        <DocTOC />
      </div>
    </div>
  );
}
