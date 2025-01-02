import { useTranslations } from "next-intl";
import Link from "next/link";
import { Moon } from "lucide-react";
import { Languages } from "lucide-react";
export default function Header() {
  const t = useTranslations("Home");

  return (
    <div className="flex w-full p-5 bg-black text-white ">
      <nav className="w-full px-20 flex justify-between items-center max-lg:px-2">
        <div>
          <Link href="/" className="text-2xl uppercase font-bold ">
            &lt;MF <span className="text-purple-500">Dev</span>/&gt;
          </Link>
        </div>
        <div className="flex gap-14 items-center text-lg max-lg:hidden">
          <Link
            href="/"
            className="hover:scale-105  duration-300 transition-all hover:text-purple-400"
          >
            {t("home")}
          </Link>

          <Link
            href="t/about"
            className="hover:scale-105  duration-300 transition-all hover:text-purple-400"
          >
            {t("about")}
          </Link>

          <Link
            href="project"
            className="hover:scale-105  duration-300 transition-all hover:text-purple-400"
          >
            {t("project")}
          </Link>

          <Link
            href="contact"
            className="hover:scale-105 duration-300 transition-all hover:text-purple-400"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <div className="cursor-pointer hover:bg-purple-400 rounded-md p-2 transition-all duration-200">
            <Languages size={20} />
          </div>
          <div className="cursor-pointer hover:bg-purple-400 rounded-md p-2 transition-all duration-200">
            <Moon size={20} />
          </div>
        </div>
      </nav>
    </div>
  );
}
