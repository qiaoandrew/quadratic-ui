import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import config from "../../tailwind.config";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": Object.keys(config.theme.fontSize).map(
        (key) => `text-${key}`,
      ),
      "text-color": Object.keys(config.theme.extend.colors).map(
        (key) => `text-${key}`,
      ),
      rounded: Object.keys(config.theme.borderRadius).map(
        (key) => `rounded-${key}`,
      ),
      "border-color": Object.keys(config.theme.extend.colors).map(
        (key) => `border-${key}`,
      ),
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
