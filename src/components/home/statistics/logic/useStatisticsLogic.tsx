import { useEffect, useState } from "react";
import { stats, itemVariants } from "../../../../data/data";
const useStatisticsLogic = () => {
  const [count, setCount] = useState<number[]>(stats.map(() => 0));
  const [startCounting, setStartCounting] = useState(false);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (startCounting) {
      interval = setInterval(() => {
        setCount((prev) =>
          prev.map((val, idx) => (val < stats[idx].number ? val + 1 : val))
        );
      }, 50);
    }

    return () => clearInterval(interval);
  }, [startCounting]);
  return {
    count,
    setStartCounting,
    stats,
    itemVariants,
  };
};

export default useStatisticsLogic;
