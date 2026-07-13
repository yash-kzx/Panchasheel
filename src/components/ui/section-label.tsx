interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-accent ${className}`}
    >
      <span className="block h-px w-4 bg-current flex-shrink-0" aria-hidden="true" />
      {children}
    </span>
  );
}
