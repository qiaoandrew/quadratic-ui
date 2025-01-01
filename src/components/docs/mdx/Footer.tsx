import FooterButton from "~/components/docs/mdx/FooterButton";

interface FooterProps {
  previousLabel?: string;
  previousHref?: string;
  nextLabel?: string;
  nextHref?: string;
}

export default function Footer({
  previousLabel,
  previousHref,
  nextLabel,
  nextHref,
}: FooterProps) {
  return (
    <footer className="mt-16 flex justify-between">
      {previousLabel && previousHref ? (
        <FooterButton
          direction="previous"
          href={previousHref}
          label={previousLabel}
        />
      ) : (
        <div />
      )}
      {nextLabel && nextHref ? (
        <FooterButton direction="next" href={nextHref} label={nextLabel} />
      ) : (
        <div />
      )}
    </footer>
  );
}
