import React, { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <div>
    //   <nav className="bg-black p-4">
    //     <div className="container mx-auto flex justify-between items-center">
    //       {/* Logo Name */}
    //       <div className="text-white text-2xl font-bold">BookWallah</div>

    //       {/* Menu Links */}
    //       <ul className="flex space-x-8 text-white">
    //         <li className="hover:text-yellow-500">Home</li>
    //         <li className="hover:text-yellow-500">Course</li>
    //         <li className="hover:text-yellow-500">Contact</li>
    //         <li className="hover:text-yellow-500">About</li>
    //       </ul>
    //       <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
    //         Login
    //       </button>
    //     </div>
    //   </nav>
    // </div>


  <div>
  <nav className="bg-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo Name */}
      <div className="text-white text-2xl font-bold">
        BookWallah
      </div>

      {/* Centered Menu Links */}
      <ul className={`hidden md:flex space-x-8 text-white items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        <li className="hover:text-yellow-500">Home</li>
        <li className="hover:text-yellow-500">Course</li>
        <li className="hover:text-yellow-500">Contact</li>
        <li className="hover:text-yellow-500">About</li>
      </ul>

      {/* Search Bar */}
      <div className="relative hidden md:block mx-4 flex-grow max-w-xs">
        <input
          type="text"
          className="bg-gray-800 text-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-2 mr-4"
        >
          <svg
            className="h-4 w-4 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z"></path>
          </svg>
        </button>
      </div>

      {/* Right-side Login Button */}
      <div className="flex items-center">
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 hidden md:block">
          Login
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-2 px-4">
        <ul className="space-y-2 text-white text-center">
          <li className="hover:text-yellow-500">Home</li>
          <li className="hover:text-yellow-500">Course</li>
          <li className="hover:text-yellow-500">Contact</li>
          <li className="hover:text-yellow-500">About</li>
          <li>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
              Login
            </button>
          </li>
        </ul>

        {/* Mobile Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            className="w-full bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search..."
          />
        </div>
      </div>
    )}
  </nav>
</div>
  );
};

export default Navbar;
