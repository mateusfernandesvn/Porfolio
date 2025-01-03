import { Search, CodeXml, Pencil, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

export function CardServices() {
  const t = useTranslations("Home");

  const services = [
    {
      icon: CodeXml,
      text: t("webDevelopment"), // Ajuste a chave conforme sua estrutura de traduções
    },
    {
      icon: Pencil,
      text: t("uiDesign"), // Ajuste a chave conforme sua estrutura de traduções
    },
    {
      icon: Search,
      text: t("seoOptimization"), // Ajuste a chave conforme sua estrutura de traduções
    },
    {
      icon: Wrench,
      text: t("maintenance"), // Ajuste a chave conforme sua estrutura de traduções
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mt-8 max-md:grid-cols-1">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex border-2 border-purple-500 flex-col items-center justify-center p-6 rounded-lg text-white hover:scale-105 transition-all duration-200"
        >
          <service.icon size={40} className="text-purple-500" />
          <p className="mt-4 text-center font-medium max-w-xs">{service.text}</p>
        </div>
      ))}
    </div>
  );
}
