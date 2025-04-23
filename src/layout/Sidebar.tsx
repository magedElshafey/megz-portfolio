import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "../data/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Socials from "../components/common/socials/Socials";
interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarRef: React.RefObject<HTMLDivElement>;
}
const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  sidebarRef,
}) => {
  const { t } = useTranslation();
  return (
    <div
      ref={sidebarRef}
      className={`w-screen py-3 bg-darkColor duration-300 fixed top-0 z-[1000] ${
        showSidebar ? "left-0" : "left-[-400%]"
      }`}
    >
      <div className="flex justify-end px-8">
        <button onClick={() => setShowSidebar(false)}>
          <IoCloseSharp className="text-2xl text-white" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-3">
        {navLinks?.map((item, index) => (
          <li
            key={index}
            className="flex w-full items-center justify-center pb-3 border-b  border-b-white"
          >
            {item?.link === "/" || item?.link === "/contact" ? (
              <Link
                to={item?.link}
                onClick={() => setShowSidebar(false)}
                className="text-white text-xl duration-300"
              >
                {item?.name}
              </Link>
            ) : (
              <a
                href={item?.link}
                onClick={() => setShowSidebar(false)}
                className="text-white text-xl duration-300"
              >
                {item?.name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-5 px-4">
        <h5 className="text-white mb-2">{t("contact me")} :</h5>
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
