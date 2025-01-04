interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <p className="mt-3 max-w-144 text-4.5 font-medium text-foreground/80">
      {children}
    </p>
  );
}
