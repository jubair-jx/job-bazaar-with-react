import React, { useEffect, useState } from "react";
import { getApplyJobFromLocalStr } from "../../utilities/FakeDb";
import { useLoaderData } from "react-router-dom";
import ShowAppliedJob from "./ShowAppliedJob";
import VectorImg from "../../assets/All Images/Vector.png";

const AppliedJob = () => {
  const localData = getApplyJobFromLocalStr();

  const getData = useLoaderData();
  const [jobs, setRemote] = useState([]);

  const [savedCart, setSavedCarts] = useState([]);

  useEffect(() => {
    let savedCarts = [];
    for (const id in localData) {
      const findData = getData.find((data) => data.id === id);
      if (findData) {
        savedCarts.push(findData);
      }
    }
    setRemote(savedCarts);
    setSavedCarts(savedCarts);
  }, [getData]);

  const filterRemoteJob = (id) => {
    const filterData = savedCart.filter((job) => job.job_type === id);

    setRemote(filterData);
  };

  return (
    <div className="bg-[#7E90FE0D] h-40">
      <img className=" h-40 w-60" src={VectorImg} alt="" />
      <h1 className="relative bottom-36  text-2xl  pt-10 font-bold text-center">
        Applied Job Here
      </h1>

      <div>
        <div className="flex justify-center md:justify-end gap-4 mt-5  md:px-72">
          <span className="text-md font-medium">Filter Jobs : </span>
          <h4
            onClick={() => filterRemoteJob("Remote")}
            className=" border-[#7E90FE] cursor-pointer hover:bg-[#7E90FE] hover:text-white duration-300 font-semibold text-[#7E90FE] border-[2px] rounded-md px-3 py-1"
          >
            Remote
          </h4>
          <h4
            onClick={() => filterRemoteJob("Onsite")}
            className="border-[#7E90FE] cursor-pointer hover:bg-[#7E90FE] hover:text-white duration-300 font-semibold text-[#7E90FE] border-[2px] rounded-md px-3 py-1"
          >
            Onsite
          </h4>
        </div>
        {jobs?.map((job) => (
          <ShowAppliedJob job={job} key={job.id}></ShowAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
