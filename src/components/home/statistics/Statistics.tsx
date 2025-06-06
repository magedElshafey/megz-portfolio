import useStatisticsLogic from "./logic/useStatisticsLogic";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Statistics = () => {
  const { t } = useTranslation();
  const { setStartCounting, count, stats, itemVariants } = useStatisticsLogic();
  return (
    <motion.div
      variants={itemVariants}
      id="stats"
      className="fluid-container space-between-sections"
      onViewportEnter={() => setStartCounting(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            className="p-5 flex flex-col items-center justify-center rounded-lg shadow-lg border border-mainColor"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-mainColor">
              +{count[index]}
            </p>
            <p className="mt-2 text-gray-700 font-semibold">{t(item.desc)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statistics;
