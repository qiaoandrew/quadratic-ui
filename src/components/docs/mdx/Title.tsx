interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h1 className="font-display text-9 font-semibold">{children}</h1>;
}
