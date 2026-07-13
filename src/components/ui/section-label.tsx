interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-4 text-[15px] md:text-[17px] lg:text-[19px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-2 md:mb-3 ${className}`}
    >
      <span className="block h-px w-[56px] bg-current flex-shrink-0" aria-hidden="true" />
      {children}
    </span>
  );
}
