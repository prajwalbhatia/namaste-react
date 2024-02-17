import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { resArray } from "../utils/mockData";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([...resArray]);

  const filterRestaurants = () => {
    const filter = listRestaurants.filter(
      (restaurant) => Number(restaurant?.info?.avgRating) > 4
    );

    setListRestaurants([...filter]);
  };
  return (
    <div className="body">
      <div className="search">Search</div>

      <button className="filter-btn" onClick={filterRestaurants}>
        Top rated restaurants
      </button>
      <div className="res-container">
        {listRestaurants?.map((resData) => (
          <RestaurantCard key={resData?.info?.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
