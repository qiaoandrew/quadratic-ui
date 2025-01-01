export function textToHtmlId(text: string) {
  if (!text.trim()) {
    throw new Error("text is empty");
  }

  return text
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
