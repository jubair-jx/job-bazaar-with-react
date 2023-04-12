import React from "react";
import { Link } from "react-router-dom";

const ShowFeaturedJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_type,
    location,
    job_time,
    salary,
    job_description,
    educational_requirements,
    experiences,
    contact_info,
  } = job;
  return (
    <div className="mt-3">
      <div>
        <div className="block md:h-[390px] lg:h-[390px] h-[410px]  p-6 bg-white border border-gray-200 rounded-lg shadow  ">
          <div>
            <img className="w-40 rounded-2xl" src={company_logo} alt="" />
            <h2 className="text-2xl mt-3 text-[#474747] font-semibold">
              {job_title}
            </h2>
            <h3 className="text-xl font-medium mt-2 text-[#5b5a5a]">
              {company_name}
            </h3>
            <div className="flex gap-4 mt-5 mb-5">
              <h4 className="border-[#7E90FE] text-[#7E90FE] border-[1px] rounded-md px-3 py-1">
                {job_type}
              </h4>
              <h4 className="border-[#7E90FE] text-[#7E90FE] border-[1px] rounded-md px-3 py-1">
                {job_time}
              </h4>
            </div>
            <div className="flex gap-4 text-[#757575]">
              <p> 📍 {location}</p>
              <p> $Salary : {salary}</p>
            </div>

            <div className="mt-10">
              <Link
                to={`/jobdetail/${id}`}
                className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2 text-center  mb-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFeaturedJob;
