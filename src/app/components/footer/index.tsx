import { Linkedin, Mail, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
   const t = useTranslations("Home"); 

  return (
    <div className="w-full h-20 bg-neutral-950 text-white flex flex-col items-center justify-center px-8 md:flex-row md:justify-between">
      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 opacity-80 mt-4 mb-2">
       {t("copyright")}
      </p>
      
      {/* Icons */}
      <div className="flex gap-6 items-center justify-center mb-4">
        <a
          href="https://www.linkedin.com/in/mateusveloso2608"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin
            size={20}
            className="hover:text-blue-500 duration-200 transition-all"
          />
        </a>
        <a
          href="mailto:mateusveloso2608@gmail.com"
          aria-label="Email"
        >
          <Mail
            size={20}
            className="hover:text-red-500 duration-200 transition-all"
          />
        </a>
        <a
          href="https://github.com/mateusfernandesvn"
          target="_blank"
          aria-label="GitHub"
        >
          <Github
            size={20}
            className="hover:text-purple-500 duration-200 transition-all"
          />
        </a>
      </div>
    </div>
  );
}
