import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/Resizable";

export default function ResizableNoHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-112 rounded-2 border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-56 items-center justify-center p-6">
          <p className="text-4 font-semibold">One</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <p className="text-4 font-semibold">Two</p>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <p className="text-4 font-semibold">Three</p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
