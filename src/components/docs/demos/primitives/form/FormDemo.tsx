"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Your username must be at least 2 characters.",
  }),
});

export default function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast(
      <div className="flex w-full flex-col gap-y-3">
        <p className="text-3-5 font-medium">
          You submitted the following values:
        </p>
        <pre className="rounded-1-5 bg-border/30 px-3 py-2">
          <code className="text-3-5 font-mono">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      </div>,
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[360px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="mb-3 flex flex-col gap-y-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
              </div>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>
  );
}
