const CAPTITAL_WORDS = ["OTP"];

export const formatDocMenuLabel = (label: string) =>
  label
    .split("-")
    .map((word) =>
      CAPTITAL_WORDS.includes(word)
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
