import { useTranslations } from "next-intl";
import Link from "next/link";
import { Languages } from "lucide-react";


export default function Header() {
  const t = useTranslations("Home");

  return (
    <div className="flex w-full p-4 bg-black text-white fixed top-0 left-0 right-0 z-50">
      <nav className="w-full px-20 flex justify-between items-center max-lg:px-2">
        <div>
          <Link href="/" className="text-2xl uppercase font-bold">
            &lt;MF <span className="text-purple-500">Dev</span>/&gt;
          </Link>
        </div>
        <div className="flex gap-6 items-center capitalize text-lg max-lg:hidden">
          <Link
            href="/"
            className="hover:scale-105 duration-300 transition-all hover:text-purple-400"
          >
            {t("home")}
          </Link>

          <Link
            href="#about"
            className="hover:scale-105 duration-300 transition-all hover:text-purple-400"
          >
            {t("about")}
          </Link>

          <Link
            href="#project"
            className="hover:scale-105 duration-300 transition-all hover:text-purple-400"
          >
            {t("project")}
          </Link>

          <Link
            href="#contact"
            className="hover:scale-105 duration-300 transition-all hover:text-purple-400"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <div className="cursor-pointer hover:bg-purple-400 rounded-md p-2 transition-all duration-200">
            <Languages size={20} />
          </div>
        </div>
      </nav>
    </div>
  );
}
