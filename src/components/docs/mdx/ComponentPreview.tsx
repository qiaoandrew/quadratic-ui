import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/Tabs";

import { readFile } from "~/utils/fs";
import { cn } from "~/utils/tailwind";
import { COMPONENT_PREVIEWS } from "~/constants/componentPreviews";

import CodeBlock from "~/components/docs/mdx/CodeBlock";

interface ComponentPreviewProps {
  id: keyof typeof COMPONENT_PREVIEWS;
  previewContainerClassName?: string;
}

export default async function ComponentPreview({
  id,
  previewContainerClassName,
}: ComponentPreviewProps) {
  const { Preview, path } = COMPONENT_PREVIEWS[id];

  const code = await readFile(path);

  const tabsTriggerStyles = cn(
    "rounded-0 border-b border-b-transparent px-4.5 pb-3 pt-3.5 first:rounded-tl-3",
    "data-[state=active]:border-b-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground",
  );

  return (
    <Tabs
      defaultValue="preview"
      className={cn(
        "mt-6 overflow-visible rounded-3 border",
        "[&:where(h3+&)]:mt-4",
      )}
    >
      <TabsList className="h-auto w-full justify-start rounded-0 border-b bg-transparent p-0">
        <TabsTrigger value="preview" className={tabsTriggerStyles}>
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className={tabsTriggerStyles}>
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-0">
        <div
          className={cn(
            "mt-0 flex min-h-64 items-center justify-center p-4 md:min-h-96 md:p-8",
            previewContainerClassName,
          )}
        >
          <Preview />
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <CodeBlock className="rounded-t-none rounded-b-[11px] border-none">
          {code}
        </CodeBlock>
      </TabsContent>
    </Tabs>
  );
}
