import Image from "next/image";

export default function T3Graphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/t3.svg"
        alt="T3"
        width={213}
        height={166}
        className="absolute -bottom-3 -right-3"
      />
    </div>
  );
}
