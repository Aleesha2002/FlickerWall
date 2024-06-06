import React from "react";
import { launch } from "../assets";
import { Link } from "react-router-dom";

const Launch = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-[100px]  ">
        <div className="grid grid-cols-1">
          <div>
            <img src={launch} alt="" className="  h-[350px] rounded-lg " />
          </div>
          <div className="py-7 ">
            <h1 className="text-[25px] font-bold ">
              Enjoy your hassle-free journey
            </h1>
            <div>
              <Link to="/">
                <p className="underline underline-offset-2 flex justify-center items-center text-cyan-500 text-underline cursor-pointer">
                  Learn how to add screen
                </p>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] ">
              Enter your unique organisation code
            </h1>
            <input
              type="text"
              placeholder="xxxx"
              className="border-b border-solid rounded-md w-full pr-4 px-4 py-3 focus:border-b  "
            />
          </div>
          <div className="py-5 ">
            <h1 className="text-[20px] ">Screen name</h1>
            <input
              type="text"
              placeholder="screen name"
              className="border-black border-solid rounded-md w-full pr-4 px-4 py-3 focus:border-b  "
            />
          </div>
          <div className="mt-7">
            <Link to="/success">
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

export default Launch;
