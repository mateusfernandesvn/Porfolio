import { useTranslations } from "next-intl";
import { Linkedin, Mail, Github } from "lucide-react";

export function About() {
  const t = useTranslations("Home");
  return (
    <>
      <p className="text-center  text-white lg:text-lg ">{t("textAbout")}</p>

      <div className="flex b gap-4 mt-8 items-center justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/mateusfernandesvn/"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600 bg-neutral-900 p-3 rounded-lg hover:text-purple-700 ease-in-out duration-150"
          aria-label="Link para Twitter"
        >
          <Linkedin size={40} />
        </a>

        <a
          href="https://github.com/mateusfernandesvn"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600 bg-neutral-900 p-3 rounded-lg hover:text-purple-700 ease-in-out duration-150"
          aria-label="Link para GitHub"
        >
          <Github size={40} />
        </a>

        <a
          href="mailto:mateusveloso2608@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-purple-600 bg-neutral-900 p-3 rounded-lg hover:text-purple-700 ease-in-out duration-150"
          aria-label="Link para LinkedIn"
        >
          <Mail size={40} />
        </a>
      </div>
    </>
  );
}
