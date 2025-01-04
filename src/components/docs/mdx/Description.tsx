interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <p
      data-spacing="large"
      className="mt-3 text-balance text-4.5 font-medium text-foreground/80"
    >
      {children}
    </p>
  );
}
