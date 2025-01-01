import { Button } from "~/components/ui/Button";

export default function AlertDialogDemo() {
  return (
    <div className="z-10 flex flex-col gap-y-5 rounded-3 border bg-background p-4.5">
      <div className="flex flex-col gap-y-1.5">
        <p className="text-3.5 font-semibold">Are you absolutely sure?</p>
        <p className="text-2.5 leading-4 text-muted-foreground">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </p>
      </div>
      <div className="flex flex-row-reverse justify-start gap-x-3">
        <Button
          variant="destructive-outline"
          size="sm"
          subject="text"
          className="text-2.5 h-7 rounded-1.5 px-2"
        >
          Delete
        </Button>
        <Button
          variant="outline"
          size="sm"
          subject="text"
          className="text-2.5 h-7 rounded-1.5 px-2"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
