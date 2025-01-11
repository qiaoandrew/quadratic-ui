import Image from "next/image";
import { useTheme } from "next-themes";

export default function T3Graphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/t3-light.svg"
            : "/img/logos/t3-dark.svg"
        }
        alt="T3"
        width={213}
        height={166}
        className="absolute -bottom-3 -right-3"
      />
    </div>
  );
}
