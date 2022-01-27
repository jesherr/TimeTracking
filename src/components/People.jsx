import React from "react";
import User from "../images/image-jeremy.png";
const People = () => {
  return (
    <div className="people rounded-3xl container max-w-full m-auto md:row-span-2 md:h-full">
      <div className="flex items-center gap-x-2 rounded-3xl cart_people py-5 px-7 md:flex-col md:items-start md:justify-center md:h-80">
        <div className=" ">
          <img src={User} alt="imagen de usuario" className="inline-block w-14 max-w-full rounded-full border-4 border-white md:w-20 "/>
        </div>
        <div>
          <p className="text-white md:text-xl">Report for</p>
          <h2 className="text-white ">Jeremy Robson</h2>
        </div>
      </div>
      <div className="py-5 px-7">
        <ul className="flex justify-between gap-y-1 md:flex-col">
          <li className="text-white hover:cursor-pointer">Daily</li>
          <li className="text-white hover:cursor-pointer"> weekly</li>
          <li className="text-white hover:cursor-pointer">Monthly</li>
        </ul>
      </div>
    </div>
  );
};

export default People;
