import saudi from "../../../assets/saudi.png";
import united from "../../../assets/united-states.png";
import { useLanguage } from "../../../store/LanguageProvider";
const LanguageBtn = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <>
      {language === "ar" ? (
        <img
          alt="english-icon"
          src={united}
          className="cursor-pointer object-contain w-6 h-6"
          onClick={() => changeLanguage("en")}
        />
      ) : (
        <img
          alt="arabic-icon"
          src={saudi}
          className="cursor-pointer object-contain w-6 h-6"
          onClick={() => changeLanguage("ar")}
        />
      )}
    </>
  );
};

export default LanguageBtn;
