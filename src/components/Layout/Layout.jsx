import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import Header from "../Header/Header";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
