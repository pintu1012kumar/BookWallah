import React from "react";

const Header = () => {
  return (
    <div className=" bg-white flex items-center justify-between p-6">
      {/* Left Div */}
      <div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-6xl font-bold text-gray-800">
            Welcome to the <span className="text-red-600">BookWallah..</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore our extensive collection of more than <span className="text-red-700 font-bold"> 20k+ Books,</span>offering
            comprehensive and reliable resources to enhance your learning
            journey across all subjects and grades.
          </p>
        </div>
        {/* search-bar */}
        <div className=" items-center space-x-2 p-10 pr-0">
          <input
            type="text"
            placeholder="Enter your email to login.."
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-3/4"
          />

          <div className="pt-3">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* Right Div */}
      <div className="flex-shrink-0">
        <img src="/book2.jpg" alt="Book" className="w-350 h-auto " />
      </div>
    </div>
  );
};

export default Header;
