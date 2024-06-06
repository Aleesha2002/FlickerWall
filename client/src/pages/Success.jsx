import React from "react";
import { logo, success } from "../assets";
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
          <img src={success} alt="" className="  h-[350px] rounded-lg " />
        </div>
        <div className="flex justify-center items-center py-5">
          <h1 className=" text-[35px] font-bold text-green-600 ">
            Request send to <br />
            admin successfully!
          </h1>
        </div>
        <div className="mt-2">
          <Link to="/scan">
            <button className="w-full bg-blue-600 text-white rounded-md px-4 py-3 ">
              Add more screens
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
