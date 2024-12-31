import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/Accordion";

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-full max-w-72"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-3 text-3 [&_svg]:size-3.5">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="pb-3 text-3">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="py-3 text-3 [&_svg]:size-3.5">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent className="pb-3 text-3">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="py-3 text-3 [&_svg]:size-3.5">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="pb-3 text-3">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
