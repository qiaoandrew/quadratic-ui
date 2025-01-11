import Image from "next/image";
import { useTheme } from "next-themes";

export default function ShadcnUIGraphic() {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0">
      <Image
        src={
          theme === "light"
            ? "/img/logos/radix-ui-light.svg"
            : "/img/logos/radix-ui-dark.svg"
        }
        alt="Radix UI"
        width={121}
        height={193}
        className="absolute -bottom-9 -left-1"
      />
      <Image
        src="/img/logos/shadcn.avif"
        alt="shadcn"
        width={185}
        height={185}
        className="absolute -bottom-7 -right-7 rounded-full"
      />
    </div>
  );
}
