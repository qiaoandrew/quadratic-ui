import Link from "next/link";

interface LandingDemoProps {
  label: string;
  href: string;
  Demo: React.FC;
}

export default function LandingDemo({ label, href, Demo }: LandingDemoProps) {
  return (
    <div>
      <div className="relative flex h-64 items-center justify-center bg-muted/20 p-6 transition-colors hover:bg-muted/40">
        <Link href={href} className="absolute inset-0" />
        <Demo />
      </div>
      <div className="h-16 p-3">
        <p className="font-mono text-3.5">{label}</p>
      </div>
    </div>
  );
}
