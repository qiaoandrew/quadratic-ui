import { ProgressBar } from "~/components/ui/ProgressBar";

export default function ProgressBarVariantsDemo() {
  return (
    <div className="grid w-full max-w-[480px] grid-cols-4 gap-4">
      <ProgressBar value={50} className="col-span-3" />
      <p className="justify-self-end text-3.5 font-medium">Default</p>
      <ProgressBar value={30} variant="neutral" className="col-span-3" />
      <p className="justify-self-end text-3.5 font-medium">Neutral</p>
      <ProgressBar value={60} variant="success" className="col-span-3" />
      <p className="justify-self-end text-3.5 font-medium">Success</p>
      <ProgressBar value={20} variant="warning" className="col-span-3" />
      <p className="justify-self-end text-3.5 font-medium">Warning</p>
      <ProgressBar value={70} variant="error" className="col-span-3" />
      <p className="justify-self-end text-3.5 font-medium">Error</p>
    </div>
  );
}
