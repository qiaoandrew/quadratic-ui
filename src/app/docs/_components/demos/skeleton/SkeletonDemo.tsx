import { Skeleton } from "~/components/ui/Skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex items-center gap-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-y-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-52" />
      </div>
    </div>
  );
}
