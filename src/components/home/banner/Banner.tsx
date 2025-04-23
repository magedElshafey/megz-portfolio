import banner from "../../../assets/hero-removebg-preview.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="overflow-x-hidden space-between-sections">
      <motion.img
        alt="banner"
        src={banner}
        loading="lazy"
        className="w-full md:w-1/2 object-contain mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="w-screen h-[100px] md:h-[120px] lg:h-[150px] xl:h-[200px] bg-mainColor"></div>
    </div>
  );
};

export default Banner;
