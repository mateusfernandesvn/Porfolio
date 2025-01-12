import { Linkedin, Mail, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
   const t = useTranslations("Home"); 

  return (
    <div className="w-full p-4 flex-col-reverse bg-slate-200 text-black dark:bg-black dark:text-white flex  items-center justify-center md:flex-row md:justify-around ">

      <p className="text-center text-sm text-gray-800 dark:text-gray-400 opacity-80 md: mt-4">
       {t("copyright")}
      </p>
      
      <div className="flex gap-6  items-center justify-center ">
        <a
          href="https://www.linkedin.com/in/mateusfernandesvn/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Linkedin
            size={24}
            className="hover:text-blue-500 duration-200 transition-all "
          />
        </a>
        <a
          href="mailto:mateusveloso2608@gmail.com"
          aria-label="Email"
        >
          <Mail
            size={24}
            className="hover:text-red-500 duration-200 transition-all"
          />
        </a>
        <a
          href="https://github.com/mateusfernandesvn"
          target="_blank"
          aria-label="GitHub"
        >
          <Github
            size={24}
            className="hover:text-purple-500 duration-200 transition-all"
          />
        </a>
      </div>
    </div>
  );
}
