import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const { restaurantData, restaurantCategory } =
    useRestaurantsMenu(resId) || {};

  return Object.keys(restaurantData).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-center">{restaurantData?.name}</h1>
      {restaurantCategory?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if(showIndex === index) setShowIndex(null)
            else setShowIndex(index)
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
