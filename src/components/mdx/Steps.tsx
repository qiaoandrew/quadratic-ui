import { cn } from "~/utils/tailwind";

interface StepsProps {
  className?: string;
  children: React.ReactNode;
}

const Steps = ({ className, children }: StepsProps) => {
  return (
    <div
      className={cn(
        "ml-4 mt-5 border-l border-l-border pl-8 [counter-reset:step] md:ml-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface StepTitleProps {
  className?: string;
  children: React.ReactNode;
}

const StepTitle = ({ className, children }: StepTitleProps) => {
  return (
    <h3
      className={cn(
        "step -mb-1 mt-10 text-4 font-medium leading-7 text-foreground first:mt-0",
        className,
      )}
    >
      {children}
    </h3>
  );
};

interface StepContentProps {
  className?: string;
  children: React.ReactNode;
}

const StepContent = ({ className, children }: StepContentProps) => {
  return <div className={cn("mt-6", className)}>{children}</div>;
};

export { Steps, StepTitle, StepContent };