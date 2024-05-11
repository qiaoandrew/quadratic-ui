import { readFile } from "~/utils/docs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/Tabs";

import { COMPONENT_PREVIEWS } from "~/constants/component-previews";
import { cn } from "~/utils/tailwind";

interface ComponentPreviewProps {
  id: keyof typeof COMPONENT_PREVIEWS;
}

export default async function ComponentPreview({ id }: ComponentPreviewProps) {
  const { PreviewComponent, path } = COMPONENT_PREVIEWS[id];

  const code = await readFile(path);

  const tabsTriggerStyles = cn(
    "rounded-none border-b border-b-transparent px-4 py-3",
    "data-[state=active]:border-b-highlight-foreground data-[state=active]:bg-transparent data-[state=active]:text-highlight-foreground",
  );

  return (
    <Tabs defaultValue="preview" className="overflow-visible rounded-3 border">
      <TabsList>
        <TabsTrigger value="preview" className={tabsTriggerStyles}>
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className={tabsTriggerStyles}>
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-0">
        <div className="flex min-h-[280px] items-center justify-center p-4 md:min-h-[360px] md:p-8">
          <PreviewComponent />
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-0"></TabsContent>
    </Tabs>
  );
}
