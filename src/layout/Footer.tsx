import logo from "../assets/megz-02.png";
import Logo from "../components/common/logo/Logo";
import { useTranslation } from "react-i18next";
import Socials from "../components/common/socials/Socials";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <div className=" overflow-x-hidden">
      <div className=" w-screen bg-darkColor dark:bg-[#333]/90 dark:shadow-lg min-h-[200px] py-5 flex items-center text-white">
        <div className="fluid-container flex flex-col items-center justify-center gap-3">
          <Logo logo={logo} />
          <p className="text-base md:text-md xl:text-lg font-semibold text-center">
            {t("Living, learning, & leveling up one day at a time.")}
          </p>
          <div className="flex flex-col items-center gap-3">
            <p
              className={` font-medium ${
                i18n.language === "ar"
                  ? "text-base md:text-md xl:text-lg"
                  : "text-base"
              }`}
            >
              {t("contact me")} :
            </p>
            <Socials />
          </div>
          <p className="text-xs">
            {t("powerd by mes")} &copy; {currentYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
