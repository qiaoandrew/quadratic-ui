import Image from "next/image";

export default function ShadcnUIGraphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/radix.svg"
        alt="Radix UI"
        width={121}
        height={193}
        className="absolute -bottom-9 -left-1"
      />
      <Image
        src="/img/logos/shadcn.avif"
        alt="shadcn"
        width={185}
        height={185}
        className="absolute -bottom-7 -right-7 rounded-full"
      />
    </div>
  );
}
