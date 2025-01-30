"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "~/components/ui/Form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/RadioGroup";

const RADIO_GROUP_ITEMS = [
  {
    id: "all",
    label: "All new messages",
  },
  {
    id: "mentions",
    label: "Direct messages and mentions",
  },
  {
    id: "none",
    label: "Nothing",
  },
];

const formSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function RadioGroupFormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast(
      <div className="flex w-full flex-col gap-y-3">
        <p className="text-3.5 font-medium">
          You submitted the following values:
        </p>
        <pre className="rounded-1.5 bg-border/30 px-3 py-2">
          <code className="text-3.5 font-mono">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      </div>,
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-[320px] flex-col gap-y-8"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
                <FormLabel className="text-4.5">Notifications</FormLabel>
                <FormDescription>
                  Select the notification you want to receive.
                </FormDescription>
              </div>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col gap-y-1.5"
                >
                  {RADIO_GROUP_ITEMS.map((item) => (
                    <FormItem
                      key={item.id}
                      className="flex items-center gap-x-2"
                    >
                      <FormControl>
                        <RadioGroupItem value={item.id} />
                      </FormControl>
                      <FormLabel>{item.label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
