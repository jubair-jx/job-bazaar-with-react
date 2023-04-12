import React from "react";
import Bannerlogo from "../../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="bg-[#F9F9FF] h-[50%]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-40 md:py-20 ">
        <div className="sm:ml-5 md:ml-0 ml-5 md:mt-0 sm:mt-10 mt-5 ">
          <h2 className="sm:text-4xl md:text-6xl text-4xl font-semibold">
            One Step <br /> Closer To Your{" "}
            <span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Dream Job
            </span>
          </h2>
          <p className="mt-8 md:text-base text-[#6f6f6f] sm:text-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-3 text-center  mb-2">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-screen" src={Bannerlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
