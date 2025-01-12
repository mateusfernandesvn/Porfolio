import { useTranslations } from "next-intl";
import { ChevronRight } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  siteUrl: string;
}

export function CardProject() {
  const t = useTranslations("Home");

  const projects: Project[] = [
    {
      title: t("titleBarber"),
      description: t("descriptionBarber"),
      siteUrl: "https://barberanavalha.vercel.app/",
    },
    {
      title: t("titleCineverse"),
      description: t("descriptionCineverse"),
      siteUrl: "https://cineverseofc.vercel.app/",
    },
    {
      title: t("titleDevCurrency"),
      description: t("descriptionDevCurrency"),
      siteUrl: "https://criptomoedas-topaz.vercel.app/",
    },
    {
      title: t("titleSenaiBot"),
      description: t("descriptionSenaiBot"),
      siteUrl: "https://www.youtube.com/watch?v=GSzvVvewhI4",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="ttext-black dark:text-white text-center border border-purple-600 p-6 rounded-lg shadow-lg  "
        >
          <h2 className="text-3xl text-black dark:text-white text-center font-semibold capitalize mt-4 mb-2 ">
            {project.title}
          </h2>
          <p className="text-sm  text-black dark:text-gray-300 mb-4 group-hover:text-gray-100 transition-colors duration-300">
            {project.description}
          </p>

          <span className="flex items-center justify-center ">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-purple-500 text-lg font-medium flex items-center transition-all  hover:scale-110 ease-in-out duration-200"
            >
              {t("view")} <ChevronRight />
            </a>
          </span>
        </div>
      ))}
    </div>
  );
}
