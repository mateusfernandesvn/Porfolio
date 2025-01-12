import { ReactNode } from "react";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <h1 className="text-black dark:text-white text-4xl my-14 tracking-wider font-semibold uppercase lg:text-5xl">
      {title} <span className="text-purple-800 dark:text-purple-500">.</span>
    </h1>
  );
}
