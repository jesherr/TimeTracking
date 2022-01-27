import React from "react";
import Ellipsis from "../images/icon-ellipsis.svg";
const Cart = ({ imagen, bg }) => {

  console.log(imagen);
  console.log(bg);

  return (
    <>
      <div id='#cart' className={`rounded-3xl w-72 max-w-full m-auto container ${bg}`}
      >
        <div className="flex justify-end h-14 px-7  relative">
          <img
            src={imagen}
            alt="imagen de usuario"
            className=" absolute top-0 right-5 z-10"
          />
        </div>

        <div className="py-5 px-7 cart_list rounded-3xl z-20 relative">
          <div className="text-white flex flex-row items-center   justify-between ">
            <p>Work</p>
            <span>
              <img src={Ellipsis} />
            </span>
          </div>
          <div className="md:mt-5  text-white flex flex-row items-center justify-between text-4xl gap-2 md:flex-col md:items-start">
            <span className="horas"> 32hrs</span>
            <p className="text-lg">Last week - 36hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
