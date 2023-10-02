import { useTranslation } from "react-i18next";

function Translation() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full fixed z-[999] flex flex-row items-center md:justify-center gap-4 pt-4 ml-3 md:ml-0">
      <img
        onClick={() => handleChangeLanguage("uz")}
        src="https://tergov.uz/uploads/news/72cef04923577cc395792d82b5acbe0b.jpg"
        alt=""
        className="rounded object-cover shadow-lg shadow-gray-400 w-12 h-6 cursor-pointer hover:scale-110 ease-in duration-300"
      />
      <img
        onClick={() => handleChangeLanguage("en")}
        src="https://a-z-animals.com/media/2023/02/iStock-1217765834.jpg"
        alt=""
        className="rounded object-cover shadow-lg shadow-gray-400 w-12 h-6 cursor-pointer hover:scale-110 ease-in duration-300"
      />
      <img
        onClick={() => handleChangeLanguage("ru")}
        src="https://w.forfun.com/fetch/a7/a7576e885be80bafc5d8af7cdd3f9268.jpeg"
        alt=""
        className="rounded object-cover shadow-lg shadow-gray-400 w-12 h-6 cursor-pointer hover:scale-110 ease-in duration-300"
      />
    </div>
  );
}

export default Translation;
