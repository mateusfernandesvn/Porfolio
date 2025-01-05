import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full flex flex-col items-center justify-center my-8 h-auto p-12 max-md:px-4 max-md:mt-0" >
      {children}
    </section>
  );
}
