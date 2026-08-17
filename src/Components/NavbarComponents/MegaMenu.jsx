import React from "react";
import { Link, NavLink } from "react-router-dom";

const MegaMenu = ({
  title,
  link,
  items,
  image,
  heading,
  description,
  buttonText,
  buttonLink,
  activePath,
}) => {
  return (
    <div className="relative group">
      <div className="relative">
        {/* <Link
          to={link || "#"}
          className="
            relative
            uppercase
            text-[13px]
            tracking-[0.16em]
            text-[#2C2C2C]
            hover:text-[#8B4513]
            transition-all
            duration-300
            pb-2
            inline-block
          "
        >
          {title}

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-0
              w-0
              h-[1.5px]
              rounded-full
              bg-[#C79A63]
              transition-all
              duration-300
              ease-out
              group-hover:w-[80%]
            "
          ></span>
        </Link> */}
       <NavLink
  to={activePath || link || "#"}
  className={({ isActive }) =>
    `
    group
    relative
    uppercase
    text-[13px]
    tracking-[0.16em]
    transition-all
    duration-300
    pb-2
    inline-block
    ${
      isActive
        ? "text-[#8B4513]"
        : "text-[#2C2C2C] hover:text-[#8B4513]"
    }
    `
  }
>
  {({ isActive }) => (
    <>
      {title}

      <span
        className={`
          absolute
          left-1/2
          -translate-x-1/2
          bottom-0
          h-[1.5px]
          rounded-full
          bg-[#C79A63]
          transition-all
          duration-300
          ease-out
          ${
            isActive
              ? "w-[80%]"
              : "w-0 group-hover:w-[80%]"
          }
        `}
      />
    </>
  )}
</NavLink>
      </div>

      {/* Invisible bridge for hover */}
      <div className="absolute top-full left-0 w-full h-5"></div>

      {/* Dropdown Card */}
      <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-out z-50">
        {/* <div className="w-[500px] rounded-xl bg-[#F0E8DB] border border-[#DCCFBC] shadow-[0_18px_40px_rgba(0,0,0,0.10)] p-6 flex gap-6"> */}
        <div className="w-[500px] rounded-xl bg-[#F0E8DB] border border-[#DCCFBC] shadow-[0_18px_40px_rgba(0,0,0,0.10)] p-6 grid grid-cols-[5fr_7fr] gap-6">
          
          {/* Left Column: Menu Items */}
          <div>
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="block py-2 text-[15px] text-[#4B4B4B] hover:text-[#8B4513] transition"
                  >
                    <div className="flex items-center gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]"></span>
                      <span className="transition-all duration-300 group-hover/item:translate-x-2">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Featured Banner */}
          {/* <div className="w-[58%] relative overflow-hidden rounded-xl"> */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[190px] object-cover rounded-xl transition duration-500 group-hover:scale-[1.03]"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>

            {/* Banner Text Content */}
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#E7D7B9]">
                {heading}
              </p>
              <h3
                className="text-white text-2xl mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {title}
              </h3>
              <p className="text-[#EDE6DD] text-sm mt-3 leading-6">
                {description}
              </p>
              <Link
                to={buttonLink}
                className="inline-flex items-center mt-5 rounded-full bg-[#8B5A2B] hover:bg-[#6D4420] px-5 py-2 text-white text-sm transition duration-300"
              >
                {buttonText}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MegaMenu;