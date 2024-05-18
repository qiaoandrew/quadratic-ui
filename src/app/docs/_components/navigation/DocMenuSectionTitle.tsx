interface DocMenuSectionTitleProps {
  children: React.ReactNode;
}

export default function DocMenuSectionTitle({
  children,
}: DocMenuSectionTitleProps) {
  return (
    <div className="px-3 pb-1">
      <p className="text-3.5 font-semibold text-foreground">{children}</p>
    </div>
  );
}
