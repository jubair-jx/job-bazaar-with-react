import React from "react";
import LocationLogo from "../../assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";

const ShowAppliedJob = ({ job }) => {
  const {
    job_description,
    company_logo,
    job_respon,
    educational_requirements,
    experiences,
    salary,
    id,
    company_name,
    job_title,
    email,
    phone,
    job_type,
    job_time,
    location,
    contact_info,
  } = job;

  return (
    <div className=" ">
      <div className="justify-center flex mt-5">
        <a className="flex flex-col justify-center items-center bg-white border h-[430px] md:h-56 border-gray-200 rounded-lg shadow md:flex-row w-[400px] md:w-[800px] lg:w-[800px]">
          <div className="">
            <img
              className=" w-44 sm:w-10 rounded-t-lg h-32 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg"
              src={company_logo}
              alt=""
            />
          </div>
          <div className=" flex flex-col sm:flex-col md:flex-row justify-between ml-16">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-base font-semibold text-[#474747fa]  ">
                {job_title}
              </h5>

              <h3 className="#757575 text-base text-[#757575] font-medium">
                {company_name}
              </h3>
              <div className="flex gap-4 mt-5 mb-5">
                <h4 className="border-[#7E90FE] text-[#7E90FE] border-[1px] rounded-sm px-3 py-1">
                  {job_type}
                </h4>
                <h4 className="border-[#7E90FE] text-[#7E90FE] border-[1px] rounded-sm px-3 py-1">
                  {job_time}
                </h4>
              </div>

              <div className="flex gap-4 text-[#757575]">
                <p>
                  {" "}
                  🔍<span className="ml-2">{location}</span>
                </p>
                <p> 💲 Salary : {salary}</p>
              </div>
            </div>

            <div>
              <button className="md:mt-20 md:ml-8 mt-5  ml-20">
                {" "}
                <Link
                  to={`/jobdetail/${id}`}
                  className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-3 py-2 text-center "
                >
                  View Details
                </Link>
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ShowAppliedJob;
