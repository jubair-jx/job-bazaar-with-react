import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header/Header";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FeaturedJob from "./components/FeaturedJob/FeaturedJob";
import Statistics from "./components/Statistics/Statistics";
import Banner from "./components/Banner/Banner";
import JobCategory from "./components/JobCategory/JobCategory";
import Blog from "./components/Blog/Blog";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";
import AppliedJob from "./components/AppliedJob/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "appliedjob",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("/FeaturedJob.json"),
      },
      {
        path: "jobdetail/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch("/FeaturedJob.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
