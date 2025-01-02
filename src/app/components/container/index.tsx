import { ReactNode } from "react";
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-3  max-md:max-w-lg">
      {children}
    </div>
  );
}
