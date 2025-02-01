import Image from "next/image";

import { ScrollArea, ScrollAreaBar } from "~/components/ui/ScrollArea";

export type Artwork = {
  artist: string;
  art: string;
};

export const WORKS: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export default function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="rounded-2 w-96 border whitespace-nowrap">
      <div className="flex gap-x-4 py-3">
        {WORKS.map((artwork) => (
          <figure
            key={artwork.artist}
            className="shrink-0 first:pl-3 last:pr-3"
          >
            <Image
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="rounded-1.5 aspect-3/4 w-[200px] object-cover"
              width={300}
              height={400}
            />
            <figcaption className="text-3 text-muted-foreground pt-2">
              Photo by{" "}
              <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollAreaBar orientation="horizontal" />
    </ScrollArea>
  );
}
