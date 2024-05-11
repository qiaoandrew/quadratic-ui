import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import SearchCommandTrigger from "./SearchCommandTrigger";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-b-primary/10 bg-background/80 backdrop-blur-sm md:h-18">
      <div className="container-docs flex h-full items-center justify-between">
        <div className="flex items-center gap-x-6 md:pl-3">
          <Logo />
          <DesktopMenu />
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-5 md:pr-3">
          <SearchCommandTrigger />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
