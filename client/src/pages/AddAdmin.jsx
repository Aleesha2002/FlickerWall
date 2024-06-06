import React from "react";
import { launch } from "../assets";
import { Link } from "react-router-dom";

const AddAdmin = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-[100px]  ">
        <div className="grid grid-cols-1">
          <div>
            <img src={launch} alt="" className="  h-[350px] rounded-lg " />
          </div>
          <div className="mt-7">
            <h1 className="text-[20px] ">Screenname</h1>
            <input
              type="text"
              placeholder="screen name"
              className="border-b border-solid rounded-md w-full pr-4 px-4 py-3 focus:border-b  "
            />
          </div>
          <div className="mt-7">
            <Link to="/error">
              <button className="w-full bg-blue-600 text-white rounded-md px-4 py-3 ">
                Send Request to admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
