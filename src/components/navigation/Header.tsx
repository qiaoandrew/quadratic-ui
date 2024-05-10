import Logo from "./Logo";

export default function Header() {
  return (
    <header className="md:h-18 fixed inset-x-0 top-0 z-50 h-16 border-b border-b-primary/10 bg-background/80 backdrop-blur-sm">
      <div className="container-docs flex h-full items-center justify-between">
        <div className="flex items-center gap-x-6">
          <Logo />
        </div>
        <div className="flex items-center gap-x-4"></div>
      </div>
    </header>
  );
}
