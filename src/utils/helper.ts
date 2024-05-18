const CAPTITAL_WORDS = ["otp"];

export const formatDocMenuLabel = (label: string) =>
  label
    .split("-")
    .map((word) =>
      CAPTITAL_WORDS.includes(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
