import { useEffect, useState, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface useActiveSectionProps {
  ids: string[];
}

export const useActiveId = ({ ids }: useActiveSectionProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const updateActiveId = (entries: IntersectionObserverEntry[]) => {
    const visibleEntries = entries.filter((entry) => entry.isIntersecting);

    if (visibleEntries.length > 0 && visibleEntries[0]) {
      visibleEntries.sort(
        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
      );
      setActiveId(visibleEntries[0].target.id);
    } else {
      setActiveId(null);
    }
  };

  const debouncedUpdateActiveId = useDebouncedCallback(updateActiveId, 5);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(debouncedUpdateActiveId, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    elements.forEach((element) => {
      if (element) {
        observerRef.current!.observe(element);
      }
    });

    const initialEntries: IntersectionObserverEntry[] = elements.map(
      (element) => {
        const rect = element.getBoundingClientRect();
        return {
          target: element,
          isIntersecting: rect.top >= 0 && rect.bottom <= window.innerHeight,
          boundingClientRect: rect,
          intersectionRatio: 1,
          intersectionRect: rect,
          rootBounds: null,
          time: Date.now(),
        } as IntersectionObserverEntry;
      },
    );

    updateActiveId(initialEntries);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [ids, debouncedUpdateActiveId]);

  return activeId;
};
