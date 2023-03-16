import React, { useState } from "react";

const Nav = () => {
  const btn = ["Home", "Skill", "Project", "Contact"];
  const [active, setActive] = useState("Home");
  const activeStyle = "text-blue-500";
  return (
    <div className="bg-white z-50  w-[100%] flex justify-between align-baseline px-20 max-sm:hidden  fixed top-0  ">
      <span className=" text-blue-600 p-2 font-bold cursor-pointer hover:text-blue-500 text-2xl text-gradient">
        SANTOSH
      </span>
      <div className="flex items-center gap-3">
        {btn.map((e, i) => (
          <a
            href={e === "Home" ? "#" : `#${e.toLowerCase()}`}
            key={i}
            className={` text-gray-600 py-[2px] font-bold hover:text-blue-500  ${
              active === e ? activeStyle : ""
            }`}
            onClick={() => setActive(e)}
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
