import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../utilities/FakeDb";
import toast, { Toaster } from "react-hot-toast";
import VectorImg from "../../assets/All Images/Vector.png";

const JobDetails = () => {
  const detailsId = useParams();

  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("/FeaturedJob.json")
      .then((res) => res.json())
      .then((data) => {
        const jobData = data.find((job) => job.id == detailsId.id);
        setJob(jobData);
      });
  }, []);

  const handleApplyJob = (id) => {
    addToDb(id);
    toast.success("Your Job is Applied, You'll Chill Now 😎");
  };
  const {
    job_description,
    id,
    job_respon,
    educational_requirements,
    experiences,
    salary,
    job_title,
    email,
    phone,
    location,
    contact_info,
  } = job;
  return (
    <div>
      <div className=" bg-[#7E90FE0D] h-40">
        <img className=" h-40 w-60" src={VectorImg} alt="" />
        <div className="text-3xl relative bottom-44 text-center font-bold ">
          <h2 className="pt-20 ">Job Details</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 mt-8 grid-cols-1 md:grid-cols-2 gap-10 px-6 py-0 md:px-32 md:py-20">
        <div className="text-[#757575]">
          <p>
            {" "}
            <span className="text-black font-semibold text-base">
              Job Description :
            </span>{" "}
            {job_description}
          </p>
          <p className="mt-8">
            {" "}
            <span className="text-black font-semibold text-base">
              Job Responsibility :
            </span>{" "}
            {job_respon}
          </p>
          <h3 className="mt-5">
            {" "}
            <span className="text-black font-semibold text-base mt-4">
              Educational Requirements :
            </span>{" "}
          </h3>
          <p className="mt-3">
            {" "}
            <span>{educational_requirements}</span>
          </p>
          <h4 className="mt-5">
            <span className="text-black font-semibold text-base">
              Experiences:
            </span>
          </h4>
          <p className="mt-2">{experiences}</p>
        </div>
        <div className="md:ml-10 ml-0">
          <a className="block md:w-96 w-80 p-6 bg-white border border-gray-200 rounded-lg shadow  bg-[#7e8ffe30]">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              Job Details
            </h5>
            <hr className="bg-[#7e8ffe74] mt-5 h-[2px]" />
            <div>
              <h4 className="text-[#474747] mt-8">
                {" "}
                <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                <span className="text-[#474747] font-bold">Salary : </span>{" "}
                <span className="text-[#757575] ml-2">
                  {" "}
                  {salary} (Per Month)
                </span>
              </h4>
              <h4 className="mt-2 text-[#474747]">
                {" "}
                <FontAwesomeIcon icon={faBookAtlas}></FontAwesomeIcon>{" "}
                <span className="text-[#474747] font-bold">Job Title : </span>{" "}
                <span className="text-[#757575] ml-2"> {job_title}</span>
              </h4>

              <p className="text-black font-bold mt-8">Contact Information</p>
            </div>

            <hr className="bg-[#7e8ffe74] mt-5 h-[2px]" />

            <div className="mt-5">
              <h4 className="mt-2 text-[#474747]">
                {" "}
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{" "}
                <span className="text-[#474747] font-bold ml-1">Phone : </span>{" "}
                <span className="text-[#757575] ml-2"> {phone}</span>
              </h4>

              <h4 className="mt-2 text-[#474747]">
                {" "}
                <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>{" "}
                <span className="text-[#474747] font-bold ml-1">E-mail : </span>{" "}
                <span className="text-[#757575] ml-2"> {email}</span>
              </h4>

              <h4 className="mt-2 text-[#474747]">
                {" "}
                <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>{" "}
                <span className="text-[#474747] font-bold ml-1">
                  Address :{" "}
                </span>{" "}
                <span className="text-[#757575] ml-2"> {location}</span>
              </h4>
            </div>
          </a>

          <div className="mt-5">
            <button
              onClick={() => handleApplyJob(id)}
              className="  md:w-96  w-80 py-4 font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  rounded-md text-white"
            >
              Apply Now
            </button>
            <Toaster></Toaster>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
