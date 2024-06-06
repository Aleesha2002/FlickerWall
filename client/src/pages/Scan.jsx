import React from "react";
import { scan } from "../assets";
import { Link } from "react-router-dom";

const Scan = () => {
  return (
    <div className="flex justify-center items-center p-[100px]  ">
      <div className="grid grid-cols-1">
        <div className="flex justify-center items-center py-5">
          <h1 className="text-[35px]  font-bold ">Scan QR code</h1>
        </div>
        <div>
          <Link to="/add" >
            <img src={scan} alt="" className="  h-[350px] rounded-lg " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Scan;
