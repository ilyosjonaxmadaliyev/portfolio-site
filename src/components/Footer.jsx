import { AiOutlineCopyright } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global");

  return (
    <div className="bg-slate-500 p-4 flex justify-center">
      <h4 className="flex items-center sm:text-xl text-[#0c0b29]">
        <span className="mr-2">
          <AiOutlineCopyright />
        </span>
        {t("footer")}
      </h4>
    </div>
  );
}

export default Footer;
