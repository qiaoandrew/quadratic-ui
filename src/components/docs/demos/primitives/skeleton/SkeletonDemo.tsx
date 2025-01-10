import { Skeleton } from "~/components/ui/Skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-72 items-center gap-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}
