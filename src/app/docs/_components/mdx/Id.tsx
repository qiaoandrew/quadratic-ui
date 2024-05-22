interface IdProps {
  id: string;
}

export default function Id({ id }: IdProps) {
  return (
    <div
      id={id}
      className="pointer-events-none absolute inset-x-0 -mt-18 h-24 md:-mt-26"
    />
  );
}
