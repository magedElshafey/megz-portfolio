import { Link } from "react-router-dom";
import { navLinks } from "../../data/data";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/megz-01.png";
import logo2 from "../../assets/megz-02.png";
import Sidebar from "../Sidebar";
import Logo from "../../components/common/logo/Logo";
import { useTheme } from "../../store/ThemeContext";
import LanguageBtn from "./languageBtn/LanguageBtn";
import ModeBtn from "./modeBtn/ModeBtn";
import { motion } from "framer-motion";
const Navbar = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const { mode } = useTheme();
  return (
    <>
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed py-4 top-0 left-0 w-screen bg-white/90 dark:bg-[#111]/90 shadow-md z-50 transition-colors duration-300 backdrop-blur-md border-b border-b-mainColor"
      >
        <div className="fluid-container flex items-center justify-between gap-4">
          <Logo logo={mode === "light" ? logo : logo2} />
          <ul className="hidden md:flex items-center gap-3 xl:gap-5 text-nowrap">
            {navLinks?.map((item, index) => (
              <li
                key={index}
                className="font-medium  lg:text-xl duration-300 hover:text-mainColor"
              >
                {item?.link === "/" || item?.link === "/contact" ? (
                  <Link to={item?.link}>{t(item?.name)}</Link>
                ) : (
                  <a href={item?.link}>{t(item?.name)}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageBtn />
            <ModeBtn />
            <div className="md:hidden">
              <button onClick={handleShowSidebar}>
                <IoMdMenu size={30} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarRef={sidebarRef}
      />
    </>
  );
};

export default Navbar;

/**
 *   <div className="pt-4 container mx-auto px-8 md:px-12 lg:px-16">
                <div className="flex items-center justify-between">
                    <h1>logo</h1>
                   
                   
                </div>
            </div>
 */
