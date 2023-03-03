import React from "react";
type Props = {
  logo: string;
  title: string;
  percentage: number;
};
const SingleSkill = ({ logo, title, percentage }: Props) => {
  console.log(percentage);
  return (
    <div className="relative min-w-[300px]">
      <div className="bg-blue-100 border border-gray-900 h-[2rem] rounded-full overflow-hidden ">
        <div style={{ height: "100%", width: percentage + "%" }}>
          <div className="bg-white h-[100%] rounded-full progress"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 pt-[0.1rem]  flex items-center gap-2 pl-5">
        <img
          src={logo}
          alt=""
          className="w-[1rem] aspect-square object-contain"
        />
        <span className="ml-2 text-lg  text-gray-900">{title}</span>
      </div>
    </div>
  );
};

export default SingleSkill;
