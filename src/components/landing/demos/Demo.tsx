import AccordionDemo from "~/components/landing/demos/AccordionDemo";

export default function Demo() {
  return (
    <div>
      <div className="flex h-64 items-center justify-center bg-highlight p-6">
        <AccordionDemo />
      </div>
      <div className="h-16 p-3">
        <p className="font-mono text-3.5">Accordion</p>
      </div>
    </div>
  );
}
