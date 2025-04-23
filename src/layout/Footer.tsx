import logo from "../assets/megz-02.png";
import Logo from "../components/common/logo/Logo";
import { useTranslation } from "react-i18next";
import Socials from "../components/common/socials/Socials";
import { Link, useLocation } from "react-router-dom";
import { FaRegHandPeace } from "react-icons/fa";
const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/contact" ? null : (
        <div className="min-h-[100px] lg:min-h-[140px] py-5 flex items-center bg-mainColor md:w-[95%] xl:w-[85%] mx-auto rounded-lg text-white text-nowrap">
          <div className="fluid-container flex items-center justify-between flex-col md:flex-row gap-3 md:gap-5">
            <p className="font-bold text-md md:text-lg 2xl:text-xl">
              {t("start a new project")}
            </p>
            <p>
              {t(
                "Interested in working together? We should queue up a time to chat."
              )}
            </p>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-3 bg-darkColor text-white rounded-md py-3 px-5 min-w-[150px] text-nowrap"
            >
              <p>{t("let's do it")}</p>
              <FaRegHandPeace size={20} />
            </Link>
          </div>
        </div>
      )}
      <div className=" w-screen bg-darkColor min-h-[200px] py-5 flex items-center text-white">
        <div className="fluid-container flex flex-col items-center justify-center gap-3">
          <Logo logo={logo} />
          <p className="text-base md:text-md xl:text-lg font-semibold">
            {t("Living, learning, & leveling up one day at a time.")}
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-base md:text-md xl:text-lg font-semibold">
              {t("contact me")} :
            </p>
            <Socials />
          </div>
          <p className="text-xs">
            {t("powerd by mes")} &copy; {currentYear}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

/**
 * 

import { useTranslation } from "react-i18next"
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";
import { socials } from "../data/data";
const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-screen mt-4 bg-blueColor">
            <div className="container mx-auto px-8 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12 text-white pt-4">
                    <div>
                        <h1 className="mb-1">logo</h1>
                        <p>slogan</p>
                    </div>
                    <div>
                        <h4 className="mb-3">{t("links")}</h4>
                        <ul>
                            {navLinks?.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <Link to={item?.link} className="duration-300">
                                        {t(item.name)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3">{t("contact us")}</h4>
                        <ul>
                            <li className="mb-2">
                                <a href={`https://wa.me/+201022153359`}>+201022153359</a>
                            </li>
                            <li className="mb-2">
                                <a className=" lowercase" href={`mailto:magedelshafey98@gmail.com`}>magedelshafey98@gmail.com</a>
                            </li>
                            <li>
                                El-Mansoura , Egypt
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3">{t("follow us")}</h4>
                        <ul className="flex items-center gap-2 flex-wrap text-white ">
                            {socials?.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <a

                                        href={item?.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className=" duration-300 hover:text-orangeColor hover:scale-110"
                                    >
                                        {item?.icon && <item.icon size={20} />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full py-3 flex items-center justify-center bg-blueColor  rounded-[8px] text-white gap-1 text-center opacity-50 mt-5">
                    {t("all rights reserved")} &copy; -  {t("refk")} {currentYear}
                </div>
            </div>
        </div>
    )
}

export default Footer
 */
