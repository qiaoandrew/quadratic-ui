import { FOOTER_NAVIGATION_ITEMS } from "~/constants/navigation";

import Logo from "~/components/navigation/Logo";
import _Link from "~/components/ui/_Link";

export default function Footer() {
  return (
    <footer className="bg-muted/20 3xl:px-[calc((100vw-1256px)/2)] flex flex-col gap-y-8 border-t px-6 pt-6 pb-9 md:flex-row md:items-start md:justify-between md:pt-12 md:pb-18">
      <Logo size="lg" />
      <nav className="grid grid-cols-2 gap-7 md:grid-cols-4 md:gap-8">
        {FOOTER_NAVIGATION_ITEMS.map((group) => (
          <div
            className="flex flex-col items-start gap-y-2.5 md:w-32"
            key={group.id}
          >
            <p className="text-3.5 font-medium">{group.label}</p>
            {group.items.map((item) => (
              <_Link
                href={item.href}
                className="text-3.5 text-muted-foreground hover:text-foreground transition-colors"
                key={item.id}
              >
                {item.label}
              </_Link>
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
}
