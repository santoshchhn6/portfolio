import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const PhoneNav = () => {
  const navBtn = [
    {
      title: "home",
      icon: "AiOutlineHome",
    },
    {
      title: "about",
      icon: "AiOutlineUser",
    },
    {
      title: "skill",
      icon: "AiOutlineBook",
    },
    {
      title: "project",
      icon: "AiOutlineFolderOpen",
    },
    {
      title: "contact",
      icon: "AiOutlineMail",
    },
  ];

  const activeStyle = "bg-blue-200 text-blue-500";
  const [active, setActive] = useState("home");

  return (
    <div className="sm:hidden border-t-2 bg-white z-50  w-[100%] h-[60px] flex justify-around items-center px-20  border-b border-blue-600 fixed bottom-0  ">
      {navBtn.map((e, i) => {
        const AiIcon = AiIcons[e.icon];
        return (
          <a
            href={e.title === "home" ? "#" : `#${e.title}`}
            key={i}
            onClick={() => setActive(e.title)}
            className={`text-gray-600 p-2 text-2xl rounded-full ease-in-out duration-300 hover:text-blue-500 hover:bg-gray-200 active:scale-95 ${
              active === e.title ? activeStyle : null
            }`}
          >
            <AiIcon />
          </a>
        );
      })}
    </div>
  );
};

export default PhoneNav;
