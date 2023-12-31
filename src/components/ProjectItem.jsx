import { useTranslation } from "react-i18next";

function ProjectItem({ img, title, desc, link }) {
  const [t] = useTranslation("global");

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 h-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-3xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-xl text-white text-center">{desc}</p>
        <a href={link} target="blank">
          <p className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            {t("more_info")}
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
