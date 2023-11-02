import { homeImage } from "../assets";
import { TypeAnimation } from "react-type-animation";
import myResume from "../resume/Ilyosjon_Axmadaliyev_CV.pdf";
import Links from "./Links";
import { useTranslation } from "react-i18next";

function Main() {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="main">
      <img
        src={homeImage}
        alt="person"
        className="w-full h-screen object-cover"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/70">
        <div className="sm:pl-3 sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1100px] m-auto w-full h-screen flex flex-col justify-center items-center sm:items-start">
          <h1 className="sm:text-5xl text-center sm:text-left text-3xl font-bold text-gray-300">
            {t("name")}
          </h1>
          <h2 className="flex sm:text-4xl text-2xl pt-4 text-gray-300">
            <TypeAnimation
              sequence={[t("job"), 3000, t("expert"), 3000, t("country"), 2000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h2>
          <div className="pt-6 flex items-center justify-between max-w-[200px] w-full">
            <Links />
          </div>
          <a
            target="blank"
            href={myResume}
            download={"Shaxsiy-rezyume"}
            className="mt-6 text-md bg-slate-400 rounded p-1.5 shadow-lg hover:scale-105 ease-in duration-200"
          >
           Download CV ⇩
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
