import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../../components/ui/Tabs";
import CodeBlock from "./CodeBlock";

import { readFile } from "~/utils/file-system";
import { cn } from "~/utils/tailwind";
import { COMPONENT_PREVIEWS } from "~/constants/component-previews";

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
    <Tabs
      defaultValue="preview"
      className="mt-4 overflow-visible rounded-3 border"
    >
      <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
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
      <TabsContent value="code" className="mt-0">
        <CodeBlock
          language="tsx"
          className="rounded-b-[15px] rounded-t-none border-none"
        >
          {code}
        </CodeBlock>
      </TabsContent>
    </Tabs>
  );
}
