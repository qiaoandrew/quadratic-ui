import { Button } from "~/components/ui/Button";

import { DOC_LINKS_ICONS } from "~/constants/docs";

interface DocLinksProps {
  children: React.ReactNode;
}

const DocLinks = ({ children }: DocLinksProps) => {
  return <div className="mb-10 flex flex-wrap gap-4">{children}</div>;
};

interface DocLinkProps {
  href: string;
  icon: keyof typeof DOC_LINKS_ICONS;
  children: React.ReactNode;
}

const DocLink = ({ href, icon, children }: DocLinkProps) => {
  const Icon = DOC_LINKS_ICONS[icon];

  if (!Icon) throw new Error(`Icon ${icon} not found`);

  return (
    <Button variant="outline" size="sm" className="gap-x-1.5" asChild>
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <Icon size={16} />
      </a>
    </Button>
  );
};

export { DocLinks, DocLink };
