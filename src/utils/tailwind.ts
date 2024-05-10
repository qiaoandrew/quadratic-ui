import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const borderRadiusClasses = [
  {
    rounded: [
      "none",
      "px",
      "0.5",
      "1",
      "1.5",
      "2",
      "2.5",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "full",
    ],
  },
];

const fontSizeClassGroup = [
  {
    text: [
      "3",
      "3.5",
      "4",
      "4.5",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ],
  },
];

const customTwMerge = extendTailwindMerge<"font-size" | "border-radius">({
  extend: {
    classGroups: {
      "font-size": fontSizeClassGroup,
      "border-radius": borderRadiusClasses,
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
