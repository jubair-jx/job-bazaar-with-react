import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ShowJobCategory from "./ShowJobCategory";

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("JobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <div>
        <div className="text-center mt-12">
          <h1 className="text-4xl font-semibold">Job Category List</h1>
          <p className="text-sm mt-5 text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 justify-center  sm:grid-cols-1 lg:grid-cols-4  sm:px-0 sm:py-0  lg:px-40 lg:py-20 md:px-40 md:py-20">
        {category.map((job) => (
          <ShowJobCategory job={job} key={job.id}></ShowJobCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
