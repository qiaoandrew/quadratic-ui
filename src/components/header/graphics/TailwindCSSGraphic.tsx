import Image from "next/image";

export default function TailwindCSSGraphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/tailwind-css.svg"
        alt="Tailwind CSS"
        width={94}
        height={57}
        className="absolute -bottom-1 -right-1"
      />
    </div>
  );
}
