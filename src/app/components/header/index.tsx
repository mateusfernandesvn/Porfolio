import { useTranslations } from "next-intl";
import Link from "next/link";
import { ModeToggle } from "../ui/modeToggle";
import { LanguagesToggle } from "../ui/LanguagesToggle";

export default function Header() {
  const t = useTranslations("Home");

  return (
    <div className="flex w-full p-4 text-black absolute dark:text-white z-50">
      <nav className="w-full px-20 flex justify-between items-center max-lg:px-2">
        <div>
          <Link href="/" className="text-2xl uppercase font-bold">
            &lt;MF{" "}
            <span className="text-purple-800 dark:text-purple-500">Dev</span>
            /&gt;
          </Link>
        </div>
        <div className="flex gap-6 items-center capitalize font-semibold text-lg max-lg:hidden">
          <Link
            href="/"
            className="hover:scale-105 duration-300 transition-all "
          >
            {t("home")}
          </Link>

          <Link
            href="#about"
            className="hover:scale-105 duration-300 transition-all"
          >
            {t("about")}
          </Link>

          <Link
            href="#project"
            className="hover:scale-105 duration-300 transition-all"
          >
            {t("project")}
          </Link>

          <Link
            href="#contact"
            className="hover:scale-105 duration-300 transition-all"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <LanguagesToggle />
        </div>
      </nav>
    </div>
  );
}
