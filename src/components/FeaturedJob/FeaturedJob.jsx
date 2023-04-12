import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowFeaturedJob from "./ShowFeaturedJob";

const FeaturedJob = () => {
  const [featureJob, setFeatureJob] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("FeaturedJob.json")
      .then((res) => res.json())
      .then((data) => setFeatureJob(data));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl mt-5 font-semibold">Featured Jobs</h2>
        <p className="text-sm mt-4 text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-2 px-4 py-4 md:px-20 md:py-20">
        {featureJob.slice(0, showAll ? 6 : 4).map((job) => (
          <ShowFeaturedJob key={job.id} job={job}></ShowFeaturedJob>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {!showAll && (
          <button
            onClick={handleShowAll}
            className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-8 py-4 text-center"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJob;
