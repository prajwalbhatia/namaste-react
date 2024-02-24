import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const {restaurantData , restaurantCategory} = useRestaurantsMenu(resId) || {};

  return Object.keys(restaurantData).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-10">
      <h1 className="font-bold text-2xl text-center">{restaurantData?.name}</h1>
      {
        restaurantCategory?.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category}/>)
      }
    </div> 
  );
};

export default RestaurantsMenu;
