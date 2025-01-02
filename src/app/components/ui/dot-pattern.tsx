import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  [key: string]: unknown; // Permite adicionar qualquer outro prop adicional
}

export function DotPattern({
  width = 16, 
  height = 16, 
  x = 0, 
  y = 0, 
  cx = 1, 
  cy = 0, 
  cr = 0.6, 
  className, 
  ...props
}: DotPatternProps) {
  // Gerar ID único para o pattern
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// Usando defaultProps para valores padrão e clareza
DotPattern.defaultProps = {
  width: 16,
  height: 16,
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  cr: 0.5,
};

export default DotPattern;
