import Image from "next/image";

export default function TailwindVariantsGraphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/tailwind-variants.svg"
        alt="Tailwind Variants"
        width={90}
        height={90}
        className="absolute -bottom-4 -right-4"
      />
    </div>
  );
}
