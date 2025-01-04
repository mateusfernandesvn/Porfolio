import { ReactNode } from "react";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <h1 className="text-white text-4xl my-12  tracking-wider font-semibold capitalize lg:text-5xl">
      {title} <span className="text-purple-500">.</span>
    </h1>
  );
}
