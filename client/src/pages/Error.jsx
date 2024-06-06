import React from "react";
import { logo, error } from "../assets";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex justify-center items-center p-[100px]  ">
      <div className="grid grid-cols-1">
        <div className="flex justify-center items-center px-25">
          <img
            src={logo}
            alt="logo"
            className=" h-[200px] w-full rounded-lg "
          />
        </div>
        <div>
          <img src={error} alt="" className="  h-[350px] rounded-lg " />
        </div>
        <div className="flex justify-center items-center py-5">
          <h1 className=" text-[35px] font-bold text-red-600 ">
            Failed to send <br />
            request!
          </h1>
        </div>
        <div className="mt-2">
          <Link to="/success">
            <button className="w-full bg-blue-600 text-white rounded-md px-4 py-3 ">
              Try Again
            </button>
          </Link>
        </div>
        <div className="mt-2">
          <Link to="/">
            <button className=" border border-blue-600 border-bold w-full bg-white text-blue-600 rounded-md px-4 py-3 ">
              Contact us!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
