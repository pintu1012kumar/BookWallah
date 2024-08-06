import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center">Login!</h3>
         <div className="mt-7">
         <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email Address:</label>
            <input type="email" id="email" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
        <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input  type="password" id="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
         </div>
         <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-orange-600">Login</button>
         <p> not registered?  <Link to="/signup" className="text-blue-600 cursor-pointer underline" >Singup</Link> </p> 
         </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
