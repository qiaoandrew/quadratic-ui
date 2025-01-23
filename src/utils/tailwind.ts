import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { createTV } from "tailwind-variants";

import config from "../../tailwind.config";
import { BORDER_RADII, FONT_SIZES } from "~/constants/tailwind";

const classGroups = {
  "font-size": FONT_SIZES.map((key) => `text-${key}`),
  "text-color": Object.keys(config.theme.extend.colors).map(
    (key) => `text-${key}`,
  ),
  rounded: BORDER_RADII.map((key) => `rounded-${key}`),
  "border-color": Object.keys(config.theme.extend.colors).map(
    (key) => `border-${key}`,
  ),
};

const twMerge = extendTailwindMerge({ extend: { classGroups } });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tv = createTV({ twMerge: true, twMergeConfig: { classGroups } });
