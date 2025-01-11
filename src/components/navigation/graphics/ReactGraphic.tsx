import Image from "next/image";
import { useTheme } from "next-themes";

export default function ReactGraphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/react-light.svg"
            : "/img/logos/react-dark.svg"
        }
        alt="React"
        width={93}
        height={83}
        className="absolute -bottom-4 -right-4"
      />
    </div>
  );
}
