import { RiSearchLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

export const Main = () => {
  return (
    <main className="h-[92vh] md:h-[94vh] grid grid-cols-8">
      <section className="bg-shark-300 col-span-2">
        {/* Title and Search */}
        <div>
          <h1 className="text-white text-3xl p-8">Messages</h1>
          <form className="hidden md:block px-8">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-[#050505] outline-none py-2 pl-4 pr-8 rounded text-white"
                placeholder="Search"
              />
              <RiSearchLine className="absolute right-2 top-2 text-white cursor-pointer text-xl" />
            </div>
          </form>
        </div>
        {/* Contacts */}
        <div className="p-8">
          {/* Contact */}
          <div className="flex w-full gap-4">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              <img src="img/contact-1.png" alt="contact" />
              <RiCheckboxBlankCircleFill className="absolute text-[#41D37E] -right-1 bottom-0 ring-2 ring-white rounded-full" />
            </div>
            {/* Name and Hour */}
            <div className="flex w-full justify-between">
              <div>
                <h3 className="text-[#E9E9E9]">Killan James</h3>
                <p className="text-[#258C60]">Typing...</p>
              </div>
              <div>
                <h3 className="text-[#A9ABAD]">4:30 PM</h3>
                <span className="bg-[#D34141] text-white rounded-full py-1 px-2 text-xs float-right">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-shark-700 col-span-4">2</section>
      <section className="bg-shark-500 col-span-2">3</section>
    </main>
  );
};
