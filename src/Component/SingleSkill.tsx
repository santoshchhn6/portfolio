import React from "react";
type Props = {
  logo: string;
  title: string;
};
const SingleSkill = ({ logo, title }: Props) => {
  return (
    <div className="relative">
      <div className="border-2 border-blue-600 w-[40%] h-[5rem] rounded-md overflow-hidden">
        <div className="bg-gray-400 h-screen w-[45%]"></div>
      </div>
      <div className="absolute top-0 left-0 p-2 flex items-center gap-2">
        <img
          src={logo}
          alt=""
          className="w-[4rem] aspect-square object-contain"
        />
        <span className="text-xl font-bold text-gray-700">{title}</span>
      </div>
    </div>
  );
};

export default SingleSkill;
