import Demo from "~/components/landing/Demo";
import HorizontalDividers from "~/components/landing/HorizontalDividers";
import VerticalDividers from "~/components/landing/VerticalDividers";

export default function Demos() {
  return (
    <section className="relative grid gap-x-8 px-6 pt-7 md:grid-cols-2 3xl:grid-cols-3 3xl:px-[calc((100vw-1248px)/2)]">
      <VerticalDividers />
      <HorizontalDividers />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
    </section>
  );
}
