import Image from "next/image";

import { AspectRatio } from "~/components/ui/AspectRatio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2 bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1715412406818-48241c841c9e?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo by Drew Beamer"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
        className="object-cover"
      />
    </AspectRatio>
  );
}
