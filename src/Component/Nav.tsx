import React from "react";

const Nav = () => {
  const btn = ["Home", "About", "Skill", "Project", "Contact"];
  return (
    <div className=" flex justify-between align-baseline px-20 max-sm:hidden">
      <span className=" text-blue-600 p-2 font-bold cursor-pointer hover:text-blue-500 text-2xl">
        SANTOSH
      </span>
      <div className="flex items-center">
        {btn.map((e, i) => (
          <a
            href=""
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
