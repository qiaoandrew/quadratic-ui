import Image from "next/image";
import { useTheme } from "next-themes";

export default function FigmaGraphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/figma-light.svg"
            : "/img/logos/figma-dark.svg"
        }
        alt="Figma"
        width={337}
        height={196}
        className="absolute left-[10%] top-[38%]"
      />
    </div>
  );
}
