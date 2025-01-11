import Image from "next/image";
import { useTheme } from "next-themes";

export default function QuickstartGraphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/quickstart-light.svg"
            : "/img/logos/quickstart-dark.svg"
        }
        alt="Quickstart"
        width={300}
        height={192}
        className="absolute -bottom-5 left-5"
      />
    </div>
  );
}
