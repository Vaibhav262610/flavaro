import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  return (
    <>
      <div
        className={`fixed z-50 right-0 top-0 w-full lg:w-[20vw] p-5 bg-white h-full transition-all duration-500 ease-in-out ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex mb-3 justify-between items-center my-3">
          <span className="font-bold text-2xl text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-700 hover:border-red-700 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CardItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h1 className="text-xl font-semibold text-red-600 my-5">
            Your Cart is Empty ☹️
          </h1>
        )}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800 text-lg">Items : </h3>
          <h3 className="font-semibold text-gray-800 text-lg">
            Total Amount :{" "}
          </h3>
          <hr className="lg:w-[18vw] w-[90vw] my-2" />
          <button className="bg-green-500 mb-5 font-bold px-3 py-2 text-white rounded w-[90vw] lg:w-[18vw]">
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className=" rounded-full bg-white shadow-md text-5xl p-3 bottom-10 fixed cursor-pointer  right-10"
      />
    </>
  );
};

export default Cart;
