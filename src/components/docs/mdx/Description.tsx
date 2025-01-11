interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <p className="mb-9 mt-3 text-balance text-4 font-medium text-foreground/80 2xs:text-4.5">
      {children}
    </p>
  );
}
