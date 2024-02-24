import React, { useState } from "react";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems);
  };

  const categoryData = data?.card?.card;
  return (
    <div className="flex justify-center">
      <div className="w-6/12 bg-gray-50 shadow-md p-4 m-6 flex flex-col">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {categoryData?.title} ({categoryData?.itemCards?.length})
          </span>{" "}
          <span>⬇️</span>
        </div>

        {showItems && <CategoryItemList items={categoryData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
