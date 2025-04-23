import { Link } from "react-router-dom";
import ServiceCard from "../../components/common/cards/ServiceCard";
import About from "../../components/home/about/About";
import { service } from "../../data/data";
import { useTranslation } from "react-i18next";
import Banner from "../../components/home/banner/Banner";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <About />
      <div id="services" className="fluid-container space-between-sections">
        <p className="font-black text-md md:text-md lg:text-lg xl:text-xl 2xl:text-4xl mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 text-center">
          {t("our services")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {service?.slice(0, 6)?.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8">
          <Link
            to="/services"
            className="flex items-center justify-center rounded-md bg-mainColor text-white py-2 px-5"
          >
            {t("View all services")}
          </Link>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default HomePage;
