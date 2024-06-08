interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return <p className="mt-2 text-4.5 text-foreground/80">{children}</p>;
}
