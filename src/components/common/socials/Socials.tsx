import { socials } from "../../../data/data";

const Socials = () => {
  return (
    <ul className="flex items-center gap-2 flex-wrap">
      {socials?.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index}>
            <a
              className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:h-11 2xl:w-11 text-base md:text-md 2xl:text-xl rounded-[50%] border border-gray-100 flex items-center justify-center duration-300 group bg-transparent hover:bg-white"
              href={item?.url}
              target="_blank"
              rel="noreferrer noopner"
            >
              <Icon className="text-white duration-300  group-hover:text-mainColor" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
