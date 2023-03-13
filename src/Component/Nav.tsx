import React from "react";

const Nav = () => {
  const btn = ["Home", "Skill", "Project", "Contact"];
  return (
    <div className="bg-white z-50  w-[100%] flex justify-between align-baseline px-20 max-sm:hidden  fixed top-0  ">
      <span className=" text-blue-600 p-2 font-bold cursor-pointer hover:text-blue-500 text-2xl text-gradient">
        SANTOSH
      </span>
      <div className="flex items-center">
        {btn.map((e, i) => (
          <a
            href={e === "Home" ? "#" : `#${e.toLowerCase()}`}
            key={i}
            className=" text-gray-600 p-2 font-bold hover:text-blue-500"
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
