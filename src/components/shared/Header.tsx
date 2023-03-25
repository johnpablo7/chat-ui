import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowDownSLine,
} from "react-icons/ri";

export const Header = () => {
  return (
    <header className="w-full h-[8vh] md:h-[6vh] flex items-center justify-between px-4 md:px-8 bg-shark-500">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 object-cover cursor-pointer"
        />
      </div>
      <form className="hidden md:block">
        <div className="relative">
          <input
            type="text"
            className="bg-[#050505] outline-none py-1 pl-4 pr-8 rounded text-[#9BABC5]"
            placeholder="Search"
          />
          <RiSearchLine className="absolute right-2 top-[6px] text-white cursor-pointer text-xl" />
        </div>
      </form>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <RiNotification3Line className="text-2xl text-white" />
          <span className="bg-[#5051F9] absolute rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2">
            2
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/img/user.png"
            alt="user"
            className="w-7 h-7 ring-2 ring-white rounded-full object-cover cursor-pointer"
          />
          <RiArrowDownSLine className="text-white text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};
