import { useTranslations } from "next-intl";
import { Linkedin, Mail, Github } from "lucide-react";

export function About() {
  const t = useTranslations("Home");
  return (
    <>
      <p className="text-center text-black dark:text-white lg:text-lg ">
        {t("textAbout")}
      </p>

      <div className="flex b gap-8 mt-8 items-center justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/mateusfernandesvn/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600  hover:text-purple-800 ease-in-out duration-150"
          aria-label="Link para Twitter"
        >
          <Linkedin size={30} />
        </a>

        <a
          href="https://github.com/mateusfernandesvn"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600 hover:text-purple-800 ease-in-out duration-150"
          aria-label="Link para GitHub"
        >
          <Github size={30} />
        </a>

        <a
          href="mailto:mateusveloso2608@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600 hover:text-purple-800 ease-in-out duration-150"
          aria-label="Link para LinkedIn"
        >
          <Mail size={30} />
        </a>
      </div>
    </>
  );
}
