import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    //     <div className="mt-7">
    //     <div className="mb-4">
    //        <label className="block text-sm font-bold mb-2" htmlFor="email">Email Address:</label>
    //        <input type="email" id="email" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
    //    </div>
    //    <div className="mb-6">
    //        <label className="block text-sm font-bold mb-2" htmlFor="password">Password:</label>
    //        <input  type="password" id="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
    //    </div>
    //     </div>

    <div className="flex items-center justify-center h-screen">
      <div className=" bg-gray-700 p-10  rounded-lg shadow-lg">
        <div className="relative p-7">
          <Link
            to="/"
            className="absolute top-3 right-0  text-white p-1  "
          >
            ✕
          </Link>
        </div>

        <h3 className="font-bold text-2xl text-center">Signup!</h3>

        <div className="mb-6 mt-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Username:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Username"
            className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
          <p>
            {" "}
            Go to Homepage?{" "}
            <Link to="/"
              className="text-blue-600 cursor-pointer underline"
            //   onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Home
            </Link>
            {/* <Login />{" "} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
