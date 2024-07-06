import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";

const CardItem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 ">
        <MdDelete onClick={() => dispatch(removeFromCart({id,img,price,name,qty}))} className="absolute right-7 text-xl hover:text-red-500 text-gray-600 cursor-pointer" />
        <img src={img} alt="" className="w-[50px] h-[50px]" />
        <div className="leading-5">
          <h2 className="font-bold my-1 text-gray-800">{name}</h2>
          <div className="flex  gap-2 ">
            <div>
              <h2 className="text-green-500 font-bold">₹{price}</h2>
            </div>
            <div className="flex gap-2 justify-center items-center absolute right-7">
              <AiOutlinePlus className="rounded-md text-xl p-1 transition-all ease-linear border-gray-600  text-gray-600 border-2 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer" />
              <span>{qty}</span>
              <AiOutlineMinus className="rounded-md text-xl p-1 transition-all ease-linear border-gray-600  text-gray-600 border-2 hover:text-white hover:bg-red-500 hover:border-none cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
