import { RiSearchLine, RiNotification3Line } from "react-icons/ri";

export const Header = () => {
  return (
    <div className="h-[6vh] flex items-center justify-between px-8 bg-stone-50">
      <div>
        <img src="/logo.png" alt="logo" className="w-40 h-10 object-cover" />
      </div>
      <form>
        <div className="relative">
          <input
            type="text"
            className="bg-[#1E1F25] outline-none py-1 pl-4 pr-8 rounded text-white"
            placeholder="Search"
          />
          <RiSearchLine className="absolute right-2 top-2 text-white" />
        </div>
      </form>
      <div>
        <div className="relative">
          <RiNotification3Line className="text-xl" />
          <span className="bg-[#364997] absolute rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2">
            2
          </span>
        </div>
      </div>
    </div>
  );
};
