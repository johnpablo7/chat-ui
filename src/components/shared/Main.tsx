import { RiSearchLine, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { contacts } from "../../data/contacts";

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
          <div className="flex items-center gap-2 pb-4">
            <img src="/img/message.png" alt="message" />
            <h5 className="text-sm text-[#B4B5B7]">All Message</h5>
          </div>
          {/* Contact */}
          {contacts.map((contact) => (
            <NavLink to="/" key={contact.id} className="flex w-full gap-4 mb-8">
              {/* Image */}
              <div className="relative flex items-center justify-center">
                <img src={contact.img} alt="contact" />
                <RiCheckboxBlankCircleFill className="absolute text-xs text-[#41D37E] -right-0 bottom-1 ring-2 ring-white rounded-full" />
              </div>
              {/* Name and Hour */}
              <div className="flex w-full justify-between">
                <div>
                  <h3 className="text-[#E9E9E9] font-semibold">
                    {contact.name}
                  </h3>
                  <div className="flex items-center">
                    {contact.voice && (
                      <span className="pr-2">{contact.voice}</span>
                    )}
                    {contact.typing && <span>{contact.typing}</span>}
                    <p className="text-[#D2D2D2]">{contact.text}</p>
                    <p className="text-[#44464B]">{contact.textoff}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#A9ABAD] mb-1">{contact.hour}</h3>
                  {contact.notification && (
                    <span className="bg-[#D34141] text-white rounded-full py-1 px-2 text-xs float-right">
                      {contact.notification}
                    </span>
                  )}
                  {contact.checked && (
                    <span className="float-right">{contact.checked}</span>
                  )}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
      <section className="bg-shark-700 col-span-4">2</section>
      <section className="bg-shark-500 col-span-2">3</section>
    </main>
  );
};
