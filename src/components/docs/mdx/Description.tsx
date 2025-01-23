interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <p className="text-4 text-foreground/80 2xs:text-4-5 mt-3 mb-9 font-medium text-balance">
      {children}
    </p>
  );
}
