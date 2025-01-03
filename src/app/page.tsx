import { useTranslations } from "next-intl";
import Bg from "./components/ui/dot-pattern";
import Image from "next/image";
import Img from "../../public/image.png";
import { Container } from "./components/container";
import { Section } from "./components/section";
import { Skills } from "./components/skills";
import { CardServices } from "./components/cardServices";
import ScrollToTopButton from "./components/scrollButton";
import {Mail } from "lucide-react";
import {CardProject} from "./components/cardProject";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="w-full bg-neutral-950">
      <div className="min-h-screen w-full relative  overflow-hidden flex items-center justify-center">
        <Bg className="absolute inset-0 w-full h-full z-10" />
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-evenly min-h-screen relative z-20 px-4 md:px-8">
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-600 uppercase font-black animate-pulse tracking-wide">
              {t("title")}
            <h3 className="text-xl sm:text-2xl text-white uppercase font-bold">
              {t("caption")}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              {t("description")}
            </p>
            <div className="flex gap-4 items-center justify-center flex-wrap m-6 max-md:flex-col">
              <button className="p-3 w-48 bg-transparent border-2 font-medium border-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700">
                {t("curriculum")}
              </button>
              <button className="p-3 w-48 bg-purple-600 text-white font-medium rounded-xl shadow-md hover:bg-purple-700">
                {t("cta")}
              </button>
            </div>
          </div>
          <div className="relative z-30 mt-6 md:mt-0">
            <Image
              src={Img}
              alt="Imagem"
              width={280}
              height={280}
              quality={100}
              priority={true}
              className="border-2 border-purple-600 rounded-full hover:animate-spin duration-200 ease-in-out hover:border-purple-800 "
            />
          </div>
        </div>
      </div>

      <Container>
        <Section id="about">
          <h1 className="text-white text-4xl my-4 tracking-wider font-black capitalize lg:text-5xl">
            {t("titleAbout")} 
          </h1>
          <p className="text-center mt-6 text-white  text-base lg:text-lg">
            {t("textAbout")}
          </p>
        </Section>

        <Section  id="services">
          <h1 className="text-white text-4xl my-4 tracking-wider font-black capitalize lg:text-5xl">
            {t("titleServices")} 
          </h1>
          <CardServices/>
        </Section>

        <Section  id="skills">
          <h1 className="text-white text-4xl my-4 tracking-wider font-black capitalize lg:text-5xl">
            {t("titleSkills")}  
          </h1>
          <Skills />
        </Section>

        <Section  id="project">
          <h1 className="text-white text-4xl my-4 tracking-wider font-black capitalize lg:text-5xl">
            {t("titleProject")} 
          </h1>
          <CardProject />
        </Section>



        <Section  id="contact">
          <h1 className="text-white text-4xl my-4 tracking-wider font-black capitalize lg:text-5xl">
            {t("titleContact")}  
          </h1>
         <p className="text-2xl text-gray-300 font-medium max-w-xl my-4 text-center">{t ("textContact")}</p>
         <div className="flex gap-2 items-center text-white ">
         <Mail/>
         <p className="text-white text-lg my-2">mateusveloso2608@gmail.com</p>
         </div>
       
        </Section>

      <ScrollToTopButton/>
      </Container>
    </div>
  );
}
