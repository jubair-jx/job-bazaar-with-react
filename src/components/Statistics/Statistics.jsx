import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import VectorImg from "../../assets/All Images/Vector.png";

const data = [
  { name: "Assignment-01", value: 60 },
  { name: "Assignment-02", value: 60 },
  { name: "Assignment-03", value: 58 },
  { name: "Assignment-04", value: 60 },
  { name: "Assignment-05", value: 59 },
  { name: "Assignment-06", value: 60 },
  { name: "Assignment-07", value: 60 },
  { name: "Assignment-08", value: 60 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF19C2",
  "#FF19AA",
  "#FF1977",
];

const Statistics = () => {
  return (
    <>
      <div className="bg-[#7E90FE0D] h-40">
        <img className=" h-40 w-60" src={VectorImg} alt="" />
        <div>
          <h1 className="text-center relative bottom-40 text-2xl underline font-bold pt-14">
            Assignments Analytics ....
          </h1>
        </div>
      </div>
      <div className=" md:justify-center md:flex flex justify-center">
        <PieChart width={800} height={500}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </>
  );
};

export default Statistics;
