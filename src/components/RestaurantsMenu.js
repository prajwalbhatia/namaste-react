import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const restaurantData = useRestaurantsMenu(resId);

  return Object.keys(restaurantData).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-page">
      <h1>{restaurantData?.name}</h1>
    </div>
  );
};

export default RestaurantsMenu;
