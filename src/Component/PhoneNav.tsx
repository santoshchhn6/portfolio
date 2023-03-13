import React, { useState } from "react";
import {
  AiOutlineBook,
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";

const PhoneNav = () => {
  const navBtn = ["home", "skill", "project", "contact"];

  const activeStyle = "bg-blue-200 text-blue-600";
  const [active, setActive] = useState("home");

  return (
    <div className="sm:hidden border-t-2 bg-white z-50  w-[100%] h-[60px] flex justify-around items-center px-20  border-b border-blue-600 fixed bottom-0  ">
      {navBtn.map((e, i) => {
        return (
          <a
            href={e === "home" ? "#" : `#${e}`}
            key={i}
            onClick={() => setActive(e)}
            className={`text-gray-600 p-2 text-2xl rounded-full ease-in-out duration-300  hover:bg-gray-200 active:scale-95 ${
              active === e ? activeStyle : null
            }`}
          >
            <Icon type={e} style={active === e ? "text-blue-600" : ""} />
          </a>
        );
      })}
    </div>
  );
};

const Icon = ({ type, style }: { type: string; style: string }) => {
  if (type === "home") return <AiOutlineHome className={style} />;
  else if (type === "skill") return <AiOutlineBook className={style} />;
  else if (type === "project") return <AiOutlineFolderOpen className={style} />;
  else if (type === "contact") return <AiOutlineMail className={style} />;
  else return <span>No Icons</span>;
};

export default PhoneNav;
