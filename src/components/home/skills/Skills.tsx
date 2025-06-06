import { IconType } from "react-icons";
import { skills, itemVariants } from "../../../data/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div
      id="skills"
      className="fluid-container p-6 space-y-10   transition-colors duration-300 space-between-sections"
    >
      <p className="font-black text-md md:text-md lg:text-lg xl:text-xl 2xl:text-4xl mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 text-center">
        {t("my skills")}
      </p>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category}>
          <h2 className="text-xl font-bold capitalize mb-4   text-mainColor">
            {t(category)}
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {skillList.map(
              (
                item: { name: string; class: string; icon: IconType },
                index: number
              ) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center bg-gray-100 dark:bg-[#111] shadow-md dark:shadow-lg rounded-xl p-4 hover:shadow-lg dark:hover:shadow-xl transition"
                >
                  <div className="text-4xl xl:text-5xl  mb-2">
                    {<item.icon className={item?.class} />}
                  </div>
                  <p className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                    {item?.name}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
