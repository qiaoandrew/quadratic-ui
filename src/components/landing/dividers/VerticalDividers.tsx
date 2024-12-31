export default function VerticalDividers() {
  return (
    <div className="pointer-events-none absolute inset-x-6 inset-y-0 grid md:grid-cols-2 md:gap-x-8 3xl:inset-x-[calc((100vw-1248px)/2)] 3xl:grid-cols-3">
      <div className="border-x" />
      <div className="border-x" />
      <div className="border-x" />
    </div>
  );
}
