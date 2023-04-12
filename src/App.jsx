import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import JobCategory from "./components/JobCategory/JobCategory";
import FeaturedJob from "./components/FeaturedJob/FeaturedJob";
import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </>
  );
}

export default App;
