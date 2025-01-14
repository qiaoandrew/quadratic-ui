import { useState, useEffect } from "react";

export default function useElementSize(
  ref: React.RefObject<HTMLElement | null>,
) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateSize = () => {
      const { clientWidth, clientHeight } = element;
      setSize({ width: clientWidth, height: clientHeight });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return size;
}
