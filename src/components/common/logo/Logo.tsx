import { Link } from "react-router-dom";

interface logoProps {
  logo?: string;
}

const Logo: React.FC<logoProps> = ({ logo }) => {
  return (
    <Link to="/">
      <img
        className="max-w-[200px] w-[100px]  lg:w-[130px] xl:w-[150px] 2xl:w-[180px] h-auto object-contain"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
