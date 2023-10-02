import { useTranslation } from "react-i18next";

function About() {
  const [t] = useTranslation("global");

  return (
    <div id="about" className="max-w-[1140px] m-auto md:pl-20 p-4 pt-24">
      <h1 className="text-4xl font-bold text-start text-[#001b5e]">
        {t("about")}
      </h1>
      <div className="border-l-4 border-[#001b5e] ">
        <p className="py-4 text-xl text-[#16205b] pl-4">{t("about_me")}</p>
        <h4 className="text-2xl font-bold text-[#203966]">{t("edu_title")}</h4>
        <p className="pt-4 text-xl text-[#16205b] pl-4">
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://najottalim.uz/"
          >
            "NAJOT TA'LIM"
          </a>{" "}
          {t("edu_name_desc")} <br />
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://yandex.uz/maps/org/128069515051/?ll=70.442642%2C35.537627&z=4.72"
          >
            {t("edu_branch")}
          </a>
          {t("edu_branch_desc")}
          <a
            target="blank"
            className="italic text-sky-700"
            href="https://react.dev"
          >
            React Js
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
