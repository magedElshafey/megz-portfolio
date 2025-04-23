import { useTranslation } from "react-i18next";
import megz from "../../../assets/megzat.png";
import { motion } from "framer-motion";
const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="fluid-container min-h-[50vh] space-between-sections"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-black text-md md:text-lg lg:text-xl xl:text-2xl mb-2 text-center"
        >
          {t(
            "Full Stack Web Developer | Building Smart, Scalable & Beautiful Applications"
          )}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-3/4 mx-auto text-center leading-relaxed text-gray-600 dark:text-gray-300 mb-4"
        >
          {t(
            "I’m a Full Stack Developer with a passion for building efficient, scalable, and user-friendly web applications. With experience in both front-end and back-end development, I bring ideas to life with clean code, intuitive interfaces, and solid architecture. Always eager to learn, grow, and build impactful digital products."
          )}
        </motion.p>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          alt="megz"
          src={megz}
          className="w-full md:w-1/2 lg:w-1/4 mx-auto h-auto rounded-md"
        />
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12"
        >
          <motion.p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-mainColor mb-4">
            {t("Hi, I'm Maged Elshafey — glad you're here!")}
          </motion.p>
          <motion.p className="text-gray-600 dark:text-gray-300 mb-3">
            {t(
              "I'm a Full Stack Developer with a passion for crafting complete, scalable, and user-focused web applications. Over the past year, I’ve worked remotely with agencies, supported startups, and collaborated with creative minds to bring digital ideas to life for both businesses and end-users."
            )}
          </motion.p>
          <motion.p className="text-gray-600 dark:text-gray-300">
            {t(
              "I'm a lifelong learner, naturally curious, and always striving to sharpen my skills — one challenge at a time. Whether it's front-end design or back-end logic, I love turning complex problems into elegant digital solutions."
            )}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
