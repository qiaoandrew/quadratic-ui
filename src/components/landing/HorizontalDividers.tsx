export default function HorizontalDividers() {
  return (
    <div className="pointer-events-none absolute inset-x-0 inset-y-7 flex flex-col gap-y-16">
      <div className="h-64 border-y" />
      <div className="h-64 border-y" />
      <div className="h-64 border-y" />
    </div>
  );
}
