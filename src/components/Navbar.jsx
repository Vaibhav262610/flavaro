import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col nav justify-around bg-gray-300 p-4 items-center">
        <div className="flex md:flex-row  items-center md:gap-12 flex-col">
        <div>
          <h1 className="text-2xl md:text-3xl font-black uppercase">Flavaro Foods</h1>
        </div>
        <div>
          <h2 className="text-xl ">{new Date().toUTCString().slice(0, 16)}</h2>
        </div>
        </div>
        <div className="md:mt-0 mt-2">
          <input type="search" className="w-68 md:w-72 px-2 rounded py-2 outline-none" placeholder="Search your food here" autoComplete="off" name="search" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
