interface StepsProps {
  children: React.ReactNode;
}

function Steps({ children }: StepsProps) {
  return (
    <div className="mt-5 border-l pl-8 [counter-reset:step]">{children}</div>
  );
}

interface StepTitleProps {
  children: React.ReactNode;
}

function StepTitle({ children }: StepTitleProps) {
  return (
    <h3 className="step mt-8 text-4 font-medium text-foreground first:mt-0">
      {children}
    </h3>
  );
}

interface StepContentProps {
  children: React.ReactNode;
}

function StepContent({ children }: StepContentProps) {
  return <div className="mt-4">{children}</div>;
}

export { Steps, StepTitle, StepContent };
