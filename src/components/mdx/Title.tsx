interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h1 className="text-9 font-bold">{children}</h1>;
}
