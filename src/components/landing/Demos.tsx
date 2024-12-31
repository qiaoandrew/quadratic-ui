import Demo from "~/components/landing/Demo";

export default function Demos() {
  return (
    <section className="relative grid gap-x-8 gap-y-16 px-6 pt-7 md:grid-cols-2 3xl:grid-cols-3 3xl:px-[calc((100vw-1248px)/2)]">
      <div className="absolute inset-x-6 inset-y-0 grid md:grid-cols-2 md:gap-x-8 3xl:inset-x-[calc((100vw-1248px)/2)] 3xl:grid-cols-3">
        <div className="border-x" />
        <div className="border-x" />
        <div className="border-x" />
      </div>
      <div className="absolute inset-x-0 inset-y-7 flex flex-col gap-y-16">
        <div className="h-64 border-y" />
        <div className="h-64 border-y" />
        <div className="h-64 border-y" />
      </div>
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
