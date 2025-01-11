import Image from "next/image";
import { useTheme } from "next-themes";

export default function CreateT3AppGraphic() {
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
        width={40}
        height={31}
        className="absolute right-4 top-4"
      />
      <Image
        src="/img/logos/next.svg"
        alt="Next.js"
        width={70}
        height={70}
        className="absolute -bottom-4 -left-4 -rotate-12"
      />
      <Image
        src={
          theme === "light"
            ? "/img/logos/tailwind-css-light.svg"
            : "/img/logos/tailwind-css-dark.svg"
        }
        alt="Tailwind CSS"
        width={47}
        height={28}
        className="absolute bottom-1 left-21"
      />
      <Image
        src={
          theme === "light"
            ? "/img/logos/react-light.svg"
            : "/img/logos/react-dark.svg"
        }
        alt="React"
        width={89}
        height={81}
        className="absolute -bottom-8 right-15"
      />
      <Image
        src={
          theme === "light"
            ? "/img/logos/ts-light.svg"
            : "/img/logos/ts-dark.svg"
        }
        alt="TypeScript"
        width={46}
        height={46}
        className="absolute -right-2.5 bottom-2.5 rotate-6"
      />
    </div>
  );
}
