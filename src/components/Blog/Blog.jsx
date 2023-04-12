import React from "react";
import VectorImg from "../../assets/All Images/Vector.png";

const Blog = () => {
  return (
    <div className="bg-[#7E90FE0D] h-40">
      <img className=" h-40 w-60" src={VectorImg} alt="" />

      <div className="">
        <h1 className=" relative bottom-40 text-center sm:text-9xl text-3xl md:text-4xl font-bold pt-16 ">
          Blogs
        </h1>
      </div>
      <div className="mt-16 grid md:grid-cols-3 lg:grid-cols-3  sm:grid-cols-1 gap-6 px-16 py-10">
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              When We Should Use Context API..?
            </h5>
            <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
              Context API is useful in various situations, for Example
              <ol className="list-decimal mt-5">
                <li>
                  When you have data that needs to be accessed by many
                  components at different levels of the component tree. Instead
                  of passing the data down through each level.
                </li>
                <li className="mt-5">
                  When you have data that needs to be updated frequently by
                  child components. By storing the data in a context,
                </li>
                <li className="mt-5">
                  When you want to create a reusable component that can be
                  easily customized by its users. You can use the Context API to
                  provide default values for a set of props
                </li>
              </ol>
            </p>
          </a>
        </div>
        {/*============ Second Card-=========== */}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              What is The Custom Hooks....?
            </h5>
            <div>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                In React, The Custom Hooks is a in React are reusable functions
                that encapsulate common logic and can be shared across multiple
                components in a React application. They enable you to extract
                component logic into reusable functions that can be called
                within other components.
              </p>
            </div>
          </a>
        </div>
        {/* =============Third Card ===============*/}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              What is the useRef.....?
            </h5>
            <div>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                useRef is a hook in React that provides a way to create a
                mutable reference to a DOM element or any other value that
                persists across component renders. Unlike useState, the value of
                a useRef reference does not trigger a re-render when it is
                updated. Instead, it allows you to directly access and
                manipulate the referenced value without re-rendering the
                component.
              </p>
            </div>
          </a>
        </div>
        {/* =================Fourth Card============== */}
        <div className="mx-auto">
          <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              What is the useMemo? Explain it.....
            </h5>
            <div>
              <p className="mb-2 text-gray-800 font-lg dark:text-gray-800">
                useMemo is a hook in React that allows you to memoize a value so
                that it is only re-computed when one of its dependencies has
                changed. Memoization is a technique used to optimize expensive
                computations by caching the result of a function call and
                returning the cached value when the function is called again
                with the same arguments. useMemo provides a similar optimization
                technique by caching the result of an expensive computation and
                only recomputing it when one of its dependencies has changed.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
};

export default Blog;
