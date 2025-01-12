import { Search, CodeXml, Pencil, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

export function CardServices() {
  const t = useTranslations("Home");

  const services = [
    {
      icon: CodeXml,
      text: t("webDevelopment"),
    },
    {
      icon: Pencil,
      text: t("uiDesign"),
    },
    {
      icon: Search,
      text: t("seoOptimization"),
    },
    {
      icon: Wrench,
      text: t("maintenance"),
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2  max-md:grid-cols-1">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-black dark:text-white hover:scale-105 transition-all duration-200"
        >
          <service.icon size={40} className="text-purple-500" />
          <p className="mt-4 text-center font-medium max-w-xs">
            {service.text}
          </p>
        </div>
      ))}
    </div>
  );
}
