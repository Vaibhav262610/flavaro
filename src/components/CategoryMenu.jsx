import React from "react";

const CategoryMenu = () => {
  return (
    <>
      <div className="mx-3 md:mx-6">
        <h3 className="text-2xl uppercase font-semibold pt-12">Find the best food.</h3>
        <div className="flex my-5 md:overflow-x-hidden  overflow-x-scroll gap-3">
            <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:text-white  hover:bg-green-500 ">All</button>
            <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:text-white  hover:bg-green-500 ">Lunch</button>
            <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:text-white  hover:bg-green-500 ">Breakfast</button>
            <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:text-white  hover:bg-green-500 ">Dinner</button>
            <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:text-white  hover:bg-green-500 ">Snacks</button>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
