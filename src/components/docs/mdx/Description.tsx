interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return <p className="mt-3 text-4 text-foreground/80">{children}</p>;
}
