import { ReactNode } from "react";
export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-8 p-8">
      {children}
    </section>
  );
}
