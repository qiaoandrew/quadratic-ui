import NextLink from "next/link";

interface _LinkProps extends React.ComponentProps<"a"> {
  href: string;
  className?: string;
}

export default function _Link({ href, className, ...props }: _LinkProps) {
  const Comp = href.startsWith("/") ? NextLink : "a";

  return (
    <Comp
      href={href}
      className={className}
      {...(Comp === "a" && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
