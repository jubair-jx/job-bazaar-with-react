import React from "react";

const ShowJobCategory = ({ job }) => {
  const { title, available, icon } = job;
  return (
    <div>
      <div className="bg-[#7e8ffe21] h-48 w-60 py-5 rounded-lg mt-5">
        <div className="ml-6 mt-4">
          <img className="w-12 rounded-4xl" src={icon} alt="" />
          <h2 className="text-lg text-[#383838] mt-3 font-semibold">{title}</h2>
          <p className="mt-2 text-base text-[#A3A3A3]">{available}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowJobCategory;
