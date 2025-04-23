import darkmode from "../../../assets/sleep-mode.png";
import lightMode from "../../../assets/light-mode.png";
import { useTheme } from "../../../store/ThemeContext";

const ModeBtn = () => {
  const { toggleMode, mode } = useTheme();
  return (
    <img
      alt={mode === "light" ? "darkmode-icon" : "lightMode-icon"}
      src={mode === "light" ? darkmode : lightMode}
      className="cursor-pointer object-contain w-5 h-5 dark:invert dark:brightness-0"
      onClick={toggleMode}
    />
  );
};

export default ModeBtn;
