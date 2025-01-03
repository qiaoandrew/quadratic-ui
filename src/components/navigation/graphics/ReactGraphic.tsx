import Image from "next/image";

export default function ReactGraphic() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/img/logos/react.svg"
        alt="React"
        width={93}
        height={83}
        className="absolute -bottom-4 -right-4"
      />
    </div>
  );
}
