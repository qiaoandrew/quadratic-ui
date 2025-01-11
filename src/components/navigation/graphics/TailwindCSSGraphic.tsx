import Image from "next/image";
import { useTheme } from "next-themes";

export default function TailwindCSSGraphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/tailwind-css-light.svg"
            : "/img/logos/tailwind-css-dark.svg"
        }
        alt="Tailwind CSS"
        width={94}
        height={57}
        className="absolute -bottom-1 -right-1"
      />
    </div>
  );
}
