import { cn } from "~/utils/tailwind";

interface MobileHeaderToggleProps {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export default function MobileHeaderToggle({
  isMobileMenuOpen,
  openMobileMenu,
  closeMobileMenu,
}: MobileHeaderToggleProps) {
  return (
    <button
      type="button"
      onClick={() => (isMobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
      className={cn(
        "flex size-9 items-center justify-center self-center",
        "xl:hidden",
      )}
    >
      <span className="relative size-5">
        <span
          className={cn(
            "absolute left-0 top-0 h-0.5 w-5 bg-muted-foreground transition-transform",
            isMobileMenuOpen
              ? "translate-y-[9px] rotate-45"
              : "translate-y-[5px] rotate-0",
          )}
        />
        <span
          className={cn(
            "absolute left-0 top-0 h-0.5 w-5 bg-muted-foreground transition-transform",
            isMobileMenuOpen
              ? "translate-y-[9px] -rotate-45"
              : "translate-y-[13px] rotate-0",
          )}
        />
      </span>
    </button>
  );
}
