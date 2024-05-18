import { Skeleton } from "~/components/ui/Skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex items-center gap-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div>
        <Skeleton className="mb-2 h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
