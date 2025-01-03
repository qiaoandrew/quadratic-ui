import Image from "next/image";

export default function NextGraphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/next.svg"
        alt="Next.js"
        width={90}
        height={90}
        className="absolute -bottom-2.5 -right-2.5"
      />
    </div>
  );
}
