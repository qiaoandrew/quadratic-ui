import { FOOTER_NAVIGATION_ITEMS } from "~/constants/navigation";

import Logo from "~/components/navigation/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-6 border-t bg-muted/20 px-6 pb-9 pt-6 md:flex-row md:items-start md:justify-between md:pb-18 md:pt-12 3xl:px-[calc((100vw-1256px)/2)]">
      <Logo />
      <nav className="grid grid-cols-2 gap-7 md:grid-cols-4 md:gap-8">
        {FOOTER_NAVIGATION_ITEMS.map((group) => (
          <div
            className="flex flex-col items-start gap-y-2.5 md:w-32"
            key={group.id}
          >
            <p className="text-3.5">{group.label}</p>
            {group.items.map((item) => (
              <a
                href={item.href}
                className="text-3.5 text-muted-foreground transition-colors hover:text-foreground"
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
}
