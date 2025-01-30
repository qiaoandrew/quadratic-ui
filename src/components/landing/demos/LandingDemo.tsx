import Link from "next/link";

interface LandingDemoProps {
  label: string;
  href: string;
  Demo: React.FC;
}

export default function LandingDemo({ label, href, Demo }: LandingDemoProps) {
  return (
    <div className="overflow-hidden">
      <div className="bg-muted/15 hover:bg-muted/30 relative flex h-64 items-center justify-center p-6 transition-colors">
        <Link href={href} className="absolute inset-0" />
        <Demo />
      </div>
      <div className="h-16 p-3">
        <p className="text-3.5 font-mono">{label}</p>
      </div>
    </div>
  );
}
