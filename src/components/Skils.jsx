import { useTranslation } from "react-i18next";

const skills = [
  "HTML 5",
  "CSS 3",
  "SCSS",
  "JAVASCRIPT",
  "TYPESCRIPT (basic)",
  "REACT JS",
  "REDUX-TOOLKIT",
  "REST-API",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "GIT",
  "DATABASE",
];
const tools = [
  "FIGMA",
  "VS-CODE",
  "GITHUB",
  "POSTMAN",
  "DOCKER",
  "GOOGLE CHROME",
];

function Skils() {
  const [t] = useTranslation("global");

  return (
    <div id="skils" className="max-w-[1140px] m-auto md:pl-20 p-4 pt-24">
      <h1 className="text-4xl font-bold text-start text-[#094e12]">{ t("skills")}</h1>
      <div className="border-l-4 border-[#094e12] ">
        <p className="pt-4 text-xl text-[#16205b] pl-4">{t("skills_desc")}</p>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          {t("category_skills")}
        </h3>
        <div className="flex flex-wrap pl-4">
          {skills.map((skil) => {
            return (
              <h5 key={skil} className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                {skil}
              </h5>
            );
          })}
          <h5 className="font-bold text-[#09190a]">
            <span className="px-2 text-green-600">*</span>
            {t("skills_1")}
          </h5>
        </div>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          {t("programs_used")}
        </h3>
        <div className="flex flex-wrap pl-4">
          {tools.map((tool) => {
            return (
              <h5 key={tool} className="font-bold text-[#09190a]">
                <span className="px-2 text-green-600">*</span>
                {tool}
              </h5>
            );
          })}
        </div>
        <h3 className="text-xl py-6 font-bold text-[#255c2d]">
          {t("languages")}
        </h3>
        <div className="flex flex-wrap pl-4">
          <h5 className="font-bold text-[#09190a]">
            <span className="px-2 text-green-600">*</span>
            {t("uz")}
          </h5>
          <h5 className="font-bold text-[#09190a]">
            <span className="px-2 text-green-600">*</span>
            {t("ru")}
          </h5>
          <h5 className="font-bold text-[#09190a]">
            <span className="px-2 text-green-600">*</span>
            {t("en")}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Skils;
