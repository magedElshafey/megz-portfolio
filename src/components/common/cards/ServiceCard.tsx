import { Service } from "../../../types/Services";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface ServiceCardProps {
  item: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-5 flex flex-col items-center justify-center rounded-lg shadow-lg border border-mainColor duration-300 hover:rounded-none cursor-pointer gap-3"
    >
      <img
        alt={item?.title}
        src={item?.icon}
        className="max-w-16 max-h-16 object-contain"
        loading="lazy"
      />
      <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-mainColor text-center">
        {t(item?.title)}
      </p>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {t(item?.descreption)}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
