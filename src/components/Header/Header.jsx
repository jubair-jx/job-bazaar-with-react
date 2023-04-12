import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#9873FF0D] lg:pl-40 border-[1px]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-2xl font-bold leading-relaxed inline-block mr-10 py-3 whitespace-nowrap uppercase text-black"
            >
              JOB BAZAAR
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-[#7E90FE]"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-[#060505]"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/statistics"
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-[#7E90FE]"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-[#060505]"></i>
                  <span className="ml-2">Statistics</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/appliedjob"
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-[#7E90FE]"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-[#000000]"></i>
                  <span className="ml-2">Applied Jobs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="px-3 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-[#7E90FE]"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-[#0a0a0a] "></i>
                  <span className="ml-2">Blog</span>
                </Link>
              </li>

              <div className="lg:ml-72">
                <button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-8 py-4 text-center">
                  Start Applying
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
