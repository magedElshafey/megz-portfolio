import { useTranslation } from "react-i18next";
import { portfolios } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { PortfolioTypes } from "../../../types/PortfolioTypes";
import createSlug from "../../../utils/createSlug";
import { IoIosArrowBack } from "react-icons/io";

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = (item: PortfolioTypes) => {
    navigate(`/portfolio/${item?.id}/${createSlug(item?.slug)}`);
  };
  return (
    <div id="portfolio" className="fluid-container space-between-sections">
      <p className="font-black text-md md:text-md lg:text-lg xl:text-xl 2xl:text-4xl mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 text-center">
        {t("my works")}
      </p>
      {portfolios?.map((item, index: number) => (
        <div
          key={index}
          className="flex items-center gap-4 md:gap-6 lg:gp-8 xl:gap-10 2xl:gap-12 flex-col md:flex-row mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10"
        >
          <div className="w-full md:w-1/3">
            <div
              className="w-full h-28 flex items-center justify-center bg-grayColor font-black text-mainColor uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl cursor-pointer duration-300 hover:scale-105 mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 group"
              onClick={() => handleNavigate(item)}
            >
              <p>{t(item?.title)}</p>
            </div>
            <div className="flex w-fit items-center gap-4 cursor-pointer group text-mainColor mb-3 md:mb-4 lg:mb-5">
              <IoIosArrowBack
                size={20}
                className={`${
                  i18n.language === "en"
                    ? "rotate-180 group-hover:translate-x-2"
                    : "group-hover:-translate-x-2"
                } duration-300 `}
              />
              <p className="font-semibold txt-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {t(item?.title)}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t(item?.descreption)}
            </p>
          </div>
          <div className="w-full md:flex-1">
            <img
              alt={item?.title}
              loading="lazy"
              src={item?.image}
              className="w-full object-cover h-[370px] md:h-[420px] lg:h-[470px] xl:h-[520px] 2xl:h-[570px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
