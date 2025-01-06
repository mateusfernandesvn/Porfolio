'use client'; // Diretiva 'use client' para renderização no lado do cliente

import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export function Section({ id, children }: SectionProps) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); 
        }
      },
      { threshold: 0.5 } 
    );

    const element = document.getElementById(id || "");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element); 
    };
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50, 
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut", 
      }}
      id={id}
      className="w-full flex flex-col items-center justify-center my-6 h-auto p-12 max-md:px-4 max-md:mt-0"
    >
      {children}
    </motion.div>
  );
}
