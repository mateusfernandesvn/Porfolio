"use client"
import { useState, useEffect } from "react";
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-purple-700 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-purple-600 transition"
          aria-label="Scroll to top"
        >
         <ArrowUp  />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
