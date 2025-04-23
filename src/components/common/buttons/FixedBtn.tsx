import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { socials } from "../../../data/data";
const FixedBtn = () => {
  const { i18n } = useTranslation();
  const [showArrow, setShowArrow] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleShowArrow = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowArrow);
    return () => {
      document.removeEventListener("scroll", handleShowArrow);
    };
  }, []);
  return (
    <>
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-4  w-9 h-9 rounded-[50%] flex justify-center items-center bg-mainColor duration-300 text-white z-50 cursor-pointer ${
          showArrow ? "right-4" : "right-[-300%]"
        }`}
      >
        <FaArrowUpLong size={20} />
      </button>
      <div className="hidden md:block">
        <div
          className={`fixed top-[50%] translate-y-[-50%] ${
            i18n.language === "ar" ? "right-0" : "left-0"
          }`}
        >
          {socials?.map((item, index) => (
            <a
              key={index}
              href={item?.url}
              target="_blank"
              rel="noreferrer noopner"
              className="flex items-center justify-center w-11 h-8 duration-300 hover:w-14 bg-grayColor dark:bg-[#111] dark:hover:bg-mainColor hover:bg-mainColor hover:text-white mb-3 text-md lg:text-lg xl:text-xl z-30 "
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FixedBtn;
