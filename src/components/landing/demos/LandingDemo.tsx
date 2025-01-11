import Link from "next/link";

interface LandingDemoProps {
  label: string;
  href: string;
  Demo: React.FC;
}

export default function LandingDemo({ label, href, Demo }: LandingDemoProps) {
  return (
    <div className="overflow-hidden">
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-muted/15 p-6 transition-colors hover:bg-muted/30">
        <Link href={href} className="absolute inset-0" />
        <Demo />
      </div>
      <div className="h-16 p-3">
        <p className="font-mono text-3.5">{label}</p>
      </div>
    </div>
  );
}
