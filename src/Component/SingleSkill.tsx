import React from "react";
import { Pie, PieChart } from "recharts";

type Props = {
  logo: string;
  title: string;
  percentage: number;
};

const SingleSkill = ({ logo, title, percentage }: Props) => {
  return (
    <div className=" bg-gray-200 rounded-xl min-w-[400px]  flex flex-col items-center">
      <div className="relative w-[200px] ">
        <span className="absolute top-[43%] left-[38%] text-3xl font-bold text-gray-500">
          {percentage}%
        </span>
        <PieChart width={200} height={200}>
          <Pie
            data={[{ percentage: 100 }]}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#fff"
            dataKey="percentage"
            stroke="none"
          />
          <Pie
            data={[{ percentage }]}
            cx={100}
            cy={100}
            startAngle={20}
            endAngle={-3.6 * percentage}
            innerRadius={60}
            outerRadius={80}
            cornerRadius={20}
            fill="#2563eb"
            dataKey="percentage"
            stroke="none"
          ></Pie>
        </PieChart>
      </div>

      <div className="flex justify-center items-center  mb-3">
        <img
          src={logo}
          alt=""
          className="w-[1rem] aspect-square object-contain"
        />
        <p className="ml-2 text-lg  font-bold text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
