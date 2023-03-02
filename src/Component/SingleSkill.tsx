import React from "react";
type Props = {
  logo: string;
  title: string;
  percentage: number;
};
const SingleSkill = ({ logo, title, percentage }: Props) => {
  console.log(percentage);
  return (
    <div className="relative min-w-[300px] max-w-[]">
      <div className="bg-white border-2 border-blue-300 h-[2rem] rounded-full overflow-hidden ">
        <div style={{ height: "100%", width: percentage + "%" }}>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-100 h-[100%] rounded-full progress"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 pt-[0.1rem]  flex items-center gap-2 pl-5">
        <img
          src={logo}
          alt=""
          className="w-[1rem] aspect-square object-contain"
        />
        <span className="text-lg  text-gray-600">{title}</span>
      </div>
    </div>
  );
};

export default SingleSkill;
