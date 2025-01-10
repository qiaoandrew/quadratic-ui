"use client";

import { useState } from "react";
import { Loader2Icon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/AlertDialog";
import { Button } from "~/components/ui/Button";

export default function AlertDialogControlledDemo() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setOpen(false);
    setLoading(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="relative [&_svg]:size-4.5"
            onClick={onDeleteClick}
          >
            <span className={cn(loading && "opacity-0")}>Delete</span>
            {loading && (
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Loader2Icon className="animate-spin" />
              </span>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
