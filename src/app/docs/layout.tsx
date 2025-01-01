import DocsMenu from "~/components/docs/navigation/DocsMenu";
import DocsTOC from "~/components/docs/navigation/DocsTOC";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="px-6 3xl:px-[calc((100vw-1248px)/2)]">
      <DocsMenu />
      <div className="flex gap-x-16 pt-21 md:ml-[280px] xl:pt-28">
        <div className="grow overflow-x-hidden">{children}</div>
        <DocsTOC />
      </div>
    </div>
  );
}
