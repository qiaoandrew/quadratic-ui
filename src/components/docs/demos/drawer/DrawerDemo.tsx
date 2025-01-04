"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Loader2Icon, MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Form, FormControl, FormField, FormItem } from "~/components/ui/Form";
import { Button } from "~/components/ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/Drawer";

const DATA = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];

const formSchema = z.object({
  goal: z.number().min(200).max(400),
});

export default function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: 350,
    },
  });

  const onSubmit = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // toast.success("Goal updated successfully.");
    // setIsOpen(false);
  };

  const { isSubmitting } = form.formState;

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto w-full max-w-96"
          >
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-y-3">
                    <FormControl>
                      <div className="flex items-center justify-center gap-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="xs"
                          subject="icon"
                          className="rounded-full"
                          onClick={() => field.onChange(field.value - 10)}
                          disabled={field.value <= 200}
                        >
                          <MinusIcon />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-16 font-bold tracking-tight">
                            {field.value}
                          </div>
                          <div className="text-3 uppercase text-muted-foreground">
                            Calories/day
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="xs"
                          subject="icon"
                          className="rounded-full"
                          onClick={() => field.onChange(field.value + 10)}
                          disabled={field.value >= 400}
                        >
                          <PlusIcon />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    </FormControl>
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={DATA}>
                          <Bar
                            dataKey="goal"
                            style={{
                              fill: "hsl(var(--foreground))",
                              opacity: 0.9,
                            }}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </FormItem>
                )}
              />
            </DrawerBody>
            <DrawerFooter>
              <Button type="submit" className="relative">
                {isSubmitting && (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Loader2Icon className="animate-spin" />
                  </span>
                )}
                <span className={cn(isSubmitting && "opacity-0")}>Submit</span>
              </Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
