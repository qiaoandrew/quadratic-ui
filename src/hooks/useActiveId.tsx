import { useEffect, useState, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

interface UseActiveIdProps {
  ids: string[];
  threshold?: number | number[];
  rootMargin?: string;
  debounceMs?: number;
}

interface CachedElement {
  id: string;
  element: HTMLElement;
  ratio: number;
}

export default function useActiveId({
  ids,
  threshold = [0, 0.1, 0.25, 0.5, 0.75, 1],
  rootMargin = "0px 0px -10% 0px",
  debounceMs = 5,
}: UseActiveIdProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Cache DOM elements to avoid repeated querySelector calls
  const elementsCache = useRef<Map<string, HTMLElement>>(new Map());
  const intersectingElements = useRef<Map<string, number>>(new Map());

  // Memoize the update function to avoid recreation
  const updateActiveId = useDebouncedCallback(
    (entries: IntersectionObserverEntry[]) => {
      let shouldUpdate = false;

      // Batch process all entries
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          if (
            !intersectingElements.current.has(id) ||
            intersectingElements.current.get(id) !== entry.intersectionRatio
          ) {
            intersectingElements.current.set(id, entry.intersectionRatio);
            shouldUpdate = true;
          }
        } else if (intersectingElements.current.has(id)) {
          intersectingElements.current.delete(id);
          shouldUpdate = true;
        }
      });

      // Only proceed if there were actual changes
      if (!shouldUpdate && activeId !== null) return;

      // Get all visible elements in one batch
      const visibleElements: CachedElement[] = [];
      intersectingElements.current.forEach((ratio, id) => {
        const element = elementsCache.current.get(id);
        if (element) {
          visibleElements.push({ id, element, ratio });
        }
      });

      if (visibleElements.length > 0) {
        // Batch read all DOM measurements
        const measurements = visibleElements.map(({ element, id }) => ({
          id,
          top: element.getBoundingClientRect().top,
        }));

        // Sort based on the measurements
        const topId = measurements.sort((a, b) => a.top - b.top)[0]?.id ?? "";

        if (topId !== activeId) {
          setActiveId(topId);
        }
      } else if (activeId !== null) {
        setActiveId(null);
      }
    },
    debounceMs,
  );

  useEffect(() => {
    // Clear and rebuild element cache
    elementsCache.current.clear();
    intersectingElements.current.clear();

    const elements = ids
      .map((id) => {
        const element = document.getElementById(id);
        if (element) {
          elementsCache.current.set(id, element);
        }
        return element;
      })
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    // Create new observer
    observerRef.current = new IntersectionObserver(updateActiveId, {
      root: null,
      rootMargin,
      threshold: Array.isArray(threshold) ? threshold : [threshold],
    });

    // Observe all elements
    elements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Store refs for cleanup
    const observer = observerRef.current;
    const cache = elementsCache.current;
    const intersecting = intersectingElements.current;

    // Cleanup
    return () => {
      observer?.disconnect();
      observerRef.current = null;
      cache.clear();
      intersecting.clear();
    };
  }, [ids, threshold, rootMargin, updateActiveId]);

  return activeId;
}
